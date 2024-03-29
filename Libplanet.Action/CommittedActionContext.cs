using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    public class CommittedActionContext : ICommittedActionContext
    {
        public CommittedActionContext(IActionContext context)
            : this(
                signer: context.Signer,
                txId: context.TxId,
                miner: context.Miner,
                blockIndex: context.BlockIndex,
                blockProtocolVersion: context.BlockProtocolVersion,
                previousState: context.PreviousState.Trie.Hash,
                randomSeed: context.RandomSeed,
                blockAction: context.BlockAction)
        {
        }

        public CommittedActionContext(
            Address signer,
            TxId? txId,
            Address miner,
            long blockIndex,
            int blockProtocolVersion,
            HashDigest<SHA256> previousState,
            int randomSeed,
            bool blockAction)
        {
            Signer = signer;
            TxId = txId;
            Miner = miner;
            BlockIndex = blockIndex;
            BlockProtocolVersion = blockProtocolVersion;
            PreviousState = previousState;
            RandomSeed = randomSeed;
            BlockAction = blockAction;
        }

        /// <inheritdoc cref="ICommittedActionContext.Signer"/>
        [Pure]
        public Address Signer { get; }

        /// <inheritdoc cref="ICommittedActionContext.TxId"/>
        [Pure]
        public TxId? TxId { get; }

        /// <inheritdoc cref="ICommittedActionContext.Miner"/>
        [Pure]
        public Address Miner { get; }

        /// <inheritdoc cref="ICommittedActionContext.BlockIndex"/>
        [Pure]
        public long BlockIndex { get; }

        /// <inheritdoc cref="ICommittedActionContext.BlockProtocolVersion"/>
        [Pure]
        public int BlockProtocolVersion { get; }

        /// <inheritdoc cref="ICommittedActionContext.PreviousState"/>
        [Pure]
        public HashDigest<SHA256> PreviousState { get; }

        /// <inheritdoc cref="ICommittedActionContext.RandomSeed"/>
        public int RandomSeed { get; }

        /// <inheritdoc cref="ICommittedActionContext.BlockAction"/>
        [Pure]
        public bool BlockAction { get; }

        /// <inheritdoc cref="ICommittedActionContext.GetRandom"/>
        [Pure]
        public IRandom GetRandom() => new Random(RandomSeed);
    }
}
