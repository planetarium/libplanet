using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;

namespace Libplanet.SDK.Action.Tests.Sample.Actions
{
    public class NumberLogAction : ActionBase
    {
        public override Address StorageAddress =>
            new Address("0x1000000000000000000000000000000000000002");

        [Callable]
        public void Add(Integer operand)
        {
            Text stored = GetState(Signer) is IValue value
                ? (Text)value
                : new Text(string.Empty);
            Text formatted = operand.Value >= 0
                ? new Text($"{operand.Value}")
                : new Text($"({operand.Value})");
            formatted = stored.Value.Length == 0
                ? new Text(stored.Value + $"{formatted.Value}")
                : new Text(stored.Value + $" + {formatted.Value}");
            SetState(Signer, formatted);
        }

        [Callable]
        public void Subtract(Integer operand)
        {
            Text stored = GetState(Signer) is IValue value
                ? (Text)value
                : new Text(string.Empty);
            Text formatted = operand.Value >= 0
                ? new Text($"{operand.Value}")
                : new Text($"({operand.Value})");
            formatted = stored.Value.Length == 0
                ? new Text(stored.Value + $"{formatted.Value}")
                : new Text(stored.Value + $" - {formatted.Value}");
            SetState(Signer, formatted);
        }

        // This is without Callable attribute on purpose for testing.
        public void Multiply(Integer operand)
        {
            Text stored = GetState(Signer) is IValue value
                ? (Text)value
                : new Text(string.Empty);
            Text formatted = operand.Value >= 0
                ? new Text($"{operand.Value}")
                : new Text($"({operand.Value})");
            formatted = stored.Value.Length == 0
                ? new Text($"{formatted.Value}")
                : new Text(stored.Value + $" * {formatted.Value}");
            SetState(Signer, formatted);
        }
    }
}
