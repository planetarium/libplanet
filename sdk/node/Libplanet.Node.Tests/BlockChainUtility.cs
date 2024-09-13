using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Node.Tests;

internal static class BlockChainUtility
{
    public static Task<Block> AppendBlockAsync(BlockChain blockChain)
        => AppendBlockAsync(blockChain, new PrivateKey());

    public static async Task<Block> AppendBlockAsync(BlockChain blockChain, PrivateKey privateKey)
    {
        var tip = blockChain.Tip;
        var height = tip.Index + 1;
        var block = blockChain.ProposeBlock(
            proposer: privateKey,
            lastCommit: blockChain.GetBlockCommit(tip.Hash));
        blockChain.Append(
            block,
            blockChain.GetBlockCommit(tip.Hash),
            validate: false);

        while (blockChain.Tip.Index < height)
        {
            await Task.Delay(100);
        }

        await Task.Delay(1000);

        return block;
    }

    public static void StageTransaction(
        BlockChain blockChain, IAction[] actions)
        => StageTransaction(blockChain, new PrivateKey(), actions);

    public static void StageTransaction(
        BlockChain blockChain, PrivateKey privateKey, IAction[] actions)
    {
        var transaction = CreateTransaction(blockChain, privateKey, actions);
        blockChain.StageTransaction(transaction);
    }

    public static Transaction CreateTransaction(
        BlockChain blockChain, IAction[] actions)
        => CreateTransaction(blockChain, new PrivateKey(), actions);

    public static Transaction CreateTransaction(
        BlockChain blockChain, PrivateKey privateKey, IAction[] actions)
    {
        var genesisBlock = blockChain.Genesis;
        var nonce = blockChain.GetNextTxNonce(privateKey.Address);
        var values = actions.Select(item => item.PlainValue).ToArray();
        return Transaction.Create(
            nonce: nonce,
            privateKey: privateKey,
            genesisHash: genesisBlock.Hash,
            actions: new TxActionList(values));
    }
}
