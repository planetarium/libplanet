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

        // FIXME: Should be encoded in bencodex binary, not text.  Left as is for
        // old unit test spec compliance.
        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("address", Address.ToHex());

        private Address Address { get; set; }

        public void LoadPlainValue(IValue plainValue)
        {
            var dictionary = (Bencodex.Types.Dictionary)plainValue;
            Address = new Address((string)dictionary.GetValue<Text>("address"));
        }

        public IAccount Execute(IActionContext context)
        {
            IAccount states = context.PreviousState;
            if (context.Rehearsal)
            {
                return states.SetState(Address, Null.Value);
            }

            return states.SetState(Address, (Integer)context.Random.Next());
        }
    }
}
