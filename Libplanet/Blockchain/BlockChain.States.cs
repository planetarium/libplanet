#nullable disable
using System;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        /// <inheritdoc cref="IBlockChainStates.GetWorldState(BlockHash?)" />
        public IWorldState GetWorldState(BlockHash? offset)
            => _blockChainStates.GetWorldState(offset);

        /// <inheritdoc cref="IBlockChainStates.GetWorldState(HashDigest{SHA256}?)" />
        public IWorldState GetWorldState(HashDigest<SHA256>? stateRootHash)
            => _blockChainStates.GetWorldState(stateRootHash);

        /// <summary>
        /// Gets the current world state in the <see cref="BlockChain"/>.
        /// </summary>
        /// <returns>The current world state.</returns>
        public IWorldState GetWorldState() => GetWorldState(Tip.Hash);

        /// <inheritdoc cref="IBlockChainStates.GetAccountState(BlockHash?, Address)"/>
        public IAccountState GetAccountState(BlockHash? offset, Address address)
            => _blockChainStates.GetAccountState(offset, address);

        /// <inheritdoc cref="IBlockChainStates.GetAccountState(HashDigest{SHA256}?)"/>
        public IAccountState GetAccountState(HashDigest<SHA256>? stateRootHash)
            => _blockChainStates.GetAccountState(stateRootHash);

        /// <summary>
        /// Gets the current account state of given <paramref name="address"/> in the
        /// <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="address">An <see cref="Address"/> to get the account states of.</param>
        /// <returns>The current account state of given <paramref name="address"/>.</returns>
        public IAccountState GetAccountState(Address address)
            => GetAccountState(Tip.Hash, address);

        /// <inheritdoc cref="IBlockChainStates.GetState(BlockHash?, Address, Address)"/>
        public IValue GetState(BlockHash? offset, Address accountAddress, Address address)
            => _blockChainStates.GetState(offset, accountAddress, address);

        /// <inheritdoc cref="IBlockChainStates.GetState(HashDigest{SHA256}?, Address)"/>
        public IValue GetState(HashDigest<SHA256>? stateRootHash, Address address)
            => _blockChainStates.GetState(stateRootHash, address);

        /// <summary>
        /// Gets the current state of given <paramref name="address"/> and
        /// <paramref name="accountAddress"/> in the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="accountAddress">An <see cref="Address"/> to get the states from.</param>
        /// <param name="address">An <see cref="Address"/> to get the states of.</param>
        /// <returns>The current state of given <paramref name="address"/> and
        /// <paramref name="accountAddress"/>.  This can be <see langword="null"/>
        /// if <paramref name="address"/> or <paramref name="accountAddress"/> has no value.
        /// </returns>
        public IValue GetState(Address accountAddress, Address address)
            => GetState(Tip.Hash, accountAddress, address);

        /// <inheritdoc cref=
        /// "IBlockChainStates.GetBalance(BlockHash?, Address, Currency)"/>
        public FungibleAssetValue GetBalance(
            BlockHash? offset,
            Address address,
            Currency currency)
            => _blockChainStates.GetBalance(offset, address, currency);

        /// <inheritdoc cref=
        /// "IBlockChainStates.GetBalance(HashDigest{SHA256}?, Address, Currency)"/>
        public FungibleAssetValue GetBalance(
            HashDigest<SHA256>? stateRootHash,
            Address address,
            Currency currency)
            => _blockChainStates.GetBalance(stateRootHash, address, currency);

        /// <summary>
        /// Queries <paramref name="address"/>'s current balance of the <paramref name="currency"/>
        /// in the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>The <paramref name="address"/>'s current balance.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> of
        /// <see cref="ReservedAddresses.LegacyAccount"/> cannot be created.
        /// </exception>
        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency)
            => GetBalance(Tip.Hash, address, currency);

        /// <inheritdoc cref="IBlockChainStates.GetTotalSupply(BlockHash?, Currency)"/>
        public FungibleAssetValue GetTotalSupply(
            BlockHash? offset,
            Currency currency)
            => _blockChainStates.GetTotalSupply(offset, currency);

        /// <inheritdoc cref="IBlockChainStates.GetTotalSupply(HashDigest{SHA256}?, Currency)"/>
        public FungibleAssetValue GetTotalSupply(
            HashDigest<SHA256>? stateRootHash,
            Currency currency)
            => _blockChainStates.GetTotalSupply(stateRootHash, currency);

        /// <summary>
        /// Gets the current total supply of a <paramref name="currency"/> in the
        /// <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>The total supply value of <paramref name="currency"/> at
        /// <see cref="BlockChain.Tip"/> in <see cref="FungibleAssetValue"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> of
        /// <see cref="ReservedAddresses.LegacyAccount"/> cannot be created.
        /// </exception>
        public FungibleAssetValue GetTotalSupply(Currency currency)
            => GetTotalSupply(Tip.Hash, currency);

        /// <inheritdoc cref="IBlockChainStates.GetValidatorSet(BlockHash?)" />
        public ValidatorSet GetValidatorSet(BlockHash? offset)
            => _blockChainStates.GetValidatorSet(offset);

        /// <inheritdoc cref="IBlockChainStates.GetValidatorSet(HashDigest{SHA256}?)" />
        public ValidatorSet GetValidatorSet(HashDigest<SHA256>? stateRootHash)
            => _blockChainStates.GetValidatorSet(stateRootHash);

        /// <summary>
        /// Returns the current validator set in the <see cref="BlockChain"/>.
        /// </summary>
        /// <returns>The validator set of type <see cref="ValidatorSet"/> at
        /// <see cref="BlockChain.Tip"/> and <see cref="ReservedAddresses.LegacyAccount"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> of
        /// <see cref="ReservedAddresses.LegacyAccount"/> cannot be created.
        /// </exception>
        public ValidatorSet GetValidatorSet()
            => GetValidatorSet(Tip.Hash);
    }
}
