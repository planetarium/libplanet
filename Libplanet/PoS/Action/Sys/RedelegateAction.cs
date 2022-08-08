using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    [Serializable]
    [ActionType("RedelegateAction")]
    public class RedelegateAction : SystemAction
    {
        public Address SrcValidatorAddress { get; set; }

        public Address DstValidatorAddress { get; set; }

        public FungibleAssetValue Share { get; set; }

        protected override IImmutableDictionary<string, IValue> PlainValueInternal
            => new Dictionary<string, IValue>
        {
            ["SrcValidatorAddress"] = SrcValidatorAddress.Serialize(),
            ["DstValidatorAddress"] = DstValidatorAddress.Serialize(),
            ["Share"] = Share.Serialize(),
        }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;
            Address srcDelegationAddress = Delegation.DeriveAddress(
                ctx.Signer, SrcValidatorAddress);

            // if (ctx.Rehearsal)
            // Rehearsal mode is not implemented
            Redelegation redelegation;
            IValue? serializedSrcDelegation = states.GetState(srcDelegationAddress);
            if (serializedSrcDelegation == null)
            {
                redelegation = new Redelegation(
                    ctx.Signer, SrcValidatorAddress, DstValidatorAddress);
            }
            else
            {
                redelegation = new Redelegation((List)serializedSrcDelegation);
            }

            states = redelegation.Redelegate(states, Share, ctx.BlockIndex);

            return states;
        }

        protected override void LoadPlainValueInternal(
            IImmutableDictionary<string, IValue> plainValue)
        {
            SrcValidatorAddress = plainValue["SrcValidatorAddress"].ToAddress();
            DstValidatorAddress = plainValue["DstValidatorAddress"].ToAddress();
            Share = plainValue["Share"].ToFungibleAssetValue();
        }
    }
}
