using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;

namespace Libplanet.Crypto
{
    /// <summary>
    /// Represents a proof that validators submits to be a proposer.
    /// Once decided, it can be a source of random seed.
    /// </summary>
    public struct Proof : IBencodable, IEquatable<Proof>, IComparable<Proof>, IComparable
    {
        private readonly ImmutableArray<byte> _piBytes;
        private ImmutableArray<byte>? _hash;

        public Proof(IReadOnlyList<byte> piBytes)
        {
            _piBytes = piBytes.ToImmutableArray();
            _hash = null;
        }

        public Proof(IValue bencoded)
            : this(bencoded is Binary piBytes
                  ? piBytes
                  : throw new ArgumentException(
                      $"Given {nameof(bencoded)} must be of type " +
                      $"{typeof(Binary)}: {bencoded.GetType()}",
                      nameof(bencoded)))
        {
        }

        public Proof(Binary bencoded)
            : this(bencoded.ByteArray)
        {
        }

        /// <inheritdoc cref="IBencodable.Bencoded"/>
        public IValue Bencoded => new Binary(ByteArray);

        /// <summary>
        /// An immutable byte array that represent this <see cref="Proof"/>.
        /// </summary>
        /// <remarks>This is immutable.
        /// For a mutable array, call <see cref="ToByteArray()"/> method.
        /// </remarks>
        /// <seealso cref="ToByteArray()"/>
        public ImmutableArray<byte> ByteArray => _piBytes;

        /// <summary>
        /// Hash of the <see cref="Proof"/>.
        /// It can be used as a random hash that can be verified.
        /// </summary>
        public ImmutableArray<byte> Hash
        {
            get
            {
                if (_hash is { } hash)
                {
                    return hash;
                }
                else
                {
                    _hash = CryptoConfig.ConsensusCryptoBackend
                        .ProofToHash(ToByteArray()).ToImmutableArray();
                    return (ImmutableArray<byte>)_hash;
                }
            }
        }

        /// <summary>
        /// Integer form of <see cref="Hash"/>.
        /// It can represent the random integer that can be verified.
        /// Maximum value of it follows the space of <see cref="Hash"/>.
        /// </summary>
        public BigInteger HashInt => HashToInt(Hash);

        /// <summary>
        /// Random seed that can be derived by <see cref="Proof"/>.
        /// It's calculated by taking 4 bytes of <see cref="Hash"/>,
        /// and converting it into int.
        /// </summary>
        public int Seed
        {
            get
            {
                byte[] seed = Hash.ToArray().Take(4).ToArray();
                return BitConverter.IsLittleEndian
                    ? BitConverter.ToInt32(seed.Reverse().ToArray(), 0)
                    : BitConverter.ToInt32(seed, 0);
            }
        }

        /// <summary>
        /// Gets a mutable byte array that represent this <see cref="Proof"/>.
        /// </summary>
        /// <returns>A new mutable array which represents this
        /// <see cref="Proof"/>.
        /// Since it is created every time the method is called,
        /// any mutation on that does not affect internal states of
        /// this <see cref="Proof"/>.</returns>
        /// <seealso cref="ByteArray"/>
        public byte[] ToByteArray() => ByteArray.ToArray();

        /// <summary>
        /// Verifies <see cref="Proof"/> with given <paramref name="publicKey"/>
        /// and <paramref name="payload"/>.
        /// </summary>
        /// <param name="publicKey">
        /// <see cref="PublicKey"/> corresponding to the <see cref="PrivateKey"/>
        /// that has been used when generating the <see cref="Proof"/>
        /// by <see cref="PrivateKey.Prove(IEnumerable{byte})"/>.
        /// </param>
        /// <param name="payload">
        /// Payload that has been used when generating the <see cref="Proof"/>
        /// by <see cref="PrivateKey.Prove(IEnumerable{byte})"/>.
        /// </param>
        /// <returns><c>true</c> if the <see cref="Proof"/> proves authenticity of
        /// the <paramref name="payload"/> with the <paramref name="publicKey"/>.
        /// Otherwise <c>false</c>.</returns>
        /// <seealso cref="PrivateKey.Prove(IEnumerable{byte})"/>
        /// <seealso cref="PublicKey.VerifyProof(byte[], Proof)"/>
        public bool Verify(PublicKey publicKey, byte[] payload)
            => publicKey.VerifyProof(payload, this);

        /// <summary>
        /// Draws expected number under given power portion.
        /// It represents result of quantile function of binomial distribution
        /// where quantile is portion of <see cref="Hash"/>, n is <paramref name="power"/>,
        /// and p is <paramref name="expectedSize"/> divided by <paramref name="totalPower"/>.
        /// </summary>
        /// <param name="expectedSize">
        /// Expected size of winnings.
        /// </param>
        /// <param name="power">
        /// Power that can be interpreted as the number of lots owns.
        /// </param>
        /// <param name="totalPower">
        /// Total power that can be interpreted as the number of total lots.
        /// </param>
        /// <returns>
        /// Expected number of drawn lots under given condition.
        /// </returns>
        public BigInteger Draw(int expectedSize, BigInteger power, BigInteger totalPower)
        {
            double targetProb
                = (double)HashInt
                / (double)HashToInt(Enumerable.Repeat(byte.MaxValue, 64).ToImmutableArray());

            return BinomialQuantileFunction(targetProb, expectedSize / (double)totalPower, power);
        }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(Proof other)
            => ByteArray.Equals(other.ByteArray);

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object? obj)
            => obj is Proof otherProof && Equals(otherProof);

        /// <inheritdoc cref="IComparable{T}.CompareTo(T)"/>
        public int CompareTo(Proof other)
            => other is Proof otherProof
                ? (HashInt - otherProof.HashInt).Sign
                : throw new ArgumentException($"Argument {nameof(other)} is null");

        /// <inheritdoc cref="IComparable.CompareTo(object?)"/>
        public int CompareTo(object? obj)
            => obj is Proof otherProof
                ? CompareTo(otherProof)
                : throw new ArgumentException(
                    $"Argument {nameof(obj)} is not an ${nameof(Proof)}.", nameof(obj));

        /// <inheritdoc cref="object.GetHashCode()"/>
        public override int GetHashCode()
            => ByteUtil.CalculateHashCode(ToByteArray());

        private static BigInteger HashToInt(ImmutableArray<byte> hash)
            => new BigInteger(
                BitConverter.IsLittleEndian
                    ? hash.Reverse().Concat(new byte[] { 0 }).ToArray()
                    : hash.Concat(new byte[] { 0 }).ToArray());

        private static BigInteger BinomialQuantileFunction(
            double targetProb, double prob, BigInteger nSample)
        {
            // Cumulative binomial distribution
            double cumulativePositiveProb = 0;
            for (BigInteger nPositive = 0; nPositive < nSample; nPositive++)
            {
                // Binomial distribution
                cumulativePositiveProb += BinomialProb((double)nSample, (double)nPositive, prob);

                if (targetProb <= cumulativePositiveProb)
                {
                    return nPositive;
                }
            }

            return nSample;
        }

        private static double BinomialProb(double nSample, double nPositive, double prob)
        {
            return Combination(nSample, nPositive)
                * Math.Pow(prob, nPositive)
                * Math.Pow(1d - prob, nSample - nPositive);
        }

        private static double Combination(double n, double r)
        {
            double nCr = 1;
            for (double i = n; i > n - r; i--)
            {
                nCr *= i;
            }

            for (double i = 1; i <= r; i++)
            {
                nCr /= i;
            }

            return nCr;
        }
    }
}
