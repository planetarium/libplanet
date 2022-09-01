using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Crypto;
using Libplanet.PoS;
using Xunit;

namespace Libplanet.Tests.PoS
{
    public class BondedValidatorSetCtrlTest : PoSTest
    {
        private IAccountStateDelta _states;

        public BondedValidatorSetCtrlTest()
            : base()
        {
            _states = InitializeStates();
            OperatorPublicKeys = new List<PublicKey>();
            OperatorAddresses = new List<Address>();
            ValidatorAddresses = new List<Address>();
            DelegatorAddress = CreateAddress();
            _states = _states.MintAsset(DelegatorAddress, Asset.GovernanceToken * 100000);
            for (int i = 0; i < 200; i++)
            {
                PublicKey operatorPublicKey = new PrivateKey().PublicKey;
                Address operatorAddress = operatorPublicKey.ToAddress();
                _states = _states.MintAsset(operatorAddress, Asset.GovernanceToken * 1000);
                OperatorPublicKeys.Add(operatorPublicKey);
                OperatorAddresses.Add(operatorAddress);
                _states = ValidatorCtrl.Create(
                    _states,
                    operatorAddress,
                    operatorPublicKey,
                    Asset.GovernanceToken * 1);
                ValidatorAddresses.Add(Validator.DeriveAddress(operatorAddress));
            }
        }

        private List<PublicKey> OperatorPublicKeys { get; set; }

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
                    Asset.GovernanceToken * (i + 1));
            }

            Address validatorAddressA = ValidatorAddresses[3];
            Address validatorAddressB = ValidatorAddresses[5];
            Address delegationAddressB = Delegation.DeriveAddress(
                DelegatorAddress, validatorAddressB);

            _states = DelegateCtrl.Execute(
                _states, DelegatorAddress, validatorAddressA, Asset.GovernanceToken * 200);

            _states = DelegateCtrl.Execute(
                _states, DelegatorAddress, validatorAddressB, Asset.GovernanceToken * 300);

            _states = ValidatorPowerSetCtrl.Update(_states, 1);

            BondedValidatorSet bondedValidatorSet;
            (_states, bondedValidatorSet) = BondedValidatorSetCtrl.FetchBondedValidatorSet(_states);
            Assert.Equal(ValidatorAddresses[5], bondedValidatorSet[0].ValidatorAddress);
            Assert.Equal(OperatorPublicKeys[5], bondedValidatorSet[0].OperatorPublicKey);
            int total = (int)_states.GetBalance(
                ReservedAddress.BondedPool, Asset.GovernanceToken).MajorUnit;
            int balB = 1 + 6 + 300;
            Assert.Equal(1 / (double)(total / balB), bondedValidatorSet[0].PowerFrac);
        }
    }
}
