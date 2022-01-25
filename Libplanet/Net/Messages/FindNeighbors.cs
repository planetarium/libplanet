using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    public class FindNeighbors : Message
    {
        // TODO: This message may request exact peer instead of its neighbors.
        public FindNeighbors(Address target)
        {
            Target = target;
        }

        public FindNeighbors(byte[][] dataFrames)
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
