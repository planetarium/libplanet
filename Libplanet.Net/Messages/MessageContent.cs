using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Destructurama.Attributed;
using Libplanet.Net.Transports;
using Libplanet.Types.Blocks;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// Serves as the base class for messages used in <see cref="ITransport"/>.
    /// </summary>
    public abstract class MessageContent
    {
        /// <summary>
        /// <c>Enum</c> represents the type of the <see cref="MessageContent"/>.
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

            /// <summary>
            /// List of message IDs that the peer seen recently.
            /// </summary>
            HaveMessage = 0x43,

            /// <summary>
            /// List of message IDs that the peer want to have.
            /// </summary>
            WantMessage = 0x44,

            /// <summary>
            /// Consensus proposal message.
            /// </summary>
            ConsensusProposal = 0x50,

            /// <summary>
            /// Consensus vote message.
            /// </summary>
            ConsensusVote = 0x51,

            /// <summary>
            /// Consensus commit message.
            /// </summary>
            ConsensusCommit = 0x52,

            /// <summary>
            /// Consensus message that informs other peer that the peer has a vote of majority 2/3.
            /// </summary>
            ConsensusMaj23Msg = 0x53,

            /// <summary>
            /// Consensus message that informs vote sets that the peer have to other peer.
            /// </summary>
            ConsensusVoteSetBitsMsg = 0x54,

            /// <summary>
            /// Consensus message that informs vote sets that the peer received new maj23 block.
            /// </summary>
            ConsensusProposalClaimMsg = 0x55,

            /// <summary>
            /// Consensus pre-proposal message.
            /// </summary>
            ConsensusPreProposal = 0x56,
        }

        /// <summary>
        /// The type of the message.
        /// </summary>
        public abstract MessageType Type { get; }

        /// <summary>
        /// The body of the message.
        /// </summary>
        public abstract IEnumerable<byte[]> DataFrames { get; }

        /// <summary>
        /// A bytearray representing SHA-256 digest of <see cref="MessageContent"/>.
        /// </summary>
        /// <returns>A mutable <see cref="byte"/> array representing
        /// SHA-256 digest of <see cref="Message"/>.
        /// </returns>
        [Pure]
        [NotLogged]
        public MessageId Id
        {
            get
            {
                var bytes = new List<byte>();
                bytes.AddRange(BitConverter.GetBytes((int)Type));
                foreach (byte[] ba in DataFrames)
                {
                    bytes.AddRange(ba);
                }

                SHA256 sha256 = SHA256.Create();
                byte[] digest = sha256.ComputeHash(bytes.ToArray());
                return new MessageId(digest);
            }
        }
    }
}
