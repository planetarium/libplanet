using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.Action.Tests.Common
{
    /// <summary>
    /// An <see cref="IAction"/> for testing.  In addition to simply setting
    /// an <see cref="IValue"/> to a certain <see cref="Crypto.Address"/>,
    /// records various data that can be accessed from <see cref="IActionContext"/>.
    /// </summary>
    public class ContextRecordingAction : IAction
    {
        /// <summary>
        /// The <see cref="Crypto.Address"/> where <see cref="IActionContext.Miner"/>
        /// will be recorded.
        /// </summary>
        public static readonly Address MinerRecordAddress =
            new Address("1000000000000000000000000000000000000001");

        /// <summary>
        /// The <see cref="Crypto.Address"/> where <see cref="IActionContext.Signer"/>
        /// will be recorded.
        /// </summary>
        public static readonly Address SignerRecordAddress =
            new Address("1000000000000000000000000000000000000002");

        /// <summary>
        /// The <see cref="Crypto.Address"/> where <see cref="IActionContext.BlockIndex"/>
        /// will be recorded.
        /// </summary>
        public static readonly Address BlockIndexRecordAddress =
            new Address("1000000000000000000000000000000000000003");

        /// <summary>
        /// The <see cref="Crypto.Address"/> where the next random integer from
        /// <see cref="IActionContext.GetRandom()"/> will be recorded.
        /// </summary>
        public static readonly Address RandomRecordAddress =
            new Address("1000000000000000000000000000000000000004");

        public ContextRecordingAction()
        {
        }

        public ContextRecordingAction(Address address, IValue value)
        {
            Address = address;
            Value = value;
        }

        public IValue PlainValue => Dictionary.Empty
            .Add("address", Address.Bencoded)
            .Add("value", Value);

        private Address Address { get; set; }

        private IValue Value { get; set; }

        public void LoadPlainValue(IValue plainValue)
        {
            Address = new Address(((Dictionary)plainValue)["address"]);
            Value = ((Dictionary)plainValue)["value"];
        }

        public IWorld Execute(IActionContext context)
        {
            IWorld states = context.PreviousState;
            IAccount account = states.GetAccount(ReservedAddresses.LegacyAccount);
            account = account
                .SetState(Address, Value)
                .SetState(MinerRecordAddress, new Binary(context.Miner.ByteArray))
                .SetState(SignerRecordAddress, new Binary(context.Signer.ByteArray))
                .SetState(BlockIndexRecordAddress, new Integer(context.BlockIndex))
                .SetState(RandomRecordAddress, new Integer(context.GetRandom().Next()));
            return states.SetAccount(ReservedAddresses.LegacyAccount, account);
        }
    }
}
