using System.Reflection;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.SDK.Interfaces;

namespace Libplanet.SDK.Action.ActionBase
{
    public partial class ActionBase
    {
        protected IValue? GetState(Address address)
            => World.GetAccount(StorageAddress).GetState(address);

        protected IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> addresses)
            => World.GetAccount(StorageAddress).GetStates(addresses);

        protected void SetState(Address address, IValue value)
        {
            _world = World.SetAccount(
                StorageAddress,
                World.GetAccount(StorageAddress).SetState(address, value)
            );
        }

        protected IValue? Call<T>(Address address, string method, object?[]? args = null)
            where T : ActionBase, ICallable
        {
            if (World.GetAccount(address).GetState(MetadataAddress) is not Dictionary metadata)
            {
                throw new Exception("Action cannot be found.");
            }

            string? name = typeof(T).GetCustomAttribute<ActionAttribute>()?.Name;

            if (name is null || metadata["name"] is not Text t || t.Value != name)
            {
                throw new Exception("Action cannot be found.");
            }

            if ((T?)Activator.CreateInstance(typeof(T), address) is not { } callAction)
            {
                throw new Exception("Action cannot be found.");
            }

            callAction.LoadContext(ActionContext, World);

            MethodInfo? methodInfo = typeof(T).GetMethod(method);
            if (methodInfo is null)
            {
                throw new Exception("Method cannot be found.");
            }

            return (IValue?)methodInfo.Invoke(callAction, args);
        }
    }
}

