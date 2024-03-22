using System;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Crypto
{
    public class ProofTest
    {
        private readonly Random _rnd = new Random();

        [Fact]
        public void Constructor()
        {
            var acceptablePiBytes = new byte[97];

            for (int i = 0; i < 100; i++)
            {
                _rnd.NextBytes(acceptablePiBytes);
                new Proof(acceptablePiBytes);

                if (i != 97)
                {
                    var unacceptablePiBytes = new byte[i];
                    _rnd.NextBytes(unacceptablePiBytes);
                    Assert.Throws<ArgumentException>(() => new Proof(unacceptablePiBytes));
                }
            }
        }

        [Fact]
        public void ConstructorDifferentEncoding()
        {
            var piBytes = new byte[97];
            _rnd.NextBytes(piBytes);

            Assert.Equal(new Proof(piBytes), new Proof(new Binary(piBytes)));
            Assert.Equal(new Proof(piBytes), new Proof((IValue)new Binary(piBytes)));
        }

        [Fact]
        public void Bencoded()
        {
            var piBytes = new byte[97];
            _rnd.NextBytes(piBytes);

            var proof = new Proof(piBytes);

            Assert.Equal(proof, new Proof(proof.Bencoded));
        }

        [Fact]
        public void ByteArray()
        {
            var piBytes = new byte[97];
            _rnd.NextBytes(piBytes);

            var proof = new Proof(piBytes);

            Assert.Equal(proof, new Proof(proof.ByteArray));
            Assert.Equal(proof, new Proof(proof.ToByteArray()));
        }

        [Fact]
        public void Verify()
        {
            var payload = new byte[100];
            _rnd.NextBytes(payload);

            var privateKey = new PrivateKey();
            var wrongPrivateKey = new PrivateKey();
            var proof = privateKey.Prove(payload);
            Assert.True(proof.Verify(privateKey.PublicKey, payload));
            Assert.False(proof.Verify(wrongPrivateKey.PublicKey, payload));

            _rnd.NextBytes(payload);
            Assert.False(proof.Verify(privateKey.PublicKey, payload));
        }

        [Fact]
        public void Hash()
        {
            var randomPiBytes = new byte[97];
            _rnd.NextBytes(randomPiBytes);
            var invalidProof = new Proof(randomPiBytes);
            Assert.Throws<InvalidProofException>(() => invalidProof.Hash);

            var payload = new byte[100];
            _rnd.NextBytes(payload);

            var privateKey = new PrivateKey();
            var proof = privateKey.Prove(payload);
            Assert.Equal(64, proof.Hash.Length);
            Assert.True(proof.Hash.SequenceEqual(privateKey.Prove(payload).Hash));
            Assert.NotEqual(proof.Hash, new PrivateKey().Prove(payload).Hash);
            _rnd.NextBytes(payload);
            Assert.NotEqual(proof.Hash, new PrivateKey().Prove(payload).Hash);
        }

        [Fact]
        public void HashInt()
        {
            var maxInt = new BigInteger(
                Enumerable.Repeat(byte.MaxValue, 64).Concat(new byte[] { 0 }).ToArray());

            var randomPiBytes = new byte[97];
            _rnd.NextBytes(randomPiBytes);
            var invalidProof = new Proof(randomPiBytes);
            Assert.Throws<InvalidProofException>(() => invalidProof.HashInt);

            var privateKey = new PrivateKey();
            var payload = new byte[100];
            _rnd.NextBytes(payload);
            var proof = privateKey.Prove(payload);

            for (int i = 0; i < 100; i++)
            {
                Assert.True(proof.HashInt >= 0 && proof.HashInt <= maxInt);
                Assert.Equal(proof, privateKey.Prove(payload));
                Assert.NotEqual(proof, new PrivateKey().Prove(payload));

                _rnd.NextBytes(payload);
                Assert.NotEqual(proof, privateKey.Prove(payload));

                privateKey = new PrivateKey();
                var newProof = privateKey.Prove(payload);
                Assert.NotEqual(proof.HashInt, new PrivateKey().Prove(payload).HashInt);
                Assert.Equal(proof.HashInt > newProof.HashInt ? 1 : -1, proof.CompareTo(newProof));
                proof = newProof;
            }
        }

        [Fact]
        public void Seed()
        {
            var randomPiBytes = new byte[97];
            _rnd.NextBytes(randomPiBytes);
            var invalidProof = new Proof(randomPiBytes);
            Assert.Throws<InvalidProofException>(() => invalidProof.Seed);

            var payload = new byte[100];
            _rnd.NextBytes(payload);

            var privateKey = new PrivateKey();
            var proof = privateKey.Prove(payload);
            Assert.Equal(proof.Seed, privateKey.Prove(payload).Seed);
            Assert.NotEqual(proof.Seed, new PrivateKey().Prove(payload).Seed);
            _rnd.NextBytes(payload);
            Assert.NotEqual(proof.Seed, new PrivateKey().Prove(payload).Seed);
        }

        [Fact]
        public void Draw()
        {
            var randomPiBytes = new byte[97];
            _rnd.NextBytes(randomPiBytes);
            var invalidProof = new Proof(randomPiBytes);
            Assert.Throws<InvalidProofException>(() => invalidProof.Draw(5, 10, 20));

            var payload = new byte[100];
            _rnd.NextBytes(payload);

            var privateKey = new PrivateKey();
            var proof = privateKey.Prove(payload);

            for (int i = 0; i < 10; i++)
            {
                var drawn = proof.Draw(5, i, 20);
                Assert.True(drawn <= i);
                Assert.Equal(drawn, proof.Draw(5, i, 20));
            }
        }
    }
}
