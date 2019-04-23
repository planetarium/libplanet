using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class AccountStateDeltaImplTest
    {
        private readonly Address[] _addr;
        private readonly IImmutableDictionary<Address, object> _states;

        public AccountStateDeltaImplTest()
        {
            Address Addr() => new PrivateKey().PublicKey.ToAddress();

            _addr = new[]
            {
                Addr(),
                Addr(),
                Addr(),
            };

            _states = new Dictionary<Address, object>()
            {
                [_addr[0]] = "a",
                [_addr[1]] = "b",
            }.ToImmutableDictionary();
        }

        [Fact]
        public void CreateNullDelta()
        {
            IAccountStateDelta delta = new AccountStateDeltaImpl(GetState);
            Assert.Empty(delta.UpdatedAddresses);
            Assert.Equal("a", delta.GetState(_addr[0]));
            Assert.Equal("b", delta.GetState(_addr[1]));
            Assert.Null(delta.GetState(_addr[2]));
        }

        [Fact]
        public void GetSetState()
        {
            IAccountStateDelta init = new AccountStateDeltaImpl(GetState);
            IAccountStateDelta a = init.SetState(_addr[0], "A");
            Assert.Equal("A", a.GetState(_addr[0]));
            Assert.Equal("a", init.GetState(_addr[0]));
            Assert.Equal("b", a.GetState(_addr[1]));
            Assert.Equal("b", init.GetState(_addr[1]));
            Assert.Null(a.GetState(_addr[2]));
            Assert.Null(init.GetState(_addr[2]));
            Assert.Equal(
                new[] { _addr[0] }.ToImmutableHashSet(),
                a.UpdatedAddresses
            );
            Assert.Empty(init.UpdatedAddresses);

            IAccountStateDelta b = a.SetState(_addr[0], "z");
            Assert.Equal("z", b.GetState(_addr[0]));
            Assert.Equal("A", a.GetState(_addr[0]));
            Assert.Equal("a", init.GetState(_addr[0]));
            Assert.Equal("b", b.GetState(_addr[1]));
            Assert.Equal("b", a.GetState(_addr[1]));
            Assert.Null(b.GetState(_addr[2]));
            Assert.Null(a.GetState(_addr[2]));
            Assert.Equal(
                new[] { _addr[0] }.ToImmutableHashSet(),
                a.UpdatedAddresses
            );
            Assert.Empty(init.UpdatedAddresses);

            IAccountStateDelta c = b.SetState(_addr[0], "a");
            Assert.Equal("a", c.GetState(_addr[0]));
            Assert.Equal("z", b.GetState(_addr[0]));
            Assert.Empty(c.UpdatedAddresses);
            Assert.Empty(init.UpdatedAddresses);
        }

        private object GetState(Address address)
        {
            try
            {
                return _states[address];
            }
            catch (KeyNotFoundException)
            {
                return null;
            }
        }
    }
}
