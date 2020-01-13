using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using Bencodex.Types;

[assembly: InternalsVisibleTo("Libplanet.Tests")]
namespace Libplanet.Tx
{
    [Equals]
    internal readonly struct RawTransaction
    {
        public static readonly byte[] NonceKey =
            Encoding.ASCII.GetBytes("nonce");

        public static readonly byte[] SignerKey =
            Encoding.ASCII.GetBytes("signer");

        public static readonly byte[] UpdatedAddressesKey =
            Encoding.ASCII.GetBytes("updated_addresses");

        public static readonly byte[] PublicKeyKey =
            Encoding.ASCII.GetBytes("public_key");

        public static readonly byte[] TimestampKey =
            Encoding.ASCII.GetBytes("timestamp");

        public static readonly byte[] ActionsKey =
            Encoding.ASCII.GetBytes("actions");

        public static readonly byte[] SignatureKey =
            Encoding.ASCII.GetBytes("signature");

        public RawTransaction(
            long nonce,
            ImmutableArray<byte> signer,
            ImmutableArray<ImmutableArray<byte>> updatedAddresses,
            ImmutableArray<byte> publicKey,
            string timestamp,
            IEnumerable<IValue> actions
        )
            : this(
                nonce,
                signer,
                updatedAddresses,
                publicKey,
                timestamp,
                actions,
                ImmutableArray<byte>.Empty
            )
        {
        }

        public RawTransaction(
            long nonce,
            ImmutableArray<byte> signer,
            ImmutableArray<ImmutableArray<byte>> updatedAddresses,
            ImmutableArray<byte> publicKey,
            string timestamp,
            IEnumerable<IValue> actions,
            ImmutableArray<byte> signature
        )
        {
            Nonce = nonce;
            Signer = signer;
            UpdatedAddresses = updatedAddresses;
            PublicKey = publicKey;
            Timestamp = timestamp;
            Actions = actions;
            Signature = signature;
        }

        public RawTransaction(Bencodex.Types.Dictionary dict)
        {
            Nonce = dict.GetValue<Integer>(NonceKey);
            Signer = ((byte[])dict.GetValue<Binary>(SignerKey)).ToImmutableArray();
            UpdatedAddresses = To2dArray(
                (byte[])dict.GetValue<Binary>(UpdatedAddressesKey),
                Address.Size);
            PublicKey = ((byte[])dict.GetValue<Binary>(PublicKeyKey)).ToImmutableArray();
            Timestamp = dict.GetValue<Text>(TimestampKey);
            Actions = dict.GetValue<Bencodex.Types.List>(ActionsKey);

            Signature = dict.ContainsKey((Binary)SignatureKey)
                ? ((byte[])dict.GetValue<Binary>(SignatureKey)).ToImmutableArray()
                : ImmutableArray<byte>.Empty;
        }

        public long Nonce { get; }

        public ImmutableArray<byte> Signer { get; }

        public ImmutableArray<byte> PublicKey { get; }

        public ImmutableArray<ImmutableArray<byte>> UpdatedAddresses { get; }

        public string Timestamp { get; }

        public ImmutableArray<byte> Signature { get; }

        public IEnumerable<IValue> Actions { get; }

        public RawTransaction AddSignature(byte[] signature)
        {
            return new RawTransaction(
                Nonce,
                Signer,
                UpdatedAddresses,
                PublicKey,
                Timestamp,
                Actions,
                signature.ToImmutableArray()
            );
        }

        public Bencodex.Types.Dictionary ToBencodex()
        {
            var updatedAddresses = new byte[UpdatedAddresses.Length * Address.Size];
            var i = 0;
            foreach (var address in UpdatedAddresses)
            {
                address.CopyTo(updatedAddresses, i);
                i += Address.Size;
            }

            var dict = Bencodex.Types.Dictionary.Empty
                .Add(NonceKey, Nonce)
                .Add(SignerKey, Signer.ToArray())
                .Add(UpdatedAddressesKey, updatedAddresses)
                .Add(PublicKeyKey, PublicKey.ToArray())
                .Add(TimestampKey, Timestamp)
                .Add(ActionsKey, (IValue)new Bencodex.Types.List(Actions));

            if (Signature != ImmutableArray<byte>.Empty)
            {
                dict = dict.Add(SignatureKey, Signature.ToArray());
            }

            return dict;
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(Signature.ToArray());
        }

        public override string ToString()
        {
            string updatedAddresses = string.Join(
                string.Empty,
                UpdatedAddresses.Select(a => "\n    " + ByteUtil.Hex(a.ToArray()))
            );
            return $@"{nameof(RawTransaction)}
  {nameof(Nonce)} = {Nonce.ToString(CultureInfo.InvariantCulture)}
  {nameof(Signer)} = {ByteUtil.Hex(Signer.ToArray())}
  {nameof(PublicKey)} = {ByteUtil.Hex(PublicKey.ToArray())}
  {nameof(UpdatedAddresses)} = {updatedAddresses}
  {nameof(Timestamp)} = {Timestamp}
  {nameof(Signature)} = {ByteUtil.Hex(Signature.ToArray())}";
        }

        private static ImmutableArray<ImmutableArray<T>> To2dArray<T>(T[] array, int chunk)
        {
            if (array.Length % chunk > 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(array),
                    $"The array length must be multiples of {chunk}."
                );
            }

            int resultLength = array.Length / chunk;
            var result = new ImmutableArray<T>[resultLength];
            for (int i = 0; i < resultLength; i++)
            {
                var partialResult = new T[chunk];
                Array.Copy(array, i * chunk, partialResult, 0, chunk);
                result[i] = partialResult.ToImmutableArray();
            }

            return result.ToImmutableArray();
        }
    }
}
