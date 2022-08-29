using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal static class RedelegateCtrl
    {
        internal static Redelegation GetRedelegationByAddr(
            IAccountStateDelta states,
            Address redelegationAddress)
        {
            IValue? serializedRedelegation = states.GetState(redelegationAddress);
            if (serializedRedelegation == null)
            {
                throw new InvalidOperationException();
            }

            Redelegation redelegation = new Redelegation(serializedRedelegation);
            return redelegation;
        }

        internal static (IAccountStateDelta, Redelegation) GetRedelegation(
            IAccountStateDelta states,
            Address delegatorAddress,
            Address srcValidatorAddress,
            Address dstValidatorAddress,
            bool create = true)
        {
            Address redelegationAddress = Redelegation.DeriveAddress(
                delegatorAddress, srcValidatorAddress, dstValidatorAddress);
            IValue? serializedRedelegation = states.GetState(redelegationAddress);

            Redelegation redelegation;
            if (create && serializedRedelegation == null)
            {
                redelegation = new Redelegation(
                    delegatorAddress,
                    srcValidatorAddress,
                    dstValidatorAddress);
                states = states.SetState(redelegation.Address, redelegation.Serialize());
            }
            else
            {
                redelegation = GetRedelegationByAddr(states, redelegationAddress);
            }

            return (states, redelegation);
        }

        internal static IAccountStateDelta Execute(
            IAccountStateDelta states,
            Address delegatorAddress,
            Address srcValidatorAddress,
            Address dstValidatorAddress,
            FungibleAssetValue redelegatingShare,
            long blockHeight)
        {
            // TODO: Failure condition
            // 1. Delegation does not exist
            // 2. Source validator does not exist
            // 3. Target validator does not exist
            // 3. Delegation has less shares than worth of amount
            // 4. Existing redelegation has maximum entries
            // 5?. Delegation does not have sufficient token (fail or apply maximum)
            if (!redelegatingShare.Currency.Equals(Asset.Share))
            {
                throw new ArgumentException();
            }

            Redelegation redelegation;
            (states, redelegation) = GetRedelegation(
                states,
                delegatorAddress,
                srcValidatorAddress,
                dstValidatorAddress);

            if (redelegation.RedelegationEntryAddresses.Count
                >= Redelegation.MaximumRedelegationEntries)
            {
                throw new InvalidOperationException();
            }

            (states, _) = DelegateCtrl.GetDelegation(states, delegatorAddress, dstValidatorAddress);
            FungibleAssetValue unbondingConsensusToken;
            FungibleAssetValue issuedShare;
            (states, unbondingConsensusToken) = Bond.Cancel(
                states,
                redelegatingShare,
                srcValidatorAddress,
                redelegation.SrcDelegationAddress);
            (states, issuedShare) = Bond.Execute(
                states,
                unbondingConsensusToken,
                dstValidatorAddress,
                redelegation.DstDelegationAddress);

            Validator srcValidator = ValidatorCtrl.GetValidatorByAddr(states, srcValidatorAddress);
            Validator dstValidator = ValidatorCtrl.GetValidatorByAddr(states, dstValidatorAddress);
            states = (srcValidator.Status, dstValidator.Status) switch
            {
                (BondingStatus.Bonded, BondingStatus.Unbonding) => states.TransferAsset(
                    ReservedAddress.BondedPool,
                    ReservedAddress.UnbondedPool,
                    Asset.GovernanceFromConsensus(unbondingConsensusToken)),
                (BondingStatus.Bonded, BondingStatus.Unbonded) => states.TransferAsset(
                    ReservedAddress.BondedPool,
                    ReservedAddress.UnbondedPool,
                    Asset.GovernanceFromConsensus(unbondingConsensusToken)),
                (BondingStatus.Unbonding, BondingStatus.Bonded) => states.TransferAsset(
                    ReservedAddress.UnbondedPool,
                    ReservedAddress.BondedPool,
                    Asset.GovernanceFromConsensus(unbondingConsensusToken)),
                (BondingStatus.Unbonded, BondingStatus.Bonded) => states.TransferAsset(
                    ReservedAddress.UnbondedPool,
                    ReservedAddress.BondedPool,
                    Asset.GovernanceFromConsensus(unbondingConsensusToken)),
                _ => states,
            };

            RedelegationEntry redelegationEntry = new RedelegationEntry(
                redelegation.Address,
                redelegatingShare,
                unbondingConsensusToken,
                issuedShare,
                redelegation.RedelegationEntryIndex,
                blockHeight);
            redelegation.RedelegationEntryAddresses.Add(
                redelegationEntry.Index, redelegationEntry.Address);
            redelegation.RedelegationEntryIndex += 1;

            states = states.SetState(redelegationEntry.Address, redelegationEntry.Serialize());
            states = states.SetState(redelegation.Address, redelegation.Serialize());

            states = UnbondingSetCtrl.AddRedelegationAddressSet(states, redelegation.Address);

            return states;
        }

        // This have to be called for each block,
        // to update staking status and generate block with updated validators.
        // Would it be better to declare this on out of this class?
        internal static IAccountStateDelta Complete(
            IAccountStateDelta states,
            Address redelegationAddress,
            long blockHeight)
        {
            Redelegation redelegation = GetRedelegationByAddr(states, redelegationAddress);

            List<long> completedIndices = new List<long>();
            foreach (KeyValuePair<long, Address> redelegationEntryAddressKV
                in redelegation.RedelegationEntryAddresses)
            {
                IValue? serializedRedelegationEntry
                    = states.GetState(redelegationEntryAddressKV.Value);
                if (serializedRedelegationEntry == null)
                {
                    continue;
                }

                RedelegationEntry redelegationEntry
                    = new RedelegationEntry(serializedRedelegationEntry);

                if (redelegationEntry.IsMatured(blockHeight))
                {
                    completedIndices.Add(redelegationEntry.Index);
                }
            }

            foreach (long index in completedIndices)
            {
                redelegation.RedelegationEntryAddresses.Remove(index);
            }

            states = states.SetState(redelegation.Address, redelegation.Serialize());

            if (redelegation.RedelegationEntryAddresses.Count == 0)
            {
                states = UnbondingSetCtrl.RemoveRedelegationAddressSet(
                    states, redelegation.Address);
            }

            return states;
        }
    }
}
