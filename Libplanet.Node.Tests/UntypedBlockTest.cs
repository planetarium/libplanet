using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Node.Tests
{
    public class UntypedBlockTest
    {
        private static readonly HashAlgorithmType _sha256 = BlockMetadata.HashAlgorithmType;
        private static readonly Codec Codec = new Codec();
        private readonly PrivateKey _signerKey;
        private readonly Transaction<NullAction>[] _txs;
        private readonly PrivateKey _minerKey;
        private readonly BlockContent<NullAction> _content;
        private readonly PreEvaluationBlock<NullAction> _preEval;
        private readonly Block<NullAction> _block;

        public UntypedBlockTest()
        {
            _signerKey = new PrivateKey(new byte[]
            {
                0xfc, 0xf3, 0x0b, 0x33, 0x3d, 0x04, 0xcc, 0xfe, 0xb5, 0x62, 0xf0,
                0x00, 0xa3, 0x2d, 0xf4, 0x88, 0xe7, 0x15, 0x49, 0x49, 0xd3, 0x1d,
                0xdc, 0xac, 0x3c, 0xf9, 0x27, 0x8a, 0xcb, 0x57, 0x86, 0xc7,
            });
            var txA = Transaction<NullAction>.Create(
                nonce: 0L,
                privateKey: _signerKey,
                genesisHash: null,
                customActions: Enumerable.Empty<NullAction>(),
                timestamp: new DateTimeOffset(2022, 5, 24, 0, 0, 0, TimeSpan.Zero)
            );
            var txB = Transaction<NullAction>.Create(
                nonce: 1L,
                privateKey: _signerKey,
                genesisHash: null,
                customActions: new[]
                {
                    new NullAction(),
                    new NullAction(),
                },
                timestamp: new DateTimeOffset(2022, 5, 24, 0, 0, 1, TimeSpan.Zero)
            );
            _txs = new[] { txA, txB }.OrderBy(tx => tx.Id).ToArray();
            _minerKey = new PrivateKey(new byte[]
            {
                0x9b, 0xf4, 0x66, 0x4b, 0xa0, 0x9a, 0x89, 0xfa, 0xeb, 0x68, 0x4b,
                0x94, 0xe6, 0x9f, 0xfd, 0xe0, 0x1d, 0x26, 0xae, 0x14, 0xb5, 0x56,
                0x20, 0x4d, 0x3f, 0x6a, 0xb5, 0x8f, 0x61, 0xf7, 0x84, 0x18,
            });
            _content = new BlockContent<NullAction>(
                new BlockMetadata(
                    index: 0L,
                    timestamp: new DateTimeOffset(2022, 5, 24, 1, 2, 3, 456, TimeSpan.Zero),
                    publicKey: _minerKey.PublicKey,
                    difficulty: 0L,
                    totalDifficulty: 0L,
                    previousHash: null,
                    txHash: BlockContent<NullAction>.DeriveTxHash(_txs)),
                transactions: _txs);
            var nonce = default(Nonce);
            byte[] blockBytes = Codec.Encode(_content.Metadata.MakeCandidateData(nonce));
            ImmutableArray<byte> preEvalHash = _sha256.Digest(blockBytes).ToImmutableArray();
            var proof = (nonce, preEvalHash);
            _preEval = new PreEvaluationBlock<NullAction>(_content, proof);
            _block = _preEval.Evaluate(
                privateKey: _minerKey,
                blockAction: null,
                nativeTokenPredicate: _ => true,
                stateStore: new TrieStateStore(new MemoryKeyValueStore())
            );
        }

        [Fact]
        public void Deserialize()
        {
            Bencodex.Types.Dictionary dict = _block.MarshalBlock();
            var untyped = new UntypedBlock(dict);
            Assert.Equal(_block.ProtocolVersion, untyped.ProtocolVersion);
            Assert.Equal(_block.Index, untyped.Index);
            Assert.Equal(_block.Timestamp, untyped.Timestamp);
            Assert.Equal(_block.Nonce, untyped.Nonce);
            Assert.Equal(_block.Miner, untyped.Miner);
            Assert.Equal(_block.PublicKey, untyped.PublicKey);
            Assert.Equal(_block.Difficulty, untyped.Difficulty);
            Assert.Equal(_block.TotalDifficulty, untyped.TotalDifficulty);
            Assert.Equal(_block.PreviousHash, untyped.PreviousHash);
            Assert.Equal(_block.TxHash, untyped.TxHash);
            Assert.Equal(_block.Signature, untyped.Signature);
            Assert.Equal(_block.PreEvaluationHash, untyped.PreEvaluationHash);
            Assert.Equal(_block.StateRootHash, untyped.StateRootHash);
            Assert.Equal(_block.Hash, untyped.Hash);
            Assert.Equal(_block.Transactions.Count, untyped.UntypedTransactions.Count);
            Assert.All(
                _block.Transactions.Zip(untyped.UntypedTransactions, (t, u) => (t, u)),
                pair => pair.Item1.Id.Equals(pair.Item2.Id)
            );
        }

        [Fact]
        public void ToBencodex()
        {
            var untypedTxs = _txs.Select(tx =>
                new UntypedTransaction(
                    tx,
                    null,
                    new Bencodex.Types.List(tx.CustomActions.Select(a => a.PlainValue)),
                    tx.Signature.ToImmutableArray()));
            var untyped = new UntypedBlock(_block, untypedTxs);
            Assert.Equal(_block.MarshalBlock(), untyped.ToBencodex());
        }
    }
}
