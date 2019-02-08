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
                    from: new Address("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                    to: new Address("21744f4f08db23e044178dafb8273aeb5ebe6644"),
                    previousStates: new AddressStateMap(),
                    randomSeed: seed
                );
                IRandom random = context.Random;
                Assert.Equal(expected, random.Next());
            }
        }
    }
}
