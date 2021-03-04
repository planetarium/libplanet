#nullable enable
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
    /// <param name="address">The address to query its state value.</param>
    /// <returns>A complement state.  This can be <c>null</c>.</returns>
    /// <seealso cref="StateCompleters{T}"/>
    public delegate IValue StateCompleter<T>(
        BlockChain<T> blockChain,
        BlockHash blockHash,
        Address address
    )
        where T : IAction, new();
}
