using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Transports;
using Libplanet.Tests.Common.Action;
using NetMQ;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    [Collection("NetMQConfiguration")]
    public class ConsensusReactorTest : ReactorTest, IDisposable
    {
        public ConsensusReactorTest(ITestOutputHelper output)
            : base(output)
        {
        }

        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }

        public override IReactor CreateReactor(
            BlockChain<DumbAction> blockChain,
            PrivateKey? key = null,
            string host = "localhost",
            int consensusPort = 5101,
            long id = 0,
            List<PublicKey> validators = null!,
            List<BoundPeer> validatorPeers = null!,
            int newHeightDelayMilliseconds = 10_000)
        {
            key ??= new PrivateKey();

            var consensusTransport = new NetMQTransport(
                key,
                TestUtils.AppProtocolVersion,
                null,
                8,
                host,
                consensusPort,
                Array.Empty<IceServer>(),
                null);

            return new ConsensusReactor<DumbAction>(
                consensusTransport,
                blockChain,
                key,
                id,
                validatorPeers.ToImmutableHashSet(),
                TimeSpan.FromMilliseconds(newHeightDelayMilliseconds));
        }
    }
}
