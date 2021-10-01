#nullable enable
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    /// <summary>
    /// Convenient extension methods for <see cref="IBlockContent{T}"/>.
    /// </summary>
    public static class BlockContentExtensions
    {
        /// <summary>
        /// Creates a <see cref="BlockContent{T}"/> by copying the fields of another block
        /// <paramref name="content"/>.
        /// <para>Note that it is a shortcut of <seealso cref="BlockContent{T}(IBlockContent{T})"/>
        /// constructor.</para>
        /// </summary>
        /// <typeparam name="T">A class implementing <see cref="IAction"/> to include.  This type
        /// parameter is aligned with <see cref="Transaction{T}"/>'s type parameter.</typeparam>
        /// <param name="content">This source of the block content to copy.  This hasn't be
        /// a actual <see cref="BlockContent{T}"/> instance, but can be any object which implements
        /// <see cref="IBlockContent{T}"/> instance.</param>
        /// <returns>The copied block content.</returns>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="content"/>'s to set is <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the value to set is negative.
        /// </exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when the value to set is
        ///  is negative.</exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="content"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
        /// than its <see cref="IBlockMetadata.Difficulty"/>.</exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when any tx signature is invalid or
        /// not signed by its signer.</exception>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when any tx signer is not derived
        /// from its its public key.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given block
        /// <paramref name="content"/>'s <see cref="IBlockMetadata.TxHash"/> is not consistent with
        /// its <see cref="IBlockContent{T}.Transactions"/>.</exception>
        /// <seealso cref="BlockContent{T}(IBlockContent{T})"/>
        public static BlockContent<T> Copy<T>(this IBlockContent<T> content)
            where T : IAction, new()
        =>
            new BlockContent<T>(content);
    }
}
