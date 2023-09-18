using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    public class ActionRenderContext : IActionRenderContext
    {
        public ActionRenderContext(IActionContext context)
            : this(
                signer: context.Signer,
                txId: context.TxId,
                miner: context.Miner,
                blockIndex: context.BlockIndex,
                blockProtocolVersion: context.BlockProtocolVersion,
                rehearsal: context.Rehearsal,
                previousState: context.PreviousState.Trie.Hash,
                random: context.GetUnconsumedContext().Random,
                blockAction: context.BlockAction)
        {
        }

        public ActionRenderContext(
            Address signer,
            TxId? txId,
            Address miner,
            long blockIndex,
            int blockProtocolVersion,
            bool rehearsal,
            HashDigest<SHA256> previousState,
            IRandom random,
            bool blockAction)
        {
            Signer = signer;
            TxId = txId;
            Miner = miner;
            BlockIndex = blockIndex;
            BlockProtocolVersion = blockProtocolVersion;
            Rehearsal = rehearsal;
            PreviousState = previousState;
            Random = random;
            BlockAction = blockAction;
        }

        /// <inheritdoc cref="IActionRenderContext.Signer"/>
        [Pure]
        public Address Signer { get; }

        /// <inheritdoc cref="IActionRenderContext.TxId"/>
        [Pure]
        public TxId? TxId { get; }

        /// <inheritdoc cref="IActionRenderContext.Miner"/>
        [Pure]
        public Address Miner { get; }

        /// <inheritdoc cref="IActionRenderContext.BlockIndex"/>
        [Pure]
        public long BlockIndex { get; }

        /// <inheritdoc cref="IActionRenderContext.BlockProtocolVersion"/>
        [Pure]
        public int BlockProtocolVersion { get; }

        /// <inheritdoc cref="IActionRenderContext.Rehearsal"/>
        [Pure]
        public bool Rehearsal { get; }

        /// <inheritdoc cref="IActionRenderContext.PreviousState"/>
        [Pure]
        public HashDigest<SHA256> PreviousState { get; }

        /// <inheritdoc cref="IActionRenderContext.Random"/>
        public IRandom Random { get; }

        /// <inheritdoc cref="IActionRenderContext.BlockAction"/>
        [Pure]
        public bool BlockAction { get; }
    }
}
