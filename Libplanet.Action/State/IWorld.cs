using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An interface to manipulate an world state with
    /// maintaining <see cref="Delta"/>.
    /// <para>It is like a map which is virtually initialized such
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
    /// <see langword="null"/> account cannot be distinguished from
    /// the <see cref="Address"/> having never been set to
    /// any account.</description>
    /// </item>
    /// </list>
    /// </summary>
    /// <remarks>
    /// This interface is immutable.  <see cref="SetAccount"/>
    /// method does not manipulate the instance, but returns a new
    /// <see cref="IWorld"/> instance with updated states.
    /// </remarks>
    public interface IWorld : IWorldState
    {
        /// <summary>
        /// The <see cref="IWorld"/> representing the delta part of
        /// this <see cref="IWorld"/>.
        /// </summary>
        [Pure]
        IWorldDelta Delta { get; }

        /// <summary>
        /// Gets the <see cref="IAccount"/> of the given <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the world to get its state.</param>
        /// <returns>The <see cref="IAccount"/> of the given <paramref name="address"/>.
        /// If it has never been set to any state it returns <see langword="null"/>
        /// instead.</returns>
        [Pure]
        IAccount GetAccount(Address address);

        /// <summary>
        /// Creates a new instance of <see cref="IWorld"/> with given <paramref name="address"/>
        /// set to given <paramref name="account"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> for which to set
        /// given <see cref="account"/> to.</param>
        /// <param name="account">The new <see cref="IAccount"/> to set to
        /// given <paramref name="address"/>.</param>
        /// <returns>A new <see cref="IWorld"/> instance where the account state of given
        /// <paramref name="address"/> is set to given <paramref name="account"/>.</returns>
        /// <remarks>
        /// This method method does not manipulate the instance, but returns
        /// a new <see cref="IWorld"/> instance with an updated world state instead.
        /// </remarks>
        /// <exception cref="ArgumentException">
        /// Thrown when <see cref="Legacy"/> is <see langword="true"/> and
        /// <paramref name="address"/> is not <see cref="ReservedAddresses.LegacyAccount"/>.
        /// </exception>
        [Pure]
        IWorld SetAccount(Address address, IAccount account);
    }
}
