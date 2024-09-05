using Libplanet.Node.Extensions;
using Libplanet.Node.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Tests.Services;

public class BlockChainServiceTest
{
    [Fact]
    public void Create_Test()
    {
        var serviceProvider = TestUtility.CreateServiceProvider();
        var blockChainService = serviceProvider.GetRequiredService<IBlockChainService>();
        var blockChain = blockChainService.BlockChain;

        Assert.Equal(1, blockChain.Count);
    }

    [Fact]
    public async Task BlockAppended_TestAsync()
    {
        var serviceProvider = TestUtility.CreateServiceProvider();
        var blockChainService = serviceProvider.GetRequiredService<IBlockChainService>();
        var blockChain = blockChainService.BlockChain;

        var args = await Assert.RaisesAsync<BlockEventArgs>(
            handler => blockChainService.BlockAppended += handler,
            handler => blockChainService.BlockAppended -= handler,
            async () => await BlockChainUtility.AppendBlockAsync(blockChain));

        Assert.Equal(args.Arguments.Block, blockChain.Tip);
        Assert.Equal(2, blockChain.Count);
    }
}
