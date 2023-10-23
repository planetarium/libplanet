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
            _address = new Address(dict["address"]);
            _value = dict["value"];
            _blockIndex = (Integer)dict["block_index"];
        }

        public IAccount Execute(IActionContext context)
        {
            IAccount states = context.PreviousState;
            if (context.BlockIndex == _blockIndex)
            {
                states = states.SetState(_address, _value);
            }

            return states;
        }
    }
}
