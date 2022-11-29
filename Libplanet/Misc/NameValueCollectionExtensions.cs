using System;
using System.Collections.Specialized;
using System.Globalization;
using static System.Convert;

namespace Libplanet.Misc
{
    /// <summary>
    /// Useful extension methods for <see cref="NameValueCollection"/>.
    /// </summary>
    public static class NameValueCollectionExtensions
    {
        /// <summary>
        /// Tries to get the numeric text associated with the specified <paramref name="name"/> as
        /// an <see cref="int"/> value from the specified name-value <paramref name="collection"/>.
        /// </summary>
        /// <param name="collection">The <see cref="NameValueCollection"/> that contains the entry
        /// to find.</param>
        /// <param name="name">The <see cref="string"/> key of the entry that contains the value to
        /// find.</param>
        /// <returns>An <see cref="int"/> value converted from the text value associated with
        /// the specified key <paramref name="name"/> from the <paramref name="collection"/>,
        /// if found; otherwise, <see langword="null"/>.</returns>
        /// <exception cref="FormatException">Thrown when the value is not a numeric text.
        /// </exception>
        /// <exception cref="OverflowException">Thrown when the value is outside the range of the
        /// <see cref="int"/> type.</exception>
        /// <remarks>This method assumes the <paramref name="collection"/> contains zero or
        /// one entry for the specified <paramref name="name"/>.</remarks>
        public static int? GetInt32(this NameValueCollection collection, string name) =>
            collection.Get(name) is { } v ? ToInt32(v, CultureInfo.InvariantCulture) : (int?)null;

        /// <summary>
        /// Tries to get the numeric text associated with the specified <paramref name="name"/> as
        /// an <see cref="int"/> value from the specified name-value <paramref name="collection"/>.
        /// </summary>
        /// <param name="collection">The <see cref="NameValueCollection"/> that contains the entry
        /// to find.</param>
        /// <param name="name">The <see cref="string"/> key of the entry that contains the value to
        /// find.</param>
        /// <param name="defaultValue">Returns this value if the specified key
        /// <paramref name="name"/> is not found in the <paramref name="collection"/>, or
        /// the associated value is not a numeric text or outside the range of the <see cref="int"/>
        /// type.</param>
        /// <returns>An <see cref="int"/> value converted from the text value associated with
        /// the specified key <paramref name="name"/> from the <paramref name="collection"/>,
        /// if found; otherwise, <paramref name="defaultValue"/>.</returns>
        public static int GetInt32(
            this NameValueCollection collection,
            string name,
            int defaultValue)
        {
            try
            {
                return GetInt32(collection, name) ?? defaultValue;
            }
            catch (FormatException)
            {
                return defaultValue;
            }
            catch (OverflowException)
            {
                return defaultValue;
            }
        }

        /// <summary>
        /// Tries to get the numeric text associated with the specified <paramref name="name"/> as
        /// a <see cref="ulong"/> value from the specified name-value <paramref name="collection"/>.
        /// </summary>
        /// <param name="collection">The <see cref="NameValueCollection"/> that contains the entry
        /// to find.</param>
        /// <param name="name">The <see cref="string"/> key of the entry that contains the value to
        /// find.</param>
        /// <returns>A <see cref="ulong"/> value converted from the text value associated with
        /// the specified key <paramref name="name"/> from the <paramref name="collection"/>,
        /// if found; otherwise, <see langword="null"/>.</returns>
        /// <exception cref="FormatException">Thrown when the value is not a numeric text.
        /// </exception>
        /// <exception cref="OverflowException">Thrown when the value is outside the range of the
        /// <see cref="ulong"/> type.</exception>
        /// <remarks>This method assumes the <paramref name="collection"/> contains zero or
        /// one entry for the specified <paramref name="name"/>.</remarks>
        public static ulong? GetUInt64(this NameValueCollection collection, string name) =>
            collection.Get(name) is { } v
                ? ToUInt64(v, CultureInfo.InvariantCulture)
                : (ulong?)null;

        /// <summary>
        /// Tries to get the numeric text associated with the specified <paramref name="name"/> as
        /// a <see cref="ulong"/> value from the specified name-value <paramref name="collection"/>.
        /// </summary>
        /// <param name="collection">The <see cref="NameValueCollection"/> that contains the entry
        /// to find.</param>
        /// <param name="name">The <see cref="string"/> key of the entry that contains the value to
        /// find.</param>
        /// <param name="defaultValue">Returns this value if the specified key
        /// <paramref name="name"/> is not found in the <paramref name="collection"/>, or
        /// the associated value is not a numeric text or outside the range of
        /// the <see cref="ulong"/> type.</param>
        /// <returns>An <see cref="int"/> value converted from the text value associated with
        /// the specified key <paramref name="name"/> from the <paramref name="collection"/>,
        /// if found; otherwise, <paramref name="defaultValue"/>.</returns>
        public static ulong GetUInt64(
            this NameValueCollection collection,
            string name,
            ulong defaultValue)
        {
            try
            {
                return GetUInt64(collection, name) ?? defaultValue;
            }
            catch (FormatException)
            {
                return defaultValue;
            }
            catch (OverflowException)
            {
                return defaultValue;
            }
        }

        /// <summary>
        /// Tries to get the boolean text associated with the specified <paramref name="name"/> as
        /// a <see cref="bool"/> value from the specified name-value <paramref name="collection"/>.
        /// <para>Supported keywords are: <see langword="true"/>, <see langword="false"/>,
        /// <c>yes</c>, <c>no</c>, <c>on</c>, <c>off</c>, <c>t</c>, <c>f</c>, <c>y</c>, <c>n</c>,
        /// <c>1</c>, <c>0</c> (all case-insensitive).</para>
        /// </summary>
        /// <param name="collection">The <see cref="NameValueCollection"/> that contains the entry
        /// to find.</param>
        /// <param name="name">The <see cref="string"/> key of the entry that contains the value to
        /// find.</param>
        /// <param name="defaultValue">Returns this value if the specified key
        /// <paramref name="name"/> is not found in the <paramref name="collection"/>, or
        /// the associated value is not a valid boolean text.  Configured as <see langword="false"/>
        /// by default.</param>
        /// <returns>A <see cref="bool"/> value converted from the text value associated with
        /// the specified key <paramref name="name"/> from the <paramref name="collection"/>,
        /// if found; otherwise, <paramref name="defaultValue"/>.</returns>
        public static bool GetBoolean(
            this NameValueCollection collection,
            string name,
            bool defaultValue = false)
        {
            return collection.Get(name)?.ToLowerInvariant() switch
            {
                "0" => false,
                "1" => true,
                "n" => false,
                "y" => true,
                "no" => false,
                "yes" => true,
                "f" => false,
                "t" => true,
                "false" => false,
                "true" => true,
                "off" => false,
                "on" => true,
                _ => defaultValue,
            };
        }
    }
}
