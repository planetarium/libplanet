using System.Collections.Generic;
using System.Numerics;
using Libplanet.Action;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ConsensusPowerIndexTest : PoSTest
    {
        private IAccountStateDelta _states;

        public ConsensusPowerIndexTest()
        {
            List<Address> operatorAddresses = new List<Address>()
            {
                CreateAddress(),
                CreateAddress(),
                CreateAddress(),
                CreateAddress(),
                CreateAddress(),
            };

            _states = InitializeStates();
            ValidatorAddresses = new List<Address>();
            foreach (Address address in operatorAddresses)
            {
                _states = _states.MintAsset(address, Asset.GovernanceToken * 100);
                Validator validator = new Validator(address);
                ValidatorAddresses.Add(validator.Address);
                _states = validator.Apply(_states, Asset.GovernanceToken * 10);
            }
        }

        private List<Address> ValidatorAddresses { get; set; }

        private ConsensusPowerIndex ConsensusPowerIndexInstance
        {
            get
            {
                var serializedConsensusPowerIndex = _states.GetState(
                    ReservedAddress.ConsensusPowerIndex);
                ConsensusPowerIndex consensusPowerIndex = (serializedConsensusPowerIndex == null)
                    ? new ConsensusPowerIndex()
                    : new ConsensusPowerIndex(serializedConsensusPowerIndex);
                return consensusPowerIndex;
            }
        }

        [Fact]
        public void SortingTestDifferentToken()
        {
            _states = _states.MintAsset(ValidatorAddresses[0], Asset.ConsensusToken * 10);
            _states = _states.MintAsset(ValidatorAddresses[1], Asset.ConsensusToken * 30);
            _states = _states.MintAsset(ValidatorAddresses[2], Asset.ConsensusToken * 50);
            _states = _states.MintAsset(ValidatorAddresses[3], Asset.ConsensusToken * 40);
            _states = _states.MintAsset(ValidatorAddresses[4], Asset.ConsensusToken * 20);
            _states = ConsensusPowerIndexInstance.Update(_states, ValidatorAddresses);
            List<ConsensusPowerKey> keys = ConsensusPowerIndexInstance.TopNKeys(4);
            Assert.Equal(4, keys.Count);
            Assert.Equal(ValidatorAddresses[2], keys[0].ValidatorAddress);
            Assert.Equal(Asset.ConsensusToken * 60, keys[0].ConsensusToken);
            Assert.Equal(ValidatorAddresses[3], keys[1].ValidatorAddress);
            Assert.Equal(Asset.ConsensusToken * 50, keys[1].ConsensusToken);
            Assert.Equal(ValidatorAddresses[1], keys[2].ValidatorAddress);
            Assert.Equal(Asset.ConsensusToken * 40, keys[2].ConsensusToken);
            Assert.Equal(ValidatorAddresses[4], keys[3].ValidatorAddress);
            Assert.Equal(Asset.ConsensusToken * 30, keys[3].ConsensusToken);
        }

        [Fact]
        public void SortingTestSameToken()
        {
            _states = _states.MintAsset(ValidatorAddresses[0], Asset.ConsensusToken * 10);
            _states = _states.MintAsset(ValidatorAddresses[1], Asset.ConsensusToken * 10);
            _states = _states.MintAsset(ValidatorAddresses[2], Asset.ConsensusToken * 10);
            _states = _states.MintAsset(ValidatorAddresses[3], Asset.ConsensusToken * 10);
            _states = _states.MintAsset(ValidatorAddresses[4], Asset.ConsensusToken * 10);
            _states = ConsensusPowerIndexInstance.Update(_states, ValidatorAddresses);
            List<ConsensusPowerKey> keys = ConsensusPowerIndexInstance.TopNKeys(5);
            Assert.Equal(5, keys.Count);
            for (int i = 0; i < keys.Count - 1; i++)
            {
                Assert.True(new BigInteger(keys[i].ValidatorAddress.ToByteArray())
                    > new BigInteger(keys[i + 1].ValidatorAddress.ToByteArray()));
            }
        }
    }
}
