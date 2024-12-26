using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

internal sealed class GenesisOptionsValidator : OptionsValidatorBase<GenesisOptions>
{
    protected override void OnValidate(string? name, GenesisOptions options)
    {
        if (options.GenesisBlockPath != string.Empty)
        {
            if (options.GenesisKey != string.Empty)
            {
                var message = $"{nameof(options.GenesisKey)} cannot be used with " +
                              $"{nameof(options.GenesisBlockPath)}.";
                throw new OptionsValidationException(
                    optionsName: name ?? string.Empty,
                    optionsType: typeof(GenesisOptions),
                    failureMessages: [message]);
            }

            if (options.GenesisConfigurationPath != string.Empty)
            {
                var message = $"{nameof(options.GenesisConfigurationPath)} cannot be used with " +
                              $"{nameof(options.GenesisBlockPath)}.";
                throw new OptionsValidationException(
                    optionsName: name ?? string.Empty,
                    optionsType: typeof(GenesisOptions),
                    failureMessages: [message]);
            }

            if (options.Validators.Length > 0)
            {
                var message = $"{nameof(options.Validators)} cannot be used with " +
                              $"{nameof(options.GenesisBlockPath)}.";
                throw new OptionsValidationException(
                optionsName: name ?? string.Empty,
                optionsType: typeof(GenesisOptions),
                failureMessages: [message]);
            }

            if (!Uri.TryCreate(options.GenesisBlockPath, UriKind.Absolute, out _)
                && !File.Exists(options.GenesisBlockPath))
            {
                var message = $"{nameof(options.GenesisBlockPath)} must be a Uri or a existing " +
                              $"file path.";
                throw new OptionsValidationException(
                    optionsName: name ?? string.Empty,
                    optionsType: typeof(GenesisOptions),
                    failureMessages: [message]);
            }
        }

        if (options.GenesisConfigurationPath != string.Empty)
        {
            if (options.GenesisBlockPath != string.Empty)
            {
                var message = $"{nameof(options.GenesisBlockPath)} cannot be used with " +
                              $"{nameof(options.GenesisConfigurationPath)}.";
                throw new OptionsValidationException(
                    optionsName: name ?? string.Empty,
                    optionsType: typeof(GenesisOptions),
                    failureMessages: [message]);
            }

            if (options.GenesisKey == string.Empty)
            {
                var message = $"{nameof(options.GenesisConfigurationPath)} must be used with " +
                              $"{nameof(options.GenesisKey)}.";
                throw new OptionsValidationException(
                    optionsName: name ?? string.Empty,
                    optionsType: typeof(GenesisOptions),
                    failureMessages: [message]);
            }

            if (!Uri.TryCreate(options.GenesisConfigurationPath, UriKind.Absolute, out _)
                && !File.Exists(options.GenesisConfigurationPath))
            {
                var message = $"{nameof(options.GenesisConfigurationPath)} must be a Uri or a " +
                              $"existing file path.";
                throw new OptionsValidationException(
                    optionsName: name ?? string.Empty,
                    optionsType: typeof(GenesisOptions),
                    failureMessages: [message]);
            }
        }
    }
}
