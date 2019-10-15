using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class AccountStateDeltaImplTest
    {
        private readonly Address[] _addr;
        private readonly IImmutableDictionary<Address, IValue> _states;

        public AccountStateDeltaImplTest()
        {
            Address Addr() => new PrivateKey().PublicKey.ToAddress();

            _addr = new[]
            {
                Addr(),
                Addr(),
                Addr(),
            };

            _states = new Dictionary<Address, IValue>
            {
                [_addr[0]] = (Text)"a",
                [_addr[1]] = (Text)"b",
            }.ToImmutableDictionary();
        }

        [Fact]
        public void CreateNullDelta()
        {
            IAccountStateDelta delta = new AccountStateDeltaImpl(GetState);
            Assert.Empty(delta.UpdatedAddresses);
            Assert.Equal("a", (Text)delta.GetState(_addr[0]));
            Assert.Equal("b", (Text)delta.GetState(_addr[1]));
            Assert.Null(delta.GetState(_addr[2]));
        }

        [Fact]
        public void GetSetState()
        {
            IAccountStateDelta init = new AccountStateDeltaImpl(GetState);
            IAccountStateDelta a = init.SetState(_addr[0], (Text)"A");
            Assert.Equal("A", (Text)a.GetState(_addr[0]));
            Assert.Equal("a", (Text)init.GetState(_addr[0]));
            Assert.Equal("b", (Text)a.GetState(_addr[1]));
            Assert.Equal("b", (Text)init.GetState(_addr[1]));
            Assert.Null(a.GetState(_addr[2]));
            Assert.Null(init.GetState(_addr[2]));
            Assert.Equal(
                new[] { _addr[0] }.ToImmutableHashSet(),
                a.UpdatedAddresses
            );
            Assert.Empty(init.UpdatedAddresses);

            IAccountStateDelta b = a.SetState(_addr[0], (Text)"z");
            Assert.Equal("z", (Text)b.GetState(_addr[0]));
            Assert.Equal("A", (Text)a.GetState(_addr[0]));
            Assert.Equal("a", (Text)init.GetState(_addr[0]));
            Assert.Equal("b", (Text)b.GetState(_addr[1]));
            Assert.Equal("b", (Text)a.GetState(_addr[1]));
            Assert.Null(b.GetState(_addr[2]));
            Assert.Null(a.GetState(_addr[2]));
            Assert.Equal(
                new[] { _addr[0] }.ToImmutableHashSet(),
                a.UpdatedAddresses
            );
            Assert.Empty(init.UpdatedAddresses);

            IAccountStateDelta c = b.SetState(_addr[0], (Text)"a");
            Assert.Equal("a", (Text)c.GetState(_addr[0]));
            Assert.Equal("z", (Text)b.GetState(_addr[0]));
            Assert.Empty(init.UpdatedAddresses);
        }

        private IValue GetState(Address address)
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
