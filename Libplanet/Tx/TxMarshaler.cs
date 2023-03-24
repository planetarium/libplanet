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
            Bencodex.Types.Dictionary dict = invoice.Actions.ToBencodex()
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
        public static ITxInvoice UnmarshalTxInvoice<T>(Bencodex.Types.Dictionary dictionary)
            where T : IAction, new()
        =>
            new TxInvoice(
                genesisHash: dictionary.TryGetValue(GenesisHashKey, out IValue v)
                    ? new BlockHash(v)
                    : (BlockHash?)null,
                updatedAddresses: ((Bencodex.Types.List)dictionary[UpdatedAddressesKey])
                    .Select(v => new Address(v))
                    .ToImmutableHashSet(),
                timestamp: DateTimeOffset.ParseExact(
                    (Text)dictionary[TimestampKey],
                    TimestampFormat,
                    CultureInfo.InvariantCulture
                ).ToUniversalTime(),
                actions: TxActionList.FromBencodex<T>(dictionary)
            );

        [Pure]
        public static ITxSigningMetadata UnmarshalTxSigningMetadata(
            Bencodex.Types.Dictionary dictionary
        ) =>
            new TxSigningMetadata(
                nonce: (Bencodex.Types.Integer)dictionary[NonceKey],
                publicKey: new PublicKey(((Binary)dictionary[PublicKeyKey]).ByteArray)
            );

        [Pure]
        public static IUnsignedTx UnmarshalUnsignedTx<T>(Bencodex.Types.Dictionary dictionary)
            where T : IAction, new()
        =>
            new UnsignedTx(
                invoice: UnmarshalTxInvoice<T>(dictionary),
                signingMetadata: UnmarshalTxSigningMetadata(dictionary)
            );

        [Pure]
        public static Transaction<T> UnmarshalTransaction<T>(Bencodex.Types.Dictionary dictionary)
            where T : IAction, new()
        {
            ImmutableArray<byte> sig
                = dictionary.TryGetValue(SignatureKey, out IValue s) && s is Binary bin
                ? bin
                : new Binary(new byte[0]);
            return new Transaction<T>(UnmarshalUnsignedTx<T>(dictionary), sig);
        }

        [Pure]
        public static IUnsignedTx DeserializeUnsignedTx<T>(byte[] bytes)
            where T : IAction, new()
        {
            IValue node = Codec.Decode(bytes);
            if (node is Bencodex.Types.Dictionary dict)
            {
                return UnmarshalUnsignedTx<T>(dict);
            }

            throw new DecodingException(
                $"Expected a {typeof(Bencodex.Types.Dictionary).FullName}, " +
                $"but {node.GetType().Name} given."
            );
        }

        [Pure]
        public static IUnsignedTx DeserializeUnsignedTx<T>(ImmutableArray<byte> bytes)
            where T : IAction, new()
        {
            byte[] arrayView = Unsafe.As<ImmutableArray<byte>, byte[]>(ref bytes);
            return DeserializeUnsignedTx<T>(arrayView);
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
            return new Transaction<T>(
                (UnsignedTx)UnmarshalUnsignedTx<T>(dictionary),
                alreadyVerifiedSignature: sig);
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
