using Libplanet.Node.DependencyInjection;

namespace Libplanet.Node.Services;

[Singleton<IValidatorService>(Scope = "Validator")]
internal sealed class ValidatorService : IValidatorService
{
}
