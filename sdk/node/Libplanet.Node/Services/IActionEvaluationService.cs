using Libplanet.Action;

namespace Libplanet.Node.Services;

public interface IActionEvaluationService
{
    IActionEvaluator ActionEvaluator { get; }

    string[] Actions { get; }
}
