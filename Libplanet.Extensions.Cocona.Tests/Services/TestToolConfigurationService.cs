using Libplanet.Extensions.Cocona.Configuration;
using Libplanet.Extensions.Cocona.Services;

namespace Libplanet.Tools.Tests.Services
{
    public class TestToolConfigurationService : IConfigurationService<ToolConfiguration>
    {
        private ToolConfiguration Configuration { get; set; }

        public TestToolConfigurationService(ToolConfiguration configuration)
        {
            Configuration = configuration;
        }

        public ToolConfiguration Load()
        {
            return Configuration;
        }

        public void Store(ToolConfiguration configuration)
        {
            Configuration = configuration;
        }
    }
}
