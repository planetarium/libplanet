using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Crypto;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Crypto.Signers;
using Org.BouncyCastle.Math;
using ECPoint = Org.BouncyCastle.Math.EC.ECPoint;

namespace Libplanet.Blocks
{
    /// <summary>
    /// VRF proof for generate verifiable random values.
    /// </summary>
    public readonly struct BlockProof : IEquatable<BlockProof>
    {
        /// <summary>
        /// Creates a new <see cref="BlockProof"/> instance generated from
        /// <paramref name="message"/> with <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="privateKey">The <see cref="PrivateKey"/> for proving.</param>
        /// <param name="message">The byte array to prove.</param>
        public BlockProof(PrivateKey privateKey, byte[] message)
        {
            X9ECParameters ps = ECNamedCurveTable.GetByName("secp256k1");
            ECParams = new ECDomainParameters(ps.Curve, ps.G, ps.N, ps.H);
            SuiteBytes = new byte[] { 1 }.ToImmutableArray();
            ByteArray = Prove(privateKey, message).ToImmutableArray();
        }

        /// <summary>
        /// Creates a new <see cref="BlockProof"/> instance generated from
        /// <paramref name="height"/> and <paramref name="round"/>
        /// with <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="privateKey">The <see cref="PrivateKey"/> for proving.</param>
        /// <param name="height">The height of the proposal.</param>
        /// <param name="round">The round of the proposal.</param>
        public BlockProof(PrivateKey privateKey, long? height, int? round)
        {
            X9ECParameters ps = ECNamedCurveTable.GetByName("secp256k1");
            ECParams = new ECDomainParameters(ps.Curve, ps.G, ps.N, ps.H);
            SuiteBytes = new byte[] { 1 }.ToImmutableArray();
            ByteArray = Prove(privateKey, MessageFromHeightRound(height, round).ToArray())
                .ToImmutableArray();
        }

        /// <summary>
        /// Converts an immutable <see cref="byte"/> array into a <see cref="BlockProof"/>.
        /// </summary>
        /// <param name="proof">An immutable <see cref="byte"/> array that is
        /// generated from the <c>message</c> and <see cref="PrivateKey"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="proof"/>'s <see cref="ImmutableArray{T}.Length"/> is not accptable.
        /// </exception>
        public BlockProof(ImmutableArray<byte> proof)
        {
            X9ECParameters ps = ECNamedCurveTable.GetByName("secp256k1");
            ECParams = new ECDomainParameters(ps.Curve, ps.G, ps.N, ps.H);
            int compoLength = (ECParams.Curve.FieldSize + 7) >> 3;
            int proofLength = compoLength * 3 + 1;
            if (proof.Length != proofLength)
            {
                string message =
                    $"{nameof(BlockProof)} must be {proofLength} bytes, " +
                    $"but {proof.Length} was given.";
                throw new ArgumentOutOfRangeException(nameof(proof), message);
            }

            SuiteBytes = new byte[] { 1 }.ToImmutableArray();
            ByteArray = proof;
        }

        /// <summary>
        /// Converts a <see cref="byte"/> array into a <see cref="BlockHash"/>.
        /// </summary>
        /// <param name="proof">A <see cref="byte"/> array that encodes
        /// a <see cref="BlockHash"/>.</param>
        /// <exception cref="ArgumentNullException">Thrown when the given
        /// <paramref name="proof"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="proof"/>'s <see cref="ImmutableArray{T}.Length"/> is not 32.
        /// </exception>
        public BlockProof(byte[] proof)
            : this((proof ?? throw new ArgumentNullException(nameof(proof)))
                .ToImmutableArray())
        {
        }

        /// <summary>
        /// A bare immutable <see cref="byte"/> array of the proof.
        /// </summary>
        /// <remarks>It is immutable.  For a mutable array, use <see cref="ToByteArray()"/> method
        /// instead.</remarks>
        /// <seealso cref="ToByteArray()"/>
        public ImmutableArray<byte> ByteArray { get; }

        /// <summary>
        /// The VRF hash of the proof.
        /// </summary>
        public ImmutableArray<byte> Hash => ProofToHash(ByteArray.ToArray()).ToImmutableArray();

        private ECDomainParameters ECParams { get; }

        private ImmutableArray<byte> SuiteBytes { get; }

        public override bool Equals(object? obj)
        {
            return obj is BlockProof other && Equals(other);
        }

        public bool Equals(BlockProof other)
        {
            return ByteArray.SequenceEqual(other.ByteArray);
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(ToByteArray());
        }

        /// <summary>
        /// Gets a bare mutable <see cref="byte"/> array of the proof.
        /// </summary>
        /// <returns>A new mutable <see cref="byte"/> array of the proof.
        /// Since a returned array is created every time the method is called,
        /// any mutations on that array does not affect to the block hash object.
        /// </returns>
        /// <seealso cref="ByteArray"/>
        [Pure]
        public byte[] ToByteArray() =>
            ByteArray.ToBuilder().ToArray();

        /// <summary>
        /// Verify proof with given <paramref name="publicKey"/> and <paramref name="message"/>.
        /// </summary>
        /// <param name="publicKey"><see cref="PublicKey"/> to verify <see cref="BlockProof"/> with
        /// <paramref name="message"/>.
        /// </param>
        /// <param name="message">A message bytearray to verify <see cref="BlockProof"/>.
        /// </param>
        /// <returns>true if the <see cref="BlockProof"/> was created
        /// from the <paramref name="message"/> with the corresponding
        /// <see cref="PrivateKey"/>, otherwise false.
        /// </returns>
        public bool Verify(PublicKey publicKey, byte[] message)
        {
            return VerifyProof(publicKey, message, ByteArray.ToArray());
        }

        /// <summary>
        /// Verify proof with given <paramref name="publicKey"/>,
        /// <paramref name="height"/> and <paramref name="round"/>.
        /// </summary>
        /// <param name="publicKey"><see cref="PublicKey"/> to verify <see cref="BlockProof"/> with
        /// <paramref name="height"/> and <paramref name="round"/>.
        /// </param>
        /// <param name="height">Height of the proposal.
        /// </param>
        /// <param name="round">Round of the proposal.
        /// </param>
        /// <returns>true if the <see cref="BlockProof"/> was created
        /// from the <paramref name="height"/> and <paramref name="round"/> with the corresponding
        /// <see cref="PrivateKey"/>, otherwise false.
        /// </returns>
        public bool Verify(PublicKey publicKey, long? height, int? round)
        {
            return VerifyProof(
                publicKey,
                MessageFromHeightRound(height, round).ToArray(),
                ByteArray.ToArray());
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
                    .Take((ECParams.Curve.FieldSize + 7) >> 3)).ToArray();
                try
                {
                    return ECParams.Curve.DecodePoint(encoded);
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
                .Take((ECParams.Curve.FieldSize + 7) >> 3).ToArray();
            BigInteger c = new BigInteger(1, truncatedCBytes);

            return c;
        }

        /// <summary>
        /// Creates a piBytes from <paramref name="alphaBytes"/> with the corresponding
        /// <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="privateKey"><see cref="PrivateKey"/> to prove
        /// <paramref name="alphaBytes"/>.
        /// </param>
        /// <param name="alphaBytes">A message bytearray to generate piBytes.
        /// </param>
        /// <returns>
        /// <c>piBytes</c> that is created from the <paramref name="alphaBytes"/>
        /// with the corresponding <paramref name="privateKey"/>,
        /// which is called as <c>proof</c>.
        /// </returns>
        private byte[] Prove(PrivateKey privateKey, byte[] alphaBytes)
        {
            // n : modulus
            BigInteger n = ECParams.N;

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
            ECPoint kPointG = ECParams.G.Multiply(k);

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
            Array.Resize(ref cBytes, (ECParams.Curve.FieldSize + 7) >> 3);
            Array.Resize(ref sBytes, (ECParams.Curve.FieldSize + 7) >> 3);

            byte[] piBytes = gammaBytes.Concat(cBytes).Concat(sBytes).ToArray();

            return piBytes;
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
            int gammaBytesLen = ((ECParams.Curve.FieldSize + 7) >> 3) + 1;
            int cBytesLen = (ECParams.Curve.FieldSize + 7) >> 3;
            int sBytesLen = (ECParams.Curve.FieldSize + 7) >> 3;
            if (piBytes.Length != gammaBytesLen + cBytesLen + sBytesLen)
            {
                throw new ArgumentException();
            }

            byte[] gammaBytes = piBytes.Take(gammaBytesLen).ToArray();
            byte[] cBytes = piBytes.Skip(gammaBytesLen).Take(cBytesLen).ToArray();
            byte[] sBytes = piBytes.Skip(gammaBytesLen + cBytesLen).Take(sBytesLen).ToArray();

            BigInteger c = new BigInteger(1, cBytes);
            BigInteger s = new BigInteger(1, sBytes);

            if (s.CompareTo(ECParams.N) == 1)
            {
                throw new ArgumentException();
            }

            // dH : Gamma
            ECPoint gamma = ECParams.Curve.DecodePoint(gammaBytes);

            return (gamma, c, s);
        }

        /// <summary>
        /// Verifies whether a <paramref name="piBytes"/> was created from
        /// a <paramref name="alphaBytes"/> with the corresponding <see cref="PrivateKey"/>.
        /// </summary>
        /// <param name="publicKey"><see cref="PublicKey"/> used for verification.</param>
        /// <param name="alphaBytes">A message bytearray.</param>
        /// <param name="piBytes">A proof that was created from the
        /// <paramref name="alphaBytes"/>.</param>
        /// <returns>true if the <paramref name="piBytes"/> was created
        /// from the <paramref name="alphaBytes"/> with the corresponding
        /// <see cref="PrivateKey"/>, otherwise false.
        /// </returns>
        private bool VerifyProof(
            PublicKey publicKey, byte[] alphaBytes, byte[] piBytes)
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

        /// <summary>
        /// Generate VRF hash from a <paramref name="piBytes"/>.
        /// </summary>
        /// <param name="piBytes"> Proof to generate hash.
        /// </param>
        /// <returns>
        /// Hash bytes generated from the <paramref name="piBytes"/>.
        /// </returns>
        private byte[] ProofToHash(byte[] piBytes)
        {
            (ECPoint gamma, _, _) = DecodeProof(piBytes);

            ECPoint gammaMul = ECParams.H.Equals(BigInteger.One)
                ? gamma
                : gamma.Multiply(ECParams.H);

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
        /// Generate message from <paramref name="height"/> and <paramref name="round"/>.
        /// </summary>
        /// <param name="height">Height of the proposal.
        /// </param>
        /// <param name="round">Round of the proposal.
        /// </param>
        /// <returns>Concatenated bytes of <paramref name="height"/> and <paramref name="round"/>.
        /// </returns>
        private ImmutableArray<byte> MessageFromHeightRound(long? height, int? round)
        {
            long h = height ?? -1;
            int r = round ?? -1;
            ImmutableArray<byte> message
                = BitConverter.IsLittleEndian
                ? BitConverter.GetBytes(h).Reverse()
                .Concat(BitConverter.GetBytes(r).Reverse()).ToImmutableArray()
                : BitConverter.GetBytes(h)
                .Concat(BitConverter.GetBytes(r)).ToImmutableArray();
            return message;
        }
    }
}
