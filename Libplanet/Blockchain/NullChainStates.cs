using System.Collections.Generic;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Blockchain
{
    internal class NullChainStates : IBlockChainStates
    {
        public static readonly NullChainStates Instance = new NullChainStates();
        private static readonly IKeyValueStore _keyValueStore = new MemoryKeyValueStore();
        private static readonly IStateStore _stateStore = new TrieStateStore(_keyValueStore);

        private NullChainStates()
        {
        }

        public IValue? GetState(
            Address address, BlockHash? offset) =>
            GetAccountState(offset).GetState(address);

        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses, BlockHash? offset) =>
            GetAccountState(offset).GetStates(addresses);

        public FungibleAssetValue GetBalance(
            Address address, Currency currency, BlockHash? offset) =>
            GetAccountState(offset).GetBalance(address, currency);

        public FungibleAssetValue GetTotalSupply(Currency currency, BlockHash? offset) =>
            GetAccountState(offset).GetTotalSupply(currency);

        public ValidatorSet GetValidatorSet(BlockHash? offset) =>
            GetAccountState(offset).GetValidatorSet();

        public IAccountState GetAccountState(BlockHash? offset) =>
            new Account(new MerkleTrie(_keyValueStore));

        public HashDigest<SHA256> GetStateRootHash(BlockHash? offset) =>
            GetAccountState(offset).Trie.Hash;

        public IStateStore GetStateStore() => _stateStore;
    }
}
