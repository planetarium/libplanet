using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

internal sealed class SwarmOptionsValidator(
    IOptions<SoloOptions> soloOptions)
    : OptionsValidatorBase<SwarmOptions>
{
    protected override void OnValidate(string? name, SwarmOptions options)
    {
        var soloOptionsValue = soloOptions.Value;
        if (options.IsEnabled && soloOptionsValue.IsEnabled)
        {
            throw new OptionsValidationException(
                optionsName: name ?? string.Empty,
                optionsType: typeof(SwarmOptions),
                failureMessages: [
                    "Both Swarm and SoloPropose cannot be enabled at the same time."]);
        }
    }
}
