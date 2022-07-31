using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Store.Trie;
using Libplanet.Tx;

namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        private readonly int _randomSeed;
        private readonly ITrie? _previousBlockStatesTrie;

        private HashDigest<SHA256>? _previousStateRootHash;

        public ActionContext(
            BlockHash? genesisHash,
            Address signer,
            TxId? txid,
            Address miner,
            long blockIndex,
            IAccountStateDelta previousStates,
            int randomSeed,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null,
            bool blockAction = false
        )
        {
            GenesisHash = genesisHash;
            Signer = signer;
            TxId = txid;
            Miner = miner;
            BlockIndex = blockIndex;
            Rehearsal = rehearsal;
            PreviousStates = previousStates;
            Random = new Random(randomSeed);
            _randomSeed = randomSeed;
            _previousBlockStatesTrie = previousBlockStatesTrie;
            BlockAction = blockAction;
        }

        public BlockHash? GenesisHash { get; }

        public Address Signer { get; }

        public TxId? TxId { get; }

        public Address Miner { get; }

        public long BlockIndex { get; }

        public bool Rehearsal { get; }

        public IAccountStateDelta PreviousStates { get; }

        public IRandom Random { get; }

        public HashDigest<SHA256>? PreviousStateRootHash
        {
            get
            {
                return _previousStateRootHash ??= _previousBlockStatesTrie?
                    .Set(PreviousStates.GetUpdatedRawStates())
                    .Commit()
                    .Hash;
            }
        }

        public bool BlockAction { get; }

        [Pure]
        public IActionContext GetUnconsumedContext() =>
            new ActionContext(
                GenesisHash,
                Signer,
                TxId,
                Miner,
                BlockIndex,
                PreviousStates,
                _randomSeed,
                Rehearsal,
                _previousBlockStatesTrie,
                BlockAction);
    }
}
