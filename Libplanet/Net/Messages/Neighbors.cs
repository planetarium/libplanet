using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Neighbors : Message
    {
        public Neighbors(IEnumerable<BoundPeer> found)
        {
            Found = found.ToImmutableList();
        }

        public Neighbors(NetMQFrame[] body)
        {
            int foundCount = body[0].ConvertToInt32();
            Found = body.Skip(1).Take(foundCount)
                .Select(f => DeserializePeer(f.ToByteArray()) as BoundPeer)
                .ToImmutableList();
        }

        public IImmutableList<BoundPeer> Found { get; }

        protected override MessageType Type => MessageType.Neighbors;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(Found.Count));

                foreach (BoundPeer peer in Found)
                {
                    yield return new NetMQFrame(SerializePeer(peer));
                }
            }
        }
    }
}
