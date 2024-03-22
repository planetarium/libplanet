using System;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Types.Consensus
{
    /// <summary>
    /// Metadata of the <see cref="Lot"/>.
    /// </summary>
    public struct LotMetadata : ILotMetadata, IEquatable<LotMetadata>, IBencodable
    {
        private static readonly Binary HeightKey =
            new Binary(new byte[] { 0x48 }); // 'H'

        private static readonly Binary RoundKey =
            new Binary(new byte[] { 0x52 }); // 'R'

        private static readonly Binary LastProofKey =
            new Binary(new byte[] { 0x4c }); // 'L'

        private static readonly Codec _codec = new Codec();

        public LotMetadata(
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
        }

        public LotMetadata(IValue bencoded)
            : this(bencoded is Dictionary dict
                ? dict
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Dictionary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private LotMetadata(Dictionary bencoded)
            : this(
                  (Integer)bencoded[HeightKey],
                  (Integer)bencoded[RoundKey],
                  new Proof(bencoded[LastProofKey]))
        {
        }

        /// <inheritdoc cref="ILotMetadata.Height"/>
        public long Height { get; }

        /// <inheritdoc cref="ILotMetadata.Round"/>
        public int Round { get; }

        /// <inheritdoc cref="ILotMetadata.LastProof"/>
        public Proof? LastProof { get; }

        /// <inheritdoc cref="IBencodable.Bencoded"/>
        [JsonIgnore]
        public IValue Bencoded
        {
            get
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

        /// <summary>
        /// Proves a <see cref="LotMetadata"/> to create a <see cref="Lot"/>
        /// using given <paramref name="prover"/>.
        /// </summary>
        /// <param name="prover">The <see cref="PrivateKey"/> to prove the data with.</param>
        /// <returns>A <see cref="Lot"/> with a <see cref="Lot.Proof"/>.
        /// <seealso cref="Proof"/>
        /// </returns>
        public Lot Prove(PrivateKey prover)
            => new Lot(this, prover.PublicKey, prover.Prove(_codec.Encode(Bencoded)));

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(LotMetadata other)
            => Height == other.Height
            && Round == other.Round
            && LastProof.Equals(other.LastProof);

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object? obj) =>
            obj is LotMetadata other && Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                LastProof);
        }
    }
}
