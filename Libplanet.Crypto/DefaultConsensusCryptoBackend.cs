using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Common;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Crypto.Signers;
using Org.BouncyCastle.Math;
using ECPoint = Org.BouncyCastle.Math.EC.ECPoint;

namespace Libplanet.Crypto
{
    /// <summary>
    /// Default consensus cryptography backend.
    /// It implements ECVRF(Elliptic Curve Verifiable Random Function),
    /// using RFC9381 as a reference.
    /// </summary>
    public class DefaultConsensusCryptoBackend : IConsensusCryptoBackend
    {
        private ECDomainParameters _eCParams;

        public DefaultConsensusCryptoBackend()
        {
            X9ECParameters ps = ECNamedCurveTable.GetByName("secp256k1");
            _eCParams = new ECDomainParameters(ps.Curve, ps.G, ps.N, ps.H);
            SuiteBytes = new byte[] { 0 }.ToImmutableArray();
        }

        /// <summary>
        /// Suite bytes that specifying the ECVRF ciphersuite.
        /// Since RFC9381 does not include ECVRF under secp256k1,
        /// it cannot be between 0x01 ~ 0x04.
        /// To express this implementation does not belong to any of those on
        /// RFC9381, left it as 0x00.
        /// </summary>
        public ImmutableArray<byte> SuiteBytes { get; }

        /// <inheritdoc cref="IConsensusCryptoBackend.Prove(byte[], PrivateKey)"/>
        public byte[] Prove(byte[] alphaBytes, PrivateKey privateKey)
        {
            // n : modulus
            BigInteger n = _eCParams.N;

            // d : private key
            BigInteger d = privateKey.KeyParam.D;
            var digest = new Sha256Digest();

            // k(nonce) generator is deterministic
            var kCalculator = new HMacDsaKCalculator(digest);
            kCalculator.Init(n, d, alphaBytes);

            // k : nonce
            BigInteger k = kCalculator.NextK();

            // H : message hash point
            ECPoint pointH = HashToCurveTai(alphaBytes, privateKey.PublicKey);

            // dH : Gamma
            ECPoint dPointH = pointH.Multiply(d);

            // kG : r
            ECPoint kPointG = _eCParams.G.Multiply(k);

            // kH
            ECPoint kPointH = pointH.Multiply(k);

            ECPoint[] points = new ECPoint[] { pointH, dPointH, kPointG, kPointH };

            // c = checksum(payload)
            BigInteger c = HashPoints(points);

            // s = (k + c * d) mod N
            BigInteger s = k.Add(c.Multiply(d)).Mod(n);

            byte[] gammaBytes = dPointH.GetEncoded(true);
            byte[] cBytes = c.ToByteArrayUnsigned();
            byte[] sBytes = s.ToByteArrayUnsigned();
            Array.Resize(ref cBytes, (_eCParams.Curve.FieldSize + 7) >> 3);
            Array.Resize(ref sBytes, (_eCParams.Curve.FieldSize + 7) >> 3);

            byte[] piBytes = gammaBytes.Concat(cBytes).Concat(sBytes).ToArray();

            return piBytes;
        }

        /// <inheritdoc cref="IConsensusCryptoBackend.VerifyProof(byte[], byte[], PublicKey)"/>
        public bool VerifyProof(
            byte[] alphaBytes, byte[] piBytes, PublicKey publicKey)
        {
            ECPublicKeyParameters pubKeyParam = publicKey.KeyParam;
            ECDomainParameters eCParam = pubKeyParam.Parameters;
            ECPoint dPointH;
            BigInteger c;
            BigInteger s;

            try
            {
                (dPointH, c, s) = DecodeProof(piBytes);
            }
            catch (Exception)
            {
                return false;
            }

            // sG - cdG = (s-cd)G = kG
            ECPoint sPointG = eCParam.G.Multiply(s);
            ECPoint cdPointG = publicKey.KeyParam.Q.Multiply(c);
            ECPoint scdPointG = sPointG.Subtract(cdPointG);

            // sH - cdH = (s-cd)H = kH
            ECPoint pointH = HashToCurveTai(alphaBytes, publicKey);
            ECPoint sPointH = pointH.Multiply(s);
            ECPoint cdPointH = dPointH.Multiply(c);
            ECPoint scdPointH = sPointH.Subtract(cdPointH);

            ECPoint[] points = new ECPoint[] { pointH, dPointH, scdPointG, scdPointH };

            // check if checksum of payload is same
            if (!c.Equals(HashPoints(points)))
            {
                return false;
            }

            return true;
        }

        /// <inheritdoc cref="IConsensusCryptoBackend.ProofToHash(byte[])"/>
        public byte[] ProofToHash(byte[] piBytes)
        {
            (ECPoint gamma, _, _) = DecodeProof(piBytes);

            ECPoint gammaMul = _eCParams.H.Equals(BigInteger.One)
                ? gamma
                : gamma.Multiply(_eCParams.H);

            // On draft-irtf-cfrg-vrf-03, it's mentioned to use EC point encoding with compression,
            // but as our logic targets 64-bytes system, adoped uncompressed form to get
            // payload bytes larger than 64bytes.
            // If we use compressed form, source domain would be smaller than target hash domain,
            // so space of generated betaBytes would get sparse.
            byte[] payload
                = SuiteBytes
                .Concat(new byte[] { 3 })
                .Concat(gammaMul.GetEncoded(false))
                .Concat(new byte[] { 0 }).ToArray();

            HashDigest<SHA512> betaHash = HashDigest<SHA512>.DeriveFrom(payload);
            byte[] betaBytes = betaHash.ToByteArray();

            return betaBytes;
        }

        /// <summary>
        /// Maps a <paramref name="alphaBytes"/> to Elliptic curve point
        /// with try-and-increment method.
        /// </summary>
        /// <param name="alphaBytes">A message bytearray.</param>
        /// <param name="publicKey"><see cref="PublicKey"/> used for salt.</param>
        /// <returns>
        /// <see cref="ECPoint"/> generated from <paramref name="alphaBytes"/>.
        /// </returns>
        private ECPoint HashToCurveTai(byte[] alphaBytes, PublicKey publicKey)
        {
            int ctr = 0;
            while (true)
            {
                byte[] ctrBytes
                    = BitConverter.IsLittleEndian
                    ? BitConverter.GetBytes(ctr).Reverse().ToArray()
                    : BitConverter.GetBytes(ctr);
                ctr += 1;
                byte[] payload
                    = SuiteBytes
                    .Concat(new byte[] { 1 })
                    .Concat(publicKey.KeyParam.Q.GetEncoded(true))
                    .Concat(alphaBytes)
                    .Concat(ctrBytes)
                    .Concat(new byte[] { 0 }).ToArray();
                HashDigest<SHA512> hashed = HashDigest<SHA512>.DeriveFrom(payload);
                byte[] encoded = new byte[] { 2 }.Concat(hashed.ToByteArray()
                    .Take((_eCParams.Curve.FieldSize + 7) >> 3)).ToArray();
                try
                {
                    return _eCParams.Curve.DecodePoint(encoded);
                }
                catch (ArgumentException)
                {
                }
            }

            throw new ArgumentException();
        }

        /// <summary>
        /// Maps <paramref name="points"/> to <see cref="BigInteger"/>
        /// with SHA-512 hashing.
        /// </summary>
        /// <param name="points">A message bytearray.</param>
        /// <returns>
        /// <see cref="BigInteger"/> generated from <paramref name="points"/>.
        /// </returns>
        private BigInteger HashPoints(ECPoint[] points)
        {
            byte[] payload = new byte[] { 2 };
            foreach (ECPoint point in points)
            {
                payload = payload.Concat(point.GetEncoded(true)).ToArray();
            }

            payload = payload.Concat(new byte[] { 0 }).ToArray();
            HashDigest<SHA512> cHash = HashDigest<SHA512>.DeriveFrom(payload);
            byte[] truncatedCBytes = cHash.ToByteArray()
                .Take((_eCParams.Curve.FieldSize + 7) >> 3).ToArray();
            BigInteger c = new BigInteger(1, truncatedCBytes);

            return c;
        }

        /// <summary>
        /// Decomposes a <paramref name="piBytes"/> to original compositions.
        /// </summary>
        /// <param name="piBytes"> Proof to verify <see cref="PrivateKey"/>
        /// and <c>alphaBytes</c>.
        /// </param>
        /// <returns>
        /// A tuple of <c>gamma</c>, <c>c</c> and <c>s</c>.
        /// which is used to verify <paramref name="piBytes"/>.
        /// </returns>
        private (ECPoint, BigInteger, BigInteger) DecodeProof(byte[] piBytes)
        {
            int gammaBytesLen = ((_eCParams.Curve.FieldSize + 7) >> 3) + 1;
            int cBytesLen = (_eCParams.Curve.FieldSize + 7) >> 3;
            int sBytesLen = (_eCParams.Curve.FieldSize + 7) >> 3;
            if (piBytes.Length != gammaBytesLen + cBytesLen + sBytesLen)
            {
                throw new ArgumentException();
            }

            byte[] gammaBytes = piBytes.Take(gammaBytesLen).ToArray();
            byte[] cBytes = piBytes.Skip(gammaBytesLen).Take(cBytesLen).ToArray();
            byte[] sBytes = piBytes.Skip(gammaBytesLen + cBytesLen).Take(sBytesLen).ToArray();

            BigInteger c = new BigInteger(1, cBytes);
            BigInteger s = new BigInteger(1, sBytes);

            if (s.CompareTo(_eCParams.N) == 1)
            {
                throw new ArgumentException();
            }

            // dH : Gamma
            ECPoint gamma = _eCParams.Curve.DecodePoint(gammaBytes);

            return (gamma, c, s);
        }
    }
}
