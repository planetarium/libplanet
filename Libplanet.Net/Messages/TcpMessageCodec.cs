using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Text;
using Bencodex;
using Libplanet.Crypto;

namespace Libplanet.Net.Messages
{
    public class TcpMessageCodec : IMessageCodec<byte[]>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private readonly Codec _codec;
        private readonly MessageValidator _messageValidator;

        /// <summary>
        /// Creates a <see cref="TcpMessageCodec"/> instance.
        /// </summary>
        /// <param name="appProtocolVersion">The <see cref="Apv"/> to use
        /// when encoding and decoding.</param>
        /// <param name="trustedAppProtocolVersionSigners">The set of signers to trust when
        /// decoding a message.</param>
        /// <param name="messageTimestampBuffer">A <see cref="TimeSpan"/> to use as a buffer
        /// when decoding <see cref="Message"/>s.</param>
        /// <param name="differentAppProtocolVersionEncountered">A callback method that gets
        /// invoked when a an <see cref="AppProtocolVersion"/> by a <em>trusted</em> signer that is
        /// different from <see cref="Apv"/> is encountered.</param>
        /// <seealso cref="MessageValidator"/>.
        public TcpMessageCodec(
            AppProtocolVersion appProtocolVersion = default,
            IImmutableSet<PublicKey>? trustedAppProtocolVersionSigners = null,
            TimeSpan? messageTimestampBuffer = null,
            DifferentAppProtocolVersionEncountered? differentAppProtocolVersionEncountered = null)
        {
            _codec = new Codec();
            _messageValidator = new MessageValidator(
                appProtocolVersion,
                trustedAppProtocolVersionSigners,
                messageTimestampBuffer,
                differentAppProtocolVersionEncountered);
        }

        /// <inheritdoc/>
        public AppProtocolVersion Apv =>
            _messageValidator.Apv;

        /// <inheritdoc/>
        public IImmutableSet<PublicKey>? TrustedApvSigners =>
            _messageValidator.TrustedApvSigners;

        /// <inheritdoc/>
        public TimeSpan? MessageTimestampBuffer =>
            _messageValidator.MessageTimestampBuffer;

        /// <inheritdoc/>
        public DifferentAppProtocolVersionEncountered? DifferentApvEncountered =>
            _messageValidator.DifferentApvEncountered;

        /// <inheritdoc/>
        public byte[] Encode(
            Message message,
            PrivateKey privateKey,
            Peer peer,
            DateTimeOffset timestamp)
        {
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
            frames.Insert(0, Encoding.ASCII.GetBytes(Apv.Token));

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
            var buffer = new byte[sizeof(int)];
            stream.Read(buffer, 0, sizeof(int));
            int frameCount = BitConverter.ToInt32(buffer, 0);
            var frames = new List<byte[]>();
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

            _messageValidator.ValidateAppProtocolVersion(
                remotePeer,
                reply ? new byte[] { } : frames[0],
                remoteVersion);

            var type =
                (Message.MessageType)BitConverter.ToInt32(
                    remains[(int)Message.MessageFrame.Type],
                    0);
            long ticks = BitConverter.ToInt64(remains[(int)Message.MessageFrame.Timestamp], 0);
            var timestamp = new DateTimeOffset(ticks, TimeSpan.Zero);
            var currentTime = DateTimeOffset.UtcNow;
            _messageValidator.ValidateTimestamp(remotePeer, currentTime, timestamp);

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
            _messageValidator.ValidateSignature(
                remotePeer, remotePeer.PublicKey, messageToVerify, signature);

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
                    return new Ping();
                case Message.MessageType.Pong:
                    return new Pong();
                case Message.MessageType.GetBlockHashes:
                    return new GetBlockHashes(dataframes);
                case Message.MessageType.TxIds:
                    return new TxIds(dataframes);
                case Message.MessageType.GetBlocks:
                    return new GetBlocks(dataframes);
                case Message.MessageType.GetTxs:
                    return new GetTxs(dataframes);
                case Message.MessageType.Blocks:
                    return new Blocks(dataframes);
                case Message.MessageType.Tx:
                    return new Tx(dataframes);
                case Message.MessageType.FindNeighbors:
                    return new FindNeighbors(dataframes);
                case Message.MessageType.Neighbors:
                    return new Neighbors(dataframes);
                case Message.MessageType.BlockHeaderMessage:
                    return new BlockHeaderMessage(dataframes);
                case Message.MessageType.BlockHashes:
                    return new BlockHashes(dataframes);
                case Message.MessageType.GetChainStatus:
                    return new GetChainStatus();
                case Message.MessageType.ChainStatus:
                    return new ChainStatus(dataframes);
                case Message.MessageType.DifferentVersion:
                    return new DifferentVersion();
                default:
                    throw new InvalidCastException($"Given type {type} is not a valid message.");
            }
        }
    }
}
