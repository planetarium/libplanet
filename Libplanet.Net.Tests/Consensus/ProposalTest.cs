using System;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Net.Consensus;
using Libplanet.Tests.Store;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
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
                fx.Block1.Timestamp,
                TestUtils.Peer1Priv.PublicKey,
                -1);

            // Empty Signature
            var emptySigBencodex = metaData.Encoded.Add(Proposal.SignatureKey, Array.Empty<byte>());
            Assert.Throws<ArgumentNullException>(() => new Proposal(emptySigBencodex));

            // Invalid Signature
            var invSigBencodex = metaData.Encoded.Add(
                Proposal.SignatureKey,
                TestUtils.Peer1Priv.Sign(codec.Encode(fx.Block2.MarshalBlock())));
            Assert.Throws<ArgumentException>(() => new Proposal(invSigBencodex));
        }

        [Fact]
        public void Sign()
        {
            MemoryStoreFixture fx = new MemoryStoreFixture();
            var codec = new Codec();

            ProposalMetaData metaData = new ProposalMetaData(
                1,
                0,
                codec.Encode(fx.Block1.MarshalBlock()),
                fx.Block1.Timestamp,
                TestUtils.Peer1Priv.PublicKey,
                -1);

            Proposal proposal = metaData.Sign(TestUtils.Peer1Priv);

            Assert.Equal(proposal.Signature, TestUtils.Peer1Priv.Sign(metaData.ByteArray));
            Assert.True(
                TestUtils.Peer1Priv.PublicKey.Verify(metaData.ByteArray, proposal.Signature));
        }
    }
}
