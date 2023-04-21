using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Tx
{
    public static class TxMarshaler
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly Binary UpdatedAddressesKey = new byte[] { 0x75 }; // 'u'
        private static readonly Binary TimestampKey = new byte[] { 0x74 }; // 't'
        private static readonly Binary GenesisHashKey = new byte[] { 0x67 }; // 'g'
        private static readonly Binary NonceKey = new byte[] { 0x6e }; // 'n'
        private static readonly Binary SignerKey = new byte[] { 0x73 }; // 's'
        private static readonly Binary PublicKeyKey = new byte[] { 0x70 }; // 'p'
        private static readonly Binary SignatureKey = new byte[] { 0x53 }; // 'S'
        private static readonly Binary SystemActionKey = new byte[] { 0x41 }; // 'A'
        private static readonly Binary CustomActionsKey = new byte[] { 0x61 }; // 'a'
        private static readonly Codec Codec = new Codec();

        [Pure]
        public static Bencodex.Types.Dictionary MarshalTxInvoice(this ITxInvoice invoice)
        {
            Bencodex.Types.List updatedAddresses = new Bencodex.Types.List(
                invoice.UpdatedAddresses.Select<Address, IValue>(addr => new Binary(addr.ByteArray))
            );
            string timestamp = invoice.Timestamp
                .ToUniversalTime()
                .ToString(TimestampFormat, CultureInfo.InvariantCulture);

            Bencodex.Types.Dictionary dict = Bencodex.Types.Dictionary.Empty;
            if (invoice.Actions is TxSystemActionList tsal)
            {
                dict = dict.Add(SystemActionKey, tsal.Bencoded);
            }
            else if (invoice.Actions is TxCustomActionList tcal)
            {
                dict = dict.Add(CustomActionsKey, tcal.Bencoded);
            }

            dict = dict
                .Add(UpdatedAddressesKey, updatedAddresses)
                .Add(TimestampKey, timestamp);

            if (invoice.GenesisHash is { } genesisHash)
            {
                dict = dict.Add(GenesisHashKey, genesisHash.ByteArray);
            }

            return dict;
        }

        [Pure]
        public static Bencodex.Types.Dictionary MarshalTxSigningMetadata(
            this ITxSigningMetadata metadata
        ) => Dictionary.Empty
            .Add(NonceKey, metadata.Nonce)
            .Add(SignerKey, metadata.Signer.ByteArray)
            .Add(PublicKeyKey, metadata.PublicKey.ToImmutableArray(compress: false));

        [Pure]
        public static Bencodex.Types.Dictionary MarshalUnsignedTx(this IUnsignedTx unsignedTx) =>
            (Bencodex.Types.Dictionary)unsignedTx.MarshalTxInvoice()
                .AddRange(unsignedTx.MarshalTxSigningMetadata());

        [Pure]
        public static Bencodex.Types.Dictionary MarshalTransaction<T>(
            this Transaction<T> transaction
        )
            where T : IAction, new()
        =>
            transaction.MarshalUnsignedTx().Add(SignatureKey, transaction.Signature);

        [Pure]
        public static ImmutableArray<byte> SerializeUnsignedTx(this IUnsignedTx unsignedTx)
        {
            Bencodex.Types.Dictionary dict = unsignedTx.MarshalUnsignedTx();
            byte[] encoded = Codec.Encode(dict);
            ImmutableArray<byte> movedBytes =
                Unsafe.As<byte[], ImmutableArray<byte>>(ref encoded);
            return movedBytes;
        }

        [Pure]
        public static ITxInvoice UnmarshalTxInvoice(Bencodex.Types.Dictionary dictionary)
        =>
#pragma warning disable SA1118  // The parameter spans multiple lines
            new TxInvoice(
                genesisHash: dictionary.TryGetValue(GenesisHashKey, out IValue gv)
                    ? new BlockHash(gv)
                    : (BlockHash?)null,
                updatedAddresses: new AddressSet(
                    ((Bencodex.Types.List)dictionary[UpdatedAddressesKey])
                        .Select(v => new Address(v))),
                timestamp: DateTimeOffset.ParseExact(
                    (Text)dictionary[TimestampKey],
                    TimestampFormat,
                    CultureInfo.InvariantCulture).ToUniversalTime(),
                actions: dictionary.TryGetValue(SystemActionKey, out IValue sav)
                    ? (TxActionList)new TxSystemActionList(sav)
                    : (TxActionList)new TxCustomActionList(dictionary[CustomActionsKey]));
#pragma warning restore SA1118

        [Pure]
        public static ITxSigningMetadata UnmarshalTxSigningMetadata(
            Bencodex.Types.Dictionary dictionary
        ) =>
            new TxSigningMetadata(
                nonce: (Bencodex.Types.Integer)dictionary[NonceKey],
                publicKey: new PublicKey(((Binary)dictionary[PublicKeyKey]).ByteArray)
            );

        [Pure]
        public static UnsignedTx UnmarshalUnsignedTx(Bencodex.Types.Dictionary dictionary) =>
            new UnsignedTx(
                invoice: UnmarshalTxInvoice(dictionary),
                signingMetadata: UnmarshalTxSigningMetadata(dictionary));

        [Pure]
        public static ImmutableArray<byte>? UnmarshalTransactionSignature(
            Bencodex.Types.Dictionary dictionary
        ) =>
            dictionary.TryGetValue(SignatureKey, out IValue v)
                ? (Binary)v
                : (ImmutableArray<byte>?)null;

        [Pure]
        public static Transaction<T> UnmarshalTransaction<T>(Bencodex.Types.Dictionary dictionary)
            where T : IAction, new()
        {
            ImmutableArray<byte>? sig = UnmarshalTransactionSignature(dictionary);
            if (!(sig is { } signature))
            {
                throw new DecodingException("Transaction signature is missing.");
            }

            return UnmarshalUnsignedTx(dictionary).Verify<T>(signature);
        }

        [Pure]
        public static IUnsignedTx DeserializeUnsignedTx(byte[] bytes)
        {
            IValue node = Codec.Decode(bytes);
            if (node is Bencodex.Types.Dictionary dict)
            {
                return UnmarshalUnsignedTx(dict);
            }

            throw new DecodingException(
                $"Expected a {typeof(Bencodex.Types.Dictionary).FullName}, " +
                $"but {node.GetType().Name} given.");
        }

        [Pure]
        public static IUnsignedTx DeserializeUnsignedTx(ImmutableArray<byte> bytes)
        {
            byte[] arrayView = Unsafe.As<ImmutableArray<byte>, byte[]>(ref bytes);
            return DeserializeUnsignedTx(arrayView);
        }

        [Pure]
        internal static Transaction<T> UnmarshalTransactionWithoutVerification<T>(
            Bencodex.Types.Dictionary dictionary
        )
            where T : IAction, new()
        {
            ImmutableArray<byte> sig
                = dictionary.TryGetValue(SignatureKey, out IValue s) && s is Binary bin
                ? bin
                : new Binary(new byte[0]);
            return UnmarshalUnsignedTx(dictionary).CombineWithoutVerification<T>(sig);
        }

        [Pure]
        internal static Transaction<T> DeserializeTransactionWithoutVerification<T>(
            byte[] bytes
        )
            where T : IAction, new()
        {
            IValue node = Codec.Decode(bytes);
            if (node is Bencodex.Types.Dictionary dict)
            {
                return UnmarshalTransactionWithoutVerification<T>(dict);
            }

            throw new DecodingException(
                $"Expected a {typeof(Bencodex.Types.Dictionary).FullName}, " +
                $"but {node.GetType().Name} given."
            );
        }

        [Pure]
        internal static Transaction<T> DeserializeTransactionWithoutVerification<T>(
            ImmutableArray<byte> bytes
        )
            where T : IAction, new()
        {
            byte[] arrayView = Unsafe.As<ImmutableArray<byte>, byte[]>(ref bytes);
            return DeserializeTransactionWithoutVerification<T>(arrayView);
        }

        // TODO: SerializeTransaction, DeserializeTransaction
    }
}
