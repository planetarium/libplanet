using System;
using System.Linq;
using System.Security.Cryptography;
using Org.BouncyCastle.Asn1.Sec;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Crypto.Signers;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Math.EC.Multiplier;
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
                    .Take(dp.Curve.FieldSize)).ToArray();
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
                    .Take(dp.Curve.FieldSize).ToArray());
                if (integer.CompareTo(GetECParameters().N.Subtract(BigInteger.One)) == -1)
                {
                    return integer.Add(BigInteger.One);
                }
            }

            throw new ArgumentException();
        }

        internal static (HashDigest<SHA256>, byte[]) Evaluate(byte[] message, PrivateKey privateKey)
        {
            var h = new Sha256Digest();
            var kCalculator = new HMacDsaKCalculator(h);
            kCalculator.Init(privateKey.KeyParam.Parameters.N, privateKey.KeyParam.D, message);

            BigInteger nonce = kCalculator.NextK();

            ECPoint messagePoint = MessageToPoint(message);

            byte[] vrf = messagePoint.Multiply(privateKey.KeyParam.D).GetEncoded(false);

            ECMultiplier eCMultiplier = new FixedPointCombMultiplier();
            ECPoint pointFromGen = eCMultiplier.Multiply(privateKey.KeyParam.Parameters.G, nonce);
            ECPoint pointFromMessage = eCMultiplier.Multiply(messagePoint, nonce);

            byte[] payload
                = privateKey.KeyParam.Parameters.G.GetEncoded(false)
                .Concat(messagePoint.GetEncoded(false))
                .Concat(privateKey.PublicKey.KeyParam.Q.GetEncoded(false))
                .Concat(vrf)
                .Concat(pointFromGen.GetEncoded(false))
                .Concat(pointFromMessage.GetEncoded(false)).ToArray();

            BigInteger checksum = MessageToInteger(payload);
            BigInteger nonceChecksum = nonce.Subtract(checksum.Multiply(privateKey.KeyParam.D))
                .Mod(privateKey.KeyParam.Parameters.N);
            HashDigest<SHA256> vrfDigest = HashDigest<SHA256>.DeriveFrom(vrf);

            byte[] checksumArr = checksum.ToByteArray();
            byte[] nonceChecksumArr = nonceChecksum.ToByteArray();
            byte[] proof = new byte[129];
            Array.Copy(checksumArr, 0, proof, 0, checksumArr.Length);
            Array.Copy(nonceChecksumArr, 0, proof, 32, nonceChecksumArr.Length);
            Array.Copy(vrf, 0, proof, 64, vrf.Length);

            return (vrfDigest, proof);
        }
    }
}
