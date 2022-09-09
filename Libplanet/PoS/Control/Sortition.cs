using System;
using System.Numerics;
using Libplanet.PoS.Model;

namespace Libplanet.PoS.Control
{
    internal static class Sortition
    {
        internal static ulong SplitMix64(ulong seed)
        {
            ulong rand = seed + 0x9e3779b97f4a7c15;
            rand = (rand ^ (rand >> 30)) * 0xbf58476d1ce4e5b9;
            rand = (rand ^ (rand >> 27)) * 0x94d049bb133111eb;
            return rand ^ (rand >> 31);
        }

        internal static BigInteger RandomThreshold(ulong seed, BigInteger maxThreshold)
        {
            BigInteger rand = new BigInteger(SplitMix64(seed));
            BigInteger threshold = BigInteger.Divide(
                BigInteger.Multiply(rand, maxThreshold),
                new BigInteger(ulong.MaxValue) + BigInteger.One);
            return threshold;
        }

        internal static ValidatorPower[] Execute(
            ValidatorSet validatorSet,
            byte[] seedBytes,
            int sampleSize = 1)
        {
            ulong seed = BitConverter.ToUInt64(seedBytes, 0);
            BigInteger[] thresholds = new BigInteger[sampleSize];
            for (int i = 0; i < sampleSize; i++)
            {
                thresholds[i] = RandomThreshold(seed, validatorSet.TotalConsensusToken.RawValue);
            }

            Array.Sort(thresholds);
            ValidatorPower[] samples = new ValidatorPower[sampleSize];
            BigInteger cumulative = BigInteger.Zero;
            int undrawn = 0;

            foreach (ValidatorPower validatorPower in validatorSet.Set)
            {
                while (thresholds[undrawn] < cumulative + validatorPower.ConsensusToken.RawValue)
                {
                    samples[undrawn] = validatorPower;
                    undrawn += 1;
                    if (undrawn == sampleSize)
                    {
                        return samples;
                    }
                }

                cumulative += validatorPower.ConsensusToken.RawValue;
            }

            throw new InsufficientDrawSortitionException(sampleSize, sampleSize - undrawn);
        }
    }
}
