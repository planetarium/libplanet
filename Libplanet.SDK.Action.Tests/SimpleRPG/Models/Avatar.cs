namespace Libplanet.SDK.Action.Tests.SimpleRPG.Models
{
    public class Avatar
    {
        public Info Info { get; }
        public Inventory Inventory { get; }

        public Avatar(Info info, Inventory inventory)
        {
            Info = info;
            Inventory = inventory;
        }
    }
}
