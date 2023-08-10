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
        /// Gets a new instance that the world state of the given
        /// <paramref name="address"/> is set to the given
        /// <paramref name="account"/>.
        /// </summary>
        /// <param name="account">The new account to fill the account with.</param>
        /// <returns>A new <see cref="IWorld"/> instance that
        /// the account state of the given <paramref name="address"/>
        /// is set to the given <paramref name="account"/>.</returns>
        /// <remarks>
        /// This method method does not manipulate the instance,
        /// but returns a new <see cref="IWorld"/> instance
        /// with updated world instead.
        /// </remarks>
        [Pure]
        IWorld SetAccount(IAccount account);
    }
}
