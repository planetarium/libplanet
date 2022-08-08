using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    [Serializable]
    [ActionType("UndelegateAction")]
    public class UndelegateAction : SystemAction
    {
        public Address ValidatorAddress { get; set; }

        public FungibleAssetValue Share { get; set; }

        protected override IImmutableDictionary<string, IValue> PlainValueInternal
            => new Dictionary<string, IValue>
            {
                ["ValidatorAddress"] = ValidatorAddress.Serialize(),
                ["Share"] = Share.Serialize(),
            }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;
            Address delegationAddress = Delegation.DeriveAddress(ctx.Signer, ValidatorAddress);

            // if (ctx.Rehearsal)
            // Rehearsal mode is not implemented
            Undelegation undelegation;
            IValue? serializedDelegation = states.GetState(delegationAddress);
            if (serializedDelegation == null)
            {
                undelegation = new Undelegation(ctx.Signer, ValidatorAddress);
            }
            else
            {
                undelegation = new Undelegation((List)serializedDelegation);
            }

            states = undelegation.Undelegate(states, Share, ctx.BlockIndex);

            return states;
        }

        protected override void LoadPlainValueInternal(
            IImmutableDictionary<string, IValue> plainValue)
        {
            ValidatorAddress = plainValue["ValidatorAddress"].ToAddress();
            Share = plainValue["Share"].ToFungibleAssetValue();
        }
    }
}
