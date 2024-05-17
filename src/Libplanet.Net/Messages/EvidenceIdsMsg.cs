using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Types.Evidence;

namespace Libplanet.Net.Messages
{
    internal class EvidenceIdsMsg : MessageContent
    {
        public EvidenceIdsMsg(IEnumerable<EvidenceId> evidenceIds)
        {
            Ids = evidenceIds;
        }

        public EvidenceIdsMsg(byte[][] dataFrames)
        {
            int txCount = BitConverter.ToInt32(dataFrames[0], 0);
            Ids = dataFrames
                .Skip(1).Take(txCount)
                .Select(ba => new EvidenceId(ba))
                .ToList();
        }

        public IEnumerable<EvidenceId> Ids { get; }

        public override MessageType Type => MessageType.EvidenceIds;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(BitConverter.GetBytes(Ids.Count()));
                frames.AddRange(Ids.Select(id => id.ToByteArray()));
                return frames;
            }
        }
    }
}
