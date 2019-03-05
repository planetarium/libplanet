using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet.Action
{
    /// <summary>
    /// An interface to manipulate account states with
    /// maintaining the set of <see cref="UpdatedAddresses"/>.
    /// <para>It is like a map which is virtually initialized such
    /// that every possible <see cref="Address"/> exists and
    /// is mapped to <c>null</c>.  That means that:</para>
    /// <list type="bullet">
    /// <item>
    /// <description>it does not have length,</description>
    /// </item>
    /// <item>
    /// <description>its index getter never throws
    /// <see cref="KeyNotFoundException"/>,
    /// but returns <c>null</c> instead, and</description>
    /// </item>
    /// <item>
    /// <description>filling an <see cref="Address"/> with
    /// <c>null</c> state cannot be distinguished from
    /// the <see cref="Address"/> having never been set to
    /// any state.</description>
    /// </item>
    /// </list>
    /// </summary>
    /// <remarks>
    /// This interface is immutable.  <see cref="SetState(Address, object)"/>
    /// method does not manipulate the instance, but returns a new
    /// <see cref="IAccountStateDelta"/> instance with updated states.
    /// </remarks>
    public interface IAccountStateDelta
    {
        /// <summary>
        /// <seealso cref="Address"/>es of the accounts that have
        /// been updated since then.
        /// </summary>
        [Pure]
        IImmutableSet<Address> UpdatedAddresses { get; }

        /// <summary>
        /// Gets the account state of the given <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the account to get its state.</param>
        /// <returns>The account state of the given <paramref name="address"/>.
        /// If it has never been set to any state it returns <c>null</c>
        /// instead.</returns>
        [Pure]
        object GetState(Address address);

        /// <summary>
        /// Gets a new instance that the account state of the given
        /// <paramref name="address"/> is set to the given
        /// <paramref name="state"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the account to set its state.</param>
        /// <param name="state">The new state to fill the account with.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance that
        /// the account state of the given <paramref name="address"/>
        /// is set to the given <paramref name="state"/>.</returns>
        /// <remarks>
        /// This method method does not manipulate the instance,
        /// but returns a new <see cref="IAccountStateDelta"/> instance
        /// with updated states instead.
        /// </remarks>
        [Pure]
        IAccountStateDelta SetState(Address address, object state);
    }

    internal static class AccountStateDeltaExtensions
    {
        // TODO: This method should be a part of IAccountStateDelta interface
        // and the current implementation should be its default implementation
        // (when C# 8 comes out).  Although the current implementation is
        // an only way using only generic methods/properties that
        // the IAccountStateDelta interface exposes, it is quite inefficient
        // when an implementing class maintains their own dirty dictionary.
        // (See also AccountStateDeltaImpl.UpdatedStates field.)
        public static IImmutableDictionary<Address, object> GetUpdatedStates(
            this IAccountStateDelta delta
        )
        {
            return delta.UpdatedAddresses.Select(address =>
                new KeyValuePair<Address, object>(
                    address,
                    delta.GetState(address)
                )
            ).ToImmutableDictionary();
        }
    }
}
