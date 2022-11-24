using System.Linq;
using GraphQL.Types;
using Libplanet.Assets;

namespace Libplanet.Explorer.GraphTypes;

public class CurrencyType : ObjectGraphType<Currency>
{
    public CurrencyType()
    {
        Name = "Currency";
        Field<NonNullGraphType<StringGraphType>>("ticker")
            .Description("The ticker symbol, e.g., USD.")
            .Resolve(context => context.Source.Ticker);
        Field<NonNullGraphType<UIntGraphType>>("decimalPlaces")
            .Description("The number of digits to treat as minor units (i.e., exponents).")
            .Resolve(context => (uint)context.Source.DecimalPlaces);
        Field<ListGraphType<NonNullGraphType<AddressType>>>("minters")
            .Description(
                "The addresses who can mint this currency.  If this is null anyone can " +
                    "mint the currency.  On the other hand, unlike null, an empty set means no " +
                    "one can mint the currency.")
            .Resolve(context => context.Source.Minters?.OrderBy(a => a)?.ToList());
        Field<FungibleAssetValueType>("maximumSupply")
            .Description(
                "The uppermost quantity of currency allowed to exist.  " +
                    "null means unlimited supply.")
            .Resolve(context => context.Source.MaximumSupply);
        Field<NonNullGraphType<BooleanGraphType>>("totalSupplyTrackable")
            .Description("Whether the total supply of this currency is trackable.")
            .Resolve(context => context.Source.TotalSupplyTrackable);
        Field<NonNullGraphType<ByteStringType>>("hash")
            .Description("The deterministic hash derived from other fields.")
            .Resolve(context => context.Source.Hash.ToByteArray());
    }
}
