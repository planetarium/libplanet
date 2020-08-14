using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Store
{
    public abstract class BaseBlockStatesStore : BaseStore, IBlockStatesStore
    {
        public void SetStates<T>(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<string, IValue> states,
            Func<HashDigest<SHA256>, Block<T>> blockGetter)
            where T : IAction, new()
        {
            SetBlockStates(blockHash, states);
        }

        public IValue GetState(
            string stateKey,
            HashDigest<SHA256>? blockHash = null,
            Guid? chainId = null)
        {
            if (chainId is null)
            {
                throw new ArgumentNullException(nameof(chainId));
            }

            blockHash ??= IndexBlockHash(chainId.Value, -1);

            if (blockHash is null)
            {
                return null;
            }

            BlockDigest block = GetBlockDigest(blockHash.Value).Value;
            Tuple<HashDigest<SHA256>, long> stateReference;

            stateReference = LookupStateReference(chainId.Value, stateKey, block.Header.Index);

            if (stateReference is null)
            {
                return null;
            }

            HashDigest<SHA256> hashValue = stateReference.Item1;
            IImmutableDictionary<string, IValue> blockStates = GetBlockStates(hashValue);

            if (blockStates is null)
            {
                return null;
            }

            return blockStates.TryGetValue(stateKey, out IValue state) ? state : null;
        }

        public bool ContainsBlockStates(HashDigest<SHA256> blockHash)
        {
            return !(GetBlockStates(blockHash) is null);
        }

        public void ForkStates<T>(
            Guid sourceChainId,
            Guid destinationChainId,
            Block<T> branchpoint)
            where T : IAction, new()
        {
            ForkStateReferences(sourceChainId, destinationChainId, branchpoint);
        }

        public abstract IEnumerable<string> ListStateKeys(Guid chainId);

        public abstract IImmutableDictionary<string, IImmutableList<HashDigest<SHA256>>>
            ListAllStateReferences(
                Guid chainId, long lowestIndex = 0, long highestIndex = long.MaxValue);

        public abstract Tuple<HashDigest<SHA256>, long> LookupStateReference(
            Guid chainId, string key, long lookupUntilBlockIndex);

        public abstract IEnumerable<Tuple<HashDigest<SHA256>, long>> IterateStateReferences(
            Guid chainId,
            string key,
            long? highestIndex = null,
            long? lowestIndex = null,
            int? limit = null);

        public abstract void StoreStateReference(
            Guid chainId,
            IImmutableSet<string> keys,
            HashDigest<SHA256> blockHash,
            long blockIndex);

        public abstract void ForkStateReferences<T>(
            Guid sourceChainId, Guid destinationChainId, Block<T> branchPoint)
            where T : IAction, new();

        public abstract IImmutableDictionary<string, IValue> GetBlockStates(
            HashDigest<SHA256> blockHash);

        public abstract void SetBlockStates(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<string, IValue> states);

        public abstract void PruneBlockStates<T>(
            Guid chainId, Block<T> until)
            where T : IAction, new();
    }
}
