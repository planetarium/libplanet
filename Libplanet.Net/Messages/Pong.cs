using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A reply to <see cref="Ping"/>.
    /// </summary>
    /// <seealso cref="Ping"/>
    public class Pong : Message
    {
        public override MessageType Type => MessageType.Pong;

        public override IEnumerable<byte[]> DataFrames => new byte[][] { };
    }
}
