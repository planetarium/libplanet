using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A default implementation of <see cref="IWorldState"/> interface.
    /// </summary>
    public class WorldBaseState : IWorldState
    {
        private readonly IBlockChainStates _blockChainStates;
        private readonly HashDigest<SHA256>? _stateRootHash;
        private readonly BlockStateCache _cache;
        private readonly ITrie _stateRoot;

        public WorldBaseState(HashDigest<SHA256>? stateRootHash, IBlockChainStates blockChainStates)
        {
            _blockChainStates = blockChainStates;
            _stateRootHash = stateRootHash;
            _stateRoot = _blockChainStates.GetStateRoot(_stateRootHash);
            Legacy = _stateRoot
                .Get(new[]
                {
                    ToStateKey(ReservedAddresses.LegacyAccount),
                })
                .Any(v => v == null);
            _cache = new BlockStateCache();
        }

        /// <summary>
        /// The <see cref="HashDigest{SHA256}"/> from which this world state is called.
        /// </summary>
        public HashDigest<SHA256>? StateRootHash => _stateRootHash;

        /// <inheritdoc cref="IWorldState.Legacy"/>
        public bool Legacy { get; }

        /// <inheritdoc cref="IWorldState.GetAccount"/>
        public IAccount GetAccount(Address address) => GetAccounts(new[] { address }).First();

        /// <summary>
        /// Gets the world states of the given <paramref name="addresses"/>.
        /// </summary>
        /// <param name="addresses">The <see cref="Address"/>es referring
        /// the <see cref="IAccountState"/>s to get its states.</param>
        /// <returns>The list of <see cref="IAccountState"/>s of the given
        /// <paramref name="addresses"/>.
        public IReadOnlyList<IAccount> GetAccounts(IReadOnlyList<Address> addresses)
        {
            // Try using cache first
            int length = addresses.Count;
            List<int> uncachedIndices = new List<int>(length);
            IAccount[] result = new IAccount[length];

            for (int i = 0; i < length; i++)
            {
                if (_cache.TryGetValue(addresses[i], out IValue? cachedValue) &&
                    cachedValue is { } cv)
                {
                    HashDigest<SHA256> srh = new HashDigest<SHA256>((Binary)cv);
                    result[i] = Account.Create(
                        new AccountBaseState(addresses[i], _blockChainStates.GetStateRoot(srh)));
                }
                else
                {
                    uncachedIndices.Add(i);
                }
            }

            if (uncachedIndices.Count == 0)
            {
                return result;
            }

            IReadOnlyList<Address> uncachedAddresses =
                uncachedIndices.Select(index => addresses[index]).ToArray();
            KeyBytes[] uncachedKeys = uncachedAddresses.Select(ToStateKey).ToArray();
            IReadOnlyList<IValue?> fetched = _stateRoot.Get(uncachedKeys).ToArray();
            foreach ((var v, var i) in uncachedIndices.Select((v, i) => (v, i)))
            {
                if (fetched[i] is { } f)
                {
                    HashDigest<SHA256> srh = new HashDigest<SHA256>((Binary)f);
                    result[v] = Account.Create(new AccountBaseState(
                        uncachedAddresses[i], _blockChainStates.GetStateRoot(srh)));
                    _cache.AddOrUpdate(addresses[v], f);
                }
                else
                {
                    if (Legacy && uncachedAddresses[i].Equals(ReservedAddresses.LegacyAccount))
                    {
                        result[v] = Account.Create(new AccountBaseState(addresses[v], _stateRoot));
                    }
                    else
                    {
                        result[v] = Account.Create(new AccountBaseState(
                            addresses[v], _blockChainStates.GetStateRoot(null)));
                    }
                }
            }

            return result;
        }
    }
}
