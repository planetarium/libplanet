using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A block candidate without evaluating actions (in its <see cref="Transactions"/> and
    /// a possible <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>) and state root
    /// hash.
    /// </summary>
    /// <typeparam name="T">A class implementing <see cref="IAction"/> to include.  This type
    /// parameter is aligned with <see cref="Transaction{T}"/>'s type parameter.</typeparam>
    public sealed class PreEvaluationBlock<T> : IPreEvaluationBlock<T>, IPreEvaluationBlock
        where T : IAction, new()
    {
        private BlockContent<T> _content;
        private PreEvaluationBlockHeader _header;

        public PreEvaluationBlock(
            IPreEvaluationBlockHeader preEvaluationBlockHeader,
            IEnumerable<Transaction<T>> transactions)
            : this(
                new BlockContent<T>(preEvaluationBlockHeader, transactions),
                preEvaluationBlockHeader.PreEvaluationHash)
        {
        }

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlock{T}"/> instance with its
        /// <paramref name="content"/> data, a valid <paramref name="preEvaluationHash"/>.
        /// </summary>
        /// <param name="content">Block's content data.</param>
        /// <param name="preEvaluationHash">A valid hash derived from <paramref name="content"/>.
        /// </param>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when
        /// <paramref name="preEvaluationHash"/> is invalid.</exception>
        internal PreEvaluationBlock(
            BlockContent<T> content,
            in HashDigest<SHA256> preEvaluationHash)
        {
            _header = new PreEvaluationBlockHeader(content.Metadata, preEvaluationHash);
            _content = content;
        }

        /// <summary>
        /// Internal <see cref="PreEvaluationBlockHeader"/>.
        /// </summary>
        public PreEvaluationBlockHeader Header => _header;

        /// <inheritdoc cref="IBlockContent{T}.Transactions"/>
        public IReadOnlyList<Transaction<T>> Transactions => _content.Transactions;

        /// <inheritdoc cref="IBlockContent.Transactions" />
        IImmutableSet<ITransaction> IBlockContent.Transactions =>
            _content.Transactions.Cast<ITransaction>().ToImmutableHashSet();

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion => _header.ProtocolVersion;

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index => _header.Index;

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _header.Timestamp;

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner => _header.Miner;

        /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
        public PublicKey? PublicKey => _header.PublicKey;

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash => _header.PreviousHash;

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash => _header.TxHash;

        /// <inheritdoc cref="IBlockMetadata.LastCommit"/>
        public BlockCommit? LastCommit => _header.LastCommit;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        public HashDigest<SHA256> PreEvaluationHash => _header.PreEvaluationHash;

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and an optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>, and returns
        /// a <see cref="Block{T}"/> instance combined with the <see cref="Block{T}.StateRootHash"/>
        /// determined from ground zero (i.e., empty state root). The returned
        /// <see cref="Block{T}"/> is signed by the given <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="privateKey">The miner's private key to be used for signing the block.
        /// This must match to the block's <see cref="PreEvaluationBlockHeader.Miner"/> and
        /// <see cref="PreEvaluationBlockHeader.PublicKey"/>.</param>
        /// <param name="blockChain">The blockchain on which actions are evaluated based.</param>
        /// <returns>The block combined with the resulting <see cref="Block{T}.StateRootHash"/>.
        /// It is signed by the given <paramref name="privateKey"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when the block's
        /// <see cref="PreEvaluationBlockHeader.ProtocolVersion"/> is less than 2.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="privateKey"/>
        /// does not match to the block miner's <see cref="PublicKey"/>.</exception>
        /// <remarks>As blocks have their signatures since the <see
        /// cref="PreEvaluationBlockHeader.ProtocolVersion"/> 2, it is not usable with blocks of
        /// the earlier <see cref="PreEvaluationBlockHeader.ProtocolVersion"/>s than 2.
        /// To create a <see cref="Block{T}"/> instance with <see cref="Block{T}.ProtocolVersion"/>
        /// less than 2, use <see cref="Block{T}"/>'s constructors with
        /// <see langword="null"/> signatures.</remarks>
        // FIXME: Take narrower input instead of a whole BlockChain<T>.
        public Block<T> Evaluate(PrivateKey privateKey, BlockChain<T> blockChain) =>
            Sign(privateKey, blockChain.DetermineBlockStateRootHash(this, out _));

        /// <summary>
        /// Signs the block content with the given <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="privateKey">The miner's private key to be used for signing the block.
        /// This must match to the block's <see cref="PreEvaluationBlockHeader.Miner"/> and
        /// <see cref="PreEvaluationBlockHeader.PublicKey"/>.</param>
        /// <param name="stateRootHash">The state root hash to include to the input message to
        /// sign.</param>
        /// <returns>The signed block with the <paramref name="stateRootHash"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when the block's
        /// <see cref="PreEvaluationBlockHeader.ProtocolVersion"/> is less than 2.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="privateKey"/>
        /// does not match to the block miner's <see cref="PublicKey"/>.</exception>
        /// <remarks>As blocks have their signatures since the <see
        /// cref="PreEvaluationBlockHeader.ProtocolVersion"/> 2, it is not usable with blocks of
        /// the earlier <see cref="PreEvaluationBlockHeader.ProtocolVersion"/>s than 2.
        /// To create a <see cref="Block{T}"/> instance with <see cref="Block{T}.ProtocolVersion"/>
        /// less than 2, use <see cref="Block{T}"/>'s constructors with <see langword="null"/>
        /// signatures.</remarks>
        public Block<T> Sign(PrivateKey privateKey, HashDigest<SHA256> stateRootHash)
        {
            ImmutableArray<byte> sig = Header.MakeSignature(privateKey, stateRootHash);
            return new Block<T>(
                this, (stateRootHash, sig, Header.DeriveBlockHash(stateRootHash, sig)));
        }
    }
}
