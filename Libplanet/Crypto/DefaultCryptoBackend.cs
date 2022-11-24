using System.IO;
using System.Security.Cryptography;
using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Signers;
using Org.BouncyCastle.Math;

namespace Libplanet.Crypto
{
    public class DefaultCryptoBackend<T> : ICryptoBackend<T>
        where T : HashAlgorithm
    {
        public byte[] Sign(HashDigest<T> messageHash, PrivateKey privateKey)
        {
            var h = new Sha256Digest();
            var kCalculator = new HMacDsaKCalculator(h);
            var signer = new ECDsaSigner(kCalculator);
            signer.Init(true, privateKey.KeyParam);
            BigInteger[] rs = signer.GenerateSignature(messageHash.ToByteArray());
            var r = rs[0];
            var s = rs[1];

            BigInteger otherS = privateKey.KeyParam.Parameters.N.Subtract(s);
            if (s.CompareTo(otherS) == 1)
            {
                s = otherS;
            }

            using var bos = new MemoryStream(72);
            using (var seq = new DerSequenceGenerator(bos))
            {
                seq.AddObject(new DerInteger(r));
                seq.AddObject(new DerInteger(s));
            }

            return bos.ToArray();
        }

        public bool Verify(
            HashDigest<T> messageHash,
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
            catch (Asn1ParsingException)
            {
                return false;
            }
        }
    }
}
