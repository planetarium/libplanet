using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A reply to <see cref="PingMsg"/>.
    /// </summary>
    /// <seealso cref="PingMsg"/>
    public class PongMsg : Message
    {
        public override MessageType Type => MessageType.Pong;

        public override IEnumerable<byte[]> DataFrames => new byte[][] { };
    }
}
