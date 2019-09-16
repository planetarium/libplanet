using System;
using System.Collections.Immutable;
using Libplanet.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class ActionContextTest
    {
        [Fact]
        public void RandomShouldBeDeterministic()
        {
            (int seed, int expected)[] testCases =
            {
                (0, 1559595546),
                (1, 534011718),
            };
            var address = new Address("21744f4f08db23e044178dafb8273aeb5ebe6644");
            foreach (var (seed, expected) in testCases)
            {
                var context = new ActionContext(
                    signer: address,
                    miner: address,
                    blockIndex: 1,
                    previousStates: new DumbAccountStateDelta(),
                    randomSeed: seed
                );
                IRandom random = context.Random;
                Assert.Equal(expected, random.Next());
            }
        }

        [Fact]
        public void GuidShouldBeDeterministic()
        {
            var address = new Address("21744f4f08db23e044178dafb8273aeb5ebe6644");
            var context1 = new ActionContext(
                signer: address,
                miner: address,
                blockIndex: 1,
                previousStates: new DumbAccountStateDelta(),
                randomSeed: 0
            );

            var context2 = new ActionContext(
                signer: address,
                miner: address,
                blockIndex: 1,
                previousStates: new DumbAccountStateDelta(),
                randomSeed: 0
            );

            var context3 = new ActionContext(
                signer: address,
                miner: address,
                blockIndex: 1,
                previousStates: new DumbAccountStateDelta(),
                randomSeed: 1
            );

            (Guid expected, Guid diff)[] testCases =
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
            var address = new Address("21744f4f08db23e044178dafb8273aeb5ebe6644");

            for (var i = 0; i < 100; i++)
            {
                var context = new ActionContext(
                        signer: address,
                        miner: address,
                        blockIndex: 1,
                        previousStates: new DumbAccountStateDelta(),
                        randomSeed: i
                    );
                var guid = context.Random.GenerateRandomGuid().ToString();

                Assert.Equal('4', guid[14]);
                Assert.True(guid[19] >= '8' && guid[19] <= 'b');
            }
        }

        private class DumbAccountStateDelta : IAccountStateDelta
        {
            public IImmutableSet<Address> UpdatedAddresses =>
                ImmutableHashSet<Address>.Empty;

            public object GetState(Address address)
            {
                return null;
            }

            public IAccountStateDelta SetState(Address address, object state)
            {
                return this;
            }
        }
    }
}
