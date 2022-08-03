using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Tx
{
    /// <summary>
    /// A concrete class implementing <see cref="ITxMetadata"/>.  It's used to represent drafts
    /// of unsigned <see cref="Transaction{T}"/>s.
    /// </summary>
    public sealed class TxMetadata : ITxMetadata
    {
        internal static readonly byte[] CustomActionsKey = { 0x61 }; // 'a'
        internal static readonly byte[] SystemActionKey = { 0x41 }; // 'A'
        internal static readonly byte[] SignatureKey = { 0x53 }; // 'S'
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly byte[] NonceKey = { 0x6e }; // 'n'
        private static readonly byte[] SignerKey = { 0x73 }; // 's'
        private static readonly byte[] GenesisHashKey = { 0x67 }; // 'g'
        private static readonly byte[] UpdatedAddressesKey = { 0x75 }; // 'u'
        private static readonly byte[] PublicKeyKey = { 0x70 }; // 'p'
        private static readonly byte[] TimestampKey = { 0x74 }; // 't'

        /// <summary>
        /// Creates a <see cref="TxMetadata"/> instance with a <paramref name="publicKey"/>.
        /// Other fields can be set using property setters.
        /// </summary>
        /// <param name="publicKey">Configures <see cref="PublicKey"/> and <see cref="Signer"/>.
        /// </param>
        public TxMetadata(PublicKey publicKey)
        {
            PublicKey = publicKey;
        }

        /// <summary>
        /// Creates a <see cref="TxMetadata"/> instance by copying fields from the specified
        /// <paramref name="metadata"/>.
        /// </summary>
        /// <param name="metadata">The transaction metadata whose data to copy.</param>
        /// <remarks><see cref="ITxMetadata.Signer"/> from the specified <paramref name="metadata"/>
        /// is ignored.  <see cref="Signer"/> field is automatically derived from
        /// <see cref="PublicKey"/> instead.</remarks>
        public TxMetadata(ITxMetadata metadata)
        {
            Nonce = metadata.Nonce;
            GenesisHash = metadata.GenesisHash;
            UpdatedAddresses = metadata.UpdatedAddresses;
            PublicKey = metadata.PublicKey;
            Timestamp = metadata.Timestamp;
        }

        /// <summary>
        /// Creates a <see cref="TxMetadata"/> from a Bencodex <paramref name="dictionary"/>.
        /// </summary>
        /// <param name="dictionary">A Bencodex dictionary made using
        /// <see cref="ToBencodex(IEnumerable{IValue}, ImmutableArray{byte}?)"/> method.</param>
        /// <exception cref="KeyNotFoundException">Thrown when the given
        /// <paramref name="dictionary"/> lacks some fields.</exception>
        /// <exception cref="InvalidCastException">Thrown when the given
        /// <paramref name="dictionary"/> has some invalid values.</exception>
        public TxMetadata(Bencodex.Types.Dictionary dictionary)
        {
            Nonce = dictionary.GetValue<Integer>(NonceKey);
            GenesisHash
                = dictionary.TryGetValue(new Binary(GenesisHashKey), out IValue v) && v is Binary g
                ? new BlockHash(g.ByteArray)
                : (BlockHash?)null;
            UpdatedAddresses = dictionary.GetValue<List>(UpdatedAddressesKey)
                .Select(v => new Address((Binary)v))
                .ToImmutableHashSet();
            PublicKey = new PublicKey(dictionary.GetValue<Binary>(PublicKeyKey).ByteArray);
            Timestamp = DateTimeOffset.ParseExact(
                dictionary.GetValue<Text>(TimestampKey),
                TimestampFormat,
                CultureInfo.InvariantCulture
            ).ToUniversalTime();
        }

        /// <inheritdoc cref="ITxMetadata.Nonce"/>
        public long Nonce { get; set; }

        /// <inheritdoc cref="ITxMetadata.Signer"/>
        /// <remarks>This is automatically derived from <see cref="PublicKey"/>.</remarks>
        public Address Signer => new Address(PublicKey);

        /// <inheritdoc cref="ITxMetadata.UpdatedAddresses"/>
        public IImmutableSet<Address> UpdatedAddresses { get; set; } =
            ImmutableHashSet<Address>.Empty;

        /// <inheritdoc cref="ITxMetadata.Timestamp"/>
        public DateTimeOffset Timestamp { get; set; } = DateTimeOffset.UtcNow;

        /// <inheritdoc cref="ITxMetadata.PublicKey"/>
        public PublicKey PublicKey { get; }

        /// <inheritdoc cref="ITxMetadata.GenesisHash"/>
        public BlockHash? GenesisHash { get; set; }

        /// <summary>
        /// Builds a Bencodex dictionary used for signing and calculating <see cref="TxId"/>.
        /// </summary>
        /// <param name="systemAction"><see cref="IAction.PlainValue"/> of a system built-in action
        /// to include.</param>
        /// <param name="signature">Optionally specifies the transaction signature.  It should be
        /// <see langword="null"/> (which is the default) when you make a signature, and should be
        /// present when you make a <see cref="TxId"/>.</param>
        /// <returns>A Bencodex dictionary that the transaction turns into.</returns>
        [Pure]
        public Bencodex.Types.Dictionary ToBencodex(
            IValue systemAction,
            ImmutableArray<byte>? signature = null
        ) =>
            ToBencodex(signature).Add(SystemActionKey, systemAction);

        /// <summary>
        /// Builds a Bencodex dictionary used for signing and calculating <see cref="TxId"/>.
        /// </summary>
        /// <param name="customActions"><see cref="IAction.PlainValue"/>s of user-defined custom
        /// actions to include.</param>
        /// <param name="signature">Optionally specifies the transaction signature.  It should be
        /// <see langword="null"/> (which is the default) when you make a signature, and should be
        /// present when you make a <see cref="TxId"/>.</param>
        /// <returns>A Bencodex dictionary that the transaction turns into.</returns>
        [Pure]
        public Bencodex.Types.Dictionary ToBencodex(
            IEnumerable<IValue> customActions,
            ImmutableArray<byte>? signature = null
        ) =>
            ToBencodex(signature).Add(CustomActionsKey, customActions);

        /// <inheritdoc cref="object.ToString()"/>
        [Pure]
        public override string ToString()
        {
            return nameof(TxMetadata) + " {\n" +
                $"  {nameof(Nonce)} = {Nonce},\n" +
                $"  {nameof(Signer)} = {Signer},\n" +
                $"  {nameof(UpdatedAddresses)} = ({UpdatedAddresses.Count})" +
                (UpdatedAddresses.Any()
                    ? $"\n    {string.Join("\n    ", UpdatedAddresses)};\n"
                    : ";\n") +
                $"  {nameof(PublicKey)} = {PublicKey},\n" +
                $"  {nameof(Timestamp)} = {Timestamp},\n" +
                $"  {nameof(GenesisHash)} = {GenesisHash?.ToString() ?? "(null)"},\n" +
                "}";
        }

        [Pure]
        private Bencodex.Types.Dictionary ToBencodex(
            ImmutableArray<byte>? signature = null
        )
        {
            IEnumerable<IValue> updatedAddresses =
                UpdatedAddresses.Select<Address, IValue>(addr => new Binary(addr.ByteArray));
            Bencodex.Types.Dictionary dict = Dictionary.Empty
                .Add(NonceKey, Nonce)
                .Add(SignerKey, Signer.ByteArray)
                .Add(UpdatedAddressesKey, updatedAddresses)
                .Add(PublicKeyKey, PublicKey.ToImmutableArray(compress: false))
                .Add(
                    TimestampKey,
                    Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture));

            if (GenesisHash is { } genesisHash)
            {
                dict = dict.Add(GenesisHashKey, genesisHash.ByteArray);
            }

            if (signature is { } sig)
            {
                dict = dict.Add(SignatureKey, sig);
            }

            return dict;
        }
    }
}
