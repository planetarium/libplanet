using System;
using System.Collections.Generic;
using Destructurama.Attributed;
using Libplanet.Blocks;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// Serves as the base class for messages used in <see cref="ITransport"/>.
    /// </summary>
    public abstract class Message
    {
        public static readonly int CommonFrames =
            Enum.GetValues(typeof(MessageFrame)).Length;

        /// <summary>
        /// <c>Enum</c> represents the type of the <see cref="Message"/>.
        /// </summary>
        public enum MessageType : byte
        {
            /// <summary>
            /// Check message to determine peer is alive.
            /// </summary>
            Ping = 0x01,

            /// <summary>
            /// A reply to <see cref="Ping"/>.
            /// </summary>
            Pong = 0x14,

            /// <summary>
            /// Request to query block hashes.
            /// </summary>
            GetBlockHashes = 0x04,

            /// <summary>
            /// Inventory to transfer transactions.
            /// </summary>
            TxIds = 0x31,

            /// <summary>
            /// Request to query blocks.
            /// </summary>
            GetBlocks = 0x07,

            /// <summary>
            /// Request to query transactions.
            /// </summary>
            GetTxs = 0x08,

            /// <summary>
            /// Message containing serialized blocks.
            /// </summary>
            Blocks = 0x0a,

            /// <summary>
            /// Message containing serialized transaction.
            /// </summary>
            Tx = 0x10,

            /// <summary>
            /// Message containing request for nearby peers.
            /// </summary>
            FindNeighbors = 0x11,

            /// <summary>
            /// Message containing nearby peers.
            /// </summary>
            Neighbors = 0x12,

            /// <summary>
            /// Message containing a single <see cref="BlockHeader"/>.
            /// </summary>
            BlockHeaderMessage = 0x0c,

            /// <summary>
            /// Message containing demand block hashes with their index numbers.
            /// </summary>
            BlockHashes = 0x0e,

            /// <summary>
            /// Request current chain status of the peer.
            /// </summary>
            GetChainStatus = 0x20,

            /// <summary>
            /// A reply to <see cref="GetChainStatus"/>.
            /// Contains the chain status of the peer at the moment.
            /// </summary>
            ChainStatus = 0x25,

            /// <summary>
            /// A reply to any messages with different <see cref="AppProtocolVersion"/>.
            /// Contains the expected and actual <see cref="AppProtocolVersion"/>
            /// value of the message.
            /// </summary>
            DifferentVersion = 0x30,
        }

        public enum MessageFrame
        {
            /// <summary>
            /// Frame containing <see cref="AppProtocolVersion"/>.
            /// </summary>
            Version = 0,

            /// <summary>
            /// Frame containing the type of the message.
            /// </summary>
            Type = 1,

            /// <summary>
            /// Frame containing the sender <see cref="BoundPeer"/> of the <see cref="Message"/>.
            /// </summary>
            Peer = 2,

            /// <summary>
            /// Frame containing the datetime when the <see cref="Message"/> is created.
            /// </summary>
            Timestamp = 3,

            /// <summary>
            /// Frame containing signature of the <see cref="Message"/>.
            /// </summary>
            Sign = 4,
        }

        /// <summary>
        /// <c>byte[]</c>-typed identity of the message.
        /// If message B is a reply to message A,
        /// B's identity must be set to A's identity.
        /// </summary>
        /// <remarks>
        /// The handling of the identity of a <see cref="Message"/> is implementation specific to
        /// <see cref="ITransport"/>.
        /// </remarks>
        public byte[]? Identity { get; set; }

        /// <summary>
        /// <see cref="AppProtocolVersion"/>-typed version of the
        /// <see cref="Remote"/>'s transport layer.
        /// </summary>
        [LogAsScalar]
        public AppProtocolVersion Version { get; set; }

        /// <summary>
        /// The sender <see cref="BoundPeer"/> of the message.
        /// </summary>
        [LogAsScalar]
        public BoundPeer? Remote { get; set; }

        /// <summary>
        /// The timestamp of the message is created.
        /// </summary>
        public DateTimeOffset Timestamp { get; set; }

        /// <summary>
        /// The type of the message.
        /// </summary>
        public abstract MessageType Type { get; }

        /// <summary>
        /// The body of the message.
        /// </summary>
        public abstract IEnumerable<byte[]> DataFrames { get; }
    }
}
