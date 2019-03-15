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
            foreach (var (seed, expected) in testCases)
            {
                var context = new ActionContext(
                    signer: new Address("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                    blockIndex: 1,
                    previousStates: new DumbAccountStateDelta(),
                    randomSeed: seed
                );
                IRandom random = context.Random;
                Assert.Equal(expected, random.Next());
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
