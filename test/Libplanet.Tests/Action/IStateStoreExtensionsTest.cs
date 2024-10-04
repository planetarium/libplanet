using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class IStateStoreExtensionsTest
    {
        [Fact]
        public void EmptyCommitHasSideEffect()
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            Dictionary data = Dictionary.Empty;

            var hash = stateStore.CommitWorld(data);
            Assert.NotEqual(hash, MerkleTrie.EmptyRootHash);
            var trie = stateStore.GetStateRoot(hash);
            Assert.Equal(
                BlockMetadata.CurrentProtocolVersion,
                Assert.IsType<TrieMetadata>(trie.GetMetadata()).Version);
        }

        [Fact]
        public void CannotCommitInvalidData()
        {
            Random random = new Random();
            Binary GetRandomBinary(int size = Address.Size)
            {
                byte[] buffer = new byte[size];
                random.NextBytes(buffer);
                return new Binary(buffer);
            }

            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            Dictionary data;

            data = Dictionary.Empty.Add("Invalid", "key type");
            Assert.Throws<ArgumentException>(() => stateStore.CommitWorld(data));

            data = Dictionary.Empty.Add(GetRandomBinary(), "Invalid format");
            Assert.Throws<ArgumentException>(() => stateStore.CommitWorld(data));

            data = Dictionary.Empty
                .Add(
                    GetRandomBinary(8),
                    Dictionary.Empty
                        .Add(
                            GetRandomBinary(16),
                            "Invalid key length"));
            Assert.Throws<ArgumentException>(() => stateStore.CommitWorld(data));

            data = Dictionary.Empty
                .Add(
                    GetRandomBinary(),
                    Dictionary.Empty
                        .Add(
                            GetRandomBinary(),
                            "Valid"));
        }

        [Fact]
        public void InitialStateHelper()
        {
            IStateStore stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var data = ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>.Empty;
            var legacyAddress = new PrivateKey().Address;
            var legacyValue = new Text("Legacy value");
            var legacyStates = ImmutableDictionary<Address, IValue>.Empty
                .Add(legacyAddress, legacyValue);
            var validatorKey = new PrivateKey();
            var validatorPower = new Integer(123);
            var validatorSet = new ValidatorSet(
                new List<Validator>() { new Validator(validatorKey.PublicKey, validatorPower) });
            data = data.AddOrUpdateLegacyState(legacyStates);
            data = data.AddOrUpdateValidatorSet(validatorSet);

            var hash = stateStore.CommitWorld(data);
            var world = stateStore.GetWorld(hash);
            Assert.Equal(
                legacyValue,
                world.GetAccount(ReservedAddresses.LegacyAccount).GetState(legacyAddress));
            Assert.Equal(
                validatorSet,
                world.GetValidatorSet());
        }
    }
}
