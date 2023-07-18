using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using GraphQL;
using GraphQL.Types;
using Libplanet.Crypto;
using Libplanet.Types.Assets;

namespace Libplanet.Explorer.GraphTypes
{
    public class CurrencyInputType : InputObjectGraphType<Currency>
    {
        public CurrencyInputType()
        {
            Name = "CurrencyInput";
            Field<NonNullGraphType<StringGraphType>>(
                "ticker",
                "The ticker symbol, e.g., USD."
            );
            Field<NonNullGraphType<ByteGraphType>>(
                "decimalPlaces",
                "The number of digits to treat as minor units (i.e., exponents)."
            );
            Field<ListGraphType<NonNullGraphType<AddressType>>>(
                "minters",
                "The addresses who can mint this currency.  If this is null anyone can " +
                "mint the currency.  On the other hand, unlike null, an empty set means no one " +
                "can mint the currency."
            );
            Field<BigIntGraphType>("maximumSupplyMajorUnit");
            Field<BigIntGraphType>("maximumSupplyMinorUnit");
            Field<BooleanGraphType>(
                "totalSupplyTrackable",
                "Whether the total supply of this currency is trackable."
            );
        }

        public override object ParseDictionary(IDictionary<string, object?> value)
        {
            IImmutableSet<Address>? minters = null;
            var rawMinters = value.TryGetValue("minters", out object? obj) && obj is object[] o
                ? o
                : null;
            if (rawMinters is not null)
            {
                if (rawMinters.Any())
                {
                    minters = ImmutableHashSet<Address>.Empty;
                    foreach (var rawMinter in rawMinters)
                    {
                        minters = minters.Add((Address)rawMinter);
                    }
                }
            }

            const bool DefaultTotalSupplyTrackable = false;
            bool totalSupplyTrackable = value.TryGetValue(
                "totalSupplyTrackable", out object? booleanValue)
                ? (
                    booleanValue is bool boolean
                        ? boolean
                        : throw new ExecutionError("totalSupplyTrackable must be boolean value.")
                  )
                : DefaultTotalSupplyTrackable;
            (BigInteger, BigInteger)? maximumSupply = GetMaximumSupply(value);
            if (maximumSupply is { } && !totalSupplyTrackable)
            {
                throw new ExecutionError(
                    "Maximum supply is not available for legacy untracked currencies.");
            }

            string ticker = (string)value["ticker"]!;
            byte decimalPlaces = (byte)value["decimalPlaces"]!;

#pragma warning disable CS0618

            if (!totalSupplyTrackable)
            {
                return Currency.Legacy(
                    ticker,
                    decimalPlaces,
                    minters: minters);
            }
#pragma warning restore CS0618

            return maximumSupply is { } ms
                ? Currency.Capped(ticker, decimalPlaces, ms, minters)
                : Currency.Uncapped(ticker, decimalPlaces, minters);
        }

        private static (BigInteger, BigInteger)? GetMaximumSupply(
            IDictionary<string, object?> variables
        )
        {
            BigInteger? nullableMajorUnit =
                variables.TryGetValue("maximumSupplyMajorUnit", out object? nullableMajorUnitValue)
                && nullableMajorUnitValue is BigInteger majorUnit
                    ? majorUnit
                    : null;
            BigInteger? nullableMinorUnit =
                variables.TryGetValue("maximumSupplyMinorUnit", out object? nullableMinorUnitValue)
                && nullableMinorUnitValue is BigInteger minorUnit
                    ? minorUnit
                    : null;

            return (nullableMajorUnit, nullableMinorUnit) switch
            {
                (null, null) => null,
                (BigInteger x, BigInteger y) => (x, y),
                _ => throw new ExecutionError(
                    "Both \"maximumSupplyMajorUnit\" and \"maximumSupplyMinorUnit\" must " +
                    "be present or omitted"
                ),
            };
        }
    }
}
