using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
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
        public void Transactions()
        {
            // Creates fixtures.
            PrivateKey[] privKeys =
                Enumerable.Repeat((object)null, 5).Select(_ => new PrivateKey()).ToArray();
            var random = new System.Random();
            Transaction<DumbAction>[] txs = Enumerable.Range(0, 50)
                .Select(i => (privKeys[i % privKeys.Length], i / privKeys.Length))
                .Select(pair =>
                    Transaction<DumbAction>.Create(
                        nonce: pair.Item2,
                        privateKey: pair.Item1,
                        actions: new DumbAction[0]
                    )
                )
                .OrderBy(_ => random.Next())
                .ToArray();
            var block = new Block<DumbAction>(
                index: 0,
                difficulty: 0,
                nonce: new Nonce(new byte[0]),
                miner: null,
                previousHash: null,
                timestamp: DateTimeOffset.UtcNow,
                transactions: txs
            );

            // For transactions signed by the same signer, these should be ordered by its tx nonce.
            Address[] signers = privKeys.Select(pk => pk.PublicKey.ToAddress()).ToArray();
            foreach (Address signer in signers)
            {
                IEnumerable<Transaction<DumbAction>> signersTxs =
                    block.Transactions.Where(tx => tx.Signer == signer);
                Assert.Equal(signersTxs.OrderBy(tx => tx.Nonce).ToArray(), signersTxs.ToArray());
            }
        }

        [Fact]
        public void CanMine()
        {
            Assert.Equal(0, _fx.Genesis.Index);
            Assert.Equal(0, _fx.Genesis.Difficulty);
            Assert.Null(_fx.Genesis.PreviousHash);
            Assert.Equal(
                new DateTimeOffset(2018, 11, 29, 0, 0, 0, TimeSpan.Zero),
                _fx.Genesis.Timestamp
            );
            Assert.Equal(
                new Address("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                _fx.Genesis.Miner);
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

            Block<PolymorphicAction<BaseAction>> next = MineNext(_fx.Genesis);

            Assert.Equal(1, _fx.Next.Index);
            Assert.Equal(1, _fx.Next.Difficulty);
            Assert.Equal(_fx.Genesis.Hash, _fx.Next.PreviousHash);
            Assert.Equal(
                new DateTimeOffset(2018, 11, 30, 0, 0, 0, TimeSpan.Zero),
                _fx.Next.Timestamp
            );
            Assert.Equal(
                new Address("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                _fx.Next.Miner);
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
                0x61, 0x73, 0x68, 0x33, 0x32, 0x3a, 0x04, 0x78, 0x4e, 0xe5,
                0xde, 0xd4, 0xb2, 0xea, 0xcc, 0xf0, 0xca, 0x36, 0xa1, 0x0d,
                0xe2, 0xbd, 0xc0, 0xb5, 0x7b, 0xfb, 0xa2, 0xed, 0x23, 0xf4,
                0x77, 0x37, 0xcb, 0x17, 0x2e, 0xd2, 0xe3, 0x0f, 0x35, 0x3a,
                0x69, 0x6e, 0x64, 0x65, 0x78, 0x69, 0x32, 0x65, 0x35, 0x3a,
                0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x31, 0x30, 0x3a, 0x5c, 0x77,
                0x74, 0xc2, 0x39, 0x69, 0x37, 0x51, 0x87, 0xa5, 0x31, 0x33,
                0x3a, 0x70, 0x72, 0x65, 0x76, 0x69, 0x6f, 0x75, 0x73, 0x5f,
                0x68, 0x61, 0x73, 0x68, 0x33, 0x32, 0x3a, 0x48, 0xad, 0xde,
                0x9d, 0x65, 0x5c, 0x1c, 0x8c, 0x00, 0xf9, 0x6f, 0x7c, 0x93,
                0x61, 0x7b, 0xb8, 0x96, 0x3e, 0x68, 0x70, 0xea, 0xab, 0x83,
                0xbb, 0xe1, 0x4d, 0x6b, 0x62, 0xe4, 0xb4, 0x6a, 0x5a, 0x31,
                0x38, 0x3a, 0x72, 0x65, 0x77, 0x61, 0x72, 0x64, 0x5f, 0x62,
                0x65, 0x6e, 0x65, 0x66, 0x69, 0x63, 0x69, 0x61, 0x72, 0x79,
                0x32, 0x30, 0x3a, 0x21, 0x74, 0x4f, 0x4f, 0x08, 0xdb, 0x23,
                0xe0, 0x44, 0x17, 0x8d, 0xaf, 0xb8, 0x27, 0x3a, 0xeb, 0x5e,
                0xbe, 0x66, 0x44, 0x39, 0x3a, 0x74, 0x69, 0x6d, 0x65, 0x73,
                0x74, 0x61, 0x6d, 0x70, 0x75, 0x32, 0x37, 0x3a, 0x32, 0x30,
                0x31, 0x38, 0x2d, 0x31, 0x32, 0x2d, 0x30, 0x31, 0x54, 0x30,
                0x30, 0x3a, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x2e, 0x30, 0x30,
                0x30, 0x30, 0x30, 0x30, 0x5a, 0x31, 0x32, 0x3a, 0x74, 0x72,
                0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73,
                0x6c, 0x64, 0x37, 0x3a, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e,
                0x73, 0x6c, 0x64, 0x75, 0x37, 0x3a, 0x74, 0x79, 0x70, 0x65,
                0x5f, 0x69, 0x64, 0x75, 0x36, 0x3a, 0x61, 0x74, 0x74, 0x61,
                0x63, 0x6b, 0x75, 0x36, 0x3a, 0x76, 0x61, 0x6c, 0x75, 0x65,
                0x73, 0x64, 0x75, 0x36, 0x3a, 0x74, 0x61, 0x72, 0x67, 0x65,
                0x74, 0x75, 0x33, 0x3a, 0x6f, 0x72, 0x63, 0x75, 0x31, 0x34,
                0x3a, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x61, 0x64,
                0x64, 0x72, 0x65, 0x73, 0x73, 0x32, 0x30, 0x3a, 0xc2, 0xa8,
                0x60, 0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a, 0x9b, 0xfc, 0xf9,
                0xcb, 0x54, 0x26, 0x3d, 0xfa, 0x4f, 0x5c, 0xbc, 0x75, 0x36,
                0x3a, 0x77, 0x65, 0x61, 0x70, 0x6f, 0x6e, 0x75, 0x34, 0x3a,
                0x77, 0x61, 0x6e, 0x64, 0x65, 0x65, 0x64, 0x75, 0x37, 0x3a,
                0x74, 0x79, 0x70, 0x65, 0x5f, 0x69, 0x64, 0x75, 0x35, 0x3a,
                0x73, 0x6c, 0x65, 0x65, 0x70, 0x75, 0x36, 0x3a, 0x76, 0x61,
                0x6c, 0x75, 0x65, 0x73, 0x64, 0x75, 0x37, 0x3a, 0x7a, 0x6f,
                0x6e, 0x65, 0x5f, 0x69, 0x64, 0x69, 0x31, 0x30, 0x65, 0x65,
                0x65, 0x65, 0x35, 0x3a, 0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x69,
                0x30, 0x65, 0x31, 0x30, 0x3a, 0x70, 0x75, 0x62, 0x6c, 0x69,
                0x63, 0x5f, 0x6b, 0x65, 0x79, 0x36, 0x35, 0x3a, 0x04, 0x46,
                0x11, 0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9, 0x4a, 0x58, 0x56,
                0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f, 0x3d, 0x35, 0x2e, 0x68,
                0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09, 0xf7, 0x32,
                0x80, 0x87, 0x11, 0xec, 0x97, 0xaf, 0x6e, 0x34, 0x1f, 0x11,
                0x0a, 0x32, 0x6d, 0xa1, 0xbd, 0xb8, 0x1f, 0x5a, 0xe3, 0xba,
                0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4, 0x91, 0xae, 0xd3,
                0xaa, 0xa2, 0x96, 0x39, 0x3a, 0x73, 0x69, 0x67, 0x6e, 0x61,
                0x74, 0x75, 0x72, 0x65, 0x37, 0x30, 0x3a, 0x30, 0x44, 0x02,
                0x20, 0x6c, 0xad, 0x62, 0xd5, 0x1f, 0x70, 0x21, 0xe7, 0x05,
                0x7c, 0xf0, 0x5d, 0xfe, 0xae, 0x0b, 0xbe, 0xcc, 0x7b, 0x35,
                0x23, 0xba, 0x36, 0xaf, 0x46, 0xc1, 0x74, 0x00, 0x74, 0x05,
                0xda, 0x61, 0x14, 0x02, 0x20, 0x37, 0x5d, 0x2e, 0xd1, 0x5c,
                0x91, 0x94, 0xb1, 0xb0, 0x0d, 0xea, 0x25, 0xaf, 0x1e, 0x16,
                0x87, 0x1d, 0x34, 0xa6, 0x30, 0x70, 0xea, 0x6b, 0xaa, 0x5e,
                0x95, 0x1d, 0x2f, 0xe6, 0xc6, 0x11, 0xba, 0x36, 0x3a, 0x73,
                0x69, 0x67, 0x6e, 0x65, 0x72, 0x32, 0x30, 0x3a, 0xc2, 0xa8,
                0x60, 0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a, 0x9b, 0xfc, 0xf9,
                0xcb, 0x54, 0x26, 0x3d, 0xfa, 0x4f, 0x5c, 0xbc, 0x39, 0x3a,
                0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x75,
                0x32, 0x37, 0x3a, 0x32, 0x30, 0x31, 0x38, 0x2d, 0x31, 0x31,
                0x2d, 0x32, 0x31, 0x54, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x3a,
                0x30, 0x30, 0x2e, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x5a,
                0x31, 0x37, 0x3a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64,
                0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x65, 0x73,
                0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60, 0x14, 0x07, 0x3d, 0x66,
                0x2a, 0x4a, 0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa,
                0x4f, 0x5c, 0xbc, 0x65, 0x65, 0x65,
            };
            Block<PolymorphicAction<BaseAction>> actual =
                Block<PolymorphicAction<BaseAction>>.FromBencodex(encoded);
            Assert.Equal(_fx.HasTx, actual);
        }

        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "SA1118",
            Justification = "Long array literals should be multiline.")]
        [Fact]
        public void EvaluateActionsPerTx()
        {
            Address[] addresses =
            {
                _fx.TxFixture.Address1,
                _fx.TxFixture.Address2,
                _fx.TxFixture.Address3,
                _fx.TxFixture.Address4,
                _fx.TxFixture.Address5,
            };
            DumbAction MakeAction(Address address, char identifier) =>
                new DumbAction(address, identifier.ToString(), false, true);

            Block<DumbAction> genesis = MineGenesis<DumbAction>();
            Assert.Empty(genesis.EvaluateActionsPerTx(address => null));

            Transaction<DumbAction>[] blockIdx1Txs =
            {
                Transaction<DumbAction>.Create(
                    0,
                    _fx.TxFixture.PrivateKey1,
                    new[] { MakeAction(addresses[0], 'A'), MakeAction(addresses[1], 'B') },
                    timestamp: DateTimeOffset.MinValue
                ),
                Transaction<DumbAction>.Create(
                    0,
                    _fx.TxFixture.PrivateKey2,
                    new[] { MakeAction(addresses[2], 'C') },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(1)
                ),
            };
            Block<DumbAction> blockIdx1 = MineNext(genesis, blockIdx1Txs, new byte[] { });
            var pairs = blockIdx1
                .EvaluateActionsPerTx(address => null)
                .ToImmutableArray();
            int randomValue = 0;
            (int, int, string[], Address)[] expectations =
            {
                (0, 0, new[] { "A", null, null, null, null }, _fx.TxFixture.Address1),
                (0, 1, new[] { "A", "B", null, null, null }, _fx.TxFixture.Address1),
                (1, 0, new[] { "A", "B", "C", null, null }, _fx.TxFixture.Address2),
            };
            Assert.Equal(expectations.Length, pairs.Length);
            foreach (
                var (expect, pair) in expectations.Zip(pairs, ValueTuple.Create)
            )
            {
                ActionEvaluation eval = pair.Item2;
                Assert.Equal(blockIdx1Txs[expect.Item1], pair.Item1);
                Assert.Equal(blockIdx1Txs[expect.Item1].Actions[expect.Item2], eval.Action);
                Assert.Equal(expect.Item4, eval.InputContext.Signer);
                Assert.Equal(GenesisMinerAddress, eval.InputContext.Miner);
                Assert.Equal(blockIdx1.Index, eval.InputContext.BlockIndex);
                Assert.False(eval.InputContext.Rehearsal);
                randomValue = eval.InputContext.Random.Next();
                Assert.Equal(
                    (Integer)eval.OutputStates.GetState(
                        DumbAction.RandomRecordsAddress
                    ),
                    (Integer)randomValue
                );
                Assert.Equal(
                    expect.Item3,
                    addresses.Select(eval.OutputStates.GetState)
                        .Select(x => x is Text t ? t.Value : null));
            }

            IImmutableDictionary<Address, IValue> dirty1 = blockIdx1
                .Evaluate(DateTimeOffset.UtcNow, address => null)
                .Aggregate(
                    ImmutableDictionary<Address, IValue>.Empty,
                    (dirty, ev) => dirty.SetItems(ev.OutputStates.GetUpdatedStates())
                );
            Assert.Equal(
                new Dictionary<Address, IValue>
                {
                    [addresses[0]] = (Text)"A",
                    [addresses[1]] = (Text)"B",
                    [addresses[2]] = (Text)"C",
                    [DumbAction.RandomRecordsAddress] = (Integer)randomValue,
                }.ToImmutableDictionary(),
                dirty1
            );

            Transaction<DumbAction>[] blockIdx2Txs =
            {
                Transaction<DumbAction>.Create(
                    0,
                    _fx.TxFixture.PrivateKey1,
                    new[] { MakeAction(addresses[0], 'D') },
                    timestamp: DateTimeOffset.MinValue
                ),
                Transaction<DumbAction>.Create(
                    0,
                    _fx.TxFixture.PrivateKey2,
                    new[] { MakeAction(addresses[3], 'E') },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(2)
                ),
                Transaction<DumbAction>.Create(
                    0,
                    _fx.TxFixture.PrivateKey3,
                    new[]
                    {
                        new DumbAction(
                            addresses[4],
                            "RecordRehearsal",
                            recordRehearsal: true,
                            recordRandom: true
                        ),
                    },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(7)
                ),
            };

            Block<DumbAction> blockIdx2 = MineNext(blockIdx1, blockIdx2Txs, new byte[] { });
            pairs = blockIdx2
                .EvaluateActionsPerTx(dirty1.GetValueOrDefault)
                .ToImmutableArray();
            expectations = new[]
            {
                (0, 0, new[] { "A,D", "B", "C", null, null }, _fx.TxFixture.Address1),
                (1, 0, new[] { "A,D", "B", "C", "E", null }, _fx.TxFixture.Address2),
                (
                    2,
                    0,
                    new[] { "A,D", "B", "C", "E", "RecordRehearsal:False" },
                    _fx.TxFixture.Address3
                ),
            };
            Assert.Equal(expectations.Length, pairs.Length);
            foreach (var (expect, pair) in expectations.Zip(pairs, ValueTuple.Create))
            {
                ActionEvaluation eval = pair.Item2;
                Assert.Equal(blockIdx2Txs[expect.Item1], pair.Item1);
                Assert.Equal(
                    blockIdx2Txs[expect.Item1].Actions[expect.Item2],
                    eval.Action
                );
                Assert.Equal(expect.Item4, eval.InputContext.Signer);
                Assert.Equal(GenesisMinerAddress, eval.InputContext.Miner);
                Assert.Equal(blockIdx2.Index, eval.InputContext.BlockIndex);
                Assert.False(eval.InputContext.Rehearsal);
                randomValue = eval.InputContext.Random.Next();
                Assert.Equal(
                    eval.OutputStates.GetState(
                        DumbAction.RandomRecordsAddress
                    ),
                    (Integer)randomValue
                );
                Assert.Equal(
                    expect.Item3,
                    addresses
                        .Select(eval.OutputStates.GetState)
                        .Select(x => x is Text t ? t.Value : null));
            }

            IImmutableDictionary<Address, IValue> dirty2 = blockIdx2
                .Evaluate(DateTimeOffset.UtcNow, dirty1.GetValueOrDefault)
                .Aggregate(
                    ImmutableDictionary<Address, IValue>.Empty,
                    (dirty, ev) => dirty.SetItems(ev.OutputStates.GetUpdatedStates())
                );
            Assert.Equal(
                new Dictionary<Address, IValue>
                {
                    [addresses[0]] = (Text)"A,D",
                    [addresses[3]] = (Text)"E",
                    [addresses[4]] = (Text)"RecordRehearsal:False",
                    [DumbAction.RandomRecordsAddress] = (Integer)randomValue,
                }.ToImmutableDictionary(),
                dirty2
            );
        }

        [Fact]
        public void EvaluateInvalidTxSignature()
        {
            RawTransaction rawTx = new RawTransaction(
                0,
                _fx.TxFixture.Address1.ByteArray,
                ImmutableArray<ImmutableArray<byte>>.Empty,
                _fx.TxFixture.PublicKey1.Format(false).ToImmutableArray(),
                DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.ffffffZ"),
                default(List),
                new byte[10].ToImmutableArray()
            );
            var invalidTx = new Transaction<DumbAction>(rawTx);
            Block<DumbAction> invalidBlock = MineNext(
                MineGenesis<DumbAction>(),
                new List<Transaction<DumbAction>> { invalidTx }
            );
            Assert.Throws<InvalidTxSignatureException>(() =>
                invalidBlock.Evaluate(DateTimeOffset.UtcNow, _ => null)
            );
        }

        [Fact]
        public void EvaluateInvalidTxPublicKey()
        {
            RawTransaction rawTxWithoutSig = new RawTransaction(
                0,
                new PrivateKey().PublicKey.ToAddress().ByteArray,
                ImmutableArray<ImmutableArray<byte>>.Empty,
                _fx.TxFixture.PublicKey1.Format(false).ToImmutableArray(),
                DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.ffffffZ"),
                default(List),
                ImmutableArray<byte>.Empty
            );
            byte[] sig = _fx.TxFixture.PrivateKey1.Sign(
                new Transaction<DumbAction>(rawTxWithoutSig).ToBencodex(false)
            );
            var invalidTx = new Transaction<DumbAction>(
                new RawTransaction(
                    0,
                    rawTxWithoutSig.Signer,
                    rawTxWithoutSig.UpdatedAddresses,
                    rawTxWithoutSig.PublicKey,
                    rawTxWithoutSig.Timestamp,
                    rawTxWithoutSig.Actions,
                    sig.ToImmutableArray()
                )
            );
            Block<DumbAction> invalidBlock = MineNext(
                MineGenesis<DumbAction>(),
                new List<Transaction<DumbAction>> { invalidTx }
            );
            Assert.Throws<InvalidTxPublicKeyException>(() =>
                invalidBlock.Evaluate(DateTimeOffset.UtcNow, _ => null)
            );
        }

        [Fact]
        public void EvaluateInvalidTxUpdatedAddresses()
        {
            ImmutableArray<IValue> rawActions =
                _fx.TxFixture.TxWithActions
                    .ToRawTransaction(false).Actions.ToImmutableArray();
            RawTransaction rawTxWithoutSig = new RawTransaction(
                0,
                _fx.TxFixture.Address1.ByteArray,
                ImmutableArray<ImmutableArray<byte>>.Empty,
                _fx.TxFixture.PublicKey1.Format(false).ToImmutableArray(),
                DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.ffffffZ"),
                rawActions,
                ImmutableArray<byte>.Empty
            );
            byte[] sig = _fx.TxFixture.PrivateKey1.Sign(
                new Transaction<PolymorphicAction<BaseAction>>(
                    rawTxWithoutSig
                ).ToBencodex(false)
            );
            var invalidTx = new Transaction<PolymorphicAction<BaseAction>>(
                new RawTransaction(
                    0,
                    rawTxWithoutSig.Signer,
                    rawTxWithoutSig.UpdatedAddresses,
                    rawTxWithoutSig.PublicKey,
                    rawTxWithoutSig.Timestamp,
                    rawTxWithoutSig.Actions,
                    sig.ToImmutableArray()
                )
            );
            Block<PolymorphicAction<BaseAction>> invalidBlock = MineNext(
                _fx.Genesis,
                new List<Transaction<PolymorphicAction<BaseAction>>>
                {
                    invalidTx,
                }
            );
            Assert.Throws<InvalidTxUpdatedAddressesException>(() =>
                invalidBlock.Evaluate(DateTimeOffset.UtcNow, _ => null)
            );
        }

        [Fact]
        public void CanDetectInvalidTimestamp()
        {
            DateTimeOffset now = DateTimeOffset.UtcNow;
            var block = Block<DumbAction>.Mine(
                _fx.Next.Index,
                _fx.Next.Difficulty,
                _fx.Next.Miner.Value,
                _fx.Genesis.Hash,
                now + TimeSpan.FromSeconds(901),
                new Transaction<DumbAction>[] { }
            );

            Assert.Throws<InvalidBlockTimestampException>(
                () => { block.Validate(now); });

            // it's okay because 2 seconds later.
            block.Validate(now + TimeSpan.FromSeconds(2));
        }

        [Fact]
        public void DetectInvalidNonce()
        {
            const int easyDifficulty = 4;
            var invalidBlock = new Block<PolymorphicAction<BaseAction>>(
                index: _fx.Next.Index,
                difficulty: easyDifficulty,
                nonce: new Nonce(new byte[] { 0x00 }),
                miner: _fx.Next.Miner,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions);

            Assert.Throws<InvalidBlockNonceException>(() =>
                invalidBlock.Validate(DateTimeOffset.UtcNow));
        }

        [Fact]
        public void DetectInvalidDifficulty()
        {
            var invalidGenesis = new Block<DumbAction>(
                index: _fx.Genesis.Index,
                difficulty: 1, // invalid
                nonce: _fx.Genesis.Nonce,
                miner: _fx.Genesis.Miner,
                previousHash: _fx.Genesis.PreviousHash,
                timestamp: _fx.Genesis.Timestamp,
                transactions: MineGenesis<DumbAction>().Transactions
            );
            Assert.Throws<InvalidBlockDifficultyException>(() =>
                invalidGenesis.Validate(DateTimeOffset.UtcNow)
            );

            var invalidNext = new Block<PolymorphicAction<BaseAction>>(
                index: _fx.Next.Index,
                difficulty: 0, // invalid
                nonce: _fx.Next.Nonce,
                miner: _fx.Next.Miner,
                previousHash: _fx.Next.PreviousHash,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions
            );
            Assert.Throws<InvalidBlockDifficultyException>(() =>
                invalidNext.Validate(DateTimeOffset.UtcNow)
            );
        }

        [Fact]
        public void DetectInvalidPreviousHash()
        {
            var invalidGenesis = new Block<DumbAction>(
                index: _fx.Genesis.Index,
                difficulty: _fx.Genesis.Difficulty,
                nonce: _fx.Genesis.Nonce,
                miner: _fx.Genesis.Miner,
                previousHash: new HashDigest<SHA256>(GetRandomBytes(32)), // invalid
                timestamp: _fx.Genesis.Timestamp,
                transactions: MineGenesis<DumbAction>().Transactions
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                invalidGenesis.Validate(DateTimeOffset.UtcNow)
            );

            var invalidNext = new Block<PolymorphicAction<BaseAction>>(
                index: _fx.Next.Index,
                difficulty: _fx.Next.Difficulty,
                nonce: _fx.Next.Nonce,
                miner: _fx.Next.Miner,
                previousHash: null,
                timestamp: _fx.Next.Timestamp,
                transactions: _fx.Next.Transactions
            );

            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                invalidNext.Validate(DateTimeOffset.UtcNow)
            );
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
                rawGenesis.Miner
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
                rawNext.Miner
             );
        }

        [Fact]
        public void CanCompareToOtherBlock()
        {
            Block<PolymorphicAction<BaseAction>> sameBlock1 = _fx.Genesis;
            var sameBlock2 = new Block<PolymorphicAction<BaseAction>>(
                index: sameBlock1.Index,
                difficulty: sameBlock1.Difficulty,
                nonce: sameBlock1.Nonce,
                miner: sameBlock1.Miner,
                previousHash: null,
                timestamp: sameBlock1.Timestamp,
                transactions: sameBlock1.Transactions
            );
            Block<PolymorphicAction<BaseAction>> differentBlock = _fx.Next;

            Assert.Equal(sameBlock1, sameBlock2);
            Assert.NotEqual(sameBlock2, differentBlock);

            Assert.True(sameBlock1.Equals(sameBlock2));
            Assert.False(sameBlock2.Equals(differentBlock));
        }
    }
}
