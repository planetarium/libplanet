using System;
using System.Linq;
using System.Security.Cryptography;
using Org.BouncyCastle.Asn1.Sec;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Crypto.Signers;
using Org.BouncyCastle.Math;
using ECPoint = Org.BouncyCastle.Math.EC.ECPoint;

namespace Libplanet.Crypto
{
    internal static class VerifiableRandomFunction
    {
        internal static ECDomainParameters GetECParameters()
        {
            return GetECParameters("secp256k1");
        }

        internal static ECDomainParameters GetECParameters(string name)
        {
            X9ECParameters ps = SecNamedCurves.GetByName(name);
            return new ECDomainParameters(ps.Curve, ps.G, ps.N, ps.H);
        }

        internal static ECPoint MessageToPoint(byte[] message)
        {
            ECDomainParameters dp = GetECParameters();
            for (uint i = 0; i < 100; i++)
            {
                byte[] nonce
                    = BitConverter.IsLittleEndian
                    ? BitConverter.GetBytes(i).Reverse().ToArray()
                    : BitConverter.GetBytes(i);
                byte[] byteArr = nonce.Concat(message).ToArray();
                HashDigest<SHA512> hashed = HashDigest<SHA512>.DeriveFrom(byteArr);
                byte[] encoded = new byte[] { 2 }.Concat(hashed.ToByteArray()
                    .Take((dp.Curve.FieldSize + 7) >> 3)).ToArray();
                try
                {
                    return dp.Curve.DecodePoint(encoded);
                }
                catch (ArgumentException)
                {
                }
            }

            throw new ArgumentException();
        }

        internal static BigInteger MessageToInteger(byte[] message)
        {
            ECDomainParameters dp = GetECParameters();
            for (uint i = 0; i < 100; i++)
            {
                byte[] nonce
                    = BitConverter.IsLittleEndian
                    ? BitConverter.GetBytes(i).Reverse().ToArray()
                    : BitConverter.GetBytes(i);
                byte[] byteArr = nonce.Concat(message).ToArray();
                HashDigest<SHA512> hashed = HashDigest<SHA512>.DeriveFrom(byteArr);
                BigInteger integer = new BigInteger(1, hashed.ToByteArray()
                    .Take((dp.Curve.FieldSize + 7) >> 3).ToArray());
                if (integer.CompareTo(GetECParameters().N.Subtract(BigInteger.One)) == -1)
                {
                    return integer.Add(BigInteger.One);
                }
            }

            throw new ArgumentException();
        }

        internal static (byte[], byte[]) Evaluate(byte[] message, PrivateKey privateKey)
        {
            // n : modulus
            BigInteger n = privateKey.KeyParam.Parameters.N;

            // d : private key
            BigInteger d = privateKey.KeyParam.D;
            var digest = new Sha256Digest();

            // k(nonce) generator is deterministic
            var kCalculator = new HMacDsaKCalculator(digest);
            kCalculator.Init(n, d, message);

            // k : nonce
            BigInteger k = kCalculator.NextK();

            // G : generator point
            ECPoint pointG = privateKey.KeyParam.Parameters.G;

            // H : message hash point
            ECPoint pointH = MessageToPoint(message);

            // dH : VRF
            byte[] dPointHArr = pointH.Multiply(d).GetEncoded(false);

            // kG : r
            ECPoint kPointG = privateKey.KeyParam.Parameters.G.Multiply(k);

            // kH
            ECPoint kPointH = pointH.Multiply(k);

            // dG : public key
            ECPoint dPointG = privateKey.PublicKey.KeyParam.Q;

            byte[] payload
                = pointG.GetEncoded(false)
                .Concat(pointH.GetEncoded(false))
                .Concat(dPointG.GetEncoded(false))
                .Concat(dPointHArr)
                .Concat(kPointG.GetEncoded(false))
                .Concat(kPointH.GetEncoded(false)).ToArray();

            // c = checksum(payload)
            BigInteger c = MessageToInteger(payload);

            // s = (k - c * d) % N
            BigInteger s = k.Subtract(c.Multiply(d)).Mod(n);
            HashDigest<SHA256> dPointHDigest = HashDigest<SHA256>.DeriveFrom(dPointHArr);
            byte[] index = dPointHDigest.ToByteArray();

            byte[] cArr = c.ToByteArrayUnsigned();
            byte[] sArr = s.ToByteArrayUnsigned();
            byte[] proof = new byte[129];
            Array.Copy(cArr, 0, proof, 0, cArr.Length);
            Array.Copy(sArr, 0, proof, 32, sArr.Length);
            Array.Copy(dPointHArr, 0, proof, 64, dPointHArr.Length);

            return (index, proof);
        }

        internal static byte[] ProofToHash(
            byte[] message, byte[] proof, PublicKey publicKey)
        {
            ECDomainParameters dp = GetECParameters();
            if (proof.Length != 129)
            {
                throw new ArgumentException();
            }

            byte[] cArr = proof.Take(32).ToArray();
            byte[] sArr = proof.Skip(32).Take(32).ToArray();
            byte[] dPointHArr = proof.Skip(64).Take(65).ToArray();

            BigInteger c = new BigInteger(1, cArr);
            BigInteger s = new BigInteger(1, sArr);

            // dH : VRF point
            ECPoint dPointH = dp.Curve.DecodePoint(dPointHArr);

            // G : generator point
            ECPoint pointG = publicKey.KeyParam.Parameters.G;

            // dG : public key
            ECPoint dPointG = publicKey.KeyParam.Q;

            // sG + cdG = (s+cd)G = kG
            ECPoint sPointG = dp.G.Multiply(s);
            ECPoint cdPointG = publicKey.KeyParam.Q.Multiply(c);
            ECPoint scdPointG = sPointG.Add(cdPointG);

            // sH + cdH = (s+cd)H = kH
            ECPoint pointH = MessageToPoint(message);
            ECPoint sPointH = pointH.Multiply(s);
            ECPoint cdPointH = dPointH.Multiply(c);
            ECPoint scdPointH = sPointH.Add(cdPointH);

            byte[] payload
                = pointG.GetEncoded(false)
                .Concat(pointH.GetEncoded(false))
                .Concat(dPointG.GetEncoded(false))
                .Concat(dPointHArr)
                .Concat(scdPointG.GetEncoded(false))
                .Concat(scdPointH.GetEncoded(false)).ToArray();

            HashDigest<SHA256> dPointHDigest = HashDigest<SHA256>.DeriveFrom(dPointHArr);
            byte[] index = dPointHDigest.ToByteArray();

            // check if checksum of payload is same
            if (!c.Equals(MessageToInteger(payload)))
            {
                throw new ArgumentException();
            }

            return index;
        }
    }
}
