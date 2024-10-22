using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;
using Libplanet.SDK.Action.Tests.SimpleRPG.Models;

namespace Libplanet.SDK.Action.Tests.SimpleRPG.Actions
{
    public class InfoAction : ActionBase
    {
        public override Address StorageAddress =>
            new Address("0x1000000000000000000000000000000000000001");

        [Callable]
        public Info Create(string name)
        {
            if (GetState(Signer) is { } value)
            {
                throw new InvalidOperationException("Info already exists.");
            }

            Info info = new Info(name, 0);
            SetInfo(Signer, info);
            return info;
        }

        [Callable]
        public Info GetInfo(Address address) =>
            new Info(GetState(address) ?? throw new NullReferenceException());

        [Callable]
        public void SetInfo(Address address, Info info) =>
            SetState(address, info.Serialized);
    }
}
