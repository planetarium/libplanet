using System;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class LotTest
    {
        private readonly ConsensusInformation _genesisConsensusInformation;
        private readonly PrivateKey _genesisProver;
        private readonly Proof _genesisProof;

        private readonly ConsensusInformation _consensusInformation;
        private readonly PrivateKey _prover;
        private readonly Proof _proof;
        private readonly Lot _lot;

        public LotTest()
        {
            _genesisProver = new PrivateKey();
            _genesisConsensusInformation = new ConsensusInformation(0, 0, null);
            _genesisProof = _genesisConsensusInformation.Prove(_genesisProver);
            _consensusInformation = new ConsensusInformation(1, 2, _genesisProof);
            _prover = new PrivateKey();
            _proof = _consensusInformation.Prove(_prover);
            _lot = new Lot(_proof, _prover.PublicKey, _consensusInformation);
        }

        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentException>(
                () => new Lot(
                    _proof,
                    new PrivateKey().PublicKey,
                    _consensusInformation));
            Assert.Throws<ArgumentException>(
                () => new Lot(
                    _proof,
                    _prover.PublicKey,
                    new ConsensusInformation(0, 1, null)));

            var lot = new Lot(_proof, _prover.PublicKey, _consensusInformation);

            Assert.Equal(_proof, lot.Proof);
            Assert.Equal(_prover.PublicKey, lot.PublicKey);
            Assert.Equal(_consensusInformation, lot.ConsensusInformation);
            Assert.Equal(lot, new Lot(lot.Bencoded));
            Assert.Equal(lot, new Lot(lot.ByteArray));
        }

        [Fact]
        public void Equal()
        {
            Assert.Equal(_lot, new Lot(_proof, _prover.PublicKey, _consensusInformation));
            Assert.NotEqual(_lot, _consensusInformation.ToLot(new PrivateKey()));
            Assert.NotEqual(_lot, new ConsensusInformation(0, 1, null).ToLot(_prover));
        }

        [Fact]
        public void HashCode()
        {
            Assert.Equal(
                _lot.GetHashCode(),
                new Lot(_proof, _prover.PublicKey, _consensusInformation).GetHashCode());
            Assert.NotEqual(
                _lot.GetHashCode(),
                _consensusInformation.ToLot(new PrivateKey()).GetHashCode());
            Assert.NotEqual(
                _lot.GetHashCode(),
                new ConsensusInformation(0, 1, null).ToLot(_prover).GetHashCode());
        }
    }
}
