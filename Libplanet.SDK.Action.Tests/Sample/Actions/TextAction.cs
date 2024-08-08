using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;

namespace Libplanet.SDK.Action.Tests
{
    [ActionType("Text")]
    public class TextAction : ActionBase
    {
        public override Address StorageAddress =>
            new Address("0x1000000000000000000000000000000000000003");

        [Executable]
        public void Append(IValue args)
        {
            Text operand = (Text)args;
            Text stored = GetState(Signer) is IValue value
                ? (Text)value
                : new Text(string.Empty);
            SetState(Signer, new Text(stored.Value + operand.Value));
        }
    }
}
