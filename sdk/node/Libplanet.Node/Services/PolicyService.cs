using Libplanet.Blockchain.Policies;
using Libplanet.Node.DependencyInjection;

namespace Libplanet.Node.Services;

[Singleton]
public class PolicyService
{
    public IStagePolicy StagePolicy { get; } = new VolatileStagePolicy();
}
