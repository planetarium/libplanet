using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Misc;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Types.Consensus
{
    public struct Lot : ILot, IEquatable<Lot>, IBencodable
    {
        private static readonly Binary PublicKeyKey = new Binary(new byte[] { 0x70 }); // 'p'
        private static readonly Binary ProofKey = new Binary(new byte[] { 0x50 }); // 'P'
        private static readonly Codec _codec = new Codec();
        private readonly LotMetadata _metadata;

        public Lot(
            LotMetadata metadata,
            PublicKey publicKey,
            Proof proof)
        {
            if (!publicKey.VerifyProof(_codec.Encode(metadata.Bencoded), proof))
            {
                throw new ArgumentException(
                    $"Given {nameof(proof)} is invalid.",
                    nameof(proof));
            }

            _metadata = metadata;
            PublicKey = publicKey;
            Proof = proof;
        }

        public Lot(IValue bencoded)
            : this(bencoded is Dictionary dict
                ? dict
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Dictionary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private Lot(Dictionary encoded)
            : this(
                new LotMetadata(encoded),
                new PublicKey(((Binary)encoded[PublicKeyKey]).ByteArray),
                new Proof(encoded[ProofKey]))
        {
        }

        /// <inheritdoc cref="ILotMetadata.Height"/>
        public long Height => _metadata.Height;

        /// <inheritdoc cref="ILotMetadata.Round"/>
        public int Round => _metadata.Round;

        /// <inheritdoc cref="ILotMetadata.LastProof"/>
        public Proof? LastProof => _metadata.LastProof;

        /// <inheritdoc cref="ILot.PublicKey"/>
        public PublicKey PublicKey { get; }

        /// <inheritdoc cref="ILot.Proof"/>
        public Proof Proof { get; }

        [JsonIgnore]
        public IValue Bencoded
            => ((Dictionary)_metadata.Bencoded)
                .Add(PublicKeyKey, PublicKey.Format(true))
                .Add(ProofKey, Proof.ByteArray);

        /// <summary>
        /// Verifies whether <see cref="Proof"/> is proved by <see cref="PrivateKey"/>
        /// that is corresponding to <see cref="PublicKey"/>.
        /// </summary>
        /// <returns><c>true</c> if the <see cref="Proof"/> proves authenticity of
        /// the <see cref="PublicKey"/>.
        /// Otherwise <c>false</c>.</returns>
        public bool Verify()
            => PublicKey.VerifyProof(_codec.Encode(_metadata.Bencoded), Proof);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(Lot other)
            => _metadata.Equals(other._metadata)
                && Proof.Equals(other.Proof);

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object? obj)
            => obj is Lot otherLot && Equals(otherLot);

        /// <inheritdoc cref="object.GetHashCode"/>
        public override int GetHashCode()
            => HashCode.Combine(
                _metadata.GetHashCode(),
                Proof.GetHashCode());

        /// <inheritdoc cref="object.ToString()"/>
        public override string ToString()
        {
            var dict = new Dictionary<string, object>
            {
                { "public_key", PublicKey.ToString() },
                { "height", Height },
                { "round", Round },
                { "lastProof", LastProof?.ByteArray.Hex() ?? "Empty" },
            };
            return JsonSerializer.Serialize(dict);
        }
    }
}
