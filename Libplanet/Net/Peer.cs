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
        public Peer(PublicKey publicKey, IImmutableList<IPEndPoint> endPoints)
        {
            if (publicKey == null)
            {
                throw new ArgumentNullException(nameof(publicKey));
            }
            else if (endPoints == null)
            {
                throw new ArgumentNullException(nameof(endPoints));
            }

            PublicKey = publicKey;
            EndPoints = endPoints;
        }

        public Peer(PublicKey publicKey, IEnumerable<IPEndPoint> endPoints)
            : this(publicKey, endPoints.ToImmutableArray())
        {
        }

        protected Peer(SerializationInfo info, StreamingContext context)
        {
            PublicKey = new PublicKey(info.GetValue<byte[]>("public_key"));
            var points = info.GetValue<List<string>>("endPoints");
            var endPoints = new List<IPEndPoint>();
            foreach (var point in points)
            {
                var split = point.Split(':');
                var endPoint = new IPEndPoint(
                    IPAddress.Parse(split[0]),
                    int.Parse(split[1]));
                endPoints.Add(endPoint);
            }

            EndPoints = endPoints.ToImmutableList();
        }

        [EqualityKey]
        [Pure]
        public PublicKey PublicKey { get; }

        [EqualityKey]
        [Pure]
        public IImmutableList<IPEndPoint> EndPoints { get; }

        [Pure]
        public Address Address => new Address(PublicKey);

        [Pure]
        public Peer AddEndPoint(IPEndPoint endPoint) =>
            new Peer(PublicKey, EndPoints.Add(endPoint));

        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            info.AddValue("public_key", PublicKey.Format(true));
            info.AddValue(
                "endPoints",
                EndPoints.Select(e => e.ToString()).ToList());
        }

        public override string ToString()
        {
            var endPointStrings = EndPoints.Select(e => e.ToString());
            return string.Join(
                ",",
                new[] { Address.ToString() }.Concat(endPointStrings)
            );
        }
    }
}
