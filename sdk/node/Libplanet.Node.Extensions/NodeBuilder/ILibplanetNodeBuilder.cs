using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Extensions.NodeBuilder;

public interface ILibplanetNodeBuilder
{
    IServiceCollection Services { get; }

    string[] Scopes { get; }

    ILibplanetNodeBuilder WithSolo();

    ILibplanetNodeBuilder WithSwarm();

    ILibplanetNodeBuilder WithValidator();

    ILibplanetNodeBuilder WithSeed();
}
