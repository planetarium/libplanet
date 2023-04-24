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
            Initialize = 2,
        }

        public static IAction Deserialize(IValue serialized)
        {
            if (!(serialized is Dictionary dict))
            {
                throw new ArgumentException(
                    $"Given {nameof(serialized)} must be a {nameof(Dictionary)}: " +
                    $"{serialized.GetType()}",
                    nameof(serialized));
            }

            if (!dict.TryGetValue((Text)"type_id", out IValue typeIdValue))
            {
                throw new ArgumentException("No type_id field found.", nameof(serialized));
            }

            if (!dict.TryGetValue((Text)"values", out IValue values))
            {
                throw new ArgumentException("No values field found.", nameof(serialized));
            }

            if (!(typeIdValue is Bencodex.Types.Integer typeIdInt))
            {
                throw new ArgumentException(
                    "type_id field is not an integer.",
                    nameof(serialized));
            }

            var typeId = (TypeId)(short)typeIdInt;
            IAction action = Instantiate(typeId);
            action.LoadPlainValue(values);
            return action;
        }

        public static IValue Serialize(IAction action)
        {
            var typeId = GetTypeId(action);
            if (typeId is null)
            {
                throw new ArgumentException("Unknown system action type.", nameof(action));
            }

            return Bencodex.Types.Dictionary.Empty
                .Add("type_id", (int)typeId)
                .Add("values", action.PlainValue);
        }

        public static bool IsSystemAction(IAction action) => GetTypeId(action) is { };

        private static IAction Instantiate(TypeId typeId) =>
            typeId switch
            {
                TypeId.Mint => new Mint(),
                TypeId.Transfer => new Transfer(),
                TypeId.Initialize => new Initialize(),
                _ => throw new ArgumentOutOfRangeException(
                    nameof(typeId),
                    typeId,
                    "Unknown system type ID."
                ),
            };

        private static TypeId? GetTypeId(IAction action) =>
            action switch
            {
                Mint _ => TypeId.Mint,
                Transfer _ => TypeId.Transfer,
                Initialize _ => TypeId.Initialize,
                _ => null,
            };
    }
}
