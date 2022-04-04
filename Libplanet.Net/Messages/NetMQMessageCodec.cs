using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using Bencodex;
using Libplanet.Crypto;
using NetMQ;

namespace Libplanet.Net.Messages
{
    public class NetMQMessageCodec : IMessageCodec<NetMQMessage>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private readonly Codec _codec;
        private readonly AppProtocolVersion _localAppProtocolVersion;
        private readonly IImmutableSet<PublicKey>? _trustedAppProtocolVersionSigners;
        private readonly TimeSpan? _messageTimestampBuffer;

        /// <summary>
        /// Creates a <see cref="NetMQMessageCodec"/> instance.
        /// </summary>
        /// <param name="localAppProtocolVersion">The <see cref="LocalAppProtocolVersion"/> to use
        /// when encoding and decoding.</param>
        /// <param name="trustedAppProtocolVersionSigners">The set of signers to trust when
        /// decoding a message.</param>
        /// <param name="messageTimestampBuffer">A <see cref="TimeSpan"/> to use as a buffer
        /// when decoding <see cref="Message"/>s.</param>
        public NetMQMessageCodec(
            AppProtocolVersion localAppProtocolVersion = default,
            IImmutableSet<PublicKey>? trustedAppProtocolVersionSigners = null,
            TimeSpan? messageTimestampBuffer = null)
        {
            _codec = new Codec();
            _localAppProtocolVersion = localAppProtocolVersion;
            _trustedAppProtocolVersionSigners = trustedAppProtocolVersionSigners;
            _messageTimestampBuffer = messageTimestampBuffer;
        }

        /// <inheritdoc/>
        public AppProtocolVersion LocalAppProtocolVersion => _localAppProtocolVersion;

        /// <inheritdoc/>
        public IImmutableSet<PublicKey>? TrustedAppProtocolVersionSigners =>
            _trustedAppProtocolVersionSigners;

        /// <inheritdoc/>
        public NetMQMessage Encode(
            Message message,
            PrivateKey privateKey,
            Peer peer,
            DateTimeOffset timestamp)
        {
            var netMqMessage = new NetMQMessage();

            // Write body (by concrete class)
            foreach (byte[] frame in message.DataFrames)
            {
                netMqMessage.Append(frame);
            }

            // Write headers. (inverse order, version-type-peer-timestamp)
            netMqMessage.Push(timestamp.Ticks);
            netMqMessage.Push(_codec.Encode(peer.ToBencodex()));
            netMqMessage.Push((int)message.Type);
            netMqMessage.Push(LocalAppProtocolVersion.Token);

            // Make and insert signature
            byte[] signature = privateKey.Sign(netMqMessage.ToByteArray());
            List<NetMQFrame> frames = netMqMessage.ToList();
            frames.Insert((int)Message.MessageFrame.Sign, new NetMQFrame(signature));
            netMqMessage = new NetMQMessage(frames);

            if (message.Identity is { } to)
            {
                netMqMessage.Push(to);
            }

            return netMqMessage;
        }

        /// <inheritdoc/>
        public Message Decode(
            NetMQMessage encoded,
            bool reply,
            Action<byte[], Peer, AppProtocolVersion> appProtocolVersionValidator,
            DifferentAppProtocolVersionEncountered? differentAppProtocolVersionEncountered)
        {
            if (encoded.FrameCount == 0)
            {
                throw new ArgumentException("Can't parse empty NetMQMessage.");
            }

            // (reply == true)            [version, type, peer, timestamp, sign, frames...]
            // (reply == false) [identity, version, type, peer, timestamp, sign, frames...]
            NetMQFrame[] remains = reply ? encoded.ToArray() : encoded.Skip(1).ToArray();

            var versionToken = remains[(int)Message.MessageFrame.Version].ConvertToString();

            AppProtocolVersion remoteVersion = AppProtocolVersion.FromToken(versionToken);
            Peer remotePeer;
            var dictionary =
                (Bencodex.Types.Dictionary)_codec.Decode(
                    remains[(int)Message.MessageFrame.Peer].ToByteArray());
            try
            {
                remotePeer = new BoundPeer(dictionary);
            }
            catch (KeyNotFoundException)
            {
                remotePeer = new Peer(dictionary);
            }

            try
            {
                ValidateAppProtocolVersion(
                    reply ? new byte[] { } : encoded[0].ToByteArray(),
                    remotePeer,
                    remoteVersion);
            }
            catch (DifferentAppProtocolVersionException e)
            {
                if (e.FromTrustedSource &&
                    differentAppProtocolVersionEncountered is { } dapve)
                {
                    dapve(remotePeer, remoteVersion, LocalAppProtocolVersion);
                }

                throw;
            }

            var type =
                (Message.MessageType)remains[(int)Message.MessageFrame.Type].ConvertToInt32();
            var ticks = remains[(int)Message.MessageFrame.Timestamp].ConvertToInt64();
            var timestamp = new DateTimeOffset(ticks, TimeSpan.Zero);

            var currentTime = DateTimeOffset.UtcNow;
            if (_messageTimestampBuffer is TimeSpan timestampBuffer &&
                (currentTime - timestamp).Duration() > timestampBuffer)
            {
                var msg = $"Received message is invalid, created at " +
                          $"{timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture)} " +
                          $"but designated lifetime is {timestampBuffer} and " +
                          $"the current datetime offset is " +
                          $"{currentTime.ToString(TimestampFormat, CultureInfo.InvariantCulture)}.";
                throw new InvalidMessageTimestampException(
                    msg, timestamp, _messageTimestampBuffer, currentTime);
            }

            byte[] signature = remains[(int)Message.MessageFrame.Sign].ToByteArray();

            NetMQFrame[] body = remains.Skip(Message.CommonFrames)
                .ToArray();

            Message message = CreateMessage(
                type,
                body.Select(frame => frame.ToByteArray()).ToArray());
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

            var messageForVerify = headerWithoutSign.Concat(body).ToArray();

            if (!remotePeer.PublicKey.Verify(messageForVerify.ToByteArray(), signature))
            {
                throw new InvalidMessageSignatureException(
                    "The message signature is invalid", message);
            }

            if (!reply)
            {
                message.Identity = encoded[0].Buffer.ToArray();
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

        private void ValidateAppProtocolVersion(
            byte[] identity,
            Peer remotePeer,
            AppProtocolVersion remoteVersion)
        {
            if (remoteVersion.Equals(LocalAppProtocolVersion))
            {
                return;
            }

            bool trusted = !(
                _trustedAppProtocolVersionSigners is { } tapvs &&
                tapvs.All(publicKey => !remoteVersion.Verify(publicKey)));
            throw new DifferentAppProtocolVersionException(
                "The version of the received message is not valid.",
                identity,
                LocalAppProtocolVersion,
                remoteVersion,
                trusted);
        }
    }
}
