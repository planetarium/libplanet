using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A reply to any messages with different <see cref="AppProtocolVersion"/>.
    /// Contains the expected and actual <see cref="AppProtocolVersion"/>
    /// value of the message.
    /// </summary>
    public class DifferentVersionMsg : Message
    {
        public override MessageType Type => MessageType.DifferentVersion;

        public override IEnumerable<byte[]> DataFrames => new byte[][] { };
    }
}
