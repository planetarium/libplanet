using Libplanet.Node.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

[Singleton<IValidateOptions<ValidatorOptions>>]
internal sealed class ValidatorOptionsValidator : OptionsValidatorBase<ValidatorOptions>
{
    protected override void OnValidate(string? name, ValidatorOptions options)
    {
    }
}
