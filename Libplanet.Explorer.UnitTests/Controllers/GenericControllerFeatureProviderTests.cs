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
            var sut = new GenericControllerFeatureProvider<TestPoco>();
            Assert.IsAssignableFrom<IApplicationFeatureProvider<ControllerFeature>>(sut);
        }

        private class TestPoco
        {}
    }
}
