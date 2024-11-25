using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Bencodex;

namespace Libplanet.Net.Messages
{
    public class Message
    {
        private static Codec _codec = new Codec();

        public Message(
            MessageContent content,
            AppProtocolVersion version,
            BoundPeer remote,
            DateTimeOffset timestamp,
            byte[]? identity)
        {
            Content = content;
            Version = version;
            Remote = remote;
            Timestamp = timestamp;
            Identity = identity;
        }

        /// <summary>
        /// The body of the message that contains the message type and data.
        /// </summary>
        public MessageContent Content { get; }

        /// <summary>
        /// The <see cref="AppProtocolVersion"/> of sender of the <see cref="Message"/>.
        /// </summary>
        public AppProtocolVersion Version { get; }

        /// <summary>
        /// The <see cref="BoundPeer"/> representation of sender of the given <see cref="Message"/>.
        /// </summary>
        public BoundPeer Remote { get; }

        /// <summary>
        /// The <see cref="DateTimeOffset"/> of the <see cref="Message"/>.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// The byte array identifies the message to match between
        /// message and its respond used in <see cref="NetMQ"/>.
        /// </summary>
        /// <remarks>
        /// Technically this is not part of the message.
        /// </remarks>
        public byte[]? Identity { get; }

        public static Message FromByteArray(byte[] bytes, byte[]? identity)
        {
            int offset = 0;
            int size = 0;
            int count = BitConverter.ToInt32(bytes, 0);
            offset += 4;

            size = BitConverter.ToInt32(bytes, offset);
            offset += 4;
            byte[] versionBytes = bytes.Skip(offset).Take(size).ToArray();
            offset += size;

            size = BitConverter.ToInt32(bytes, offset);
            offset += 4;
            byte[] peerBytes = bytes.Skip(offset).Take(size).ToArray();
            offset += size;

            size = BitConverter.ToInt32(bytes, offset);
            offset += 4;
            byte[] timestampBytes = bytes.Skip(offset).Take(size).ToArray();
            offset += size;

            size = BitConverter.ToInt32(bytes, offset);
            offset += 4;
            byte[] typeBytes = bytes.Skip(offset).Take(size).ToArray();
            offset += size;

            List<byte[]> contentDataFrames = new List<byte[]>();
            for (int i = 0; i < count; i++)
            {
                size = BitConverter.ToInt32(bytes, offset);
                offset += 4;
                contentDataFrames.Add(bytes.Skip(offset).Take(size).ToArray());
                offset += size;
            }

            if (offset < bytes.Length)
            {
                throw new ArgumentException(
                    $"There are unread bytes left in {nameof(bytes)} with the final offset " +
                    $"{offset} where the length of {nameof(bytes)} is {bytes.Length}",
                    nameof(bytes));
            }

            AppProtocolVersion version =
                AppProtocolVersion.FromToken(Encoding.UTF8.GetString(versionBytes));
            BoundPeer peer = new BoundPeer(_codec.Decode(peerBytes));
            DateTimeOffset timestamp = new DateTimeOffset(
                BitConverter.ToInt64(new ReadOnlySpan<byte>(timestampBytes)),
                TimeSpan.Zero);
            MessageContent.MessageType type =
                (MessageContent.MessageType)BitConverter.ToInt32(new ReadOnlySpan<byte>(typeBytes));

            MessageContent content = CreateMessageContent(type, contentDataFrames.ToArray());
            return new Message(
                content,
                version,
                peer,
                timestamp,
                identity);
        }

        // NOTE: This excludes identity.
        public byte[] ToByteArray()
        {
            byte[][] contentDataFrames = Content.DataFrames.ToArray();
            List<byte> bytes = new List<byte>();

            // NOTE: Excludes Version, Remote, Timestamp, and Type.
            int count = contentDataFrames.Length;
            bytes.AddRange(BitConverter.GetBytes(count));

            byte[] versionBytes = Encoding.UTF8.GetBytes(Version.Token);
            byte[] peerBytes = _codec.Encode(Remote.Bencoded);
            byte[] timestampBytes = BitConverter.GetBytes(Timestamp.Ticks);
            byte[] typeBytes = BitConverter.GetBytes((int)Content.Type);

            bytes.AddRange(BitConverter.GetBytes(versionBytes.Length));
            bytes.AddRange(versionBytes);
            bytes.AddRange(BitConverter.GetBytes(peerBytes.Length));
            bytes.AddRange(peerBytes);
            bytes.AddRange(BitConverter.GetBytes(timestampBytes.Length));
            bytes.AddRange(timestampBytes);
            bytes.AddRange(BitConverter.GetBytes(typeBytes.Length));
            bytes.AddRange(typeBytes);

            foreach (var dataFrame in contentDataFrames)
            {
                bytes.AddRange(BitConverter.GetBytes(dataFrame.Length));
                bytes.AddRange(dataFrame);
            }

            return bytes.ToArray();
        }

        internal static MessageContent CreateMessageContent(
            MessageContent.MessageType type,
            byte[][] dataframes)
        {
            switch (type)
            {
                case MessageContent.MessageType.Ping:
                    return new PingMsg();
                case MessageContent.MessageType.Pong:
                    return new PongMsg();
                case MessageContent.MessageType.GetBlockHashes:
                    return new GetBlockHashesMsg(dataframes);
                case MessageContent.MessageType.TxIds:
                    return new TxIdsMsg(dataframes);
                case MessageContent.MessageType.EvidenceIds:
                    return new EvidenceIdsMsg(dataframes);
                case MessageContent.MessageType.GetBlocks:
                    return new GetBlocksMsg(dataframes);
                case MessageContent.MessageType.GetTxs:
                    return new GetTxsMsg(dataframes);
                case MessageContent.MessageType.GetEvidence:
                    return new GetEvidenceMsg(dataframes);
                case MessageContent.MessageType.Blocks:
                    return new BlocksMsg(dataframes);
                case MessageContent.MessageType.Tx:
                    return new TxMsg(dataframes);
                case MessageContent.MessageType.Evidence:
                    return new EvidenceMsg(dataframes);
                case MessageContent.MessageType.FindNeighbors:
                    return new FindNeighborsMsg(dataframes);
                case MessageContent.MessageType.Neighbors:
                    return new NeighborsMsg(dataframes);
                case MessageContent.MessageType.BlockHeaderMessage:
                    return new BlockHeaderMsg(dataframes);
                case MessageContent.MessageType.BlockHashes:
                    return new BlockHashesMsg(dataframes);
                case MessageContent.MessageType.GetChainStatus:
                    return new GetChainStatusMsg();
                case MessageContent.MessageType.ChainStatus:
                    return new ChainStatusMsg(dataframes);
                case MessageContent.MessageType.DifferentVersion:
                    return new DifferentVersionMsg();
                case MessageContent.MessageType.HaveMessage:
                    return new HaveMessage(dataframes);
                case MessageContent.MessageType.WantMessage:
                    return new WantMessage(dataframes);
                case MessageContent.MessageType.ConsensusProposal:
                    return new ConsensusProposalMsg(dataframes);
                case MessageContent.MessageType.ConsensusVote:
                    return new ConsensusPreVoteMsg(dataframes);
                case MessageContent.MessageType.ConsensusCommit:
                    return new ConsensusPreCommitMsg(dataframes);
                case MessageContent.MessageType.ConsensusMaj23Msg:
                    return new ConsensusMaj23Msg(dataframes);
                case MessageContent.MessageType.ConsensusVoteSetBitsMsg:
                    return new ConsensusVoteSetBitsMsg(dataframes);
                case MessageContent.MessageType.ConsensusProposalClaimMsg:
                    return new ConsensusProposalClaimMsg(dataframes);
                default:
                    throw new InvalidCastException($"Given type {type} is not a valid message.");
            }
        }
    }
}
