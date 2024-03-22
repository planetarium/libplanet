using Bencodex;
using Libplanet.Crypto;
using Libplanet.Types.Consensus;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class LotMetadataTest
    {
        [Fact]
        public void Bencode()
        {
            var lotMetadata = new LotMetadata(0L, 0, null);
            Assert.Equal(lotMetadata, new LotMetadata(lotMetadata.Bencoded));
        }

        [Fact]
        public void Prove()
        {
            var privateKey = new PrivateKey();
            var lastProof = new LotMetadata(0L, 0, null).Prove(privateKey).Proof;
            var lotMetadata = new LotMetadata(1L, 0, lastProof);
            var lot = lotMetadata.Prove(privateKey);
            Assert.Equal(lotMetadata.Height, lot.Height);
            Assert.Equal(lotMetadata.Round, lot.Round);
            Assert.Equal(lotMetadata.LastProof, lot.LastProof);
            Assert.Equal(privateKey.Prove(new Codec().Encode(lotMetadata.Bencoded)), lot.Proof);
        }
    }
}
