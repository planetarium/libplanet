using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A default implementation of <see cref="IWorldState"/> interface.
    /// </summary>
    public class WorldState : IWorldState
    {
        private static readonly Codec Codec = new Codec();
        private readonly IBlockChainStates _blockChainStates;
        private readonly BlockHash? _blockHash;
        private readonly BlockStateCache _cache;
        private readonly bool _legacy;
        private readonly ITrie _stateRoot;

        public WorldState(BlockHash? blockHash, IBlockChainStates blockChainStates)
        {
            _blockChainStates = blockChainStates;
            _blockHash = blockHash;
            _stateRoot = _blockChainStates.GetBlockStateRoot(blockHash);
            _legacy = GetAccountState(ReservedAddresses.LegacyAccount) is null;
            _cache = new BlockStateCache();
        }

        /// <summary>
        /// The <see cref="BlockHash"/> from which this world state is called.
        /// </summary>
        public BlockHash? Blockhash => _blockHash;

        /// <inheritdoc cref="IWorldState.Legacy"/>
        public bool Legacy => _legacy;

        /// <inheritdoc cref="IWorldState.GetAccountState"/>
        public IAccountState GetAccountState(Address address) => GetAccountStates(new[] { address }).First();

        /// <summary>
        /// Gets the world states of the given <paramref name="addresses"/>.
        /// </summary>
        /// <param name="addresses">The <see cref="Address"/>es referring
        /// the <see cref="IAccountState"/>s to get its states.</param>
        /// <returns>The list of <see cref="IAccountState"/>s of the given
        /// <paramref name="addresses"/>.
        public IReadOnlyList<IAccountState> GetAccountStates(IReadOnlyList<Address> addresses)
        {
            // Try using cache first
            int length = addresses.Count;
            List<int> uncachedIndices = new List<int>(length);
            IAccountState[] result = new IAccount[length];

            for (int i = 0; i < length; i++)
            {
                if (_cache.TryGetValue(addresses[i], out IValue? cachedValue) &&
                    cachedValue is { } cv)
                {
                    HashDigest<SHA256> srh = HashDigest<SHA256>.DeriveFrom(Codec.Encode(cv));
                    result[i] = new AccountState(addresses[i], _blockChainStates.GetStateRoot(srh));
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
                    HashDigest<SHA256> srh = HashDigest<SHA256>.DeriveFrom(Codec.Encode(f));
                    result[v] = new AccountState(
                        uncachedAddresses[i], _blockChainStates.GetStateRoot(srh));
                    _cache.AddOrUpdate(addresses[v], f);
                }
                else
                {
                    if (Legacy && uncachedAddresses[i].Equals(ReservedAddresses.LegacyAccount))
                    {
                        result[v] = new AccountState(addresses[v], _stateRoot);
                    }

                    result[v] = new AccountState(
                        addresses[v], _blockChainStates.GetStateRoot(null));
                }
            }

            return result;
        }
    }
}
