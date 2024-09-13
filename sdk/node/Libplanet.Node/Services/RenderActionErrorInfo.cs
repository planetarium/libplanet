using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Node.Services;

public readonly record struct RenderActionErrorInfo(
    IValue Action,
    ICommittedActionContext Context,
    Exception Exception);
