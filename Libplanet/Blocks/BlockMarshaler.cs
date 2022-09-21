using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    /// <summary>
    /// Marshaling and unmarshaling block data.
    /// </summary>
    public static class BlockMarshaler
    {
        // Block fields:
        internal static readonly byte[] HeaderKey = { 0x48 }; // 'H'
        internal static readonly byte[] TransactionsKey = { 0x54 }; // 'T'

        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        // Header fields:
        private static readonly byte[] ProtocolVersionKey = { 0x00 };
        private static readonly byte[] IndexKey = { 0x69 }; // 'i'
        private static readonly byte[] TimestampKey = { 0x74 }; // 't'
        private static readonly byte[] DifficultyKey = { 0x64 }; // 'd'; Legacy, unused.
        private static readonly byte[] TotalDifficultyKey = { 0x54 }; // 'T'; Legacy, unused.
        private static readonly byte[] NonceKey = { 0x6e }; // 'n'; Legacy, unused.
        private static readonly byte[] MinerKey = { 0x6d }; // 'm'
        private static readonly byte[] PublicKeyKey = { 0x50 }; // 'P'
        private static readonly byte[] PreviousHashKey = { 0x70 }; // 'p'
        private static readonly byte[] TxHashKey = { 0x78 }; // 'x'
        private static readonly byte[] HashKey = { 0x68 }; // 'h'
        private static readonly byte[] StateRootHashKey = { 0x73 }; // 's'
        private static readonly byte[] SignatureKey = { 0x53 }; // 'S'
        private static readonly byte[] PreEvaluationHashKey = { 0x63 }; // 'c'
        private static readonly byte[] PreviousMinerKey = { 0x4D }; // 'M'
        private static readonly byte[] LastCommitKey = { 0x43 }; // 'C'

        public static Dictionary MarshalBlockMetadata(IBlockMetadata metadata)
        {
            string timestamp =
                metadata.Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture);
            Dictionary dict = Dictionary.Empty
                .Add(IndexKey, metadata.Index)
                .Add(TimestampKey, timestamp);

            if (metadata.ProtocolVersion != 0)
            {
                dict = dict.Add(ProtocolVersionKey, metadata.ProtocolVersion);
            }

            if (metadata.PreviousHash is { } prev)
            {
                dict = dict.Add(PreviousHashKey, prev.ByteArray);
            }

            if (metadata.TxHash is { } th)
            {
                dict = dict.Add(TxHashKey, th.ByteArray);
            }

            dict = metadata.PublicKey is { } pubKey
                ? dict.Add(PublicKeyKey, pubKey.Format(compress: true))
                : dict.Add(MinerKey, metadata.Miner.ByteArray);

            if (metadata.PreviousMiner is { } miner)
            {
                dict = dict.Add(PreviousMinerKey, miner.ByteArray);
            }

            if (metadata.LastCommit is { } commit)
            {
                dict = dict.Add(LastCommitKey, commit.ByteArray);
            }

            return dict;
        }

        public static Dictionary MarshalPreEvaluationBlockHeader(
            Dictionary marshaledMetadata,
            HashDigest<SHA256> preEvaluationHash
        )
        {
            Dictionary dict = marshaledMetadata;
            ImmutableArray<byte> preEvaluationHashBytes = preEvaluationHash.ByteArray;

            if (!preEvaluationHashBytes.IsDefaultOrEmpty)
            {
                dict = dict.Add(PreEvaluationHashKey, preEvaluationHashBytes);
            }

            return dict;
        }

        public static Dictionary MarshalPreEvaluationBlockHeader(IPreEvaluationBlockHeader header)
        {
            return MarshalPreEvaluationBlockHeader(
                MarshalBlockMetadata(header),
                header.PreEvaluationHash
            );
        }

        public static Dictionary MarshalBlockHeader(
            Dictionary marshaledPreEvaluatedBlockHeader,
            HashDigest<SHA256> stateRootHash,
            ImmutableArray<byte>? signature,
            BlockHash hash
        )
        {
            Dictionary dict = marshaledPreEvaluatedBlockHeader
                .Add(StateRootHashKey, stateRootHash.ByteArray)
                .Add(HashKey, hash.ByteArray);
            if (signature is { } sig)
            {
                dict = dict.Add(SignatureKey, sig);
            }

            return dict;
        }

        public static Dictionary MarshalBlockHeader(this IBlockHeader header) =>
            MarshalBlockHeader(
                MarshalPreEvaluationBlockHeader(header),
                header.StateRootHash,
                header.Signature,
                header.Hash
            );

        public static List MarshalTransactions<T>(this IReadOnlyList<Transaction<T>> txs)
            where T : IAction, new()
        =>
            new List(txs.Select(tx => new Binary(tx.Serialize(true))).Cast<IValue>());

        public static Dictionary MarshalBlock(
            Dictionary marshaledBlockHeader,
            List marshaledTransactions
        )
        {
            Dictionary dict = Dictionary.Empty
                .Add(HeaderKey, marshaledBlockHeader);
            if (marshaledTransactions.Any())
            {
                dict = dict.Add(TransactionsKey, (IValue)marshaledTransactions);
            }

            return dict;
        }

        public static Dictionary MarshalBlock<T>(this Block<T> block)
            where T : IAction, new()
        =>
            MarshalBlock(
                MarshalBlockHeader(block.Header),
                MarshalTransactions(block.Transactions)
            );

        public static Dictionary AppendTxToMarshaledBlock<T>(
            Dictionary marshaledBlock,
            Transaction<T> tx
        )
            where T : IAction, new()
        {
            List marshaledTxs;
            try
            {
                marshaledTxs = (List)marshaledBlock[TransactionsKey];
            }
            catch (KeyNotFoundException)
            {
                marshaledTxs = List.Empty;
            }

            marshaledTxs = marshaledTxs.Add(tx.ToBencodex(true));
            return marshaledBlock.SetItem(TransactionsKey, (IValue)marshaledTxs);
        }

        public static long UnmarshalBlockMetadataIndex(Dictionary marshaledMetadata) =>
            marshaledMetadata.GetValue<Integer>(IndexKey);

        public static BlockMetadata UnmarshalBlockMetadata(Dictionary marshaled)
        {
            var metadata = new BlockMetadata
            {
                ProtocolVersion = marshaled.ContainsKey(ProtocolVersionKey)
                    ? (int)marshaled.GetValue<Integer>(ProtocolVersionKey)
                    : 0,
                Index = UnmarshalBlockMetadataIndex(marshaled),
                Timestamp = DateTimeOffset.ParseExact(
                    marshaled.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture
                ),
                PreviousHash = marshaled.ContainsKey(PreviousHashKey)
                    ? new BlockHash(marshaled.GetValue<Binary>(PreviousHashKey).ByteArray)
                    : (BlockHash?)null,
                TxHash = marshaled.ContainsKey(TxHashKey)
                    ? new HashDigest<SHA256>(
                        marshaled.GetValue<Binary>(TxHashKey).ByteArray)
                    : (HashDigest<SHA256>?)null,
                PreviousMiner = marshaled.ContainsKey(PreviousMinerKey)
                ? new Address(marshaled.GetValue<Binary>(PreviousMinerKey).ByteArray)
                : (Address?)null,
                LastCommit = marshaled.ContainsKey(LastCommitKey)
                ? new BlockCommit(marshaled.GetValue<Binary>(LastCommitKey).ByteArray.ToArray())
                : (BlockCommit?)null,
            };

            if (marshaled.ContainsKey(PublicKeyKey))
            {
                metadata.PublicKey =
                    new PublicKey(marshaled.GetValue<Binary>(PublicKeyKey).ByteArray);
            }
            else
            {
                metadata.Miner = new Address(marshaled.GetValue<Binary>(MinerKey).ByteArray);
            }

            return metadata;
        }

        public static HashDigest<SHA256> UnmarshalPreEvaluationHash(Dictionary marshaled) =>
            new HashDigest<SHA256>(marshaled.GetValue<Binary>(PreEvaluationHashKey).ByteArray);

        public static PreEvaluationBlockHeader UnmarshalPreEvaluationBlockHeader(
            Dictionary marshaled)
        {
            return new PreEvaluationBlockHeader(
                    metadata: UnmarshalBlockMetadata(marshaled),
                    preEvaluationHash: UnmarshalPreEvaluationHash(marshaled));
        }

        public static BlockHash UnmarshalBlockHeaderHash(Dictionary marshaledBlockHeader) =>
            new BlockHash(marshaledBlockHeader.GetValue<Binary>(HashKey).ByteArray);

        public static HashDigest<SHA256> UnmarshalBlockHeaderStateRootHash(
            Dictionary marshaledBlockHeader
        ) =>
            new HashDigest<SHA256>(
                marshaledBlockHeader.GetValue<Binary>(StateRootHashKey).ByteArray
            );

        public static ImmutableArray<byte>? UnmarshalBlockHeaderSignature(
            Dictionary marshaledBlockHeader
        ) =>
            marshaledBlockHeader.ContainsKey(SignatureKey)
                ? marshaledBlockHeader.GetValue<Binary>(SignatureKey).ByteArray
                : (ImmutableArray<byte>?)null;

        public static BlockHeader UnmarshalBlockHeader(Dictionary marshaled)
        {
            PreEvaluationBlockHeader preEvalHeader = UnmarshalPreEvaluationBlockHeader(marshaled);
            HashDigest<SHA256> stateRootHash = UnmarshalBlockHeaderStateRootHash(marshaled);
            ImmutableArray<byte>? sig = UnmarshalBlockHeaderSignature(marshaled);
            BlockHash hash = UnmarshalBlockHeaderHash(marshaled);
            return new BlockHeader(preEvalHeader, stateRootHash, sig, hash);
        }

        public static IReadOnlyList<Transaction<T>> UnmarshalTransactions<T>(List marshaled)
            where T : IAction, new()
        =>
            marshaled
                .Select(tx => Transaction<T>.Deserialize(((Binary)tx).ToByteArray(), true))
                .ToImmutableArray();

        public static IReadOnlyList<Transaction<T>> UnmarshalBlockTransactions<T>(
            Dictionary marshaledBlock
        )
            where T : IAction, new()
        =>
            marshaledBlock.ContainsKey(TransactionsKey)
                ? UnmarshalTransactions<T>(marshaledBlock.GetValue<List>(TransactionsKey))
                : ImmutableArray<Transaction<T>>.Empty;

        public static Block<T> UnmarshalBlock<T>(
            Dictionary marshaled
        )
            where T : IAction, new()
        {
            BlockHeader header = UnmarshalBlockHeader(marshaled.GetValue<Dictionary>(HeaderKey));
            IReadOnlyList<Transaction<T>> txs = UnmarshalBlockTransactions<T>(marshaled);
            return new Block<T>(header, txs);
        }
    }
}
