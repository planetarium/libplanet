using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.PoS;
using Libplanet.PoS.Control;
using Libplanet.PoS.Model;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class ValidatorSetCtrlTest : PoSTest
    {
        private IAccountStateDelta _states;

        public ValidatorSetCtrlTest()
            : base()
        {
            _states = InitializeStates();
            OperatorAddresses = new List<Address>();
            ValidatorAddresses = new List<Address>();
            DelegatorAddress = CreateAddress();
            _states = _states.MintAsset(DelegatorAddress, Asset.GovernanceToken * 100000);
            for (int i = 0; i < 200; i++)
            {
                PublicKey operatorPublicKey = new PrivateKey().PublicKey;
                Address operatorAddress = operatorPublicKey.ToAddress();
                _states = _states.MintAsset(operatorAddress, Asset.GovernanceToken * 1000);
                OperatorAddresses.Add(operatorAddress);
                _states = ValidatorCtrl.Create(
                    _states,
                    operatorAddress,
                    operatorPublicKey,
                    Asset.GovernanceToken * 1,
                    1);
                ValidatorAddresses.Add(Validator.DeriveAddress(operatorAddress));
            }
        }

        private List<Address> OperatorAddresses { get; set; }

        private List<Address> ValidatorAddresses { get; set; }

        private Address DelegatorAddress { get; set; }

        [Fact]
        public void ValidatorSetTest()
        {
            for (int i = 0; i < 200; i++)
            {
                _states = DelegateCtrl.Execute(
                    _states,
                    DelegatorAddress,
                    ValidatorAddresses[i],
                    Asset.GovernanceToken * (i + 1),
                    1);
            }

            Address validatorAddressA = ValidatorAddresses[3];
            Address validatorAddressB = ValidatorAddresses[5];
            Address delegationAddressB = Delegation.DeriveAddress(
                DelegatorAddress, validatorAddressB);

            _states = DelegateCtrl.Execute(
                _states, DelegatorAddress, validatorAddressA, Asset.GovernanceToken * 200, 1);

            _states = DelegateCtrl.Execute(
                _states, DelegatorAddress, validatorAddressB, Asset.GovernanceToken * 300, 1);

            _states = ValidatorSetCtrl.Update(_states, 1);

            ValidatorSet bondedSet;
            (_states, bondedSet) = ValidatorSetCtrl.FetchBondedValidatorSet(_states);
            Assert.Equal(
                validatorAddressB, bondedSet.Set.ToList()[0].ValidatorAddress);
            Assert.Equal(
                validatorAddressA, bondedSet.Set.ToList()[1].ValidatorAddress);
            Assert.Equal(
                Asset.Share * (5 + 1 + 300),
                _states.GetBalance(delegationAddressB, Asset.Share));
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

            _states = UndelegateCtrl.Execute(
                _states,
                DelegatorAddress,
                validatorAddressB,
                _states.GetBalance(delegationAddressB, Asset.Share),
                2);

            Assert.Equal(
                Asset.Share * 0,
                _states.GetBalance(delegationAddressB, Asset.Share));
            Assert.Equal(
                Asset.ConsensusToken * 1,
                _states.GetBalance(validatorAddressB, Asset.ConsensusToken));
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

            _states = ValidatorSetCtrl.Update(_states, 1);
            (_states, bondedSet) = ValidatorSetCtrl.FetchBondedValidatorSet(_states);
            Assert.Equal(
                validatorAddressA, bondedSet.Set.ToList()[0].ValidatorAddress);
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

            _states = ValidatorSetCtrl.Update(_states, 50400 * 5);

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
