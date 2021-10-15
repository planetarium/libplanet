#nullable enable
using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    internal class GetChainStatus : Message
    {
        public override MessageType Type => MessageType.GetChainStatus;

        public override IEnumerable<byte[]> DataFrames => new byte[][] { };
    }
}
