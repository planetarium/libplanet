using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal static class ValidatorCtrl
    {
        internal static Validator GetValidatorByAddr(
            IAccountStateDelta states,
            Address validatorAddress)
        {
            IValue? serializedValidator = states.GetState(validatorAddress);
            if (serializedValidator == null)
            {
                throw new InvalidOperationException();
            }

            Validator validator = new Validator(serializedValidator);
            return validator;
        }

        internal static (IAccountStateDelta, Validator) GetValidator(
            IAccountStateDelta states,
            Address operatorAddress,
            bool create = true)
        {
            Address validatorAddress = Validator.DeriveAddress(operatorAddress);
            Validator validator;
            if (states.GetState(validatorAddress) is { } value)
            {
                validator = new Validator(value);
            }
            else if(create)
            {
                validator = new Validator(operatorAddress);
                states = states.SetState(validator.Address, validator.Serialize());
            }

            return (states, validator);
        }

        internal static IAccountStateDelta Create(
            IAccountStateDelta states,
            Address operatorAddress,
            FungibleAssetValue governanceToken)
        {
            if (!governanceToken.Currency.Equals(Asset.GovernanceToken))
            {
                throw new ArgumentException();
            }

            if (Asset.ConsensusFromGovernance(governanceToken) < Validator.MinSelfDelegation)
            {
                throw new ArgumentException();
            }

            if (states.GetState(Validator.DeriveAddress(operatorAddress)) != null)
            {
                throw new InvalidOperationException();
            }

            Validator validator;
            (states, validator) = GetValidator(states, operatorAddress);
            states = states.SetState(validator.Address, validator.Serialize());
            states = DelegateCtrl.Execute(
                states,
                operatorAddress,
                validator.Address,
                governanceToken);

            // Does not save current instance, since it's done on delegation
            return states;
        }

        internal static FungibleAssetValue? ShareFromConsensusToken(
            IAccountStateDelta states, Address validatorAddress, FungibleAssetValue consensusToken)
        {
            Validator validator = GetValidatorByAddr(states, validatorAddress);

            FungibleAssetValue validatorConsensusToken
                = states.GetBalance(validator.Address, Asset.ConsensusToken);

            if (validator.DelegatorShares.Equals(Asset.Share * 0))
            {
                return new FungibleAssetValue(
                    Asset.Share, consensusToken.MajorUnit, consensusToken.MinorUnit);
            }

            if (validatorConsensusToken.RawValue == 0)
            {
                return null;
            }

            FungibleAssetValue share
                = (validator.DelegatorShares
                * consensusToken.RawValue)
                .DivRem(validatorConsensusToken.RawValue, out _);

            return share;
        }

        internal static FungibleAssetValue? ConsensusTokenFromShare(
            IAccountStateDelta states, Address validatorAddress, FungibleAssetValue share)
        {
            Validator validator = GetValidatorByAddr(states, validatorAddress);

            FungibleAssetValue validatorConsensusToken
                = states.GetBalance(validator.Address, Asset.ConsensusToken);

            // Is below conditional statement right?
            // Need to be investigated
            if (validatorConsensusToken.RawValue == 0)
            {
                return null;
            }

            if (validator.DelegatorShares.RawValue == 0)
            {
                return null;
            }

            FungibleAssetValue consensusToken
                = (validatorConsensusToken
                * share.RawValue)
                .DivRem(validator.DelegatorShares.RawValue, out _);

            return consensusToken;
        }

        internal static IAccountStateDelta Bond(
            IAccountStateDelta states,
            Address validatorAddress)
        {
            Validator validator = GetValidatorByAddr(states, validatorAddress);

            validator.UnbondingCompletionBlockHeight = -1;
            if (validator.Status != BondingStatus.Bonded)
            {
                states = states.TransferAsset(
                    ReservedAddress.UnbondedPool,
                    ReservedAddress.BondedPool,
                    Asset.GovernanceFromConsensus(
                        states.GetBalance(validator.Address, Asset.ConsensusToken)));
            }

            validator.Status = BondingStatus.Bonded;
            states = states.SetState(validator.Address, validator.Serialize());
            return states;
        }

        internal static IAccountStateDelta Unbond(
            IAccountStateDelta states,
            Address validatorAddress,
            long blockHeight)
        {
            Validator validator = GetValidatorByAddr(states, validatorAddress);

            validator.UnbondingCompletionBlockHeight = blockHeight + UnbondingSet.Period;
            if (validator.Status == BondingStatus.Bonded)
            {
                states = states.TransferAsset(
                    ReservedAddress.BondedPool,
                    ReservedAddress.UnbondedPool,
                    Asset.GovernanceFromConsensus(
                        states.GetBalance(validator.Address, Asset.ConsensusToken)));
            }

            validator.Status = BondingStatus.Unbonding;
            states = states.SetState(validator.Address, validator.Serialize());

            states = UnbondingSetCtrl.AddValidatorAddressSet(states, validator.Address);

            return states;
        }

        internal static IAccountStateDelta Complete(
            IAccountStateDelta states,
            Address validatorAddress,
            long blockHeight)
        {
            Validator validator = GetValidatorByAddr(states, validatorAddress);

            if (!validator.IsMatured(blockHeight) || (validator.Status != BondingStatus.Unbonding))
            {
                return states;
            }

            validator.Status = BondingStatus.Unbonded;
            states = states.SetState(validator.Address, validator.Serialize());

            states = UnbondingSetCtrl.RemoveValidatorAddressSet(states, validator.Address);

            // Later implemented get rid of validator
            if (validator.DelegatorShares == Asset.Share * 0)
            {
            }

            return states;
        }
    }
}
