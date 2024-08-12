using Libplanet.Blockchain;
using Libplanet.Types.Tx;

namespace Libplanet.Node.Services;

internal sealed class TransactionService(BlockChainService blockChainService)
{
    private readonly BlockChain _blockChain = blockChainService.BlockChain;

    public void StageTransaction(Transaction transaction) =>
        _blockChain.StageTransaction(transaction);
}
