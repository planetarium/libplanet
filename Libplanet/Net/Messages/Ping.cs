#nullable enable
using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    internal class Ping : Message
    {
        public override MessageType Type => MessageType.Ping;

        public override IEnumerable<byte[]> DataFrames => new byte[][] { };
    }
}
