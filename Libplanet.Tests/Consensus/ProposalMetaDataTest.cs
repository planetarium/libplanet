using System;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Store;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Consensus
{
    public class ProposalMetaDataTest
    {
        private ILogger _logger;

        public ProposalMetaDataTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ProposalMetaDataTest>();

            _logger = Log.ForContext<ProposalMetaDataTest>();
        }

        [Fact]
        public void InvalidValues()
        {
            MemoryStoreFixture fx = new MemoryStoreFixture();
            var codec = new Codec();

            Assert.Throws<ArgumentOutOfRangeException>(() => new ProposalMetaData(
                    -1,
                    0,
                    codec.Encode(fx.Block1.MarshalBlock()),
                    fx.Block1.Timestamp,
                    new PrivateKey().PublicKey,
                    -1));

            Assert.Throws<ArgumentOutOfRangeException>(() => new ProposalMetaData(
                1,
                -1,
                codec.Encode(fx.Block1.MarshalBlock()),
                fx.Block1.Timestamp,
                new PrivateKey().PublicKey,
                -1));

            Assert.Throws<ArgumentOutOfRangeException>(() => new ProposalMetaData(
                1,
                0,
                codec.Encode(fx.Block1.MarshalBlock()),
                fx.Block1.Timestamp,
                new PrivateKey().PublicKey,
                -2));
        }
    }
}
