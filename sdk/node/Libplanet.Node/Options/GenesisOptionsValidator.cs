using Libplanet.Node.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

[Singleton<IValidateOptions<GenesisOptions>>]
internal sealed class GenesisOptionsValidator : OptionsValidatorBase<GenesisOptions>
{
    protected override void OnValidate(string? name, GenesisOptions options)
    {
    }
}
