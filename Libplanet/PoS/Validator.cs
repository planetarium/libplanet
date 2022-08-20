using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal class Validator : ValidatorInfo
    {
        internal Validator(Address operatorAddress)
            : base(operatorAddress)
        {
        }

        internal Validator(IValue serialized)
            : base(serialized)
        {
        }

        internal Validator(ValidatorInfo validatorInfo)
            : base(validatorInfo)
        {
        }

        internal IAccountStateDelta Apply(
            IAccountStateDelta states, FungibleAssetValue governanceToken)
        {
            if (!governanceToken.Currency.Equals(Asset.GovernanceToken))
            {
                throw new ArgumentException();
            }

            if (Asset.ConsensusFromGovernance(governanceToken) < MinSelfDelegation)
            {
                throw new ArgumentException();
            }

            states = states.SetState(Address, Serialize());
            Address delegationAddress = Delegation.DeriveAddress(OperatorAddress, Address);
            IValue? serializedDelegation = states.GetState(delegationAddress);
            Delegation delegation = (serializedDelegation == null)
                ? new Delegation(OperatorAddress, Address)
                : new Delegation(serializedDelegation);
            states = delegation.Delegate(states, governanceToken);

            // Does not save current instance, since it's done on delegation
            return states;
        }

        internal FungibleAssetValue GetConsensusToken(IAccountStateDelta states)
        {
            return states.GetBalance(Address, Asset.ConsensusToken);
        }

        internal FungibleAssetValue? ShareFromConsensusToken(
            IAccountStateDelta states, FungibleAssetValue consensusToken)
        {
            FungibleAssetValue validatorConsensusToken
                = states.GetBalance(Address, Asset.ConsensusToken);

            if (DelegatorShares.Equals(Asset.Share * 0))
            {
                return new FungibleAssetValue(
                    Asset.Share, consensusToken.MajorUnit, consensusToken.MinorUnit);
            }

            if (validatorConsensusToken.RawValue == 0)
            {
                return null;
            }

            FungibleAssetValue share
                = (DelegatorShares
                * consensusToken.RawValue)
                .DivRem(validatorConsensusToken.RawValue, out _);

            return share;
        }

        internal FungibleAssetValue? ConsensusTokenFromShare(
            IAccountStateDelta states, FungibleAssetValue share)
        {
            FungibleAssetValue validatorConsensusToken
                = states.GetBalance(Address, Asset.ConsensusToken);

            // Is below conditional statement right?
            // Need to be investigated
            if (validatorConsensusToken.RawValue == 0)
            {
                return null;
            }

            if (DelegatorShares.RawValue == 0)
            {
                return null;
            }

            FungibleAssetValue consensusToken
                = (validatorConsensusToken
                * share.RawValue)
                .DivRem(DelegatorShares.RawValue, out _);

            return consensusToken;
        }

        internal bool IsMatured(long blockHeight)
            => UnbondingCompletionBlockHeight > 0
            && Status != BondingStatus.Bonded
            && blockHeight >= UnbondingCompletionBlockHeight;

        internal IAccountStateDelta Bond(IAccountStateDelta states)
        {
            UnbondingCompletionBlockHeight = -1;
            if (Status != BondingStatus.Bonded)
            {
                states = states.TransferAsset(
                    ReservedAddress.UnbondedPool,
                    ReservedAddress.BondedPool,
                    Asset.ConsensusFromGovernance(
                        states.GetBalance(Address, Asset.ConsensusToken)));
            }

            Status = BondingStatus.Bonded;
            states = states.SetState(Address, Serialize());
            return states;
        }

        internal IAccountStateDelta Unbond(IAccountStateDelta states, long blockHeight)
        {
            UnbondingCompletionBlockHeight = blockHeight + UnbondingSetInfo.Period;
            if (Status == BondingStatus.Bonded)
            {
                states = states.TransferAsset(
                    ReservedAddress.BondedPool,
                    ReservedAddress.UnbondedPool,
                    Asset.ConsensusFromGovernance(
                        states.GetBalance(Address, Asset.ConsensusToken)));
            }

            Status = BondingStatus.Unbonding;

            IValue? serializedUnbondingSet = states.GetState(ReservedAddress.UnbondingSet);
            UnbondingSet unbondingSet = (serializedUnbondingSet == null)
                ? new UnbondingSet()
                : new UnbondingSet(serializedUnbondingSet);
            states = unbondingSet.AddUnbondingValidatorAddressSet(states, Address);
            states = states.SetState(Address, Serialize());
            return states;
        }

        internal IAccountStateDelta CompleteUnbonding(IAccountStateDelta states, long blockHeight)
        {
            if (!IsMatured(blockHeight) || (Status != BondingStatus.Unbonding))
            {
                return states;
            }

            Status = BondingStatus.Unbonded;

            IValue serializedUnbondingSet = states.GetState(ReservedAddress.UnbondingSet)
                ?? throw new InvalidOperationException();
            UnbondingSet unbondingSet = new UnbondingSet(serializedUnbondingSet);
            states = unbondingSet.DelUnbondingValidatorAddressSet(states, Address);

            // Later implemented get rid of validator
            if (DelegatorShares == Asset.Share * 0)
            {
            }

            states = states.SetState(Address, Serialize());
            return states;
        }
    }
}
