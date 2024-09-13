using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Common;

namespace Libplanet.Node.Services;

public readonly record struct RenderActionInfo(
    IValue Action,
    ICommittedActionContext Context,
    HashDigest<SHA256> NextState);
