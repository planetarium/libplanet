using System;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.KeyStore;
using Xunit;

namespace Libplanet.Tests.KeyStore
{
    public abstract class KeyStoreTest<T>
        where T : IKeyStore
    {
        public abstract T KeyStore { get; }

        [Fact]
        public void List()
        {
            Assert.Empty(KeyStore.List());
            Assert.Empty(KeyStore.ListIds());

            var key = new PrivateKey();
            ProtectedPrivateKey ppk = ProtectedPrivateKey.Protect(key, "pass");
            Guid id = KeyStore.Add(ppk);

            Assert.Single(KeyStore.List());
            Tuple<Guid, ProtectedPrivateKey> pair = KeyStore.List().First();
            Assert.Equal(id, pair.Item1);
            Assert.Equal(ppk.Address, pair.Item2.Address);
            Assert.Equal(new[] { id }, KeyStore.ListIds());

            var key2 = new PrivateKey();
            ProtectedPrivateKey ppk2 = ProtectedPrivateKey.Protect(key2, "pass");
            Guid id2 = KeyStore.Add(ppk2);

            Assert.Equal(
                new[] { (id, ppk.Address), (id2, ppk2.Address) }.ToHashSet(),
                KeyStore.List().Select(tuple => (tuple.Item1, tuple.Item2.Address)).ToHashSet()
            );
            Assert.Equal(
                new[] { id, id2 }.ToHashSet(),
                KeyStore.ListIds().ToHashSet()
            );
        }

        [Fact]
        public void Get()
        {
            var key = new PrivateKey();
            ProtectedPrivateKey ppk = ProtectedPrivateKey.Protect(key, "pass");
            Guid id = KeyStore.Add(ppk);

            Assert.Equal(ppk.Address, KeyStore.Get(id).Address);
            Assert.Equal(key, KeyStore.Get(id).Unprotect("pass"));
            Assert.Throws<NoKeyException>(() => KeyStore.Get(Guid.NewGuid()));
        }

        [Fact]
        public void Add()
        {
            var key = new PrivateKey();
            ProtectedPrivateKey ppk = ProtectedPrivateKey.Protect(key, "pass");
            Guid id = KeyStore.Add(ppk);
            var key2 = new PrivateKey();
            ProtectedPrivateKey ppk2 = ProtectedPrivateKey.Protect(key2, "pass");
            Guid id2 = KeyStore.Add(ppk2);

            // Key ids should be unique.
            Assert.NotEqual(id, id2);

            Assert.Equal(ppk.Address, KeyStore.Get(id).Address);
            Assert.Equal(ppk2.Address, KeyStore.Get(id2).Address);

            (Guid, Address Address) ToSimplePair(Tuple<Guid, ProtectedPrivateKey> pair) =>
                (pair.Item1, pair.Item2.Address);

            Assert.Contains((id, ppk.Address), KeyStore.List().Select(ToSimplePair));
            Assert.Contains((id2, ppk2.Address), KeyStore.List().Select(ToSimplePair));
        }

        [Fact]
        public void Remove()
        {
            var key = new PrivateKey();
            Guid id = KeyStore.Add(ProtectedPrivateKey.Protect(key, "pass"));

            Assert.Throws<NoKeyException>(() => KeyStore.Remove(Guid.NewGuid()));
            Assert.Equal(new[] { id }, KeyStore.ListIds());

            KeyStore.Remove(id);
            Assert.Throws<NoKeyException>(() => KeyStore.Get(id));
            Assert.Empty(KeyStore.ListIds());
        }
    }
}
