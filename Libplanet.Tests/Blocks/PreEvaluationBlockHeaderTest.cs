using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Fixtures;
using Xunit;
using static Libplanet.ByteUtil;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    // FIXME: The most of the following tests are duplicated in PreEvaluationBlockTest.
    public class PreEvaluationBlockHeaderTest
    {
        protected readonly BlockContentFixture _contents;
        protected readonly Codec _codec;
        protected readonly HashAlgorithmType _hashAlgorithmType;
        protected readonly (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) _validGenesisProof;
        protected readonly (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) _validBlock1Proof;
        protected readonly (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash)
            _invalidBlock1Proof;

        public PreEvaluationBlockHeaderTest()
        {
            _contents = new BlockContentFixture();
            _codec = new Codec();
            _hashAlgorithmType = BlockMetadata.HashAlgorithmType;

            var validGenesisNonce = default(Nonce);
            byte[] validGenesisBytes =
                _codec.Encode(_contents.GenesisMetadata.MakeCandidateData(validGenesisNonce));
            ImmutableArray<byte> validGenesisPreEvalHash =
                _hashAlgorithmType.Digest(validGenesisBytes).ToImmutableArray();
            _validGenesisProof = (validGenesisNonce, validGenesisPreEvalHash);

            // Checks if the hard-coded proof of the fixture is up-to-date.  If it's outdated,
            // throws an exception that prints a regenerated up-to-date one:
            const int lastCheckedProtocolVersion = 4;
            if (_contents.BlockMetadata1.ProtocolVersion > lastCheckedProtocolVersion)
            {
                (Nonce Nonce, ImmutableArray<byte> Digest) regen =
                    Hashcash.Answer(
                        n => new[] { _codec.Encode(_contents.BlockMetadata1.MakeCandidateData(n)) },
                        _hashAlgorithmType,
                        _contents.BlockMetadata1.Difficulty,
                        0
                    );
                string nonceLit = string.Join(
                    ", ",
                    regen.Nonce.ByteArray.Select(b => b < 0x10 ? $"0x0{b:x}" : $"0x{b:x}")
                );
                throw new Exception(
                    $"As the CurrentProtocolVersion was bumped from {lastCheckedProtocolVersion} " +
                    $"to {BlockMetadata.CurrentProtocolVersion}, hard-coded nonce proofs in " +
                    $"the fixture is now outdated.  Check {nameof(PreEvaluationBlockHeaderTest)} " +
                    "constructor and update the hard-coded nonce to the following up-to-date one:" +
                    $"\n\n    new {nameof(Nonce)}(new byte[] {{ {nonceLit} }})\n\n"
                );
            }

            var validBlock1Nonce = new Nonce(
                new byte[] { 0x81, 0x6e, 0x9c, 0x9d, 0xe8, 0xe8, 0x48, 0xab, 0x61, 0x52 }
            );
            byte[] validBlock1Bytes =
                _codec.Encode(_contents.BlockMetadata1.MakeCandidateData(validBlock1Nonce));
            ImmutableArray<byte> validBlock1PreEvalHash =
                _hashAlgorithmType.Digest(validBlock1Bytes).ToImmutableArray();
            _validBlock1Proof = (validBlock1Nonce, validBlock1PreEvalHash);

            var invalidBlock1Nonce = default(Nonce);
            byte[] invalidBlock1Bytes =
                _codec.Encode(_contents.BlockMetadata1.MakeCandidateData(invalidBlock1Nonce));
            ImmutableArray<byte> invalidBlock1PreEvalHash =
                _hashAlgorithmType.Digest(invalidBlock1Bytes).ToImmutableArray();
            _invalidBlock1Proof = (invalidBlock1Nonce, invalidBlock1PreEvalHash);
        }

        [Fact]
        public void Constructors()
        {
            var validatorA = new PrivateKey();
            var validatorB = new PrivateKey();
            var validatorC = new PrivateKey();
            var invalidValidator = new PrivateKey();
            BlockHash blockHash = BlockHash.FromString(
                "341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a"
            );
            DateTimeOffset timestamp = DateTimeOffset.UtcNow;
            var voteA = new Vote(
                1,
                0,
                blockHash,
                timestamp,
                validatorA.PublicKey,
                VoteFlag.Commit,
                null).Sign(validatorA);
            var voteB = new Vote(
                1,
                0,
                blockHash,
                timestamp,
                validatorB.PublicKey,
                VoteFlag.Commit,
                null).Sign(validatorB);
            var voteC = new Vote(
                1,
                0,
                blockHash,
                timestamp,
                validatorC.PublicKey,
                VoteFlag.Commit,
                null).Sign(validatorC);

            // Height of the last commit is invalid.
            var invalidHeightLastCommit = new BlockCommit(
                0,
                0,
                _contents.GenesisHash,
                new[] { voteA, voteB, voteC }.ToImmutableArray());
            var invalidHeightMetadata = new BlockMetadata
            {
                Index = 2,
                Timestamp = DateTimeOffset.UtcNow,
                PublicKey = validatorA.PublicKey,
                Difficulty = 123,
                PreviousHash = _contents.GenesisHash,
                TxHash = HashDigest<SHA256>.FromString(
                    "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                ),
                LastCommit = invalidHeightLastCommit,
            };
            Assert.Throws<InvalidBlockLastCommitException>(
                () => new PreEvaluationBlockHeader(
                    metadata: invalidHeightMetadata,
                    nonce: _validGenesisProof.Nonce));

            // BlockHash of the last commit is invalid.
            var invalidBlockHashLastCommit = new BlockCommit(
                1,
                0,
                BlockHash.FromString(
                    "141e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a"
                ),
                new[] { voteA, voteB, voteC }.ToImmutableArray());
            var invalidBlockHashMetadata = new BlockMetadata
            {
                Index = 2,
                Timestamp = DateTimeOffset.UtcNow,
                PublicKey = validatorA.PublicKey,
                Difficulty = 123,
                PreviousHash = _contents.GenesisHash,
                TxHash = HashDigest<SHA256>.FromString(
                    "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                ),
                LastCommit = invalidBlockHashLastCommit,
            };
            Assert.Throws<InvalidBlockLastCommitException>(
                () => new PreEvaluationBlockHeader(
                    metadata: invalidBlockHashMetadata,
                    nonce: _validGenesisProof.Nonce));

            // Some of the vote's signature are invalid.
            var invalidVoteSignatureLastCommit = new BlockCommit(
                1,
                0,
                blockHash,
                new[]
                {
                    voteA,
                    voteB,
                    new Vote(
                        1,
                        0,
                        blockHash,
                        timestamp,
                        validatorC.PublicKey,
                        VoteFlag.Commit,
                        null).Sign(invalidValidator),
                }.ToImmutableArray());
            var invalidVoteSignatureMetadata = new BlockMetadata
            {
                Index = 2,
                Timestamp = DateTimeOffset.UtcNow,
                PublicKey = validatorA.PublicKey,
                Difficulty = 123,
                PreviousHash = _contents.GenesisHash,
                TxHash = HashDigest<SHA256>.FromString(
                    "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                ),
                LastCommit = invalidVoteSignatureLastCommit,
            };
            Assert.Throws<InvalidBlockLastCommitException>(
                () => new PreEvaluationBlockHeader(
                    metadata: invalidVoteSignatureMetadata,
                    nonce: _validGenesisProof.Nonce));

            // Some of the vote's height are invalid.
            var invalidVoteHeightLastCommit = new BlockCommit(
                1,
                0,
                blockHash,
                new[]
                {
                    voteA,
                    voteB,
                    new Vote(
                        2,
                        0,
                        blockHash,
                        timestamp,
                        validatorC.PublicKey,
                        VoteFlag.Commit,
                        null).Sign(validatorC),
                }.ToImmutableArray());
            var invalidVoteHeightMetadata = new BlockMetadata
            {
                Index = 2,
                Timestamp = DateTimeOffset.UtcNow,
                PublicKey = validatorA.PublicKey,
                Difficulty = 123,
                PreviousHash = _contents.GenesisHash,
                TxHash = HashDigest<SHA256>.FromString(
                    "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                ),
                LastCommit = invalidVoteHeightLastCommit,
            };
            Assert.Throws<InvalidBlockLastCommitException>(
                () => new PreEvaluationBlockHeader(
                    metadata: invalidVoteHeightMetadata,
                    nonce: _validGenesisProof.Nonce));

            // Signature can be null for null or unknown votes.
            var validLastCommit = new BlockCommit(
                1,
                0,
                blockHash,
                new[]
                {
                    voteA,
                    new Vote(
                        1,
                        0,
                        blockHash,
                        timestamp,
                        validatorB.PublicKey,
                        VoteFlag.Null,
                        null),
                    new Vote(
                        1,
                        0,
                        blockHash,
                        timestamp,
                        validatorC.PublicKey,
                        VoteFlag.Unknown,
                        null),
                }.ToImmutableArray());
            var validMetadata = new BlockMetadata
            {
                Index = 2,
                Timestamp = DateTimeOffset.UtcNow,
                PublicKey = validatorA.PublicKey,
                Difficulty = 123,
                PreviousHash = _contents.GenesisHash,
                TxHash = HashDigest<SHA256>.FromString(
                    "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                ),
                LastCommit = validLastCommit,
            };
            _ = new PreEvaluationBlockHeader(
                metadata: validMetadata,
                nonce: _validGenesisProof.Nonce);
        }

        [Fact]
        public void CopyConstructor()
        {
            BlockMetadata metadata = _contents.Genesis.Copy();
            var preEvalBlock = new PreEvaluationBlockHeader(
                metadata,
                nonce: _validGenesisProof.Nonce
            );
            var copy = new PreEvaluationBlockHeader(preEvalBlock);
            AssertPreEvaluationBlockHeadersEqual(preEvalBlock, copy);
        }

        [Fact]
        public void MakeCandidateData()
        {
            var random = new Random();

            Bencodex.Types.Dictionary expectedGenesis = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("difficulty", 0L)
                .Add("total_difficulty", 0L)
                .Add("nonce", _validGenesisProof.Nonce.ByteArray)
                .Add(
                    "public_key",
                    ParseHex("0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f")
                )
                .Add("protocol_version", 4)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                nonce: _validGenesisProof.Nonce,
                preEvaluationHash: _validGenesisProof.PreEvaluationHash
            );
            AssertBencodexEqual(expectedGenesis, genesis.MakeCandidateData(default));
            HashDigest<SHA256> stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedGenesis.SetItem("state_root_hash", stateRootHash.ByteArray),
                genesis.MakeCandidateData(stateRootHash)
            );

            Bencodex.Types.Dictionary expectedBlock1 = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("difficulty", 123L)
                .Add("total_difficulty", 123L)
                .Add("nonce", _validBlock1Proof.Nonce.ByteArray)
                .Add(
                    "public_key",
                    ParseHex("0215ba27a461a986f4ce7bcda1fd73dc708da767d0405729edaacaad7b7ff60eed")
                )
                .Add(
                    "previous_hash",
                    ParseHex(
                        "341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a"
                    )
                )
                .Add(
                    "transaction_fingerprint",
                    ParseHex(
                        "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                    )
                )
                .Add("protocol_version", 4)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            var block1 = new PreEvaluationBlockHeader(
                _contents.BlockMetadata1,
                nonce: _validBlock1Proof.Nonce
            );
            AssertBencodexEqual(expectedBlock1, block1.MakeCandidateData(default));
            stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedBlock1.SetItem("state_root_hash", stateRootHash.ByteArray),
                block1.MakeCandidateData(stateRootHash)
            );

            var blockPv0 = _contents.BlockPv0.Mine();
            Bencodex.Types.Dictionary expectedBlockPv0 = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("difficulty", 0L)
                .Add("nonce", blockPv0.Nonce.ByteArray)
                .Add("reward_beneficiary", ParseHex("268344BA46e6CA2A8a5096565548b9018bc687Ce"))
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            AssertBencodexEqual(expectedBlockPv0, blockPv0.MakeCandidateData(default));
            stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedBlockPv0.SetItem("state_root_hash", stateRootHash.ByteArray),
                blockPv0.MakeCandidateData(stateRootHash)
            );

            var blockPv1 = _contents.BlockPv1.Mine();
            Bencodex.Types.Dictionary expectedBlockPv1 = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("difficulty", 123L)
                .Add("nonce", blockPv1.Nonce.ByteArray)
                .Add("reward_beneficiary", ParseHex("8a29de186B85560D708451101C4Bf02D63b25c50"))
                .Add(
                    "previous_hash",
                    ParseHex("341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a")
                )
                .Add(
                    "transaction_fingerprint",
                    ParseHex("654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0")
                )
                .Add("protocol_version", 1)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            AssertBencodexEqual(expectedBlockPv1, blockPv1.MakeCandidateData(default));
            stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedBlockPv1.SetItem("state_root_hash", stateRootHash.ByteArray),
                blockPv1.MakeCandidateData(stateRootHash)
            );
        }

        [Fact]
        public void MakeSignature()
        {
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var key = _contents.Block1Key;
            var block1 = new PreEvaluationBlockHeader(
                _contents.BlockMetadata1,
                nonce: _validBlock1Proof.Nonce
            );
            ImmutableArray<byte> validSig = block1.MakeSignature(key, arbitraryHash);
            Assert.True(
                key.PublicKey.Verify(
                    _codec.Encode(block1.MakeCandidateData(arbitraryHash)),
                    validSig
                )
            );
            Assert.False(
                key.PublicKey.Verify(_codec.Encode(block1.MakeCandidateData(default)), validSig)
            );
            Assert.False(
                new PrivateKey().PublicKey.Verify(
                    _codec.Encode(block1.MakeCandidateData(arbitraryHash)),
                    validSig
                )
            );

            ArgumentException e = Assert.Throws<ArgumentException>(
                () => block1.MakeSignature(new PrivateKey(), arbitraryHash)
            );
            Assert.Equal("privateKey", e.ParamName);
            Assert.Contains("does not match", e.Message);

            var blockPv1 = new PreEvaluationBlockHeader(
                _contents.BlockPv1,
                _contents.BlockPv1.Mine().Nonce
            );
            InvalidOperationException e2 = Assert.Throws<InvalidOperationException>(
                () => blockPv1.MakeSignature(key, arbitraryHash)
            );
            Assert.Contains("protocol version", e2.Message);
        }

        [Fact]
        public void VerifySignature()
        {
            var random = new Random();
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.BlockMetadata1,
                nonce: _validBlock1Proof.Nonce
            );
            ImmutableArray<byte> validSig = ByteUtil.ParseHex(
                "3044022028e6e601515b98bf4a2e1f62f60f25af64ce9f07fe05de841e3b8343afbb375" +
                "002201aedbe000c2eeb4d2133952b0f73f6b8fe391b0b320b7338e115555f17d1bb76"
            ).ToImmutableArray();
            Assert.True(block1.VerifySignature(validSig, arbitraryHash));
            Assert.False(block1.VerifySignature(null, arbitraryHash));
            Assert.False(block1.VerifySignature(validSig, default));
            Assert.False(
                block1.VerifySignature(
                    random.NextBytes(validSig.Length).ToImmutableArray(),
                    arbitraryHash
                )
            );

            var blockPv1 = new PreEvaluationBlockHeader(
                _contents.BlockPv1,
                _contents.BlockPv1.Mine().Nonce
            );
            Assert.True(blockPv1.VerifySignature(null, arbitraryHash));
            Assert.False(blockPv1.VerifySignature(validSig, arbitraryHash));
        }

        [Fact]
        public void DeriveBlockHash()
        {
            Func<string, BlockHash> fromHex = BlockHash.FromString;
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                nonce: _validGenesisProof.Nonce,
                preEvaluationHash: _validGenesisProof.PreEvaluationHash
            );
            AssertBytesEqual(
                fromHex("cfde232ff689897a11c12b876e07dc1f432484fea62121e6d3dd80eecb99ab0d"),
                genesis.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("79868d07933739a89a93a8080c0299b00472e467c742c9b1cdcf98e05ca26e7b"),
                genesis.DeriveBlockHash(
                    default,
                    genesis.MakeSignature(_contents.GenesisKey, default)
                )
            );
            AssertBytesEqual(
                fromHex("04a8ef6e9c6f67dd70d7285c8d4dc064fc3e957b8c0029066ba66799699081ad"),
                genesis.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("09b6eb804778f44308d3c26ce80168fa45fb8d248679dfcba9f1e931185532ac"),
                genesis.DeriveBlockHash(
                    arbitraryHash,
                    genesis.MakeSignature(_contents.GenesisKey, arbitraryHash)
                )
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.BlockMetadata1,
                nonce: _validBlock1Proof.Nonce
            );
            AssertBytesEqual(
                fromHex("cb16e9de0ed9b33be1c455a0ed8b6c048dac020374a9bb3f2d11ac342b25f11c"),
                block1.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("6201b811d0db44aeef221506e7ff96f846595d3b042702a237495b706473ac2b"),
                block1.DeriveBlockHash(default, block1.MakeSignature(_contents.Block1Key, default))
            );
            AssertBytesEqual(
                fromHex("bfc13bc873cc031110c77982a8da93b98b4a774364beb7c81da2ba426a800613"),
                block1.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("5b0a68fe17c432fd183c9af80aeab21994f34c45e0c6500cc29a4d9f0067d4ac"),
                block1.DeriveBlockHash(
                    arbitraryHash,
                    block1.MakeSignature(_contents.Block1Key, arbitraryHash)
                )
            );
        }
    }
}
