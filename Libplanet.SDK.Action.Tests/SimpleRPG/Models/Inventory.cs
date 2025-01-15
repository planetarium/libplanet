using Bencodex.Types;

namespace Libplanet.SDK.Action.Tests.SimpleRPG.Models
{
    public class Inventory
    {
        public int Gold { get; private set; }

        public Inventory()
            : this(0)
        {
        }

        public Inventory(IValue value)
            : this((int)(Integer)value)
        {
        }

        public Inventory(int gold)
        {
            Gold = gold;
        }

        public IValue Serialized => new Integer(Gold);

        public void AddGold(int gold)
        {
            Gold = Gold + gold;
        }
    }
}
