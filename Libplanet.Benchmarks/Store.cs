using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using BenchmarkDotNet.Attributes;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;

namespace Libplanet.Benchmarks
{
    public class Store
    {
        private readonly ImmutableArray<Block<DumbAction>> Blocks = default;
        private readonly int BlocksCount = default;
        private readonly ImmutableArray<Transaction<DumbAction>> Txs = default;
        private StoreFixture _fx = null;
        private int TxsCount = default;
        private IStore _store = null;

        public Store()
        {
            var blocks = new List<Block<DumbAction>>();
            var txs = new List<Transaction<DumbAction>>();
            Block<DumbAction> genesis = TestUtils.MineGenesisBlock<DumbAction>(
                TestUtils.GenesisMiner
            );
            blocks.Add(genesis);
            Block<DumbAction> block = genesis;
            var key = new PrivateKey();
            long nonce = 0;
            for (int i = 0; i < 500; i++)
            {
                var blockTxs = new List<Transaction<DumbAction>>();
                for (int j = 0; j < i % 5; j++)
                {
                    blockTxs.Add(Transaction<DumbAction>.Create(nonce++, key, genesis.Hash, new DumbAction[0]));
                }
                block = TestUtils.MineNextBlock(
                    block, TestUtils.GenesisMiner, blockTxs);
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
            foreach (Block<DumbAction> block in Blocks)
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
        public Block<DumbAction> GetOldBlockOutOfManyBlocks()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetBlock<DumbAction>(Blocks[0].Hash);
        }

        [Benchmark]
        public Block<DumbAction> GetRecentBlockOutOfManyBlocks()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetBlock<DumbAction>(Blocks[BlocksCount - 2].Hash);
        }

        [Benchmark]
        public Block<DumbAction> TryGetNonExistentBlockHash()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetBlock<DumbAction>(default);
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
            foreach (Transaction<DumbAction> tx in Txs)
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
        public Transaction<DumbAction> GetOldTxOutOfManyTxs()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetTransaction<DumbAction>(Txs[0].Id);
        }

        [Benchmark]
        public Transaction<DumbAction> GetRecentTxOutOfManyTxs()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetTransaction<DumbAction>(Txs[TxsCount - 2].Id);
        }

        [Benchmark]
        public Transaction<DumbAction> TryGetNonExistentTxId()
        {
            // Note that why this benchmark method returns something is
            // because without this JIT can remove the below statement at all
            // during dead code elimination optimization.
            // https://benchmarkdotnet.org/articles/guides/good-practices.html#avoid-dead-code-elimination
            return _store.GetTransaction<DumbAction>(default);
        }
    }
}
