using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.IO;
using System.Linq;
using System.Numerics;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Common.Serialization;
using Libplanet.Crypto;

namespace Libplanet.Types.Assets
{
    /// <summary>
    /// Represents a currency type.  Every single value of <see cref="Currency"/> defines
    /// a distinct currency type.  To draw a parallel with real world monetary,
    /// each <see cref="Currency"/> value represents such currencies as USD (US Dollar) or
    /// EUR (Euro), <em>not values</em> like $100 or €100.
    /// </summary>
    /// <example>
    /// Here is how US Dollar can be represented using <see cref="Currency"/>:
    /// <code>
    /// var USMint = new PrivateKey();
    /// var USD = Currency.Uncapped(ticker: "USD", decimalPlaces: 2, minter: USMint.ToAddress());
    /// var twentyThreeBucks = 23 * USD;
    /// // Or alternatively: USD * 23;
    /// // Or explicitly: new FungibleAssetValue(USD, 23, 0)
    /// </code>
    /// </example>
    /// <remarks>There are two types of <see cref="Currency">Currencies</see>: capped and uncapped.
    /// Capped currencies have a hard limit on the maximum minted amount, and uncapped currencies
    /// do not have the said limit. To define a <see cref="Currency"/> you may call either of the
    /// following.
    /// <list type="bullet">
    /// <item><see
    /// cref="Capped(string,byte,ValueTuple{BigInteger, BigInteger},IImmutableSet{Address}?)"/>
    /// </item>
    /// <item><see cref="Capped(string,byte,ValueTuple{BigInteger, BigInteger},Address)"/></item>
    /// <item><see cref="Uncapped(string,byte,IImmutableSet{Address}?)"/></item>
    /// <item><see cref="Uncapped(string,byte,Address)"/></item>
    /// </list>
    /// </remarks>
    /// <seealso cref="FungibleAssetValue"/>
    [Serializable]
    public readonly struct Currency : IEquatable<Currency>, ISerializable
    {
        /// <summary>
        /// The ticker symbol, e.g., <c>&quot;USD&quot;</c>.
        /// </summary>
        [JsonInclude]
        public readonly string Ticker;

        /// <summary>
        /// The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.
        /// </summary>
        [JsonInclude]
        public readonly byte DecimalPlaces;

        /// <summary>
        /// The <see cref="Address"/>es who can mint the currency.
        /// If this is <see langword="null"/> <em>anyone</em> can mint the currency.
        /// </summary>
        /// <remarks>
        /// Unlike <see langword="null"/>, an empty set means <em>no one</em> can mint the currency.
        /// </remarks>
        /// <seealso cref="Libplanet.Action.State.IAccount.MintAsset"/>
        [JsonInclude]
        public readonly IImmutableSet<Address>? Minters;

        /// <summary>
        /// The deterministic hash derived from other fields.
        /// </summary>
        [JsonInclude]
        public readonly HashDigest<SHA1> Hash;

        /// <summary>
        /// Whether the total supply of this instance of <see cref="Currency"/> is trackable.
        /// </summary>
        [JsonInclude]
        public readonly bool TotalSupplyTrackable;

        private readonly (BigInteger Major, BigInteger Minor)? _maximumSupply;

        /// <summary>
        /// Deserializes a <see cref="Currency"/> type from a Bencodex value.
        /// </summary>
        /// <param name="serialized">The Bencodex value serialized by <see cref="Serialize()"/>
        /// method.</param>
        /// <seealso cref="Serialize()"/>
        public Currency(IValue serialized)
        {
            BigInteger? maximumSupplyMajor = null, maximumSupplyMinor = null;

            if (!(serialized is Dictionary d))
            {
                throw new ArgumentException("Expected a Bencodex dictionary.", nameof(serialized));
            }

            if (!(d.ContainsKey("ticker") && d["ticker"] is Text ticker))
            {
                throw new ArgumentException(
                    "Expected a text field named \"ticker\".",
                    nameof(serialized)
                );
            }

            byte? nullableDecimals = null;
            if (d.ContainsKey("decimals") && d["decimals"] is Integer decimals)
            {
                nullableDecimals = (byte)(long)decimals;
            }

            if (d.ContainsKey("decimalPlaces") && d["decimalPlaces"] is Binary decimalPlacesBinary)
            {
                nullableDecimals = decimalPlacesBinary.ByteArray[0];
            }

            if (!(nullableDecimals is { } decimalPlaces))
            {
                throw new ArgumentException(
                    "Expected a byte field named \"decimalPlaces\" or \"decimals\".",
                    nameof(serialized)
                );
            }

            if (!d.ContainsKey("minters") ||
                !(d["minters"] is { } minters) ||
                !(minters is Null || minters is List))
            {
                throw new ArgumentException(
                    "Expected a nullable list field named \"minters\".",
                    nameof(serialized)
                );
            }

            TotalSupplyTrackable = false;
            if (d.ContainsKey("totalSupplyTrackable"))
            {
                if (d["totalSupplyTrackable"] is Bencodex.Types.Boolean totalSupplyTrackable
                    && totalSupplyTrackable)
                {
                    TotalSupplyTrackable = totalSupplyTrackable;
                }
                else
                {
                    throw new ArgumentException(
                        "Field \"totalSupplyTrackable\" must have a boolean value of true"
                        + " if it exists.",
                        nameof(serialized));
                }
            }

            if (d.ContainsKey("maximumSupplyMajor"))
            {
                if (d["maximumSupplyMajor"] is Integer maximumSupplyMajorValue
                    && maximumSupplyMajorValue >= 0)
                {
                    maximumSupplyMajor = maximumSupplyMajorValue.Value;
                }
                else
                {
                    throw new ArgumentException(
                        "Field \"maximumSupplyMajor\" must be of non-negative integer type"
                        + " if it exists.",
                        nameof(serialized)
                    );
                }
            }

            if (d.ContainsKey("maximumSupplyMinor"))
            {
                if (d["maximumSupplyMinor"] is Integer maximumSupplyMinorValue
                    && maximumSupplyMinorValue >= 0)
                {
                    maximumSupplyMinor = maximumSupplyMinorValue.Value;
                }
                else
                {
                    throw new ArgumentException(
                        "Field \"maximumSupplyMinor\" must be of non-negative integer type"
                        + " if it exists.",
                        nameof(serialized)
                    );
                }
            }

            if (maximumSupplyMajor is { } && maximumSupplyMinor is { })
            {
                if (!TotalSupplyTrackable)
                {
                    throw new ArgumentException(
                        $"Maximum supply is not available for legacy untracked currencies.",
                        nameof(serialized));
                }

                _maximumSupply = (maximumSupplyMajor.Value, maximumSupplyMinor.Value);
            }
            else if (maximumSupplyMajor is null && maximumSupplyMinor is null)
            {
                _maximumSupply = null;
            }
            else
            {
                throw new ArgumentException(
                    "Both \"maximumSupplyMajor\" and \"maximumSupplyMinor\" must be "
                    + " omitted or be non-negative integers.",
                    nameof(serialized)
                );
            }

            Ticker = ticker;
            DecimalPlaces = decimalPlaces;

            if (_maximumSupply is var (_, minor) && minor > 0 &&
                Math.Floor(BigInteger.Log10(minor)) >= DecimalPlaces)
            {
                var msg = $"The given minor unit {minor} of the maximum supply value is too"
                          + $" big for the given decimal places {DecimalPlaces}.";
                throw new ArgumentException(msg, nameof(minor));
            }

            if (minters is List l)
            {
                Minters = l.Select(
                    m => m is Binary b
                        ? new Address(b.ByteArray)
                        : throw new ArgumentException(
                            "Expected \"minters\" to be a list of binary arrays.",
                            nameof(serialized))
                ).ToImmutableHashSet();
            }
            else
            {
                Minters = null;
            }

            Hash = GetHash();
        }

        /// <summary>
        /// An internal constructor for JSON deserialization.  Do not use this directly.
        /// </summary>
        [JsonConstructor]
        [Obsolete]
#pragma warning disable SA1611
        public Currency(
            HashDigest<SHA1> hash,
            string ticker,
            byte decimalPlaces,
            IImmutableSet<Address>? minters,
            bool totalSupplyTrackable,
            FungibleAssetValue? maximumSupply
        )
#pragma warning restore SA1611
#pragma warning disable SA1118
            : this(
                ticker,
                decimalPlaces,
                maximumSupply is { } v
                    ? (v.MajorUnit, v.MinorUnit)
                    : ((BigInteger, BigInteger)?)null,
                minters
            )
#pragma warning restore SA1118
        {
            TotalSupplyTrackable = totalSupplyTrackable;
            HashDigest<SHA1> expectedHash = GetHash();
            if (!expectedHash.Equals(hash))
            {
                var msg = $"Invalid currency hash; expected {expectedHash}, but got {hash}. " +
                      "This probably means the given data is inconsistent with the given hash.\n" +
                      $"  ticker: {Ticker}\n  decimalPlaces: {decimalPlaces}\n" +
                      $"  minters: {(Minters is { } m ? string.Join(", ", m) : "N/A")}\n" +
                      $"  totalSupplyTrackable: {TotalSupplyTrackable}\n" +
                      $"  maximumSupply: {MaximumSupply?.ToString() ?? "N/A"}";
                throw new JsonException(msg);
            }

            Hash = hash;
        }

        private Currency(SerializationInfo info, StreamingContext context)
        {
            Ticker = info.GetValue<string>(nameof(Ticker));
            DecimalPlaces = info.GetValue<byte>(nameof(DecimalPlaces));

            if (info.TryGetValue(nameof(Minters), out List<byte[]> minters))
            {
                Minters = minters.Select(m => new Address(m)).ToImmutableHashSet();
            }
            else
            {
                Minters = default;
            }

            TotalSupplyTrackable = false;
            if (info.TryGetValue(nameof(TotalSupplyTrackable), out bool totalSupplyTrackable))
            {
                if (!totalSupplyTrackable)
                {
                    throw new ArgumentException(
                        $"{nameof(TotalSupplyTrackable)} must be true if it exists in the"
                        + "SerializationInfo.",
                        nameof(TotalSupplyTrackable));
                }

                TotalSupplyTrackable = totalSupplyTrackable;
            }

            if (info.TryGetValue(nameof(MaximumSupply), out (BigInteger, BigInteger) maximumSupply))
            {
                if (!TotalSupplyTrackable)
                {
                    throw new ArgumentException(
                        $"Maximum supply is not available for legacy untracked currencies.",
                        nameof(info));
                }

                _maximumSupply = maximumSupply;
            }
            else
            {
                _maximumSupply = null;
            }

            if (_maximumSupply is var (major, minor))
            {
                if (major < 0 || minor < 0)
                {
                    var msg = $"Both the major ({major}) and minor ({minor}) units of"
                              + $" {nameof(maximumSupply)} must not be a negative number.";
                    throw new ArgumentException(msg, nameof(maximumSupply));
                }

                if (minor > 0 && Math.Floor(BigInteger.Log10(minor)) >= DecimalPlaces)
                {
                    var msg = $"The given minor unit {minor} of the maximum supply value is too"
                              + $" big for the given decimal places {DecimalPlaces}.";
                    throw new ArgumentException(msg, nameof(minor));
                }
            }

            Hash = GetHash();
        }

        /// <summary>
        /// Private implementation to create a capped instance of <see cref="Currency"/> or
        /// a deserialized instance.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="decimalPlaces">The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.</param>
        /// <param name="maximumSupply">The uppermost quantity of currency allowed to exist. For
        /// example, a <paramref name="maximumSupply"/> parameter of <c>(123, 45)</c> means that the
        /// token of the currency can be minted up to <c>123.45</c>. See also
        /// <see cref="MaximumSupply"/> field which corresponds to this.</param>
        /// <param name="minters">The <see cref="Address"/>es who can mint the currency.
        /// See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="ticker"/>
        /// is an empty string, or when either the Major or the Minor values of
        /// <paramref name="maximumSupply"/> is a negative number, or when the given Minor unit for
        /// the <paramref name="maximumSupply"/> is too big for the given
        /// <paramref name="decimalPlaces"/>.</exception>
        private Currency(
            string ticker,
            byte decimalPlaces,
            (BigInteger Major, BigInteger Minor)? maximumSupply,
            IImmutableSet<Address>? minters)
            : this(ticker, decimalPlaces, minters, true)
        {
            if (maximumSupply is var (major, minor))
            {
                if (major < 0 || minor < 0)
                {
                    var msg = $"Both the major ({major}) and minor ({minor}) units of"
                              + $" {nameof(maximumSupply)} must not be a negative number.";
                    throw new ArgumentException(msg, nameof(maximumSupply));
                }

                if (minor > 0 && Math.Floor(BigInteger.Log10(minor)) >= decimalPlaces)
                {
                    var msg = $"The given minor unit {minor} of the maximum supply value is too"
                              + $" big for the given decimal places {decimalPlaces}.";
                    throw new ArgumentException(msg, nameof(minor));
                }

                _maximumSupply = maximumSupply;
            }

            Hash = GetHash();
        }

        /// <summary>
        /// Private implementation to create a general instance of <see cref="Currency"/>.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="decimalPlaces">The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.</param>
        /// <param name="minters">The <see cref="Address"/>es who can mint the currency.
        /// See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <param name="totalSupplyTrackable">A feature flag whether this instance of
        /// <see cref="Currency"/> supports total supply tracking. Legacy behavior is characterized
        /// with a value of false.</param>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="ticker"/>
        /// is an empty string.</exception>
        private Currency(
            string ticker,
            byte decimalPlaces,
            IImmutableSet<Address>? minters,
            bool totalSupplyTrackable)
        {
            ticker = ticker.Trim();

            if (string.IsNullOrEmpty(ticker))
            {
                throw new ArgumentException(
                    "Currency ticker symbol cannot be empty.",
                    nameof(ticker)
                );
            }

            Ticker = ticker;
            Minters = minters;
            DecimalPlaces = decimalPlaces;
            _maximumSupply = null;
            TotalSupplyTrackable = totalSupplyTrackable;
            Hash = GetHash();
        }

        /// <summary>
        /// The uppermost quantity of currency allowed to exist.
        /// <see langword="null"/> means unlimited supply.
        /// </summary>
        [JsonConverter(typeof(MaximumSupplyJsonConverter))]
        public FungibleAssetValue? MaximumSupply =>
            _maximumSupply.HasValue
                ? new FungibleAssetValue(
                    this,
                    _maximumSupply.Value.Major,
                    _maximumSupply.Value.Minor
                    )
                : (FungibleAssetValue?)null;

        /// <summary>
        /// Gets a fungible asset value with the given <paramref name="quantity"/> of the
        /// specified <paramref name="currency"/>.
        /// </summary>
        /// <param name="currency">The currency to get a value.</param>
        /// <param name="quantity">The major unit of the fungible asset value,
        /// i.e., digits <em>before</em> the decimal separator.</param>
        /// <returns>A fungible asset value with the given <paramref name="quantity"/> of the
        /// specified <paramref name="currency"/>.</returns>
        /// <remarks>This cannot specify <see cref="FungibleAssetValue.MinorUnit"/> but only
        /// <see cref="FungibleAssetValue.MajorUnit"/>.  For more precision, directly use <see
        /// cref="FungibleAssetValue"/>'s constructors instead.</remarks>
        [Pure]
        public static FungibleAssetValue operator *(Currency currency, BigInteger quantity) =>
            new FungibleAssetValue(currency, majorUnit: quantity, minorUnit: 0);

        /// <summary>
        /// Gets a fungible asset value with the given <paramref name="quantity"/> of the
        /// specified <paramref name="currency"/>.
        /// </summary>
        /// <param name="quantity">The major unit of the fungible asset value,
        /// i.e., digits <em>before</em> the decimal separator.</param>
        /// <param name="currency">The currency to get a value.</param>
        /// <returns>A fungible asset value with the given <paramref name="quantity"/> of the
        /// specified <paramref name="currency"/>.</returns>
        /// <remarks>This cannot specify <see cref="FungibleAssetValue.MinorUnit"/> but only
        /// <see cref="FungibleAssetValue.MajorUnit"/>.  For more precision, directly use <see
        /// cref="FungibleAssetValue"/>'s constructors instead.</remarks>
        [Pure]
        public static FungibleAssetValue operator *(BigInteger quantity, Currency currency) =>
            new FungibleAssetValue(currency, majorUnit: quantity, minorUnit: 0);

        /// <summary>
        /// Define a <see cref="Currency"/> with a maximum supply limit.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="decimalPlaces">The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.</param>
        /// <param name="maximumSupply">The uppermost quantity of currency allowed to exist. For
        /// example, the <paramref name="maximumSupply"/> parameter in <c>Currency.Capped("ABC", 2,
        /// (123, 45), ...)</c> means that the token <c>ABC</c> can be minted up to <c>123.45 ABC
        /// </c>. See also <see cref="MaximumSupply"/> field which corresponds to this.</param>
        /// <param name="minters">The <see cref="Address"/>es who can mint the currency.
        /// See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <returns>An instance of <see cref="Currency"/> with a maximum supply limit.</returns>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="ticker"/>
        /// is an empty string, or when either the Major or the Minor values of
        /// <paramref name="maximumSupply"/> is a negative number, or when the given Minor unit for
        /// the <paramref name="maximumSupply"/> is too big for the given
        /// <paramref name="decimalPlaces"/>.</exception>
        public static Currency Capped(
            string ticker,
            byte decimalPlaces,
            (BigInteger Major, BigInteger Minor) maximumSupply,
            IImmutableSet<Address>? minters) =>
            new Currency(ticker, decimalPlaces, maximumSupply, minters);

        /// <summary>
        /// Define a <see cref="Currency"/> with a maximum supply limit.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="decimalPlaces">The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.</param>
        /// <param name="maximumSupply">The uppermost quantity of currency allowed to exist. For
        /// example, the <paramref name="maximumSupply"/> parameter in <c>Currency.Capped("ABC", 2,
        /// (123, 45), ...)</c> means that the token <c>ABC</c> can be minted up to <c>123.45 ABC
        /// </c>. See also <see cref="MaximumSupply"/> field which corresponds to this.</param>
        /// <param name="minter">The address who can mint the currency.  To specify multiple
        /// minters, use the <see
        /// cref="Capped(string,byte,ValueTuple{BigInteger,BigInteger},IImmutableSet{Address}?)"/>
        /// See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <returns>An instance of <see cref="Currency"/> with a maximum supply limit.</returns>
        /// <seealso
        /// cref="Capped(string,byte,ValueTuple{BigInteger,BigInteger},IImmutableSet{Address}?)"/>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="ticker"/>
        /// is an empty string, or when either the Major or the Minor values of
        /// <paramref name="maximumSupply"/> is a negative number, or when the given Minor unit for
        /// the <paramref name="maximumSupply"/> is too big for the given
        /// <paramref name="decimalPlaces"/>.</exception>
        public static Currency Capped(
            string ticker,
            byte decimalPlaces,
            (BigInteger Major, BigInteger Minor) maximumSupply,
            Address minter) =>
            Capped(ticker, decimalPlaces, maximumSupply, ImmutableHashSet.Create(minter));

        /// <summary>
        /// Define a <see cref="Currency"/> without a maximum supply limit.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="decimalPlaces">The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.</param>
        /// <param name="minters">The <see cref="Address"/>es who can mint the currency.
        /// See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <returns>An instance of <see cref="Currency"/> without a maximum supply limit.</returns>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="ticker"/>
        /// is an empty string.</exception>
        public static Currency Uncapped(
            string ticker,
            byte decimalPlaces,
            IImmutableSet<Address>? minters) =>
            new Currency(ticker, decimalPlaces, minters, true);

        /// <summary>
        /// Define a <see cref="Currency"/> without a maximum supply limit.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="decimalPlaces">The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.</param>
        /// <param name="minter">The address who can mint the currency.  To specify multiple
        /// minters, use the <see cref="Uncapped(string,byte,IImmutableSet{Address}?)"/>
        /// See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <returns>An instance of <see cref="Currency"/> without a maximum supply limit.</returns>
        /// <seealso cref="Uncapped(string,byte,IImmutableSet{Address}?)"/>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="ticker"/>
        /// is an empty string.</exception>
        public static Currency Uncapped(
            string ticker,
            byte decimalPlaces,
            Address minter) =>
            Uncapped(ticker, decimalPlaces, ImmutableHashSet.Create(minter));

        /// <summary>
        /// <b>OBSOLETE! DO NOT USE.</b><br/><br/>(unless you are upgrading your project from an old
        /// version of Libplanet that did not support total supply tracking for
        /// <see cref="Currency">Currencies</see> and had a legacy <see cref="Currency"/> defined.)
        /// <br/><br/>Define a legacy <see cref="Currency"/> without total supply tracking, which is
        /// internally compatible with the legacy version.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="decimalPlaces">The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.</param>
        /// <param name="minters">The <see cref="Address"/>es who can mint the currency.
        /// See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <returns>An instance of legacy <see cref="Currency"/> without total supply tracking.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="ticker"/>
        /// is an empty string.</exception>
        [Obsolete("Obsolete! Use Currency.Capped() or Currency.Uncapped() for new currencies.")]
        public static Currency Legacy(
            string ticker,
            byte decimalPlaces,
            IImmutableSet<Address>? minters) =>
            new Currency(ticker, decimalPlaces, minters, false);

        /// <summary>
        /// <b>OBSOLETE! DO NOT USE.</b><br/><br/>(unless you are upgrading your project from an old
        /// version of Libplanet that did not support total supply tracking for
        /// <see cref="Currency">Currencies</see> and had a legacy <see cref="Currency"/> defined.)
        /// <br/><br/>Define a legacy <see cref="Currency"/> without total supply tracking, which is
        /// internally compatible with the legacy version.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="decimalPlaces">The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.</param>
        /// <param name="minter">The address who can mint the currency.  To specify multiple
        /// minters, use the <see cref="Legacy(string,byte,IImmutableSet{Address}?)"/>
        /// See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <returns>An instance of legacy <see cref="Currency"/> without total supply tracking.
        /// </returns>
        /// <seealso cref="Legacy(string,byte,IImmutableSet{Address}?)"/>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="ticker"/>
        /// is an empty string.</exception>
        [Obsolete("Obsolete! Use Currency.Capped() or Currency.Uncapped() for new currencies.")]
        public static Currency Legacy(
            string ticker,
            byte decimalPlaces,
            Address minter) =>
            Legacy(ticker, decimalPlaces, ImmutableHashSet.Create(minter));

        /// <summary>
        /// Returns <see langword="true"/> if and only if
        /// the given <paramref name="address"/> is allowed
        /// to mint or burn assets of this currency.
        /// </summary>
        /// <param name="address">The account address to test.</param>
        /// <returns><see langword="true"/> if and only if
        /// the given <paramref name="address"/> is allowed to
        /// mint or burn assets of this currency.</returns>
        [Pure]
        public bool AllowsToMint(Address address) => Minters is null || Minters.Contains(address);

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        void ISerializable.GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue(nameof(Ticker), Ticker);
            info.AddValue(nameof(DecimalPlaces), DecimalPlaces);

            if (Minters is IImmutableSet<Address> minters)
            {
                info.AddValue(nameof(Minters), minters.Select(m => m.ToByteArray()).ToList());
            }

            if (_maximumSupply is { } maximumSupply)
            {
                info.AddValue(nameof(MaximumSupply), maximumSupply);
            }

            if (TotalSupplyTrackable)
            {
                info.AddValue(nameof(TotalSupplyTrackable), TotalSupplyTrackable);
            }
        }

        /// <inheritdoc cref="object.ToString()"/>
        [Pure]
        public override string ToString() => $"{Ticker} ({Hash})";

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
        public override int GetHashCode() => Hash.GetHashCode();

        /// <inheritdoc cref="object.Equals(object?)"/>
        [Pure]
        public override bool Equals(object? obj) =>
            obj is IEquatable<Currency> other && other.Equals(this);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(Currency other) =>
            Hash.Equals(other.Hash);

        /// <summary>
        /// Serializes the currency into a Bencodex value.
        /// </summary>
        /// <returns>The serialized Bencodex value.</returns>
        [Pure]
        public IValue Serialize()
        {
            IValue minters = Minters is IImmutableSet<Address> m
                ? new Bencodex.Types.List(m.Select<Address, IValue>(a => new Binary(a.ByteArray)))
                : (IValue)Null.Value;
            var serialized = Bencodex.Types.Dictionary.Empty
                .Add("ticker", Ticker)
                .Add("minters", minters)
                .Add("decimalPlaces", new[] { DecimalPlaces });
            if (TotalSupplyTrackable)
            {
                serialized = serialized.Add("totalSupplyTrackable", true);
                if (MaximumSupply is { } maximumSupply)
                {
                    serialized = serialized.Add(
                        "maximumSupplyMajor",
                        (IValue)new Integer(maximumSupply.MajorUnit)
                    ).Add(
                        "maximumSupplyMinor",
                        (IValue)new Integer(maximumSupply.MinorUnit));
                }
            }

            return serialized;
        }

        private static SHA1 GetSHA1()
        {
            try
            {
                return new SHA1CryptoServiceProvider();
            }
            catch (PlatformNotSupportedException)
            {
                return new SHA1Managed();
            }
        }

        [Pure]
        private IValue SerializeForHash()
        {
            IValue minters = Minters is ImmutableHashSet<Address> a
                ? new List(a.OrderBy(m => m).Select(m => m.ByteArray))
                : (IValue)Null.Value;

            var serialized = Dictionary.Empty
                .Add("ticker", Ticker)
                .Add("decimals", (int)DecimalPlaces)
                .Add("minters", minters);

            if (_maximumSupply is var (major, minor))
            {
                serialized = serialized.Add("maximumSupplyMajor", new Integer(major))
                    .Add("maximumSupplyMinor", new Integer(minor));
            }

            if (TotalSupplyTrackable)
            {
                serialized = serialized.Add("totalSupplyTrackable", true);
            }

            return serialized;
        }

        [Pure]
        private HashDigest<SHA1> GetHash()
        {
            using var buffer = new MemoryStream();
            using var sha1 = GetSHA1();
            using var stream = new CryptoStream(buffer, sha1, CryptoStreamMode.Write);
            var codec = new Codec();
            codec.Encode(SerializeForHash(), stream);
            stream.FlushFinalBlock();
            return new HashDigest<SHA1>(sha1.Hash);
        }
    }

    [SuppressMessage(
        "StyleCop.CSharp.MaintainabilityRules",
        "SA1402:FileMayOnlyContainASingleClass",
        Justification = "It's okay to have non-public classes together in a single file."
    )]
    internal class MaximumSupplyJsonConverter : JsonConverter<FungibleAssetValue>
    {
        public override FungibleAssetValue Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            string? quantityString = reader.GetString();
            if (!(quantityString is { } qs))
            {
                throw new JsonException("MaximumSupply must be a string.");
            }

            int periodPos = qs.IndexOf('.');
            byte decimalPlaces = periodPos < 0 ? (byte)0 : (byte)(qs.Length - periodPos - 1);
            var fakeCurrency = Currency.Uncapped("FAKE", decimalPlaces, null);
            return FungibleAssetValue.Parse(fakeCurrency, qs);
        }

        public override void Write(
            Utf8JsonWriter writer,
            FungibleAssetValue value,
            JsonSerializerOptions options
        ) =>
            writer.WriteStringValue(
                value.GetQuantityString() + (value.MinorUnit.IsZero ? ".0" : string.Empty)
            );
    }
}
