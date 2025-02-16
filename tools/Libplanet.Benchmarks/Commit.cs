using System;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using BenchmarkDotNet.Attributes;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Tests;

namespace Libplanet.Benchmarks
{
    public class Commit
    {
        private const int MaxValidatorSize = 100;

        private Vote[] _votes;
        private PrivateKey[] _privateKeys;
        private BlockHash _blockHash;
        private BlockCommit _blockCommit;
        private Bencodex.Types.IValue _encodedBlockCommit;

        [Params(4, 10, 25, 50, MaxValidatorSize)]
        // ReSharper disable once MemberCanBePrivate.Global
        // System.InvalidOperationException: Member "ValidatorSize" must be public if it has the
        // [ParamsAttribute] attribute applied to it
        public int ValidatorSize { get; set; }

        [GlobalSetup]
        public void Setup()
        {
            _blockHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            SetupKeys();
            SetupVotes();
        }

        [IterationSetup(Target = nameof(DecodeBlockCommit))]
        public void PrepareDecode()
        {
            _blockCommit = new BlockCommit(1, 0, _blockHash, _votes.Take(ValidatorSize)
                .ToImmutableArray());
            _encodedBlockCommit = _blockCommit.Bencoded;
        }

        [Benchmark]
        public void DecodeBlockCommit()
        {
            _blockCommit = new BlockCommit(_encodedBlockCommit);
        }

        private void SetupKeys()
        {
            _privateKeys = new PrivateKey[MaxValidatorSize];
            for (int i = 0; i < MaxValidatorSize; i++)
            {
                _privateKeys[i] = new PrivateKey();
            }
        }

        private void SetupVotes()
        {
            _votes = Enumerable.Range(0, MaxValidatorSize)
                .Select(x =>
                    new VoteMetadata(
                        1,
                        0,
                        _blockHash,
                        DateTimeOffset.UtcNow,
                        _privateKeys[x].PublicKey,
                        BigInteger.One,
                        VoteFlag.PreCommit).Sign(_privateKeys[x]))
                .ToArray();
        }
    }
}
