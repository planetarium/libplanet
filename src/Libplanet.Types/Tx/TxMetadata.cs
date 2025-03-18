using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;

namespace Libplanet.Types.Tx
{
    /// <summary>
    /// A <see cref="Transaction"/> without actions and signature.
    /// </summary>
    public sealed class TxMetadata
    {
        internal static readonly Binary CustomActionsKey = new Binary(new byte[] { 0x61 }); // 'a'
        internal static readonly Binary SystemActionKey = new Binary(new byte[] { 0x41 }); // 'A'
        internal static readonly Binary SignatureKey = new Binary(new byte[] { 0x53 }); // 'S'
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly Binary NonceKey = new Binary(new byte[] { 0x6e }); // 'n'
        private static readonly Binary SignerKey = new Binary(new byte[] { 0x73 }); // 's'
        private static readonly Binary GenesisHashKey = new Binary(new byte[] { 0x67 }); // 'g'
        private static readonly Binary UpdatedAddressesKey = new Binary(new byte[] { 0x75 }); // 'u'
        private static readonly Binary TimestampKey = new Binary(new byte[] { 0x74 }); // 't'

        /// <summary>
        /// Creates a <see cref="TxMetadata"/> instance with a <paramref name="publicKey"/>.
        /// Other fields can be set using property setters.
        /// </summary>
        /// <param name="signer">Configures <see cref="Address"/>.
        /// </param>
        public TxMetadata(Address signer)
        {
            Signer = signer;
        }

        /// <summary>
        /// Creates a <see cref="TxMetadata"/> instance by copying fields from the specified
        /// <paramref name="metadata"/>.
        /// </summary>
        /// <param name="metadata">The transaction metadata whose data to copy.</param>
        /// <remarks><see cref="ITxSigningMetadata.Signer"/> from the specified
        /// <paramref name="metadata"/> is ignored.  <see cref="Signer"/> field is automatically
        /// derived from <see cref="PublicKey"/> instead.</remarks>
        public TxMetadata(ITransaction metadata)
        {
            Nonce = metadata.Nonce;
            GenesisHash = metadata.GenesisHash;
            UpdatedAddresses = metadata.UpdatedAddresses;
            Signer = metadata.Signer;
            Timestamp = metadata.Timestamp;
        }

        /// <summary>
        /// Creates a <see cref="TxMetadata"/> from a Bencodex <paramref name="dictionary"/>.
        /// </summary>
        /// <param name="dictionary">A Bencodex dictionary made using
        /// <see cref="ToBencodex()"/> method.</param>
        /// <exception cref="KeyNotFoundException">Thrown when the given
        /// <paramref name="dictionary"/> lacks some fields.</exception>
        /// <exception cref="InvalidCastException">Thrown when the given
        /// <paramref name="dictionary"/> has some invalid values.</exception>
        public TxMetadata(Bencodex.Types.Dictionary dictionary)
        {
            Nonce = (Integer)dictionary[NonceKey];
            GenesisHash = dictionary.TryGetValue(GenesisHashKey, out IValue v)
                    ? new BlockHash(v)
                    : (BlockHash?)null;
            UpdatedAddresses = ((List)dictionary[UpdatedAddressesKey])
                .Select(v => new Address(v))
                .ToImmutableHashSet();
            Signer = new Address(((Binary)dictionary[SignerKey]).ByteArray);
            Timestamp = DateTimeOffset.ParseExact(
                (Text)dictionary[TimestampKey],
                TimestampFormat,
                CultureInfo.InvariantCulture
            ).ToUniversalTime();
        }

        /// <summary>
        /// The number of previous <see cref="Transaction"/>s committed by
        /// the <see cref="Signer"/> of this transaction.  This nonce is used for preventing
        /// replay attack.
        /// </summary>
        public long Nonce { get; set; }

        /// <summary>
        /// A <see cref="Address"/> of the account who signs this transaction.
        /// </summary>
        /// <remarks>This is automatically derived from <see cref="PublicKey"/>.</remarks>
        public Address Signer { get; }

        /// <summary>
        /// An approximated list of addresses whose states would be affected by actions in this
        /// transaction.  However, it could be wrong.
        /// </summary>
        /// <remarks>See also https://github.com/planetarium/libplanet/issues/368 .</remarks>
        public IImmutableSet<Address> UpdatedAddresses { get; set; } =
            ImmutableHashSet<Address>.Empty;

        /// <summary>
        /// The time this transaction is created and signed.
        /// </summary>
        public DateTimeOffset Timestamp { get; set; } = DateTimeOffset.UtcNow;

        /// <summary>
        /// A <see cref="BlockHash"/> value of the genesis which this transaction is made
        /// from.  This can be <see langword="null"/> iff the transaction is contained in
        /// the genesis block.
        /// </summary>
        public BlockHash? GenesisHash { get; set; }

        [Pure]
        public Bencodex.Types.Dictionary ToBencodex()
        {
            List updatedAddresses = new List(
                UpdatedAddresses.Select<Address, IValue>(addr => addr.Bencoded));
            string timestamp = Timestamp
                .ToUniversalTime()
                .ToString(TimestampFormat, CultureInfo.InvariantCulture);
            Bencodex.Types.Dictionary dict = Dictionary.Empty
                .Add(NonceKey, Nonce)
                .Add(SignerKey, Signer.Bencoded)
                .Add(UpdatedAddressesKey, updatedAddresses)
                .Add(TimestampKey, timestamp);

            if (GenesisHash is { } genesisHash)
            {
                dict = dict.Add(GenesisHashKey, genesisHash.ByteArray);
            }

            return dict;
        }

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
                $"  {nameof(Timestamp)} = {Timestamp},\n" +
                $"  {nameof(GenesisHash)} = {GenesisHash?.ToString() ?? "(null)"},\n" +
                "}";
        }
    }
}
