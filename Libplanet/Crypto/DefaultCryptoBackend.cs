using System.IO;
using System.Security.Cryptography;
using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Crypto.Signers;

namespace Libplanet.Crypto
{
    public class DefaultCryptoBackend : ICryptoBackend
    {
        public bool Verify(
            HashDigest<SHA256> messageHash,
            byte[] signature,
            PublicKey publicKey)
        {
            try
            {
                Asn1Sequence asn1Sequence = (Asn1Sequence)Asn1Object.FromByteArray(signature);

                var rs = new[]
                {
                    ((DerInteger)asn1Sequence[0]).Value,
                    ((DerInteger)asn1Sequence[1]).Value,
                };
                var verifier = new ECDsaSigner();
                verifier.Init(false, publicKey.KeyParam);

                return verifier.VerifySignature(messageHash.ToByteArray(), rs[0], rs[1]);
            }
            catch (IOException)
            {
                return false;
            }
        }
    }
}
