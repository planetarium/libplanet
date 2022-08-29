using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    [Serializable]
    [ActionType("CreateValidatorAction")]
    public class CreateValidatorAction : SystemAction
    {
        public FungibleAssetValue GovernanceToken { get; set; }

        protected override IImmutableDictionary<string, IValue> PlainValueInternal
            => new Dictionary<string, IValue>
            {
                ["GovernanceToken"] = GovernanceToken.Serialize(),
            }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;

            states = ValidatorCtrl.Create(
                states, ctx.Signer, GovernanceToken);

            return states;
        }

        protected override void LoadPlainValueInternal(
            IImmutableDictionary<string, IValue> plainValue)
        {
            GovernanceToken = plainValue["GovernanceToken"].ToFungibleAssetValue();
        }
    }
}
