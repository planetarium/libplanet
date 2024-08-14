using Microsoft.AspNetCore.Builder;

namespace Libplanet.Node.DependencyInjection;

public interface IApplicationBuilderEntryPoint
{
    void Run(WebApplicationBuilder builder);
}
