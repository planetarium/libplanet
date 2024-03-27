using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An interface to fetch world states.
    /// <para>It is like a readonly map which is virtually initialized such
    /// that every possible <see cref="Address"/> exists and
    /// is mapped to <see langword="null"/>.  That means that:</para>
    /// <list type="bullet">
    /// <item>
    /// <description>it does not have length,</description>
    /// </item>
    /// <item>
    /// <description>its index getter never throws
    /// <see cref="KeyNotFoundException"/>,
    /// but returns <see langword="null"/> instead, and</description>
    /// </item>
    /// <item>
    /// <description>filling an <see cref="Address"/> with
    /// <see langword="null"/> state cannot be distinguished from
    /// the <see cref="Address"/> having never been set to
    /// any state.</description>
    /// </item>
    /// </list>
    /// </summary>
    public interface IWorldState
    {
        /// <summary>
        /// The <see cref="ITrie"/> of the <see cref="IWorldState"/>.
        /// </summary>
        public ITrie Trie { get; }

        /// <summary>
        /// Whether <see cref="IWorldState"/> is in legacy state or not.
        /// </summary>
        bool Legacy { get; }

        /// <summary>
        /// Gets the <see cref="IAccountState"/> of the given <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the world to get its state.</param>
        /// <returns>The <see cref="IAccountState"/> of the given <paramref name="address"/>.
        /// If it has never been set to any state it returns <see langword="null"/>
        /// instead.</returns>
        [Pure]
        IAccountState GetAccountState(Address address);
    }
}
