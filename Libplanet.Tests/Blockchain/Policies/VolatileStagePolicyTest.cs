using Libplanet.Blockchain.Policies;
using Libplanet.Tests.Common.Action;

namespace Libplanet.Tests.Blockchain.Policies
{
    public class VolatileStagePolicyTest : StagePolicyTest
    {
        private readonly VolatileStagePolicy<DumbAction> _stagePolicy =
            new VolatileStagePolicy<DumbAction>();

        protected override IStagePolicy<DumbAction> StagePolicy =>
            _stagePolicy;
    }
}
