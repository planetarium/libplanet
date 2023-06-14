using System;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using System.Numerics;
using System.Runtime.Serialization;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex.Types;
using Libplanet.Serialization;

namespace Libplanet.Assets
{
    /// <summary>
    /// Holds a fungible asset value which holds its <see cref="Currency"/> together.
    /// </summary>
    /// <remarks>
    /// It behaves like numbers except for division operator (<c>/</c>) to prevent to forget
    /// to handle its remainder; use <see cref="DivRem(FungibleAssetValue)"/> and <see
    /// cref="DivRem(BigInteger)"/> methods instead.
    /// </remarks>
    [JsonConverter(typeof(FungibleAssetValueJsonConverter))]
    [Serializable]
    public readonly struct FungibleAssetValue :
        IEquatable<FungibleAssetValue>,
        IComparable<FungibleAssetValue>,
        IComparable,
        ISerializable
    {
        /// <summary>
        /// The currency of the fungible asset.
        /// </summary>
        public readonly Currency Currency;

        /// <summary>
        /// The internal representation of the fungible asset.
        /// </summary>
        /// <remarks>
        /// Since this is an internal representation, this does not guarantee forward compatibility.
        /// Therefore, do not depend on this value for permanent uses but only for volatile data.
        /// </remarks>
        /// <seealso cref="FromRawValue(Assets.Currency, BigInteger)"/>
        public readonly BigInteger RawValue;

        public FungibleAssetValue(IValue value)
        {
            if (!(value is Bencodex.Types.List list))
            {
                throw new ArgumentException(
                    $"The given value is not a list: {value}",
                    nameof(value)
                );
            }

            Currency = new Currency(list[0]);
            RawValue = (Bencodex.Types.Integer)list[1];
        }

        /// <summary>
        /// Creates a zero value of the <paramref name="currency"/>.
        /// </summary>
        /// <param name="currency">The currency to create a zero value.</param>
        public FungibleAssetValue(Currency currency)
            : this(currency, BigInteger.Zero)
        {
        }

        /// <summary>
        /// Creates a value of the <paramref name="currency"/> from the given
        /// <paramref name="majorUnit"/> and <paramref name="minorUnit"/>.
        /// </summary>
        /// <param name="currency">The currency to create a value.</param>
        /// <param name="majorUnit">The major unit of the fungible asset value,
        /// i.e., digits <em>before</em> the decimal separator.</param>
        /// <param name="minorUnit">The minor unit of the fungible asset value,
        /// i.e., digits <em>after</em> the decimal separator.</param>
        /// <exception cref="ArgumentException">Thrown when the negativity sign is ambiguous
        /// (e.g., both units have signs) or too big for the <paramref name="currency"/>.
        /// </exception>
        /// <seealso cref="Assets.Currency.DecimalPlaces"/>
        public FungibleAssetValue(Currency currency, BigInteger majorUnit, BigInteger minorUnit)
            : this(
                currency,
                majorUnit.IsZero ? minorUnit.Sign : majorUnit.Sign,
                BigInteger.Abs(majorUnit),
                BigInteger.Abs(minorUnit)
            )
        {
            if (!majorUnit.IsZero && minorUnit < BigInteger.Zero)
            {
                throw new ArgumentException(
                    "Unless the major unit is zero, the minor unit cannot be negative.",
                    nameof(minorUnit)
                );
            }
        }

        /// <summary>
        /// Creates a value of the <paramref name="currency"/> from the given <paramref
        /// name="sign"/>, <paramref name="majorUnit"/> and <paramref name="minorUnit"/>.
        /// </summary>
        /// <param name="currency">The currency to create a value.</param>
        /// <param name="sign">Indicates the sign (negative, positive, or zero) of the value.
        /// <c>-1</c> indicates negative, <c>1</c> indicates positive, and <c>0</c> indicates
        /// zero.</param>
        /// <param name="majorUnit">The major unit of the fungible asset value,
        /// i.e., digits <em>before</em> the decimal separator.  Must not be negative.</param>
        /// <param name="minorUnit">The minor unit of the fungible asset value,
        /// i.e., digits <em>after</em> the decimal separator.  Must not be negative.</param>
        /// <exception cref="ArgumentException">Thrown when the the <paramref name="sign"/> is not
        /// one of <c>1</c>, <c>0</c>, and <c>-1</c>, or <paramref name="majorUnit"/> or
        /// <paramref name="minorUnit"/> is negative.
        /// </exception>
        /// <seealso cref="Assets.Currency.DecimalPlaces"/>
        public FungibleAssetValue(
            Currency currency,
            int sign,
            BigInteger majorUnit,
            BigInteger minorUnit
        )
            : this(
                currency,
                sign * (majorUnit * BigInteger.Pow(10, currency.DecimalPlaces) + minorUnit)
            )
        {
            if (sign > 1 || sign < -1)
            {
                throw new ArgumentException("The sign must be 1, 0, or -1.", nameof(sign));
            }
            else if (sign == 0 && !majorUnit.IsZero)
            {
                throw new ArgumentException(
                    "If the sign is zero, the major unit must be also zero.",
                    nameof(majorUnit)
                );
            }
            else if (sign == 0 && !minorUnit.IsZero)
            {
                throw new ArgumentException(
                    "If the sign is zero, the minor unit must be also zero.",
                    nameof(minorUnit)
                );
            }
            else if (majorUnit < 0)
            {
                throw new ArgumentException(
                    "The major unit must not be negative.",
                    nameof(majorUnit)
                );
            }
            else if (minorUnit < 0)
            {
                throw new ArgumentException(
                    "The minor unit must not be negative.",
                    nameof(minorUnit)
                );
            }
            else if (minorUnit > 0 &&
                     (int)Math.Floor(BigInteger.Log10(minorUnit) + 1) > currency.DecimalPlaces)
            {
                string msg =
                    $"Since the currency {currency} allows upto {currency.DecimalPlaces} " +
                    $"decimal places, the given minor unit {minorUnit} is too big.";
                throw new ArgumentException(msg, nameof(minorUnit));
            }
        }

        /// <summary>
        /// Creates a value of the <paramref name="currency"/> with the specified <paramref
        /// name="rawValue"/>.
        /// </summary>
        /// <param name="currency">The currency to create a value.</param>
        /// <param name="rawValue">The raw quantity of the value to create.</param>
        internal FungibleAssetValue(Currency currency, BigInteger rawValue)
        {
            Currency = currency;
            RawValue = rawValue;
        }

        /// <summary>
        /// Deserializes a fungible asset value.
        /// </summary>
        /// <param name="info">A serialization information.</param>
        /// <param name="context">A streaming context.</param>
        private FungibleAssetValue(SerializationInfo info, StreamingContext context)
            : this(
                info.GetValue<Currency>(nameof(Currency)),
                info.GetValue<BigInteger>(nameof(RawValue))
            )
        {
        }

        /// <summary>
        /// Gets a number that indicates the sign (negative, positive, or zero) of the value.
        /// </summary>
        /// <value>
        /// A number that indicates the sign of the fungible asset value, as shown in the following
        /// table:
        /// <list type="table">
        /// <listheader><term>Number</term><description>Description</description></listheader>
        /// <item><term>-1</term><description>The value is negative.</description></item>
        /// <item><term>0</term><description>The value is zero.</description></item>
        /// <item><term>1</term><description>The value is positive.</description></item>
        /// </list>
        /// </value>
        [Pure]
        public int Sign
        {
            get
            {
                if (RawValue < 0)
                {
                    return -1;
                }

                if (RawValue == 0)
                {
                    return 0;
                }

                return 1;
            }
        }

        /// <summary>
        /// The major unit of the fungible asset value, i.e., digits <em>before</em> the decimal
        /// separator, in absolute value.
        /// </summary>
        /// <remarks>It is absolute value, which lacks <see cref="Sign"/>.</remarks>
        /// <seealso cref="Assets.Currency.DecimalPlaces"/>
        [Pure]
        public BigInteger MajorUnit =>
            BigInteger.Abs(RawValue) / BigInteger.Pow(10, Currency.DecimalPlaces);

        /// <summary>
        /// The minor unit of the fungible asset value, i.e., digits <em>after</em> the decimal
        /// separator, in absolute value.
        /// </summary>
        /// <remarks>It is absolute value, which lacks <see cref="Sign"/>.</remarks>
        /// <seealso cref="Assets.Currency.DecimalPlaces"/>
        [Pure]
        public BigInteger MinorUnit =>
            BigInteger.Abs(RawValue) % BigInteger.Pow(10, Currency.DecimalPlaces);

        /// <summary>
        /// Tests if two values are equal.
        /// </summary>
        /// <param name="obj">A value.</param>
        /// <param name="other">Another value.</param>
        /// <returns><see langword="true"/> if two values are equal.
        /// Otherwise <see langword="false"/>.</returns>
        [Pure]
        public static bool operator ==(FungibleAssetValue obj, FungibleAssetValue other) =>
            obj.Equals(other);

        /// <summary>
        /// Tests if two values are unequal.
        /// </summary>
        /// <param name="obj">A value.</param>
        /// <param name="other">Another value.</param>
        /// <returns><see langword="false"/> if two values are equal.
        /// Otherwise <see langword="true"/>.</returns>
        [Pure]
        public static bool operator !=(FungibleAssetValue obj, FungibleAssetValue other) =>
            !(obj == other);

        /// <summary>
        /// Tests if the left operand (<paramref name="obj"/>) is less than the right operand
        /// (<paramref name="other"/>).
        /// </summary>
        /// <param name="obj">The left operand to compare.</param>
        /// <param name="other">The right operand to compare.</param>
        /// <returns><see langword="true"/>
        /// if the left operand (<paramref name="obj"/>) is less than the right
        /// operand (<paramref name="other"/>).  Otherwise (even if two operands are equal)
        /// <see langword="false"/>.</returns>
        [Pure]
        public static bool operator <(FungibleAssetValue obj, FungibleAssetValue other) =>
            obj.CompareTo(other) < 0;

        /// <summary>
        /// Tests if the left operand (<paramref name="obj"/>) is less than or equal to the right
        /// operand (<paramref name="other"/>).
        /// </summary>
        /// <param name="obj">The left operand to compare.</param>
        /// <param name="other">The right operand to compare.</param>
        /// <returns><see langword="true"/>
        /// if the left operand (<paramref name="obj"/>) is less than or equal
        /// to the right operand (<paramref name="other"/>).  Otherwise <see langword="false"/>.
        /// </returns>
        [Pure]
        public static bool operator <=(FungibleAssetValue obj, FungibleAssetValue other) =>
            obj.CompareTo(other) <= 0;

        /// <summary>
        /// Tests if the left operand (<paramref name="obj"/>) is greater than the right operand
        /// (<paramref name="other"/>).
        /// </summary>
        /// <param name="obj">The left operand to compare.</param>
        /// <param name="other">The right operand to compare.</param>
        /// <returns><see langword="true"/>
        /// if the left operand (<paramref name="obj"/>) is greater than
        /// the right operand (<paramref name="other"/>).  Otherwise (even if two operands are
        /// equal) <see langword="false"/>.</returns>
        [Pure]
        public static bool operator >(FungibleAssetValue obj, FungibleAssetValue other) =>
            other < obj;

        /// <summary>
        /// Tests if the left operand (<paramref name="obj"/>) is greater than or equal to the right
        /// operand (<paramref name="other"/>).
        /// </summary>
        /// <param name="obj">The left operand to compare.</param>
        /// <param name="other">The right operand to compare.</param>
        /// <returns><see langword="true"/>
        /// if the left operand (<paramref name="obj"/>) is greater than or
        /// equal to the right operand (<paramref name="other"/>).
        /// Otherwise <see langword="false"/>.</returns>
        [Pure]
        public static bool operator >=(FungibleAssetValue obj, FungibleAssetValue other) =>
            other <= obj;

        /// <summary>
        /// Negates a <paramref name="value"/>.
        /// <para>Adds a negative sign to the <paramref name="value"/> if it's positive.
        /// Removes a negative sign from the <paramref name="value"/> if it's already negative.
        /// Does nothing if the <paramref name="value"/> is zero.</para>
        /// </summary>
        /// <param name="value">A value to negate.</param>
        /// <returns>A negated <paramref name="value"/>.</returns>
        [Pure]
        public static FungibleAssetValue operator -(FungibleAssetValue value) =>
            new FungibleAssetValue(value.Currency, -value.RawValue);

        /// <summary>
        /// Adds two values and returns the result.
        /// </summary>
        /// <param name="left">The first value to add.</param>
        /// <param name="right">The second value to add.</param>
        /// <returns>The sum of <paramref name="left"/> and <paramref name="right"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when two values do not have the same
        /// <see cref="Currency"/>.</exception>
        [Pure]
        public static FungibleAssetValue operator +(
            FungibleAssetValue left,
            FungibleAssetValue right
        ) => left.Currency.Equals(right.Currency)
            ? new FungibleAssetValue(left.Currency, left.RawValue + right.RawValue)
            : throw new ArgumentException(
                "Unable to add heterogeneous currencies: " +
                $"{left.Currency} \u2260 {right.Currency}.",
                nameof(right));

        /// <summary>
        /// Subtracts the <paramref name="right"/> value from the <paramref name="left"/> value.
        /// </summary>
        /// <param name="left">The value to subtract from (the minuend).</param>
        /// <param name="right">The value to subtract (the subtrahend).</param>
        /// <returns>The result of subtracting <paramref name="right"/> from
        /// <paramref name="left"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when two values do not have the same
        /// <see cref="Currency"/>.</exception>
        [Pure]
        public static FungibleAssetValue operator -(
            FungibleAssetValue left,
            FungibleAssetValue right
        ) => left.Currency.Equals(right.Currency)
            ? new FungibleAssetValue(left.Currency, left.RawValue - right.RawValue)
            : throw new ArgumentException(
                "Unable to subtract heterogeneous currencies: " +
                $"{left.Currency} \u2260 {right.Currency}.",
                nameof(right));

        /// <summary>
        /// Multiplies <paramref name="right"/> times the <paramref name="left"/> value.
        /// </summary>
        /// <param name="left">The value to multiply.</param>
        /// <param name="right">The times to multiply.</param>
        /// <returns>The multiplied value.</returns>
        [Pure]
        public static FungibleAssetValue operator *(FungibleAssetValue left, BigInteger right) =>
            new FungibleAssetValue(left.Currency, left.RawValue * right);

        /// <summary>
        /// Multiplies <paramref name="left"/> times the <paramref name="right"/> value.
        /// </summary>
        /// <param name="left">The times to multiply.</param>
        /// <param name="right">The value to multiply.</param>
        /// <returns>The multiplied value.</returns>
        [Pure]
        public static FungibleAssetValue operator *(BigInteger left, FungibleAssetValue right) =>
            new FungibleAssetValue(right.Currency, left * right.RawValue);

        /// <summary>
        /// Divides the value (<paramref name="dividend"/>) by <paramref name="divisor"/>,
        /// and returns the remainder.
        /// </summary>
        /// <param name="dividend">The value to be divided.</param>
        /// <param name="divisor">The number to divide by.</param>
        /// <returns>The remainder after dividing <paramref name="dividend"/>
        /// by <paramref name="divisor"/>.</returns>
        /// <exception cref="DivideByZeroException">Thrown when the <paramref name="divisor"/> is
        /// <c>0</c> (zero).</exception>
        [Pure]
        public static FungibleAssetValue operator %(FungibleAssetValue dividend, BigInteger divisor)
            => new FungibleAssetValue(dividend.Currency, dividend.RawValue % divisor);

        /// <summary>
        /// Divides the value (<paramref name="dividend"/>) by <paramref name="divisor"/>,
        /// and returns the remainder.
        /// </summary>
        /// <param name="dividend">The value to be divided.</param>
        /// <param name="divisor">The value to divide by.</param>
        /// <returns>The remainder after dividing <paramref name="dividend"/>
        /// by <paramref name="divisor"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when two values do not have the same
        /// <see cref="Currency"/>.</exception>
        /// <exception cref="DivideByZeroException">Thrown when the <paramref name="divisor"/> is
        /// zero.</exception>
        [Pure]
        public static FungibleAssetValue operator %(
            FungibleAssetValue dividend,
            FungibleAssetValue divisor)
        {
            if (!dividend.Currency.Equals(divisor.Currency))
            {
                throw new ArgumentException(
                    "Cannot be divided by a heterogeneous currency: " +
                    $"{dividend.Currency} \u2260 {divisor.Currency}."
                );
            }

            return new FungibleAssetValue(dividend.Currency, dividend.RawValue % divisor.RawValue);
        }

        /// <summary>
        /// Parses a numeric string and returns a corresponding <see cref="FungibleAssetValue"/>.
        /// </summary>
        /// <param name="currency">The currency of the value to parse.</param>
        /// <param name="value">A numeric string to parse.  Can consist of digits, plus (+),
        /// minus (-), and decimal separator (.).</param>
        /// <returns>The parsed asset value.</returns>
        /// <exception cref="FormatException">Thrown when the given <paramref name="value"/> is not
        /// a valid numeric string.</exception>
        public static FungibleAssetValue Parse(Currency currency, string value)
        {
            int sign = 1;
            if (value[0] == '-' || value[0] == '+')
            {
                sign = value[0] == '-' ? -1 : 1;
                value = value.Remove(0, 1);
            }

            if (value.IndexOfAny(new[] { '+', '-' }) >= 0)
            {
                const string msg =
                    "Plus (+) or minus (-) sign can be appeared only at first and cannot be " +
                    "more than one.";
                throw new FormatException(msg);
            }

            string[] parts = value.Split(new[] { '.' }, count: 2);
            bool minorExist = parts.Length > 1;
            if (minorExist && parts[1].IndexOf('.') >= 0)
            {
                throw new FormatException(
                    "The decimal separator (.) cannot be appeared more than once."
                );
            }
            else if (!parts[0].All(char.IsDigit) || (minorExist && !parts[1].All(char.IsDigit)))
            {
                const string msg =
                    "The value string must consist of digits, decimal separator (.), plus (+), " +
                    "and minus(-).";
                throw new FormatException(msg);
            }
            else if (minorExist && parts[1].Length > currency.DecimalPlaces)
            {
                throw new FormatException(
                    $"The currency {currency} does not allow more than {currency.DecimalPlaces} " +
                    (currency.DecimalPlaces == 1 ? "decimal place" : "decimal places")
                );
            }

            BigInteger major = BigInteger.Parse(parts[0], CultureInfo.InvariantCulture);
            BigInteger minor = minorExist
                ? BigInteger.Parse(parts[1], CultureInfo.InvariantCulture) * BigInteger.Pow(
                    10,
                    currency.DecimalPlaces - parts[1].Length)
                : 0;
            return new FungibleAssetValue(currency, sign, major, minor);
        }

        /// <summary>
        /// Restores a value from a <paramref name="rawValue"/> of a <paramref name="currency"/>.
        /// </summary>
        /// <param name="currency">The currency to create a value.</param>
        /// <param name="rawValue">The <see cref="RawValue"/> to restore.</param>
        /// <returns>The value restored from the given <paramref name="rawValue"/>.</returns>
        /// <seealso cref="RawValue"/>
        public static FungibleAssetValue FromRawValue(Currency currency, BigInteger rawValue) =>
            new FungibleAssetValue(currency, rawValue: rawValue);

        /// <summary>
        /// Divides the value by <paramref name="divisor"/>, returns the quotient, and returns
        /// the <paramref name="remainder"/> in an output parameter.
        /// </summary>
        /// <param name="divisor">The number to divide by.</param>
        /// <param name="remainder">When this method returns (without any exception), the remainder
        /// after dividing the value by <paramref name="divisor"/>.  This parameter is passed
        /// uninitialized.</param>
        /// <returns>The quotient of the division.</returns>
        /// <exception cref="DivideByZeroException">Thrown when the <paramref name="divisor"/> is
        /// <c>0</c> (zero).</exception>
        [Pure]
        public FungibleAssetValue DivRem(BigInteger divisor, out FungibleAssetValue remainder)
        {
            BigInteger q = BigInteger.DivRem(RawValue, divisor, out BigInteger rem);
            remainder = new FungibleAssetValue(Currency, rem);
            return new FungibleAssetValue(Currency, q);
        }

        /// <summary>
        /// Divides the value by <paramref name="divisor"/>, returns the quotient, and returns
        /// the <paramref name="remainder"/> in an output parameter.
        /// </summary>
        /// <param name="divisor">The value to divide by.</param>
        /// <param name="remainder">When this method returns (without any exception), the remainder
        /// after dividing the value by <paramref name="divisor"/>.  This parameter is passed
        /// uninitialized.</param>
        /// <returns>The quotient of the division.</returns>
        /// <exception cref="ArgumentException">Thrown when two values do not have the same
        /// <see cref="Currency"/>.</exception>
        /// <exception cref="DivideByZeroException">Thrown when the <paramref name="divisor"/> is
        /// zero.</exception>
        [Pure]
        public BigInteger DivRem(FungibleAssetValue divisor, out FungibleAssetValue remainder)
        {
            if (!Currency.Equals(divisor.Currency))
            {
                throw new ArgumentException(
                    "Cannot be divided by a heterogeneous currency: " +
                    $"{Currency} \u2260 {divisor.Currency}."
                );
            }

            BigInteger d = BigInteger.DivRem(RawValue, divisor.RawValue, out BigInteger rem);
            remainder = new FungibleAssetValue(Currency, rem);
            return d;
        }

        /// <summary>
        /// Divides the value by <paramref name="divisor"/>, and returns a pair of the quotient
        /// and the remainder.
        /// </summary>
        /// <param name="divisor">The number to divide by.</param>
        /// <returns>A tuple of the <c>Quotient</c> and <c>Remainder</c> of the division.</returns>
        /// <exception cref="DivideByZeroException">Thrown when the <paramref name="divisor"/> is
        /// <c>0</c> (zero).</exception>
        [Pure]
        public (FungibleAssetValue Quotient, FungibleAssetValue Remainder)
        DivRem(BigInteger divisor) =>
            (DivRem(divisor, out FungibleAssetValue remainder), remainder);

        /// <summary>
        /// Divides the value by <paramref name="divisor"/>, and returns a pair of the quotient
        /// and the remainder.
        /// </summary>
        /// <param name="divisor">The value to divide by.</param>
        /// <returns>A tuple of the <c>Quotient</c> and <c>Remainder</c> of the division.</returns>
        /// <exception cref="ArgumentException">Thrown when two values do not have the same
        /// <see cref="Currency"/>.</exception>
        /// <exception cref="DivideByZeroException">Thrown when the <paramref name="divisor"/> is
        /// zero.</exception>
        [Pure]
        public (BigInteger Quotient, FungibleAssetValue Remainder)
        DivRem(FungibleAssetValue divisor) =>
            (DivRem(divisor, out FungibleAssetValue remainder), remainder);

        /// <summary>
        /// Gets the absolute value.
        /// <para>Removes the negative sign if it's negative.  Otherwise does nothing.</para>
        /// </summary>
        /// <returns>Its absolute value.</returns>
        [Pure]
        public FungibleAssetValue Abs()
            => new FungibleAssetValue(Currency, BigInteger.Abs(RawValue));

        /// <summary>
        /// Gets the value quantity without its <see cref="Currency"/> in <see cref="string"/>.
        /// </summary>
        /// <param name="minorUnit">Whether to show all possible decimal places even
        /// if they are zeros.</param>
        /// <returns>A quantity string in decimal system.  Consists of an optional sign (minus),
        /// digits and an optional decimal separator (period).</returns>
        [Pure]
        public string GetQuantityString(bool minorUnit = false)
        {
            var signedString = Sign < 0 ? "-" : string.Empty;
            var endCharsToTrim = minorUnit ? ' ' : '0';
            return minorUnit || MinorUnit > 0
                ? string.Format(
                CultureInfo.InvariantCulture,
                "{0}{1}.{2:d" + Currency.DecimalPlaces.ToString(CultureInfo.InvariantCulture) + "}",
                signedString,
                MajorUnit,
                MinorUnit
                ).TrimEnd(endCharsToTrim)
                : (MajorUnit * Sign).ToString(CultureInfo.InvariantCulture);
        }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(FungibleAssetValue other) =>
            Currency.Equals(other.Currency) && RawValue.Equals(other.RawValue);

        /// <inheritdoc cref="object.Equals(object)"/>
        [Pure]
        public override bool Equals(object? obj) =>
            obj is FungibleAssetValue other && Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
        public override int GetHashCode() =>
            unchecked((Currency.GetHashCode() * 397) ^ RawValue.GetHashCode());

        /// <inheritdoc cref="IComparable.CompareTo(object)"/>
        [Pure]
        public int CompareTo(object? obj) => obj is FungibleAssetValue o
            ? CompareTo(o)
            : throw new ArgumentException(
                $"Unable to compare with other than {nameof(FungibleAssetValue)}",
                nameof(obj));

        /// <inheritdoc cref="IComparable{T}.CompareTo(T)"/>
        [Pure]
        public int CompareTo(FungibleAssetValue other) => Currency.Equals(other.Currency)
            ? RawValue.CompareTo(other.RawValue)
            : throw new ArgumentException(
                $"Unable to compare heterogeneous currencies: {Currency} \u2260 {other.Currency}.",
                nameof(other));

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        void ISerializable.GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue(nameof(Currency), Currency);
            info.AddValue(nameof(RawValue), RawValue);
        }

        /// <inheritdoc cref="object.ToString()"/>
        [Pure]
        public override string ToString() =>
            $"{GetQuantityString()} {Currency.Ticker}";

        public IValue Serialize() => Bencodex.Types.List.Empty
                .Add(Currency.Serialize())
                .Add((Bencodex.Types.Integer)RawValue);
    }

    [SuppressMessage(
        "StyleCop.CSharp.MaintainabilityRules",
        "SA1402:FileMayOnlyContainASingleClass",
        Justification = "It's okay to have non-public classes together in a single file."
    )]
    internal class FungibleAssetValueJsonConverter : JsonConverter<FungibleAssetValue>
    {
        public override FungibleAssetValue Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException(
                    $"Expected an object representation of {nameof(FungibleAssetValue)}."
                );
            }

            reader.Read();

            string quantityFieldName =
                options.PropertyNamingPolicy?.ConvertName("Quantity") ?? "Quantity";
            string currencyFieldName =
                options.PropertyNamingPolicy?.ConvertName("Currency") ?? "Currency";
            string? quantityString = null;
            Currency? currency = null;

            while (reader.TokenType != JsonTokenType.EndObject &&
                   (quantityString is null || currency is null))
            {
                if (quantityString is { } && currency is { })
                {
                    throw new JsonException($"Unexpected token: {reader.TokenType}.");
                }

                if (!(reader.GetString() is { } propName))
                {
                    throw new JsonException("Expected a field name.");
                }

                reader.Read();
                switch (propName.ToLowerInvariant())
                {
                    case "quantity":
                        if (options.PropertyNameCaseInsensitive || propName == quantityFieldName)
                        {
                            quantityString = reader.GetString();
                            reader.Read();
                            if (quantityString is null)
                            {
                                throw new JsonException("Expected a string value.");
                            }
                        }

                        break;

                    case "currency":
                        if (options.PropertyNameCaseInsensitive || propName == currencyFieldName)
                        {
                            currency = JsonSerializer.Deserialize<Currency>(ref reader, options);
                            if (currency is null)
                            {
                                throw new JsonException(
                                    $"Expected an object representation of {nameof(Currency)}.");
                            }
                        }

                        break;

                    default:
                        throw new JsonException($"Unexpected field name: {propName}.");
                }
            }

            if (reader.TokenType != JsonTokenType.EndObject)
            {
                throw new JsonException($"Unexpected token: {reader.TokenType}.");
            }

            reader.Read();

            if (!(quantityString is { } q))
            {
                throw new JsonException($"Missing field: \"{quantityFieldName}\".");
            }

            if (!(currency is { } c))
            {
                throw new JsonException($"Missing field: \"{currencyFieldName}\".");
            }

            return FungibleAssetValue.Parse(c, q);
        }

        public override void Write(
            Utf8JsonWriter writer,
            FungibleAssetValue value,
            JsonSerializerOptions options
        )
        {
            writer.WriteStartObject();
            writer.WriteString(
                options.PropertyNamingPolicy?.ConvertName("Quantity") ?? "Quantity",
                value.GetQuantityString()
            );
            writer.WritePropertyName(
                options.PropertyNamingPolicy?.ConvertName("Currency") ?? "Currency");
            JsonSerializer.Serialize(writer, value.Currency, options);
            writer.WriteEndObject();
        }
    }
}
