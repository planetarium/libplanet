using Libplanet.Action.State;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Action.Tests
{
    public class ActionContextTest
    {
        private readonly System.Random _random;
        private readonly Address _address;
        private readonly TxId _txid;

        public ActionContextTest()
        {
            _random = new System.Random();
            _address = _random.NextAddress();
            _txid = _random.NextTxId();
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
                    previousState: Account.Create(MockAccountState.Empty),
                    randomSeed: seed,
                    gasLimit: 0
                );
                IRandom random = context.Random;
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
                previousState: Account.Create(MockAccountState.Empty),
                randomSeed: 0,
                gasLimit: 0
            );

            var context2 = new ActionContext(
                signer: _address,
                txid: _txid,
                miner: _address,
                blockIndex: 1,
                blockProtocolVersion: Block.CurrentProtocolVersion,
                previousState: Account.Create(MockAccountState.Empty),
                randomSeed: 0,
                gasLimit: 0
            );

            var context3 = new ActionContext(
                signer: _address,
                txid: _txid,
                miner: _address,
                blockIndex: 1,
                blockProtocolVersion: Block.CurrentProtocolVersion,
                previousState: Account.Create(MockAccountState.Empty),
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

            foreach (var (expected, diff) in testCases)
            {
                Assert.Equal(expected, context1.Random.GenerateRandomGuid());
                Assert.Equal(expected, context2.Random.GenerateRandomGuid());
                Assert.Equal(diff, context3.Random.GenerateRandomGuid());
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
                    previousState: Account.Create(MockAccountState.Empty),
                    randomSeed: i,
                    gasLimit: 0
                );
                var guid = context.Random.GenerateRandomGuid().ToString();

                Assert.Equal('4', guid[14]);
                Assert.True(guid[19] >= '8' && guid[19] <= 'b');
            }
        }

        [Fact]
        public void GetUnconsumedContext()
        {
            var original = new ActionContext(
                signer: _address,
                txid: _txid,
                miner: _address,
                blockIndex: 1,
                blockProtocolVersion: Block.CurrentProtocolVersion,
                previousState: Account.Create(MockAccountState.Empty),
                randomSeed: _random.Next(),
                gasLimit: 0);

            // Consume original's random state...
            int[] values =
            {
                original.Random.Next(),
                original.Random.Next(),
                original.Random.Next(),
            };

            IActionContext clone = original.GetUnconsumedContext();
            Assert.Equal(
                values,
                new[] { clone.Random.Next(), clone.Random.Next(), clone.Random.Next() }
            );
        }
    }
}
