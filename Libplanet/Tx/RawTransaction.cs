using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization;
using Libplanet.Serialization;

[assembly: InternalsVisibleTo("Libplanet.Tests")]
namespace Libplanet.Tx
{
    [Equals]
    internal struct RawTransaction : ISerializable
    {
        public RawTransaction(SerializationInfo info, StreamingContext context)
            : this(
                nonce: info.GetInt64("nonce"),
                signer: info.GetValue<byte[]>("signer"),
                publicKey: info.GetValue<byte[]>("public_key"),
                updatedAddresses: To2dArray(
                    info.GetValue<byte[]>("updated_addresses"),
                    Address.Size),
                timestamp: info.GetString("timestamp"),
                signature: info.GetValue<byte[]>("signature"),
                actions: info.GetValue<IEnumerable>(
                    "actions").OfType<IDictionary<string, object>>()
              )
        {
        }

        public RawTransaction(
            long nonce,
            byte[] signer,
            byte[][] updatedAddresses,
            byte[] publicKey,
            string timestamp,
            IEnumerable<IDictionary<string, object>> actions
        )
            : this(
                nonce,
                signer,
                updatedAddresses,
                publicKey,
                timestamp,
                actions,
                null
            )
        {
        }

        public RawTransaction(
            long nonce,
            byte[] signer,
            byte[][] updatedAddresses,
            byte[] publicKey,
            string timestamp,
            IEnumerable<IDictionary<string, object>> actions,
            byte[] signature
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
            Signer = (byte[])dict["signer"];
            UpdatedAddresses = To2dArray(
                (byte[])dict["updated_addresses"],
                Address.Size);
            PublicKey = (byte[])dict["public_key"];
            Timestamp = (string)dict["timestamp"];
            Actions = ((IEnumerable)dict["actions"])
                .Cast<Dictionary<string, object>>()
                .ToList();
            if (dict.TryGetValue("signature", out object signature))
            {
                Signature = (byte[])signature;
            }
            else
            {
                Signature = null;
            }
        }

        public long Nonce { get; }

        public byte[] Signer { get; }

        public byte[] PublicKey { get; }

        public byte[][] UpdatedAddresses { get; }

        public string Timestamp { get; }

        public byte[] Signature { get; }

        public IEnumerable<IDictionary<string, object>> Actions { get; }

        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            info.AddValue("nonce", Nonce);
            info.AddValue("signer", Signer);

            // SerializationInfo.AddValue() doesn't seem to work well with
            // 2d arrays.  Concat addresses before encode them (fortunately,
            // addresses all have 20 bytes, fixed-length).
            var updatedAddresses =
                new byte[UpdatedAddresses.Length * Address.Size];
            int i = 0;
            foreach (byte[] address in UpdatedAddresses)
            {
                address.CopyTo(updatedAddresses, i);
                i += Address.Size;
            }

            info.AddValue("updated_addresses", updatedAddresses);

            info.AddValue("public_key", PublicKey);
            info.AddValue("timestamp", Timestamp);
            info.AddValue("actions", Actions);

            if (Signature != null)
            {
                info.AddValue("signature", Signature);
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
                signature
            );
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(Signature);
        }

        public override string ToString()
        {
            string updatedAddresses = string.Join(
                string.Empty,
                UpdatedAddresses.Select(a => "\n    " + ByteUtil.Hex(a))
            );
            return $@"{nameof(RawTransaction)}
  {nameof(Nonce)} = {Nonce.ToString()}
  {nameof(Signer)} = {ByteUtil.Hex(Signer)}
  {nameof(PublicKey)} = {ByteUtil.Hex(PublicKey)}
  {nameof(UpdatedAddresses)} = {updatedAddresses}
  {nameof(Timestamp)} = {Timestamp}
  {nameof(Signature)} = {ByteUtil.Hex(Signature)}";
        }

        private static T[][] To2dArray<T>(T[] array, int chunk)
        {
            if (array.Length % chunk > 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(array),
                    $"The array length must be multiples of {chunk}."
                );
            }

            int resultLength = array.Length / chunk;
            T[][] result = new T[resultLength][];
            for (int i = 0; i < resultLength; i++)
            {
                result[i] = new T[chunk];
                Array.Copy(array, i * chunk, result[i], 0, chunk);
            }

            return result;
        }
    }
}
