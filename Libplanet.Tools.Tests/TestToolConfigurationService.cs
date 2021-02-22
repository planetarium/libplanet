using Libplanet.Tools.Configuration;

namespace Libplanet.Tools.Tests
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
