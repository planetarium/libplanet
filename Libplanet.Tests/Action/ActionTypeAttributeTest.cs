using Libplanet.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class ActionTypeAttributeTest
    {
        [Fact]
        public void CanExtractValue()
        {
            Assert.Equal(
                "test_action",
                ActionTypeAttribute.ValueOf(typeof(TestAction))
            );
        }
    }

#pragma warning disable SA1402 // File may only contain a single class
    [ActionType("test_action")]
    internal class TestAction
    {
    }
#pragma warning restore SA1402 // File may only contain a single class
}
