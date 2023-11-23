using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Reflection;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A system action that initializes the chain's beginning states.
    /// </summary>
    [ActionType(2)]
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

        public Initialize()
        {
            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
        }

        public IImmutableDictionary<Address, IValue>? States
        {
            get;
            private set;
        }

        public ValidatorSet? ValidatorSet { get; private set; }

        public IValue TypeId =>
            this.GetType().GetCustomAttribute<ActionTypeAttribute>()!.TypeIdentifier;

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

                return Dictionary.Empty
                    .Add("type_id", TypeId)
                    .Add("values", new List(encodedValidatorSet, encodedStates));
            }
        }

        public IWorld Execute(IActionContext context)
        {
            IWorld world = context.PreviousState;
            IAccount legacyAccount = world.GetAccount(ReservedAddresses.LegacyAccount);

            if (context.BlockIndex != 0)
            {
                throw new InvalidOperationException(
                    $"{nameof(Initialize)} action can be executed only genesis block."
                );
            }

            if (ValidatorSet is { } vs)
            {
                foreach (Validator v in vs.Validators)
                {
                    legacyAccount = legacyAccount.SetValidator(v);
                }
            }

            if (States is { } s)
            {
                foreach (KeyValuePair<Address, IValue> kv in s)
                {
                    legacyAccount = legacyAccount.SetState(kv.Key, kv.Value);
                }
            }

            world = world.SetAccount(ReservedAddresses.LegacyAccount, legacyAccount);

            return world;
        }

        public void LoadPlainValue(IValue plainValue)
        {
            if (!(plainValue is Dictionary dict))
            {
                throw new ArgumentException(
                    $"Given {nameof(plainValue)} must be a {nameof(Dictionary)}: " +
                    $"{plainValue.GetType()}",
                    nameof(plainValue));
            }

            if (!dict.TryGetValue((Text)"type_id", out IValue typeId))
            {
                throw new ArgumentException(
                    $"Given {nameof(plainValue)} is missing type id: {plainValue}",
                    nameof(plainValue));
            }

            if (!typeId.Equals(TypeId))
            {
                throw new ArgumentException(
                    $"Given {nameof(plainValue)} has invalid type id: {plainValue}",
                    nameof(plainValue));
            }

            if (!dict.TryGetValue((Text)"values", out IValue values))
            {
                throw new ArgumentException(
                    $"Given {nameof(plainValue)} is missing values: {plainValue}",
                    nameof(plainValue));
            }

            if (!(values is List valuesList))
            {
                throw new ArgumentException(
                    $"Given {nameof(plainValue)} has invalid values: {plainValue}",
                    nameof(plainValue));
            }

            ValidatorSet = new ValidatorSet((List)valuesList[0]);
            States = ((Dictionary)valuesList[1])
                .Select(kv => new KeyValuePair<Address, IValue>(
                    new Address(kv.Key), kv.Value))
                .ToImmutableDictionary();
        }
    }
}
