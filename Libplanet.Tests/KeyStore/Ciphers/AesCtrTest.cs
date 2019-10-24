using System;
using System.Collections.Immutable;
using Libplanet.KeyStore.Ciphers;
using Xunit;

namespace Libplanet.Tests.KeyStore.Ciphers
{
    public class AesCtrTest : CipherTest<Aes128Ctr>
    {
        private Aes128Ctr _cipher;

        public AesCtrTest()
        {
            var random = new Random();
            var buffer = new byte[16];
            random.NextBytes(buffer);
            _cipher = new Aes128Ctr(buffer.ToImmutableArray());
        }

        public override Aes128Ctr Cipher => _cipher;

        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentException>(() =>
                new Aes128Ctr(new byte[0].ToImmutableArray())
            );
            var random = new Random();
            var buffer = new byte[17];
            random.NextBytes(buffer);
            Assert.Throws<ArgumentException>(() =>
                new Aes128Ctr(buffer.ToImmutableArray())
            );
        }
    }
}
