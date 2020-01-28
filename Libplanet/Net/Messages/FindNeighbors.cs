using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class FindNeighbors : Message
    {
        // TODO: This message may request exact peer instead of its neighbors.
        public FindNeighbors(Address target)
            : base(LeaveTrail)
        {
            Target = target;
        }

        public FindNeighbors(NetMQFrame[] body)
        {
            Target = new Address(body[0].ToByteArray());
        }

        public Address Target { get; }

        protected override MessageType Type => MessageType.FindNeighbors;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(Target.ToByteArray());
            }
        }
    }
}
