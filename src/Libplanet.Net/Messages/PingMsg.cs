using System;
using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// Check message to determine peer is alive.
    /// </summary>
    /// <seealso cref="PongMsg"/>
    public class PingMsg : MessageContent
    {
        public override MessageType Type => MessageType.Ping;

        public override IEnumerable<byte[]> DataFrames => Array.Empty<byte[]>();
    }
}
