using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal class Redelegation : RedelegationInfo
    {
        internal Redelegation(
            Address delegatorAddress, Address srcValidatorAddress, Address dstValidatorAddress)
            : base(delegatorAddress, srcValidatorAddress, dstValidatorAddress)
        {
        }

        internal Redelegation(IValue serialized)
            : base(serialized)
        {
        }

        internal Redelegation(RedelegationInfo redelegationInfo)
            : base(redelegationInfo)
        {
        }

        internal IAccountStateDelta Redelegate(
            IAccountStateDelta states,
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

            if (RedelegationEntryAddresses.Count >= MaximumRedelegationEntries)
            {
                throw new InvalidOperationException();
            }

            FungibleAssetValue unbondingConsensusToken;
            FungibleAssetValue issuedShare;

            (states, unbondingConsensusToken) = Undelegation.Unbond(
                states,
                redelegatingShare,
                SrcValidatorAddress,
                DelegationAddress);

            (states, issuedShare) = Delegation.Bond(
                states,
                unbondingConsensusToken,
                DstValidatorAddress,
                DelegationAddress);

            // Governance token pool transfer
            IValue serializedSrcValidator
                = states.GetState(SrcValidatorAddress)
                ?? throw new InvalidOperationException();
            Validator srcValidator = new Validator(serializedSrcValidator);

            IValue serializedDstValidator
                = states.GetState(DstValidatorAddress)
                ?? throw new InvalidOperationException();
            Validator dstValidator = new Validator(serializedDstValidator);

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
                Address,
                redelegatingShare,
                unbondingConsensusToken,
                issuedShare,
                RedelegationEntryIndex,
                blockHeight);
            RedelegationEntryAddresses.Add(
                redelegationEntry.Index, redelegationEntry.Address);
            RedelegationEntryIndex += 1;

            // TODO: Global state indexing is also needed
            states = states.SetState(redelegationEntry.Address, redelegationEntry.Serialize());

            IValue? serializedUnbondingSet = states.GetState(ReservedAddress.UnbondingSet);
            UnbondingSet unbondingSet = (serializedUnbondingSet == null)
                ? new UnbondingSet()
                : new UnbondingSet(serializedUnbondingSet);
            states = unbondingSet.AddRedelegationAddressSet(states, Address);

            states = states.SetState(Address, Serialize());
            return states;
        }

        // This have to be called for each block,
        // to update staking status and generate block with updated validators.
        // Would it be better to declare this on out of this class?
        internal IAccountStateDelta CompleteRedelegation(
            IAccountStateDelta states, long blockHeight)
        {
            List<long> completedIndices = new List<long>();
            foreach (KeyValuePair<long, Address> redelegationEntryAddressKV
                in RedelegationEntryAddresses)
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
                RedelegationEntryAddresses.Remove(index);
            }

            if (RedelegationEntryAddresses.Count == 0)
            {
                IValue serializedUnbondingSet = states.GetState(ReservedAddress.UnbondingSet)
                ?? throw new InvalidOperationException();
                UnbondingSet unbondingSet = new UnbondingSet(serializedUnbondingSet);
                states = unbondingSet.DelRedelegationAddressSet(states, Address);
            }

            states = states.SetState(Address, Serialize());

            return states;
        }
    }
}
