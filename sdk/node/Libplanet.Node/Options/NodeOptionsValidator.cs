using Libplanet.Node.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

[Singleton<IValidateOptions<NodeOptions>>]
internal sealed class NodeOptionsValidator : OptionsValidatorBase<NodeOptions>
{
    protected override void OnValidate(string? name, NodeOptions options)
    {
    }
}
