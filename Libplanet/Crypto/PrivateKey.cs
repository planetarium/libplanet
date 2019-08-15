using System;
using System.Diagnostics.Contracts;
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
    /// <summary>
    /// A secret part of a key pair involved in
    /// <a href="https://en.wikipedia.org/wiki/ECDSA">ECDSA</a>, the digital
    /// signature algorithm on which the Libplanet is based.  It can be used to
    /// create signatures, which can be verified with the corresponding
    /// <see cref="Libplanet.Crypto.PublicKey"/>, as well as to decrypt
    /// messages which were encrypted with the corresponding
    /// <see cref="Libplanet.Crypto.PublicKey"/>.
    /// <para>Note that it uses <a href="https://en.bitcoin.it/wiki/Secp256k1"
    /// >secp256k1</a> as the parameters of the elliptic curve, which is
    /// the same to <a href="https://bitcoin.org/">Bitcoin</a> and
    /// <a href="https://www.ethereum.org/">Ethereum</a>.
    /// It means private keys generated for Bitcoin/Ethereum can be used by
    /// Libplanet-backed games/apps too.</para>
    /// </summary>
    /// <remarks>
    /// These (and any derived representations, e.g., <see cref="ByteArray"/>)
    /// must be kept secret, if they are exposed, an attacker will be able to
    /// forge signatures.
    /// <para>Every <see cref="PrivateKey"/> object is immutable.</para>
    /// </remarks>
    /// <seealso cref="Libplanet.Crypto.PublicKey"/>
    [Equals]
    public class PrivateKey
    {
        private readonly ECPrivateKeyParameters keyParam;

        /// <summary>
        /// Generates a new unique <see cref="PrivateKey"/> instance.
        /// It can be analogous to creating a new account in a degree.
        /// </summary>
        public PrivateKey()
            : this(
                GenerateKeyParam()
            )
        {
        }

        /// <summary>
        /// Creates a <see cref="PrivateKey"/> instance from the given
        /// <see cref="byte"/> array (i.e., <paramref name="privateKey"/>),
        /// which encodes a valid <a href="https://en.wikipedia.org/wiki/ECDSA">
        /// ECDSA</a> private key.
        /// </summary>
        /// <param name="privateKey">A valid <see cref="byte"/> array that
        /// encodes an ECDSA private key.
        /// </param>
        /// <remarks>A valid <see cref="byte"/> array for
        /// a <see cref="PrivateKey"/> can be encoded using
        /// <see cref="ByteArray"/> property.
        /// </remarks>
        /// <seealso cref="ByteArray"/>
        public PrivateKey(byte[] privateKey)
            : this(
                GenerateKeyFromBytes(privateKey)
            )
        {
        }

        private PrivateKey(ECPrivateKeyParameters keyParam)
        {
            this.keyParam = keyParam;
        }

        /// <summary>
        /// The corresponding <see cref="Libplanet.Crypto.PublicKey"/> of
        /// this private key.
        /// </summary>
        [Pure]
        [IgnoreDuringEquals]
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

        /// <summary>
        /// A <see cref="byte"/> array encoding of this private key.
        /// </summary>
        /// <remarks>
        /// An encoded <see cref="byte"/> array representation can recover
        /// a <see cref="PrivateKey"/> object again using its constructor
        /// (i.e., <see cref="PrivateKey(byte[])"/>.
        /// <para>As like <see cref="PrivateKey"/> instances, this also must be
        /// kept secret.  In practice, this must not be sent over the network,
        /// and be securely stored in the file system.
        /// For the most part, modern operating systems, mobile ones
        /// in particular, provide their own API
        /// to store password and private keys in the secure manner, which
        /// means they encrypt things to store using their own hardware
        /// security unit if possible.  See also <a
        /// href="https://developer.android.com/training/articles/keystore"
        /// >Android keystore system</a> or <a href="https://apple.co/2JHjxAq"
        /// >iOS Secure Enclave</a>.</para>
        /// </remarks>
        /// <seealso cref="PrivateKey(byte[])"/>
        [Pure]
        public byte[] ByteArray => keyParam.D.ToByteArrayUnsigned();

        /// <summary>
        /// Creates a signature from the given <paramref name="message"/>.
        /// <para>
        /// A created signature can be verified by the corresponding
        /// <see cref="PublicKey"/>.
        /// </para>
        /// <para>
        /// Signatures can be created by only the <see cref="PrivateKey"/>
        /// which corresponds a <see cref="PublicKey"/> to verify these
        /// signatures.
        /// </para>
        /// <para>
        /// To sum up, a signature is used to guarantee:
        /// </para>
        /// <list type="bullet">
        /// <item><description>that the <paramref name="message"/> was created
        /// by someone possessing the corresponding <see cref="PrivateKey"/>,
        /// </description></item>
        /// <item><description>that the possessor cannot deny having sent the
        /// <paramref name="message"/>, and</description></item>
        /// <item><description>that the <paramref name="message"/> was not
        /// forged in the middle of transit.</description></item>
        /// </list>
        /// </summary>
        /// <param name="message">A message to sign in <see cref="byte"/> array
        /// representation.</param>
        /// <returns>A signature that verifies the <paramref name="message"/>.
        /// It can be verified using
        /// <see cref="Libplanet.Crypto.PublicKey.Verify(byte[], byte[])"/>
        /// method.</returns>
        /// <seealso cref="Libplanet.Crypto.PublicKey.Verify(byte[], byte[])"/>
        public byte[] Sign(byte[] message)
        {
            var h = new Sha256Digest();
            var hashed = new byte[h.GetDigestSize()];
            h.BlockUpdate(message, 0, message.Length);
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

        /// <summary>
        /// Converts a <paramref name="ciphertext"/> which was encrypted with
        /// the corresponding <see cref="PublicKey"/> to the plain message.
        /// </summary>
        /// <param name="ciphertext">The encrypted data.</param>
        /// <returns>The plain data the <paramref name="ciphertext"/> encrypted.
        /// </returns>
        /// <exception cref="InvalidCiphertextException">Thrown when the given
        /// <paramref name="ciphertext"/> is invalid.</exception>
        /// <remarks>
        /// Although the parameter name <paramref name="ciphertext"/> has the
        /// word &#x201c;text&#x201d;, both a <paramref name="ciphertext"/>
        /// and a returned message are a <see cref="byte"/> string,
        /// not a Unicode <see cref="string"/>.
        /// </remarks>
        /// <seealso cref="Libplanet.Crypto.PublicKey.Encrypt(byte[])"/>
        [Pure]
        public byte[] Decrypt(byte[] ciphertext)
        {
            PublicKey pubKey = new PublicKey(ciphertext.Take(33).ToArray());
            SymmetricKey aes = ExchangeKey(pubKey);

            return aes.Decrypt(ciphertext, 33);
        }

        /// <summary>
        /// Securely exchange a <see cref="SymmetricKey"/> with a peer's
        /// <see cref="PublicKey"/>.
        /// Two parties can agree on a (new, unique, and typically temporal)
        /// key without revealing to any eavesdropping party what key has been
        /// agreed upon.
        /// <para>Technically it is <a href="https://en.wikipedia.org/wiki/ECDH"
        /// >ECDH</a>, a <a
        /// href="https://en.wikipedia.org/wiki/DH_key_exchange"
        /// >Diffie&#x2013;Hellman key exchange</a> of elliptic-curve version.
        /// </para>
        /// </summary>
        /// <param name="publicKey">The <see cref="PublicKey"/> possessed by
        /// a peer to whom exchange a private key with.</param>
        /// <returns>An exchanged (agreed) <see cref="SymmetricKey"/>.
        /// Note that it is not an elliptic-curve private key, but an <a
        /// href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
        /// >AES</a> key.</returns>
        [Pure]
        public SymmetricKey ExchangeKey(PublicKey publicKey)
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

            return new SymmetricKey(result);
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

        private static ECPrivateKeyParameters GenerateKeyParam()
        {
            var gen = new ECKeyPairGenerator();
            var secureRandom = new SecureRandom();
            ECDomainParameters ecParams = GetECParameters();
            var keyGenParam =
                new ECKeyGenerationParameters(ecParams, secureRandom);
            gen.Init(keyGenParam);

            return gen.GenerateKeyPair().Private as ECPrivateKeyParameters;
        }

        private static ECPrivateKeyParameters GenerateKeyFromBytes(byte[] privateKey)
        {
            var param = new ECPrivateKeyParameters(
                "ECDSA",
                new BigInteger(1, privateKey),
                GetECParameters()
            );

            var key = new PrivateKey(param);
            try
            {
                var publicKey = key.PublicKey;
            }
            catch (ArgumentException)
            {
                throw new InvalidOperationException(
                    "Infinity is not a valid public key for ECDH"
                );
            }

            return param;
        }

        private ECPoint CalculatePoint(ECPublicKeyParameters pubKeyParams)
        {
            ECDomainParameters dp = keyParam.Parameters;
            if (!dp.Equals(pubKeyParams.Parameters))
            {
                throw new InvalidOperationException(
                    "ECDH public key has wrong domain parameters"
                );
            }

            BigInteger d = keyParam.D;

            ECPoint q = dp.Curve.DecodePoint(pubKeyParams.Q.GetEncoded(true));
            if (q.IsInfinity)
            {
                throw new InvalidOperationException(
                    "Infinity is not a valid public key for ECDH"
                );
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
                    "Infinity is not a valid agreement value for ECDH"
                );
            }

            return p;
        }
    }
}
