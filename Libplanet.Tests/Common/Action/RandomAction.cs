using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
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

        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("address", Address.ToHex());

        private Address Address { get; set; }

        public void LoadPlainValue(IValue plainValue)
        {
            var dictionary = (Bencodex.Types.Dictionary)plainValue;
            Address = new Address(dictionary.GetValue<Text>("address"));
        }

        public IAccountStateDelta Execute(IActionContext context)
        {
            IAccountStateDelta states = context.PreviousStates;
            if (context.Rehearsal)
            {
                return states.SetState(Address, default(Null));
            }

            return states.SetState(Address, (Integer)context.Random.Next());
        }
    }
}
