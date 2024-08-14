using Microsoft.AspNetCore.Builder;

namespace Libplanet.Node.DependencyInjection;

public interface IApplicationEntryPoint
{
    Task RunAsync(WebApplication app, CancellationToken cancellationToken);
}
