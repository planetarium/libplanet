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

        /// <inheritdoc cref="IBlockChainStates.GetAccountState(Address, BlockHash?)"/>
        public IAccountState GetAccountState(Address address, BlockHash? offset)
            => _blockChainStates.GetAccountState(address, offset);

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
            => GetAccountState(address, Tip.Hash);

        /// <inheritdoc cref="IBlockChainStates.GetState(Address, Address, BlockHash?)"/>
        public IValue GetState(Address address, Address accountAddress, BlockHash? offset)
            => _blockChainStates.GetState(address, accountAddress, offset);

        /// <inheritdoc cref="IBlockChainStates.GetState(Address, HashDigest{SHA256}?)"/>
        public IValue GetState(Address address, HashDigest<SHA256>? stateRootHash)
            => _blockChainStates.GetState(address, stateRootHash);

        /// <summary>
        /// Gets the current state of given <paramref name="address"/> and
        /// <paramref name="accountAddress"/> in the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="address">An <see cref="Address"/> to get the states of.</param>
        /// <param name="accountAddress">An <see cref="Address"/> to get the states from.</param>
        /// <returns>The current state of given <paramref name="address"/> and
        /// <paramref name="accountAddress"/>.  This can be <see langword="null"/>
        /// if <paramref name="address"/> or <paramref name="accountAddress"/> has no value.
        /// </returns>
        public IValue GetState(Address address, Address accountAddress)
            => GetState(address, accountAddress, Tip.Hash);

        /// <inheritdoc cref=
        /// "IBlockChainStates.GetBalance(Address, Currency, Address, BlockHash?)"/>
        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            Address accountAddress,
            BlockHash? offset)
            => _blockChainStates.GetBalance(address, currency, accountAddress, offset);

        /// <inheritdoc cref=
        /// "IBlockChainStates.GetBalance(Address, Currency, HashDigest{SHA256}?)"/>
        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            HashDigest<SHA256>? stateRootHash)
            => _blockChainStates.GetBalance(address, currency, stateRootHash);

        /// <summary>
        /// Queries <paramref name="address"/>'s current balance of the <paramref name="currency"/>
        /// in the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="accountAddress">The account <see cref="Address"/> to query from.</param>
        /// <returns>The <paramref name="address"/>'s current balance.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> of
        /// <paramref name="accountAddress"/> cannot be created.
        /// </exception>
        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            Address accountAddress)
            => GetBalance(address, currency, accountAddress, Tip.Hash);

        /// <inheritdoc cref="IBlockChainStates.GetTotalSupply(Currency, Address, BlockHash?)"/>
        public FungibleAssetValue GetTotalSupply(
            Currency currency,
            Address accountAddress,
            BlockHash? offset)
            => _blockChainStates.GetTotalSupply(currency, accountAddress, offset);

        /// <inheritdoc cref="IBlockChainStates.GetTotalSupply(Currency, HashDigest{SHA256}?)"/>
        public FungibleAssetValue GetTotalSupply(
            Currency currency,
            HashDigest<SHA256>? stateRootHash)
            => _blockChainStates.GetTotalSupply(currency, stateRootHash);

        /// <summary>
        /// Gets the current total supply of a <paramref name="currency"/> in the
        /// <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="accountAddress">The account <see cref="Address"/> to query from.</param>
        /// <returns>The total supply value of <paramref name="currency"/> at
        /// <see cref="BlockChain.Tip"/> and <paramref name="accountAddress"/>
        /// in <see cref="FungibleAssetValue"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> of
        /// <paramref name="accountAddress"/> cannot be created.
        /// </exception>
        public FungibleAssetValue GetTotalSupply(Currency currency, Address accountAddress)
            => GetTotalSupply(currency, accountAddress, Tip.Hash);

        /// <inheritdoc cref="IBlockChainStates.GetValidatorSet(Address, BlockHash?)" />
        public ValidatorSet GetValidatorSet(Address accountAddress, BlockHash? offset)
            => _blockChainStates.GetValidatorSet(accountAddress, offset);

        /// <inheritdoc cref="IBlockChainStates.GetValidatorSet(HashDigest{SHA256}?)" />
        public ValidatorSet GetValidatorSet(HashDigest<SHA256>? stateRootHash)
            => _blockChainStates.GetValidatorSet(stateRootHash);

        /// <summary>
        /// Returns the current validator set in the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="accountAddress">The account <see cref="Address"/> to query from.</param>
        /// <returns>The validator set of type <see cref="ValidatorSet"/> at
        /// <see cref="BlockChain.Tip"/> and <paramref name="accountAddress"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> of
        /// <paramref name="accountAddress"/> cannot be created.
        /// </exception>
        public ValidatorSet GetValidatorSet(Address accountAddress)
            => GetValidatorSet(accountAddress, Tip.Hash);

        /// <summary>
        /// Returns the validator set in the
        /// <see cref="BlockChain"/> at <paramref name="offset"/> and
        /// <see cref="ReservedAddresses.LegacyAccount"/>.
        /// </summary>
        /// <param name="offset">The <see cref="BlockHash"/> of the <see cref="Block"/> to fetch
        /// the states from.</param>
        /// <returns>The validator set of type <see cref="ValidatorSet"/> at
        /// <paramref name="offset"/> and <see cref="ReservedAddresses.LegacyAccount"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when <see cref="IAccount"/> at
        /// <paramref name="offset"/> and <see cref="ReservedAddresses.LegacyAccount"/>
        /// cannot be created.
        /// </exception>
        public ValidatorSet GetValidatorSet(BlockHash? offset)
            => GetValidatorSet(ReservedAddresses.LegacyAccount, offset);

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
            => GetValidatorSet(ReservedAddresses.LegacyAccount);
    }
}
