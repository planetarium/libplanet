using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
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
            else if (round < 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(round)} cannot be negative: {round}");
            }

            Height = height;
            Round = round;
            LastProof = lastProof;
            Encoded = Encode();
        }

        public ConsensusInformation(IReadOnlyList<byte> encoded)
            : this(_codec.Decode(encoded.ToArray()))
        {
        }

        public ConsensusInformation(IValue bencoded)
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
        /// Generate a <see cref="Proof"/> with given consensus information and
        /// <paramref name="prover"/>.
        /// </summary>
        /// <param name="height">
        /// Height of the consensus where
        /// <see cref="Types.Consensus.Validator"/> participate in the draw of the
        /// <see cref="Lot"/>.</param>
        /// <param name="round">
        /// Round of the consensus where <see cref="Types.Consensus.Validator"/>
        /// participate in the draw of the <see cref="Lot"/>.</param>
        /// <param name="lastProof">
        /// <see cref="Proof"/> that has been decided on the previous round.</param>
        /// <param name="prover">
        /// <see cref="PrivateKey"/> to prove given information.</param>
        /// <returns><see cref="Proof"/> that has been proved by <paramref name="prover"/>.
        /// </returns>
        public static Proof Prove(long height, int round, Proof? lastProof, PrivateKey prover)
            => new ConsensusInformation(height, round, lastProof).Prove(prover);

        /// <summary>
        /// Verify the <see cref="Proof"/> with given consensus information and
        /// <paramref name="verifier"/>.
        /// </summary>
        /// <param name="height">
        /// Height of the consensus where
        /// <see cref="Types.Consensus.Validator"/> participate in the draw of the
        /// <see cref="Lot"/>.</param>
        /// <param name="round">
        /// Round of the consensus where <see cref="Types.Consensus.Validator"/>
        /// participate in the draw of the <see cref="Lot"/>.</param>
        /// <param name="lastProof">
        /// <see cref="Proof"/> that has been decided on the previous round.</param>
        /// <param name="proof">
        /// <see cref="Proof"/> to verify.</param>
        /// <param name="verifier">
        /// <see cref="PublicKey"/> which corresponds to prover <see cref="PrivateKey"/> of
        /// <see cref="Prove(long, int, Proof?, PrivateKey)"/>.</param>
        /// <returns>
        /// if verified properly <see langword="true"/>, otherwise <see langword="false"/>.
        /// </returns>
        public static bool Verify(
            long height, int round, Proof? lastProof, Proof proof, PublicKey verifier)
            => new ConsensusInformation(height, round, lastProof).Verify(proof, verifier);

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
            => prover.Prove(Encoded);

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
            => verifier.VerifyProof(Encoded, proof);

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

        public override string ToString()
            => $"{nameof(ConsensusInformation)} " +
            $": Height {Height}, Round {Round}, LastProof {LastProof}";

        private ImmutableArray<byte> Encode()
            => _codec.Encode(Bencode()).ToImmutableArray();

        private IValue Bencode()
        {
            Dictionary bencoded = Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round);

            if (LastProof is Proof lastProof)
            {
                bencoded = bencoded.Add(LastProofKey, lastProof.ByteArray);
            }

            return bencoded;
        }
    }
}
