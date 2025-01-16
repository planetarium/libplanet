using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Tests.Services;

public class ReadChainServiceTest
{
    [Fact]
    public void Tip_Test()
    {
        var serviceProvider = TestUtility.CreateServiceProvider();
        var readChainService = serviceProvider.GetRequiredService<IReadChainService>();
        var expectedBlock = readChainService.GetBlock(0);

        Assert.Equal(expectedBlock, readChainService.Tip);
    }

    [Fact]
    public async Task GetBlock_WithHash_TestAsync()
    {
        var serviceProvider = TestUtility.CreateServiceProvider();
        var blockChainService = serviceProvider.GetRequiredService<IBlockChainService>();
        var blockChain = blockChainService.BlockChain;
        var readChainService = serviceProvider.GetRequiredService<IReadChainService>();
        var expectedBlock = await BlockChainUtility.AppendBlockAsync(blockChain);

        Assert.Equal(expectedBlock, readChainService.GetBlock(expectedBlock.Hash));
    }

    [Fact]
    public async Task GetBlock_WithHeight_TestAsync()
    {
        var serviceProvider = TestUtility.CreateServiceProvider();
        var blockChainService = serviceProvider.GetRequiredService<IBlockChainService>();
        var blockChain = blockChainService.BlockChain;
        var readChainService = serviceProvider.GetRequiredService<IReadChainService>();
        var height = blockChain.Count;
        var expectedBlock = await BlockChainUtility.AppendBlockAsync(blockChain);

        Assert.Equal(expectedBlock, readChainService.GetBlock(height));
    }
}
