using Libplanet.Blockchain.Policies;

namespace Libplanet.Node.Services;

public class PolicyService
{
    public IStagePolicy StagePolicy { get; } = new VolatileStagePolicy();
}
