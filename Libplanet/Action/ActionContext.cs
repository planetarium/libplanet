namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        public ActionContext(
            Address signer,
            Address to,
            long blockIndex,
            AddressStateMap previousStates,
            int randomSeed
        )
        {
            Signer = signer;
            To = to;
            BlockIndex = blockIndex;
            PreviousStates = previousStates;
            Random = new Random(randomSeed);
        }

        public Address Signer { get; }

        public Address To { get; }

        public long BlockIndex { get; }

        public AddressStateMap PreviousStates { get; }

        public IRandom Random { get; }
    }
}
