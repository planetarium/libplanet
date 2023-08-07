using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Action.Tests.State
{
    public class WorldTest
    {
        private readonly System.Random _random;
        private readonly byte[] _randomAddrBytes;

        public WorldTest()
        {
            _random = new System.Random();
            _randomAddrBytes = new byte[20];
        }

        public Address RandomAddress
        {
            get
            {
                _random.NextBytes(_randomAddrBytes);
                return new Address(_randomAddrBytes);
            }
        }

        [Fact]
        public void Create()
        {
            IAccount mockAccount = Account.Create(
                MockAccountState.Empty.SetState(RandomAddress, new Integer(1)));
            Address accountAddress = RandomAddress;

            MockWorldState baseWorld = new MockWorldState(
                ImmutableDictionary<Address, IAccount>.Empty.Add(accountAddress, mockAccount));
            IWorld world = World.Create(baseWorld);
            Assert.IsType<World>(world);
            // GetAccount() will retrieve account from World._baseState
            Assert.Equal(mockAccount, world.GetAccount(accountAddress));
        }

        [Fact]
        public void SetAccount()
        {
            IAccount mockAccount = Account.Create(
                MockAccountState.Empty.SetState(RandomAddress, new Integer(1)));
            Address accountAddress = RandomAddress;

            MockWorldState baseWorld = new MockWorldState();
            IWorld world = World.Create(baseWorld);
            Assert.Null(world.GetAccount(accountAddress));

            // TestGetAccount() will retrieve account from World.Delta
            world = world.SetAccount(mockAccount);
            Assert.Single(world.Delta.UpdatedAddresses);
            Assert.Equal(accountAddress, world.Delta.UpdatedAddresses.First());
            Assert.Equal(mockAccount, world.GetAccount(accountAddress));
        }

        [Fact]
        public void Flush()
        {
            MockWorldState baseWorld = new MockWorldState();
            IWorld world = World.Create(baseWorld);

            // Before flush, updated accounts exists in World.Delta.
            IAccount emptyAccount = Account.Create(MockAccountState.Empty);
            Address accountAddress = RandomAddress;
            world = world.SetAccount(emptyAccount);
            Assert.Single(world.Delta.UpdatedAddresses);
            Assert.Equal(accountAddress, world.Delta.UpdatedAddresses.First());

            // After flush, World.Delta moves to World._baseState.Delta
            world = World.Flush(world);
            Assert.Empty(world.Delta.UpdatedAddresses);
            Assert.NotNull(world.GetAccount(accountAddress));
        }

        [Fact]
        public void LegacyFlag()
        {
            // New World have legacy account is non-legacy world
            MockWorldState baseWorldNonLegacy = new MockWorldState(
                ImmutableDictionary<Address, IAccount>.Empty.Add(
                    ReservedAddresses.LegacyAccount, Account.Create(MockAccountState.Empty)));
            IWorld world = World.Create(baseWorldNonLegacy);
            Assert.False(world.Legacy);

            // New world does not have legacy account is legacy world
            MockWorldState baseWorld = new MockWorldState();
            world = World.Create(baseWorld);
            Assert.True(world.Legacy);

            // world from SetAccount with legacy account address is legacy world
            IAccount account = Account.Create(MockAccountState.Empty);
            world = world.SetAccount(account);
            Assert.True(world.Legacy);

            // World from SetAccount with non-legacy account address is non-legacy world
            world = world.SetAccount(account);
            Assert.False(world.Legacy);

            // Once world has been set as non-legacy, it cannot recover to legacy world
            world = world.SetAccount(account);
            Assert.False(world.Legacy);
        }
    }
}
