#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.IO;
using System.Linq;
using System.Numerics;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Serialization;

namespace Libplanet.Assets
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
    /// var USD = new Currency(ticker: "USD", decimalPlace: 2, minter: USMint.ToAddress());
    /// var twentyThreeBucks = 23 * USD;
    /// // Or alternatively: USD * 23;
    /// // Or explicitly: new FungibleAssetValue(USD, 23, 0)
    /// </code>
    /// </example>
    /// <seealso cref="FungibleAssetValue"/>
    [Serializable]
    public readonly struct Currency : IEquatable<Currency>, ISerializable
    {
        /// <summary>
        /// The ticker symbol, e.g., <c>&quot;USD&quot;</c>.
        /// </summary>
        public readonly string Ticker;

        /// <summary>
        /// The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.
        /// </summary>
        public readonly byte DecimalPlaces;

        /// <summary>
        /// The <see cref="Address"/>es who can mint the currency.
        /// If this is <c>null</c> <em>anyone</em> can mint the currency.
        /// </summary>
        /// <remarks>
        /// Unlike <c>null</c>, an empty set means <em>no one</em> can mint the currency.
        /// </remarks>
        /// <seealso cref="IAccountStateDelta.MintAsset"/>
        public readonly IImmutableSet<Address>? Minters;

        /// <summary>
        /// The deterministic hash derived from other fields.
        /// </summary>
        public readonly HashDigest<SHA1> Hash;

        /// <summary>
        /// Defines a <see cref="Currency"/> type.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="decimalPlaces">The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.</param>
        /// <param name="minters">The <see cref="Address"/>es who can mint the currency.
        /// See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="ticker"/>
        /// is an empty string.</exception>
        public Currency(string ticker, byte decimalPlaces, IImmutableSet<Address>? minters)
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
            Hash = GetHash();
        }

        /// <summary>
        /// Defines a <see cref="Currency"/> type.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="decimalPlaces">The number of digits to treat as <a
        /// href="https://w.wiki/ZXv#Treatment_of_minor_currency_units_(the_%22exponent%22)">minor
        /// units (i.e., exponent)</a>.</param>
        /// <param name="minter">The address who can mint the currency.  To specify multiple
        /// minters, use the <see cref="Currency(string,byte,IImmutableSet{Address})"/> constructor
        /// instead.  See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <seealso cref="Currency(string, byte, IImmutableSet{Address})"/>
        public Currency(string ticker, byte decimalPlaces, Address? minter)
            : this(
                ticker,
                decimalPlaces,
                minter is Address m ? ImmutableHashSet.Create(m) : null
            )
        {
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

            Hash = GetHash();
        }

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
        /// Returns <c>true</c> if and only if the given <paramref name="address"/> is allowed
        /// to mint or burn assets of this currency.
        /// </summary>
        /// <param name="address">The account address to test.</param>
        /// <returns><c>true</c> if and only if the given <paramref name="address"/> is allowed to
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

        [Pure]
        private HashDigest<SHA1> GetHash()
        {
            using var buffer = new MemoryStream();
            using var sha1 = new SHA1CryptoServiceProvider();
            using var stream = new CryptoStream(buffer, sha1, CryptoStreamMode.Write);
            var codec = new Codec();
#pragma warning disable SA1129  // See also: https://github.com/planetarium/bencodex.net/issues/20
            IValue minters = Minters is ImmutableHashSet<Address> a
                ? new List(a.OrderBy(m => m).Select(m => (IValue)new Binary(m.ToByteArray())))
                : (IValue)new Null();
#pragma warning restore SA1129
            IValue serialized = Dictionary.Empty
                .Add("ticker", Ticker)
                .Add("decimals", DecimalPlaces)
                .Add("minters", minters);
            codec.Encode(serialized, stream);
            stream.FlushFinalBlock();
            return new HashDigest<SHA1>(sha1.Hash);
        }
    }
}
