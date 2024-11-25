using System;
using System.Collections.Generic;
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
        private readonly Dictionary<MessageId, MessageContent> _messages;

        /// <summary>
        /// Create a message cache instance that stores
        /// recently seen <see cref="Message"/>s for gossip.
        /// </summary>
        public MessageCache()
        {
            _lock = new object();
            _messages = new Dictionary<MessageId, MessageContent>();
        }

        /// <summary>
        /// Puts the <paramref name="message"/> into message cache.
        /// </summary>
        /// <param name="message">A <see cref="Message"/> to cache.</param>
        /// <exception cref="ArgumentException">
        /// Thrown when a <see cref="Message"/> with the same id already exists.</exception>
        public void Put(MessageContent message)
        {
            lock (_lock)
            {
                try
                {
                    MessageId id = message.Id;
                    _messages.Add(id, message);
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
        /// Gets copied value of the message with <paramref name="id"/>
        /// if it exists in the message cache.
        /// </summary>
        /// <param name="id">A <see cref="MessageId"/> of the <see cref="Message"/> to get.</param>
        /// <returns>A message with id <paramref name="id"/>.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when a <see cref="Message"/> of id
        /// <paramref name="id"/> does not exist in the message cache.</exception>
        [Pure]
        public MessageContent Get(MessageId id)
        {
            lock (_lock)
            {
                if (_messages.TryGetValue(id, out MessageContent? msg))
                {
                    // FIXME: This is a workaround for preventing any message modification in
                    // message dictionary.
                    return Message.CreateMessageContent(msg.Type, msg.DataFrames.ToArray());
                }

                throw new KeyNotFoundException($"A message of id {id} does not exist.");
            }
        }

        /// <summary>
        /// Gets the array of <see cref="MessageId"/> of set difference
        /// <paramref name="ids"/> - <see cref="_messages"/>.
        /// </summary>
        /// <param name="ids"><see cref="MessageId"/>s of the <see cref="Message"/>s
        /// to calculate difference from.</param>
        /// <returns>Result of set difference operation.</returns>
        [Pure]
        public MessageId[] DiffFrom(IEnumerable<MessageId> ids)
        {
            lock (_lock)
            {
                return ids.Where(id => !_messages.TryGetValue(id, out _)).ToArray();
            }
        }

        /// <summary>
        /// Selects at maximum <c>gossip</c> messages used for gossiping.
        /// </summary>
        /// <returns>A list of message ids to gossip.</returns>
        [Pure]
        public MessageId[] GetGossipIds()
        {
            lock (_lock)
            {
                return _messages.Keys.ToArray();
            }
        }

        /// <summary>
        /// Clears <see cref="_messages"/>.
        /// </summary>
        public void Clear()
        {
            lock (_lock)
            {
                _messages.Clear();
            }
        }
    }
}
