using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Tests.Store
{
    public abstract class StoreFixture : IDisposable
    {
        protected StoreFixture(IAction blockAction = null)
        {
            Path = null;

            Scheme = string.Empty;

            StoreChainId = Guid.NewGuid();

            Address1 = new Address(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            });
            Address2 = new Address(new byte[]
            {
                0x55, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xdd,
            });
            Address3 = new Address(new byte[]
            {
                0xa3, 0x4b, 0x0c, 0x91, 0xda, 0x58, 0xd4, 0x73, 0xd3, 0x70,
                0xc4, 0x5b, 0xf9, 0x6f, 0x6d, 0x98, 0xa5, 0x01, 0xd9, 0x22,
            });
            Address4 = new Address(new byte[]
            {
                0xbf, 0x78, 0x67, 0x29, 0xba, 0x04, 0x1b, 0xa7, 0x6f, 0xfb,
                0xa0, 0x6c, 0x8c, 0x4d, 0xc1, 0x24, 0xee, 0x3e, 0x8c, 0x8b,
            });
            Address5 = new Address(new byte[]
            {
                0x03, 0xf0, 0x42, 0x7f, 0x2e, 0x6c, 0x0f, 0x5f, 0xdb, 0xd3,
                0x77, 0x9d, 0xb2, 0x84, 0xd6, 0x1b, 0x04, 0x38, 0xdf, 0xb6,
            });
            TxId1 = new TxId(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xcc,
            });
            TxId2 = new TxId(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xdd,
            });
            TxId3 = new TxId(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xee,
            });
            Hash1 = new BlockHash(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xcc,
            });
            Hash2 = new BlockHash(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xdd,
            });
            Hash3 = new BlockHash(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xee,
            });

            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var stateRootHashes = new Dictionary<BlockHash, HashDigest<SHA256>>();
            Func<BlockHash?, HashDigest<SHA256>?> rootHashGetter = bh =>
                bh is BlockHash h && stateRootHashes.TryGetValue(h, out HashDigest<SHA256> rh)
                    ? rh
                    : (HashDigest<SHA256>?)null;
            Proposer = TestUtils.GenesisProposer;
            var preEval = TestUtils.ProposeGenesis(
                proposer: Proposer.PublicKey,
                validatorSet: TestUtils.ValidatorSet);
            var actionEvaluator = new ActionEvaluator(
                _ => blockAction,
                new BlockChainStates(new MemoryStore(), stateStore),
                new SingleActionLoader(typeof(DumbAction)));
            GenesisBlock = preEval.Sign(
                Proposer,
                BlockChain.DetermineGenesisStateRootHash(
                    actionEvaluator,
                    preEval,
                    out IReadOnlyList<IActionEvaluation> evals));
            stateStore.Commit(null, evals.GetLegacyRawTotalDelta());
            stateRootHashes[GenesisBlock.Hash] = GenesisBlock.StateRootHash;
            Block1 = TestUtils.ProposeNextBlock(
                GenesisBlock,
                miner: Proposer,
                lastCommit: null);
            stateRootHashes[Block1.Hash] = Block1.StateRootHash;
            Block2 = TestUtils.ProposeNextBlock(
                Block1,
                miner: Proposer,
                lastCommit: TestUtils.CreateBlockCommit(Block1));
            stateRootHashes[Block2.Hash] = Block2.StateRootHash;
            Block3 = TestUtils.ProposeNextBlock(
                Block2,
                miner: Proposer,
                lastCommit: TestUtils.CreateBlockCommit(Block2));
            stateRootHashes[Block3.Hash] = Block3.StateRootHash;
            Block3Alt = TestUtils.ProposeNextBlock(Block2, miner: Proposer);
            stateRootHashes[Block3Alt.Hash] = Block3Alt.StateRootHash;
            Block4 = TestUtils.ProposeNextBlock(Block3, miner: Proposer);
            stateRootHashes[Block4.Hash] = Block4.StateRootHash;
            Block5 = TestUtils.ProposeNextBlock(Block4, miner: Proposer);
            stateRootHashes[Block5.Hash] = Block5.StateRootHash;

            Transaction1 = MakeTransaction(new List<DumbAction>(), ImmutableHashSet<Address>.Empty);
            Transaction2 = MakeTransaction(new List<DumbAction>(), ImmutableHashSet<Address>.Empty);
            Transaction3 = MakeTransaction(new List<DumbAction>(), ImmutableHashSet<Address>.Empty);
        }

        public string Path { get; set; }

        public string Scheme { get; set; }

        public Guid StoreChainId { get; }

        public Address Address1 { get; }

        public Address Address2 { get; }

        public Address Address3 { get; }

        public Address Address4 { get; }

        public Address Address5 { get; }

        public TxId TxId1 { get; }

        public TxId TxId2 { get; }

        public TxId TxId3 { get; }

        public BlockHash Hash1 { get; }

        public BlockHash Hash2 { get; }

        public BlockHash Hash3 { get; }

        public PrivateKey Proposer { get; }

        public Block GenesisBlock { get; }

        public Block Block1 { get; }

        public Block Block2 { get; }

        public Block Block3 { get; }

        public Block Block3Alt { get; }

        public Block Block4 { get; }

        public Block Block5 { get; }

        public Transaction Transaction1 { get; }

        public Transaction Transaction2 { get; }

        public Transaction Transaction3 { get; }

        public IStore Store { get; set; }

        public IStateStore StateStore { get; set; }

        public IKeyValueStore StateHashKeyValueStore { get; set; }

        public IKeyValueStore StateKeyValueStore { get; set; }

        public abstract void Dispose();

        public Transaction MakeTransaction(
            IEnumerable<DumbAction> actions = null,
            ImmutableHashSet<Address> updatedAddresses = null,
            long nonce = 0,
            PrivateKey privateKey = null,
            DateTimeOffset? timestamp = null
        )
        {
            privateKey = privateKey ?? new PrivateKey();
            timestamp = timestamp ?? DateTimeOffset.UtcNow;

            return Transaction.Create(
                nonce,
                privateKey,
                GenesisBlock.Hash,
                actions?.ToPlainValues() ?? Array.Empty<DumbAction>().ToPlainValues(),
                null,
                null,
                updatedAddresses,
                timestamp
            );
        }
    }
}
