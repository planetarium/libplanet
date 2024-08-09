using Libplanet.Node.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

[Singleton<IValidateOptions<SeedOptions>>]
internal sealed class SeedOptionsValidator : OptionsValidatorBase<SeedOptions>
{
    protected override void OnValidate(string? name, SeedOptions options)
    {
    }
}
