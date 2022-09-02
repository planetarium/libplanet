using System;
using Bencodex.Types;

namespace Libplanet.Action.Sys
{
    internal static class Registry
    {
        private enum TypeId : short
        {
            Mint = 0,
            Transfer = 1,
            PromoteValidator = 100,
            Delegate = 101,
            Redelegate = 102,
            Undelegate = 103,
            CancelUndelegation = 105,
        }

        public static IAction Deserialize(Bencodex.Types.Dictionary serialized)
        {
            if (!serialized.TryGetValue((Text)"type_id", out IValue typeIdValue))
            {
                throw new ArgumentException("No type_id field found.", nameof(serialized));
            }

            if (!serialized.TryGetValue((Text)"values", out IValue values))
            {
                throw new ArgumentException("No values field found.", nameof(serialized));
            }

            if (!(typeIdValue is Bencodex.Types.Integer typeIdInt))
            {
                throw new ArgumentException(
                    "type_id field is not an integer.",
                    nameof(serialized)
                );
            }

            var typeId = (TypeId)(short)typeIdInt;
            IAction action = Instantiate(typeId);
            action.LoadPlainValue(values);
            return action;
        }

        public static Bencodex.Types.Dictionary Serialize(IAction action) =>
            Bencodex.Types.Dictionary.Empty
                .Add("type_id", (short)GetTypeId(action))
                .Add("values", action.PlainValue);

        private static IAction Instantiate(TypeId typeId) =>
            typeId switch
            {
                TypeId.Mint => new Mint(),
                TypeId.Transfer => new Transfer(),
                TypeId.PromoteValidator => new PromoteValidator(),
                TypeId.Delegate => new Delegate(),
                TypeId.Redelegate => new Redelegate(),
                TypeId.Undelegate => new Undelegate(),
                TypeId.CancelUndelegation => new CancelUndelegation(),
                _ => throw new ArgumentOutOfRangeException(
                    nameof(typeId),
                    typeId,
                    "Unknown system type ID."
                ),
            };

        private static TypeId GetTypeId(IAction action) =>
            action switch
            {
                Mint _ => TypeId.Mint,
                Transfer _ => TypeId.Transfer,
                PromoteValidator _ => TypeId.PromoteValidator,
                Delegate _ => TypeId.Delegate,
                Redelegate _ => TypeId.Redelegate,
                Undelegate _ => TypeId.Undelegate,
                CancelUndelegation _ => TypeId.CancelUndelegation,
                _ => throw new ArgumentException("Unknown system action type.", nameof(action)),
            };
    }
}
