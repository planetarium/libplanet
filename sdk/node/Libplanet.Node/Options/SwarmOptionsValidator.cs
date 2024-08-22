using Libplanet.Node.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

[Singleton<IValidateOptions<SwarmOptions>>]
internal sealed class SwarmOptionsValidator : OptionsValidatorBase<SwarmOptions>
{
    protected override void OnValidate(string? name, SwarmOptions options)
    {
    }
}
