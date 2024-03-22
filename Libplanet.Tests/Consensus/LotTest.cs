using System;
using Bencodex;
using Libplanet.Crypto;
using Libplanet.Types.Consensus;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class LotTest
    {
        [Fact]
        public void Constructor()
        {
            var privateKey = new PrivateKey();
            var unauthorizedPublicKey = new PrivateKey().PublicKey;
            var lotMetadata = new LotMetadata(0L, 0, null);

            new Lot(
                lotMetadata,
                privateKey.PublicKey,
                privateKey.Prove(new Codec().Encode(lotMetadata.Bencoded)));

            Assert.Throws<ArgumentException>(
                () => new Lot(
                    lotMetadata,
                    unauthorizedPublicKey,
                    privateKey.Prove(new Codec().Encode(lotMetadata.Bencoded))));
        }

        [Fact]
        public void Bencode()
        {
            var lot = new LotMetadata(0L, 0, null).Prove(new PrivateKey());
            Assert.Equal(lot, new Lot(lot.Bencoded));
        }
    }
}
