using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;

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
        /// Whether <see cref="IWorldState"/> is in legacy state or not.
        /// </summary>
        bool Legacy { get; }

        /// <summary>
        /// Gets the world state of the given <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the world to get its state.</param>
        /// <returns>The world state of the given <paramref name="address"/>.
        /// If it has never been set to any state it returns <see langword="null"/>
        /// instead.</returns>
        [Pure]
        IAccount GetAccount(Address address);
    }
}
