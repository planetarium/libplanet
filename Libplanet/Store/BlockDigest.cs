#nullable enable
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    /// <summary>
    /// Class that store uses to save blocks. This contains:
    /// <see cref="BlockHeader"/>, and list of <see cref="Libplanet.Tx.TxId"/>s.
    /// </summary>
    public readonly struct BlockDigest : IBlockMetadata, IBlockExcerpt
    {
        private static readonly byte[] HeaderKey = { 0x48 }; // 'H'

        private static readonly byte[] TransactionIdsKey = { 0x54 }; // 'T'

        // FIXME: Rather than having a BlockHeader with a thunk HashAlgorithmType, let it have
        //        separated fields like BlockMetadata, Nonce, PreEvaluationHash, StateRootHash...
        private readonly BlockMetadata _metadata;
        private readonly Nonce _nonce;
        private readonly ImmutableArray<byte>? _preEvaluationHash;

        /// <summary>
        /// Creates <see cref="BlockDigest"/> instance from <see cref="BlockHeader"/> and
        /// <see cref="Transaction{T}"/> ids the <see cref="Block{T}"/> has.
        /// </summary>
        /// <param name="header"><see cref="BlockHeader"/> of the <see cref="Block{T}"/>.</param>
        /// <param name="txIds"><see cref="Transaction{T}"/> ids the <see cref="Block{T}"/> has.
        /// </param>
        public BlockDigest(BlockHeader header, ImmutableArray<ImmutableArray<byte>> txIds)
        {
            _metadata = header.Copy();
            _nonce = header.Nonce;
            _preEvaluationHash = header.PreEvaluationHash;
            StateRootHash = header.StateRootHash;
            Hash = header.Hash;
            TxIds = txIds;
        }

        /// <summary>
        /// Creates <see cref="BlockDigest"/> instance from
        /// <see cref="Bencodex.Types.Dictionary"/> representation of the <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="dict">
        /// <see cref="Bencodex.Types.Dictionary"/> representation of the <see cref="Block{T}"/>.
        /// </param>
        public BlockDigest(Bencodex.Types.Dictionary dict)
        {
            var headerDict = dict.GetValue<Bencodex.Types.Dictionary>(HeaderKey);
            var tuple = BlockMarshaler.UnmarshalPreEvaluationBlockHeader(headerDict);
            _metadata = tuple.Metadata;
            _nonce = tuple.Nonce;
            _preEvaluationHash = tuple.PreEvaluationHash;
            StateRootHash = BlockMarshaler.UnmarshalBlockHeaderStateRootHash(headerDict);
            Hash = BlockMarshaler.UnmarshalBlockHeaderHash(headerDict);
            TxIds = dict.ContainsKey((IKey)(Binary)TransactionIdsKey)
                ? dict.GetValue<Bencodex.Types.List>(TransactionIdsKey)
                    .Select(txId => ((Binary)txId).ToImmutableArray()).ToImmutableArray()
                : ImmutableArray<ImmutableArray<byte>>.Empty;
        }

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion => _metadata.ProtocolVersion;

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index => _metadata.Index;

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public System.DateTimeOffset Timestamp => _metadata.Timestamp;

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner => _metadata.Miner;

        /// <inheritdoc cref="IBlockMetadata.Difficulty"/>
        public long Difficulty => _metadata.Difficulty;

        /// <inheritdoc cref="IBlockMetadata.TotalDifficulty"/>
        public BigInteger TotalDifficulty => _metadata.TotalDifficulty;

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash => _metadata.PreviousHash;

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash => _metadata.TxHash;

        /// <summary>
        /// The block hash.
        /// </summary>
        public BlockHash Hash { get; }

        /// <summary>
        /// The state root hash.
        /// </summary>
        public HashDigest<SHA256> StateRootHash { get; }

        public ImmutableArray<ImmutableArray<byte>> TxIds { get; }

        /// <summary>
        /// Gets <see cref="BlockDigest"/> representation of the <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="block">The block instance to get its digest.</param>
        /// <typeparam name="T">An action type.</typeparam>
        /// <returns><see cref="BlockDigest"/> representation of the <see cref="Block{T}"/>.
        /// </returns>
        public static BlockDigest FromBlock<T>(Block<T> block)
            where T : IAction, new()
        {
            return new BlockDigest(
                header: block.Header,
                txIds: block.Transactions
                    .Select(tx => tx.Id.ByteArray)
                    .ToImmutableArray()
            );
        }

        /// <summary>
        /// Gets <see cref="BlockDigest"/> instance from serialized <paramref name="bytes"/>.
        /// </summary>
        /// <param name="bytes">Serialized <see cref="BlockDigest"/>.</param>
        /// <returns>Deserialized <see cref="BlockDigest"/>.</returns>
        /// <exception cref="DecodingException">Thrown when decoded value is not
        /// <see cref="Bencodex.Types.Dictionary"/> type.</exception>
        public static BlockDigest Deserialize(byte[] bytes)
        {
            IValue value = new Codec().Decode(bytes);
            if (!(value is Bencodex.Types.Dictionary dict))
            {
                throw new DecodingException(
                    $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                    $"{value.GetType()}");
            }

            return new BlockDigest(dict);
        }

        /// <summary>
        /// Gets serialized byte array of the <see cref="BlockDigest"/>.
        /// </summary>
        /// <returns>Serialized byte array of <see cref="BlockDigest"/>.</returns>
        public byte[] Serialize()
        {
            return new Codec().Encode(ToBencodex());
        }

        /// <summary>
        /// Gets the block header.
        /// </summary>
        /// <param name="hashAlgorithmGetter">The function to determine hash algorithm used for
        /// proof-of-work mining.</param>
        /// <returns>The block header.</returns>
        public BlockHeader GetHeader(HashAlgorithmGetter hashAlgorithmGetter)
        {
            HashAlgorithmType hashAlgorithm = hashAlgorithmGetter(Index);
            var preEvalHeader = _preEvaluationHash is { } preEvalHash
                ? new PreEvaluationBlockHeader(
                    _metadata,
                    hashAlgorithm,
                    _nonce,
                    preEvalHash
                )
                : new PreEvaluationBlockHeader(
                    _metadata,
                    hashAlgorithm,
                    _nonce
                );
            return new BlockHeader(preEvalHeader, StateRootHash, Hash);
        }

        /// <summary>
        /// Gets <see cref="Bencodex.Types.Dictionary"/> representation of
        /// <see cref="BlockDigest"/>.
        /// </summary>
        /// <returns><see cref="Bencodex.Types.Dictionary"/> representation of
        /// <see cref="BlockDigest"/>.</returns>
        public Bencodex.Types.Dictionary ToBencodex()
        {
            var preEvalHeaderDict = BlockMarshaler.MarshalPreEvaluationBlockHeader(
                BlockMarshaler.MarshalBlockMetadata(_metadata),
                _nonce,
                _preEvaluationHash ?? ImmutableArray<byte>.Empty
            );
            Dictionary headerDict =
                BlockMarshaler.MarshalBlockHeader(preEvalHeaderDict, StateRootHash, Hash);
            var dict = Bencodex.Types.Dictionary.Empty.Add(HeaderKey, headerDict);

            if (TxIds.Any())
            {
                dict = dict.Add(
                    TransactionIdsKey,
                    TxIds.Select(txId => (IValue)(Binary)txId.ToArray()));
            }

            return dict;
        }
    }
}
