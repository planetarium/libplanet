using Libplanet.Node.Options;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

internal sealed class ValidatorService(IOptions<ValidatorOptions> options) : IValidatorService
{
    // TODO: The consensus reactor settings should be implemented here in order to pass them as parameters to the Swarm constructor.
#pragma warning disable S1144 // Unused private types or members should be removed
    private readonly ValidatorOptions _options = options.Value;
#pragma warning restore S1144 // Unused private types or members should be removed
}
