using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using Bencodex.Types;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    [Serializable]
    [ActionType("WithdrawValidatorAction")]
    public class WithdrawValidatorAction : SystemAction
    {
        public BigInteger Amount { get; set; }

        protected override IImmutableDictionary<string, IValue> PlainValueInternal
            => new Dictionary<string, IValue>
        {
            ["Amount"] = Amount.Serialize(),
        }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;

            // if (ctx.Rehearsal)
            // Rehearsal mode is not implemented
            Validator validator;
            IValue? serializedValidator = states.GetState(ctx.Signer);
            if (serializedValidator == null)
            {
                validator = new Validator(ctx.Signer);
            }
            else
            {
                validator = new Validator((List)serializedValidator);
            }

            // states = validator.Withdraw(states, Amount)
            return states;
        }

        protected override void LoadPlainValueInternal(
            IImmutableDictionary<string, IValue> plainValue)
        {
            Amount = plainValue["Amount"].ToBigInteger();
        }
    }
}
