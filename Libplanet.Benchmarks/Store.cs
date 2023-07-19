using System.Collections.Generic;
using System.Collections.Immutable;
using BenchmarkDotNet.Attributes;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Libplanet.Store;
using Libplanet.Tests;
using Libplanet.Tests.Store;

namespace Libplanet.Benchmarks
{
    public class Store
    {
        private readonly ImmutableArray<Block> Blocks = default;
        private readonly int BlocksCount = default;
        private readonly ImmutableArray<Transaction> Txs = default;
        private StoreFixture _fx = null;
        private int TxsCount = default;
        private IStore _store = null;

        public Store()
        {
            var blocks = new List<Block>();
            var txs = new List<Transaction>();
            Block genesis = TestUtils.ProposeGenesisBlock(TestUtils.GenesisProposer);
            blocks.Add(genesis);
            Block block = genesis;
            var key = new PrivateKey();
            long nonce = 0;
            for (int i = 0; i < 500; i++)
            {
                var blockTxs = new List<Transaction>();
                for (int j = 0; j < i % 5; j++)
                {
                    blockTxs.Add(Transaction.Create(
                        nonce++, key, genesis.Hash, List.Empty));
                }
                block = TestUtils.ProposeNextBlock(
                    block, TestUtils.GenesisProposer, blockTxs);
                blocks.Add(block);
                txs.AddRange(blockTxs);
            }
            Blocks = blocks.ToImmutableArray();
            BlocksCount = Blocks.Length;
            Txs = txs.ToImmutableArray();
            TxsCount = Txs.Length;
        }

        [IterationSetup]
        public void InitializeFixture()
        {
            _fx = new DefaultStoreFixture();
            _store = _fx.Store;
        }

        [IterationCleanup]
        public void FinalizeFixture()
        {
            _fx.Dispose();
        }

        [Benchmark]
        public void PutFirstEmptyBlock()
        {
            _store.PutBlock(Blocks[0]);
        }

        [Benchmark]
        public void PutFirstBlockWithTxs()
        {
            _store.PutBlock(Blocks[5]);
        }

        [IterationSetup(
            Targets = new []
            {
                nameof(PutBlockOnManyBlocks),
                nameof(GetOldBlockOutOfManyBlocks),
                nameof(GetRecentBlockOutOfManyBlocks),
            }
        )]
        public void PutManyBlocks()
        {
            InitializeFixture();
            int i = 0;
            foreach (Block block in Blocks)
            {
                _store.PutBlock(block);
                i++;
                if (i >= Blocks.Length - 1)
                {
                    break;
                }
            }
        }

        [Benchmark]
        public void PutBlockOnManyBlocks()
        {
            _store.PutBlock(Blocks[BlocksCount - 1]);
        }

        [Benchmark]
        public Block GetOldBlockOutOfManyBlocks()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetBlock(Blocks[0].Hash);
        }

        [Benchmark]
        public Block GetRecentBlockOutOfManyBlocks()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetBlock(Blocks[BlocksCount - 2].Hash);
        }

        [Benchmark]
        public Block TryGetNonExistentBlockHash()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetBlock(default);
        }

        [Benchmark]
        public void PutFirstTx()
        {
            _store.PutTransaction(Txs[0]);
        }

        [IterationSetup(
            Targets = new []
            {
                nameof(PutTxOnManyTxs),
                nameof(GetOldTxOutOfManyTxs),
                nameof(GetRecentTxOutOfManyTxs),
            }
        )]
        public void PutManyTxs()
        {
            InitializeFixture();
            int i = 0;
            foreach (Transaction tx in Txs)
            {
                _store.PutTransaction(tx);
                i++;
                if (i >= Txs.Length - 1)
                {
                    break;
                }
            }
        }

        [Benchmark]
        public void PutTxOnManyTxs()
        {
            _store.PutTransaction(Txs[TxsCount - 1]);
        }

        [Benchmark]
        public Transaction GetOldTxOutOfManyTxs()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetTransaction(Txs[0].Id);
        }

        [Benchmark]
        public Transaction GetRecentTxOutOfManyTxs()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetTransaction(Txs[TxsCount - 2].Id);
        }

        [Benchmark]
        public Transaction TryGetNonExistentTxId()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetTransaction(default);
        }
    }
}
