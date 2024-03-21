using System.Collections.Immutable;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Action.Tests
{
    public class ActionContextTest
    {
        private readonly System.Random _random;
        private readonly Address _address;
        private readonly TxId _txid;
        private readonly BlockCommit _lastCommit;

        public ActionContextTest()
        {
            _random = new System.Random();
            _address = _random.NextAddress();
            _txid = _random.NextTxId();
            var key = new PrivateKey();
            var hash = _random.NextBlockHash();
            _lastCommit = new BlockCommit(
                0,
                0,
                hash,
                new[]
                {
                    new VoteMetadata(
                        0,
                        0,
                        hash,
                        DateTimeOffset.UtcNow,
                        key.PublicKey,
                        VoteFlag.PreCommit).Sign(key),
                }.ToImmutableArray());
        }

        [Fact]
        public void RandomShouldBeDeterministic()
        {
            (int Seed, int Expected)[] testCases =
            {
                (0, 1559595546),
                (1, 534011718),
            };
            foreach (var (seed, expected) in testCases)
            {
                var context = new ActionContext(
                    signer: _address,
                    txid: _txid,
                    miner: _address,
                    blockIndex: 1,
                    blockProtocolVersion: Block.CurrentProtocolVersion,
                    lastCommit: _lastCommit,
                    previousState: new World(new MockWorldState()),
                    randomSeed: seed,
                    gasLimit: 0
                );
                IRandom random = context.GetRandom();
                Assert.Equal(expected, random.Next());
            }
        }

        [Fact]
        public void GuidShouldBeDeterministic()
        {
            var context1 = new ActionContext(
                signer: _address,
                txid: _txid,
                miner: _address,
                blockIndex: 1,
                blockProtocolVersion: Block.CurrentProtocolVersion,
                lastCommit: _lastCommit,
                previousState: new World(new MockWorldState()),
                randomSeed: 0,
                gasLimit: 0
            );

            var context2 = new ActionContext(
                signer: _address,
                txid: _txid,
                miner: _address,
                blockIndex: 1,
                blockProtocolVersion: Block.CurrentProtocolVersion,
                lastCommit: _lastCommit,
                previousState: new World(new MockWorldState()),
                randomSeed: 0,
                gasLimit: 0
            );

            var context3 = new ActionContext(
                signer: _address,
                txid: _txid,
                miner: _address,
                blockIndex: 1,
                blockProtocolVersion: Block.CurrentProtocolVersion,
                lastCommit: _lastCommit,
                previousState: new World(new MockWorldState()),
                randomSeed: 1,
                gasLimit: 0
            );

            (Guid Expected, Guid Diff)[] testCases =
            {
                (
                    new Guid("6f460c1a-755d-48e4-ad67-65d5f519dbc8"),
                    new Guid("8286d046-9740-43e4-95cf-ff46699c73c4")
                ),
                (
                    new Guid("3b347c2b-f837-4085-ac5e-64005393b30d"),
                    new Guid("3410cda1-5b13-434e-af84-a54adf7a0ea0")
                ),
            };

            var rand1 = context1.GetRandom();
            var rand2 = context2.GetRandom();
            var rand3 = context3.GetRandom();
            foreach (var (expected, diff) in testCases)
            {
                Assert.Equal(expected, rand1.GenerateRandomGuid());
                Assert.Equal(expected, rand2.GenerateRandomGuid());
                Assert.Equal(diff, rand3.GenerateRandomGuid());
            }
        }

        [Fact]
        public void GuidVersionAndVariant()
        {
            for (var i = 0; i < 100; i++)
            {
                var context = new ActionContext(
                    signer: _address,
                    txid: _txid,
                    miner: _address,
                    blockIndex: 1,
                    blockProtocolVersion: Block.CurrentProtocolVersion,
                    lastCommit: _lastCommit,
                    previousState: new World(new MockWorldState()),
                    randomSeed: i,
                    gasLimit: 0
                );
                var guid = context.GetRandom().GenerateRandomGuid().ToString();

                Assert.Equal('4', guid[14]);
                Assert.True(guid[19] >= '8' && guid[19] <= 'b');
            }
        }
    }
}
