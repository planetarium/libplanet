using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Crypto;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    [Serializable]
    [ActionType("CreateValidatorAction")]
    public class CreateValidatorAction : SystemAction
    {
        public CreateValidatorAction(PublicKey signerPublicKey, FungibleAssetValue governanceToken)
        {
            SignerPublicKey = signerPublicKey;
            GovernanceToken = governanceToken;
        }

        public PublicKey SignerPublicKey { get; set; }

        public FungibleAssetValue GovernanceToken { get; set; }

        protected override IImmutableDictionary<string, IValue> PlainValueInternal
            => new Dictionary<string, IValue>
            {
                ["SignerPublicKey"] = SignerPublicKey.Serialize(),
                ["GovernanceToken"] = GovernanceToken.Serialize(),
            }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            if (!ctx.Signer.Equals(SignerPublicKey.ToAddress()))
            {
                throw new PublicKeyAddressMatchingException(ctx.Signer, SignerPublicKey);
            }

            var states = ctx.PreviousStates;

            states = ValidatorCtrl.Create(
                states, ctx.Signer, SignerPublicKey, GovernanceToken);

            return states;
        }

        protected override void LoadPlainValueInternal(
            IImmutableDictionary<string, IValue> plainValue)
        {
            SignerPublicKey = plainValue["SignerPublicKey"].ToPublicKey();
            GovernanceToken = plainValue["GovernanceToken"].ToFungibleAssetValue();
        }
    }
}
