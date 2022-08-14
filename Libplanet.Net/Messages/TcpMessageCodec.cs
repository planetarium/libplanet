using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Bencodex;
using Libplanet.Crypto;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Messages
{
    public class TcpMessageCodec : IMessageCodec<byte[]>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private readonly Codec _codec;

        /// <summary>
        /// Creates a <see cref="TcpMessageCodec"/> instance.
        /// </summary>
        public TcpMessageCodec()
        {
            _codec = new Codec();
        }

        /// <inheritdoc/>
        public byte[] Encode(
            Message message,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            Peer peer,
            DateTimeOffset timestamp)
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

            var frames = new List<byte[]>();

            // Write body (by concrete class)
            foreach (byte[] frame in message.DataFrames)
            {
                frames.Add(frame);
            }

            // Write headers. (inverse order, version-type-peer-timestamp)
            frames.Insert(0, BitConverter.GetBytes(timestamp.Ticks));
            frames.Insert(0, _codec.Encode(peer.ToBencodex()));
            frames.Insert(0, BitConverter.GetBytes((int)message.Type));
            frames.Insert(0, Encoding.ASCII.GetBytes(appProtocolVersion.Token));

            // Make and insert signature
            byte[] signature = privateKey.Sign(
                frames.Aggregate(new byte[] { }, (arr, bytes) => arr.Concat(bytes).ToArray()));
            frames.Insert((int)Message.MessageFrame.Sign, signature);

            if (message.Identity is { } to)
            {
                frames.Insert(0, message.Identity);
            }

            using var stream = new MemoryStream();
            stream.Write(BitConverter.GetBytes(frames.Count), 0, sizeof(int));
            foreach (var frame in frames)
            {
                stream.Write(BitConverter.GetBytes(frame.Length), 0, sizeof(int));
                stream.Write(frame, 0, frame.Length);
            }

            return stream.ToArray();
        }

        /// <inheritdoc/>
        public Message Decode(
            byte[] encoded,
            bool reply)
        {
            if (encoded.Length == 0)
            {
                throw new ArgumentException("Can't parse empty byte array.");
            }

            using var stream = new MemoryStream(encoded);
            byte[] buffer = new byte[sizeof(int)];
            stream.Read(buffer, 0, sizeof(int));
            int frameCount = BitConverter.ToInt32(buffer, 0);
            List<byte[]> frames = new List<byte[]>();
            for (var i = 0; i < frameCount; i++)
            {
                buffer = new byte[sizeof(int)];
                stream.Read(buffer, 0, sizeof(int));
                int frameSize = BitConverter.ToInt32(buffer, 0);
                buffer = new byte[frameSize];
                stream.Read(buffer, 0, frameSize);
                frames.Add(buffer);
            }

            // (reply == true)            [version, type, peer, timestamp, sign, frames...]
            // (reply == false) [identity, version, type, peer, timestamp, sign, frames...]
            List<byte[]> remains = reply ? frames : frames.Skip(1).ToList();

            var versionToken = Encoding.ASCII.GetString(remains[(int)Message.MessageFrame.Version]);

            AppProtocolVersion remoteVersion = AppProtocolVersion.FromToken(versionToken);
            Peer remotePeer;
            var dictionary =
                (Bencodex.Types.Dictionary)_codec.Decode(remains[(int)Message.MessageFrame.Peer]);
            try
            {
                remotePeer = new BoundPeer(dictionary);
            }
            catch (KeyNotFoundException)
            {
                remotePeer = new Peer(dictionary);
            }

            var type =
                (Message.MessageType)BitConverter.ToInt32(
                    remains[(int)Message.MessageFrame.Type],
                    0);
            long ticks = BitConverter.ToInt64(remains[(int)Message.MessageFrame.Timestamp], 0);
            var timestamp = new DateTimeOffset(ticks, TimeSpan.Zero);
            var currentTime = DateTimeOffset.UtcNow;

            byte[] signature = remains[(int)Message.MessageFrame.Sign];

            byte[][] body = remains.Skip(Message.CommonFrames).ToArray();

            Message message = CreateMessage(type, body);
            message.Version = remoteVersion;
            message.Remote = remotePeer;
            message.Timestamp = timestamp;

            var headerWithoutSign = new[]
            {
                remains[(int)Message.MessageFrame.Version],
                remains[(int)Message.MessageFrame.Type],
                remains[(int)Message.MessageFrame.Peer],
                remains[(int)Message.MessageFrame.Timestamp],
            };

            var messageToVerify = headerWithoutSign.Concat(body).Aggregate(
                new byte[] { },
                (arr, bytes) => arr.Concat(bytes).ToArray());
            if (!remotePeer.PublicKey.Verify(messageToVerify, signature))
            {
                throw new InvalidMessageSignatureException(
                    "The signature of an encoded message is invalid.",
                    remotePeer,
                    remotePeer.PublicKey,
                    messageToVerify,
                    signature);
            }

            if (!reply)
            {
                message.Identity = frames[0];
            }

            return message;
        }

        private Message CreateMessage(Message.MessageType type, byte[][] dataframes)
        {
            switch (type)
            {
                case Message.MessageType.Ping:
                    return new PingMsg();
                case Message.MessageType.Pong:
                    return new PongMsg();
                case Message.MessageType.GetBlockHashes:
                    return new GetBlockHashesMsg(dataframes);
                case Message.MessageType.TxIds:
                    return new TxIdsMsg(dataframes);
                case Message.MessageType.GetBlocks:
                    return new GetBlocksMsg(dataframes);
                case Message.MessageType.GetTxs:
                    return new GetTxsMsg(dataframes);
                case Message.MessageType.Blocks:
                    return new BlocksMsg(dataframes);
                case Message.MessageType.Tx:
                    return new TxMsg(dataframes);
                case Message.MessageType.FindNeighbors:
                    return new FindNeighborsMsg(dataframes);
                case Message.MessageType.Neighbors:
                    return new NeighborsMsg(dataframes);
                case Message.MessageType.BlockHeaderMessage:
                    return new BlockHeaderMsg(dataframes);
                case Message.MessageType.BlockHashes:
                    return new BlockHashesMsg(dataframes);
                case Message.MessageType.GetChainStatus:
                    return new GetChainStatusMsg();
                case Message.MessageType.ChainStatus:
                    return new ChainStatusMsg(dataframes);
                case Message.MessageType.DifferentVersion:
                    return new DifferentVersionMsg();
                case Message.MessageType.ConsensusPropose:
                    return new ConsensusPropose(dataframes);
                case Message.MessageType.ConsensusVote:
                    return new ConsensusVote(dataframes);
                case Message.MessageType.ConsensusCommit:
                    return new ConsensusCommit(dataframes);
                default:
                    throw new InvalidCastException($"Given type {type} is not a valid message.");
            }
        }
    }
}
