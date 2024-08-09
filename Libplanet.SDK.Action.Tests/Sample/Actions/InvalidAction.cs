using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;

namespace Libplanet.SDK.Action.Tests.Sample.Actions
{
    public class InvalidAction : ActionBase
    {
        public override Address StorageAddress =>
            new Address("0x1000000000000000000000000000000000000000");

        [Executable]
        public void Add(IValue args)
        {
            Integer operand = (Integer)args;
            Integer stored = GetState(Signer) is IValue value
                ? (Integer)value
                : new Integer(0);
            SetState(Signer, new Integer(stored.Value + operand.Value));
        }

        public void Subtract(IValue args)
        {
            Integer operand = (Integer)args;
            Integer stored = GetState(Signer) is IValue value
                ? (Integer)value
                : new Integer(0);
            SetState(Signer, new Integer(stored.Value - operand.Value));
        }
    }
}
