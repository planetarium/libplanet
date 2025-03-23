using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A special "account" for managing <see cref="ValidatorSet"/> starting with
    /// <see cref="BlockMetadata.ValidatorSetAccountProtocolVersion"/>.
    /// </summary>
    public class ValidatorSetAccount
    {
        /// <summary>
        /// The <see cref="Address"/> location within the account where a
        /// <see cref="ValidatorSet"/> gets stored.
        /// </summary>
        public static readonly Address ValidatorSetAddress =
            new Address("1000000000000000000000000000000000000000");

        public ValidatorSetAccount(ITrie trie, int worldVersion)
        {
            Trie = trie;
            WorldVersion = worldVersion;
        }

        public ITrie Trie { get; }

        public int WorldVersion { get; }

        public ValidatorSet GetValidatorSet()
        {
            if (WorldVersion >= BlockMetadata.ValidatorSetAccountProtocolVersion)
            {
                return Trie[KeyConverters.ToStateKey(ValidatorSetAddress)] is { } value
                    ? new ValidatorSet(value)
                    : new ValidatorSet();
            }
            else
            {
                return Trie[KeyConverters.ValidatorSetKey] is { } value
                    ? new ValidatorSet(value)
                    : new ValidatorSet();
            }
        }

        public ValidatorSetAccount SetValidatorSet(ValidatorSet validatorSet)
        {
            if (WorldVersion >= BlockMetadata.ValidatorSetAccountProtocolVersion)
            {
                return new ValidatorSetAccount(
                    Trie.Set(KeyConverters.ToStateKey(ValidatorSetAddress), validatorSet.Bencoded),
                    WorldVersion);
            }
            else
            {
                return new ValidatorSetAccount(
                    Trie.Set(KeyConverters.ValidatorSetKey, validatorSet.Bencoded),
                    WorldVersion);
            }
        }

        /// <summary>
        /// Converts to an <see cref="IAccount"/> so it can be set to an <see cref="IWorld"/>
        /// using <see cref="IWorld.SetAccount"/>.
        /// </summary>
        /// <returns>An <see cref="IAccount"/> with <see cref="Trie"/> as its
        /// underlying <see cref="IAccountState.Trie"/>.</returns>
        public IAccount AsAccount()
        {
            return new Account(new AccountState(Trie));
        }
    }
}
