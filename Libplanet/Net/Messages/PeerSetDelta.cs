using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Crypto;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class PeerSetDelta : Message
    {
        public PeerSetDelta(Net.PeerSetDelta peerSetDelta)
        {
            Delta = peerSetDelta;
        }

        public Net.PeerSetDelta Delta { get; }

        protected override MessageType Type =>
            MessageType.PeerSetDelta;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                using (var stream = new MemoryStream())
                {
                    var formatter = new BinaryFormatter();
                    formatter.Serialize(stream, Delta);
                    yield return new NetMQFrame(stream.ToArray());
                }
            }
        }

        public static Message ParseBody(NetMQFrame[] frames)
        {
            byte[] payload = frames[0].ToByteArray();
            using (var stream = new MemoryStream(payload))
            {
                var formatter = new BinaryFormatter();
                return new PeerSetDelta(
                    (Net.PeerSetDelta)formatter.Deserialize(stream));
            }
        }
    }
}
