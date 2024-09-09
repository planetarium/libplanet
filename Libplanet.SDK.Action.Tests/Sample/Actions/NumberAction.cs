using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;

namespace Libplanet.SDK.Action.Tests.Sample.Actions
{
    [ActionType("Number")]
    public class NumberAction : ActionBase
    {
        public override Address StorageAddress =>
            new Address("0x1000000000000000000000000000000000000001");

        [Executable]
        public void Add(Integer operand)
        {
            Integer stored = GetState(Signer) is IValue value
                ? (Integer)value
                : new Integer(0);
            Call<NumberLogAction>(nameof(NumberLogAction.Add), new object?[] { operand });
            SetState(Signer, new Integer(stored.Value + operand.Value));
        }

        [Executable]
        public void Subtract(Integer operand)
        {
            Integer stored = GetState(Signer) is IValue value
                ? (Integer)value
                : new Integer(0);
            Call<NumberLogAction>(nameof(NumberLogAction.Subtract), new object?[] { operand });
            SetState(Signer, new Integer(stored.Value - operand.Value));
        }

        [Executable]
        public void Multiply(Integer operand)
        {
            Integer stored = GetState(Signer) is IValue value
                ? (Integer)value
                : new Integer(1);
            Call<NumberLogAction>(nameof(NumberLogAction.Multiply), new object?[] { operand });
            SetState(Signer, new Integer(stored.Value * operand.Value));
        }

        // Just some random public method for testing.
        public void DoNothing()
        {
            return;
        }
    }
}
