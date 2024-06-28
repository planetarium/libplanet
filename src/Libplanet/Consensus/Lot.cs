using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Misc;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    public readonly struct Lot : IEquatable<Lot>, IBencodable
    {
        private static readonly Binary ProofKey
            = new Binary(new byte[] { 0x50 }); // 'P'

        private static readonly Binary PublicKeyKey
            = new Binary(new byte[] { 0x70 }); // 'p'

        private static readonly Binary ConsensusInformationKey
            = new Binary(new byte[] { 0x43 }); // 'C'

        private static readonly Codec _codec = new Codec();

        public Lot(
            Proof proof,
            PublicKey publicKey,
            ConsensusInformation consensusInformation)
        {
            if (!consensusInformation.Verify(proof, publicKey))
            {
                throw new ArgumentException(
                    $"Given {nameof(proof)} is invalid.",
                    nameof(proof));
            }

            Proof = proof;
            PublicKey = publicKey;
            ConsensusInformation = consensusInformation;
        }

        public Lot(IReadOnlyList<byte> encoded)
            : this(_codec.Decode(encoded.ToArray()))
        {
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

        private Lot(Dictionary bencoded)
            : this(
                new Proof(bencoded[ProofKey]),
                new PublicKey(((Binary)bencoded[PublicKeyKey]).ByteArray),
                new ConsensusInformation(((Binary)bencoded[ConsensusInformationKey]).ByteArray))
        {
        }

        /// <summary>
        /// <see cref="Crypto.Proof"/> can be verified with <see cref="PublicKey"/> and
        /// <see cref="ConsensusInformation"/>.
        /// </summary>
        public Proof Proof { get; }

        /// <summary>
        /// <see cref="Crypto.PublicKey"/> that proved an <see cref="ConsensusInformation"/>.
        /// <see cref="Proof"/> can be verified by it.
        /// </summary>
        public PublicKey PublicKey { get; }

        /// <summary>
        /// <see cref="ConsensusInformation"/> that has been proved by <see cref="PublicKey"/>.
        /// </summary>
        public ConsensusInformation ConsensusInformation { get; }

        [JsonIgnore]
        public IValue Bencoded
            => Dictionary.Empty
                .Add(ProofKey, Proof.ByteArray)
                .Add(PublicKeyKey, PublicKey.Format(true))
                .Add(ConsensusInformationKey, ConsensusInformation.Encoded);

        /// <summary>
        /// <see cref="byte"/> encoded <see cref="Proposal"/> data.
        /// </summary>
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Bencoded);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(Lot other)
            => Proof.Equals(other.Proof)
            && PublicKey.Equals(other.PublicKey)
            && ConsensusInformation.Equals(other.ConsensusInformation);

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object? obj)
            => obj is Lot otherLot && Equals(otherLot);

        /// <inheritdoc cref="object.GetHashCode"/>
        public override int GetHashCode()
            => HashCode.Combine(
                Proof.GetHashCode(),
                PublicKey.GetHashCode(),
                ConsensusInformation.GetHashCode());

        /// <inheritdoc cref="object.ToString()"/>
        public override string ToString()
        {
            var dict = new Dictionary<string, object>
            {
                { "proof", Proof.ByteArray.Hex() },
                { "height", ConsensusInformation.Height },
                { "round", ConsensusInformation.Round },
                { "lastProof", ConsensusInformation.LastProof?.ByteArray.Hex() ?? "Empty" },
                { "public_key", PublicKey.ToString() },
            };
            return JsonSerializer.Serialize(dict);
        }
    }
}
