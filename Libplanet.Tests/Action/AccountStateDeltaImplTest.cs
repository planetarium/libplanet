using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Crypto;
using Uno.Extensions;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class AccountStateDeltaImplTest
    {
        private readonly IAccountStateView _view;
        private readonly Address[] _addr;

        public AccountStateDeltaImplTest()
        {
            Address Addr() => new PrivateKey().PublicKey.ToAddress();

            _addr = new[]
            {
                Addr(),
                Addr(),
                Addr(),
            };

            _view = new DumbAccountStateView
            {
                [_addr[0]] = "a",
                [_addr[1]] = "b",
            };
        }

        [Fact]
        public void CreateNullDelta()
        {
            IAccountStateDelta delta = new AccountStateDeltaImpl(_view);
            Assert.Empty(delta.UpdatedAddresses);
            Assert.Equal("a", delta.GetState(_addr[0]));
            Assert.Equal("b", delta.GetState(_addr[1]));
            Assert.Null(delta.GetState(_addr[2]));
        }

        [Fact]
        public void GetSetState()
        {
            IAccountStateDelta init = new AccountStateDeltaImpl(_view);
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

        private class DumbAccountStateView
            : Dictionary<Address, object>, IAccountStateView
        {
            public object GetAccountState(Address address)
            {
                try
                {
                    return this[address];
                }
                catch (KeyNotFoundException)
                {
                    return null;
                }
            }
        }
    }
}
