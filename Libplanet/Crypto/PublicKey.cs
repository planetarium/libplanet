using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Security;

namespace Libplanet.Crypto
{
    public class PublicKey
    {
        internal readonly ECPublicKeyParameters KeyParam;

        internal PublicKey(ECPublicKeyParameters keyParam)
        {
            KeyParam = keyParam;
        }

        public static PublicKey FromBytes(byte[] bs)
        {
            var ecParams = PrivateKey.GetECParameters();
            var keyParam = new ECPublicKeyParameters("ECDSA",
                ecParams.Curve.DecodePoint(bs), ecParams);

            return new PublicKey(keyParam);
        }

        public byte[] Format(bool compress)
        {
            return KeyParam.Q.GetEncoded(compress);
        }

        public bool Verify(byte[] payload, byte[] signature,
            string algorithm = "SHA256withECDSA")
        {
            ISigner verifier = SignerUtilities.GetSigner(algorithm);
            verifier.Init(false, KeyParam);
            verifier.BlockUpdate(payload, 0, payload.Length);

            return verifier.VerifySignature(signature);
        }

        public byte[] Encrypt(byte[] payload)
        {
            PrivateKey disposablePrivateKey = PrivateKey.Generate();
            byte[] aesKey = disposablePrivateKey.ECDH(this);
            var aes = new Aesgcm(aesKey);

            return aes.Encrypt(payload,
                disposablePrivateKey.PublicKey.Format(true));
        }
    }
}
