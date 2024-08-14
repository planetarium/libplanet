using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node;

public interface INodeApplicationBuilder
{
    IServiceCollection Services { get; }

    string[] Scopes { get; }

    INodeApplicationBuilder WithSolo();

    INodeApplicationBuilder WithNode();

    INodeApplicationBuilder WithValidate();

    INodeApplicationBuilder WithBlocksyncSeed();

    INodeApplicationBuilder WithConsensusSeed();
}
