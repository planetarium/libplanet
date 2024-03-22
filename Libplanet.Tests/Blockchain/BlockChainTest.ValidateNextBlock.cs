using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [SkippableFact]
        public void ValidateNextBlock()
        {
            Block validNextBlock = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 1L,
                        timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: _fx.GenesisBlock.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);
            _blockChain.Append(validNextBlock, TestUtils.CreateBlockCommit(validNextBlock));
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [SkippableFact]
        public void ValidateNextBlockProtocolVersion()
        {
            var protocolVersion = _blockChain.Tip.ProtocolVersion;
            Block block1 = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        protocolVersion: protocolVersion,
                        index: 1L,
                        timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                        miner: _fx.Proposer.Address,
                        publicKey: protocolVersion >= 2 ? _fx.Proposer.PublicKey : null,
                        previousHash: _fx.GenesisBlock.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            Assert.Throws<ApplicationException>(() => _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        protocolVersion: protocolVersion - 1,
                        index: 2L,
                        timestamp: _fx.GenesisBlock.Timestamp.AddDays(2),
                        miner: _fx.Proposer.Address,
                        publicKey: protocolVersion - 1 >= 2 ? _fx.Proposer.PublicKey : null,
                        previousHash: block1.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer));
            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
            {
                Block block3 = _blockChain.EvaluateAndSign(
                    new BlockContent(
                        new BlockMetadata(
                            protocolVersion: BlockMetadata.CurrentProtocolVersion + 1,
                            index: 2L,
                            timestamp: _fx.GenesisBlock.Timestamp.AddDays(2),
                            miner: _fx.Proposer.Address,
                            publicKey: _fx.Proposer.PublicKey,
                            previousHash: block1.Hash,
                            txHash: null,
                            lastCommit: null,
                            proof: null)).Propose(),
                    _fx.Proposer);
                _blockChain.Append(block3, TestUtils.CreateBlockCommit(block3));
            });
        }

        [SkippableFact]
        public void ValidateNextBlockInvalidIndex()
        {
            _blockChain.Append(_validNext, TestUtils.CreateBlockCommit(_validNext));

            Block prev = _blockChain.Tip;
            Block blockWithAlreadyUsedIndex = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: prev.Index,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: prev.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(
                    blockWithAlreadyUsedIndex,
                    TestUtils.CreateBlockCommit(blockWithAlreadyUsedIndex))
            );

            Block blockWithIndexAfterNonexistentIndex = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: prev.Index + 2,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: prev.Hash,
                        txHash: null,
                        lastCommit: TestUtils.CreateBlockCommit(prev.Hash, prev.Index + 1, 0),
                        proof: new LotMetadata(prev.Index + 1, 0, prev.Proof)
                            .Prove(_fx.Proposer).Proof))
                        .Propose(),
                _fx.Proposer);
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(
                    blockWithIndexAfterNonexistentIndex,
                    TestUtils.CreateBlockCommit(blockWithIndexAfterNonexistentIndex))
            );
        }

        [SkippableFact]
        public void ValidateNextBlockInvalidPreviousHash()
        {
            _blockChain.Append(_validNext, TestUtils.CreateBlockCommit(_validNext));

            Block invalidPreviousHashBlock = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 2,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _fx.Proposer.PublicKey,
                        // Should be _validNext.Hash instead
                        previousHash: _validNext.PreviousHash,
                        txHash: null,
                        // ReSharper disable once PossibleInvalidOperationException
                        lastCommit: TestUtils.CreateBlockCommit(
                            _validNext.PreviousHash.Value, 1, 0),
                        proof: new LotMetadata(_validNext.Index + 1, 0, _validNext.Proof)
                            .Prove(_fx.Proposer).Proof)).Propose(),
                _fx.Proposer);
            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                    _blockChain.Append(
                        invalidPreviousHashBlock,
                        TestUtils.CreateBlockCommit(invalidPreviousHashBlock)));
        }

        [SkippableFact]
        public void ValidateNextBlockInvalidTimestamp()
        {
            _blockChain.Append(_validNext, TestUtils.CreateBlockCommit(_validNext));

            Block invalidPreviousTimestamp = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 2,
                        timestamp: _validNext.Timestamp.AddSeconds(-1),
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: _validNext.Hash,
                        txHash: null,
                        lastCommit: TestUtils.CreateBlockCommit(_validNext),
                        proof: new LotMetadata(_validNext.Index + 1, 0, _validNext.Proof)
                            .Prove(_fx.Proposer).Proof)).Propose(),
                _fx.Proposer);
            Assert.Throws<InvalidBlockTimestampException>(() =>
                    _blockChain.Append(
                        invalidPreviousTimestamp,
                        TestUtils.CreateBlockCommit(invalidPreviousTimestamp)));
        }

        [SkippableFact]
        public void ValidateNextBlockInvalidStateRootHash()
        {
            IKeyValueStore stateKeyValueStore = new MemoryKeyValueStore();
            var policy = new BlockPolicy(
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000)
            );
            var stateStore = new TrieStateStore(stateKeyValueStore);
            IStore store = new MemoryStore();
            var actionEvaluator = new ActionEvaluator(
                _ => policy.BlockAction,
                stateStore,
                new SingleActionLoader(typeof(DumbAction)));
            var genesisBlock = TestUtils.ProposeGenesisBlock(
                actionEvaluator,
                TestUtils.ProposeGenesis(TestUtils.GenesisProposer.PublicKey),
                TestUtils.GenesisProposer);
            store.PutBlock(genesisBlock);
            Assert.NotNull(store.GetStateRootHash(genesisBlock.Hash));

            var chain1 = BlockChain.Create(
                policy,
                new VolatileStagePolicy(),
                store,
                stateStore,
                genesisBlock,
                actionEvaluator);

            Block block1 = chain1.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        protocolVersion: BlockMetadata.CurrentProtocolVersion,
                        index: 1,
                        timestamp: genesisBlock.Timestamp.AddSeconds(1),
                        miner: TestUtils.GenesisProposer.Address,
                        publicKey: TestUtils.GenesisProposer.PublicKey,
                        previousHash: genesisBlock.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                TestUtils.GenesisProposer);

            var policyWithBlockAction = new BlockPolicy(
                new SetStatesAtBlock(default, (Text)"foo", default, 1),
                policy.BlockInterval
            );
            var blockChainStates = new BlockChainStates(store, stateStore);
            var chain2 = new BlockChain(
                policyWithBlockAction,
                new VolatileStagePolicy(),
                store,
                stateStore,
                genesisBlock,
                blockChainStates,
                new ActionEvaluator(
                    _ => policyWithBlockAction.BlockAction,
                    stateStore,
                    new SingleActionLoader(typeof(DumbAction))));
            Assert.Throws<InvalidBlockStateRootHashException>(() =>
                chain2.Append(block1, TestUtils.CreateBlockCommit(block1)));
        }

        [SkippableFact]
        public void ValidateNextBlockLastCommitNullAtIndexOne()
        {
            Block validNextBlock = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 1L,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: _fx.GenesisBlock.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);
            _blockChain.Append(validNextBlock, TestUtils.CreateBlockCommit(validNextBlock));
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [SkippableFact]
        public void ValidateNextBlockLastCommitUpperIndexOne()
        {
            Block block1 = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 1L,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: _fx.GenesisBlock.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            var blockCommit = TestUtils.CreateBlockCommit(block1);
            Block block2 = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 2L,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: block1.Hash,
                        txHash: null,
                        lastCommit: blockCommit,
                        proof: new LotMetadata(2L, 0, block1.Proof)
                            .Prove(_fx.Proposer).Proof)).Propose(),
                _fx.Proposer);
            _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2));
            Assert.Equal(_blockChain.Tip, block2);
        }

        [SkippableFact]
        public void ValidateNextBlockLastCommitFailsUnexpectedValidator()
        {
            Block block1 = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 1L,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: _fx.GenesisBlock.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            var invalidValidator = new PrivateKey();
            var validators = TestUtils.ValidatorPrivateKeys.Append(invalidValidator).ToList();
            var votes = validators.Select(key => new VoteMetadata(
                1,
                0,
                block1.Hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key)).ToImmutableArray();
            var blockCommit = new BlockCommit(1, 0, block1.Hash, votes);

            Block block2 = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 2L,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: block1.Hash,
                        txHash: null,
                        lastCommit: blockCommit,
                        proof: new LotMetadata(2L, 0, block1.Proof)
                            .Prove(_fx.Proposer).Proof)).Propose(),
                _fx.Proposer);
            Assert.Throws<InvalidBlockLastCommitException>(() =>
                _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2)));
        }

        [SkippableFact]
        public void ValidateNextBlockLastCommitFailsDropExpectedValidator()
        {
            Block block1 = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 1L,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: _fx.GenesisBlock.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            var keysExceptPeer0 = TestUtils.ValidatorPrivateKeys.Where(
                key => key != TestUtils.ValidatorPrivateKeys[0]).ToList();
            var votes = keysExceptPeer0.Select(key => new VoteMetadata(
                1,
                0,
                block1.Hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key)).ToImmutableArray();
            var blockCommit = new BlockCommit(1, 0, block1.Hash, votes);
            Block block2 = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 2,
                        timestamp: DateTimeOffset.UtcNow,
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: block1.Hash,
                        txHash: null,
                        lastCommit: blockCommit,
                        proof: new LotMetadata(2L, 0, block1.Proof)
                            .Prove(_fx.Proposer).Proof)).Propose(),
                _fx.Proposer);
            Assert.Throws<InvalidBlockLastCommitException>(() =>
                _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2)));
        }

        [SkippableFact]
        public void ValidateBlockCommitGenesis()
        {
            // Works fine.
            _blockChain.ValidateBlockCommit(_fx.GenesisBlock, null);

            // Should be null for genesis.
            Assert.Throws<InvalidBlockCommitException>(() => _blockChain.ValidateBlockCommit(
                _fx.GenesisBlock,
                new BlockCommit(
                    0,
                    0,
                    _fx.GenesisBlock.Hash,
                    TestUtils.ValidatorPrivateKeys.Select(x => new VoteMetadata(
                        0,
                        0,
                        _fx.GenesisBlock.Hash,
                        DateTimeOffset.UtcNow,
                        x.PublicKey,
                        VoteFlag.PreCommit).Sign(x)).ToImmutableArray())));
        }

        [SkippableFact]
        public void ValidateBlockCommitFailsDifferentBlockHash()
        {
            Block validNextBlock = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 1L,
                        timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: _fx.GenesisBlock.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);

            Assert.Throws<InvalidBlockCommitException>(() =>
                _blockChain.Append(
                    validNextBlock,
                    TestUtils.CreateBlockCommit(
                        new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                        1,
                        0)));
        }

        [SkippableFact]
        public void ValidateBlockCommitFailsDifferentHeight()
        {
            Block validNextBlock = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 1L,
                        timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: _fx.GenesisBlock.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);

            Assert.Throws<InvalidBlockCommitException>(() =>
                _blockChain.Append(
                    validNextBlock,
                    TestUtils.CreateBlockCommit(
                        validNextBlock.Hash,
                        2,
                        0)));
        }

        [SkippableFact]
        public void ValidateBlockCommitFailsDifferentValidatorSet()
        {
            Block validNextBlock = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 1L,
                        timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: _fx.GenesisBlock.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);

            Assert.Throws<InvalidBlockCommitException>(() =>
                _blockChain.Append(
                    validNextBlock,
                    new BlockCommit(
                        1,
                        0,
                        validNextBlock.Hash,
                        Enumerable.Range(0, TestUtils.ValidatorSet.TotalCount)
                            .Select(x => new PrivateKey())
                            .Select(x => new VoteMetadata(
                            1,
                            0,
                            validNextBlock.Hash,
                            DateTimeOffset.UtcNow,
                            x.PublicKey,
                            VoteFlag.PreCommit).Sign(x)).ToImmutableArray())));
        }

        [SkippableFact]
        public void ValidateBlockCommitFailsNullBlockCommit()
        {
            Block validNextBlock = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 1L,
                        timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: _fx.GenesisBlock.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);

            Assert.Throws<InvalidBlockCommitException>(() =>
                _blockChain.Append(validNextBlock, null));
        }

        [SkippableFact]
        public void ValidateBlockCommitFailsInsufficientPower()
        {
            var privateKey1 = new PrivateKey();
            var privateKey2 = new PrivateKey();
            var privateKey3 = new PrivateKey();
            var privateKey4 = new PrivateKey();
            var validator1 = new Validator(privateKey1.PublicKey, 10);
            var validator2 = new Validator(privateKey2.PublicKey, 1);
            var validator3 = new Validator(privateKey3.PublicKey, 1);
            var validator4 = new Validator(privateKey4.PublicKey, 1);
            var validatorSet = new ValidatorSet(
                new[] { validator1, validator2, validator3, validator4 }.ToList());
            BlockChain blockChain = TestUtils.MakeBlockChain(
                new NullBlockPolicy(),
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbAction)),
                validatorSet: validatorSet);
            Block validNextBlock = blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        index: 1L,
                        timestamp: blockChain.Genesis.Timestamp.AddDays(1),
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: blockChain.Genesis.Hash,
                        txHash: null,
                        lastCommit: null,
                        proof: null)).Propose(),
                _fx.Proposer);

            Vote GenerateVote(PrivateKey key, VoteFlag flag)
            {
                var metadata = new VoteMetadata(
                        1,
                        0,
                        validNextBlock.Hash,
                        DateTimeOffset.UtcNow,
                        key.PublicKey,
                        flag);
                return metadata.Sign(flag == VoteFlag.Null ? null : key);
            }

            ImmutableArray<Vote> GenerateVotes(
                VoteFlag flag1,
                VoteFlag flag2,
                VoteFlag flag3,
                VoteFlag flag4)
            {
                return new[]
                {
                    GenerateVote(privateKey1, flag1),
                    GenerateVote(privateKey2, flag2),
                    GenerateVote(privateKey3, flag3),
                    GenerateVote(privateKey4, flag4),
                }.OrderBy(vote => vote.ValidatorPublicKey.Address).ToImmutableArray();
            }

            var fullBlockCommit = new BlockCommit(
                1,
                0,
                validNextBlock.Hash,
                GenerateVotes(
                    VoteFlag.PreCommit,
                    VoteFlag.PreCommit,
                    VoteFlag.PreCommit,
                    VoteFlag.PreCommit)
            );
            blockChain.ValidateBlockCommit(validNextBlock, fullBlockCommit);

            // Can propose if power is big enough even count condition is not met.
            var validBlockCommit = new BlockCommit(
                1,
                0,
                validNextBlock.Hash,
                GenerateVotes(
                    VoteFlag.PreCommit,
                    VoteFlag.Null,
                    VoteFlag.Null,
                    VoteFlag.Null)
            );
            blockChain.ValidateBlockCommit(validNextBlock, validBlockCommit);

            // Can not propose if power isn't big enough even count condition is met.
            var invalidBlockCommit = new BlockCommit(
                1,
                0,
                validNextBlock.Hash,
                GenerateVotes(
                    VoteFlag.Null,
                    VoteFlag.PreCommit,
                    VoteFlag.PreCommit,
                    VoteFlag.PreCommit)
            );
            Assert.Throws<InvalidBlockCommitException>(() =>
                blockChain.ValidateBlockCommit(validNextBlock, invalidBlockCommit));
        }
    }
}
