using Libplanet.Blockchain;
using Libplanet.Types.Tx;

namespace Libplanet.Node.Services;

public class TransactionService
{
    private readonly BlockChain _blockChain;

    public TransactionService(BlockChainService blockChainService)
    {
        _blockChain = blockChainService.GetBlockChain();
    }

    public void StageTransaction(Transaction transaction) =>
        _blockChain.StageTransaction(transaction);
}
