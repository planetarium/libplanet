using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using Bencodex;
using Bencodex.Types;

[assembly: InternalsVisibleTo("Libplanet.Tests")]
namespace Libplanet.Tx
{
    [Equals]
    internal readonly struct RawTransaction
    {
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
            Func<string, byte[]> b = Encoding.ASCII.GetBytes;
            Nonce = dict.GetValue<Integer>(b("nonce"));
            Signer = ((byte[])dict.GetValue<Binary>(b("signer"))).ToImmutableArray();
            UpdatedAddresses = To2dArray(
                (byte[])dict.GetValue<Binary>(b("updated_addresses")),
                Address.Size);
            PublicKey = ((byte[])dict.GetValue<Binary>(b("public_key"))).ToImmutableArray();
            Timestamp = dict.GetValue<Text>(b("timestamp"));
            Actions = dict.GetValue<Bencodex.Types.List>(b("actions"));

            Signature = dict.ContainsKey((Binary)b("signature"))
                ? ((byte[])dict.GetValue<Binary>(b("signature"))).ToImmutableArray()
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

            Func<string, byte[]> b = Encoding.ASCII.GetBytes;
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(b("nonce"), Nonce)
                .Add(b("signer"), Signer.ToArray())
                .Add(b("updated_addresses"), updatedAddresses)
                .Add(b("public_key"), PublicKey.ToArray())
                .Add(b("timestamp"), Timestamp)
                .Add(b("actions"), (IValue)new Bencodex.Types.List(Actions));

            if (Signature != ImmutableArray<byte>.Empty)
            {
                dict = dict.Add(b("signature"), Signature.ToArray());
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
