using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;

namespace Libplanet.SDK.Action.Tests.SimpleTools.Actions
{
    [ActionType("Text")]
    public class TextAction : SimpleToolsActionBase
    {
        public override Address StorageAddress =>
            new Address("0x1000000000000000000000000000000000000003");

        [Executable("Converts a string to uppercase.")]
        public void ToUpper(Text text)
        {
            Text result = new Text(text.Value.ToUpper());
            Call<HistoryAction>(nameof(HistoryAction.LogText), new object[] { result });
            SetState(Signer, new Text(result));
        }

        [Executable]
        public void ToLower(Text text)
        {
            Text result = new Text(text.Value.ToLower());
            Call<HistoryAction>(nameof(HistoryAction.LogText), new object[] { result });
            SetState(Signer, new Text(result));
        }
    }
}
