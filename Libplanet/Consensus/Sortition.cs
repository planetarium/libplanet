using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Libplanet.Blocks;

namespace Libplanet.Consensus
{
    internal static class Sortition
    {
        internal static ulong SplitMix64(ulong seed)
        {
            unchecked
            {
                ulong rand = seed + 0x9e3779b97f4a7c15;
                rand = (rand ^ (rand >> 30)) * 0xbf58476d1ce4e5b9;
                rand = (rand ^ (rand >> 27)) * 0x94d049bb133111eb;
                return rand ^ (rand >> 31);
            }
        }

        internal static BigInteger RandomThreshold(ulong seed, BigInteger maxThreshold)
        {
            BigInteger rand = new BigInteger(SplitMix64(seed));
            BigInteger threshold = BigInteger.Divide(
                BigInteger.Multiply(rand, maxThreshold),
                new BigInteger(ulong.MaxValue) + BigInteger.One);
            return threshold;
        }

        internal static ImmutableArray<Validator> Sample(
            IEnumerable<Validator> validatorSet,
            byte[] seedBytes,
            int sampleSize = 1)
        {
            if (!validatorSet.Any())
            {
                throw new EmptyPopulationException();
            }

            ulong seed = BitConverter.ToUInt64(seedBytes, 0);
            BigInteger[] thresholds = new BigInteger[sampleSize];
            BigInteger totalPower = validatorSet.Aggregate(
                BigInteger.Zero, (total, next) => total + next.Power ?? BigInteger.Zero);
            if (totalPower.Equals(BigInteger.Zero))
            {
                return Sample(
                    validatorSet.Select(val => new Validator(val.PublicKey, BigInteger.One)),
                    seedBytes,
                    sampleSize).Select(val => new Validator(val.PublicKey, BigInteger.Zero))
                    .ToImmutableArray();
            }

            for (int i = 0; i < sampleSize; i++)
            {
                thresholds[i] = RandomThreshold(seed, totalPower);
            }

            Array.Sort(thresholds);
            Validator[] samples = new Validator[sampleSize];
            BigInteger cumulative = BigInteger.Zero;
            int sampled = 0;

            foreach (Validator validator in validatorSet)
            {
                while (thresholds[sampled] < cumulative + validator.Power)
                {
                    samples[sampled] = validator;
                    sampled += 1;
                    if (sampled == sampleSize)
                    {
                        return samples.ToImmutableArray();
                    }
                }

                cumulative += validator.Power ?? BigInteger.Zero;
            }

            throw new InsufficientSampleException(sampleSize, sampleSize - sampled);
        }

        internal static Validator SampleProposer(
            IEnumerable<Validator> validatorSet,
            BlockProof? lastProof,
            long height,
            int round)
        {
            byte[] seed;
            if (lastProof is { } proof)
            {
                seed = HashDigest<SHA512>.DeriveFrom(
                proof.Hash.Concat(BitConverter.IsLittleEndian
                ? BitConverter.GetBytes(height).Reverse()
                .Concat(BitConverter.GetBytes(round).Reverse())
                : BitConverter.GetBytes(height)
                .Concat(BitConverter.GetBytes(round)))
                .ToArray()).ToByteArray();
            }
            else
            {
                seed = HashDigest<SHA512>.DeriveFrom(
                (BitConverter.IsLittleEndian
                ? BitConverter.GetBytes(height).Reverse()
                .Concat(BitConverter.GetBytes(round).Reverse())
                : BitConverter.GetBytes(height)
                .Concat(BitConverter.GetBytes(round)))
                .ToArray()).ToByteArray();
            }

            Validator proposer = Sample(validatorSet, seed)[0];
            return proposer;
        }
    }
}
