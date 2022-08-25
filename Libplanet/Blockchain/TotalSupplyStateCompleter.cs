using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A delegate to be called when <see cref="IBlockChainStates{T}.GetTotalSupply"/>
    /// method encounters a block having incomplete dirty states.
    /// <see cref="IBlockChainStates{T}.GetTotalSupply"/> method returns this delegate's
    /// return value instead for such case.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// the type parameter of <see cref="BlockChain{T}"/>.</typeparam>
    /// <param name="blockChain">The blockchain to query.</param>
    /// <param name="blockHash">The hash of a block lacking its dirty states.</param>
    /// <param name="currency">The currency to query.</param>
    /// <returns>The total supply value of <paramref name="currency"/> in
    /// <see cref="FungibleAssetValue"/>.</returns>
    /// <seealso cref="FungibleAssetStateCompleters{T}"/>
    public delegate FungibleAssetValue TotalSupplyStateCompleter<T>(
        BlockChain<T> blockChain,
        BlockHash blockHash,
        Currency currency
    )
        where T : IAction, new();
}
