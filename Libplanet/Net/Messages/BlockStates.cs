using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using System.Text;
using Bencodex;
using Bencodex.Types;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class BlockStates : Message
    {
        private static readonly Codec _codec = new Codec();

        public BlockStates(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<string, IValue> states
        )
        {
            BlockHash = blockHash;
            States = states;
        }

        public BlockStates(NetMQFrame[] frames)
        {
            BlockHash = new HashDigest<SHA256>(frames[0].Buffer);
            if (frames[1].ConvertToInt32() < 0)
            {
                States = null;
                return;
            }

            var states = new Dictionary<string, IValue>((frames.Length - 2) / 3);
            for (int i = 2; i < frames.Length; i += 3)
            {
                IValue value = frames[i + 1].ConvertToInt32() == 1
                    ? _codec.Decode(frames[i + 2].Buffer)
                    : null;
                states[frames[i].ConvertToString(Encoding.UTF8)] = value;
            }

            States = states.ToImmutableDictionary();
        }

        public HashDigest<SHA256> BlockHash { get; }

        public IImmutableDictionary<string, IValue> States { get; }

        protected override MessageType Type => MessageType.BlockStates;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(BlockHash.ToByteArray());
                int count = States?.Count ?? -1;
                yield return new NetMQFrame(NetworkOrderBitsConverter.GetBytes(count));

                if (States is null)
                {
                    yield break;
                }

                foreach (KeyValuePair<string, IValue> kv in States)
                {
                    yield return new NetMQFrame(kv.Key, Encoding.UTF8);
                    yield return new NetMQFrame(
                        NetworkOrderBitsConverter.GetBytes(kv.Value is null ? 0 : 1)
                    );
                    yield return new NetMQFrame(
                        kv.Value is null ? new byte[0] : _codec.Encode(kv.Value)
                    );
                }
            }
        }
    }
}
