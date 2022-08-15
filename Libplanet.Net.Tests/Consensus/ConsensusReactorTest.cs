using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public class ConsensusReactorTest : ConsensusReactorTestBase
    {
        private const int Timeout = 60 * 1000;

        public ConsensusReactorTest(ITestOutputHelper output)
            : base(output)
        {
        }

        [Fact(Timeout = Timeout)]
        public async void StartAsync()
        {
            foreach (var reactor in ConsensusReactors)
            {
                _ = reactor.StartAsync(CancellationTokenSource.Token);
            }

            Dictionary<string, JsonElement> json;

            await Task.Delay(PropagationDelay, CancellationTokenSource.Token);
            foreach (var reactor in ConsensusReactors)
            {
                await reactor.StopAsync(CancellationTokenSource.Token);
            }

            var isPolka = new bool[Count];

            for (var node = 0; node < Count; ++node)
            {
                json = JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                    ConsensusReactors[node].ToString())
                        ?? throw new NullReferenceException(
                            $"Failed to deserialize consensus reactor");

                // Genesis block exists, add 1 to the height.
                if (json["step"].GetString() == "EndCommit")
                {
                    isPolka[node] = true;
                }
                else
                {
                    Log.Error(
                        "[Failed]: {0} {1}",
                        json["step"].GetString(),
                        BlockChains[node].Count);
                    isPolka[node] = false;
                }
            }

            Assert.Equal(Count, isPolka.Sum(x => x ? 1 : 0));

            for (var node = 0; node < Count; ++node)
            {
                json = JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(
                    ConsensusReactors[node].ToString())
                        ?? throw new NullReferenceException(
                            $"Failed to deserialize consensus reactor");

                Assert.Equal(ValidatorPeers[node].Address.ToString(), json["node_id"].GetString());
                Assert.Equal(1, json["height"].GetInt32());
                Assert.Equal(2, BlockChains[node].Count);
                Assert.Equal(0L, json["round"].GetInt32());
                Assert.Equal("EndCommit", json["step"].GetString());
            }
        }
    }
}
