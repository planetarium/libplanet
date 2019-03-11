using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
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
        public Peer(PublicKey publicKey, IPEndPoint endPoint)
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
            EndPoint = info.GetValue<IPEndPoint>("end_point");
        }

        [EqualityKey]
        [Pure]
        public PublicKey PublicKey { get; }

        [EqualityKey]
        [Pure]
        public IPEndPoint EndPoint { get; }

        [Pure]
        public Address Address => new Address(PublicKey);

        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            info.AddValue("public_key", PublicKey.Format(true));
            info.AddValue("end_point", EndPoint);
        }

        public override string ToString()
        {
            return $"{Address}.{EndPoint}";
        }
    }
}
