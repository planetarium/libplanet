using GraphQL.Types;
using Libplanet.Assets;

namespace Libplanet.Explorer.GraphTypes;

public class FungibleAssetValueType : ObjectGraphType<FungibleAssetValue>
{
    public FungibleAssetValueType()
    {
        Name = "FungibleAssetValue";
        Description = "Holds a fungible asset value which holds its currency together.";
        Field<NonNullGraphType<CurrencyType>>("currency")
            .Description("The currency of the fungible asset.")
            .Resolve(ctx => ctx.Source.Currency);
        Field<NonNullGraphType<IntGraphType>>("sign")
            .Description("Gets a number that indicates the sign (-1: negative, 1: positive, " +
                "or 0: zero) of the value.")
            .Resolve(ctx => ctx.Source.Sign);
        Field<NonNullGraphType<BigIntGraphType>>("majorUnit").Resolve(ctx => ctx.Source.MajorUnit);
        Field<NonNullGraphType<BigIntGraphType>>("minorUnit").Resolve(ctx => ctx.Source.MinorUnit);
        Field<NonNullGraphType<StringGraphType>>("quantity")
            .Description("The value quantity without its currency in string, e.g., \"123.45\".")
            .Resolve(ctx => ctx.Source.GetQuantityString());
        Field<NonNullGraphType<StringGraphType>>("string")
            .Description("The value quantity with its currency in string, e.g., \"123.45 ABC\".")
            .Resolve(ctx => ctx.Source.ToString());
    }
}
