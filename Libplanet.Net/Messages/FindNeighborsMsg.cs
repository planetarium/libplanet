using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// Message containing request for nearby peers.
    /// </summary>
    /// <seealso cref="NeighborsMsg"/>
    public class FindNeighborsMsg : Message
    {
        // TODO: This message may request exact peer instead of its neighbors.
        public FindNeighborsMsg(Address target)
        {
            Target = target;
        }

        public FindNeighborsMsg(byte[][] dataFrames)
        {
            Target = new Address(dataFrames[0]);
        }

        public Address Target { get; }

        public override MessageType Type => MessageType.FindNeighbors;

        public override IEnumerable<byte[]> DataFrames => new[]
        {
            Target.ToByteArray(),
        };
    }
}
