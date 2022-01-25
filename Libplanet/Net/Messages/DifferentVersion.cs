using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    internal class DifferentVersion : Message
    {
        public override MessageType Type => MessageType.DifferentVersion;

        public override IEnumerable<byte[]> DataFrames => new byte[][] { };
    }
}
