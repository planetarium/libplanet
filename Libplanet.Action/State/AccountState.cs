using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Consensus;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A default implementation of <see cref="IAccountState"/> interface.
    /// </summary>
    public class AccountState : IAccountState
    {
        private readonly ITrie _trie;

        public AccountState(ITrie trie)
        {
            _trie = trie;
        }

        /// <inheritdoc cref="IAccountState.Trie"/>
        public ITrie Trie => _trie;

        /// <inheritdoc cref="IAccountState.GetState"/>
        public IValue? GetState(Address address) => Trie.Get(ToStateKey(address));

        /// <inheritdoc cref="IAccountState.GetStates"/>
        public IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> addresses) =>
            addresses.Select(address => GetState(address)).ToList();

        /// <inheritdoc cref="IAccountState.GetValidatorSet"/>
        public ValidatorSet GetValidatorSet()
        {
            IValue? value = Trie.Get(ValidatorSetKey);
            return value is List list
                ? new ValidatorSet(list)
                : new ValidatorSet();
        }
    }
}
