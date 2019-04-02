using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class PolymorphicActionTest
    {
        [Fact]
        public void DetectLackOfActionType()
        {
            var action = new ActionNotAttributeAnnotated();

            Assert.Throws<MissingActionTypeException>(
                () => new PolymorphicAction<ActionNotAttributeAnnotated>(action)
            );
        }

        private class ActionNotAttributeAnnotated : IAction
        {
            public ActionNotAttributeAnnotated()
            {
            }

            public IImmutableDictionary<string, object> PlainValue =>
                new Dictionary<string, object>().ToImmutableDictionary();

            public void LoadPlainValue(
                IImmutableDictionary<string, object> plainValue)
            {
            }

            public IAccountStateDelta Execute(IActionContext context)
            {
                return context.PreviousStates;
            }
        }
    }
}
