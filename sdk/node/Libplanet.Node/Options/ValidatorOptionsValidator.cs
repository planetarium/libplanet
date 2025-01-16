using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

internal sealed class ValidatorOptionsValidator(
    IOptions<SwarmOptions> swarmOptions)
    : OptionsValidatorBase<ValidatorOptions>
{
    protected override void OnValidate(string? name, ValidatorOptions options)
    {
        var swarmOptionsValue = swarmOptions.Value;
        if (options.IsEnabled && !swarmOptionsValue.IsEnabled)
        {
            throw new OptionsValidationException(
                optionsName: name ?? string.Empty,
                optionsType: typeof(ValidatorOptions),
                failureMessages: [
                    "Validator cannot be enabled when Swarm is disabled."]);
        }
    }
}
