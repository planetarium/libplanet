#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Multiformats.Address;

namespace Libplanet.Net.Transports
{
    /// <summary>
    /// An interface to handle peer-to-peer networking, including <see cref="Message"/> exchange
    /// and <see cref="BoundPeer"/> managing.
    /// </summary>
    /// <remarks>
    /// An instance of a transport implementing <see cref="ITransport"/> should always be able to
    /// send requests and receive replies.
    /// </remarks>
    public interface ITransport : IDisposable
    {
        event EventHandler<(
            Multiaddress RemoteAddress,
            Message Message,
            int ReplyCount,
            Channel<Message> LocalInboundReplyChannel)> RequestMessageToSend;

        /// <summary>
        /// The list of tasks invoked when a message that is not
        /// a reply is received.
        /// </summary>
        AsyncDelegate ProcessMessageHandler { get; }

        /// <summary>
        /// The <em>current</em> <see cref="BoundPeer"/> representation of <see cref="ITransport"/>.
        /// </summary>
        /// <remarks>
        /// This creates a new instance of <see cref="BoundPeer"/> on the fly and can be different
        /// at different points of time depending on implementation, as <see cref="ITransport"/>
        /// may account for changing endpoint.
        /// </remarks>
        BoundPeer AsPeer { get; }

        /// <summary>
        /// The <see cref="DateTimeOffset"/> of the last message received.
        /// </summary>
        [Pure]
        DateTimeOffset? LastMessageTimestamp { get; }

        /// <summary>
        /// <para>
        /// Whether this <see cref="ITransport"/> instance is running.
        /// </para>
        /// <para>
        /// When the value is <see langword="true"/>, the <see cref="ITransport"/> can receive
        /// outside requests.  When the value is <see langword="false"/>,
        /// the <see cref="ITransport"/> stops receiving outside requests.
        /// </para>
        /// </summary>
        /// <value>The value indicating whether the instance is running.</value>
        [Pure]
        bool Running { get; }

        /// <inheritdoc cref="AppProtocolVersionOptions.AppProtocolVersion"/>
        AppProtocolVersion AppProtocolVersion { get; }

        /// <inheritdoc cref="AppProtocolVersionOptions.TrustedAppProtocolVersionSigners"/>
        public IImmutableSet<PublicKey> TrustedAppProtocolVersionSigners { get; }

        /// <inheritdoc cref="AppProtocolVersionOptions.DifferentAppProtocolVersionEncountered"/>
        public DifferentAppProtocolVersionEncountered
            DifferentAppProtocolVersionEncountered { get; }

        /// <summary>
        /// Starts running a transport layer as to put it in a <see cref="Running"/> state.
        /// </summary>
        /// <param name="cancellationToken">The cancellation token to propagate a notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable <see cref="Task"/> without a value.</returns>
        /// <exception cref="ObjectDisposedException">Thrown when the instance is already disposed.
        /// </exception>
        Task StartAsync(CancellationToken cancellationToken = default);

        /// <summary>
        /// Stops running a transport layer as to put it in a not <see cref="Running"/> state.
        /// </summary>
        /// <param name="waitFor">The <see cref="TimeSpan"/> to delay before actual stopping.
        /// </param>
        /// <param name="cancellationToken">The cancellation token to propagate a notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable <see cref="Task"/> without a value.</returns>
        /// <exception cref="ObjectDisposedException">Thrown when the instance is already disposed.
        /// </exception>
        Task StopAsync(TimeSpan waitFor, CancellationToken cancellationToken = default);

        /// <summary>
        /// Waits until this <see cref="ITransport"/> instance gets started to run.
        /// </summary>
        /// <returns>A <see cref="Task"/> completed when <see cref="ITransport.Running"/>
        /// property becomes <see langword="true"/>.</returns>
        Task WaitForRunningAsync();

        /// <summary>
        /// Sends a <see cref="MessageContent"/> to a given <see cref="BoundPeer"/>
        /// and waits for its single reply.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to send message to.</param>
        /// <param name="content">The <see cref="MessageContent"/> to send.</param>
        /// <param name="timeout">A timeout of waiting for the reply of the message.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>The replies of the <paramref name="content"/>
        /// sent by <paramref name="peer"/>.</returns>
        /// <exception cref="CommunicationFailException">Thrown when fail send or receive
        /// a <see cref="Message"/>.</exception>
        /// <exception cref="ObjectDisposedException">Thrown when <see cref="ITransport"/> instance
        /// is already disposed.</exception>
        Task<Message> SendMessageAsync(
            BoundPeer peer,
            MessageContent content,
            TimeSpan? timeout,
            CancellationToken cancellationToken);

        /// <summary>
        /// Sends a <see cref="MessageContent"/> to a given <see cref="BoundPeer"/>
        /// and waits for its multiple replies.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to send message to.</param>
        /// <param name="content">The <see cref="MessageContent"/> to send.</param>
        /// <param name="timeout">A timeout of waiting for the reply of the message.</param>
        /// <param name="expectedResponses">The number of expected replies for the message.</param>
        /// <param name="returnWhenTimeout">Determines the behavior when failed to receive
        /// <paramref name="expectedResponses"/> messages and timeout occurred.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>The replies of the <paramref name="content"/>
        /// sent by <paramref name="peer"/>.</returns>
        /// <exception cref="CommunicationFailException">Thrown when fail send or receive
        /// a <see cref="Message"/>.</exception>
        /// <exception cref="ObjectDisposedException">Thrown when <see cref="ITransport"/> instance
        /// is already disposed.</exception>
        Task<IEnumerable<Message>> SendMessageAsync(
            BoundPeer peer,
            MessageContent content,
            TimeSpan? timeout,
            int expectedResponses,
            bool returnWhenTimeout,
            CancellationToken cancellationToken);

        /// <summary>
        /// Broadcasts a <see cref="MessageContent"/> to peers selected from the routing table.
        /// </summary>
        /// <param name="peers">The <see cref="BoundPeer"/>s to broadcast the
        /// <paramref name="content"/>.</param>
        /// <param name="content">A <see cref="MessageContent"/> to broadcast.</param>
        /// <exception cref="ObjectDisposedException">Thrown when <see cref="ITransport"/> instance
        /// is already disposed.</exception>
        void BroadcastMessage(IEnumerable<BoundPeer> peers, MessageContent content);

        Task ReceiveRequestMessage(
            Multiaddress multiaddress,
            Message requestMessage,
            Channel<MessageContent> localOutboundReplyChannel);
    }
}
