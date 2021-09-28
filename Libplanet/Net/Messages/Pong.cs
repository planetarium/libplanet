#nullable enable
using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    internal class Pong : Message
    {
        public override MessageType Type => MessageType.Pong;

        public override IEnumerable<byte[]> DataFrames => new byte[][] { };
    }
}
