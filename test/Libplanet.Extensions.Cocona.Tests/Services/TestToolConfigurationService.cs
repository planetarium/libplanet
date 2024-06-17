namespace Libplanet.Tools.Tests.Services;

using Libplanet.Extensions.Cocona.Configuration;
using Libplanet.Extensions.Cocona.Services;

public class TestToolConfigurationService : IConfigurationService<ToolConfiguration>
{
    public TestToolConfigurationService(ToolConfiguration configuration)
    {
        Configuration = configuration;
    }

    private ToolConfiguration Configuration { get; set; }

    public ToolConfiguration Load()
    {
        return Configuration;
    }

    public void Store(ToolConfiguration configuration)
    {
        Configuration = configuration;
    }
}
