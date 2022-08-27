using System;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Crypto.Signers;
using Org.BouncyCastle.Math;
using ECPoint = Org.BouncyCastle.Math.EC.ECPoint;

namespace Libplanet.Crypto
{
    public class DefaultCryptoBackend<T> : ICryptoBackend<T>
        where T : HashAlgorithm
    {
        public byte[] SuiteBytes => new byte[] { 1 };

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

            var bos = new MemoryStream(72);
            var seq = new DerSequenceGenerator(bos);
            seq.AddObject(new DerInteger(r));
            seq.AddObject(new DerInteger(s));
            seq.Close();
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

        /// <summary>
        /// Creates a piBytes from <paramref name="alphaBytes"/> with the corresponding
        /// <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="alphaBytes">A message bytearray to generate piBytes and betaBytes.
        /// </param>
        /// <param name="privateKey"><see cref="PrivateKey"/> to prove
        /// <paramref name="alphaBytes"/>.
        /// </param>
        /// <returns> A piBytes created from <paramref name="alphaBytes"/> with the corresponding
        /// <paramref name="privateKey"/>.
        /// piBytes is called as "proof".
        /// </returns>
        /// <returns> A betaBytes created from piBytes.
        /// betaBytes is used as "pseudorandom bytes".
        /// </returns>
        public (byte[], byte[]) VrfEvaluate(byte[] alphaBytes, PrivateKey privateKey)
        {
            ECDomainParameters eCParam = privateKey.KeyParam.Parameters;
            byte[] piBytes = VrfProve(alphaBytes, privateKey);
            byte[] betaBytes = VrfProofToHash(piBytes, eCParam);

            return (piBytes, betaBytes);
        }

        /// <summary>
        /// Verifies whether a <paramref name="piBytes"/> was created from
        /// a <paramref name="alphaBytes"/> with the corresponding <see cref="PrivateKey"/>.
        /// </summary>
        /// <param name="piBytes">A proof that was created from the
        /// <paramref name="alphaBytes"/>.</param>
        /// <param name="alphaBytes">A message bytearray.</param>
        /// <param name="publicKey"><see cref="PublicKey"/> used for verification.</param>
        /// <returns><c>true</c> if the <paramref name="piBytes"/> was created
        /// from the <paramref name="alphaBytes"/> with the corresponding
        /// <see cref="PrivateKey"/>. Otherwise <c>false</c>.</returns>
        /// <returns> A betaBytes created from <paramref name="piBytes"/>.
        /// betaBytes is used as "pseudorandom bytes".
        /// </returns>
        public (bool, byte[]) VrfVerify(byte[] piBytes, byte[] alphaBytes, PublicKey publicKey)
        {
            ECPublicKeyParameters pubKeyParam = publicKey.KeyParam;
            ECDomainParameters eCParam = pubKeyParam.Parameters;
            ECPoint dPointH;
            BigInteger c;
            BigInteger s;

            try
            {
                (dPointH, c, s) = VrfDecodeProof(piBytes, eCParam);
            }
            catch (Exception)
            {
                return (false, new byte[] { 0 });
            }

            // sG + cdG = (s+cd)G = kG
            ECPoint sPointG = eCParam.G.Multiply(s);
            ECPoint cdPointG = publicKey.KeyParam.Q.Multiply(c);
            ECPoint scdPointG = sPointG.Subtract(cdPointG);

            // sH + cdH = (s+cd)H = kH
            ECPoint pointH = HashToCurveTai(alphaBytes, pubKeyParam);
            ECPoint sPointH = pointH.Multiply(s);
            ECPoint cdPointH = dPointH.Multiply(c);
            ECPoint scdPointH = sPointH.Subtract(cdPointH);

            ECPoint[] points = new ECPoint[] { pointH, dPointH, scdPointG, scdPointH };

            // check if checksum of payload is same
            if (!c.Equals(HashPoints(points, eCParam)))
            {
                return (false, new byte[] { 0 });
            }

            byte[] betaBytes = VrfProofToHash(piBytes, eCParam);

            return (true, betaBytes);
        }

        private ECPoint HashToCurveTai(byte[] alphaBytes, ECPublicKeyParameters pubKeyParam)
        {
            ECDomainParameters eCParam = pubKeyParam.Parameters;
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
                    .Concat(pubKeyParam.Q.GetEncoded(true))
                    .Concat(alphaBytes)
                    .Concat(ctrBytes)
                    .Concat(new byte[] { 0 }).ToArray();
                HashDigest<SHA512> hashed = HashDigest<SHA512>.DeriveFrom(payload);
                byte[] encoded = new byte[] { 2 }.Concat(hashed.ToByteArray()
                    .Take((eCParam.Curve.FieldSize + 7) >> 3)).ToArray();
                try
                {
                    return eCParam.Curve.DecodePoint(encoded);
                }
                catch (ArgumentException)
                {
                }
            }

            throw new ArgumentException();
        }

        private BigInteger HashPoints(ECPoint[] points, ECDomainParameters eCParam)
        {
            byte[] payload = new byte[] { 2 };
            foreach (ECPoint point in points)
            {
                payload = payload.Concat(point.GetEncoded(true)).ToArray();
            }

            payload = payload.Concat(new byte[] { 0 }).ToArray();
            HashDigest<SHA512> cHash = HashDigest<SHA512>.DeriveFrom(payload);
            byte[] truncatedCBytes = cHash.ToByteArray()
                .Take((eCParam.Curve.FieldSize + 7) >> 4).ToArray();
            BigInteger c = new BigInteger(1, truncatedCBytes);

            return c;
        }

        private byte[] VrfProve(byte[] alphaBytes, PrivateKey privateKey)
        {
            ECPrivateKeyParameters privKeyParam = privateKey.KeyParam;
            ECPublicKeyParameters pubKeyParam = privateKey.PublicKey.KeyParam;
            ECDomainParameters eCParam = privKeyParam.Parameters;

            // n : modulus
            BigInteger n = eCParam.N;

            // d : private key
            BigInteger d = privKeyParam.D;
            var digest = new Sha256Digest();

            // k(nonce) generator is deterministic
            var kCalculator = new HMacDsaKCalculator(digest);
            kCalculator.Init(n, d, alphaBytes);

            // k : nonce
            BigInteger k = kCalculator.NextK();

            // H : message hash point
            ECPoint pointH = HashToCurveTai(alphaBytes, pubKeyParam);

            // dH : Gamma
            ECPoint dPointH = pointH.Multiply(d);

            // kG : r
            ECPoint kPointG = eCParam.G.Multiply(k);

            // kH
            ECPoint kPointH = pointH.Multiply(k);

            ECPoint[] points = new ECPoint[] { pointH, dPointH, kPointG, kPointH };

            // c = checksum(payload)
            BigInteger c = HashPoints(points, eCParam);

            // s = (k + c * d) mod N
            BigInteger s = k.Add(c.Multiply(d)).Mod(n);

            byte[] gammaBytes = dPointH.GetEncoded(true);
            byte[] cBytes = c.ToByteArrayUnsigned();
            byte[] sBytes = s.ToByteArrayUnsigned();
            Array.Resize(ref cBytes, (eCParam.Curve.FieldSize + 7) >> 4);
            Array.Resize(ref sBytes, (eCParam.Curve.FieldSize + 7) >> 3);

            byte[] piBytes = gammaBytes.Concat(cBytes).Concat(sBytes).ToArray();

            return piBytes;
        }

        private (ECPoint, BigInteger, BigInteger) VrfDecodeProof(
            byte[] piBytes, ECDomainParameters eCParam)
        {
            int gammaBytesLen = ((eCParam.Curve.FieldSize + 7) >> 3) + 1;
            int cBytesLen = (eCParam.Curve.FieldSize + 7) >> 4;
            int sBytesLen = (eCParam.Curve.FieldSize + 7) >> 3;
            if (piBytes.Length != gammaBytesLen + cBytesLen + sBytesLen)
            {
                throw new ArgumentException();
            }

            byte[] gammaBytes = piBytes.Take(gammaBytesLen).ToArray();
            byte[] cBytes = piBytes.Skip(gammaBytesLen).Take(cBytesLen).ToArray();
            byte[] sBytes = piBytes.Skip(gammaBytesLen + cBytesLen).Take(sBytesLen).ToArray();

            BigInteger c = new BigInteger(1, cBytes);
            BigInteger s = new BigInteger(1, sBytes);

            if (s.CompareTo(eCParam.N) == 1)
            {
                throw new ArgumentException();
            }

            // dH : Gamma
            ECPoint gamma = eCParam.Curve.DecodePoint(gammaBytes);

            return (gamma, c, s);
        }

        private byte[] VrfProofToHash(byte[] piBytes, ECDomainParameters eCParam)
        {
            (ECPoint gamma, _, _) = VrfDecodeProof(piBytes, eCParam);

            ECPoint gammaMul = eCParam.H.Equals(BigInteger.One) ? gamma : gamma.Multiply(eCParam.H);

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
    }
}
