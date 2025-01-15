using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;

namespace Libplanet.SDK.Action.Tests
{
    public class MockActionContext : IActionContext
    {
        public MockActionContext(
            Address signer,
            Address miner,
            IWorld previousState)
        {
            Signer = signer;
            Miner = miner;
            PreviousState = previousState;
        }

        public Address Signer { get; }

        public TxId? TxId =>
            throw new NotSupportedException();

        public Address Miner { get; }

        public long BlockIndex =>
            throw new NotSupportedException();

        public int BlockProtocolVersion =>
            throw new NotSupportedException();

        public IWorld PreviousState { get; }

        public int RandomSeed =>
            throw new NotSupportedException();

        public bool IsPolicyAction =>
            throw new NotSupportedException();

        public IReadOnlyList<ITransaction> Txs =>
            throw new NotSupportedException();

        public IReadOnlyList<EvidenceBase> Evidence =>
            throw new NotSupportedException();

        public void UseGas(long gas) =>
            throw new NotSupportedException();

        public IRandom GetRandom() =>
            throw new NotSupportedException();

        public long GasUsed() =>
            throw new NotSupportedException();

        public long GasLimit() =>
            throw new NotSupportedException();
    }
}
