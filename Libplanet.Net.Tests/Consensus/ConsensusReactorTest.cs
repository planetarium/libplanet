using System;
using System.Collections.Generic;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Protocols;
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
            RoutingTable? swarmTable = null,
            RoutingTable? consensusTable = null,
            string host = "localhost",
            int swarmPort = 5001,
            int consensusPort = 5101,
            long id = 0,
            List<PublicKey> validators = null!)
        {
            key ??= new PrivateKey();
            var swarmTransport = new NetMQTransport(
                key,
                TestUtils.AppProtocolVersion,
                null,
                8,
                host,
                swarmPort,
                Array.Empty<IceServer>(),
                null);

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
                swarmTable ?? new RoutingTable(key.ToAddress()),
                consensusTable ?? new RoutingTable(key.ToAddress()),
                swarmTransport,
                consensusTransport,
                blockChain,
                key,
                id,
                validators);
        }

        public override ConsensusReactor<DumbAction> CreateConcreteReactor(
            BlockChain<DumbAction> blockChain,
            PrivateKey? key = null,
            RoutingTable? swarmTable = null,
            RoutingTable? consensusTable = null,
            string host = "localhost",
            int swarmPort = 5001,
            int consensusPort = 5101,
            long id = 0,
            List<PublicKey> validators = null!)
        {
            return (ConsensusReactor<DumbAction>)CreateReactor(
                blockChain,
                key,
                swarmTable,
                consensusTable,
                host,
                swarmPort,
                consensusPort,
                id,
                validators);
        }
    }
}
