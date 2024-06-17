using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;

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
        /// Whether <see cref="IWorldState"/> is backed by an <see cref="ITrie"/> with
        /// the legacy data model.  This is <see langword="true"/> if and only if
        /// <see cref="Version"/> is less than
        /// <see cref="BlockMetadata.WorldStateProtocolVersion"/>.
        /// </summary>
        bool Legacy { get; }

        /// <summary>
        /// The version of the backend <see cref="ITrie"/> data model.  This should be in sync with
        /// <see cref="IBlockMetadata.ProtocolVersion"/> of the <see cref="IPreEvaluationBlock"/>
        /// getting evaluated.  As this was only introduced since
        /// <see cref="BlockMetadata.WorldStateProtocolVersion"/>, this returns
        /// zero with any <see cref="ITrie"/> representing an <see cref="IWorldState"/> before
        /// <see cref="BlockMetadata.WorldStateProtocolVersion"/> or any <see cref="ITrie"/>
        /// representing an <see cref="IAccountState"/>.
        /// </summary>
        /// <seealso cref="TrieMetadata.Version"/>
        int Version { get; }

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
