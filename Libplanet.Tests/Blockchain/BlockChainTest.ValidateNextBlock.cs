using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [SkippableFact]
        public void ValidateNextBlock()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(validNextBlock, TestUtils.CreateBlockCommit(validNextBlock));
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [SkippableFact]
        public void ValidateNextBlockProtocolVersion()
        {
            var protocolVersion = _blockChain.Tip.ProtocolVersion;
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: protocolVersion,
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    miner: _fx.Proposer.PublicKey.ToAddress(),
                    publicKey: protocolVersion >= 2 ? _fx.Proposer.PublicKey : null,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: protocolVersion - 1,
                    index: 2L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(2),
                    miner: _fx.Proposer.PublicKey.ToAddress(),
                    publicKey: protocolVersion - 1 >= 2 ? _fx.Proposer.PublicKey : null,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);

            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
                _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2)));
            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
            {
                Block<DumbAction> block3 = new BlockContent<DumbAction>(
                    new BlockMetadata(
                        protocolVersion: BlockMetadata.CurrentProtocolVersion + 1,
                        index: 2L,
                        timestamp: _fx.GenesisBlock.Timestamp.AddDays(2),
                        miner: _fx.Proposer.PublicKey.ToAddress(),
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: block1.Hash,
                        txHash: null,
                        lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
                _blockChain.Append(block3, TestUtils.CreateBlockCommit(block3));
            });
        }

        [SkippableFact]
        public void ValidateNextBlockInvalidIndex()
        {
            _blockChain.Append(_validNext, TestUtils.CreateBlockCommit(_validNext));

            Block<DumbAction> prev = _blockChain.Tip;
            Block<DumbAction> blockWithAlreadyUsedIndex = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: prev.Index,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: prev.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(
                    blockWithAlreadyUsedIndex,
                    TestUtils.CreateBlockCommit(blockWithAlreadyUsedIndex))
            );

            Block<DumbAction> blockWithIndexAfterNonexistentIndex = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: prev.Index + 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: prev.Hash,
                    txHash: null,
                    lastCommit: TestUtils.CreateBlockCommit(prev.Hash, prev.Index + 1, 0)))
                    .Propose().Evaluate(_fx.Proposer, _blockChain);
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

            Block<DumbAction> invalidPreviousHashBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    // Should be _validNext.Hash instead
                    previousHash: _validNext.PreviousHash,
                    txHash: null,
                    // ReSharper disable once PossibleInvalidOperationException
                    lastCommit: TestUtils.CreateBlockCommit(_validNext.PreviousHash.Value, 1, 0)))
                .Propose().Evaluate(_fx.Proposer, _blockChain);
            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                    _blockChain.Append(
                        invalidPreviousHashBlock,
                        TestUtils.CreateBlockCommit(invalidPreviousHashBlock)));
        }

        [SkippableFact]
        public void ValidateNextBlockInvalidTimestamp()
        {
            _blockChain.Append(_validNext, TestUtils.CreateBlockCommit(_validNext));

            Block<DumbAction> invalidPreviousTimestamp = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: _validNext.Timestamp.AddSeconds(-1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _validNext.Hash,
                    txHash: null,
                    lastCommit: TestUtils.CreateBlockCommit(_validNext)))
                .Propose().Evaluate(_fx.Proposer, _blockChain);
            Assert.Throws<InvalidBlockTimestampException>(() =>
                    _blockChain.Append(
                        invalidPreviousTimestamp,
                        TestUtils.CreateBlockCommit(invalidPreviousTimestamp)));
        }

        [SkippableFact]
        public void ValidateNextBlockInvalidStateRootHash()
        {
            IKeyValueStore stateKeyValueStore = new MemoryKeyValueStore();
            var policy = new BlockPolicy<DumbAction>(
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000)
            );
            var stateStore = new TrieStateStore(stateKeyValueStore);
            IStore store = new MemoryStore();
            var genesisBlock = TestUtils.ProposeGenesisBlock<DumbAction>(
                TestUtils.ProposeGenesis<DumbAction>(TestUtils.GenesisProposer.PublicKey),
                TestUtils.GenesisProposer,
                policy.BlockAction,
                policy.NativeTokens.Contains);
            store.PutBlock(genesisBlock);
            Assert.NotNull(store.GetStateRootHash(genesisBlock.Hash));

            var chain1 = BlockChain<DumbAction>.Create(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                genesisBlock);

            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion,
                    index: 1,
                    timestamp: genesisBlock.Timestamp.AddSeconds(1),
                    miner: TestUtils.GenesisProposer.PublicKey.ToAddress(),
                    publicKey: TestUtils.GenesisProposer.PublicKey,
                    previousHash: genesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(TestUtils.GenesisProposer, chain1);

            var policyWithBlockAction = new BlockPolicy<DumbAction>(
                new SetStatesAtBlock(default, (Text)"foo", 1),
                policy.BlockInterval
            );
            var chain2 = new BlockChain<DumbAction>(
                policyWithBlockAction,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                genesisBlock
            );
            Assert.Throws<InvalidBlockStateRootHashException>(() =>
                chain2.Append(block1, TestUtils.CreateBlockCommit(block1)));
        }

        [SkippableFact]
        public void ValidateNextBlockLastCommitNullAtIndexOne()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(validNextBlock, TestUtils.CreateBlockCommit(validNextBlock));
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [SkippableFact]
        public void ValidateNextBlockLastCommitUpperIndexOne()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            var blockCommit = TestUtils.CreateBlockCommit(block1);
            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2));
            Assert.Equal(_blockChain.Tip, block2);
        }

        [SkippableFact]
        public void ValidateNextBlockLastCommitFailsUnexpectedValidator()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
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

            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Proposer, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() =>
                _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2)));
        }

        [SkippableFact]
        public void ValidateNextBlockLastCommitFailsDropExpectedValidator()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
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
            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Proposer, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() =>
                _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2)));
        }

        [SkippableFact]
        public void ValidateBlockCommitGenesis()
        {
            InvalidBlockCommitException ibcm =
                _blockChain.ValidateBlockCommit(_fx.GenesisBlock, null);

            Assert.Null(ibcm);

            ibcm = _blockChain.ValidateBlockCommit(
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
                        VoteFlag.PreCommit).Sign(x)).ToImmutableArray()));

            Assert.NotNull(ibcm);
        }

        [SkippableFact]
        public void ValidateBlockCommitFailsDifferentBlockHash()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);

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
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);

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
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);

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
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);

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
            BlockChain<DumbAction> blockChain = TestUtils.MakeBlockChain(
                new NullBlockPolicy<DumbAction>(),
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                validatorSet: validatorSet);
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: blockChain.Genesis.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: blockChain.Genesis.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, blockChain);

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
                }.OrderBy(vote => vote.ValidatorPublicKey.ToAddress()).ToImmutableArray();
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
            Assert.Null(blockChain.ValidateBlockCommit(validNextBlock, fullBlockCommit));

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
            Assert.Null(blockChain.ValidateBlockCommit(validNextBlock, validBlockCommit));

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
            Assert.IsType<InvalidBlockCommitException>(
                blockChain.ValidateBlockCommit(validNextBlock, invalidBlockCommit));
        }
    }
}
