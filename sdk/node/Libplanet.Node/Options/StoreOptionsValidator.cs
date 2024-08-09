using Libplanet.Node.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

[Singleton<IValidateOptions<StoreOptions>>]
internal sealed class StoreOptionsValidator : OptionsValidatorBase<StoreOptions>
{
    protected override void OnValidate(string? name, StoreOptions options)
    {
    }
}
