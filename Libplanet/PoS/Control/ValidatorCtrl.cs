using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Crypto;
using Libplanet.PoS.Model;

namespace Libplanet.PoS.Control
{
    internal static class ValidatorCtrl
    {
        internal static Validator? GetValidator(
            IAccountStateDelta states,
            Address validatorAddress)
        {
            if (states.GetState(validatorAddress) is { } value)
            {
                return new Validator(value);
            }

            return null;
        }

        internal static (IAccountStateDelta, Validator) FetchValidator(
            IAccountStateDelta states,
            Address operatorAddress,
            PublicKey operatorPublicKey)
        {
            if (!operatorAddress.Equals(operatorPublicKey.ToAddress()))
            {
                throw new PublicKeyAddressMatchingException(operatorAddress, operatorPublicKey);
            }

            Address validatorAddress = Validator.DeriveAddress(operatorAddress);
            Validator validator;
            if (states.GetState(validatorAddress) is { } value)
            {
                validator = new Validator(value);
            }
            else
            {
                validator = new Validator(operatorAddress, operatorPublicKey);
                states = states.SetState(validator.Address, validator.Serialize());
            }

            return (states, validator);
        }

        internal static IAccountStateDelta Create(
            IAccountStateDelta states,
            Address operatorAddress,
            PublicKey operatorPublicKey,
            FungibleAssetValue governanceToken,
            long blockHeight)
        {
            if (!governanceToken.Currency.Equals(Asset.GovernanceToken))
            {
                throw new InvalidCurrencyException(Asset.GovernanceToken, governanceToken.Currency);
            }

            FungibleAssetValue consensusToken = Asset.ConsensusFromGovernance(governanceToken);
            if (consensusToken < Validator.MinSelfDelegation)
            {
                throw new InsufficientFungibleAssetValueException(
                    Validator.MinSelfDelegation, consensusToken, "Insufficient self delegation");
            }

            Address validatorAddress = Validator.DeriveAddress(operatorAddress);
            if (states.GetState(validatorAddress) != null)
            {
                throw new DuplicatedValidatorException(validatorAddress);
            }

            Validator validator;
            (states, validator) = FetchValidator(states, operatorAddress, operatorPublicKey);

            states = DelegateCtrl.Execute(
                states,
                operatorAddress,
                validator.Address,
                governanceToken,
                blockHeight);

            // Does not save current instance, since it's done on delegation
            return states;
        }

        internal static FungibleAssetValue? ShareFromConsensusToken(
            IAccountStateDelta states, Address validatorAddress, FungibleAssetValue consensusToken)
        {
            if (!(GetValidator(states, validatorAddress) is { } validator))
            {
                throw new NullValidatorException(validatorAddress);
            }

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

        internal static FungibleAssetValue? TokenPortionByShare(
            IAccountStateDelta states,
            Address validatorAddress,
            FungibleAssetValue token,
            FungibleAssetValue share)
        {
            if (!(GetValidator(states, validatorAddress) is { } validator))
            {
                throw new NullValidatorException(validatorAddress);
            }

            if (validator.DelegatorShares.RawValue == 0)
            {
                return null;
            }

            var (tokenPortion, _)
                = (token * share.RawValue)
                .DivRem(validator.DelegatorShares.RawValue);

            return tokenPortion;
        }

        internal static FungibleAssetValue? ConsensusTokenFromShare(
            IAccountStateDelta states, Address validatorAddress, FungibleAssetValue share)
        {
            if (!(GetValidator(states, validatorAddress) is { } validator))
            {
                throw new NullValidatorException(validatorAddress);
            }

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
            if (!(GetValidator(states, validatorAddress) is { } validator))
            {
                throw new NullValidatorException(validatorAddress);
            }

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
            if (!(GetValidator(states, validatorAddress) is { } validator))
            {
                throw new NullValidatorException(validatorAddress);
            }

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
            if (!(GetValidator(states, validatorAddress) is { } validator))
            {
                throw new NullValidatorException(validatorAddress);
            }

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
