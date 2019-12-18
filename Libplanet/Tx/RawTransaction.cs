using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Numerics;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization;
using Bencodex.Types;
using Libplanet.Serialization;

[assembly: InternalsVisibleTo("Libplanet.Tests")]
namespace Libplanet.Tx
{
    [Equals]
    internal readonly struct RawTransaction : ISerializable
    {
        public RawTransaction(SerializationInfo info, StreamingContext context)
            : this(
                nonce: info.GetInt64("nonce"),
                signer: info.GetValue<byte[]>("signer").ToImmutableArray(),
                publicKey: info.GetValue<byte[]>("public_key").ToImmutableArray(),
                updatedAddresses: To2dArray(
                    info.GetValue<byte[]>("updated_addresses"),
                    Address.Size),
                timestamp: info.GetString("timestamp"),
                signature: info.GetValue<byte[]>("signature").ToImmutableArray(),
                actions: info.GetValue<List>(
                    "actions")
            )
        {
        }

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

        public RawTransaction(Dictionary<string, object> dict)
        {
            Nonce = (long)(BigInteger)dict["nonce"];
            Signer = ((byte[])dict["signer"]).ToImmutableArray();
            UpdatedAddresses = To2dArray(
                (byte[])dict["updated_addresses"],
                Address.Size);
            PublicKey = ((byte[])dict["public_key"]).ToImmutableArray();
            Timestamp = (string)dict["timestamp"];

            Actions = ((List)dict["actions"]).Value;

            if (dict.TryGetValue("signature", out object signature))
            {
                Signature = ((byte[])signature).ToImmutableArray();
            }
            else
            {
                Signature = ImmutableArray<byte>.Empty;
            }
        }

        public long Nonce { get; }

        public ImmutableArray<byte> Signer { get; }

        public ImmutableArray<byte> PublicKey { get; }

        public ImmutableArray<ImmutableArray<byte>> UpdatedAddresses { get; }

        public string Timestamp { get; }

        public ImmutableArray<byte> Signature { get; }

        public IEnumerable<IValue> Actions { get; }

        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            info.AddValue("nonce", Nonce);
            info.AddValue("signer", Signer.ToArray());

            // SerializationInfo.AddValue() doesn't seem to work well with
            // 2d arrays.  Concat addresses before encode them (fortunately,
            // addresses all have 20 bytes, fixed-length).
            var updatedAddresses =
                new byte[UpdatedAddresses.Length * Address.Size];
            int i = 0;
            foreach (ImmutableArray<byte> address in UpdatedAddresses)
            {
                address.CopyTo(updatedAddresses, i);
                i += Address.Size;
            }

            info.AddValue("updated_addresses", updatedAddresses);

            info.AddValue("public_key", PublicKey.ToArray());
            info.AddValue("timestamp", Timestamp);
            info.AddValue("actions", Actions.ToImmutableList());

            if (Signature != ImmutableArray<byte>.Empty)
            {
                info.AddValue("signature", Signature.ToArray());
            }
        }

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
