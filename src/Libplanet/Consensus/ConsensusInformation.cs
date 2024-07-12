using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Text.Json;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// Consensus round information used as payload of the
    /// <see cref="Types.Blocks.Block.Proof"/> in the
    /// <see cref="Lot"/>.
    /// </summary>
    public readonly struct ConsensusInformation : IEquatable<ConsensusInformation>
    {
        private static readonly Binary HeightKey =
            new Binary(new byte[] { 0x48 }); // 'H'

        private static readonly Binary RoundKey =
            new Binary(new byte[] { 0x52 }); // 'R'

        private static readonly Binary LastProofKey =
            new Binary(new byte[] { 0x4c }); // 'L'

        private static readonly Codec _codec = new Codec();

        /// <summary>
        /// Instantiates <see cref="ConsensusInformation"/>.
        /// </summary>
        /// <param name="height">Height of the consensus where
        /// <see cref="Types.Consensus.Validator"/> participate in the draw of the
        /// <see cref="Lot"/>.</param>
        /// <param name="round">Round of the consensus where <see cref="Types.Consensus.Validator"/>
        /// participate in the draw of the <see cref="Lot"/>.</param>
        /// <param name="lastProof"><see cref="Proof"/> that has been decided on the previous round.
        /// if deciding <see cref="Round"/> is 0, it indicates <see cref="Proof"/>
        /// from the previous <see cref="Types.Blocks.Block"/>.
        /// <seealso cref="Types.Blocks.BlockCommit.Round"/></param>
        /// <exception cref="ArgumentException">Thrown when <paramref name="height"/> or
        /// <paramref name="round"/> is negative.</exception>
        public ConsensusInformation(
            long height,
            int round,
            Proof? lastProof)
        {
            if (height < 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(height)} cannot be negative: {height}");
            }
            else if (round < -1)
            {
                throw new ArgumentException(
                    $"Given {nameof(round)} cannot be less than -1: {round}");
            }

            Height = height;
            Round = round;
            LastProof = lastProof;
            Encoded = Encode(height, round, lastProof);
        }

        /// <summary>
        /// Instantiates <see cref="ConsensusInformation"/> with byte array encoded form
        /// <paramref name="encoded"/>.
        /// </summary>
        /// <param name="encoded">Byte array encoded <see cref="ConsensusInformation"/>.</param>
        public ConsensusInformation(IReadOnlyList<byte> encoded)
            : this(_codec.Decode(encoded.ToArray()))
        {
        }

        private ConsensusInformation(IValue bencoded)
            : this(bencoded is Dictionary dict
                ? dict
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Dictionary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

#pragma warning disable SA1118 // Parameter should not span multiple lines
        private ConsensusInformation(Dictionary bencoded)
            : this(
                  (Integer)bencoded[HeightKey],
                  (Integer)bencoded[RoundKey],
                  bencoded.ContainsKey(LastProofKey)
                    ? (Proof?)new Proof(bencoded[LastProofKey])
                    : null)
        {
        }
#pragma warning restore SA1118 // Parameter should not span multiple lines

        /// <summary>
        /// Height of the consensus where
        /// <see cref="Types.Consensus.Validator"/> participate in the draw of the
        /// <see cref="Proof"/>.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// Round of the consensus where <see cref="Types.Consensus.Validator"/>
        /// participate in the draw of the <see cref="Lot"/>.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// <see cref="Proof"/> that has been decided on the previous round.
        /// </summary>
        public Proof? LastProof { get; }

        /// <summary>
        /// Byte array encoded form of <see cref="ConsensusInformation"/>,
        /// used as a payload of <see cref="Proof"/> during prepropose consensus step.
        /// </summary>
        public ImmutableArray<byte> Encoded { get; }

        /// <summary>
        /// Generate a <see cref="Lot"/> with <see cref="ConsensusInformation"/> and
        /// <paramref name="prover"/>.
        /// </summary>
        /// <param name="prover">
        /// <see cref="PrivateKey"/> to prove <see cref="ConsensusInformation"/> with.
        /// </param>
        /// <returns>
        /// <see cref="Lot"/> that contains <see cref="Proof"/> generated by
        /// <see cref="Prove(PrivateKey)"/>, <see cref="PublicKey"/> of <paramref name="prover"/>
        /// and <see cref="ConsensusInformation"/>.</returns>
        public Lot ToLot(PrivateKey prover)
            => new Lot(Prove(prover), prover.PublicKey, this);

        /// <summary>
        /// Generate a <see cref="Proof"/> with <see cref="ConsensusInformation"/> and
        /// <paramref name="prover"/>.
        /// </summary>
        /// <param name="prover">
        /// <see cref="PrivateKey"/> to prove <see cref="ConsensusInformation"/> with.
        /// </param>
        /// <returns>
        /// <see cref="Proof"/> that has been proved by <paramref name="prover"/>.</returns>
        public Proof Prove(PrivateKey prover)
        {
            if (Round < 0)
            {
                throw new InvalidOperationException(
                    $"Cannot prove {nameof(ConsensusInformation)} " +
                    $"with negative {nameof(Round)}: {Round}");
            }

            return prover.Prove(Encoded);
        }

        /// <summary>
        /// Verify the <see cref="Proof"/> with <see cref="ConsensusInformation"/> and
        /// <paramref name="verifier"/>.
        /// </summary>
        /// <param name="proof">
        /// <see cref="Proof"/> to verify with <see cref="ConsensusInformation"/> and
        /// <paramref name="verifier"/>.</param>
        /// <param name="verifier">
        /// <see cref="PublicKey"/> to verify <see cref="ConsensusInformation"/> with.
        /// </param>
        /// <returns>
        /// if verified properly <see langword="true"/>, otherwise <see langword="false"/>.
        /// </returns>
        public bool Verify(Proof proof, PublicKey verifier)
        {
            if (Round < 0)
            {
                throw new InvalidOperationException(
                    $"Cannot verify {nameof(ConsensusInformation)} " +
                    $"with negative {nameof(Round)}: {Round}");
            }

            return verifier.VerifyProof(Encoded, proof);
        }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(ConsensusInformation other)
            => Height == other.Height
            && Round == other.Round
            && LastProof.Equals(other.LastProof);

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object? obj) =>
            obj is ConsensusInformation other && Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        public override int GetHashCode()
            => HashCode.Combine(
                Height,
                Round,
                LastProof);

        /// <inheritdoc cref="object.ToString()"/>
        public override string ToString()
        {
            var dict = new Dictionary<string, object>
            {
                { "height", Height },
                { "round", Round },
                { "lastProof", LastProof.ToString() ?? "Empty" },
            };
            return JsonSerializer.Serialize(dict);
        }

        private static IValue Bencode(long height, int round, Proof? lastProof)
        {
            Dictionary bencoded = Dictionary.Empty
                .Add(HeightKey, height)
                .Add(RoundKey, round);

            if (lastProof is Proof lastProofNonNull)
            {
                bencoded = bencoded.Add(LastProofKey, lastProofNonNull.ByteArray);
            }

            return bencoded;
        }

        private static ImmutableArray<byte> Encode(long height, int round, Proof? lastProof)
            => new Codec().Encode(Bencode(height, round, lastProof)).ToImmutableArray();
    }
}
