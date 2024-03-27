using System;
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
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Mocks
{
    /// <summary>
    /// <para>
    /// A mock implementation of <see cref="IWorldState"/> with various methods for
    /// setting up a semi-valid <see cref="IWorldState"/> for testing.
    /// </para>
    /// <para>
    /// For ease of use, any mutating method automatically commits the resulting
    /// <see cref="MockWorldState"/> to the <see cref="IStateStore"/> that the instance is tied to.
    /// </para>
    /// <para>
    /// If simply an empty disposable <see cref="IWorldState"/> is needed, use
    /// <see cref="MockUtil.MockLegacyWorldState"/> or <see cref="MockUtil.MockModernWorldState"/>
    /// instead.
    /// </para>
    /// </summary>
    public class MockWorldState : IWorldState
    {
        private readonly IStateStore _stateStore;

        /// <summary>
        /// Creates an instance of <see cref="MockWorldState"/>.  Unless using explicitly for
        /// setting up an ephemeral <see cref="IWorldState"/>, a use of this constructor
        /// is not recommended.  Use <see cref="MockBlockChainStates.GetMockWorldState"/> instead.
        /// </summary>
        /// <param name="trie">An <see cref="ITrie"/> representing the current state of
        /// an <see cref="IWorldState"/>.</param>
        /// <param name="stateStore">The <see cref="IStateStore"/> from which
        /// <paramref name="trie"/> was created.</param>
        /// <seealso cref="MockBlockChainStates.GetMockWorldState"/>
        internal MockWorldState(
            ITrie trie,
            IStateStore stateStore)
        {
            Trie = trie;
            _stateStore = stateStore;
            Legacy = Trie.GetMetadata() is null;
        }

        /// <inheritdoc cref="IWorldState.Trie"/>
        public ITrie Trie { get; }

        /// <inheritdoc cref="IWorldState.Legacy"/>
        public bool Legacy { get; }

        /// <summary>
        /// Creates a new manipulable empty legacy <see cref="IWorldState"/>
        /// that is tied to <paramref name="stateStore"/>.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to use
        /// as the new instance's backend storage.  If <see langword="null"/>,
        /// uses an ephemeral on-memory <see cref="IStateStore"/>.</param>
        /// <returns>A new empty legacy <see cref="IWorldState"/>.</returns>
        public static MockWorldState CreateLegacy(IStateStore? stateStore = null)
        {
            stateStore ??= new TrieStateStore(new MemoryKeyValueStore());
            return new MockWorldState(stateStore.GetStateRoot(null), stateStore);
        }

        /// <summary>
        /// Creates a new manipulable empty modern <see cref="IWorldState"/>
        /// that is tied to <paramref name="stateStore"/>.
        /// </summary>
        /// <param name="stateStore">The <see cref="IStateStore"/> to use
        /// as the new instance's backend storage.  If <see langword="null"/>,
        /// uses an ephemeral on-memory <see cref="IStateStore"/>.</param>
        /// <returns>A new empty modern <see cref="IWorldState"/>.</returns>
        public static MockWorldState CreateModern(IStateStore? stateStore = null)
        {
            stateStore ??= new TrieStateStore(new MemoryKeyValueStore());
            ITrie trie = stateStore.GetStateRoot(null);
            trie = trie.SetMetadata(new TrieMetadata(Block.CurrentProtocolVersion));
            trie = stateStore.Commit(trie);
            return new MockWorldState(trie, stateStore);
        }

        /// <inheritdoc cref="IWorldState.GetAccountState"/>
        public IAccountState GetAccountState(Address address) =>
            Legacy && address.Equals(ReservedAddresses.LegacyAccount)
                ? new AccountState(Trie)
                : new AccountState(
                    Trie.Get(ToStateKey(address)) is { } stateRootNotNull
                        ? _stateStore.GetStateRoot(new HashDigest<SHA256>(stateRootNotNull))
                        : _stateStore.GetStateRoot(null));

        public FungibleAssetValue GetTotalSupply(Currency currency) =>
            GetAccountState(ReservedAddresses.LegacyAccount).Trie
                .Get(ToTotalSupplyKey(currency)) is Integer i
                    ? FungibleAssetValue.FromRawValue(currency, i)
                    : currency * 0;

        public ValidatorSet GetValidatorSet() =>
            GetAccountState(ReservedAddresses.LegacyAccount).Trie
                .Get(ValidatorSetKey) is List l
                    ? new ValidatorSet(l)
                    : new ValidatorSet();

        /// <summary>
        /// Converts <see cref="MockWorldState"/> to "modern" if <see cref="Legacy"/>
        /// is <see langword="true"/>.  Otherwise, does nothing.
        /// </summary>
        /// <returns>A converted <see cref="MockWorldState"/>.</returns>
        /// <remarks>
        /// If converted, this automatically commits itself.
        /// </remarks>
        public MockWorldState ToModern()
        {
            if (Legacy)
            {
                ITrie worldTrie = _stateStore.GetStateRoot(null);
                worldTrie = worldTrie.SetMetadata(new TrieMetadata(Block.CurrentProtocolVersion));
                worldTrie = worldTrie.Set(
                    ToStateKey(ReservedAddresses.LegacyAccount),
                    Trie.Hash.Bencoded);
                worldTrie = _stateStore.Commit(worldTrie);
                return new MockWorldState(
                    worldTrie,
                    _stateStore);
            }
            else
            {
                return this;
            }
        }

        /// <summary>
        /// Sets given <paramref name="accountState"/> to <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> location to set
        /// <paramref name="accountState"/>.</param>
        /// <param name="accountState">The <see cref="IAccountState"/> to set.</param>
        /// <returns>A new <see cref="MockWorldState"/> with a committed <see cref="ITrie"/>.
        /// </returns>
        /// <exception>Thrown when trying to set an <see cref="IAccountState"/> to a
        /// non-legacy <see cref="Address"/> for a legacy <see cref="IWorld"/>.</exception>
        /// <remarks>Unlike <see cref="IWorld.SetAccount"/>, a result returned always
        /// has a committed <see cref="ITrie"/>.</remarks>
        public MockWorldState SetAccount(Address address, IAccountState accountState)
        {
            if (Legacy)
            {
                if (!address.Equals(ReservedAddresses.LegacyAccount))
                {
                    throw new ArgumentException(
                        $"Cannot set an account to a non legacy address {address} for " +
                        $"a legacy world");
                }

                ITrie trie = _stateStore.Commit(accountState.Trie);
                return new MockWorldState(trie, _stateStore);
            }
            else
            {
                ITrie trie = _stateStore.Commit(accountState.Trie);
                trie = Trie.Set(ToStateKey(address), new Binary(trie.Hash.ByteArray));
                trie = _stateStore.Commit(trie);
                return new MockWorldState(trie, _stateStore);
            }
        }

        /// <summary>
        /// Sets given <paramref name="value"/> to <paramref name="address"/>.
        /// This bypasses all checks (minter authority, total supply, etc.).
        /// </summary>
        /// <param name="address">The <see cref="Address"/> location to set
        /// <paramref name="value"/>.</param>
        /// <param name="value">The <see cref="FungibleAssetValue"/> to set.</param>
        /// <returns>A new <see cref="MockWorldState"/> with a committed <see cref="ITrie"/>.
        /// </returns>
        public MockWorldState SetBalance(Address address, FungibleAssetValue value) =>
            SetBalance(address, value.Currency, new Integer(value.RawValue));

        /// <summary>
        /// Sets given <see cref="FungibleAssetValue"/> derived from <paramref name="curency"/>
        /// and <paramref name="rawValue"/> to <paramref name="address"/>.
        /// This bypasses all checks (minter authority, total supply, etc.).
        /// </summary>
        /// <param name="address">The <see cref="Address"/> of the <paramref name="value"/>
        /// to set.</param>
        /// <param name="currency">The <see cref="Currency"/> of the
        /// <see cref="FungibleAssetValue"/> to set.</param>
        /// <param name="rawValue">The raw amount of <see cref="FungibleAssetValue"/> to set.
        /// </param>
        /// <returns>A new <see cref="MockWorldState"/> with a committed <see cref="ITrie"/>.
        /// </returns>
        public MockWorldState SetBalance(Address address, Currency currency, Integer rawValue)
        {
            IAccountState accountState = GetAccountState(ReservedAddresses.LegacyAccount);
            ITrie trie = accountState.Trie.Set(
                ToFungibleAssetKey(address, currency), rawValue);
            return SetAccount(ReservedAddresses.LegacyAccount, new AccountState(trie));
        }

        /// <summary>
        /// Sets given <paramref name="value"/> as total supply of <paramref name="value"/>'s
        /// <see cref="Currency"/>.  This bypasses all checks
        /// (minter authority, total supply, etc.).
        /// </summary>
        /// <param name="value">The <see cref="FungibleAssetValue"/> to set.</param>
        /// <returns>A new <see cref="MockWorldState"/> with a committed <see cref="ITrie"/>.
        /// </returns>
        public MockWorldState SetTotalSupply(FungibleAssetValue value)
        {
            IAccountState accountState = GetAccountState(ReservedAddresses.LegacyAccount);
            ITrie trie = accountState.Trie.Set(
                ToTotalSupplyKey(value.Currency), new Integer(value.RawValue));
            return SetAccount(ReservedAddresses.LegacyAccount, new AccountState(trie));
        }

        /// <summary>
        /// Sets given <see cref="FungibleAssetValue"/> derived from <paramref name="curency"/>
        /// and <paramref name="rawValue"/>.  This bypasses all checks
        /// (minter authority, total supply, etc.).
        /// </summary>
        /// <param name="currency">The <see cref="Currency"/> of the
        /// <see cref="FungibleAssetValue"/> to set.</param>
        /// <param name="rawValue">The raw amount of <see cref="FungibleAssetValue"/> to set.
        /// </param>
        /// <returns>A new <see cref="MockWorldState"/> with a committed <see cref="ITrie"/>.
        /// </returns>
        public MockWorldState SetTotalSupply(Currency currency, Integer rawValue)
        {
            IAccountState accountState = GetAccountState(ReservedAddresses.LegacyAccount);
            ITrie trie = accountState.Trie.Set(
                ToTotalSupplyKey(currency), new Integer(rawValue));
            return SetAccount(ReservedAddresses.LegacyAccount, new AccountState(trie));
        }

        public MockWorldState SetValidatorSet(ValidatorSet validatorSet)
        {
            IAccountState accountState = GetAccountState(ReservedAddresses.LegacyAccount);
            ITrie trie = accountState.Trie.Set(ValidatorSetKey, validatorSet.Bencoded);
            return SetAccount(ReservedAddresses.LegacyAccount, new AccountState(trie));
        }
    }
}
