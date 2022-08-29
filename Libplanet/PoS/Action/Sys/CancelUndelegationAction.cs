using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    [Serializable]
    [ActionType("CancelUndelegationAction")]
    public class CancelUndelegationAction : SystemAction
    {
        public Address ValidatorAddress { get; set; }

        public FungibleAssetValue ConsensusToken { get; set; }

        protected override IImmutableDictionary<string, IValue> PlainValueInternal
            => new Dictionary<string, IValue>
        {
            ["ValidatorAddress"] = ValidatorAddress.Serialize(),
            ["ConsensusToken"] = ConsensusToken.Serialize(),
        }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;

            // if (ctx.Rehearsal)
            // Rehearsal mode is not implemented
            states = UndelegateCtrl.Cancel(
                states,
                Undelegation.DeriveAddress(ctx.Signer, ValidatorAddress),
                ConsensusToken,
                ctx.BlockIndex);

            return states;
        }

        protected override void LoadPlainValueInternal(
            IImmutableDictionary<string, IValue> plainValue)
        {
            ValidatorAddress = plainValue["ValidatorAddress"].ToAddress();
            ConsensusToken = plainValue["ConsensusToken"].ToFungibleAssetValue();
        }
    }
}
