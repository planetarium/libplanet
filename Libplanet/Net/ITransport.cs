using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    /// <summary>
    /// An interface to handle peer-to-peer networking, including <see cref="Message"/> exchanging
    /// and <see cref="Peer"/> managing.
    /// </summary>
    public interface ITransport : IDisposable
    {
        /// <summary>
        /// The <see cref="EventHandler"/> invoked when a message that is not
        /// a reply is received. To handle reply, please use <see cref=
        /// "SendMessageWithReplyAsync(BoundPeer,Message,TimeSpan?,CancellationToken)"/>.
        /// </summary>
        event EventHandler<Message> ProcessMessageHandler;

        /// <summary>
        /// <see cref="Peer"/> representation of <see cref="ITransport"/>.
        /// </summary>
        [Pure]
        Peer AsPeer { get; }

        /// <summary>
        /// The <see cref="DateTimeOffset"/> of the last message was received.
        /// </summary>
        [Pure]
        DateTimeOffset? LastMessageTimestamp { get; }

        /// <summary>
        /// Initiates transport layer.
        /// </summary>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task StartAsync(CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Starts running transport layer. To <see cref="RunAsync"/>, you should call
        /// <see cref="StartAsync"/> first.
        /// </summary>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task RunAsync(CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Stops running transport layer.
        /// </summary>
        /// <param name="waitFor">The <see cref="TimeSpan"/> of delay
        /// before actual stopping.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task StopAsync(
            TimeSpan waitFor,
            CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Sends the <paramref name="message"/> to given <paramref name="peer"/>.
        /// </summary>
        /// <param name="peer">A <see cref="Peer"/> to send message to.</param>
        /// <param name="message">A <see cref="Message"/> to send.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task SendMessageAsync(BoundPeer peer, Message message, CancellationToken cancellationToken);

        /// <summary>
        /// Sends the <paramref name="message"/>
        /// to given <paramref name="peer"/> and waits for its single reply.
        /// </summary>
        /// <param name="peer">A <see cref="Peer"/> to send message to.</param>
        /// <param name="message">A <see cref="Message"/> to send.</param>
        /// <param name="timeout">A timeout of waiting for the reply of the message.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>The replies of the <paramref name="message"/>
        /// sent by <paramref name="peer"/>.</returns>
        Task<Message> SendMessageWithReplyAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            CancellationToken cancellationToken);

        /// <summary>
        /// Sends the <paramref name="message"/>
        /// to given <paramref name="peer"/> and waits for its multiple replies.
        /// </summary>
        /// <param name="peer">A <see cref="Peer"/> to send message to.</param>
        /// <param name="message">A <see cref="Message"/> to send.</param>
        /// <param name="timeout">A timeout of waiting for the reply of the message.</param>
        /// <param name="expectedResponses">The number of expected replies for the message.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>The replies of the <paramref name="message"/>
        /// sent by <paramref name="peer"/>.</returns>
        Task<IEnumerable<Message>> SendMessageWithReplyAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            int expectedResponses,
            CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Broadcasts the <paramref name="message"/> to peers selected from the routing table.
        /// </summary>
        /// <param name="except">An <see cref="Address"/> to exclude from broadcasting.
        /// If <c>null</c> is given, no peers will be excluded.</param>
        /// <param name="message">A <see cref="Message"/> to broadcast.</param>
        void BroadcastMessage(Address? except, Message message);

        /// <summary>
        /// Replies message.
        /// </summary>
        /// <remarks>
        /// The <see cref="Message.Identity"/> of the given <paramref name="message"/> must be
        /// matched to <see cref="Message.Identity"/> of a message corresponding to the given
        /// <paramref name="message"/>.
        /// </remarks>
        /// <param name="message">A <see cref="Message"/> to reply.</param>
        void ReplyMessage(Message message);
    }
}
