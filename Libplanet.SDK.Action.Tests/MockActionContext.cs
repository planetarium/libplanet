using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Tx;

namespace Libplanet.SDK.Tests;

public class MockActionContext : IActionContext
{
    public Address Signer
    {
        get;
    }

    public TxId? TxId
    {
        get;
    }

    public Address Miner
    {
        get;
    }

    public long BlockIndex
    {
        get;
    }

    public int BlockProtocolVersion
    {
        get;
    }

    public IWorld PreviousState
    {
        get;
        set;
    }

    public int RandomSeed
    {
        get;
    }

    public bool BlockAction
    {
        get;
    }

    public IReadOnlyList<ITransaction> Txs
    {
        get;
    }

    public void UseGas(long gas)
    {
        throw new NotSupportedException();
    }

    public IRandom GetRandom() =>
        throw new NotSupportedException();

    public long GasUsed() =>
        throw new NotSupportedException();

    public long GasLimit() =>
        throw new NotSupportedException();
}
