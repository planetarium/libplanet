using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorsTest : PoSTest
    {
        private IAccountStateDelta _states;

        public ValidatorsTest()
            : base()
        {
            _states = InitializeStates();
            OperatorAddresses = new List<Address>();
            ValidatorAddresses = new List<Address>();
            DelegatorAddress = CreateAddress();
            _states = _states.MintAsset(DelegatorAddress, Asset.GovernanceToken * 100000);
            for (int i = 0; i < 200; i++)
            {
                Address operatorAddress = CreateAddress();
                _states = _states.MintAsset(operatorAddress, Asset.GovernanceToken * 1000);
                OperatorAddresses.Add(operatorAddress);
                Validator validator = new Validator(operatorAddress);
                _states = validator.Apply(_states, Asset.GovernanceToken * 1);
                ValidatorAddresses.Add(validator.Address);
            }

            Validators = new Validators();
        }

        private List<Address> OperatorAddresses { get; set; }

        private List<Address> ValidatorAddresses { get; set; }

        private Address DelegatorAddress { get; set; }

        private Validators Validators { get; set; }

        [Fact]
        public void ValidatorSetTest()
        {
            for (int i = 0; i < 200; i++)
            {
                Delegation delegation = new Delegation(DelegatorAddress, ValidatorAddresses[i]);
                _states = delegation.Delegate(_states, Asset.GovernanceToken * (i + 1));
            }

            Delegation delegationA = new Delegation(DelegatorAddress, ValidatorAddresses[3]);
            _states = delegationA.Delegate(_states, Asset.GovernanceToken * 200);

            Delegation delegationB = new Delegation(DelegatorAddress, ValidatorAddresses[5]);
            _states = delegationB.Delegate(_states, Asset.GovernanceToken * 300);

            _states = Validators.Update(_states, 1);

            Assert.Equal(ValidatorAddresses[5], Validators.ValidatorAddressSet[0]);
            Assert.Equal(ValidatorAddresses[3], Validators.ValidatorAddressSet[1]);
            Assert.Equal(
                Asset.Share * (5 + 1 + 300),
                _states.GetBalance(delegationB.Address, Asset.Share));
            Assert.Equal(
                Asset.ConsensusToken * (1 + 5 + 1 + 300),
                _states.GetBalance(ValidatorAddresses[5], Asset.ConsensusToken));
            Assert.Equal(
                Asset.GovernanceToken
                * (100 + (101 + 200) * 50 - 101 - 102 + 204 + 306),
                _states.GetBalance(ReservedAddress.BondedPool, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken
                * (100 + (1 + 100) * 50 - 4 - 6 + 101 + 102),
                _states.GetBalance(ReservedAddress.UnbondedPool, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken
                * (100000 - (1 + 200) * 100 - 200 - 300),
                _states.GetBalance(DelegatorAddress, Asset.GovernanceToken));

            Undelegation undelegation = new Undelegation(DelegatorAddress, ValidatorAddresses[5]);
            _states = undelegation.Undelegate(
                _states, _states.GetBalance(delegationB.Address, Asset.Share), 2);

            Assert.Equal(
                Asset.Share * 0,
                _states.GetBalance(delegationB.Address, Asset.Share));
            Assert.Equal(
                Asset.ConsensusToken * 1,
                _states.GetBalance(ValidatorAddresses[5], Asset.ConsensusToken));
            Assert.Equal(
                Asset.GovernanceToken
                * (100 + (101 + 200) * 50 - 101 - 102 + 204 + 306 - 306),
                _states.GetBalance(ReservedAddress.BondedPool, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken
                * (100 + (1 + 100) * 50 - 4 - 6 + 101 + 102 + 306),
                _states.GetBalance(ReservedAddress.UnbondedPool, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken
                * (100000 - (1 + 200) * 100 - 200 - 300),
                _states.GetBalance(DelegatorAddress, Asset.GovernanceToken));

            _states = Validators.Update(_states, 1);

            Assert.Equal(ValidatorAddresses[3], Validators.ValidatorAddressSet[0]);
            Assert.Equal(
                Asset.GovernanceToken
                * (100 + (101 + 200) * 50 - 101 - 102 + 204 + 306 - 306 + 102),
                _states.GetBalance(ReservedAddress.BondedPool, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken
                * (100 + (1 + 100) * 50 - 4 - 6 + 101 + 102 + 306 - 102),
                _states.GetBalance(ReservedAddress.UnbondedPool, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken
                * (100000 - (1 + 200) * 100 - 200 - 300),
                _states.GetBalance(DelegatorAddress, Asset.GovernanceToken));

            _states = Validators.Update(_states, 50400 * 5);

            Assert.Equal(
                Asset.GovernanceToken
                * (100 + (1 + 100) * 50 - 4 - 6 + 101 + 102 + 306 - 102 - 306),
                _states.GetBalance(ReservedAddress.UnbondedPool, Asset.GovernanceToken));
            Assert.Equal(
                Asset.GovernanceToken
                * (100000 - (1 + 200) * 100 - 200 - 300 + 306),
                _states.GetBalance(DelegatorAddress, Asset.GovernanceToken));
        }
    }
}
