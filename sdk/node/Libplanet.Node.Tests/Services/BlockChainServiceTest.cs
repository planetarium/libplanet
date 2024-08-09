using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Node.Extensions;
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
    public void CreateWithInvalidOptions_ThrowTest()
    {
        Assert.Throws<InvalidOperationException>(CreateBlockChainService);

        static BlockChainService CreateBlockChainService()
        {
            var genesisOptions = new OptionsWrapper<GenesisOptions>(new GenesisOptions());
            var storeOptions = new OptionsWrapper<StoreOptions>(new StoreOptions());
            var policyService = new PolicyService();
            var logger = new NullLoggerFactory().CreateLogger<BlockChainService>();
            return new BlockChainService(
                genesisOptions: genesisOptions,
                storeOptions: storeOptions,
                policyService: policyService,
                actionLoaderProviders: [],
                logger: logger);
        }
    }

    [Fact]
    public void Create_Test()
    {
        var services = new ServiceCollection();
        services.AddLogging(configure => configure.AddProvider(NullLoggerProvider.Instance));
        services.AddOptionsConfigurator<NodeOptions, NodeOptionsConfigurator>();
        services.AddOptionsConfigurator<GenesisOptions, GenesisOptionsConfigurator>();
        services.AddOptionsConfigurator<StoreOptions, StoreOptionsConfigurator>();
        services.AddOptionsValidator<NodeOptions, NodeOptionsValidator>();
        services.AddOptionsValidator<GenesisOptions, GenesisOptionsValidator>();
        services.AddOptionsValidator<StoreOptions, StoreOptionsValidator>();
        var serviceProvider = services.BuildServiceProvider();
        var policyService = new PolicyService();
        var logger = new NullLoggerFactory().CreateLogger<BlockChainService>();
        var genesisOptions = serviceProvider.GetRequiredService<IOptions<GenesisOptions>>();
        var storeOptions = serviceProvider.GetRequiredService<IOptions<StoreOptions>>();
        var blockChainService = new BlockChainService(
            genesisOptions: genesisOptions,
            storeOptions: storeOptions,
            policyService: policyService,
            actionLoaderProviders: [],
            logger: logger);
        var blockChain = blockChainService.BlockChain;

        Assert.Equal(1, blockChain.Count);
    }

    [Fact]
    public async Task BlockAppended_TestAsync()
    {
        var services = new ServiceCollection();
        services.AddLogging(configure => configure.AddProvider(NullLoggerProvider.Instance));
        services.AddOptionsConfigurator<NodeOptions, NodeOptionsConfigurator>();
        services.AddOptionsConfigurator<GenesisOptions, GenesisOptionsConfigurator>();
        services.AddOptionsConfigurator<StoreOptions, StoreOptionsConfigurator>();
        services.AddOptionsValidator<NodeOptions, NodeOptionsValidator>();
        services.AddOptionsValidator<GenesisOptions, GenesisOptionsValidator>();
        services.AddOptionsValidator<StoreOptions, StoreOptionsValidator>();
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
