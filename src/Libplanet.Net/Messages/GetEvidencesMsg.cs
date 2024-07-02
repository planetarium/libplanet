using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Types.Evidences;

namespace Libplanet.Net.Messages
{
    internal class GetEvidencesMsg : MessageContent
    {
        public GetEvidencesMsg(IEnumerable<EvidenceId> evidenceIds)
        {
            EvidenceIds = evidenceIds;
        }

        public GetEvidencesMsg(byte[][] dataFrames)
        {
            int txCount = BitConverter.ToInt32(dataFrames[0], 0);
            EvidenceIds = dataFrames
                .Skip(1).Take(txCount)
                .Select(ba => new EvidenceId(ba))
                .ToList();
        }

        public IEnumerable<EvidenceId> EvidenceIds { get; }

        public override MessageType Type => MessageType.GetEvidences;

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
