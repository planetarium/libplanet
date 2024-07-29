using System.Reflection;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.SDK.Action.ActionBase;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.SDK.Loader;

public class ContractActionLoader : IActionLoader
{
    public static readonly Address ContractResolveAddress
        = new Address("0x5657bCEa2BEcF39af57c93d06B60FC2bf589be42");

    private readonly IStateStore _stateStore;

    public ContractActionLoader(IStateStore stateStore)
    {
        _stateStore = stateStore;
    }

    public IAction LoadAction(long index, IValue value) =>
        throw new NotSupportedException();

    public IAction LoadAction(HashDigest<SHA256> rootHash, IValue value)
    {
        if (value is not Dictionary dict)
        {
            throw new InvalidOperationException();
        }

        if (!dict.TryGetValue((Text)"contract_address", out var contractValue)
            || contractValue is not Text contract)
        {
            throw new InvalidOperationException();
        }

        if (!dict.TryGetValue((Text)"type_id", out var typeValue)
            || typeValue is not Text type)
        {
            throw new InvalidOperationException();
        }

        if (!dict.TryGetValue((Text)"values", out var plainValue)
            || plainValue is not Dictionary)
        {
            throw new InvalidOperationException();
        }

        Address contractAddress = new Address(contract.Value);

        ITrie worldTrie = _stateStore.GetStateRoot(rootHash);
        IWorld world = new World(new WorldBaseState(worldTrie, _stateStore));
        IAccount account = world.GetAccount(contractAddress);
        IValue? dllBinary = account.GetState(ContractResolveAddress);

        if (dllBinary is not Binary binary)
        {
            throw new InvalidOperationException();
        }

        Assembly asm = Assembly.Load(binary.ByteArray.ToArray());
        var obj = asm.CreateInstance(type.Value);

        if (obj is not IAction originAction)
        {
            throw new InvalidOperationException();
        }

        var action = (ActionBase)originAction;
        action.LoadPlainValue(plainValue);

        return action;
    }
}
