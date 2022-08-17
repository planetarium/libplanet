using System;
using System.Security.Cryptography;
using Planetarium.Cryptography.BLS12_381;

using PublicKeyBLS = Planetarium.Cryptography.BLS12_381.PublicKey;

namespace Libplanet.Crypto
{
    public class BlsCryptoBackend<T>
        where T : HashAlgorithm
    {
        public BlsSignature Sign(HashDigest<T> messageHash, BlsPrivateKey privateKey)
        {
            SecretKey sk = ValidateGetNativePrivateKey(privateKey);
            Msg msg = ConvertHashDigestToNativeMessage(messageHash);

            Signature sign = sk.Sign(msg);
            return new BlsSignature(sign.Serialize());
        }

        public bool Verify(
            HashDigest<T> messageHash,
            BlsSignature signature,
            BlsPublicKey publicKey)
        {
            PublicKeyBLS pk = ValidateGetNativePublicKey(publicKey);
            Signature sign = ValidateGetNativeSignature(signature);
            Msg msg = ConvertHashDigestToNativeMessage(messageHash);

            return pk.Verify(sign, msg);
        }

        public byte[] GeneratePrivateKey()
        {
            SecretKey sk = default;
            sk.SetByCSPRNG();
            return sk.Serialize();
        }

        public BlsPublicKey GetPublicKey(BlsPrivateKey privateKey)
        {
            SecretKey sk = ValidateGetNativePrivateKey(privateKey);

            return new BlsPublicKey(sk.GetPublicKey().Serialize());
        }

        public BlsSignature GetProofOfPossession(BlsPrivateKey privateKey)
        {
            SecretKey sk = ValidateGetNativePrivateKey(privateKey);

            return new BlsSignature(sk.GetPop().Serialize());
        }

        public PublicKeyBLS ValidateGetNativePublicKey(BlsPublicKey publicKey)
        {
            try
            {
                PublicKeyBLS pk = default;
                pk.Deserialize(publicKey.ToByteArray());

                return pk;
            }
            catch (Exception e) when (e is ArgumentException || e is ArithmeticException)
            {
                throw new CryptographicException("Invalid public key.", e);
            }
        }

        public bool VerifyPoP(BlsPublicKey publicKey, BlsSignature proofOfPossession)
        {
            PublicKeyBLS pk = default;
            pk.Deserialize(publicKey.ToByteArray());

            Signature pop = default;
            try
            {
                pop.Deserialize(proofOfPossession.ToByteArray());
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException(
                    "Invalid proof of possession.", e);
            }

            return pk.VerifyPop(pop);
        }

        public SecretKey ValidateGetNativePrivateKey(BlsPrivateKey privateKey)
        {
            SecretKey sk = default;
            try
            {
                sk.Deserialize(privateKey.ToByteArray());
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException("Invalid private key.", e);
            }

            return sk;
        }

        public Signature ValidateGetNativeSignature(BlsSignature signature)
        {
            Signature sig = default;
            try
            {
                sig.Deserialize(signature.ToByteArray());
            }
            catch (Exception e) when (e is ArithmeticException || e is ArgumentException)
            {
                throw new CryptographicException("Invalid signature.", e);
            }

            return sig;
        }

        public BlsSignature AggregateSignature(BlsSignature lhs, BlsSignature rhs)
        {
            Signature lhsSig = ValidateGetNativeSignature(lhs);
            Signature rhsSig = ValidateGetNativeSignature(rhs);
            lhsSig.Add(rhsSig);
            return new BlsSignature(lhsSig.Serialize());
        }

        public bool FastAggregateVerify(
            BlsSignature signature, BlsPublicKey[] publicKeys, HashDigest<T> message)
        {
            PublicKeyBLS[] pks = new PublicKeyBLS[publicKeys.Length];
            Msg msg = ConvertHashDigestToNativeMessage(message);

            for (var i = 0; i < pks.Length; ++i)
            {
                pks[i] = ValidateGetNativePublicKey(publicKeys[i]);
            }

            Signature sig = ValidateGetNativeSignature(signature);
            return sig.FastAggregateVerify(in pks, msg);
        }

        public bool AggregateVerify(
            BlsSignature signature, BlsPublicKey[] publicKeys, HashDigest<T>[] messages)
        {
            PublicKeyBLS[] pks = new PublicKeyBLS[publicKeys.Length];
            Msg[] msgs = new Msg[messages.Length];

            for (var i = 0; i < pks.Length; ++i)
            {
                pks[i] = ValidateGetNativePublicKey(publicKeys[i]);
                msgs[i] = ConvertHashDigestToNativeMessage(messages[i]);
            }

            Signature sig = ValidateGetNativeSignature(signature);
            return sig.AggregateVerify(in pks, in msgs);
        }

        public bool MultiVerify(
            BlsSignature[] signatures, BlsPublicKey[] publicKeys, HashDigest<T>[] messages)
        {
            Signature[] sks = new Signature[signatures.Length];
            PublicKeyBLS[] pks = new PublicKeyBLS[publicKeys.Length];
            Msg[] msgs = new Msg[messages.Length];

            for (var i = 0; i < pks.Length; ++i)
            {
                pks[i] = ValidateGetNativePublicKey(publicKeys[i]);
                sks[i] = ValidateGetNativeSignature(signatures[i].ToByteArray());
                msgs[i] = ConvertHashDigestToNativeMessage(messages[i]);
            }

            return BLS.MultiVerify(sks, pks, msgs);
        }

        private Msg ConvertHashDigestToNativeMessage(HashDigest<T> hashDigest)
        {
            Msg msg = default;
            try
            {
                msg.Set(hashDigest.ToByteArray());
            }
            catch (ArgumentException e)
            {
                throw new ArgumentException(
                    "The message hash is not a valid hash digest.", e);
            }

            return msg;
        }
    }
}
