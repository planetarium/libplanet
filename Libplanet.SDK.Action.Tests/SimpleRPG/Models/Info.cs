using Bencodex.Types;

namespace Libplanet.SDK.Action.Tests.SimpleRPG.Models
{
    public class Info
    {
        public string Name { get; }

        public int Exp { get; private set; }

        public int Level => (Exp / 100);

        public Info(string name)
            : this(name, 0)
        {
        }

        public Info(IValue value)
            : this((Text)((List)value)[0], (Integer)((List)value)[1])
        {
        }

        public Info(string name, int exp)
        {
            Name = name;
            Exp = exp;
        }

        public IValue Serialized => List.Empty
            .Add(Name)
            .Add(Exp);

        public void AddExp(int exp)
        {
            Exp = Exp + exp;
        }
    }
}
