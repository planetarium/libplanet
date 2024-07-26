using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Extensions.NodeBuilder;

public interface ILibplanetNodeBuilder
{
    public IServiceCollection Services { get; }

    public ILibplanetNodeBuilder WithSwarm();

    public ILibplanetNodeBuilder WithValidate();
}
