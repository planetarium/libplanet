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
    public class ProposalTest
    {
        private ILogger _logger;

        public ProposalTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ProposalTest>();

            _logger = Log.ForContext<ProposalTest>();
        }

        [Fact]
        public void InvalidSignature()
        {
            MemoryStoreFixture fx = new MemoryStoreFixture();
            var codec = new Codec();

            ProposalMetaData metaData = new ProposalMetaData(
                1,
                0,
                codec.Encode(fx.Block1.MarshalBlock()),
                new PrivateKey().PublicKey,
                -1);

            // Empty Signature
            var emptySigBencodex = metaData.Encoded.Add(Proposal.SignatureKey, Array.Empty<byte>());
            Assert.Throws<ArgumentNullException>(() => new Proposal(emptySigBencodex));

            // Invalid Signature
            var invSigBencodex = metaData.Encoded.Add(
                Proposal.SignatureKey,
                new PrivateKey().Sign(codec.Encode(fx.Block2.MarshalBlock())));
            Assert.Throws<ArgumentException>(() => new Proposal(invSigBencodex));
        }

        [Fact]
        public void Sign()
        {
            MemoryStoreFixture fx = new MemoryStoreFixture();
            var codec = new Codec();
            var key = new PrivateKey();

            ProposalMetaData metaData = new ProposalMetaData(
                1,
                0,
                codec.Encode(fx.Block1.MarshalBlock()),
                key.PublicKey,
                -1);
            Proposal proposal = metaData.Sign(key);

            Assert.Equal(proposal.Signature, key.Sign(metaData.ByteArray));
            Assert.True(key.PublicKey.Verify(metaData.ByteArray, proposal.Signature));
        }
    }
}
