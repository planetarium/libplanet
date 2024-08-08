using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;
using Libplanet.SDK.Action.Tests.SimpleRPG.Models;

namespace Libplanet.SDK.Action.Tests.SimpleRPG.Actions
{
    [ActionType("Avatar")]
    public class AvatarAction : ActionBase
    {
        // This has no IAccount associated with its domain.
        public override Address StorageAddress => default;

        [Executable]
        public void Create(IValue args)
        {
            string name = (Text)args;
            Call<InfoAction, Info>("Create", new object?[] { name });
            Call<InventoryAction, Inventory>("Create");
        }

        [Callable]
        public Avatar GetAvatar(Address address)
        {
            Info info = Call<InfoAction, Info>(
                "GetInfo",
                new object?[] { address });
            Inventory inventory = Call<InventoryAction, Inventory>(
                "GetInventory",
                new object?[] { address });
            return new Avatar(info, inventory);
        }

        [Callable]
        public void SetAvatar(Address address, Avatar avatar)
        {
            Call<InfoAction>(
                "SetInfo",
                new object?[] { address, avatar.Info });
            Call<InventoryAction>(
                "SetInventory",
                new object?[] { address, avatar.Inventory });
        }
    }
}
