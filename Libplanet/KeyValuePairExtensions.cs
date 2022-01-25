using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet
{
    /// <summary>
    /// Extension methods that help you to write more fluent dictionary-manipulating code.
    /// </summary>
    /// <example>
    /// The following example shows how an immutable dictionary can transform only its keys or
    /// its values:
    /// <code><![CDATA[
    /// var a = ImmutableDictionary<string, int>.Empty.Add("foo", 1).Add("bar", 2);
    /// // a: foo => 1, bar => 2
    /// var b = a.SelectWithinKeys(k => k.ToUpperInvariant()).ToImmutableDictionary();
    /// // b: FOO => 1, BAR => 2
    /// var c = a.SelectWithinValues(v => -v * 2).ToImmutableDictionary();
    /// // c: foo => -2, bar => -4
    /// ]]></code>
    /// </example>
    internal static class KeyValuePairExtensions
    {
        [Pure]
        public static KeyValuePair<TNewKey, TValue> ReplaceKey<TOldKey, TValue, TNewKey>(
            this KeyValuePair<TOldKey, TValue> pair,
            TNewKey newKey
        ) =>
            new KeyValuePair<TNewKey, TValue>(newKey, pair.Value);

        [Pure]
        public static KeyValuePair<TKey, TNewValue> ReplaceValue<TKey, TOldValue, TNewValue>(
            this KeyValuePair<TKey, TOldValue> pair,
            TNewValue newValue
        ) =>
            new KeyValuePair<TKey, TNewValue>(pair.Key, newValue);

        [Pure]
        public static IEnumerable<KeyValuePair<TNewKey, TValue>>
        SelectWithinKeys<TOldKey, TValue, TNewKey>(
            this IEnumerable<KeyValuePair<TOldKey, TValue>> source,
            Func<TOldKey, TNewKey> selector
        ) =>
            source.Select(pair => pair.ReplaceKey(selector(pair.Key)));

        [Pure]
        public static IEnumerable<KeyValuePair<TKey, TNewValue>>
        SelectWithinValues<TKey, TOldValue, TNewValue>(
            this IEnumerable<KeyValuePair<TKey, TOldValue>> source,
            Func<TOldValue, TNewValue> selector
        ) =>
            source.Select(pair => pair.ReplaceValue(selector(pair.Value)));
    }
}
