using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A delegate to be called when <see cref="BlockChain{T}.GetState"/> method encounters a block
    /// having incomplete dirty states. <see cref="BlockChain{T}.GetState"/> method returns this
    /// delegate's return value instead for such case.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    /// <param name="blockChain">The blockchain to query.</param>
    /// <param name="blockHash">The hash of a block to lacks its dirty states.</param>
    /// <param name="addresses">The addresses of states to look up.</param>
    /// <returns>Complement states associated to the specified <paramref name="addresses"/>.
    /// The associated values are ordered in the same way to the corresponding
    /// <paramref name="addresses"/>.  Absent states are represented as <see langword="null"/>.
    /// </returns>
    /// <seealso cref="StateCompleters{T}"/>
    public delegate IReadOnlyList<IValue?> StateCompleter<T>(
        BlockChain<T> blockChain,
        BlockHash blockHash,
        IReadOnlyList<Address> addresses
    )
        where T : IAction, new();
}
