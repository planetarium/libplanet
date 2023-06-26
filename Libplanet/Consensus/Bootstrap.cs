using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A class used to bootstrap <see cref="Validator"/>.
    /// </summary>
    public class Bootstrap : IEquatable<Bootstrap>
    {
        private static readonly byte[] SignatureKey = { 0x53 }; // 'S'
        private static Codec _codec = new Codec();

        private readonly BootstrapMetadata _bootstrapMetadata;

        /// <summary>
        /// Instantiates a <see cref="Bootstrap"/> with given <paramref name="bootstrapMetadata"/>
        /// and its <paramref name="signature"/>.
        /// </summary>
        /// <param name="bootstrapMetadata">A <see cref="BootstrapMetadata"/> for bootstrapping.
        /// </param>
        /// <param name="signature">A signature signed with <paramref name="bootstrapMetadata"/>.
        /// </param>
        /// <exception cref="ArgumentNullException">Thrown if given <paramref name="signature"/> is
        /// empty.</exception>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="signature"/> is
        /// invalid and cannot be verified with <paramref name="bootstrapMetadata"/>.</exception>
        public Bootstrap(BootstrapMetadata bootstrapMetadata, ImmutableArray<byte> signature)
        {
            _bootstrapMetadata = bootstrapMetadata;
            Signature = signature;

            if (signature.IsDefaultOrEmpty)
            {
                throw new ArgumentNullException(
                    nameof(signature),
                    "Signature cannot be null or empty.");
            }
            else if (!Verify())
            {
                throw new ArgumentException("Signature is invalid.", nameof(signature));
            }
        }

        public Bootstrap(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public Bootstrap(Dictionary encoded)
            : this(
                new BootstrapMetadata(encoded),
                encoded.ContainsKey(SignatureKey)
                    ? encoded.GetValue<Binary>(SignatureKey).ToImmutableArray()
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc cref="BootstrapMetadata.Height"/>
        public long Height => _bootstrapMetadata.Height;

        /// <inheritdoc cref="BootstrapMetadata.Round"/>
        public int Round => _bootstrapMetadata.Round;

        /// <inheritdoc cref="BootstrapMetadata.ValidatorPublicKey"/>
        public PublicKey ValidatorPublicKey => _bootstrapMetadata.ValidatorPublicKey;

        /// <inheritdoc cref="BootstrapMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _bootstrapMetadata.Timestamp;

        /// <summary>
        /// A signature that signed with <see cref="Maj23Metadata"/>.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="Maj23"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded =>
            !Signature.IsEmpty
                ? _bootstrapMetadata.Encoded.Add(SignatureKey, Signature)
                : _bootstrapMetadata.Encoded;

        /// <summary>
        /// <see cref="byte"/> encoded <see cref="Maj23"/> data.
        /// </summary>
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Verifies whether the <see cref="BootstrapMetadata"/> is properly signed by
        /// <see cref="Validator"/>.
        /// </summary>
        /// <returns><see langword="true"/> if the <see cref="Signature"/> is not empty
        /// and is a valid signature signed by <see cref="Validator"/>.</returns>
        [Pure]
        public bool Verify() =>
            !Signature.IsDefaultOrEmpty &&
            ValidatorPublicKey.Verify(
                _bootstrapMetadata.ByteArray.ToImmutableArray(),
                Signature);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(Bootstrap? other)
        {
            return other is { } bootstrap &&
                   _bootstrapMetadata.Equals(bootstrap._bootstrapMetadata) &&
                   Signature.SequenceEqual(bootstrap.Signature);
        }

        /// <inheritdoc/>
        [Pure]
        public override bool Equals(object? obj)
        {
            return obj is Bootstrap other && Equals(other);
        }

        /// <inheritdoc/>
        [Pure]
        public override int GetHashCode()
        {
            return HashCode.Combine(
                _bootstrapMetadata.GetHashCode(),
                ByteUtil.CalculateHashCode(Signature.ToArray()));
        }
    }
}
