using System.Reflection;
using Bencodex.Types;
using Xunit;

namespace Libplanet.Action.Tests
{
    public class ActionTypeAttributeTest
    {
        [Fact]
        public void CanExtractValue()
        {
            Assert.Equal(
                new Text("test_action"),
                typeof(TestAction1).GetCustomAttribute<ActionTypeAttribute>()?.TypeIdentifier);
            Assert.Null(
                typeof(TestAction2).GetCustomAttribute<ActionTypeAttribute>()?.TypeIdentifier);
        }
    }

#pragma warning disable SA1402 // File may only contain a single class
    [ActionType("test_action")]
    internal class TestAction1
    {
    }

    internal class TestAction2
    {
    }
#pragma warning restore SA1402 // File may only contain a single class
}
