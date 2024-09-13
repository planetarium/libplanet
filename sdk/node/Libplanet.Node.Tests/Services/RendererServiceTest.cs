using Libplanet.Action;
using Libplanet.Node.Options;
using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Tests.Services;

public class RendererServiceTest
{
    [Fact]
    public async Task RenderBlock_TestAsync()
    {
        var serviceProvider = TestUtility.CreateServiceProvider();
        var blockChainService = serviceProvider.GetRequiredService<IBlockChainService>();
        var rendererService = serviceProvider.GetRequiredService<IRendererService>();
        var blockChain = blockChainService.BlockChain;

        using var observer = new TestObserver<RenderBlockInfo>(rendererService.RenderBlock);
        await Assert.RaisesAnyAsync<RenderBlockInfo>(
            attach: handler => observer.Next += handler,
            detach: handler => observer.Next -= handler,
            testCode: async () => await BlockChainUtility.AppendBlockAsync(blockChain));
    }

    [Fact]
    public async Task RenderAction_TestAsync()
    {
        var settings = new Dictionary<string, string?>
        {
            [$"{ActionOptions.Position}:{nameof(ActionOptions.ModulePath)}"]
                = typeof(DumbActionLoader).Assembly.Location,
            [$"{ActionOptions.Position}:{nameof(ActionOptions.ActionLoaderType)}"]
                = typeof(DumbActionLoader).FullName,
        };

        var serviceProvider = TestUtility.CreateServiceProvider(settings);
        var blockChainService = serviceProvider.GetRequiredService<IBlockChainService>();
        var rendererService = serviceProvider.GetRequiredService<IRendererService>();
        var blockChain = blockChainService.BlockChain;

        var actions = new IAction[]
        {
            new DumbAction(),
            new DumbAction(),
            new DumbAction(),
        };

        using var observer = new TestObserver<RenderActionInfo>(rendererService.RenderAction);
        await Assert.RaisesAnyAsync<RenderActionInfo>(
            attach: handler => observer.Next += handler,
            detach: handler => observer.Next -= handler,
            testCode: async () =>
            {
                BlockChainUtility.StageTransaction(blockChain, actions);
                await BlockChainUtility.AppendBlockAsync(blockChain);
            });
    }

    [Fact]
    public async Task RenderActionError_TestAsync()
    {
        var settings = new Dictionary<string, string?>
        {
            [$"{ActionOptions.Position}:{nameof(ActionOptions.ModulePath)}"]
                = typeof(DumbActionLoader).Assembly.Location,
            [$"{ActionOptions.Position}:{nameof(ActionOptions.ActionLoaderType)}"]
                = typeof(DumbActionLoader).FullName,
        };

        var serviceProvider = TestUtility.CreateServiceProvider(settings);
        var blockChainService = serviceProvider.GetRequiredService<IBlockChainService>();
        var rendererService = serviceProvider.GetRequiredService<IRendererService>();
        var blockChain = blockChainService.BlockChain;
        var errorMessage = "123";

        var actions = new IAction[]
        {
            new DumbAction() { ErrorMessage = errorMessage },
        };

        using var observer = new TestObserver<RenderActionErrorInfo>(
            rendererService.RenderActionError);
        var errorInfo = await Assert.RaisesAnyAsync<RenderActionErrorInfo>(
            attach: handler => observer.Next += handler,
            detach: handler => observer.Next -= handler,
            testCode: async () =>
            {
                BlockChainUtility.StageTransaction(blockChain, actions);
                await BlockChainUtility.AppendBlockAsync(blockChain);
            });
        Assert.Equal(errorMessage, errorInfo.Arguments.Exception.InnerException!.Message);
    }

    [Fact]
    public async Task RenderBlockEnd_TestAsync()
    {
        var serviceProvider = TestUtility.CreateServiceProvider();
        var blockChainService = serviceProvider.GetRequiredService<IBlockChainService>();
        var rendererService = serviceProvider.GetRequiredService<IRendererService>();
        var blockChain = blockChainService.BlockChain;

        using var observer = new TestObserver<RenderBlockInfo>(rendererService.RenderBlockEnd);
        await Assert.RaisesAnyAsync<RenderBlockInfo>(
            attach: handler => observer.Next += handler,
            detach: handler => observer.Next -= handler,
            testCode: async () => await BlockChainUtility.AppendBlockAsync(blockChain));
    }
}
