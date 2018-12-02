using System;
using System.Collections.Generic;
using System.Collections.Immutable;

using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;
using Nancy;
using Nancy.Bootstrapper;
using Nancy.Configuration;

namespace Libplanet.Explorer
{
    public class DummyAction : IAction
    {
        public IImmutableDictionary<string, object> PlainValue
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public void LoadPlainValue(
            IImmutableDictionary<string, object> plainValue)
        {
            throw new NotImplementedException();
        }
    }

    public class Bootstrapper : DefaultNancyBootstrapper
    {
        protected override Func<ITypeCatalog, NancyInternalConfiguration>
            InternalConfiguration
        {
            get
            {
                return NancyInternalConfiguration.WithOverrides(config =>
                {
                    config.TrieNodeFactory = typeof (CustomTrieNodeFactory);
                });
            }
        }

        public override void Configure(INancyEnvironment environment)
        {
            environment.Tracing(enabled: false, displayErrorTraces: true);
            base.Configure(environment);
        }
    }

    public class BlockModel
    {
        public readonly int Index;
        public readonly int Difficulty;
        public readonly Nonce Nonce;

        public BlockModel(int index, int difficulty, Nonce nonce)
        {
            Index = index;
            Difficulty = difficulty;
            Nonce = nonce;
        }
    }

    public class Explorer : NancyModule
    {
        public Explorer()
        {
            Get("/", args => "Hello from Nancy running on CoreCLR");
            Get("/blocks/[blockHash:HashDigest]/", param =>
            {
                Block<DummyAction> block = getDummyBlock();
                var bm = new BlockModel(
                    block.Index,
                    block.Difficulty,
                    block.Nonce);
                return View["get_block", bm];
            });
        }

        public Block<DummyAction> getDummyBlock()
        {
            Console.WriteLine("Yippe Kay");
            var rewardBenificiary = new Address(
                ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644")
            );
            Console.WriteLine("Yippe Kay yey");
            var timestamp = new DateTime(2018, 11, 29);
            Console.WriteLine("Yippe Kay yey moth");
            return Block<DummyAction>.Mine(
                index: 0,
                difficulty: 0,
                rewardBeneficiary: rewardBenificiary,
                previousHash: null,
                timestamp: timestamp,
                transactions: new List<Transaction<DummyAction>>()
            );
        }
    }
}
