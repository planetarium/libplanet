using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    [Serializable]
    [ActionType("DelegateAction")]
    public class DelegateAction : SystemAction
    {
        public Address ValidatorAddress { get; set; }

        public FungibleAssetValue GovernanceToken { get; set; }

        protected override IImmutableDictionary<string, IValue> PlainValueInternal
            => new Dictionary<string, IValue>
        {
            ["ValidatorAddress"] = ValidatorAddress.Serialize(),
            ["GovernanceToken"] = GovernanceToken.Serialize(),
        }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;
            Address delegationAddress = Delegation.DeriveAddress(ctx.Signer, ValidatorAddress);

            // if (ctx.Rehearsal)
            // Rehearsal mode is not implemented
            IValue? serializedDelegation = states.GetState(delegationAddress);
            Delegation delegation = (serializedDelegation == null)
                ? new Delegation(ctx.Signer, ValidatorAddress)
                : new Delegation((List)serializedDelegation);
            states = delegation.Delegate(states, GovernanceToken);

            return states;
        }

        protected override void LoadPlainValueInternal(
            IImmutableDictionary<string, IValue> plainValue)
        {
            ValidatorAddress = plainValue["ValidatorAddress"].ToAddress();
            GovernanceToken = plainValue["Amount"].ToFungibleAssetValue();
        }
    }
}
