using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BenchmarkDotNet.Attributes;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;

namespace Libplanet.Benchmarks
{
    public class NetMQTransportBenchmark
    {
        private NetMQTransport _sender;
        private NetMQTransport _receiver;

        [GlobalSetup]
        public async Task GlobalSetup()
        {
            var senderPrivateKey = new PrivateKey();
            var receiverPrivateKey = new PrivateKey();
            _sender = await NetMQTransport.Create(
                senderPrivateKey,
                default,
                null,
                8,
                "127.0.0.1",
                6000,
                null,
                null
            );
            _receiver = await NetMQTransport.Create(
                receiverPrivateKey,
                default,
                null,
                8,
                "127.0.0.1",
                6001,
                null,
                null
            );

            _receiver.ProcessMessageHandler.Register(ProcessMessage);

            _ = Task.Run(async () => await _sender.StartAsync());
            _ = Task.Run(async () => await _receiver.StartAsync());

            await Task.WhenAll(
                _sender.WaitForRunningAsync(),
                _receiver.WaitForRunningAsync()
            );
            await Task.Delay(1000);
        }

        private async Task ProcessMessage(Message m)
        {
            var reply = new PongMsg();
            reply.Identity = m.Identity;
            await _receiver.ReplyMessageAsync(reply, default);
        }

        [Benchmark]
        public async Task PingPong()
        {
            await Parallel.ForEachAsync(
                Enumerable.Range(0, 10),
                async (_, ct) =>
                {
                    for (var i = 0; i < 100; i++)
                    {
                        await _sender.SendMessageAsync(
                            _receiver.AsPeer,
                            new PingMsg(),
                            TimeSpan.FromSeconds(1),
                            default
                        );
                    }
                }
            );
        }

        [GlobalCleanup]
        public async Task GlobalCleanup()
        {
            await _sender.StopAsync(TimeSpan.Zero);
            await _receiver.StopAsync(TimeSpan.Zero);
            _sender.Dispose();
            _receiver.Dispose();
        }
    }
}
