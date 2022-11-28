using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Consensus;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A delegate to be called when <see cref="IBlockChainStates{T}.GetValidatorSet"/>
    /// method encounters a block having incomplete dirty states.
    /// <see cref="IBlockChainStates{T}.GetValidatorSet"/> method returns this delegate's
    /// return value instead for such case.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// the type parameter of <see cref="BlockChain{T}"/>.</typeparam>
    /// <param name="blockChain">The blockchain to query.</param>
    /// <param name="blockHash">The hash of a block lacking its dirty states.</param>
    /// <returns>The <see cref="ValidatorSet"/> of the block.</returns>
    /// <seealso cref="ValidatorSetStateCompleters{T}"/>
    public delegate ValidatorSet ValidatorSetStateCompleter<T>(
        BlockChain<T> blockChain,
        BlockHash blockHash
    )
        where T : IAction, new();
}
