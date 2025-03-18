using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// Marshaling and unmarshalling block data.
    /// </summary>
    public static class BlockMarshaler
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        // Block fields:
        private static readonly Binary HeaderKey = new Binary(new byte[] { 0x48 }); // 'H'
        private static readonly Binary TransactionsKey = new Binary(new byte[] { 0x54 }); // 'T'
        private static readonly Binary EvidenceKey = new Binary(new byte[] { 0x56 }); // 'V'

        // Header fields:
        private static readonly Binary ProtocolVersionKey = new Binary(0x00);
        private static readonly Binary IndexKey = new Binary(0x69); // 'i'
        private static readonly Binary TimestampKey = new Binary(0x74); // 't'
        private static readonly Binary DifficultyKey = new Binary(0x64); // 'd'; legacy, unused
        private static readonly Binary TotalDifficultyKey = new Binary(0x54); // 'T'; legacy, unused
        private static readonly Binary NonceKey = new Binary(0x6e); // 'n'; legacy, unused
        private static readonly Binary MinerKey = new Binary(0x6d); // 'm'
        private static readonly Binary PublicKeyKey = new Binary(0x50); // 'P'
        private static readonly Binary PreviousHashKey = new Binary(0x70); // 'p'
        private static readonly Binary TxHashKey = new Binary(0x78); // 'x'
        private static readonly Binary HashKey = new Binary(0x68); // 'h'
        private static readonly Binary StateRootHashKey = new Binary(0x73); // 's'
        private static readonly Binary SignatureKey = new Binary(0x53); // 'S'
        private static readonly Binary PreEvaluationHashKey = new Binary(0x63); // 'c'
        private static readonly Binary LastCommitKey = new Binary(0x43); // 'C'

        private static readonly Binary EvidenceHashKey =
            new Binary(new byte[] { 0x76 }); // 'v'

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
                dict = dict.Add(TxHashKey, th.Bencoded);
            }

            dict = metadata.PublicKey is { } pubKey
                ? dict.Add(PublicKeyKey, pubKey.Format(compress: true))
                : dict.Add(MinerKey, metadata.Miner.Bencoded);

            if (metadata.LastCommit is { } commit)
            {
                dict = dict.Add(LastCommitKey, commit.Bencoded);
            }

            if (metadata.EvidenceHash is { } evidenceHash)
            {
                dict = dict.Add(EvidenceHashKey, evidenceHash.ByteArray);
            }

            return dict;
        }

        public static Dictionary MarshalPreEvaluationBlockHeader(
            Dictionary marshaledMetadata,
            HashDigest<SHA256> preEvaluationHash
        )
        {
            Dictionary dict = marshaledMetadata;
            dict = dict.Add(PreEvaluationHashKey, preEvaluationHash.Bencoded);
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
                .Add(StateRootHashKey, stateRootHash.Bencoded)
                .Add(HashKey, hash.Bencoded);
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

        public static List MarshalTransactions(this IReadOnlyList<Transaction> txs) =>
            new List(txs.Select(tx => MarshalTransaction(tx)).Cast<IValue>());

        public static Binary MarshalTransaction(this Transaction tx) => new Binary(tx.Serialize());

        public static List MarshalEvidence(this IReadOnlyList<EvidenceBase> evidence) =>
            new List(evidence.Select(ev => MarshalEvidence(ev)).Cast<IValue>());

        public static Binary MarshalEvidence(this EvidenceBase evidence)
            => new Binary(evidence.Serialize());

        public static Dictionary MarshalBlock(
            Dictionary marshaledBlockHeader,
            List marshaledTransactions,
            List marshaledEvidence
        )
        {
            Dictionary dict = Dictionary.Empty
                .Add(HeaderKey, marshaledBlockHeader);
            if (marshaledTransactions.Any())
            {
                dict = dict.Add(TransactionsKey, marshaledTransactions);
            }

            if (marshaledEvidence.Any())
            {
                dict = dict.Add(EvidenceKey, marshaledEvidence);
            }

            return dict;
        }

        public static Dictionary MarshalBlock(this Block block) =>
            MarshalBlock(
                MarshalBlockHeader(block.Header),
                MarshalTransactions(block.Transactions),
                MarshalEvidence(block.Evidence));

        public static long UnmarshalBlockMetadataIndex(Dictionary marshaledMetadata) =>
            (Integer)marshaledMetadata[IndexKey];

        public static BlockMetadata UnmarshalBlockMetadata(Dictionary marshaled)
        {
            Address miner;
            PublicKey? publicKey = null;
            if (marshaled.ContainsKey(PublicKeyKey))
            {
                publicKey = new PublicKey(((Binary)marshaled[PublicKeyKey]).ByteArray.ToArray());
                miner = publicKey.Address;
            }
            else
            {
                miner = new Address(marshaled[MinerKey]);
            }

#pragma warning disable SA1118 // The parameter spans multiple lines
            return new BlockMetadata(
                protocolVersion: marshaled.ContainsKey(ProtocolVersionKey)
                    ? (int)(Integer)marshaled[ProtocolVersionKey]
                    : 0,
                index: UnmarshalBlockMetadataIndex(marshaled),
                timestamp: DateTimeOffset.ParseExact(
                    (Text)marshaled[TimestampKey],
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                miner: miner,
                publicKey: publicKey,
                previousHash: marshaled.TryGetValue(PreviousHashKey, out IValue phv)
                    ? new BlockHash(phv)
                    : (BlockHash?)null,
                txHash: marshaled.TryGetValue(TxHashKey, out IValue thv)
                    ? new HashDigest<SHA256>(thv)
                    : (HashDigest<SHA256>?)null,
                lastCommit: marshaled.ContainsKey(LastCommitKey)
                    ? new BlockCommit(marshaled[LastCommitKey])
                    : (BlockCommit?)null,
                evidenceHash: marshaled.TryGetValue(EvidenceHashKey, out IValue ehv)
                    ? new HashDigest<SHA256>(ehv)
                    : (HashDigest<SHA256>?)null);
#pragma warning restore SA1118
        }

        public static HashDigest<SHA256> UnmarshalPreEvaluationHash(Dictionary marshaled) =>
            new HashDigest<SHA256>(marshaled[PreEvaluationHashKey]);

        public static PreEvaluationBlockHeader UnmarshalPreEvaluationBlockHeader(
            Dictionary marshaled)
        {
            return new PreEvaluationBlockHeader(
                    metadata: UnmarshalBlockMetadata(marshaled),
                    preEvaluationHash: UnmarshalPreEvaluationHash(marshaled));
        }

        public static BlockHash UnmarshalBlockHash(Dictionary marshaledBlock)
        {
            Dictionary blockHeader = (Dictionary)marshaledBlock[HeaderKey];
            return UnmarshalBlockHeaderHash(blockHeader);
        }

        public static BlockHash UnmarshalBlockHeaderHash(Dictionary marshaledBlockHeader) =>
            new BlockHash(marshaledBlockHeader[HashKey]);

        public static HashDigest<SHA256> UnmarshalBlockHeaderStateRootHash(
            Dictionary marshaledBlockHeader
        ) =>
            new HashDigest<SHA256>(marshaledBlockHeader[StateRootHashKey]);

        public static ImmutableArray<byte>? UnmarshalBlockHeaderSignature(
            Dictionary marshaledBlockHeader
        ) =>
            marshaledBlockHeader.ContainsKey(SignatureKey)
                ? ((Binary)marshaledBlockHeader[SignatureKey]).ByteArray
                : (ImmutableArray<byte>?)null;

        public static BlockHeader UnmarshalBlockHeader(Dictionary marshaled)
        {
            PreEvaluationBlockHeader preEvalHeader = UnmarshalPreEvaluationBlockHeader(marshaled);
            HashDigest<SHA256> stateRootHash = UnmarshalBlockHeaderStateRootHash(marshaled);
            ImmutableArray<byte>? sig = UnmarshalBlockHeaderSignature(marshaled);
            BlockHash hash = UnmarshalBlockHeaderHash(marshaled);
            return new BlockHeader(preEvalHeader, (stateRootHash, sig, hash));
        }

        public static IReadOnlyList<Transaction> UnmarshalTransactions(List marshaled) =>
            marshaled
                .Select(tx => Transaction.Deserialize(((Binary)tx).ToByteArray()))
                .ToImmutableArray();

        public static IReadOnlyList<Transaction> UnmarshalBlockTransactions(
            Dictionary marshaledBlock) =>
            marshaledBlock.ContainsKey(TransactionsKey)
                ? UnmarshalTransactions((List)marshaledBlock[TransactionsKey])
                : ImmutableArray<Transaction>.Empty;

        public static IReadOnlyList<EvidenceBase> UnmarshalEvidence(List marshaled) =>
            marshaled
                .Select(ev => EvidenceBase.Deserialize(((Binary)ev).ToByteArray()))
                .ToImmutableArray();

        public static IReadOnlyList<EvidenceBase> UnmarshalBlockEvidence(
            Dictionary marshaledBlock) =>
            marshaledBlock.ContainsKey(EvidenceKey)
                ? UnmarshalEvidence((List)marshaledBlock[EvidenceKey])
                : ImmutableArray<EvidenceBase>.Empty;

        public static Block UnmarshalBlock(Dictionary marshaled)
        {
            BlockHeader header = UnmarshalBlockHeader((Dictionary)marshaled[HeaderKey]);
            IReadOnlyList<Transaction> txs = UnmarshalBlockTransactions(marshaled);
            IReadOnlyList<EvidenceBase> evidence = UnmarshalBlockEvidence(marshaled);
            return new Block(header, txs, evidence);
        }
    }
}
