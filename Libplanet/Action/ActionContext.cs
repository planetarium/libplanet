namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        public ActionContext(
            Address signer,
            long blockIndex,
            AddressStateMap previousStates,
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

        public AddressStateMap PreviousStates { get; }

        public IRandom Random { get; }
    }
}
