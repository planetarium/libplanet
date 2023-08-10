using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.Action.Tests.Common
{
    public class SetStatesAtBlock : IAction
    {
        private Address _address;
        private IValue _value = Null.Value;
        private long _blockIndex;

        public SetStatesAtBlock()
        {
        }

        public SetStatesAtBlock(Address address, IValue value, long blockIndex)
        {
            _address = address;
            _blockIndex = blockIndex;
            _value = value;
        }

        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("address", _address.ByteArray)
            .Add("value", _value)
            .Add("block_index", _blockIndex);

        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Bencodex.Types.Dictionary)plainValue;
            _address = new Address(dict.GetValue<IValue>("address"));
            _value = dict["value"];
            _blockIndex = dict.GetValue<Bencodex.Types.Integer>("block_index");
        }

        public IWorld Execute(IActionContext context)
        {
            IWorld states = context.PreviousState;
            IAccount legacyAccount = states.GetAccount(ReservedAddresses.LegacyAccount);
            if (context.BlockIndex == _blockIndex)
            {
                states = states.SetAccount(legacyAccount.SetState(_address, _value));
            }

            return states;
        }
    }
}
