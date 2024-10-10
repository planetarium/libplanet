using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;
using Libplanet.SDK.Action.Tests.SimpleRPG.Models;

namespace Libplanet.SDK.Action.Tests.SimpleRPG.Actions
{
    public class InventoryAction : ActionBase
    {
        public override Address StorageAddress =>
            new Address("0x1000000000000000000000000000000000000002");

        [Callable]
        public Inventory Create()
        {
            if (GetState(Signer) is { })
            {
                throw new InvalidOperationException("Inventory already exists.");
            }

            Inventory inventory = new Inventory();
            SetInventory(Signer, inventory);
            return inventory;
        }

        [Callable]
        public Inventory GetInventory(Address address) =>
            new Inventory(GetState(address) ?? throw new NullReferenceException());

        [Callable]
        public void SetInventory(Address address, Inventory inventory) =>
            SetState(address, inventory.Serialized);
    }
}
