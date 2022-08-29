using System;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal static class Bond
    {
        internal static (IAccountStateDelta, FungibleAssetValue) Execute(
            IAccountStateDelta states,
            FungibleAssetValue consensusToken,
            Address validatorAddress,
            Address delegationAddress)
        {
            // TODO: Failure condition
            // 1. Validator does not exist
            // 2. Exchange rate is invalid(validator has no tokens but there are outstanding shares)
            // 3. Amount is less than the minimum amount
            // 4. Delegator does not have sufficient consensus token (fail or apply maximum)
            if (!consensusToken.Currency.Equals(Asset.ConsensusToken))
            {
                throw new ArgumentException();
            }

            Validator validator = ValidatorCtrl.GetValidatorByAddr(states, validatorAddress);

            // If validator share is zero, exchange rate is 1
            // Else, exchange rate is validator share / token
            FungibleAssetValue issuedShare
                = ValidatorCtrl.ShareFromConsensusToken(states, validator.Address, consensusToken)
                ?? throw new InvalidOperationException();

            // Mint consensus token to validator
            states = states.MintAsset(validator.Address, consensusToken);

            // Mint share to delegation
            states = states.MintAsset(delegationAddress, issuedShare);

            // Track total shares minted from validator
            validator.DelegatorShares += issuedShare;
            states = states.SetState(validator.Address, validator.Serialize());
            states = ValidatorPowerIndexCtrl.Update(states, validator.Address);

            return (states, issuedShare);
        }

        internal static (IAccountStateDelta, FungibleAssetValue) Cancel(
            IAccountStateDelta states,
            FungibleAssetValue share,
            Address validatorAddress,
            Address delegationAddress)
        {
            // Currency check
            if (!share.Currency.Equals(Asset.Share))
            {
                throw new ArgumentException();
            }

            if (share > states.GetBalance(delegationAddress, Asset.Share))
            {
                throw new ArgumentException();
            }

            Validator validator = ValidatorCtrl.GetValidatorByAddr(states, validatorAddress);

            // Delegator share burn
            states = states.BurnAsset(delegationAddress, share);

            // Jailing check
            FungibleAssetValue delegationShare = states.GetBalance(delegationAddress, Asset.Share);
            if (delegationAddress.Equals(validator.OperatorAddress)
                && !validator.Jailed
                && ValidatorCtrl.ConsensusTokenFromShare(states, validator.Address, delegationShare)
                < Validator.MinSelfDelegation)
            {
                validator.Jailed = true;
            }

            // Calculate consensus token amount
            FungibleAssetValue unbondingConsensusToken
                = validator.DelegatorShares - share == Asset.Share * 0
                ? states.GetBalance(validator.Address, Asset.ConsensusToken)
                : ValidatorCtrl.ConsensusTokenFromShare(states, validator.Address, share)
                ?? throw new InvalidOperationException();

            // Subtracting from DelegatorShare have to be calculated last
            // since it will affect ConsensusTokenFromShare()
            validator.DelegatorShares -= share;
            states = states.BurnAsset(validator.Address, unbondingConsensusToken);
            states = states.SetState(validator.Address, validator.Serialize());

            states = ValidatorPowerIndexCtrl.Update(states, validator.Address);

            return (states, unbondingConsensusToken);
        }
    }
}
