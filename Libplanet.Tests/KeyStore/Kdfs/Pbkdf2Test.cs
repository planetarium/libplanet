using System.Collections.Immutable;
using Libplanet.KeyStore.Kdfs;
using Org.BouncyCastle.Crypto.Digests;

namespace Libplanet.Tests.KeyStore.Kdfs
{
    public class Pbkdf2Test : KdfTest<Pbkdf2<Sha256Digest>>
    {
        public override Pbkdf2<Sha256Digest> MakeInstance(byte[] randomBytes)
        {
            return new Pbkdf2<Sha256Digest>(10, randomBytes, randomBytes.Length);
        }
    }
}
