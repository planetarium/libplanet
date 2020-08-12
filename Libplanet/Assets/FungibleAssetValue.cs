#nullable enable
using System;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Numerics;
using System.Runtime.Serialization;
using Libplanet.Serialization;

namespace Libplanet.Assets
{
    /// <summary>
    /// Holds a fungible asset value which holds its <see cref="Currency"/> together.
    /// <para>It behaves like numbers except for division operator (<c>/</c>) to prevent to forget
    /// to handle its remainder; use <see cref="DivRem(FungibleAssetValue)"/> and <see
    /// cref="DivRem(BigInteger)"/> methods instead.</para>
    /// </summary>
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

        internal readonly BigInteger Quantity;

        /// <summary>
        /// Creates a zero value of the <paramref name="currency"/>.
        /// </summary>
        /// <param name="currency">The currency to create a zero value.</param>
        public FungibleAssetValue(Currency currency)
            : this(currency, BigInteger.Zero)
        {
        }

        /// <summary>
        /// Creates a value of the <paramref name="currency"/> with the specified <paramref
        /// name="quantity"/>.
        /// </summary>
        /// <param name="currency">The currency to create a value.</param>
        /// <param name="quantity">The quantity of the value to create.</param>
        internal FungibleAssetValue(Currency currency, BigInteger quantity)
        {
            Currency = currency;
            Quantity = quantity;
        }

        /// <summary>
        /// Deserializes a fungible asset value.
        /// </summary>
        /// <param name="info">A serialization information.</param>
        /// <param name="context">A streaming context.</param>
        private FungibleAssetValue(SerializationInfo info, StreamingContext context)
            : this(
                info.GetValue<Currency>(nameof(Currency)),
                info.GetValue<BigInteger>(nameof(Quantity))
            )
        {
        }

        /// <summary>
        /// Tests if two values are equal.
        /// </summary>
        /// <param name="obj">A value.</param>
        /// <param name="other">Another value.</param>
        /// <returns><c>true</c> if two values are equal.  Otherwise <c>false</c>.</returns>
        [Pure]
        public static bool operator ==(FungibleAssetValue obj, FungibleAssetValue other) =>
            obj.Equals(other);

        /// <summary>
        /// Tests if two values are unequal.
        /// </summary>
        /// <param name="obj">A value.</param>
        /// <param name="other">Another value.</param>
        /// <returns><c>false</c> if two values are equal.  Otherwise <c>true</c>.</returns>
        [Pure]
        public static bool operator !=(FungibleAssetValue obj, FungibleAssetValue other) =>
            !(obj == other);

        /// <summary>
        /// Tests if the left operand (<paramref name="obj"/>) is less than the right operand
        /// (<paramref name="other"/>).
        /// </summary>
        /// <param name="obj">The left operand to compare.</param>
        /// <param name="other">The right operand to compare.</param>
        /// <returns><c>true</c> if the left operand (<paramref name="obj"/>) is less than the right
        /// operand (<paramref name="other"/>).  Otherwise (even if two operands are equal)
        /// <c>false</c>.</returns>
        [Pure]
        public static bool operator <(FungibleAssetValue obj, FungibleAssetValue other) =>
            obj.CompareTo(other) < 0;

        /// <summary>
        /// Tests if the left operand (<paramref name="obj"/>) is less than or equal to the right
        /// operand (<paramref name="other"/>).
        /// </summary>
        /// <param name="obj">The left operand to compare.</param>
        /// <param name="other">The right operand to compare.</param>
        /// <returns><c>true</c> if the left operand (<paramref name="obj"/>) is less than or equal
        /// to the right operand (<paramref name="other"/>).  Otherwise <c>false</c>.</returns>
        [Pure]
        public static bool operator <=(FungibleAssetValue obj, FungibleAssetValue other) =>
            obj.CompareTo(other) <= 0;

        /// <summary>
        /// Tests if the left operand (<paramref name="obj"/>) is greater than the right operand
        /// (<paramref name="other"/>).
        /// </summary>
        /// <param name="obj">The left operand to compare.</param>
        /// <param name="other">The right operand to compare.</param>
        /// <returns><c>true</c> if the left operand (<paramref name="obj"/>) is greater than
        /// the right operand (<paramref name="other"/>).  Otherwise (even if two operands are
        /// equal) <c>false</c>.</returns>
        [Pure]
        public static bool operator >(FungibleAssetValue obj, FungibleAssetValue other) =>
            other < obj;

        /// <summary>
        /// Tests if the left operand (<paramref name="obj"/>) is greater than or equal to the right
        /// operand (<paramref name="other"/>).
        /// </summary>
        /// <param name="obj">The left operand to compare.</param>
        /// <param name="other">The right operand to compare.</param>
        /// <returns><c>true</c> if the left operand (<paramref name="obj"/>) is greater than or
        /// equal to the right operand (<paramref name="other"/>). Otherwise <c>false</c>.</returns>
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
            new FungibleAssetValue(value.Currency, -value.Quantity);

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
            ? new FungibleAssetValue(left.Currency, left.Quantity + right.Quantity)
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
            ? new FungibleAssetValue(left.Currency, left.Quantity - right.Quantity)
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
            new FungibleAssetValue(left.Currency, left.Quantity * right);

        /// <summary>
        /// Multiplies <paramref name="left"/> times the <paramref name="right"/> value.
        /// </summary>
        /// <param name="left">The times to multiply.</param>
        /// <param name="right">The value to multiply.</param>
        /// <returns>The multiplied value.</returns>
        [Pure]
        public static FungibleAssetValue operator *(BigInteger left, FungibleAssetValue right) =>
            new FungibleAssetValue(right.Currency, left * right.Quantity);

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
            => new FungibleAssetValue(dividend.Currency, dividend.Quantity % divisor);

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

            return new FungibleAssetValue(dividend.Currency, dividend.Quantity % divisor.Quantity);
        }

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
            BigInteger q = BigInteger.DivRem(Quantity, divisor, out BigInteger rem);
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

            BigInteger d = BigInteger.DivRem(Quantity, divisor.Quantity, out BigInteger rem);
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
            => new FungibleAssetValue(Currency, BigInteger.Abs(Quantity));

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(FungibleAssetValue other) =>
            Currency.Equals(other.Currency) && Quantity.Equals(other.Quantity);

        /// <inheritdoc cref="object.Equals(object)"/>
        [Pure]
        public override bool Equals(object? obj) =>
            obj is FungibleAssetValue other && Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
        public override int GetHashCode() =>
            unchecked((Currency.GetHashCode() * 397) ^ Quantity.GetHashCode());

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
            ? Quantity.CompareTo(other.Quantity)
            : throw new ArgumentException(
                $"Unable to compare heterogeneous currencies: {Currency} \u2260 {other.Currency}.",
                nameof(other));

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        void ISerializable.GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue(nameof(Currency), Currency);
            info.AddValue(nameof(Quantity), Quantity);
        }

        /// <inheritdoc cref="object.ToString()"/>
        [Pure]
        public override string ToString() =>
            $"{Quantity.ToString(CultureInfo.InvariantCulture)} {Currency.Ticker}";
    }
}
