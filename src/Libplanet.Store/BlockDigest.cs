using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;

namespace Libplanet.Store;

/// <summary>
/// Class that store uses to save blocks. This contains:
/// <see cref="BlockHeader"/>, and list of <see cref="TxId"/>s.
/// </summary>
public readonly struct BlockDigest : IBlockMetadata, IBlockExcerpt
{
    private static readonly Codec _codec = new();
    private static readonly Binary HeaderKey = new("H"u8.ToArray());         // 'H'
    private static readonly Binary TransactionIdsKey = new("T"u8.ToArray()); // 'T'
    private static readonly Binary EvidenceIdsKey = new("V"u8.ToArray());    // 'V'

    private readonly BlockMetadata _metadata;
    private readonly HashDigest<SHA256> _preEvaluationHash;

    /// <summary>
    /// Creates <see cref="BlockDigest"/> instance from <see cref="BlockHeader"/> and
    /// <see cref="Transaction"/> ids the <see cref="Block"/> has.
    /// </summary>
    /// <param name="header"><see cref="BlockHeader"/> of the <see cref="Block"/>.</param>
    /// <param name="txIds"><see cref="Transaction"/> ids the <see cref="Block"/> has.
    /// </param>
    /// <param name="evidenceIds"><see cref="EvidenceBase"/> ids the <see cref="Block"/> has.
    /// </param>
    public BlockDigest(
        BlockHeader header,
        ImmutableArray<ImmutableArray<byte>> txIds,
        ImmutableArray<ImmutableArray<byte>> evidenceIds)
    {
        _metadata = header.Header.Metadata;
        _preEvaluationHash = header.PreEvaluationHash;
        StateRootHash = header.StateRootHash;
        Signature = header.Signature;
        Hash = header.Hash;
        TxIds = txIds;
        EvidenceIds = evidenceIds;
    }

    /// <summary>
    /// Creates <see cref="BlockDigest"/> instance from
    /// <see cref="Dictionary"/> representation of the <see cref="Block"/>.
    /// </summary>
    /// <param name="dict">
    /// <see cref="Dictionary"/> representation of the <see cref="Block"/>.
    /// </param>
    public BlockDigest(Dictionary dict)
    {
        if (dict[HeaderKey] is not Dictionary headerDict)
        {
            throw new ArgumentException(
                $"Expected {typeof(Dictionary)} but {dict[HeaderKey].GetType()}");
        }

        _metadata = BlockMarshaler.UnmarshalBlockMetadata(headerDict);
        _preEvaluationHash = BlockMarshaler.UnmarshalPreEvaluationHash(headerDict);
        StateRootHash = BlockMarshaler.UnmarshalBlockHeaderStateRootHash(headerDict);
        Signature = BlockMarshaler.UnmarshalBlockHeaderSignature(headerDict);
        Hash = BlockMarshaler.UnmarshalBlockHeaderHash(headerDict);
        TxIds = dict.ContainsKey(TransactionIdsKey)
            ? [.. ((List)dict[TransactionIdsKey]).Select(txId => ((Binary)txId).ByteArray)]
            : [];
        EvidenceIds = dict.ContainsKey(EvidenceIdsKey)
            ? [.. ((List)dict[EvidenceIdsKey]).Select(evId => ((Binary)evId).ByteArray)]
            : [];
    }

    /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
    public int ProtocolVersion => _metadata.ProtocolVersion;

    /// <inheritdoc cref="IBlockMetadata.Index"/>
    public long Index => _metadata.Index;

    /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
    public DateTimeOffset Timestamp => _metadata.Timestamp;

    /// <inheritdoc cref="IBlockMetadata.Miner"/>
    public Address Miner => _metadata.Miner;

    /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
    public PublicKey? PublicKey => _metadata.PublicKey;

    /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
    public BlockHash PreviousHash => _metadata.PreviousHash;

    /// <inheritdoc cref="IBlockMetadata.TxHash"/>
    public HashDigest<SHA256>? TxHash => _metadata.TxHash;

    /// <inheritdoc cref="IBlockMetadata.LastCommit"/>
    public BlockCommit? LastCommit => _metadata.LastCommit;

    /// <inheritdoc cref="IBlockMetadata.EvidenceHash"/>
    public HashDigest<SHA256>? EvidenceHash => _metadata.EvidenceHash;

    /// <summary>
    /// The block hash.
    /// </summary>
    public BlockHash Hash { get; }

    /// <summary>
    /// The state root hash.
    /// </summary>
    public HashDigest<SHA256> StateRootHash { get; }

    /// <summary>
    /// The block signature.
    /// </summary>
    public ImmutableArray<byte>? Signature { get; }

    /// <summary>
    /// The <see cref="Transaction.Id"/>s of <see cref="Transaction"/>s in
    /// a <see cref="Block"/>.  This is <em>not</em> necessarily ordered by
    /// <see cref="Transaction.Id"/>.
    /// </summary>
    public ImmutableArray<ImmutableArray<byte>> TxIds { get; }

    /// <summary>
    /// The <see cref="Evidence.Id"/>s of <see cref="EvidenceBase"/>s in
    /// a <see cref="Block"/>.  This is <em>not</em> necessarily ordered by
    /// <see cref="Evidence.Id"/>.
    /// </summary>
    public ImmutableArray<ImmutableArray<byte>> EvidenceIds { get; }

    /// <summary>
    /// Gets <see cref="BlockDigest"/> representation of the <see cref="Block"/>.
    /// </summary>
    /// <param name="block">The block instance to get its digest.</param>
    /// <returns><see cref="BlockDigest"/> representation of the <see cref="Block"/>.
    /// </returns>
    public static BlockDigest FromBlock(Block block)
    {
        return new BlockDigest(
            header: block.Header,
            txIds: [.. block.Transactions.Select(tx => tx.Id.ByteArray)],
            evidenceIds: [.. block.Evidence.Select(ev => ev.Id.ByteArray)]
        );
    }

    /// <summary>
    /// Gets <see cref="BlockDigest"/> instance from serialized <paramref name="bytes"/>.
    /// </summary>
    /// <param name="bytes">Serialized <see cref="BlockDigest"/>.</param>
    /// <returns>Deserialized <see cref="BlockDigest"/>.</returns>
    /// <exception cref="ArgumentNullException">Thrown when the passed <paramref name="bytes"/>
    /// is <see langword="null"/>.</exception>
    /// <exception cref="DecodingException">Thrown when decoded value is not
    /// <see cref="Dictionary"/> type.</exception>
    public static BlockDigest Deserialize(byte[] bytes)
    {
        if (bytes is not byte[] bytesArray)
        {
            throw new ArgumentNullException(nameof(bytes));
        }

        IValue value = _codec.Decode(bytesArray);
        if (value is not Dictionary dict)
        {
            throw new DecodingException(
                $"Expected {typeof(Dictionary)} but {value.GetType()}");
        }

        return new BlockDigest(dict);
    }

    /// <summary>
    /// Gets serialized byte array of the <see cref="BlockDigest"/>.
    /// </summary>
    /// <returns>Serialized byte array of <see cref="BlockDigest"/>.</returns>
    public byte[] Serialize() => _codec.Encode(ToBencodex());

    /// <summary>
    /// Gets the block header.
    /// </summary>
    /// <returns>The block header.</returns>
    public BlockHeader GetHeader()
    {
        var preEvalHeader = new PreEvaluationBlockHeader(_metadata, _preEvaluationHash);
        return new BlockHeader(preEvalHeader, StateRootHash, Signature, Hash);
    }

    /// <summary>
    /// Gets <see cref="Dictionary"/> representation of
    /// <see cref="BlockDigest"/>.
    /// </summary>
    /// <returns><see cref="Dictionary"/> representation of
    /// <see cref="BlockDigest"/>.</returns>
    public Dictionary ToBencodex()
    {
        var preEvalHeaderDict = BlockMarshaler.MarshalPreEvaluationBlockHeader(
            BlockMarshaler.MarshalBlockMetadata(_metadata),
            _preEvaluationHash);
        var headerDict = BlockMarshaler.MarshalBlockHeader(
            preEvalHeaderDict,
            StateRootHash,
            Signature,
            Hash
        );
        var dict = Dictionary.Empty.Add(HeaderKey, headerDict);

        if (TxIds.Any())
        {
            dict = dict.Add(
                TransactionIdsKey,
                new List(TxIds.Select(txId => txId.ToArray())));
        }

        if (EvidenceIds.Any())
        {
            dict = dict.Add(
                EvidenceIdsKey,
                new List(EvidenceIds.Select(evId => evId.ToArray())));
        }

        return dict;
    }
}
