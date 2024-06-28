using System;
using System.Collections.Immutable;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// Consensus round information used as payload of the
    /// <see cref="Types.Blocks.PreEvaluationBlock.Proof"/> in the
    /// <see cref="PreProposal"/>.
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
        /// <see cref="PreProposal"/>.</param>
        /// <param name="round">Round of the consensus where <see cref="Types.Consensus.Validator"/>
        /// participate in the draw of the <see cref="PreProposal"/>.</param>
        /// <param name="lastProof"><see cref="Proof"/> that has been decided on the previous round.
        /// if current <see cref="Round"/> is 0, it indicates <see cref="Proof"/>
        /// from the <see cref="Types.Blocks.IBlockMetadata.LastCommit"/>
        /// of the <see cref="Types.Blocks.PreEvaluationBlock"/> preproposing.
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

        /// <summary>
        /// Height of the consensus where
        /// <see cref="Types.Consensus.Validator"/> participate in the draw of the
        /// <see cref="PreProposal"/>.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// Round of the consensus where <see cref="Types.Consensus.Validator"/>
        /// participate in the draw of the <see cref="PreProposal"/>.
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
        /// <see cref="PreProposal"/>.</param>
        /// <param name="round">
        /// Round of the consensus where <see cref="Types.Consensus.Validator"/>
        /// participate in the draw of the <see cref="PreProposal"/>.</param>
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
        /// <see cref="PreProposal"/>.</param>
        /// <param name="round">
        /// Round of the consensus where <see cref="Types.Consensus.Validator"/>
        /// participate in the draw of the <see cref="PreProposal"/>.</param>
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
        {
            return HashCode.Combine(
                Height,
                Round,
                LastProof);
        }

        private ImmutableArray<byte> Encode()
        {
            Dictionary bencoded = Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round);

            if (LastProof is Proof lastProof)
            {
                bencoded = bencoded.Add(LastProofKey, lastProof.ByteArray);
            }

            return _codec.Encode(bencoded).ToImmutableArray();
        }
    }
}
