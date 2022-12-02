using System.Linq;
using GraphQL.Types;
using Libplanet.Assets;

namespace Libplanet.Explorer.GraphTypes;

public class CurrencyType : ObjectGraphType<Currency>
{
    public CurrencyType()
    {
        Name = "Currency";
        Field<NonNullGraphType<StringGraphType>>(
            "ticker",
            "The ticker symbol, e.g., USD.",
            resolve: context => context.Source.Ticker
        );
        Field<NonNullGraphType<UIntGraphType>>(
            "decimalPlaces",
            "The number of digits to treat as minor units (i.e., exponents).",
            resolve: context => (uint)context.Source.DecimalPlaces
        );
        Field<ListGraphType<NonNullGraphType<AddressType>>>(
            "minters",
            "The addresses who can mint this currency.  If this is null anyone can " +
                "mint the currency.  On the other hand, unlike null, an empty set means no one " +
                "can mint the currency.",
            resolve: context => context.Source.Minters
                ?.OrderBy(a => a)
                ?.ToList()
        );
        Field<FungibleAssetValueType>(
            "maximumSupply",
            "The uppermost quantity of currency allowed to exist.  " +
                "null means unlimited supply.",
            resolve: context => context.Source.MaximumSupply
        );
        Field<NonNullGraphType<BooleanGraphType>>(
            "totalSupplyTrackable",
            "Whether the total supply of this currency is trackable.",
            resolve: context => context.Source.TotalSupplyTrackable
        );
        Field<NonNullGraphType<ByteStringType>>(
            "hash",
            "The deterministic hash derived from other fields.",
            resolve: context => context.Source.Hash.ToByteArray()
        );
    }
}
