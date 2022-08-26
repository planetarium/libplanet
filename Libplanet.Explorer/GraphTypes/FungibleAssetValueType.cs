using GraphQL.Types;
using Libplanet.Assets;

namespace Libplanet.Explorer.GraphTypes;

public class FungibleAssetValueType : ObjectGraphType<FungibleAssetValue>
{
    public FungibleAssetValueType()
    {
        Name = "FungibleAssetValue";
        Description = "Holds a fungible asset value which holds its currency together.";
        Field<NonNullGraphType<CurrencyType>>(
            "currency",
            "The currency of the fungible asset.",
            resolve: ctx => ctx.Source.Currency
        );
        Field<NonNullGraphType<IntGraphType>>(
            "sign",
            "Gets a number that indicates the sign (-1: negative, 1: positive, " +
                "or 0: zero) of the value.",
            resolve: ctx => ctx.Source.Sign
        );
        Field("majorUnit", source => source.MajorUnit);
        Field("minorUnit", source => source.MinorUnit);
        Field<NonNullGraphType<StringGraphType>>(
            "quantity",
            "The value quantity without its currency in string, e.g., \"123.45\".",
            resolve: ctx => ctx.Source.GetQuantityString()
        );
        Field<NonNullGraphType<StringGraphType>>(
            "string",
            "The value quantity with its currency in string, e.g., \"123.45 ABC\".",
            resolve: ctx => ctx.Source.ToString()
        );
    }
}
