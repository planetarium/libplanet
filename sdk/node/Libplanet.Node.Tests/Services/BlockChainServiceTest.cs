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
}
