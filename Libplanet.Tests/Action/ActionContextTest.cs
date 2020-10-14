using System;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Store.Trie;
using Libplanet.Tests.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class ActionContextTest
    {
        [Fact]
        public void RandomShouldBeDeterministic()
        {
            (int Seed, int Expected)[] testCases =
            {
                (0, 1559595546),
                (1, 534011718),
            };
            var address = new Address("21744f4f08db23e044178dafb8273aeb5ebe6644");
            foreach (var (seed, expected) in testCases)
            {
                var context = new ActionContext(
                    signer: address,
                    miner: address,
                    blockIndex: 1,
                    previousStates: new DumbAccountStateDelta(),
                    randomSeed: seed
                );
                IRandom random = context.Random;
                Assert.Equal(expected, random.Next());
            }
        }

        [Fact]
        public void GuidShouldBeDeterministic()
        {
            var address = new Address("21744f4f08db23e044178dafb8273aeb5ebe6644");
            var context1 = new ActionContext(
                signer: address,
                miner: address,
                blockIndex: 1,
                previousStates: new DumbAccountStateDelta(),
                randomSeed: 0
            );

            var context2 = new ActionContext(
                signer: address,
                miner: address,
                blockIndex: 1,
                previousStates: new DumbAccountStateDelta(),
                randomSeed: 0
            );

            var context3 = new ActionContext(
                signer: address,
                miner: address,
                blockIndex: 1,
                previousStates: new DumbAccountStateDelta(),
                randomSeed: 1
            );

            (Guid Expected, Guid Diff)[] testCases =
            {
                (
                    new Guid("6f460c1a-755d-48e4-ad67-65d5f519dbc8"),
                    new Guid("8286d046-9740-43e4-95cf-ff46699c73c4")
                ),
                (
                    new Guid("3b347c2b-f837-4085-ac5e-64005393b30d"),
                    new Guid("3410cda1-5b13-434e-af84-a54adf7a0ea0")
                ),
            };

            foreach (var (expected, diff) in testCases)
            {
                Assert.Equal(expected, context1.Random.GenerateRandomGuid());
                Assert.Equal(expected, context2.Random.GenerateRandomGuid());
                Assert.Equal(diff, context3.Random.GenerateRandomGuid());
            }
        }

        [Fact]
        public void GuidVersionAndVariant()
        {
            var address = new Address("21744f4f08db23e044178dafb8273aeb5ebe6644");

            for (var i = 0; i < 100; i++)
            {
                var context = new ActionContext(
                        signer: address,
                        miner: address,
                        blockIndex: 1,
                        previousStates: new DumbAccountStateDelta(),
                        randomSeed: i
                    );
                var guid = context.Random.GenerateRandomGuid().ToString();

                Assert.Equal('4', guid[14]);
                Assert.True(guid[19] >= '8' && guid[19] <= 'b');
            }
        }

        [Fact]
        public void GetUnconsumedContext()
        {
            var random = new System.Random();
            var original = new ActionContext(
                signer: random.NextAddress(),
                miner: random.NextAddress(),
                blockIndex: 1,
                previousStates: new DumbAccountStateDelta(),
                randomSeed: random.Next()
            );

            // Consume original's random state...
            int[] values =
            {
                original.Random.Next(),
                original.Random.Next(),
                original.Random.Next(),
            };

            IActionContext clone = original.GetUnconsumedContext();
            Assert.Equal(
                values,
                new[] { clone.Random.Next(), clone.Random.Next(), clone.Random.Next() }
            );
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void LazyPreviousStateRootHash(bool callPreviousStateRootHash)
        {
            var keyValueStore = new MemoryKeyValueStore();
            ITrie previousBlockStatesTrie = new MerkleTrie(keyValueStore);
            previousBlockStatesTrie = previousBlockStatesTrie.Set(new byte[0], default(Null));
            var random = new System.Random();
            var actionContext = new ActionContext(
                signer: random.NextAddress(),
                miner: random.NextAddress(),
                blockIndex: 1,
                previousStates: new DumbAccountStateDelta(),
                randomSeed: random.Next(),
                previousBlockStatesTrie: previousBlockStatesTrie
            );

            if (callPreviousStateRootHash)
            {
                _ = actionContext.PreviousStateRootHash;
            }

            Assert.Equal(callPreviousStateRootHash ? 1 : 0, keyValueStore.ListKeys().Count());
        }

        private class DumbAccountStateDelta : IAccountStateDelta
        {
            public IImmutableSet<Address> UpdatedAddresses =>
                ImmutableHashSet<Address>.Empty;

            public IImmutableSet<Address> StateUpdatedAddresses =>
                ImmutableHashSet<Address>.Empty;

            public IImmutableDictionary<Address, IImmutableSet<Currency>>
            UpdatedFungibleAssets =>
                ImmutableDictionary<Address, IImmutableSet<Currency>>.Empty;

            public IValue GetState(Address address) => null;

            public IAccountStateDelta SetState(Address address, IValue state) => this;

            public FungibleAssetValue GetBalance(Address address, Currency currency) =>
                new FungibleAssetValue(currency);

            public IAccountStateDelta MintAsset(Address recipient, FungibleAssetValue value) =>
                this;

            public IAccountStateDelta TransferAsset(
                Address sender,
                Address recipient,
                FungibleAssetValue value,
                bool allowNegativeBalance = false
            ) => this;

            public IAccountStateDelta BurnAsset(Address owner, FungibleAssetValue value) => this;
        }
    }
}
