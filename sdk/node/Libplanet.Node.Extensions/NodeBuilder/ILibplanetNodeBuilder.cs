using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Extensions.NodeBuilder;

public interface ILibplanetNodeBuilder
{
    IServiceCollection Services { get; }

    string[] Scopes { get; }

    ILibplanetNodeBuilder WithSolo();

    ILibplanetNodeBuilder WithNode();

    ILibplanetNodeBuilder WithValidate();

    ILibplanetNodeBuilder WithSeed();
}
