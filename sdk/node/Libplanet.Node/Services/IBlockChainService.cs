using Libplanet.Blockchain;

namespace Libplanet.Node.Services;

public interface IBlockChainService
{
    event EventHandler<BlockEventArgs>? BlockAppended;

    BlockChain BlockChain { get; }
}
