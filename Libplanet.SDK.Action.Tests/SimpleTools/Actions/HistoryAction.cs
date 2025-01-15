using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;

namespace Libplanet.SDK.Action.Tests.SimpleTools.Actions
{
    public class HistoryAction : SimpleToolsActionBase
    {
        public override Address StorageAddress =>
            new Address("0x1000000000000000000000000000000000000002");

        [Callable]
        public void LogInteger(Integer result)
        {
            Text stored = GetState(Signer) is IValue value
                ? (Text)value
                : new Text(string.Empty);
            Text formatted = stored.Value.Length == 0
                ? new Text($"{result.Value}")
                : new Text(stored.Value + $", {result.Value}");
            SetState(Signer, formatted);
        }

        [Callable]
        public void LogText(Text result)
        {
            Text stored = GetState(Signer) is IValue value
                ? (Text)value
                : new Text(string.Empty);
            Text formatted = stored.Value.Length == 0
                ? new Text($"{result.Value}")
                : new Text(stored.Value + $", {result.Value}");
            SetState(Signer, formatted);
        }

        [Callable]
        public Integer LogLength()
        {
            Text stored = GetState(Signer) is IValue value
                ? (Text)value
                : new Text(string.Empty);
            return new Integer(stored.Value.Length);
        }
    }
}
