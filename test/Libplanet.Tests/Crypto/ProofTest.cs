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
        private readonly byte[] _validProofBytes = new byte[]
        {
            0x03, 0x47, 0xfc, 0xcb, 0x9f, 0x8b, 0x62, 0x8c, 0x00, 0x92,
            0x62, 0x7a, 0x7b, 0x91, 0x1a, 0x8e, 0x5b, 0xfb, 0xb4, 0x0b,
            0x5a, 0x25, 0xc1, 0x83, 0xf3, 0x4e, 0x91, 0x51, 0x3b, 0xaa,
            0xbd, 0x11, 0xfd, 0x9f, 0x72, 0xcd, 0x88, 0xac, 0x09, 0xab,
            0xe4, 0x97, 0xdb, 0x2b, 0x5e, 0x05, 0xb2, 0x52, 0x2c, 0x02,
            0xab, 0xd9, 0xb8, 0x5c, 0x62, 0x37, 0xcb, 0x48, 0x54, 0x08,
            0xd4, 0x6a, 0x13, 0x1e, 0xc1, 0xcd, 0xa7, 0xbc, 0xe3, 0x6c,
            0xce, 0x94, 0xaa, 0xd4, 0xca, 0x00, 0xcb, 0x3a, 0x3f, 0x24,
            0x9d, 0x4f, 0xaf, 0x76, 0x22, 0xa7, 0x28, 0x67, 0x2b, 0x08,
            0xa9, 0x8c, 0xa0, 0x63, 0xda, 0x27, 0xfa,
        };

        [Fact]
        public void Constructor()
        {
            new Proof(_validProofBytes);

            var randomPiBytes = new byte[97];
            _rnd.NextBytes(randomPiBytes);
            Assert.Throws<InvalidProofException>(() => new Proof(randomPiBytes));
        }

        [Fact]
        public void ConstructorDifferentEncoding()
        {
            Assert.Equal(
                new Proof(_validProofBytes), new Proof(new Binary(_validProofBytes)));
            Assert.Equal(
                new Proof(_validProofBytes), new Proof((IValue)new Binary(_validProofBytes)));
        }

        [Fact]
        public void Bencoded()
        {
            var proof = new Proof(_validProofBytes);
            Assert.Equal(proof, new Proof(proof.Bencoded));
        }

        [Fact]
        public void ByteArray()
        {
            var proof = new Proof(_validProofBytes);
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
