using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal class Undelegation : UndelegationInfo
    {
        internal Undelegation(Address delegatorAddress, Address validatorAddress)
            : base(delegatorAddress, validatorAddress)
        {
        }

        internal Undelegation(IValue serialized)
            : base(serialized)
        {
        }

        internal Undelegation(UndelegationInfo undelegationInfo)
            : base(undelegationInfo)
        {
        }

        internal static (IAccountStateDelta, FungibleAssetValue) Unbond(
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

            // Validator loading
            // It's duplicated, but it's necessary to redelegation
            IValue serializedValidator
                = states.GetState(validatorAddress)
                ?? throw new InvalidOperationException();
            Validator validator = new Validator((List)serializedValidator);

            // Delegator share burn
            states = states.BurnAsset(delegationAddress, share);

            // Jailing check
            FungibleAssetValue delegationShare = states.GetBalance(delegationAddress, Asset.Share);
            if (delegationAddress.Equals(validator.OperatorAddress)
                && !validator.Jailed
                && validator.ConsensusTokenFromShare(states, delegationShare)
                < validator.MinSelfDelegation)
            {
                validator.Jailed = true;
            }

            // Calculate consensus token amount
            FungibleAssetValue unbondingConsensusToken
                = validator.DelegatorShares - share == Asset.Share * 0
                ? states.GetBalance(validatorAddress, Asset.ConsensusToken)
                : validator.ConsensusTokenFromShare(states, share)
                ?? throw new InvalidOperationException();

            // Subtracting from DelegatorShare have to be calculated last
            // since it will affect ConsensusTokenFromShare()
            validator.DelegatorShares -= share;

            // Burn consensus token on Cosmos
            // On Libplanet, it will be burnt on CompleteUnbonding()
            states = states.TransferAsset(
                        validatorAddress,
                        Pool.UnbondedPool,
                        unbondingConsensusToken);

            validator.UpdateBondingStatus(states);
            states = states.SetState(validatorAddress, validator.Serialize());

            return (states, unbondingConsensusToken);
        }

        internal IAccountStateDelta Undelegate(
            IAccountStateDelta states, FungibleAssetValue share, long blockHeight)
        {
            // TODO: Failure condition
            // 1. Delegation does not exist
            // 2. Validator does not exist
            // 3. Delegation has less shares than worth of amount
            // 4. Existing undelegation has maximum entries

            // Currency check
            if (!share.Currency.Equals(Asset.Share))
            {
                throw new ArgumentException();
            }

            if (UndelegationEntryAddresses.Count >= MaximumUndelegationEntries)
            {
                throw new InvalidOperationException();
            }

            // Validator loading
            IValue serializedValidator
                = states.GetState(ValidatorAddress)
                ?? throw new InvalidOperationException();
            Validator validator = new Validator((List)serializedValidator);

            // Unbonding
            FungibleAssetValue unbondingConsensusToken;
            (states, unbondingConsensusToken)
                = Unbond(states, share, ValidatorAddress, DelegationAddress);

            // Governance token pool transfer
            if (validator.Status == BondingStatus.Bonded)
            {
                states = states.TransferAsset(
                        Pool.BondedPool,
                        Pool.UnbondedPool,
                        Asset.GovernanceFromConsensus(unbondingConsensusToken));
            }

            // Entry register
            UndelegationEntry undelegationEntry = new UndelegationEntry(
                    Address,
                    unbondingConsensusToken,
                    UndelegationEntryIndex,
                    blockHeight);
            UndelegationEntryAddresses.Add(
                undelegationEntry.Index, undelegationEntry.Address);
            UndelegationEntryIndex += 1;

            // TODO: Global state indexing is also needed
            states = states.SetState(undelegationEntry.Address, undelegationEntry.Serialize());
            states = states.SetState(Address, Serialize());

            return states;
        }

        internal IAccountStateDelta CancelUnbonding(
            IAccountStateDelta states,
            FungibleAssetValue cancelledConsensusToken)
        {
            // Currency check
            if (!cancelledConsensusToken.Currency.Equals(Asset.ConsensusToken))
            {
                throw new ArgumentException();
            }

            // Validator loading
            IValue serializedValidator
                = states.GetState(ValidatorAddress)
                ?? throw new InvalidOperationException();
            Validator validator = new Validator((List)serializedValidator);

            // Calculate consensus token equivalent share
            FungibleAssetValue cancelledShare
                = validator.ShareFromConsensusToken(states, cancelledConsensusToken)
                ?? throw new InvalidOperationException();

            // Recover consensus token of validator
            states = states.TransferAsset(
                Pool.UnbondedPool,
                ValidatorAddress,
                cancelledConsensusToken);

            // Recover share of delegation
            states = states.MintAsset(
                DelegationAddress, cancelledShare);

            // Check minimum self-delegation
            FungibleAssetValue delegationShare
                = states.GetBalance(DelegationAddress, Asset.Share);
            if (DelegatorAddress.Equals(validator.OperatorAddress)
                && validator.Jailed
                && validator.ConsensusTokenFromShare(states, delegationShare)
                >= validator.MinSelfDelegation)
            {
                validator.Jailed = false;
            }

            // Track total shares minted from validator
            validator.DelegatorShares += cancelledShare;

            if (validator.Status == BondingStatus.Bonded)
            {
                states = states.TransferAsset(
                        Pool.UnbondedPool,
                        Pool.BondedPool,
                        Asset.GovernanceFromConsensus(cancelledConsensusToken));
            }

            validator.UpdateBondingStatus(states);
            states = states.SetState(ValidatorAddress, validator.Serialize());

            return states;
        }

        internal IAccountStateDelta CancelUndelegation(
            IAccountStateDelta states,
            FungibleAssetValue cancelledConsensusToken,
            long blockHeight)
        {
            // Currency check
            if (!cancelledConsensusToken.Currency.Equals(Asset.ConsensusToken))
            {
                throw new ArgumentException();
            }

            // Copy of cancelling amount
            FungibleAssetValue cancellingConsensusToken =
                new FungibleAssetValue(
                    Asset.ConsensusToken,
                    cancelledConsensusToken.MajorUnit,
                    cancelledConsensusToken.MinorUnit);

            // Iterate all entries
            List<long> undelegationEntryIndices = new List<long>();
            foreach (KeyValuePair<long, Address> undelegationEntryAddressKV
                in UndelegationEntryAddresses)
            {
                // Load entry
                IValue? serializedUndelegationEntry
                    = states.GetState(undelegationEntryAddressKV.Value);

                // Skip empty entry
                if (serializedUndelegationEntry == null)
                {
                    continue;
                }

                UndelegationEntry undelegationEntry
                    = new UndelegationEntry((List)serializedUndelegationEntry);

                // Double check for unbonded entry
                if (blockHeight >= undelegationEntry.CompletionBlockHeight)
                {
                    break;
                }

                // Check if cancelledConsensusToken is less than total undelegation
                if (cancellingConsensusToken.RawValue < 0)
                {
                    throw new ArgumentException();
                }

                // Apply unbonding
                if (cancellingConsensusToken < undelegationEntry.UnbondingConsensusToken)
                {
                    undelegationEntry.UnbondingConsensusToken -= cancellingConsensusToken;
                    states = CancelUnbonding(states, cancelledConsensusToken);
                    undelegationEntryIndices.ForEach(
                        idx => UndelegationEntryAddresses.Remove(idx));
                    states = states.SetState(
                        undelegationEntry.Address, undelegationEntry.Serialize());
                    break;
                }

                // If cancelling amount is more than current entry, save and skip
                else
                {
                    cancellingConsensusToken -= undelegationEntry.UnbondingConsensusToken;
                    undelegationEntryIndices.Add(undelegationEntry.Index);
                }
            }

            states = states.SetState(Address, Serialize());
            return states;
        }

        // This have to be called for each block,
        // to update staking status and generate block with updated validators.
        // Would it be better to declare this on out of this class?
        internal IAccountStateDelta CompleteUnbonding(IAccountStateDelta states, long blockHeight)
        {
            List<long> completedIndices = new List<long>();

            // Iterate all entries
            foreach (KeyValuePair<long, Address> undelegationEntryAddressKV
                in UndelegationEntryAddresses)
            {
                // Load entry
                IValue? serializedUndelegationEntry
                    = states.GetState(undelegationEntryAddressKV.Value);

                // Skip empty entry
                if (serializedUndelegationEntry == null)
                {
                    continue;
                }

                UndelegationEntry undelegationEntry
                    = new UndelegationEntry((List)serializedUndelegationEntry);

                // Complete matured entries
                if (undelegationEntry.IsMatured(blockHeight))
                {
                    // Pay back governance token to delegator
                    states = states.TransferAsset(
                        Pool.UnbondedPool,
                        DelegatorAddress,
                        Asset.GovernanceFromConsensus(undelegationEntry.UnbondingConsensusToken));

                    // Burn consensus token
                    states = states.BurnAsset(
                        Pool.UnbondedPool,
                        undelegationEntry.UnbondingConsensusToken);

                    // Remove entry
                    completedIndices.Add(undelegationEntry.Index);
                }
            }

            foreach (long index in completedIndices)
            {
                UndelegationEntryAddresses.Remove(index);
            }

            states = states.SetState(Address, Serialize());
            return states;
        }
    }
}
