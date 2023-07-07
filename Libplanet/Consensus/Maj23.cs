using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A class used to claim that a peer has collected two thirds majority of
    /// <see cref="Vote"/>s.
    /// </summary>
    public class Maj23 : IEquatable<Maj23>
    {
        // FIXME: This should be private.  Left as internal for testing reasons.
        internal static readonly byte[] SignatureKey = { 0x53 }; // 'S'
        private static Codec _codec = new Codec();

        private readonly Maj23Metadata _maj23Metadata;

        /// <summary>
        /// Instantiates a <see cref="Maj23"/> with given <paramref name="maj23Metadata"/>
        /// and its <paramref name="signature"/>.
        /// </summary>
        /// <param name="maj23Metadata">A <see cref="Maj23Metadata"/> to claim.</param>
        /// <param name="signature">A signature signed with <paramref name="maj23Metadata"/>.
        /// </param>
        /// <exception cref="ArgumentNullException">Thrown if given <paramref name="signature"/> is
        /// empty.</exception>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="signature"/> is
        /// invalid and cannot be verified with <paramref name="maj23Metadata"/>.</exception>
        public Maj23(Maj23Metadata maj23Metadata, ImmutableArray<byte> signature)
        {
            _maj23Metadata = maj23Metadata;
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

        public Maj23(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public Maj23(Dictionary encoded)
            : this(
                new Maj23Metadata(encoded),
                encoded.ContainsKey(SignatureKey)
                    ? encoded.GetValue<Binary>(SignatureKey).ToImmutableArray()
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc cref="Maj23Metadata.Height"/>
        public long Height => _maj23Metadata.Height;

        /// <inheritdoc cref="Maj23Metadata.Round"/>
        public int Round => _maj23Metadata.Round;

        /// <inheritdoc cref="Maj23Metadata.BlockHash"/>
        public BlockHash BlockHash => _maj23Metadata.BlockHash;

        /// <inheritdoc cref="Maj23Metadata.Timestamp"/>
        public DateTimeOffset Timestamp => _maj23Metadata.Timestamp;

        /// <inheritdoc cref="Maj23Metadata.ValidatorPublicKey"/>
        public PublicKey ValidatorPublicKey => _maj23Metadata.ValidatorPublicKey;

        /// <inheritdoc cref="Maj23Metadata.Flag"/>
        public VoteFlag Flag => _maj23Metadata.Flag;

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
                ? _maj23Metadata.Encoded.Add(SignatureKey, Signature)
                : _maj23Metadata.Encoded;

        /// <summary>
        /// <see cref="byte"/> encoded <see cref="Maj23"/> data.
        /// </summary>
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Verifies whether the <see cref="Maj23Metadata"/> is properly signed by
        /// <see cref="Validator"/>.
        /// </summary>
        /// <returns><see langword="true"/> if the <see cref="Signature"/> is not empty
        /// and is a valid signature signed by <see cref="Validator"/>.</returns>
        [Pure]
        public bool Verify() =>
            !Signature.IsDefaultOrEmpty &&
            ValidatorPublicKey.Verify(
                _maj23Metadata.ByteArray.ToImmutableArray(),
                Signature);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(Maj23? other)
        {
            return other is { } maj23 &&
                   _maj23Metadata.Equals(maj23._maj23Metadata) &&
                   Signature.SequenceEqual(maj23.Signature);
        }

        /// <inheritdoc/>
        [Pure]
        public override bool Equals(object? obj)
        {
            return obj is Maj23 other && Equals(other);
        }

        /// <inheritdoc/>
        [Pure]
        public override int GetHashCode()
        {
            return HashCode.Combine(
                _maj23Metadata.GetHashCode(),
                ByteUtil.CalculateHashCode(Signature.ToArray()));
        }
    }
}
