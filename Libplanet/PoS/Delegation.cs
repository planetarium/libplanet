using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal class Delegation : DelegationInfo
    {
        internal Delegation(Address delegatorAddress, Address validatorAddress)
            : base(delegatorAddress, validatorAddress)
        {
        }

        internal Delegation(IValue serialized)
            : base(serialized)
        {
        }

        internal Delegation(DelegationInfo delegationInfo)
            : base(delegationInfo)
        {
        }

        internal static (IAccountStateDelta, FungibleAssetValue) Bond(
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

            IValue serializedValidator
                = states.GetState(validatorAddress)
                ?? throw new InvalidOperationException();
            Validator validator = new Validator((List)serializedValidator);

            // If validator share is zero, exchange rate is 1
            // Else, exchange rate is validator share / token
            FungibleAssetValue issuedShare
                = validator.ShareFromConsensusToken(states, consensusToken)
                ?? throw new InvalidOperationException();

            // Mint consensus token to validator
            states = states.MintAsset(validatorAddress, consensusToken);

            // Mint share to delegation
            states = states.MintAsset(delegationAddress, issuedShare);

            // Track total shares minted from validator
            validator.DelegatorShares += issuedShare;

            validator.UpdateBondingStatus(states);
            states = states.SetState(validatorAddress, validator.Serialize());

            return (states, issuedShare);
        }

        internal IAccountStateDelta Delegate(
           IAccountStateDelta states, FungibleAssetValue governanceToken)
        {
            if (!governanceToken.Currency.Equals(Asset.GovernanceToken))
            {
                throw new ArgumentException();
            }

            if (governanceToken > states.GetBalance(DelegatorAddress, Asset.GovernanceToken))
            {
                throw new ArgumentException();
            }

            IValue serializedValidator
                = states.GetState(ValidatorAddress)
                ?? throw new InvalidOperationException();
            Validator validator = new Validator((List)serializedValidator);

            FungibleAssetValue consensusToken = Asset.ConsensusFromGovernance(governanceToken);
            Address poolAddress = validator.Status == BondingStatus.Bonded
                ? Pool.BondedPool
                : Pool.UnbondedPool;
            states = states.TransferAsset(
                DelegatorAddress, poolAddress, governanceToken);

            (states, _) = Bond(states, consensusToken, ValidatorAddress, Address);

            states = states.SetState(Address, Serialize());

            return states;
        }
    }
}
