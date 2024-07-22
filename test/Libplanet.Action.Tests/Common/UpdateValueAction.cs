using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.Action.Tests.Common
{
    public sealed class UpdateValueAction : IAction
    {
        public UpdateValueAction()
        {
        }

        public UpdateValueAction(Address address, int increment)
        {
            Address = address;
            Increment = increment;
        }

        public Address Address { get; set; }

        public int Increment { get; set; }

        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("address", Address.Bencoded)
            .Add("value", new Bencodex.Types.Integer(Increment));

        public void LoadPlainValue(IValue plainValue)
        {
            Address = new Address(((Dictionary)plainValue)["address"]);
            Increment = (int)(Bencodex.Types.Integer)((Dictionary)plainValue)["value"];
        }

        public IWorld Execute(IActionContext ctx)
        {
            IWorld states = ctx.PreviousState;
            IAccount account = states.GetAccount(ReservedAddresses.LegacyAccount);
            int value = 0;
            int increment = Increment;

            if (account.GetState(Address) is Integer integer)
            {
                value = (int)integer.Value + increment;
            }
            else
            {
                value = increment;
            }

            account = account.SetState(Address, new Integer(value));
            return states.SetAccount(ReservedAddresses.LegacyAccount, account);
        }
    }
}
