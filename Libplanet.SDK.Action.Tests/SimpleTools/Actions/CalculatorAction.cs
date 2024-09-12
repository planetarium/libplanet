using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;

namespace Libplanet.SDK.Action.Tests.SimpleTools.Actions
{
    [ActionType("Calc")]
    public class CalculatorAction : SimpleToolsActionBase
    {
        public override Address StorageAddress =>
            new Address("0x1000000000000000000000000000000000000001");

        [Executable]
        public void Add(Integer x, Integer y)
        {
            Integer result = x + y;
            Call<HistoryAction>(nameof(HistoryAction.LogInteger), new object[] { result });
            SetState(Signer, result);
        }

        [Executable]
        public void Subtract(Integer x, Integer y)
        {
            Integer result = x - y;
            Call<HistoryAction>(nameof(HistoryAction.LogInteger), new object[] { result });
            SetState(Signer, result);
        }

        [Executable]
        public void Multiply(Integer x, Integer y)
        {
            Integer result = x * y;
            Call<HistoryAction>(nameof(HistoryAction.LogInteger), new object[] { result });
            SetState(Signer, result);
        }

        [Executable]
        public void Square(Integer x)
        {
            Integer result = x * x;
            Call<HistoryAction>(nameof(HistoryAction.LogInteger), new object[] { result });
            SetState(Signer, result);
        }

        [Executable]
        public void LogLength()
        {
            Integer result = Call<HistoryAction, Integer>(nameof(HistoryAction.LogLength));
            Call<HistoryAction>(nameof(HistoryAction.LogInteger), new object[] { result });
            SetState(Signer, result);
        }
    }
}
