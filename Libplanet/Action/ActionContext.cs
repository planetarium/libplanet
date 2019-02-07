namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        public ActionContext(
            Address from,
            Address to,
            AddressStateMap previousStates,
            int randomSeed
        )
        {
            From = from;
            To = to;
            PreviousStates = previousStates;
            Random = new Random(randomSeed);
        }

        public Address From { get; }

        public Address To { get; }

        public AddressStateMap PreviousStates { get; }

        public IRandom Random { get; }
    }
}
