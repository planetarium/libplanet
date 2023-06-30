using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex;
using Libplanet.Crypto;
using Libplanet.Net.Transports;
using NetMQ;

namespace Libplanet.Net.Messages
{
    public class NetMQMessageCodec : IMessageCodec<NetMQMessage>
    {
        public static readonly int CommonFrames =
            Enum.GetValues(typeof(MessageFrame)).Length;

        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private readonly Codec _codec;

        /// <summary>
        /// Creates a <see cref="NetMQMessageCodec"/> instance.
        /// </summary>
        public NetMQMessageCodec()
        {
            _codec = new Codec();
        }

        public enum MessageFrame
        {
            /// <summary>
            /// Frame containing <see cref="AppProtocolVersion"/>.
            /// </summary>
            Version = 0,

            /// <summary>
            /// Frame containing the type of the message.
            /// </summary>
            Type = 1,

            /// <summary>
            /// Frame containing the sender <see cref="BoundPeer"/> of the<see cref="Message"/>.
            /// </summary>
            Peer = 2,

            /// <summary>
            /// Frame containing the datetime when the <see cref="Message"/> is created.
            /// </summary>
            Timestamp = 3,

            /// <summary>
            /// Frame containing signature of the <see cref="Message"/>.
            /// </summary>
            Sign = 4,
        }

        /// <inheritdoc/>
        public NetMQMessage Encode(
            MessageContent content,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            BoundPeer peer,
            DateTimeOffset timestamp,
            byte[]? identity = null)
        {
            if (!privateKey.PublicKey.Equals(peer.PublicKey))
            {
                throw new InvalidCredentialException(
                    $"An invalid private key was provided: " +
                    $"the provided private key's expected public key is {peer.PublicKey} " +
                    $"but its actual public key is {privateKey.PublicKey}.",
                    peer.PublicKey,
                    privateKey.PublicKey);
            }

            var netMqMessage = new NetMQMessage();

            // Write body (by concrete class)
            foreach (byte[] frame in content.DataFrames)
            {
                netMqMessage.Append(frame);
            }

            // Write headers. (inverse order, version-type-peer-timestamp)
            netMqMessage.Push(timestamp.Ticks);
            netMqMessage.Push(_codec.Encode(peer.Bencoded));
            netMqMessage.Push((int)content.Type);
            netMqMessage.Push(appProtocolVersion.Token);

            // Make and insert signature
            byte[] signature = privateKey.Sign(netMqMessage.ToByteArray());
            List<NetMQFrame> frames = netMqMessage.ToList();
            frames.Insert((int)MessageFrame.Sign, new NetMQFrame(signature));
            netMqMessage = new NetMQMessage(frames);

            if (identity != null)
            {
                netMqMessage.Push(identity);
            }

            return netMqMessage;
        }

        /// <summary>
        /// Parses a <see cref="MessageContent.MessageType"/> from given <see cref="NetMQMessage"/>.
        /// </summary>
        /// <param name="encoded">A encoded <see cref="NetMQMessage"/>.</param>
        /// <param name="reply">A flag to express whether the target is a reply of other message.
        /// </param>
        /// <exception cref="IndexOutOfRangeException">Thrown if given <see cref="NetMQMessage"/>
        /// has not enough <see cref="NetMQFrame"/> for parsing a message type.</exception>
        /// <returns>Returns a <see cref="MessageContent.MessageType"/> of given
        /// <paramref name="encoded"/>. If given value cannot be
        /// interpreted in <see cref="MessageContent.MessageType"/>,
        /// this would return a integer number.</returns>
        public MessageContent.MessageType ParseMessageType(NetMQMessage encoded, bool reply)
            => (MessageContent.MessageType)encoded[(int)MessageFrame.Type + (reply ? 0 : 1)]
                .ConvertToInt32();

        /// <inheritdoc/>
        public Message Decode(NetMQMessage encoded, bool reply)
        {
            if (encoded.FrameCount == 0)
            {
                throw new ArgumentException("Can't parse empty NetMQMessage.");
            }

            // (reply == true)            [version, type, peer, timestamp, sign, frames...]
            // (reply == false) [identity, version, type, peer, timestamp, sign, frames...]
            NetMQFrame[] remains = reply ? encoded.ToArray() : encoded.Skip(1).ToArray();

            var versionToken = remains[(int)MessageFrame.Version].ConvertToString();

            AppProtocolVersion version = AppProtocolVersion.FromToken(versionToken);
            var dictionary = _codec.Decode(remains[(int)MessageFrame.Peer].ToByteArray());
            var remote = new BoundPeer(dictionary);

            var type =
                (MessageContent.MessageType)remains[(int)MessageFrame.Type].ConvertToInt32();
            var ticks = remains[(int)MessageFrame.Timestamp].ConvertToInt64();
            var timestamp = new DateTimeOffset(ticks, TimeSpan.Zero);

            byte[] signature = remains[(int)MessageFrame.Sign].ToByteArray();

            NetMQFrame[] body = remains.Skip(CommonFrames).ToArray();

            MessageContent content = CreateMessage(
                type,
                body.Select(frame => frame.ToByteArray()).ToArray());

            var headerWithoutSign = new[]
            {
                remains[(int)MessageFrame.Version],
                remains[(int)MessageFrame.Type],
                remains[(int)MessageFrame.Peer],
                remains[(int)MessageFrame.Timestamp],
            };

            var messageToVerify = headerWithoutSign.Concat(body).ToByteArray();
            if (!remote.PublicKey.Verify(messageToVerify, signature))
            {
                throw new InvalidMessageSignatureException(
                    "The signature of an encoded message is invalid.",
                    remote,
                    remote.PublicKey,
                    messageToVerify,
                    signature);
            }

            byte[]? identity = reply ? null : encoded[0].Buffer.ToArray();

            return new Message(content, version, remote, timestamp, identity);
        }

        internal static MessageContent CreateMessage(
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
                case MessageContent.MessageType.GetBlocks:
                    return new GetBlocksMsg(dataframes);
                case MessageContent.MessageType.GetTxs:
                    return new GetTxsMsg(dataframes);
                case MessageContent.MessageType.Blocks:
                    return new BlocksMsg(dataframes);
                case MessageContent.MessageType.Tx:
                    return new TxMsg(dataframes);
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
                default:
                    throw new InvalidCastException($"Given type {type} is not a valid message.");
            }
        }
    }
}
