using System;
using System.Collections.Generic;
using System.Linq;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// List of message IDs that the peer want to have.
    /// </summary>
    /// <seealso cref="HaveMessage"/>
    public class WantMessage : Message
    {
        public WantMessage(MessageId[] messageIds)
        {
            Ids = messageIds;
        }

        public WantMessage(byte[][] dataFrames)
        {
            int msgCount = BitConverter.ToInt32(dataFrames[0], 0);
            Ids = dataFrames
                .Skip(1).Take(msgCount)
                .Select(ba => new MessageId(ba))
                .ToList();
        }

        public IEnumerable<MessageId> Ids { get; }

        public override MessageType Type => MessageType.WantMessage;

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
