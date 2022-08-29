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

            states = RedelegateCtrl.Execute(
                states,
                ctx.Signer,
                SrcValidatorAddress,
                DstValidatorAddress,
                Share,
                ctx.BlockIndex);

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
