namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        public ActionContext(
            Address from,
            Address to,
            long blockIndex,
            AddressStateMap previousStates,
            int randomSeed
        )
        {
            From = from;
            To = to;
            BlockIndex = blockIndex;
            PreviousStates = previousStates;
            Random = new Random(randomSeed);
        }

        public Address From { get; }

        public Address To { get; }

        public long BlockIndex { get; }

        public AddressStateMap PreviousStates { get; }

        public IRandom Random { get; }
    }
}
