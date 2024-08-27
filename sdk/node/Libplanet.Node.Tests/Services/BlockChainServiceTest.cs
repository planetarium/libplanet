using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Node.Options;
using Libplanet.Node.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Tests.Services;

public class BlockChainServiceTest
{
    [Fact]
    public void Create_Test()
    {
        var services = new ServiceCollection();
        services.AddLogging(configure => configure.AddProvider(NullLoggerProvider.Instance));
        services.AddOptions<GenesisOptions>();
        services.AddSingleton<IConfigureOptions<GenesisOptions>, GenesisOptionsConfigurator>();
        services.AddOptions<StoreOptions>();
        services.AddSingleton<IConfigureOptions<StoreOptions>, StoreOptionsConfigurator>();
        services.AddOptions<ActionOptions>();
        services.AddOptions<SwarmOptions>();
        services.AddSingleton<IConfigureOptions<SwarmOptions>, SwarmOptionsConfigurator>();

        var serviceProvider = services.BuildServiceProvider();
        var policyService = new PolicyService();
        var logger = new NullLoggerFactory().CreateLogger<BlockChainService>();
        var genesisOptions = serviceProvider.GetRequiredService<IOptions<GenesisOptions>>();
        var storeOptions = serviceProvider.GetRequiredService<IOptions<StoreOptions>>();
        var actionOptions = serviceProvider.GetRequiredService<IOptions<ActionOptions>>();
        var blockChainService = new BlockChainService(
            genesisOptions: genesisOptions,
            storeOptions: storeOptions,
            actionOptions: actionOptions,
            policyService: policyService,
            logger: logger);
        var blockChain = blockChainService.BlockChain;

        Assert.Equal(1, blockChain.Count);
    }

    [Fact]
    public async Task BlockAppended_TestAsync()
    {
        var services = new ServiceCollection();
        services.AddLogging(configure => configure.AddProvider(NullLoggerProvider.Instance));
        services.AddOptions<GenesisOptions>();
        services.AddSingleton<IConfigureOptions<GenesisOptions>, GenesisOptionsConfigurator>();
        services.AddOptions<StoreOptions>();
        services.AddSingleton<IConfigureOptions<StoreOptions>, StoreOptionsConfigurator>();
        services.AddOptions<SwarmOptions>();
        services.AddSingleton<IConfigureOptions<SwarmOptions>, SwarmOptionsConfigurator>();
        services.AddSingleton<PolicyService>();
        services.AddSingleton<BlockChainService>();
        var serviceProvider = services.BuildServiceProvider();
        var blockChainService = serviceProvider.GetRequiredService<BlockChainService>();
        var blockChain = blockChainService.BlockChain;

        var args = await Assert.RaisesAsync<BlockEventArgs>(
            handler => blockChainService.BlockAppended += handler,
            handler => blockChainService.BlockAppended -= handler,
            async () => await AppendBlockAsync(new PrivateKey(), blockChain));

        Assert.Equal(args.Arguments.Block, blockChain.Tip);
        Assert.Equal(2, blockChain.Count);
    }

    private static async Task AppendBlockAsync(PrivateKey privateKey, BlockChain blockChain)
    {
        var tip = blockChain.Tip;
        var block = blockChain.ProposeBlock(
            privateKey,
            blockChain.GetBlockCommit(tip.Hash));
        blockChain.Append(
            block,
            blockChain.GetBlockCommit(tip.Hash),
            validate: false);

        await Task.Delay(1000);
    }
}
