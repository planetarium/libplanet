using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An interface to manipulate an account state with
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
    /// <see langword="null"/> state cannot be distinguished from
    /// the <see cref="Address"/> having never been set to
    /// any state.</description>
    /// </item>
    /// </list>
    /// </summary>
    /// <remarks>
    /// This interface is immutable.  <see cref="SetState(Address, IValue)"/>
    /// method does not manipulate the instance, but returns a new
    /// <see cref="IAccount"/> instance with updated states.
    /// </remarks>
    public interface IAccount : IAccountState
    {
        /// <summary>
        /// Gets a new instance that the account state of the given
        /// <paramref name="address"/> is set to the given
        /// <paramref name="state"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the account to set its state.</param>
        /// <param name="state">The new state to fill the account with.</param>
        /// <returns>A new <see cref="IAccount"/> instance that
        /// the account state of the given <paramref name="address"/>
        /// is set to the given <paramref name="state"/>.</returns>
        /// <remarks>
        /// This method method does not manipulate the instance,
        /// but returns a new <see cref="IAccount"/> instance
        /// with updated states instead.
        /// </remarks>
        [Pure]
        IAccount SetState(Address address, IValue state);

        /// <summary>
        /// Gets a new instance that the account state of the given
        /// <paramref name="address"/> is removed.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the account to remove its state.</param>
        /// <returns>A new <see cref="IAccount"/> instance that
        /// the account state of the given <paramref name="address"/>
        /// is removed.</returns>
        /// <remarks>
        /// This method method does not manipulate the instance,
        /// but returns a new <see cref="IAccount"/> instance
        /// with updated states instead.
        /// </remarks>
        [Pure]
        IAccount RemoveState(Address address);
    }
}
