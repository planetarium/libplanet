using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.Action.Tests.Common
{
    public class RandomAction : IAction
    {
        public RandomAction()
        {
        }

        public RandomAction(Address address)
        {
            Address = address;
        }

        public IValue PlainValue => Dictionary.Empty
            .Add("address", Address.Bencoded);

        private Address Address { get; set; }

        public void LoadPlainValue(IValue plainValue)
        {
            Address = new Address(((Dictionary)plainValue)["address"]);
        }

        public IWorld Execute(IActionContext context)
        {
            IWorld states = context.PreviousState;
            IAccount legacyAccount = states.GetAccount(ReservedAddresses.LegacyAccount);
            legacyAccount = legacyAccount.SetState(Address, (Integer)context.GetRandom().Next());
            return states.SetAccount(ReservedAddresses.LegacyAccount, legacyAccount);
        }
    }
}
