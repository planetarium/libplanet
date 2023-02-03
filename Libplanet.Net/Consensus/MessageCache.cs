using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// Cache object that stores recently seen <see cref="Message"/>s.
    /// </summary>
    public class MessageCache
    {
        private readonly object _lock;
        private readonly int _len;
        private readonly int _gossip;
        private readonly Dictionary<MessageId, Message> _messages;
        private readonly ImmutableArray<MessageId>[] _history;

        /// <summary>
        /// Create a message cache instance that stores
        /// recently seen <see cref="Message"/>s for gossip.
        /// </summary>
        /// <param name="len">Size of the cache history window.</param>
        /// <param name="gossip">Maximum number of windows to be selected for gossip.</param>
        /// <exception cref="ArgumentOutOfRangeException">
        /// Thrown when <paramref name="len"/> is less than or equal to 0,
        /// or <paramref name="gossip"/> is less than or equal to 0
        /// or greater than <paramref name="len"/>.</exception>
        public MessageCache(int len, int gossip)
        {
            if (len <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(len),
                    "Size of the cache windows should be greater than 0.");
            }

            if (gossip <= 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(gossip),
                    "Number of windows to gossip should be greater than 0.");
            }

            if (gossip > len)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(gossip),
                    "Number of windows to gossip should not exceed the cache window size.");
            }

            _lock = new object();
            _len = len;
            _gossip = gossip;
            _messages = new Dictionary<MessageId, Message>();
            _history = new ImmutableArray<MessageId>[_len];
            for (int i = 0; i < len; i++)
            {
                _history[i] = ImmutableArray<MessageId>.Empty;
            }
        }

        /// <summary>
        /// Puts the <paramref name="message"/> into message cache.
        /// </summary>
        /// <param name="message">A <see cref="Message"/> to cache.</param>
        /// <exception cref="ArgumentException">
        /// Thrown when a <see cref="Message"/> with the same id already exists.</exception>
        public void Put(Message message)
        {
            lock (_lock)
            {
                try
                {
                    MessageId id = message.Id;
                    _messages.Add(id, message);
                    _history[0] = _history[0].Add(id);
                }
                catch (ArgumentException)
                {
                    throw new ArgumentException(
                        "A message with the same id already exists.",
                        nameof(message));
                }
            }
        }

        /// <summary>
        /// Gets the message with <paramref name="id"/> if it exists in the message cache.
        /// </summary>
        /// <param name="id">A <see cref="MessageId"/> of the <see cref="Message"/> to get.</param>
        /// <returns>A message with id <paramref name="id"/>.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when a <see cref="Message"/> of id
        /// <paramref name="id"/> does not exist in the message cache.</exception>
        [Pure]
        public Message Get(MessageId id)
        {
            lock (_lock)
            {
                if (_messages.TryGetValue(id, out Message? msg))
                {
                    // FIXME: This is a workaround for preventing any message modification in
                    // message dictionary.
                    return NetMQMessageCodec.CreateMessage(msg.Type, msg.DataFrames.ToArray());
                }

                throw new KeyNotFoundException($"A message of id {id} does not exist.");
            }
        }

        /// <summary>
        /// Selects at maximum <c>gossip</c> messages used for gossiping.
        /// </summary>
        /// <returns>A list of message ids to gossip.</returns>
        [Pure]
        public MessageId[] GetGossipIds()
        {
            var ids = new List<MessageId>();

            lock (_lock)
            {
                for (int i = 0; i < _gossip; i++)
                {
                    if (!_history[i].Any())
                    {
                        continue;
                    }

                    ids.AddRange(_history[i]);
                }
            }

            return ids.ToArray();
        }

        /// <summary>
        /// Shifts the current window and discard messages older than
        /// the history length of the cache.
        /// </summary>
        public void Shift()
        {
            lock (_lock)
            {
                foreach (MessageId id in _history[_len - 1])
                {
                    _messages.Remove(id);
                }

                for (int i = _len - 1; i > 0; i--)
                {
                    _history[i] = _history[i - 1];
                }

                _history[0] = ImmutableArray<MessageId>.Empty;
            }
        }
    }
}
