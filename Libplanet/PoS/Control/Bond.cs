using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.PoS.Model;

namespace Libplanet.PoS.Control
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
                throw new InvalidCurrencyException(Asset.ConsensusToken, consensusToken.Currency);
            }

            if (!(ValidatorCtrl.GetValidator(states, validatorAddress) is { } validator))
            {
                throw new NullValidatorException(validatorAddress);
            }

            // If validator share is zero, exchange rate is 1
            // Else, exchange rate is validator share / token
            if (!(ValidatorCtrl.ShareFromConsensusToken(
                states, validator.Address, consensusToken) is { } issuedShare))
            {
                throw new InvalidExchangeRateException(validator.Address);
            }

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
                throw new InvalidCurrencyException(Asset.Share, share.Currency);
            }

            FungibleAssetValue delegationShareBalance = states.GetBalance(
                delegationAddress, Asset.Share);
            if (share > delegationShareBalance)
            {
                throw new InsufficientFungibleAssetValueException(
                    share,
                    delegationShareBalance,
                    $"Delegation {delegationAddress} has insufficient share");
            }

            if (!(ValidatorCtrl.GetValidator(states, validatorAddress) is { } validator))
            {
                throw new NullValidatorException(validatorAddress);
            }

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
            if (!(ValidatorCtrl.ConsensusTokenFromShare(
                states, validator.Address, share) is { } unbondingConsensusToken))
            {
                throw new InvalidExchangeRateException(validator.Address);
            }

            if (share.Equals(validator.DelegatorShares))
            {
                unbondingConsensusToken = states.GetBalance(
                    validator.Address, Asset.ConsensusToken);
            }

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
