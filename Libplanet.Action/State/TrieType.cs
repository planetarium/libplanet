using Bencodex.Types;

namespace Libplanet.Action.State
{
    public enum TrieType
    {
        /// <summary>
        /// The trie is <see cref="IWorld"/>, which has state root hashes of
        /// <see cref="IAccount"/>s as its child.
        /// </summary>
        World = 0x00,

        /// <summary>
        /// The trie is <see cref="IAccount"/>, which has <see cref="IValue"/>s as its child.
        /// </summary>
        Account = 0x01,
    }
}
