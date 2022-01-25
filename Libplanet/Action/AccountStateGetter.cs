using System.Collections.Generic;
using Bencodex.Types;

namespace Libplanet.Action
{
    /// <summary>
    /// An delegate to provide read-only view of account states.
    /// <para>Gets states associated with the specified account <paramref name="addresses"/>.</para>
    /// <para>If some states associated with the specified account <paramref name="addresses"/> have
    /// never been set these absent states are represented as <see langword="null"/>.</para>
    /// </summary>
    /// <param name="addresses">Account addresses associated with the states to get.</param>
    /// <returns>The states associated to the specified account <paramref name="addresses"/>.
    /// Associated values are ordered in the same way to the corresponding
    /// <paramref name="addresses"/>.  Absent states are represented as <see langword="null"/>.
    /// </returns>
    public delegate IReadOnlyList<IValue?> AccountStateGetter(IReadOnlyList<Address> addresses);
}
