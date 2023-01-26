﻿using System.Text;
using NetMQ.Core;

namespace NetMQ.Sockets
{
    /// <summary>
    /// An XSubscriberSocket is a NetMQSocket intended to be used as the XSub in the XPub/XSub pattern.
    /// The intended usage is for serving, together with a matching XPublisherSocket,
    /// as a stable intermediary between a PublisherSocket and it's SubscriberSockets.
    /// </summary>
    public class XSubscriberSocket : NetMQSocket
    {
        /// <summary>
        /// Create a new XSubscriberSocket and attach socket to zero or more endpoints.
        /// </summary>
        /// <param name="connectionString">List of NetMQ endpoints, separated by commas and prefixed by '@' (to bind the socket) or '>' (to connect the socket).
        /// Default action is connect (if endpoint doesn't start with '@' or '>')</param>
        /// <example><code>var socket = new XSubscriberSocket(">tcp://127.0.0.1:5555,@tcp://127.0.0.1:55556");</code></example>
        public XSubscriberSocket(string? connectionString = null) : base(ZmqSocketType.Xsub, connectionString, DefaultAction.Connect)
        {
        }

        /// <summary>
        /// Create a new XSubscriberSocket based upon the given SocketBase.
        /// </summary>
        /// <param name="socketHandle">the SocketBase to create the new socket from</param>
        internal XSubscriberSocket(SocketBase socketHandle)
            : base(socketHandle)
        {
        }

        /// <summary>
        /// Subscribe this socket to the given 'topic' - which means enable this socket to receive
        /// messages that begin with this string prefix.
        /// You can set topic to an empty string to subscribe to everything.
        /// </summary>
        /// <param name="topic">this specifies what text-prefix to subscribe to, or may be an empty-string to specify ALL</param>
        public virtual void Subscribe(string topic)
        {
            SetSocketOption(ZmqSocketOption.Subscribe, topic);
        }

        /// <summary>
        /// Subscribe this socket to the given 'topic' - which means enable this socket to receive
        /// messages that begin with this string prefix, using the given Encoding.
        /// You can set topic to an empty string to subscribe to everything.
        /// </summary>
        /// <param name="topic">this specifies what text-prefix to subscribe to, or may be an empty-string to specify ALL</param>
        /// <param name="encoding">the Encoding to use when converting the topic string internally into a byte-array</param>
        public virtual void Subscribe(string topic, Encoding encoding)
        {
            Subscribe(encoding.GetBytes(topic));
        }

        /// <summary>
        /// Subscribe this socket to the given 'topic' - which means enable this socket to receive
        /// messages that begin with this array of bytes.
        /// </summary>
        /// <param name="topic">this specifies what byte-array prefix to subscribe to</param>
        public virtual void Subscribe(byte[] topic)
        {
            SetSocketOption(ZmqSocketOption.Subscribe, topic);
        }

        /// <summary>
        /// Subscribe this socket to all topics - which means enable this socket to receive
        /// all messages regardless of what the string prefix is.
        /// This is the same as calling Subscribe with an empty-string for the topic.
        /// </summary>
        public virtual void SubscribeToAnyTopic()
        {
            Subscribe(string.Empty);
        }

        /// <summary>
        /// Remove this socket's subscription to the given topic.
        /// </summary>
        /// <param name="topic">a string denoting which the topic to stop receiving</param>
        public virtual void Unsubscribe(string topic)
        {
            SetSocketOption(ZmqSocketOption.Unsubscribe, topic);
        }

        /// <summary>
        /// Remove this socket's subscription to the given topic.
        /// </summary>
        /// <param name="topic">a string denoting which the topic to stop receiving</param>
        /// <param name="encoding">the Encoding to use when converting the topic string internally into a byte-array</param>
        public virtual void Unsubscribe(string topic, Encoding encoding)
        {
            Unsubscribe(encoding.GetBytes(topic));
        }

        /// <summary>
        /// Remove this socket's subscription to the given topic.
        /// </summary>
        /// <param name="topic">a byte-array denoting which the topic to stop receiving</param>
        public virtual void Unsubscribe(byte[] topic)
        {
            SetSocketOption(ZmqSocketOption.Unsubscribe, topic);
        }
    }
}
