using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.Action.Tests.Common
{
    public class SetStatesAtBlock : IAction
    {
        private Address _address;
        private IValue _value = Null.Value;
        private Address _accountAddress;
        private long _blockIndex;

        public SetStatesAtBlock()
        {
        }

        public SetStatesAtBlock(
            Address address, IValue value, Address accountAddress, long blockIndex)
        {
            _address = address;
            _blockIndex = blockIndex;
            _accountAddress = accountAddress;
            _value = value;
        }

        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("address", _address.Bencoded)
            .Add("value", _value)
            .Add("account_address", _accountAddress.ByteArray)
            .Add("block_index", _blockIndex);

        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Bencodex.Types.Dictionary)plainValue;
            _address = new Address(dict["address"]);
            _value = dict["value"];
            _accountAddress = new Address(dict["account_address"]);
            _blockIndex = (Integer)dict["block_index"];
        }

        public IWorld Execute(IActionContext context)
        {
            IWorld states = context.PreviousState;
            IAccount account = states.GetAccount(_accountAddress);
            if (context.BlockIndex == _blockIndex)
            {
                states = states.SetAccount(_accountAddress, account.SetState(_address, _value));
            }

            return states;
        }
    }
}
