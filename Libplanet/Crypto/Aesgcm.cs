using System;
using System.IO;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Engines;
using Org.BouncyCastle.Crypto.Modes;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Security;

namespace Libplanet.Crypto
{
    public class Aesgcm
    {
        private const int KeyBitSize = 256;
        private const int MacBitSize = 128;
        private const int NonceBitSize = 128;

        private readonly SecureRandom _secureRandom;
        private readonly byte[] _key;

        public Aesgcm(byte[] key)
        {
            _secureRandom = new SecureRandom();

            if (key == null || key.Length != KeyBitSize / 8)
            {
                throw new ArgumentException(
                    $"Key needs to be {KeyBitSize} bit!",
                    nameof(key));
            }

            this._key = key;
        }

        public byte[] Encrypt(byte[] message, byte[] nonSecret = null)
        {
            var nonce = new byte[NonceBitSize / 8];
            _secureRandom.NextBytes(nonce, 0, nonce.Length);

            nonSecret = nonSecret ?? new byte[] { };

            var cipher = new GcmBlockCipher(new AesEngine());
            var parameters = new AeadParameters(
                new KeyParameter(_key), MacBitSize, nonce, nonSecret);
            cipher.Init(true, parameters);

            var cipherText = new byte[cipher.GetOutputSize(message.Length)];
            int len =
                cipher.ProcessBytes(message, 0, message.Length, cipherText, 0);
            cipher.DoFinal(cipherText, len);

            using (var combinedStream = new MemoryStream())
            {
                using (var binaryWriter = new BinaryWriter(combinedStream))
                {
                    binaryWriter.Write(nonSecret);
                    binaryWriter.Write(nonce);
                    binaryWriter.Write(cipherText);
                }

                return combinedStream.ToArray();
            }
        }

        public byte[] Decrypt(byte[] encrypted, int nonSecretLength = 0)
        {
            if (encrypted == null || encrypted.Length == 0)
            {
                throw new ArgumentException(
                    "Encrypted Message Required!",
                    nameof(encrypted));
            }

            using (var cipherStream = new MemoryStream(encrypted))
            using (var cipherReader = new BinaryReader(cipherStream))
            {
                byte[] nonSecretPayload = cipherReader.ReadBytes(nonSecretLength);
                byte[] nonce = cipherReader.ReadBytes(NonceBitSize / 8);

                var cipher = new GcmBlockCipher(new AesEngine());
                var parameters = new AeadParameters(
                    new KeyParameter(_key),
                    MacBitSize,
                    nonce,
                    nonSecretPayload);
                cipher.Init(false, parameters);

                byte[] cipherText =
                    cipherReader.ReadBytes(
                        encrypted.Length - nonSecretLength - nonce.Length);
                var plainText =
                    new byte[cipher.GetOutputSize(cipherText.Length)];

                try
                {
                    int len = cipher.ProcessBytes(
                        cipherText, 0, cipherText.Length, plainText, 0);
                    cipher.DoFinal(plainText, len);
                    return plainText;
                }
                catch (InvalidCipherTextException)
                {
                    // FIXME
                    return null;
                }
            }
        }
    }
}
