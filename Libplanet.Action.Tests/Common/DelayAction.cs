using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Serilog;

namespace Libplanet.Action.Tests.Common
{
    public sealed class DelayAction : IAction
    {
        public static readonly Address TrivialUpdatedAddress =
            new Address("3d94abf05556fdae0755ff4427869f80afd06b58");

        public DelayAction()
        {
        }

        public DelayAction(int milliSecond)
        {
            MilliSecond = milliSecond;
        }

        public int MilliSecond { get; private set; }

        public IValue PlainValue
        {
            get
            {
                var plainValue = Bencodex.Types.Dictionary.Empty.Add(
                    "milisecond", new Bencodex.Types.Integer(MilliSecond));
                return plainValue;
            }
        }

        public IWorld Execute(IActionContext context)
        {
            var state = context.PreviousState;
            var started = DateTimeOffset.UtcNow;
            Log.Debug(
                "{MethodName} exec started. Delay target: {MilliSecond}",
                nameof(DelayAction),
                MilliSecond);
            Thread.Sleep(MilliSecond);
            var ended = DateTimeOffset.UtcNow;
            var delayAccount = state
                .GetAccount(ReservedAddresses.LegacyAccount)
                .SetState(TrivialUpdatedAddress, new Bencodex.Types.Integer(MilliSecond));
            state = state.SetAccount(delayAccount);
            Log.Debug(
                "{MethodName} Total Executed Time: {Elapsed}. Delay target: {MilliSecond}",
                nameof(DelayAction),
                ended - started,
                MilliSecond);
            return state;
        }

        public void LoadPlainValue(IValue plainValue)
        {
            var asDict = (Dictionary)plainValue;
            MilliSecond = (int)((Bencodex.Types.Integer)asDict["milisecond"]);
        }
    }
}
