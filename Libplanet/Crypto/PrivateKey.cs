using System;
using System.IO;
using System.Linq;
using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Asn1.Sec;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Crypto.Signers;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Math.EC;
using Org.BouncyCastle.Security;

namespace Libplanet.Crypto
{
    public class PrivateKey : IEquatable<PrivateKey>
    {
        private readonly ECPrivateKeyParameters keyParam;

        private PrivateKey(ECPrivateKeyParameters keyParam)
        {
            this.keyParam = keyParam;
        }

        public PublicKey PublicKey
        {
            get
            {
                ECDomainParameters ecParams = GetECParameters();
                ECPoint q = ecParams.G.Multiply(this.keyParam.D);
                var kp = new ECPublicKeyParameters("ECDSA", q, ecParams);
                return new PublicKey(kp);
            }
        }

        public byte[] Bytes => keyParam.D.ToByteArrayUnsigned();

        public static bool operator ==(PrivateKey k1, PrivateKey k2)
        {
            return k1?.Equals(k2) ?? ReferenceEquals(null, k2);
        }

        public static bool operator !=(PrivateKey k1, PrivateKey k2)
        {
            return !(k1 == k2);
        }

        public static PrivateKey FromBytes(byte[] bs)
        {
            ECDomainParameters ecParams = GetECParameters();
            var keyParam = new ECPrivateKeyParameters(
                "ECDSA", new BigInteger(1, bs), ecParams
            );

            return new PrivateKey(keyParam);
        }

        public static PrivateKey Generate()
        {
            var gen = new ECKeyPairGenerator();
            var secureRandom = new SecureRandom();
            ECDomainParameters ecParams = GetECParameters();
            var keyGenParam =
                new ECKeyGenerationParameters(ecParams, secureRandom);
            gen.Init(keyGenParam);

            return new PrivateKey(
                gen.GenerateKeyPair().Private as ECPrivateKeyParameters);
        }

        public byte[] Sign(byte[] payload)
        {
            var h = new Sha256Digest();
            var hashed = new byte[h.GetDigestSize()];
            h.BlockUpdate(payload, 0, payload.Length);
            h.DoFinal(hashed, 0);
            h.Reset();

            var kCalculator = new HMacDsaKCalculator(h);
            var signer = new ECDsaSigner(kCalculator);
            signer.Init(true, keyParam);
            BigInteger[] rs = signer.GenerateSignature(hashed);
            var r = rs[0];
            var s = rs[1];

            BigInteger otherS = keyParam.Parameters.N.Subtract(s);
            if (s.CompareTo(otherS) == 1)
            {
                s = otherS;
            }

            var bos = new MemoryStream(72);
            var seq = new DerSequenceGenerator(bos);
            seq.AddObject(new DerInteger(r));
            seq.AddObject(new DerInteger(s));
            seq.Close();
            return bos.ToArray();
        }

        public byte[] Decrypt(byte[] payload)
        {
            PublicKey pubKey = PublicKey.FromBytes(payload.Take(33).ToArray());
            byte[] aesKey = ECDH(pubKey);
            var aes = new Aesgcm(aesKey);

            return aes.Decrypt(payload, 33);
        }

        public byte[] ECDH(PublicKey publicKey)
        {
            ECPoint p = CalculatePoint(publicKey.KeyParam);
            BigInteger x = p.AffineXCoord.ToBigInteger();
            BigInteger y = p.AffineYCoord.ToBigInteger();

            byte[] xbuf = x.ToByteArrayUnsigned();
            var ybuf = new byte[] { (byte)(y.TestBit(0) ? 0x03 : 0x02) };

            var hash = new Sha256Digest();
            var result = new byte[hash.GetDigestSize()];

            hash.BlockUpdate(ybuf, 0, ybuf.Length);
            hash.BlockUpdate(xbuf, 0, xbuf.Length);
            hash.DoFinal(result, 0);

            return result;
        }

        public bool Equals(PrivateKey other)
        {
            if (ReferenceEquals(null, other)) { return false; }
            return ReferenceEquals(this, other) ||
                   Equals(keyParam, other.keyParam);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) { return false; }
            if (ReferenceEquals(this, obj)) { return true; }
            return obj.GetType() == GetType() && Equals((PrivateKey) obj);
        }

        public override int GetHashCode()
        {
            return (keyParam != null ? keyParam.GetHashCode() : 0);
        }

        internal static ECDomainParameters GetECParameters()
        {
            return GetECParameters("secp256k1");
        }

        private static ECDomainParameters GetECParameters(string name)
        {
            X9ECParameters ps = SecNamedCurves.GetByName(name);
            return new ECDomainParameters(ps.Curve, ps.G, ps.N, ps.H);
        }

        private ECPoint CalculatePoint(ECPublicKeyParameters pubKeyParams)
        {
            ECDomainParameters dp = keyParam.Parameters;
            if (!dp.Equals(pubKeyParams.Parameters))
            {
                throw new InvalidOperationException(
                    "ECDH public key has wrong domain parameters");
            }

            BigInteger d = keyParam.D;

            ECPoint q = dp.Curve.DecodePoint(pubKeyParams.Q.GetEncoded(true));
            if (q.IsInfinity)
            {
                throw new InvalidOperationException(
                    "Infinity is not a valid public key for ECDH");
            }

            BigInteger h = dp.H;
            if (!h.Equals(BigInteger.One))
            {
                d = dp.H.ModInverse(dp.N).Multiply(d).Mod(dp.N);
                q = ECAlgorithms.ReferenceMultiply(q, h);
            }

            ECPoint p = q.Multiply(d).Normalize();
            if (p.IsInfinity)
            {
                throw new InvalidOperationException(
                    "Infinity is not a valid agreement value for ECDH");
            }

            return p;
        }
    }
}
