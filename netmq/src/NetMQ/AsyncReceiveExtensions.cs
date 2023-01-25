#if NETSTANDARD2_0 || NETSTANDARD2_1 || NET47

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace NetMQ
{
    /// <summary>
    /// Provides extension methods for the <see cref="NetMQSocket"/>,
    /// via which messages may be received asynchronously.
    /// </summary>
    [System.Diagnostics.CodeAnalysis.SuppressMessage("ReSharper", "MemberCanBePrivate.Global")]
    [System.Diagnostics.CodeAnalysis.SuppressMessage("ReSharper", "UnusedMember.Global")]
    [System.Diagnostics.CodeAnalysis.SuppressMessage("ReSharper", "UnusedMethodReturnValue.Global")]
    public static class AsyncReceiveExtensions
    {
        static Task<bool> s_trueTask = Task.FromResult(true);
        static Task<bool> s_falseTask = Task.FromResult(false);

#region Receiving frames as a multipart message

        /// <summary>
        /// Receive a single frame from <paramref name="socket"/>, asynchronously.
        /// </summary>
        /// <param name="socket">The socket to receive from.</param>
        /// <param name="expectedFrameCount">Specifies the initial capacity of the <see cref="List{T}"/> used
        /// to buffer results. If the number of frames is known, set it here. If more frames arrive than expected,
        /// an extra allocation will occur, but the result will still be correct.</param>
        /// <param name="cancellationToken">The token used to propagate notification that this operation should be canceled.</param>
        /// <returns>The content of the received message.</returns>
        public static async Task<NetMQMessage> ReceiveMultipartMessageAsync(
            this NetMQSocket socket, 
            int expectedFrameCount = 4,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var message = new NetMQMessage(expectedFrameCount);

            while (true)
            {
                (byte[] bytes, bool more) = await socket.ReceiveFrameBytesAsync(cancellationToken);
                message.Append(bytes);

                if (!more)
                {
                    break;
                }
            }

            return message;
        }

#endregion

#region Sending a frame
        public static Task SendFrameAsync(
            this NetMQSocket socket,
            byte[] data,
            bool more = false,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (NetMQRuntime.Current == null)
                throw new InvalidOperationException("NetMQRuntime must be created before calling async functions");

            if (data == null)
                throw new ArgumentNullException(nameof(data));

            socket.AttachToRuntime();

            if (socket.TrySendFrame(TimeSpan.Zero, data, more))
            {
                return Task.CompletedTask;
            }

            TaskCompletionSource<object> source = new TaskCompletionSource<object>();
            cancellationToken.Register(() => 
            {
                socket.SendReady -= Listener;
                source.TrySetCanceled();
            });
            
            void Listener(object sender, NetMQSocketEventArgs args)
            {
                if (socket.TrySendFrame(TimeSpan.Zero, data, more))
                {
                    socket.SendReady -= Listener;
                    source.TrySetResult(null);
                }
            }

            socket.SendReady += Listener;

            return source.Task;
        }


        public static Task SendFrameAsync(
            this NetMQSocket socket,
            string message,
            bool more = false,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (NetMQRuntime.Current == null)
                throw new InvalidOperationException("NetMQRuntime must be created before calling async functions");

            if (message == null)
                throw new ArgumentNullException(nameof(message));

            socket.AttachToRuntime();

            if (socket.TrySendFrame(TimeSpan.Zero, message, more))
            {
                return Task.CompletedTask;
            }

            TaskCompletionSource<object> source = new TaskCompletionSource<object>();
            cancellationToken.Register(() => 
            { 
                socket.SendReady -= Listener;
                source.TrySetCanceled();
            });
            
            void Listener(object sender, NetMQSocketEventArgs args)
            {
                if (socket.TrySendFrame(TimeSpan.Zero, message, more))
                {
                    socket.SendReady -= Listener;
                    source.TrySetResult(null);
                }
            }

            socket.SendReady += Listener;

            return source.Task;
        }
#endregion
        
#region Sending a multipart message
        public static Task SendMultipartMessageAsync(
            this NetMQSocket socket,
            NetMQMessage message,
            bool more = false,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (NetMQRuntime.Current == null)
                throw new InvalidOperationException("NetMQRuntime must be created before calling async functions");

            if (message == null)
                throw new ArgumentNullException(nameof(message));

            socket.AttachToRuntime();

            if (socket.TrySendMultipartMessage(TimeSpan.Zero, message))
            {
                return Task.CompletedTask;
            }

            TaskCompletionSource<object> source = new TaskCompletionSource<object>();
            cancellationToken.Register(() => 
            { 
                socket.SendReady -= Listener;
                source.TrySetCanceled();
            });
            
            void Listener(object sender, NetMQSocketEventArgs args)
            {
                if (socket.TrySendMultipartMessage(TimeSpan.Zero, message))
                {
                    socket.SendReady -= Listener;
                    source.SetResult(null);
                }
            }

            socket.SendReady += Listener;

            return source.Task;
        }
#endregion

#region Receiving a frame as a byte array

        /// <summary>
        /// Receive a single frame from <paramref name="socket"/>, asynchronously.
        /// </summary>
        /// <param name="socket">The socket to receive from.</param>
        /// <param name="cancellationToken">The token used to propagate notification that this operation should be canceled.</param>
        /// <returns>The content of the received message frame and boolean indicate if another frame of the same message follows.</returns>
        public static Task<(byte[], bool)> ReceiveFrameBytesAsync(
            this NetMQSocket socket, 
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (NetMQRuntime.Current == null)
                throw new InvalidOperationException("NetMQRuntime must be created before calling async functions");

            socket.AttachToRuntime();

            var msg = new Msg();
            msg.InitEmpty();

            Console.WriteLine($"{{0:dd.MM.yyyy hh:mm.ss:ffff}}[{socket.SocketHandle}][{System.Threading.Thread.CurrentThread.ManagedThreadId}]: TryReceive()", DateTimeOffset.UtcNow);
            if (socket.TryReceive(ref msg, TimeSpan.Zero))
            {
                var data = msg.CloneData();
                bool more = msg.HasMore;
                msg.Close();

                return Task.FromResult((data, more));
            }

            TaskCompletionSource<(byte[], bool)> source = new TaskCompletionSource<(byte[], bool)>();

            CancellationTokenRegistration? registration = null;
            if (cancellationToken.CanBeCanceled) 
            {
                var poller = NetMQRuntime.Poller;
                registration = cancellationToken.Register(PropagateCancel);
            }

            void Listener(object sender, NetMQSocketEventArgs args)
            {
                Console.WriteLine($"{{0:dd.MM.yyyy hh:mm.ss:ffff}}[{socket.SocketHandle}][{System.Threading.Thread.CurrentThread.ManagedThreadId}]: Listener()", DateTimeOffset.UtcNow);
                if (socket.TryReceive(ref msg, TimeSpan.Zero))
                {
                    var data = msg.CloneData();
                    bool more = msg.HasMore;
                    msg.Close();

                    socket.ReceiveReady -=  Listener;
                    registration?.Dispose();
                    source.TrySetResult((data, more));
                }
            }
            
            void PropagateCancel()
            {
                Console.WriteLine($"{{0:dd.MM.yyyy hh:mm.ss:ffff}}[{socket.SocketHandle}][{System.Threading.Thread.CurrentThread.ManagedThreadId}]: Cancel()", DateTimeOffset.UtcNow);
                socket.ReceiveReady -= Listener;
                registration?.Dispose();
                source.TrySetCanceled();
            }

            socket.ReceiveReady += Listener;

            return source.Task;
        }

#endregion

#region Receiving a frame as a string

        /// <summary>
        /// Receive a single frame from <paramref name="socket"/>, asynchronously, and decode as a string using <see cref="SendReceiveConstants.DefaultEncoding"/>.
        /// </summary>
        /// <param name="socket">The socket to receive from.</param>
        /// <param name="cancellationToken">The token used to propagate notification that this operation should be canceled.</param>
        /// <returns>The content of the received message frame as a string and a boolean indicate if another frame of the same message follows.</returns>
        public static Task<(string, bool)> ReceiveFrameStringAsync(
            this NetMQSocket socket,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            return socket.ReceiveFrameStringAsync(SendReceiveConstants.DefaultEncoding, cancellationToken);
        }


        /// <summary>
        /// Receive a single frame from <paramref name="socket"/>, asynchronously, and decode as a string using <paramref name="encoding"/>.
        /// </summary>
        /// <param name="socket">The socket to receive from.</param>
        /// <param name="encoding">The encoding used to convert the frame's data to a string.</param>
        /// <param name="cancellationToken">The token used to propagate notification that this operation should be canceled.</param>
        /// <returns>The content of the received message frame as a string and boolean indicate if another frame of the same message follows..</returns>
        public static Task<(string, bool)> ReceiveFrameStringAsync(
            this NetMQSocket socket, 
            Encoding encoding,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (NetMQRuntime.Current == null)
                throw new InvalidOperationException("NetMQRuntime must be created before calling async functions");

            socket.AttachToRuntime();

            var msg = new Msg();
            msg.InitEmpty();

            if (socket.TryReceive(ref msg, TimeSpan.Zero))
            {
                var str = msg.Size > 0
                    ? msg.GetString(encoding)
                    : string.Empty;

                msg.Close();
                return Task.FromResult((str, msg.HasMore));
            }

            TaskCompletionSource<(string, bool)> source = new TaskCompletionSource<(string,bool)>();

            CancellationTokenRegistration? registration = null;
            if (cancellationToken.CanBeCanceled) 
            {
                registration = cancellationToken.Register(PropagateCancel);
            }

            void Listener(object sender, NetMQSocketEventArgs args)
            {
                if (socket.TryReceive(ref msg, TimeSpan.Zero))
                {
                    var str = msg.Size > 0
                        ? msg.GetString(encoding)
                        : string.Empty;
                    bool more = msg.HasMore;
                    msg.Close();

                    socket.ReceiveReady -=  Listener;
                    registration?.Dispose();
                    source.TrySetResult((str, more));
                }
            }

            void PropagateCancel()
            {
                socket.ReceiveReady -= Listener;
                registration?.Dispose();
                source.TrySetCanceled();
            }

            socket.ReceiveReady += Listener;

            return source.Task;
        }

#endregion

#region Skipping a message

        /// <summary>
        /// Receive a single frame from <paramref name="socket"/>, asynchronously, then ignore its content.
        /// </summary>
        /// <param name="socket">The socket to receive from.</param>
        /// <param name="cancellationToken">The token used to propagate notification that this operation should be canceled.</param>
        /// <returns>Boolean indicate if another frame of the same message follows</returns>
        public static Task<bool> SkipFrameAsync(
            this NetMQSocket socket, 
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (NetMQRuntime.Current == null)
                throw new InvalidOperationException("NetMQRuntime must be created before calling async functions");

            socket.AttachToRuntime();

            var msg = new Msg();
            msg.InitEmpty();

            if (socket.TryReceive(ref msg, TimeSpan.Zero))
            {
                bool more = msg.HasMore;
                msg.Close();

                return more ? s_trueTask : s_falseTask;
            }

            TaskCompletionSource<bool> source = new TaskCompletionSource<bool>();

            CancellationTokenRegistration? registration = null;
            if (cancellationToken.CanBeCanceled) 
            {
                registration = cancellationToken.Register(PropagateCancel);
            }

            void Listener(object sender, NetMQSocketEventArgs args)
            {
                if (socket.TryReceive(ref msg, TimeSpan.Zero))
                {
                    bool more = msg.HasMore;
                    msg.Close();

                    socket.ReceiveReady -=  Listener;
                    registration?.Dispose();
                    source.TrySetResult(more);
                }
            }

            void PropagateCancel()
            {
                socket.ReceiveReady -= Listener;
                registration?.Dispose();
                source.TrySetCanceled();
            }

            socket.ReceiveReady += Listener;

            return source.Task;
        }


#endregion

#region Skipping all frames of a multipart message

        /// <summary>
        /// Receive all frames of the next message from <paramref name="socket"/>, asynchronously, then ignore their contents.
        /// </summary>
        /// <param name="socket">The socket to receive from.</param>
        public static async Task SkipMultipartMessageAsync(this NetMQSocket socket)
        {
            while (true)
            {
                bool more = await socket.SkipFrameAsync();
                if (!more)
                    break;
            }
        }


#endregion

#region Receiving a routing key

        /// <summary>
        /// Receive a routing-key from <paramref name="socket"/>, blocking until one arrives.
        /// </summary>
        /// <param name="socket">The socket to receive from.</param>
        /// <returns>The routing key and a boolean indicate if another frame of the same message follows.</returns>

        public static async Task<(RoutingKey, bool)> ReceiveRoutingKeyAsync(this NetMQSocket socket)
        {
            var (bytes, more) = await socket.ReceiveFrameBytesAsync();

            return (new RoutingKey(bytes), more);
        }

#endregion
    }
}

#endif
