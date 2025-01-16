using Libplanet.Types.Blocks;

namespace Libplanet.Node.Services;

public readonly record struct RenderBlockInfo(
    Block OldTip,
    Block NewTip);
