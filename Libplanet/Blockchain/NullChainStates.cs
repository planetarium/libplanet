using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Blockchain
{
    internal class NullChainStates : IBlockChainStates
    {
        public static readonly NullChainStates Instance = new NullChainStates();

        private NullChainStates()
        {
        }

        public IValue? GetState(
            Address address, Address accountAddress, BlockHash? offset) =>
            GetWorldState(offset).GetAccountState(accountAddress)
            .GetState(address);

        public IReadOnlyList<IValue?> GetStates(
            IReadOnlyList<Address> addresses, Address accountAddress, BlockHash? offset) =>
            GetWorldState(offset).GetAccountState(accountAddress)
            .GetStates(addresses);

        public FungibleAssetValue GetBalance(
            Address address, Currency currency, BlockHash? offset) =>
            GetWorldState(offset).GetAccountState(ReservedAddresses.LegacyAccount)
            .GetBalance(address, currency);

        public FungibleAssetValue GetTotalSupply(Currency currency, BlockHash? offset) =>
            GetWorldState(offset).GetAccountState(ReservedAddresses.LegacyAccount)
            .GetTotalSupply(currency);

        public ValidatorSet GetValidatorSet(BlockHash? offset) =>
            GetWorldState(offset).GetAccountState(ReservedAddresses.LegacyAccount)
            .GetValidatorSet();

        public IWorldState GetWorldState(BlockHash? offset) => new NullWorldState(offset);

        public IAccountState GetAccountState(Address address, HashDigest<SHA256> srh)
            => new NullAccountState(address);

        public ITrie GetBlockStateRoot(BlockHash? offset) => new NullTrie(offset);

        public ITrie GetStateRoot(HashDigest<SHA256>? srh) => new NullTrie(srh);
    }

#pragma warning disable SA1402  // File may only contain a single type
    internal class NullWorldState : IWorldState
#pragma warning restore SA1402
    {
        public NullWorldState(BlockHash? blockHash)
        {
            BlockHash = blockHash;
        }

        public BlockHash? BlockHash { get; }

        public bool Legacy => true;

        public IAccountState GetAccountState(Address address) => new NullAccountState(address);
    }

#pragma warning disable SA1402  // File may only contain a single type
    internal class NullTrie : ITrie
#pragma warning restore SA1402
    {
        public NullTrie(BlockHash? blockHash)
        {
            if (blockHash is { } hash)
            {
                Hash = HashDigest<SHA256>.DeriveFrom(hash.ByteArray);
            }
            else
            {
                Hash = HashDigest<SHA256>.DeriveFrom(new Codec().Encode(Null.Value));
            }
        }

        public NullTrie(HashDigest<SHA256>? srh)
        {
            if (srh is { } hash)
            {
                Hash = hash;
            }
            else
            {
                Hash = HashDigest<SHA256>.DeriveFrom(new Codec().Encode(Null.Value));
            }
        }

        public HashDigest<SHA256> Hash { get; }

        public bool Recorded => false;

        public ITrie Commit() => this;

        public IReadOnlyList<IValue?> Get(IReadOnlyList<KeyBytes> keys) =>
            new IValue?[keys.Count];

        public ITrie Set(in KeyBytes key, IValue value)
        {
            throw new NotSupportedException();
        }
    }

#pragma warning disable SA1402  // File may only contain a single type
    internal class NullAccountState : IAccountState
#pragma warning restore SA1402
    {
        public NullAccountState(Address address)
        {
            Address = address;
        }

        public Address Address { get; }

        IValue? IAccountState.GetState(Address address) => null;

        IReadOnlyList<IValue?> IAccountState.GetStates(IReadOnlyList<Address> addresses) =>
            new IValue?[addresses.Count];

        FungibleAssetValue IAccountState.GetBalance(Address address, Currency currency)
            => currency * 0;

        FungibleAssetValue IAccountState.GetTotalSupply(Currency currency)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            return currency * 0;
        }

        ValidatorSet IAccountState.GetValidatorSet() => new ValidatorSet();
    }
}
