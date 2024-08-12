using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Extensions.NodeBuilder;

public interface ILibplanetNodeBuilder
{
    IServiceCollection Services { get; }

    ILibplanetNodeBuilder WithSolo();

    ILibplanetNodeBuilder WithSwarm();

    ILibplanetNodeBuilder WithValidate();

    ILibplanetNodeBuilder WithSeed();
}
