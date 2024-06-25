using System.Linq;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Mocks;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class AccountTest
    {
        private readonly PrivateKey[] _keys;
        private readonly Address[] _addr;
        private readonly IAccount _initAccount;

        public AccountTest(ITestOutputHelper output)
        {
            _keys = new[]
            {
                new PrivateKey(),
                new PrivateKey(),
                new PrivateKey(),
            };

            _addr = _keys.Select(key => key.Address).ToArray();
            _initAccount = new Account(MockUtil.MockAccountState)
                .SetState(_addr[0], (Text)"a")
                .SetState(_addr[1], (Text)"b");

            output.WriteLine("Fixtures  {0,-42}  State", "Address");
            int i = 0;
            foreach (Address a in _addr)
            {
                output.WriteLine(
                    "_addr[{0}]  {1}  {2}",
                    i++,
                    a,
                    _initAccount.GetStates(new[] { a })[0]);
            }
        }

        [Fact]
        public virtual void NullDelta()
        {
            Assert.Equal("a", (Text)_initAccount.GetState(_addr[0]));
            Assert.Equal("b", (Text)_initAccount.GetState(_addr[1]));
            Assert.Null(_initAccount.GetState(_addr[2]));
        }

        [Fact]
        public virtual void States()
        {
            IAccount a = _initAccount.SetState(_addr[0], (Text)"A");
            AccountDiff diffa = AccountDiff.Create(_initAccount.Trie, a.Trie);
            Assert.Equal("A", (Text)a.GetState(_addr[0]));
            Assert.Equal("a", (Text)_initAccount.GetState(_addr[0]));
            Assert.Equal("b", (Text)a.GetState(_addr[1]));
            Assert.Equal("b", (Text)_initAccount.GetState(_addr[1]));
            Assert.Null(a.GetState(_addr[2]));
            Assert.Null(_initAccount.GetState(_addr[2]));
            Assert.Equal(
                _addr[0],
                Assert.Single(diffa.StateDiffs).Key);

            IAccount b = a.SetState(_addr[0], (Text)"z");
            AccountDiff diffb = AccountDiff.Create(a.Trie, b.Trie);
            Assert.Equal("z", (Text)b.GetState(_addr[0]));
            Assert.Equal("A", (Text)a.GetState(_addr[0]));
            Assert.Equal("a", (Text)_initAccount.GetState(_addr[0]));
            Assert.Equal("b", (Text)b.GetState(_addr[1]));
            Assert.Equal("b", (Text)a.GetState(_addr[1]));
            Assert.Null(b.GetState(_addr[2]));
            Assert.Null(a.GetState(_addr[2]));
            Assert.Equal(
                _addr[0],
                Assert.Single(diffb.StateDiffs).Key);

            IAccount c = b.SetState(_addr[0], (Text)"a");
            Assert.Equal("a", (Text)c.GetState(_addr[0]));
            Assert.Equal("z", (Text)b.GetState(_addr[0]));
        }

        [Fact]
        public void RemoveState()
        {
            IAccount a = _initAccount.SetState(_addr[0], (Text)"A");
            a = a.SetState(_addr[1], (Text)"B");
            Assert.Equal((Text)"A", a.GetState(_addr[0]));
            Assert.Equal((Text)"B", a.GetState(_addr[1]));

            a = a.RemoveState(_addr[0]);
            Assert.Null(a.GetState(_addr[0]));
            Assert.Equal((Text)"B", a.GetState(_addr[1]));

            a = a.RemoveState(_addr[1]);
            Assert.Null(a.GetState(_addr[0]));
            Assert.Null(a.GetState(_addr[1]));
        }
    }
}
