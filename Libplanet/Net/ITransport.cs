using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    /// <summary>
    /// An interface to handle p2p, includes trading <see cref="Message"/>
    /// and managing <see cref="Peer"/>s. Implements <see cref="IDisposable"/>.
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
        /// List of all <see cref="Peer"/>s have in routing table.
        /// </summary>
        [Pure]
        IEnumerable<BoundPeer> Peers { get; }

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
        /// Start running transport layer. To <see cref="RunAsync"/>, you should call
        /// <see cref="StartAsync"/> first.
        /// </summary>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task RunAsync(CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Stop running transport layer.
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
        /// Conduct peer discovery for given <paramref name="bootstrapPeers"/>.
        /// </summary>
        /// <param name="bootstrapPeers">A <see cref="IEnumerable{T}"/> of <see cref="Peer"/>s
        /// to bootstrap.</param>
        /// <param name="pingSeedTimeout">A timeout of waiting for the reply of <see cref="Ping"/>
        /// message sent to seed <see cref="Peer"/>.
        /// If <c>null</c> is given, task never halts by itself
        /// even the target seed gives no any response.</param>
        /// <param name="findNeighborsTimeout">A timeout of waiting for the reply of
        /// <see cref="FindNeighbors"/> message sent to seed <see cref="Peer"/>.
        /// If <c>null</c> is given, task never halts by itself
        /// even the target seed gives no any response.</param>
        /// <param name="depth">Recursive operation depth to search peers from network.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task BootstrapAsync(
            IEnumerable<BoundPeer> bootstrapPeers,
            TimeSpan? pingSeedTimeout,
            TimeSpan? findNeighborsTimeout,
            int depth,
            CancellationToken cancellationToken);

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
        /// to given <paramref name="peer"/> and wait for its single reply.
        /// </summary>
        /// <param name="peer">A <see cref="Peer"/> to send message to.</param>
        /// <param name="message">A <see cref="Message"/> to send.</param>
        /// <param name="timeout">A timeout of waiting for the reply of the message.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>Reply of the <paramref name="message"/>
        /// sent from <paramref name="peer"/>.</returns>
        Task<Message> SendMessageWithReplyAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            CancellationToken cancellationToken);

        /// <summary>
        /// Sends the <paramref name="message"/>
        /// to given <paramref name="peer"/> and wait for its multiple replies.
        /// </summary>
        /// <param name="peer">A <see cref="Peer"/> to send message to.</param>
        /// <param name="message">A <see cref="Message"/> to send.</param>
        /// <param name="timeout">A timeout of waiting for the reply of the message.</param>
        /// <param name="expectedResponses">The number of expected replies for the message.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>Reply of the <paramref name="message"/>
        /// sent from <paramref name="peer"/>.</returns>
        Task<IEnumerable<Message>> SendMessageWithReplyAsync(
            BoundPeer peer,
            Message message,
            TimeSpan? timeout,
            int expectedResponses,
            CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Broadcast the <paramref name="message"/> to peers selected from the routing table.
        /// </summary>
        /// <param name="except">An <see cref="Address"/> to exclude from broadcasting.
        /// If <c>null</c> is given, no peers will be excluded.</param>
        /// <param name="message">A <see cref="Message"/> to broadcast.</param>
        void BroadcastMessage(Address? except, Message message);

        /// <summary>
        /// Method to reply message. Must set <see cref="Message.Identity"/> value made from
        /// its corresponding message.
        /// </summary>
        /// <param name="message">A <see cref="Message"/> to reply.</param>
        void ReplyMessage(Message message);
    }
}
