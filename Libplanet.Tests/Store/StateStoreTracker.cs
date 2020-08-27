using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;

namespace Libplanet.Tests.Store
{
    public sealed class StateStoreTracker : BaseTracker, IStateStore
    {
        private readonly IStateStore _stateStore;

        public StateStoreTracker(IStateStore stateStore)
        {
            _stateStore = stateStore;
        }

        public void SetStates<T>(
            Block<T> blockHash,
            IImmutableDictionary<string, IValue> states)
            where T : IAction, new()
        {
            Log(nameof(SetStates), blockHash, states);
            _stateStore.SetStates(blockHash, states);
        }

        public IValue GetState(
            string stateKey,
            HashDigest<SHA256>? blockHash = null,
            Guid? chainId = null)
        {
            Log(nameof(GetState), stateKey, blockHash, chainId);
            return _stateStore.GetState(stateKey, blockHash, chainId);
        }

        public bool ContainsBlockStates(HashDigest<SHA256> blockHash)
        {
            Log(nameof(ContainsBlockStates), blockHash);
            return _stateStore.ContainsBlockStates(blockHash);
        }

        public void ForkStates<T>(Guid sourceChainId, Guid destinationChainId, Block<T> branchPoint)
            where T : IAction, new()
        {
            Log(nameof(ForkStates), sourceChainId, destinationChainId, branchPoint);
            _stateStore.ForkStates(sourceChainId, destinationChainId, branchPoint);
        }
    }
}
