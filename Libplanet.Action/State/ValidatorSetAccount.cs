using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.State
{
    public class ValidatorSetAccount
    {
        public static readonly Address ValidatorSetAddress =
            new Address("1000000000000000000000000000000000000000");

        public ValidatorSetAccount(ITrie trie, int worldTrieVersion)
        {
            Trie = trie;
            WorldTrieVersion = worldTrieVersion;
        }

        public ITrie Trie { get; }

        public int WorldTrieVersion { get; }

        public ValidatorSet GetValidatorSet()
        {
            if (WorldTrieVersion >= BlockMetadata.ValidatorSetAccountProtocolVersion)
            {
                return Trie.Get(KeyConverters.ToStateKey(ValidatorSetAddress)) is { } value
                    ? new ValidatorSet(value)
                    : new ValidatorSet();
            }
            else
            {
                return Trie.Get(KeyConverters.ValidatorSetKey) is { } value
                    ? new ValidatorSet(value)
                    : new ValidatorSet();
            }
        }

        public ValidatorSetAccount SetValidatorSet(ValidatorSet validatorSet)
        {
            if (WorldTrieVersion >= BlockMetadata.ValidatorSetAccountProtocolVersion)
            {
                return new ValidatorSetAccount(
                    Trie.Set(KeyConverters.ToStateKey(ValidatorSetAddress), validatorSet.Bencoded),
                    WorldTrieVersion);
            }
            else
            {
                return new ValidatorSetAccount(
                    Trie.Set(KeyConverters.ValidatorSetKey, validatorSet.Bencoded),
                    WorldTrieVersion);
            }
        }

        public IAccount AsAccount()
        {
            return new Account(new AccountState(Trie));
        }
    }
}
