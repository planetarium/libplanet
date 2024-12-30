using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Node.Extensions;
using Libplanet.Node.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;

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
    public void Create_Using_Genesis_Configuration_Test()
    {
        var genesisKey = new PrivateKey();
        string tempDirectory = Path.GetTempPath();
        string tempFilePath = Path.Combine(tempDirectory, Guid.NewGuid().ToString() + ".json");
        Address accountA = new("0000000000000000000000000000000000000000");
        Address accountB = new("0000000000000000000000000000000000000001");
        Address addressA = new("0000000000000000000000000000000000000000");
        Address addressB = new("0000000000000000000000000000000000000001");
        var codec = new Codec();

        try
        {
            string jsonContent = $@"
            {{
                ""{accountA}"": {{
                    ""{addressA}"": ""{ByteUtil.Hex(codec.Encode((Text)"A"))}"",
                    ""{addressB}"": ""{ByteUtil.Hex(codec.Encode((Integer)123))}""
                }},
                ""{accountB}"": {{
                    ""{addressA}"": ""{ByteUtil.Hex(codec.Encode((Text)"B"))}"",
                    ""{addressB}"": ""{ByteUtil.Hex(codec.Encode((Integer)456))}""
                }}
            }}";
            File.WriteAllText(tempFilePath, jsonContent);
            var configDict = new Dictionary<string, string>
            {
                { "Genesis:GenesisConfigurationPath", tempFilePath },
                { "Genesis:GenesisKey", ByteUtil.Hex(genesisKey.ToByteArray()) },
            };

            var configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(configDict!)
                .Build();

            var services = new ServiceCollection();
            services.AddSingleton<ILoggerFactory, NullLoggerFactory>();
            services.AddLogging();
            services.AddLibplanetNode(configuration);
            var serviceProvider = services.BuildServiceProvider();
            var blockChainService = serviceProvider.GetRequiredService<IBlockChainService>();
            var blockChain = blockChainService.BlockChain;

            Assert.Equal(
                (Text)"A",
                blockChain.GetNextWorldState()?.GetAccountState(accountA).GetState(addressA));
            Assert.Equal(
                (Integer)123,
                blockChain.GetNextWorldState()?.GetAccountState(accountA).GetState(addressB));
            Assert.Equal(
                (Text)"B",
                blockChain.GetNextWorldState()?.GetAccountState(accountB).GetState(addressA));
            Assert.Equal(
                (Integer)456,
                blockChain.GetNextWorldState()?.GetAccountState(accountB).GetState(addressB));
        }
        finally
        {
            if (File.Exists(tempFilePath))
            {
                File.Delete(tempFilePath);
            }
        }
    }
}
