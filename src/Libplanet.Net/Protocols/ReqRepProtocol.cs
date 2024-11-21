using System;
using System.Buffers;
using System.Threading.Channels;
using System.Threading.Tasks;
using Libplanet.Net.Messages;
using Multiformats.Address;
using Nethermind.Libp2p.Core;
using Serilog;

namespace Libplanet.Net.Transports
{
    internal class ReqRepProtocol : IProtocol
    {
        private readonly ITransport _transport;
        private readonly ILogger _logger;

        public ReqRepProtocol(ITransport transport)
        {
            _transport = transport;
            _logger = Log
                .ForContext<ReqRepProtocol>()
                .ForContext("Source", nameof(ReqRepProtocol));
        }

        public string Id => "/req-rep/1.0.0";

        // NOTE: Responsible for sending requests and receiving replys.
        public async Task DialAsync(
            IChannel downChannel,
            IChannelFactory? upChannelFactory,
            IPeerContext context)
        {
            // NOTE: This does not run.
            _logger.Debug(
                "Connected to remote peer {RemotePeer} as dialer {LocalPeer}",
                context.RemotePeer.Address,
                context.LocalPeer.Address);

            // NOTE: Probably not a good idea to have unbounded channel.
            Channel<(Multiaddress, Message, int, Channel<Message>)> request =
                Channel.CreateUnbounded<(Multiaddress, Message, int, Channel<Message>)>();
            EventHandler<(Multiaddress, Message, int, Channel<Message>)> eventHandler =
                async (object? sender, (Multiaddress, Message, int, Channel<Message>) tuple) =>
                    await request.Writer.WriteAsync(tuple);

            try
            {
                _transport.RequestMessageToSend += eventHandler;
                await SendAndReceiveMessage(request, downChannel, context);
            }
            finally
            {
                _transport.RequestMessageToSend -= eventHandler;
            }
        }

        // NOTE: Responsible for receiving requests and sending replys.
        // FIXME: Maybe close channel after certain period of time.
        public async Task ListenAsync(
            IChannel downChannel,
            IChannelFactory? upChannelFactory,
            IPeerContext context)
        {
            _logger.Debug(
                "Connected to remote peer {RemotePeer} as listener {LocalPeer}",
                context.RemotePeer.Address,
                context.LocalPeer.Address);
            try
            {
                await ReceiveAndSendMessage(downChannel, context);
            }
            catch (Exception e)
            {
                _logger.Error(e, "An exception occured during receiving a message {E}", e);
            }

            _logger.Debug(
                "Disconnecting from remote peer {RemotePeer} as listener {LocalPeer}",
                context.RemotePeer.Address,
                context.LocalPeer.Address);
        }

        private async Task SendAndReceiveMessage(
            Channel<(Multiaddress, Message, int, Channel<Message>)> requestRequests,
            IChannel channel,
            IPeerContext context)
        {
            _logger.Debug("Trying to send a request message to {Remote}", context.RemotePeer.Address);
            (Multiaddress remoteAddress, Message message,
                int replyCount, Channel<Message> localChannel) =
                    await requestRequests.Reader.ReadAsync();
            if (remoteAddress.GetPeerId()!.Equals(context.RemotePeer.Address.GetPeerId()!))
            {
                byte[] messageBytes = message.ToByteArray();
                await channel.WriteAsync(new ReadOnlySequence<byte>(messageBytes));
                _logger.Debug(
                    "Sent a message of length {Length} to {RemotePeer} expecting {Count} replies",
                    messageBytes.Length,
                    context.RemotePeer.Address,
                    replyCount);

                // FIXME: This does not guarantee that the message read
                // is the reply for the message sent.
                for (int i = 0; i < replyCount; i++)
                {
                    ReadOnlySequence<byte> read =
                        await channel.ReadAsync(0, ReadBlockingMode.WaitAny).OrThrow();
                    _logger.Debug(
                        "Reaceived a message of length {Length} from {RemotePeer}",
                        read.Length,
                        context.RemotePeer.Address);
                    await localChannel.Writer.WriteAsync(
                        Message.FromByteArray(read.ToArray(), null));
                }
            }
            else
            {
                _logger.Debug(
                    "Ignoring message to send since target peer {TargetRemotePeer} " +
                    "is not the same as the context's peer {ActualRemotePeer}",
                    remoteAddress,
                    context.RemotePeer.Address);
            }
        }

        private async Task ReceiveAndSendMessage(IChannel downChannel, IPeerContext context)
        {
            _logger.Information(
                "Trying to receive a request message from {Remote}",
                context.RemotePeer.Address);
            ReadOnlySequence<byte> read =
                await downChannel.ReadAsync(0, ReadBlockingMode.WaitAny).OrThrow();
            _logger.Debug(
                "Reaceived a message of length {Length} from {RemotePeer}",
                read.Length,
                context.RemotePeer.Address);

            Channel<MessageContent> outboundReplyChannel =
                Channel.CreateUnbounded<MessageContent>();
            Message requestMessage = Message.FromByteArray(read.ToArray(), null);
            await _transport.ReceiveRequestMessage(
                requestMessage.Remote.Multiaddress,
                requestMessage,
                outboundReplyChannel);
            outboundReplyChannel.Writer.Complete();

            int replyCount = 0;
            await foreach (MessageContent replyMessageContent in
                outboundReplyChannel.Reader.ReadAllAsync(default))
            {
                Message replyMessage = new Message(
                    replyMessageContent,
                    _transport.AppProtocolVersion,
                    _transport.AsPeer,
                    DateTimeOffset.UtcNow,
                    null);
                byte[] replyMessageBytes = replyMessage.ToByteArray();
                await downChannel.WriteAsync(new ReadOnlySequence<byte>(replyMessageBytes));
                _logger.Debug(
                    "Sent a reply message of length {Length} to {RemotePeer}",
                    replyMessageBytes.Length,
                    context.RemotePeer.Address);
                replyCount++;
            }

            _logger.Debug(
                "Sent {Count} reply messages to {RemotePeer}",
                replyCount,
                context.RemotePeer.Address);
        }
    }
}
