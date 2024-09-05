using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;

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
            privateKey,
            blockChain.GetBlockCommit(tip.Hash));
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
}
