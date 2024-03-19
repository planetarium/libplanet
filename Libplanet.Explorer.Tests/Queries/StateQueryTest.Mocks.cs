using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
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
using Libplanet.Store.Trie.Nodes;
using System;
using static Libplanet.Action.State.KeyConverters;

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
            new MockWorldState(stateRootHash);

        public IWorldState GetWorldState(BlockHash? blockHash) =>
            new MockWorldState(ToStateRootHash(blockHash));
    }

    // Behaves like a non-empty world only if state root hash is non-null.
    private class MockWorldState : IWorldState
    {
        public static readonly Address Address =
            new Address("0x5003712B63baAB98094aD678EA2B24BcE445D076");

        private readonly HashDigest<SHA256>? _stateRootHash;

        public MockWorldState(HashDigest<SHA256>? stateRootHash)
        {
            _stateRootHash = stateRootHash;
        }

        public ITrie Trie => new MockTrie(_stateRootHash);

        public bool Legacy => true;

        public IWorldDelta Delta => throw new System.NotImplementedException();

        public IAccountState GetAccountState(Address address) =>
            _stateRootHash is { } && ReservedAddresses.LegacyAccount.Equals(address)
                ? new MockAccountState(_stateRootHash)
                : new MockAccountState(null);

        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            _stateRootHash is { } && Address.Equals(address)
                ? currency * 123
                : currency * 0;

        public FungibleAssetValue GetTotalSupply(Currency currency) =>
            _stateRootHash is { }
                ? currency * 10000
                : currency * 0;
    }

    // Behaves like a non-empty account only if state root hash is non-null.
    private class MockAccountState : IAccountState
    {
        public static readonly Address Address =
            new Address("0x5003712B63baAB98094aD678EA2B24BcE445D076");

        private readonly HashDigest<SHA256>? _stateRootHash;

        public MockAccountState(HashDigest<SHA256>? stateRootHash)
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

        public ValidatorSet GetValidatorSet() =>
            new ValidatorSet(new List<Validator>
            {
                new(
                    PublicKey.FromHex(
                        "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                    new BigInteger(1)),
            });
    }

    private class MockTrie : ITrie
    {
        private readonly HashDigest<SHA256>? _stateRootHash;

        public MockTrie(HashDigest<SHA256>? stateRootHash)
        {
            _stateRootHash = stateRootHash;
        }

        public INode Root => throw new NotSupportedException();

        public HashDigest<SHA256> Hash => _stateRootHash is { } stateRootHash
            ? stateRootHash
            : new TrieStateStore(new MemoryKeyValueStore()).GetStateRoot(null).Hash;

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
