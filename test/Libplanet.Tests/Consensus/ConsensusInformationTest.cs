using System;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class ConsensusInformationTest
    {
        private readonly ConsensusInformation _genesisConsensusInformation;
        private readonly PrivateKey _genesisProver;
        private readonly Proof _genesisProof;

        private readonly ConsensusInformation _consensusInformation;

        public ConsensusInformationTest()
        {
            _genesisProver = new PrivateKey();
            _genesisConsensusInformation = new ConsensusInformation(0, 0, null);
            _genesisProof = _genesisConsensusInformation.Prove(_genesisProver);
            _consensusInformation = new ConsensusInformation(1, 2, _genesisProof);
        }

        [Fact]
        public void Constructor()
        {
            Assert.Equal(0, _genesisConsensusInformation.Height);
            Assert.Equal(0, _genesisConsensusInformation.Round);
            Assert.Null(_genesisConsensusInformation.LastProof);

            Assert.Throws<ArgumentException>(() => new ConsensusInformation(-1, 0, null));
            Assert.Throws<ArgumentException>(() => new ConsensusInformation(0, -2, null));

            var ci = new ConsensusInformation(1, 2, _genesisProof);
            Assert.Equal(1, ci.Height);
            Assert.Equal(2, ci.Round);
            Assert.Equal(_genesisProof, ci.LastProof);
            Assert.Equal(ci, new ConsensusInformation(ci.Encoded));
        }

        [Fact]
        public void CannotProveOrVerifyWithNegativeRound()
        {
            var prover = new PrivateKey();
            var negativeRoundConsensusInformation = new ConsensusInformation(0, -1, _genesisProof);
            Assert.Throws<InvalidOperationException>(
                () => negativeRoundConsensusInformation.Prove(prover));

            var negativeRoundProof = prover.Prove(negativeRoundConsensusInformation.Encoded);
            Assert.Throws<InvalidOperationException>(
                () => negativeRoundConsensusInformation.Verify(
                    negativeRoundProof, prover.PublicKey));
        }

        [Fact]
        public void ProveAndVerify()
        {
            var prover = new PrivateKey();
            var nonProver = new PrivateKey();
            var proof = _consensusInformation.Prove(prover);
            Assert.True(_consensusInformation.Verify(proof, prover.PublicKey));
            Assert.False(_consensusInformation.Verify(proof, nonProver.PublicKey));
        }

        [Fact]
        public void ToLot()
        {
            var prover = new PrivateKey();
            var lot = _consensusInformation.ToLot(prover);
            Assert.Equal(_consensusInformation, lot.ConsensusInformation);
            Assert.Equal(prover.PublicKey, lot.PublicKey);
            Assert.Equal(_consensusInformation.Prove(prover), lot.Proof);
            Assert.True(_consensusInformation.Verify(lot.Proof, prover.PublicKey));
        }

        [Fact]
        public void Equal()
        {
            var differentProof = _genesisConsensusInformation.Prove(new PrivateKey());
            Assert.Equal(
                _consensusInformation,
                new ConsensusInformation(1, 2, _genesisProof));
            Assert.NotEqual(
                _consensusInformation,
                new ConsensusInformation(2, 2, _genesisProof));
            Assert.NotEqual(
                _consensusInformation,
                new ConsensusInformation(1, 3, _genesisProof));
            Assert.NotEqual(
                _consensusInformation,
                new ConsensusInformation(1, 2, differentProof));
        }

        [Fact]
        public void HashCode()
        {
            var differentProof = _genesisConsensusInformation.Prove(new PrivateKey());
            Assert.Equal(
                _consensusInformation.GetHashCode(),
                new ConsensusInformation(1, 2, _genesisProof).GetHashCode());
            Assert.NotEqual(
                _consensusInformation.GetHashCode(),
                new ConsensusInformation(2, 2, _genesisProof).GetHashCode());
            Assert.NotEqual(
                _consensusInformation.GetHashCode(),
                new ConsensusInformation(1, 3, _genesisProof).GetHashCode());
            Assert.NotEqual(
                _consensusInformation.GetHashCode(),
                new ConsensusInformation(1, 2, differentProof).GetHashCode());
        }
    }
}
