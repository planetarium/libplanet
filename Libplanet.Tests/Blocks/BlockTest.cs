using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    public class BlockTest : IClassFixture<BlockFixture>
    {
        private BlockFixture _fx;

        public BlockTest(BlockFixture fixture) => _fx = fixture;

        [Fact]
        public void CanMine()
        {
            Assert.Equal(0, _fx.Genesis.Index);
            Assert.Equal(0, _fx.Genesis.Difficulty);
            Assert.Null(_fx.Genesis.PreviousHash);
            Assert.Equal(new DateTimeOffset(2018, 11, 29, 0, 0, 0, TimeSpan.Zero), _fx.Genesis.Timestamp);
            Assert.Equal(
                new Address("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                _fx.Genesis.RewardBeneficiary);
            Assert.Equal(new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }), _fx.Genesis.Nonce);
            AssertBytesEqual(
                new HashDigest<SHA256>(
                    new byte[]
                    {
                        0x16, 0xaf, 0x10, 0xab, 0xe2, 0x03, 0xe1, 0x2c, 0x35,
                        0x20, 0x52, 0xd3, 0x6c, 0x75, 0xed, 0xef, 0xbf, 0x26,
                        0x8b, 0xd3, 0xe6, 0x8e, 0xf0, 0x6b, 0x81, 0x93, 0xa0,
                        0xb6, 0x73, 0x78, 0xe1, 0x9f,
                    }
                ),
                _fx.Genesis.Hash
            );

            Block<BaseAction> next = MineNext(_fx.Genesis);

            Assert.Equal(1, _fx.Next.Index);
            Assert.Equal(1, _fx.Next.Difficulty);
            Assert.Equal(_fx.Genesis.Hash, _fx.Next.PreviousHash);
            Assert.Equal(new DateTimeOffset(2018, 11, 30, 0, 0, 0, TimeSpan.Zero), _fx.Next.Timestamp);
            Assert.Equal(
                new Address("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                _fx.Next.RewardBeneficiary);
        }

        [Fact]
        public void ToBencodex()
        {
            byte[] expected = new byte[185]
            {
                0x64, 0x31, 0x30, 0x3a, 0x64, 0x69, 0x66, 0x66, 0x69, 0x63,
                0x75, 0x6c, 0x74, 0x79, 0x69, 0x30, 0x65, 0x34, 0x3a, 0x68,
                0x61, 0x73, 0x68, 0x33, 0x32, 0x3a, 0x16, 0xaf, 0x10, 0xab,
                0xe2, 0x03, 0xe1, 0x2c, 0x35, 0x20, 0x52, 0xd3, 0x6c, 0x75,
                0xed, 0xef, 0xbf, 0x26, 0x8b, 0xd3, 0xe6, 0x8e, 0xf0, 0x6b,
                0x81, 0x93, 0xa0, 0xb6, 0x73, 0x78, 0xe1, 0x9f, 0x35, 0x3a,
                0x69, 0x6e, 0x64, 0x65, 0x78, 0x69, 0x30, 0x65, 0x35, 0x3a,
                0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x34, 0x3a, 0x01, 0x00, 0x00,
                0x00, 0x31, 0x38, 0x3a, 0x72, 0x65, 0x77, 0x61, 0x72, 0x64,
                0x5f, 0x62, 0x65, 0x6e, 0x65, 0x66, 0x69, 0x63, 0x69, 0x61,
                0x72, 0x79, 0x32, 0x30, 0x3a, 0x21, 0x74, 0x4f, 0x4f, 0x08,
                0xdb, 0x23, 0xe0, 0x44, 0x17, 0x8d, 0xaf, 0xb8, 0x27, 0x3a,
                0xeb, 0x5e, 0xbe, 0x66, 0x44, 0x39, 0x3a, 0x74, 0x69, 0x6d,
                0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x75, 0x32, 0x37, 0x3a,
                0x32, 0x30, 0x31, 0x38, 0x2d, 0x31, 0x31, 0x2d, 0x32, 0x39,
                0x54, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x2e,
                0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x5a, 0x31, 0x32, 0x3a,
                0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f,
                0x6e, 0x73, 0x6c, 0x65, 0x65,
            };

            AssertBytesEqual(expected, _fx.Genesis.ToBencodex(true, true));
        }

        [Fact]
        public void FromBencodex()
        {
            byte[] encoded =
            {
                0x64, 0x31, 0x30, 0x3a, 0x64, 0x69, 0x66, 0x66, 0x69, 0x63,
                0x75, 0x6c, 0x74, 0x79, 0x69, 0x31, 0x65, 0x34, 0x3a, 0x68,
                0x61, 0x73, 0x68, 0x33, 0x32, 0x3a, 0xfd, 0x53, 0xab, 0x50,
                0xb0, 0x64, 0xd2, 0xf9, 0x31, 0x08, 0x13, 0xa4, 0x36, 0x27,
                0x39, 0xce, 0x1a, 0x8d, 0x1e, 0xbe, 0x84, 0xd2, 0xdc, 0x7f,
                0xea, 0x98, 0x32, 0xe3, 0x2a, 0x68, 0x35, 0xf9, 0x35, 0x3a,
                0x69, 0x6e, 0x64, 0x65, 0x78, 0x69, 0x31, 0x65, 0x35, 0x3a,
                0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x34, 0x3a, 0x02, 0x00, 0x00,
                0x00, 0x31, 0x33, 0x3a, 0x70, 0x72, 0x65, 0x76, 0x69, 0x6f,
                0x75, 0x73, 0x5f, 0x68, 0x61, 0x73, 0x68, 0x33, 0x32, 0x3a,
                0x48, 0xad, 0xde, 0x9d, 0x65, 0x5c, 0x1c, 0x8c, 0x00, 0xf9,
                0x6f, 0x7c, 0x93, 0x61, 0x7b, 0xb8, 0x96, 0x3e, 0x68, 0x70,
                0xea, 0xab, 0x83, 0xbb, 0xe1, 0x4d, 0x6b, 0x62, 0xe4, 0xb4,
                0x6a, 0x5a, 0x31, 0x38, 0x3a, 0x72, 0x65, 0x77, 0x61, 0x72,
                0x64, 0x5f, 0x62, 0x65, 0x6e, 0x65, 0x66, 0x69, 0x63, 0x69,
                0x61, 0x72, 0x79, 0x32, 0x30, 0x3a, 0x21, 0x74, 0x4f, 0x4f,
                0x08, 0xdb, 0x23, 0xe0, 0x44, 0x17, 0x8d, 0xaf, 0xb8, 0x27,
                0x3a, 0xeb, 0x5e, 0xbe, 0x66, 0x44, 0x39, 0x3a, 0x74, 0x69,
                0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x75, 0x32, 0x37,
                0x3a, 0x32, 0x30, 0x31, 0x38, 0x2d, 0x31, 0x32, 0x2d, 0x30,
                0x31, 0x54, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x3a, 0x30, 0x30,
                0x2e, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x5a, 0x31, 0x32,
                0x3a, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69,
                0x6f, 0x6e, 0x73, 0x6c, 0x64, 0x37, 0x3a, 0x61, 0x63, 0x74,
                0x69, 0x6f, 0x6e, 0x73, 0x6c, 0x64, 0x75, 0x37, 0x3a, 0x74,
                0x79, 0x70, 0x65, 0x5f, 0x69, 0x64, 0x75, 0x36, 0x3a, 0x61,
                0x74, 0x74, 0x61, 0x63, 0x6b, 0x75, 0x36, 0x3a, 0x76, 0x61,
                0x6c, 0x75, 0x65, 0x73, 0x64, 0x75, 0x36, 0x3a, 0x74, 0x61,
                0x72, 0x67, 0x65, 0x74, 0x75, 0x33, 0x3a, 0x6f, 0x72, 0x63,
                0x75, 0x31, 0x34, 0x3a, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74,
                0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x32, 0x30,
                0x3a, 0xc2, 0xa8, 0x60, 0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a,
                0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa, 0x4f, 0x5c,
                0xbc, 0x75, 0x36, 0x3a, 0x77, 0x65, 0x61, 0x70, 0x6f, 0x6e,
                0x75, 0x34, 0x3a, 0x77, 0x61, 0x6e, 0x64, 0x65, 0x65, 0x64,
                0x75, 0x37, 0x3a, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x69, 0x64,
                0x75, 0x35, 0x3a, 0x73, 0x6c, 0x65, 0x65, 0x70, 0x75, 0x36,
                0x3a, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x64, 0x75, 0x37,
                0x3a, 0x7a, 0x6f, 0x6e, 0x65, 0x5f, 0x69, 0x64, 0x69, 0x31,
                0x30, 0x65, 0x65, 0x65, 0x65, 0x31, 0x30, 0x3a, 0x70, 0x75,
                0x62, 0x6c, 0x69, 0x63, 0x5f, 0x6b, 0x65, 0x79, 0x36, 0x35,
                0x3a, 0x04, 0x46, 0x11, 0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9,
                0x4a, 0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f, 0x3d,
                0x35, 0x2e, 0x68, 0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe,
                0x09, 0xf7, 0x32, 0x80, 0x87, 0x11, 0xec, 0x97, 0xaf, 0x6e,
                0x34, 0x1f, 0x11, 0x0a, 0x32, 0x6d, 0xa1, 0xbd, 0xb8, 0x1f,
                0x5a, 0xe3, 0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4,
                0x91, 0xae, 0xd3, 0xaa, 0xa2, 0x96, 0x39, 0x3a, 0x73, 0x69,
                0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x37, 0x30, 0x3a,
                0x30, 0x44, 0x02, 0x20, 0x3c, 0x4c, 0xf2, 0x21, 0xff, 0x4c,
                0xa8, 0x55, 0xa9, 0x7a, 0x2f, 0x4b, 0x91, 0x26, 0x34, 0x8d,
                0xc5, 0x45, 0x7c, 0x6e, 0xc0, 0x2c, 0xfb, 0xbf, 0x65, 0x5b,
                0xdc, 0xb9, 0x1e, 0x7a, 0x8b, 0x0f, 0x02, 0x20, 0x5d, 0xb2,
                0xad, 0xf0, 0xae, 0xb2, 0xce, 0x48, 0x44, 0x1b, 0x86, 0x9a,
                0x63, 0x86, 0x25, 0xac, 0x4c, 0xe1, 0x5d, 0x8e, 0x40, 0xb6,
                0x95, 0xae, 0x8c, 0xd9, 0x4e, 0x19, 0x27, 0xaa, 0xdd, 0x03,
                0x36, 0x3a, 0x73, 0x69, 0x67, 0x6e, 0x65, 0x72, 0x32, 0x30,
                0x3a, 0xc2, 0xa8, 0x60, 0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a,
                0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa, 0x4f, 0x5c,
                0xbc, 0x39, 0x3a, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
                0x6d, 0x70, 0x75, 0x32, 0x37, 0x3a, 0x32, 0x30, 0x31, 0x38,
                0x2d, 0x31, 0x31, 0x2d, 0x32, 0x31, 0x54, 0x30, 0x30, 0x3a,
                0x30, 0x30, 0x3a, 0x30, 0x30, 0x2e, 0x30, 0x30, 0x30, 0x30,
                0x30, 0x30, 0x5a, 0x31, 0x37, 0x3a, 0x75, 0x70, 0x64, 0x61,
                0x74, 0x65, 0x64, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73,
                0x73, 0x65, 0x73, 0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60, 0x14,
                0x07, 0x3d, 0x66, 0x2a, 0x4a, 0x9b, 0xfc, 0xf9, 0xcb, 0x54,
                0x26, 0x3d, 0xfa, 0x4f, 0x5c, 0xbc, 0x65, 0x65, 0x65,
            };
            Block<BaseAction> actual = Block<BaseAction>.FromBencodex(encoded);
            Assert.Equal(_fx.HasTx, actual);
        }

        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "SA1118",
            Justification = "Long array literals should be multiline.")]
        [Fact]
        public void EvaluateActions()
        {
            ImmutableArray<Address> addresses = Enumerable.Range(0, 4)
                .Select(_ => new Address(new PrivateKey().PublicKey))
                .ToImmutableArray();
            Attack MakeAction(Address address, char identifier) =>
                new Attack
                {
                    Weapon = $"w{identifier}",
                    Target = $"t{identifier}",
                    TargetAddress = address,
                };

            Block<BaseAction> genesis = MineGenesis<BaseAction>();
            Block<BaseAction> blockIdx1 = MineNext(
                genesis,
                new[]
                {
                    Transaction<BaseAction>.Make(
                        _fx.TxFixture.PrivateKey,
                        ImmutableHashSet<Address>.Empty,
                        new BaseAction[]
                        {
                            MakeAction(addresses[0], 'A'),
                            MakeAction(addresses[1], 'B'),
                        },
                        DateTimeOffset.UtcNow
                    ),
                    Transaction<BaseAction>.Make(
                        _fx.TxFixture.PrivateKey,
                        ImmutableHashSet<Address>.Empty,
                        new BaseAction[] { MakeAction(addresses[2], 'C') },
                        DateTimeOffset.UtcNow
                    ),
                }
            );
            IImmutableDictionary<Address, object> dirty1 =
                blockIdx1.EvaluateActions(address => null)
                    .Last().GetUpdatedStates();
            Assert.Equal(
                new Dictionary<Address, object>
                {
                    [addresses[0]] = new BattleResult(
                        usedWeapons: new[] { "wA" },
                        targets: new[] { "tA" }
                    ),
                    [addresses[1]] = new BattleResult(
                        usedWeapons: new[] { "wB" },
                        targets: new[] { "tB" }
                    ),
                    [addresses[2]] = new BattleResult(
                        usedWeapons: new[] { "wC" },
                        targets: new[] { "tC" }
                    ),
                }.ToImmutableDictionary(),
                dirty1
            );

            Block<BaseAction> blockIdx2 = MineNext(
                blockIdx1,
                new[]
                {
                    Transaction<BaseAction>.Make(
                        _fx.TxFixture.PrivateKey,
                        ImmutableHashSet<Address>.Empty,
                        new BaseAction[] { MakeAction(addresses[0], 'D') },
                        DateTimeOffset.UtcNow
                    ),
                    Transaction<BaseAction>.Make(
                        _fx.TxFixture.PrivateKey,
                        ImmutableHashSet<Address>.Empty,
                        new BaseAction[] { MakeAction(addresses[3], 'E') },
                        DateTimeOffset.UtcNow
                    ),
                }
            );
            IImmutableDictionary<Address, object> dirty2 =
                blockIdx2.EvaluateActions(dirty1.GetValueOrDefault)
                    .Last().GetUpdatedStates();
            Assert.Equal(
                new Dictionary<Address, object>
                {
                    [addresses[0]] = new BattleResult(
                        usedWeapons: new[] { "wA", "wD" },
                        targets: new[] { "tA", "tD" }
                    ),
                    [addresses[3]] = new BattleResult(
                        usedWeapons: new[] { "wE" },
                        targets: new[] { "tE" }
                    ),
                }.ToImmutableDictionary(),
                dirty2
            );
        }

        [Fact]
        public void CanValidate()
        {
            _fx.Genesis.Validate();
            _fx.Next.Validate();
        }

        [Fact]
        public void CanDetectInvalidTimestamp()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            var block = Block<BaseAction>.Mine(
                _fx.Next.Index,
                _fx.Next.Difficulty,
                _fx.Next.RewardBeneficiary.Value,
                _fx.Genesis.Hash,
                now + TimeSpan.FromSeconds(901),
                new Transaction<BaseAction>[] { }
            );

            Assert.Throws<InvalidBlockTimestampException>(
                () => { block.Validate(now); });

            // it's okay because 2 seconds later.
            block.Validate(now + TimeSpan.FromSeconds(2));
        }

        [Fact]
        public void CanDetectInvalidNonce()
        {
            var invalidBlock = new Block<BaseAction>(
                index: _fx.Next.Index,
                difficulty: _fx.Next.Difficulty,
                nonce: new Nonce(new byte[] { 0x00 }),
                rewardBeneficiary: _fx.Next.RewardBeneficiary,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions
            );

            Assert.Throws<InvalidBlockNonceException>(() => { invalidBlock.Validate(); });
        }

        [Fact]
        public void CanDetectInvalidDifficulty()
        {
            var invalidGenesis = new Block<BaseAction>(
                index: _fx.Genesis.Index,
                difficulty: 1, // invalid
                nonce: _fx.Genesis.Nonce,
                rewardBeneficiary: _fx.Genesis.RewardBeneficiary,
                previousHash: _fx.Genesis.PreviousHash,
                timestamp: _fx.Genesis.Timestamp,
                transactions: _fx.Genesis.Transactions
            );
            Assert.Throws<InvalidBlockDifficultyException>(() => { invalidGenesis.Validate(); });

            var invalidNext = new Block<BaseAction>(
                index: _fx.Next.Index,
                difficulty: 0, // invalid
                nonce: _fx.Next.Nonce,
                rewardBeneficiary: _fx.Next.RewardBeneficiary,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions
            );
            Assert.Throws<InvalidBlockDifficultyException>(() => { invalidNext.Validate(); });
        }

        [Fact]
        public void CanDetectInvalidPreviousHash()
        {
            var invalidGenesis = new Block<BaseAction>(
                index: _fx.Genesis.Index,
                difficulty: _fx.Genesis.Difficulty,
                nonce: _fx.Genesis.Nonce,
                rewardBeneficiary: _fx.Genesis.RewardBeneficiary,
                previousHash: new HashDigest<SHA256>(GetRandomBytes(32)), // invalid
                timestamp: _fx.Genesis.Timestamp,
                transactions: _fx.Genesis.Transactions
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() => { invalidGenesis.Validate(); });

            var invalidNext = new Block<BaseAction>(
                index: _fx.Next.Index,
                difficulty: _fx.Next.Difficulty,
                nonce: _fx.Next.Nonce,
                rewardBeneficiary: _fx.Next.RewardBeneficiary,
                previousHash: null,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() => { invalidNext.Validate(); });
        }

        [Fact]
        public void CanConvertToRaw()
        {
            RawBlock rawGenesis = _fx.Genesis.ToRawBlock(true, true);
            Assert.Equal(0, rawGenesis.Index);
            Assert.Equal(0, rawGenesis.Difficulty);
            Assert.Null(rawGenesis.PreviousHash);
            Assert.Equal("2018-11-29T00:00:00.000000Z", rawGenesis.Timestamp);
            Assert.Equal(
                ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                rawGenesis.RewardBeneficiary
            );
            Assert.Equal(
                new byte[] { 0x01, 0x00, 0x00, 0x00 },
                rawGenesis.Nonce
            );
            AssertBytesEqual(
                new byte[32]
                {
                    0x16, 0xaf, 0x10, 0xab, 0xe2, 0x03, 0xe1, 0x2c, 0x35, 0x20,
                    0x52, 0xd3, 0x6c, 0x75, 0xed, 0xef, 0xbf, 0x26, 0x8b, 0xd3,
                    0xe6, 0x8e, 0xf0, 0x6b, 0x81, 0x93, 0xa0, 0xb6, 0x73, 0x78,
                    0xe1, 0x9f,
                },
                rawGenesis.Hash
            );

            RawBlock rawNext = _fx.Next.ToRawBlock(false, false);

            Assert.Equal(1, rawNext.Index);
            Assert.Equal(1, rawNext.Difficulty);
            Assert.Equal(rawGenesis.Hash, rawNext.PreviousHash);
            Assert.Equal("2018-11-30T00:00:00.000000Z", rawNext.Timestamp);
            Assert.Equal(
                ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                rawNext.RewardBeneficiary
             );
        }

        [Fact]
        public void CanCompareToOtherBlock()
        {
            Block<BaseAction> sameBlock1 = _fx.Genesis;
            var sameBlock2 = new Block<BaseAction>(
                index: sameBlock1.Index,
                difficulty: sameBlock1.Difficulty,
                nonce: sameBlock1.Nonce,
                rewardBeneficiary: sameBlock1.RewardBeneficiary,
                previousHash: null,
                timestamp: sameBlock1.Timestamp,
                transactions: sameBlock1.Transactions
            );
            Block<BaseAction> differentBlock = _fx.Next;

            Assert.Equal(sameBlock1, sameBlock2);
            Assert.NotEqual(sameBlock2, differentBlock);

            Assert.True(sameBlock1 == sameBlock2);
            Assert.False(sameBlock2 == differentBlock);

            Assert.False(sameBlock1 != sameBlock2);
            Assert.True(sameBlock2 != differentBlock);
        }
    }
}
