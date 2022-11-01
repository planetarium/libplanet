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
    public class ProposalMetadataTest
    {
        private ILogger _logger;

        public ProposalMetadataTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ProposalMetadataTest>();

            _logger = Log.ForContext<ProposalMetadataTest>();
        }

        [Fact]
        public void InvalidValues()
        {
            MemoryStoreFixture fx = new MemoryStoreFixture();
            var codec = new Codec();

            Assert.Throws<ArgumentOutOfRangeException>(() => new ProposalMetadata(
                    -1,
                    0,
                    DateTimeOffset.UtcNow,
                    new PrivateKey().PublicKey,
                    codec.Encode(fx.Block1.MarshalBlock()),
                    -1));

            Assert.Throws<ArgumentOutOfRangeException>(() => new ProposalMetadata(
                1,
                -1,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                codec.Encode(fx.Block1.MarshalBlock()),
                -1));

            Assert.Throws<ArgumentOutOfRangeException>(() => new ProposalMetadata(
                1,
                0,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                codec.Encode(fx.Block1.MarshalBlock()),
                -2));
        }
    }
}
