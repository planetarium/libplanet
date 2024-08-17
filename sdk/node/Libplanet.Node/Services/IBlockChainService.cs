using Libplanet.Blockchain;

namespace Libplanet.Node.Services;

public interface IBlockChainService
{
    BlockChain BlockChain { get; }
}
