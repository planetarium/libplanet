using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Store.Trie;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An interface for the account's state store.
    /// </summary>
    public interface IAccountStore
    {
        /// <summary>
        /// Returns the <see cref="IAccountState"/> associated with <paramref name="rootHash"/>.
        /// </summary>
        /// <param name="rootHash">
        /// The root hash of the state trie.
        /// </param>
        /// <returns>
        /// The <see cref="IAccountState"/> associated with <paramref name="rootHash"/>.
        /// </returns>
        IAccountState GetAccountState(HashDigest<SHA256>? rootHash);

        /// <summary>
        /// Commit the <paramref name="account"/> to the store.
        /// And return the next <see cref="ITrie"/> instance.
        /// </summary>
        /// <param name="account">
        /// The <see cref="IAccount"/> to commit.
        /// </param>
        /// <returns>
        /// The next <see cref="ITrie"/> instance.
        /// </returns>
        ITrie Commit(IAccount account);
    }
}