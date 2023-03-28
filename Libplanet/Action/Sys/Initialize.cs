using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Consensus;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A system action that initializes the chain's beginning states.
    /// </summary>
    public sealed class Initialize : IAction
    {
        public Initialize(
            ValidatorSet validatorSet,
            IImmutableDictionary<Address, IValue> states
        )
        {
            ValidatorSet = validatorSet;
            States = states;
        }

        internal Initialize()
        {
            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
        }

        public IImmutableDictionary<Address, IValue>? States { get; private set; }

        public ValidatorSet? ValidatorSet { get; private set; }

        public IValue PlainValue
        {
            get
            {
                IValue encodedValidatorSet = ValidatorSet?.Bencoded ?? (IValue)default(Null);
                IValue encodedStates = States is { } s
                    ? new Dictionary(
                        s.Select(
                            kv => new KeyValuePair<IKey, IValue>(
                                (Binary)kv.Key.Bencoded,
                                kv.Value
                            )
                        )
                    )
                    : (IValue)default(Null);
                return new List(encodedValidatorSet, encodedStates);
            }
        }

        public IAccountStateDelta Execute(IActionContext context)
        {
            if (context.BlockIndex != 0)
            {
                throw new InvalidOperationException(
                    $"{nameof(Initialize)} action can be executed only genesis block."
                );
            }

            IAccountStateDelta states = context.PreviousStates;
            if (ValidatorSet is { } vs)
            {
                foreach (Validator v in vs.Validators)
                {
                    states = states.SetValidator(v);
                }
            }

            if (States is { } s)
            {
                foreach (KeyValuePair<Address, IValue> kv in s)
                {
                    states = states.SetState(kv.Key, kv.Value);
                }
            }

            return states;
        }

        public void LoadPlainValue(IValue plainValue)
        {
            var asList = (List)plainValue;
            ValidatorSet = new ValidatorSet((List)asList[0]);
            States = ((Dictionary)asList[1])
                .Select(kv => new KeyValuePair<Address, IValue>(new Address(kv.Key), kv.Value))
                .ToImmutableDictionary();
        }
    }
}
