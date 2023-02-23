using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    internal class GetChainStatusMsg : MessageContent
    {
        public override MessageType Type => MessageType.GetChainStatus;

        public override IEnumerable<byte[]> DataFrames => new byte[][] { };
    }
}
