using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Types.Evidence;

namespace Libplanet.Net.Messages
{
    internal class GetEvidenceMsg : MessageContent
    {
        public GetEvidenceMsg(IEnumerable<EvidenceId> evidenceIds)
        {
            EvidenceIds = evidenceIds;
        }

        public GetEvidenceMsg(byte[][] dataFrames)
        {
            int txCount = BitConverter.ToInt32(dataFrames[0], 0);
            EvidenceIds = dataFrames
                .Skip(1).Take(txCount)
                .Select(ba => new EvidenceId(ba))
                .ToList();
        }

        public IEnumerable<EvidenceId> EvidenceIds { get; }

        public override MessageType Type => MessageType.GetEvidence;

        public override IEnumerable<byte[]> DataFrames
        {
            get
            {
                var frames = new List<byte[]>();
                frames.Add(BitConverter.GetBytes(EvidenceIds.Count()));
                frames.AddRange(EvidenceIds.Select(id => id.ToByteArray()));
                return frames;
            }
        }
    }
}
