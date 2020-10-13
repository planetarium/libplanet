#nullable enable
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Libplanet.Store.Trie;

namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        private readonly int _randomSeed;
        private readonly ITrie? _previousBlockStatesTrie;

        public ActionContext(
            Address signer,
            Address miner,
            long blockIndex,
            IAccountStateDelta previousStates,
            int randomSeed,
            bool rehearsal = false,
            ITrie? previousBlockStatesTrie = null
        )
        {
            Signer = signer;
            Miner = miner;
            BlockIndex = blockIndex;
            Rehearsal = rehearsal;
            PreviousStates = previousStates;
            Random = new Random(randomSeed);
            _randomSeed = randomSeed;
            _previousBlockStatesTrie = previousBlockStatesTrie;
        }

        public Address Signer { get; }

        public Address Miner { get; }

        public long BlockIndex { get; }

        public bool Rehearsal { get; }

        public IAccountStateDelta PreviousStates { get; }

        public IRandom Random { get; }

        public HashDigest<SHA256>? PreviousStateRootHash
        {
            get
            {
                _previousBlockStatesTrie?.Set(PreviousStates.GetUpdatedRawStates());
                return _previousBlockStatesTrie?.Commit().Hash;
            }
        }

        [Pure]
        public IActionContext GetUnconsumedContext() =>
            new ActionContext(
                Signer,
                Miner,
                BlockIndex,
                PreviousStates,
                _randomSeed,
                Rehearsal,
                _previousBlockStatesTrie);
    }
}
