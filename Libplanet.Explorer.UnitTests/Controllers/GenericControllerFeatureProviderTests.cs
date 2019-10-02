using System.Collections.Immutable;
using System.Linq;
using System.Reflection;
using Libplanet.Action;
using Libplanet.Explorer.Controllers;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Controllers;
using Xunit;

namespace Libplanet.Explorer.UnitTests.Controllers
{
    public class GenericControllerFeatureProviderTests
    {
        [Fact]
        public void ImplementsApplicationFeatureProvider()
        {
            var sut = new GenericControllerFeatureProvider<TestAction>();
            Assert.IsAssignableFrom<IApplicationFeatureProvider<ControllerFeature>>(sut);
        }

        [Fact]
        public void PopulateFeatureAddsExplorerControllerOfType()
        {
            var sut = new GenericControllerFeatureProvider<TestAction>();
            var feature = new ControllerFeature();
            sut.PopulateFeature(Enumerable.Empty<ApplicationPart>(), feature);
            Assert.Contains(typeof(ExplorerController<TestAction>), feature.Controllers);
        }

        [Fact]
        public void PopulateFeatureDoesntAddExistingActionController()
        {
            var sut = new GenericControllerFeatureProvider<TestAction>();
            var feature = new ControllerFeature();
            feature.Controllers.Add(typeof(TestActionController).GetTypeInfo());
            sut.PopulateFeature(Enumerable.Empty<ApplicationPart>(), feature);
            Assert.DoesNotContain(typeof(ExplorerController<TestAction>), feature.Controllers);
        }

        private class TestAction : IAction
        {
            public void LoadPlainValue(IImmutableDictionary<string, object> plainValue)
            {
            }

            public IAccountStateDelta Execute(IActionContext context) => context.PreviousStates;

            public void Render(IActionContext context, IAccountStateDelta nextStates)
            {
            }

            public void Unrender(IActionContext context, IAccountStateDelta nextStates)
            {
            }

            public IImmutableDictionary<string, object> PlainValue =>
                ImmutableDictionary<string, object>.Empty;
        }

        private class TestActionController
        {
        }
    }
}
