using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Store.Trie.Nodes;
using System;

namespace Libplanet.Explorer.Tests.Queries;

public partial class StateQueryTest
{
    private class MockChainStates : IBlockChainStates
    {
        public static readonly BlockHash BlockHash =
            new BlockHash(
                ByteUtil.ParseHex(
                    "01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"));

        public static readonly HashDigest<SHA256> StateRootHash =
            new HashDigest<SHA256>(
                ByteUtil.ParseHex(
                    "c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64"));

        public static HashDigest<SHA256>? ToStateRootHash(BlockHash? blockHash) =>
            BlockHash.Equals(blockHash)
                ? StateRootHash
                : null;

        public IWorldState GetWorldState(HashDigest<SHA256>? stateRootHash) =>
            new MockWorld(stateRootHash);

        public IWorldState GetWorldState(BlockHash? blockHash) =>
            new MockWorld(ToStateRootHash(blockHash));

        public IAccountState GetAccountState(HashDigest<SHA256>? stateRootHash) =>
            new MockAccount(stateRootHash);

        public IAccountState GetAccountState(BlockHash? blockHash, Address address) =>
            GetWorldState(blockHash).GetAccount(address);

        public IValue GetState(HashDigest<SHA256>? stateRootHash, Address address) =>
            new MockAccount(stateRootHash).GetState(address);

        public IValue GetState(BlockHash? offset, Address accountAddress, Address address) =>
            GetWorldState(offset).GetAccount(accountAddress).GetState(address);

        public FungibleAssetValue GetBalance(
            HashDigest<SHA256>? stateRootHash, Address address, Currency currency) =>
            new MockAccount(stateRootHash).GetBalance(address, currency);

        public FungibleAssetValue GetBalance(
            BlockHash? blockHash, Address address, Currency currency) =>
            new MockAccount(ToStateRootHash(blockHash)).GetBalance(address, currency);

        public FungibleAssetValue GetTotalSupply(HashDigest<SHA256>? stateRootHash, Currency currency) =>
            new MockAccount(stateRootHash).GetTotalSupply(currency);

        public FungibleAssetValue GetTotalSupply(BlockHash? blockHash, Currency currency) =>
            new MockAccount(ToStateRootHash(blockHash)).GetTotalSupply(currency);

        public ValidatorSet GetValidatorSet(HashDigest<SHA256>? stateRootHash) =>
            new MockAccount(stateRootHash).GetValidatorSet();

        public ValidatorSet GetValidatorSet(BlockHash? blockHash) =>
            new MockAccount(ToStateRootHash(blockHash)).GetValidatorSet();
    }

    // Behaves like a non-empty world only if state root hash is non-null.
    private class MockWorld : IWorld
    {
        private readonly HashDigest<SHA256>? _stateRootHash;

        public MockWorld(HashDigest<SHA256>? stateRootHash)
        {
            _stateRootHash = stateRootHash;
        }

        public ITrie Trie => throw new NotImplementedException();

        public bool Legacy => true;

        public IWorldDelta Delta => throw new System.NotImplementedException();

        // Only returns a non-empty account if state root hash is not null and
        // address is legacy account address
        public IAccount GetAccount(Address address) =>
            _stateRootHash is { } && ReservedAddresses.LegacyAccount.Equals(address)
                ? new MockAccount(_stateRootHash)
                : new MockAccount(null);

        public IWorld SetAccount(Address address, IAccount account) =>
            throw new System.NotImplementedException();
    }

    // Behaves like a non-empty account only if state root hash is non-null.
    private class MockAccount : IAccount
    {
        public static readonly Address Address =
            new Address("0x5003712B63baAB98094aD678EA2B24BcE445D076");

        private readonly HashDigest<SHA256>? _stateRootHash;

        public MockAccount(HashDigest<SHA256>? stateRootHash)
        {
            _stateRootHash = stateRootHash;
        }

        public ITrie Trie => new MockTrie(_stateRootHash);

        public IImmutableSet<(Address, Currency)> TotalUpdatedFungibleAssets =>
            throw new System.NotImplementedException();

        public IValue GetState(Address address) =>
            _stateRootHash is { } && Address.Equals(address)
                ? (IValue)Null.Value
                : null;

        public IReadOnlyList<IValue> GetStates(IReadOnlyList<Address> addresses) =>
            addresses.Select(address => GetState(address)).ToList();

        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            _stateRootHash is { } && Address.Equals(address)
                ? currency * 123
                : currency * 0;

        public FungibleAssetValue GetTotalSupply(Currency currency) =>
            _stateRootHash is { }
                ? currency * 10000
                : currency * 0;

        public ValidatorSet GetValidatorSet() =>
            new ValidatorSet(new List<Validator>
            {
                new(
                    PublicKey.FromHex(
                        "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                    new BigInteger(1)),
            });

        public IAccount SetState(Address address, IValue state) =>
            throw new System.NotImplementedException();

        public IAccount RemoveState(Address address) =>
            throw new System.NotImplementedException();

        public IAccount MintAsset(
            IActionContext context,
            Address recipient,
            FungibleAssetValue value) => throw new System.NotImplementedException();

        public IAccount TransferAsset(
            IActionContext context,
            Address sender,
            Address recipient,
            FungibleAssetValue value,
            bool allowNegativeBalance = false) => throw new System.NotImplementedException();

        public IAccount BurnAsset(
            IActionContext context,
            Address owner,
            FungibleAssetValue value) => throw new System.NotImplementedException();

        public IAccount SetValidator(Validator validator) =>
            throw new System.NotImplementedException();
    }

    private class MockTrie : ITrie
    {
        private readonly HashDigest<SHA256>? _stateRootHash;

        public MockTrie(HashDigest<SHA256>? stateRootHash)
        {
            _stateRootHash = stateRootHash;
        }

        public INode Root => throw new NotSupportedException();

        public HashDigest<SHA256> Hash => throw new NotSupportedException();

        public bool Recorded => throw new NotSupportedException();

        public ITrie Set(in KeyBytes key, IValue value) => throw new NotSupportedException();

        public ITrie Remove(in KeyBytes key) => throw new NotSupportedException();

        public IValue Get(KeyBytes key)
        {
            if (_stateRootHash is { })
            {
                if (key.Length == 3) // Length for validator set key
                {
                    return new ValidatorSet(new List<Validator>
                    {
                        new(
                            PublicKey.FromHex(
                                "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                            new BigInteger(1)),
                    }).Bencoded;
                }

                if (key.Length == (HashDigest<SHA1>.Size * 2 + 2)) // Length for total supply key
                {
                    return new Integer(10000);
                }

                return new Integer(123); // Assume we are looking for balance.
            }
            else
            {
                return null;
            }
        }

        public IReadOnlyList<IValue> Get(IReadOnlyList<KeyBytes> keys) =>
            throw new NotSupportedException();

        public INode GetNode(Nibbles nibbles) => throw new NotSupportedException();

        public IEnumerable<(KeyBytes Path, IValue Value)> IterateValues() =>
            throw new NotSupportedException();

        public IEnumerable<(Nibbles Path, INode Node)> IterateNodes() =>
            throw new NotSupportedException();

        public IEnumerable<(KeyBytes Path, IValue TargetValue, IValue SourceValue)> Diff(ITrie other) =>
            throw new NotSupportedException();
    }
}
