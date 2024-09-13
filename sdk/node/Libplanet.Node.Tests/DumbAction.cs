using System.Diagnostics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;

namespace Libplanet.Node.Tests;

public class DumbAction : IAction
{
    public string ErrorMessage { get; set; } = string.Empty;

    public IValue PlainValue => Dictionary.Empty
        .Add("error_message", ErrorMessage);

    public void LoadPlainValue(IValue plainValue)
    {
        if (plainValue is Dictionary dictionary)
        {
            ErrorMessage = (Text)dictionary["error_message"];
        }
        else
        {
            throw new UnreachableException("The plain value of DumbAction must be a dictionary.");
        }
    }

    public IWorld Execute(IActionContext context)
    {
        if (ErrorMessage != string.Empty)
        {
            throw new InvalidOperationException(ErrorMessage);
        }

        return context.PreviousState;
    }
}
