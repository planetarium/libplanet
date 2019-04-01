using System;
using System.Diagnostics.Contracts;
using System.Net;
using System.Runtime.Serialization;
using Libplanet.Crypto;
using Libplanet.Serialization;
using Uno;

namespace Libplanet.Net
{
    [Serializable]
    [GeneratedEquality]
    public partial class Peer : ISerializable
    {
        public Peer(PublicKey publicKey, DnsEndPoint endPoint)
        {
            if (publicKey == null)
            {
                throw new ArgumentNullException(nameof(publicKey));
            }
            else if (endPoint == null)
            {
                throw new ArgumentNullException(nameof(endPoint));
            }

            PublicKey = publicKey;
            EndPoint = endPoint;
        }

        protected Peer(SerializationInfo info, StreamingContext context)
        {
            PublicKey = new PublicKey(info.GetValue<byte[]>("public_key"));
            EndPoint = new DnsEndPoint(
                info.GetString("end_point_host"),
                info.GetInt32("end_point_port"));
        }

        [EqualityKey]
        [Pure]
        public PublicKey PublicKey { get; }

        [EqualityKey]
        [Pure]
        public DnsEndPoint EndPoint { get; }

        [Pure]
        public Address Address => new Address(PublicKey);

        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            info.AddValue("public_key", PublicKey.Format(true));
            info.AddValue("end_point_host", EndPoint.Host);
            info.AddValue("end_point_port", EndPoint.Port);
        }

        public override string ToString()
        {
            return $"{Address}.{EndPoint}";
        }
    }
}
