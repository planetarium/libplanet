namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        public ActionContext(
            Address signer,
            long blockIndex,
            IAccountStateDelta previousStates,
            int randomSeed
        )
        {
            Signer = signer;
            BlockIndex = blockIndex;
            PreviousStates = previousStates;
            Random = new Random(randomSeed);
        }

        public Address Signer { get; }

        public long BlockIndex { get; }

        public IAccountStateDelta PreviousStates { get; }

        public IRandom Random { get; }
    }
}
