namespace Libplanet.Action
{
    internal class ActionContext : IActionContext
    {
        public ActionContext(
            Address signer,
            Address miner,
            long blockIndex,
            IAccountStateDelta previousStates,
            int randomSeed,
            bool rehearsal = false
        )
        {
            Signer = signer;
            Miner = miner;
            BlockIndex = blockIndex;
            Rehearsal = rehearsal;
            PreviousStates = previousStates;
            Random = new Random(randomSeed);
        }

        public Address Signer { get; }

        public Address Miner { get; }

        public long BlockIndex { get; }

        public bool Rehearsal { get; }

        public IAccountStateDelta PreviousStates { get; }

        public IRandom Random { get; }
    }
}
