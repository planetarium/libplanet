using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Node
{
    /// <summary>
    /// Untyped equivalent of <see cref="Block{T}"/>.  It's guaranteed that all proofs are valid.
    /// </summary>
    public sealed class UntypedBlock : IBlockHeader
    {
        private static readonly Codec Codec = new Codec();
        private BlockHeader _header;

        /// <summary>
        /// Creates an <see cref="UntypedBlock"/> instance.
        /// </summary>
        /// <param name="header">A block header without transactions.</param>
        /// <param name="untypedTransactions">A list of transactions.  Ordering does not matter.
        /// </param>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given
        /// <paramref name="header"/>'s <see cref="IBlockMetadata.TxHash"/> is invalid.</exception>
        public UntypedBlock(
            IBlockHeader header,
            IEnumerable<UntypedTransaction> untypedTransactions)
        {
            _header = header is BlockHeader h
                ? h
                : new BlockHeader(
                    new PreEvaluationBlockHeader(header),
                    (header.StateRootHash, header.Signature, header.Hash));
            UntypedTransactions = untypedTransactions.OrderBy(tx => tx.Id).ToImmutableList();
            UntypedTransactions.ValidateTxNonces(_header.Index);
            var expectedTxHash = DeriveTxHash(UntypedTransactions);
            if (!Nullable.Equals(expectedTxHash, _header.TxHash))
            {
                throw new InvalidBlockTxHashException(
                    $"{nameof(TxHash)} is invalid.",
                    _header.TxHash,
                    expectedTxHash
                );
            }
        }

        /// <summary>
        /// Decodes a Bencodex <paramref name="dictionary"/> into an <see cref="UntypedBlock"/>
        /// instance.
        /// </summary>
        /// <param name="dictionary">A Bencodex dictionary made using <see cref="ToBencodex()"/>
        /// method or <see cref="BlockMarshaler.MarshalBlock{T}(Block{T})"/> method.</param>
        /// <seealso cref="ToBencodex()"/>
        /// <seealso cref="BlockMarshaler.MarshalBlock{T}(Block{T})"/>
        public UntypedBlock(Bencodex.Types.Dictionary dictionary)
            : this(
                BlockMarshaler.UnmarshalBlockHeader(
                    dictionary.GetValue<Dictionary>(BlockMarshaler.HeaderKey)),
                dictionary.GetValue<List>(BlockMarshaler.TransactionsKey)
                    .Select(b => new UntypedTransaction((Dictionary)Codec.Decode((Binary)b)))
            )
        {
        }

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion => _header.ProtocolVersion;

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index => _header.Index;

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _header.Timestamp;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.Nonce"/>
        public Nonce Nonce => _header.Nonce;

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner => _header.Miner;

        /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
        public PublicKey? PublicKey => _header.PublicKey;

        /// <inheritdoc cref="IBlockMetadata.Difficulty"/>
        public long Difficulty => _header.Difficulty;

        /// <inheritdoc cref="IBlockMetadata.TotalDifficulty"/>
        public BigInteger TotalDifficulty => _header.TotalDifficulty;

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash => _header.PreviousHash;

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash => _header.TxHash;

        /// <inheritdoc cref="IBlockHeader.Signature"/>
        public ImmutableArray<byte>? Signature => _header.Signature;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        public ImmutableArray<byte> PreEvaluationHash => _header.PreEvaluationHash;

        /// <inheritdoc cref="IBlockHeader.StateRootHash"/>
        public HashDigest<SHA256> StateRootHash => _header.StateRootHash;

        /// <inheritdoc cref="IBlockExcerpt.Hash"/>
        public BlockHash Hash => _header.Hash;

        /// <summary>
        /// The list of untyped transactions belonging to the block.
        /// </summary>
        /// <remarks>This is always ordered by <see cref="UntypedTransaction.Id"/>.</remarks>
        public IReadOnlyList<UntypedTransaction> UntypedTransactions { get; }

        /// <summary>
        /// Encodes this block into a Bencodex dictionary.
        /// </summary>
        /// <returns>A Bencodex dictionary which encodes this block.  This is equivalent to
        /// <see cref="BlockMarshaler.MarshalBlock{T}(Block{T})"/> method's return value.
        /// This can be decoded back to <see cref="UntypedBlock"/> using
        /// <see cref="UntypedBlock(Dictionary)"/> constructor or
        /// <see cref="BlockMarshaler.UnmarshalBlock{T}"/>
        /// method.</returns>
        /// <seealso cref="UntypedBlock(Dictionary)"/>
        /// <seealso cref="BlockMarshaler.UnmarshalBlock{T}"/>
        public Bencodex.Types.Dictionary ToBencodex()
        {
            Bencodex.Types.Dictionary headerDict = _header.MarshalBlockHeader();
            var txs = new List(
                UntypedTransactions
                    .Select(tx => new Binary(Codec.Encode(tx.ToBencodex())))
                    .Cast<IValue>());
            return BlockMarshaler.MarshalBlock(headerDict, txs);
        }

        /// <summary>
        /// Derives <see cref="TxHash"/> from the given <paramref name="transactions"/>.
        /// </summary>
        /// <param name="transactions">The transactions to derive <see cref="TxHash"/> from.
        /// This must be ordered by <see cref="TxId"/>.</param>
        /// <returns>The derived <see cref="TxHash"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when the <paramref name="transactions"/> are
        /// not ordered by their <see cref="TxId"/>s.</exception>
        // FIXME: It does the same thing with BlockContent<T>.DeriveTxHash() method.
        private static HashDigest<SHA256>? DeriveTxHash(
            IReadOnlyList<UntypedTransaction> transactions)
        {
            if (!transactions.Any())
            {
                return null;
            }

            var list = new Bencodex.Types.List(
                transactions.Select(tx => tx.ToBencodex()));
            byte[] payload = Codec.Encode(list);
            return HashDigest<SHA256>.DeriveFrom(payload);
        }
    }
}
