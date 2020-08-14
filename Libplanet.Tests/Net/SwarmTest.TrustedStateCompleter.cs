using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Store;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Serilog.Events;
using Xunit;

namespace Libplanet.Tests.Net
{
    public partial class SwarmTest
    {
        [Fact]
        public async Task TrustedStateCompleter()
        {
            StateCompleter<DumbAction> noComplete = StateCompleters<DumbAction>.Reject;

            // The chain with incomplete states
            var incompleteStateStore = new DefaultStore(null);
            (_, Address[] addresses, BlockChain<DumbAction> incompleteChain) =
                BlockChainTest.MakeIncompleteBlockStates(
                    incompleteStateStore, incompleteStateStore);
            Swarm<DumbAction> incompleteSwarm = CreateSwarm(incompleteChain);
            Assert.Throws<IncompleteBlockStatesException>(() =>
                incompleteChain.GetState(addresses[0], stateCompleter: noComplete)
            );

            // The chain with complete states
            var completeStateStore = new DefaultStore(null);
            BlockChain<DumbAction> completeChain =
                new BlockChain<DumbAction>(
                    incompleteChain.Policy,
                    completeStateStore,
                    completeStateStore,
                    incompleteChain.Genesis);
            Swarm<DumbAction> completeSwarm = CreateSwarm(completeChain);
            foreach (HashDigest<SHA256> blockHash in incompleteChain.BlockHashes.Skip(1))
            {
                completeChain.Append(incompleteChain[blockHash]);
            }

            _logger.CompareBothChains(
                LogEventLevel.Debug,
                "incomplete",
                incompleteChain,
                "complete",
                completeChain
            );
            IValue completeState = completeChain.GetState(
                addresses[0],
                stateCompleter: StateCompleters<DumbAction>.Reject
            );
            Assert.Equal((Text)"0,5", completeState);

            // Network
            await StartAsync(completeSwarm);
            await StartAsync(incompleteSwarm);
            await incompleteSwarm.AddPeersAsync(new[] { completeSwarm.AsPeer }, null);
            Assert.Throws<IncompleteBlockStatesException>(() =>
                incompleteChain.GetState(addresses[0], stateCompleter: noComplete)
            );

            // Empty trustedStateValidators disallow to reuse others states:
            StateCompleterSet<DumbAction> noTrust =
                await incompleteSwarm.GetTrustedStateCompleterAsync(
                    ImmutableHashSet<Address>.Empty,
                    TimeSpan.FromSeconds(10),
                    fallbackCompleterSet: StateCompleterSet<DumbAction>.Reject
                );
            Assert.Throws<IncompleteBlockStatesException>(() =>
                incompleteChain.GetState(addresses[0], stateCompleter: noTrust.StateCompleter)
            );

            // If any trustStateValidators have block states reuse them:
            StateCompleterSet<DumbAction> scs = await incompleteSwarm.GetTrustedStateCompleterAsync(
                ImmutableHashSet.Create(completeSwarm.Address),
                TimeSpan.FromSeconds(10),
                fallbackCompleterSet: StateCompleterSet<DumbAction>.Reject
            );
            Assert.Equal(
                (Text)"0,5",
                incompleteChain.GetState(addresses[0], stateCompleter: scs.StateCompleter)
            );
            Assert.Equal(
                (Text)"0,5",
                incompleteChain.GetState(addresses[0], stateCompleter: noComplete)
            );
        }

        [Fact(Timeout = Timeout)]
        // FIXME: typo
        public async Task TrustNewTipStatesAfterReog()
        {
            var incompleteStore = new DefaultStore(null);
            (_, Address[] addresses, BlockChain<DumbAction> incomplete) =
                BlockChainTest.MakeIncompleteBlockStates(incompleteStore, incompleteStore);
            Block<DumbAction> genesis = incomplete.Genesis;
            Swarm<DumbAction> incompleteSwarm = CreateSwarm(incomplete);

            var eventualCanonStore = new DefaultStore(null);
            BlockChain<DumbAction> eventualCanon = new BlockChain<DumbAction>(
                incomplete.Policy,
                eventualCanonStore,
                eventualCanonStore,
                genesis
            );
            Swarm<DumbAction> eventualCanonSwarm = CreateSwarm(eventualCanon);

            // Common blocks
            for (int i = 0; i <= addresses.Length + 1; i++)
            {
                Block<DumbAction> commonBlock = incomplete[i + 1];
                eventualCanon.Append(commonBlock);
            }

            Assert.Null(incompleteStore.GetBlockStates(incomplete[1].Hash));

            // Uncommon blocks
            var random = new Random();
            for (int i = 0; i < 10; i++)
            {
                var privateKey = new PrivateKey();
                var tx = Transaction<DumbAction>.Create(
                    0,
                    privateKey,
                    genesis.Hash,
                    new[] { new DumbAction(privateKey.ToAddress(), "a") }
                );
                eventualCanon.StageTransaction(tx);
                await eventualCanon.MineBlock(random.NextAddress());
            }

            _logger.CompareBothChains(
                LogEventLevel.Debug,
                nameof(incomplete),
                incomplete,
                nameof(eventualCanon),
                eventualCanon
            );

            Block<DumbAction> staleTip = incomplete.Tip;
            Block<DumbAction> canonTip = eventualCanon.Tip;
            BlockChain<DumbAction>.ReorgedEventArgs reorged = null;
            incomplete.Reorged += (sender, args) => reorged = args;

            await StartAsync(
                incompleteSwarm,
                ImmutableHashSet.Create(eventualCanonSwarm.Address)
            );
            await StartAsync(
                eventualCanonSwarm,
                ImmutableHashSet.Create(incompleteSwarm.Address)
            );
            await incompleteSwarm.AddPeersAsync(new[] { eventualCanonSwarm.AsPeer }, null);
            eventualCanonSwarm.BroadcastBlock(canonTip);

            while (reorged is null)
            {
                await Task.Delay(500);
            }

            _logger.CompareBothChains(
                LogEventLevel.Debug,
                nameof(incomplete),
                incomplete,
                nameof(eventualCanon),
                eventualCanon
            );
            Assert.Equal(incomplete.Tip, canonTip);
            Assert.Equal(reorged.OldTip, staleTip);
            Assert.Equal(reorged.NewTip, canonTip);
            Assert.Equal(
                eventualCanonStore.GetBlockStates(canonTip.Hash),
                incompleteStore.GetBlockStates(canonTip.Hash)
            );
            Assert.Null(incompleteStore.GetBlockStates(incomplete[1].Hash));
        }
    }
}
