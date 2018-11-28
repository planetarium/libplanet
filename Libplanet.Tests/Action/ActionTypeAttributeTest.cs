using Libplanet.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    [ActionType("test_action")]
    internal class TestAction
    {
    }

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
}
