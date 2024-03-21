using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.Action.Tests.Common
{
    public sealed class UpdateValueAction : IAction
    {
        public static readonly Address ValueAddress =
            new Address("0000000000000000000000000000000000000123");

        public UpdateValueAction()
        {
        }

        public UpdateValueAction(int increment)
        {
            Increment = increment;
        }

        public int Increment { get; set; }

        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("value", new Bencodex.Types.Integer(Increment));

        public void LoadPlainValue(IValue plainValue)
        {
            Increment = (int)(Bencodex.Types.Integer)((Dictionary)plainValue)["value"];
        }

        public IWorld Execute(IActionContext ctx)
        {
            IWorld states = ctx.PreviousState;
            IAccount account = states.GetAccount(ReservedAddresses.LegacyAccount);
            int value = 0;
            int increment = Increment;

            if (account.GetState(ValueAddress) is Integer integer)
            {
                value = (int)integer.Value + increment;
            }

            account = account.SetState(ValueAddress, new Integer(value));
            return states.SetAccount(ReservedAddresses.LegacyAccount, account);
        }
    }
}
