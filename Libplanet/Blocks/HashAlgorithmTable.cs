using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;

namespace Libplanet.Blocks
{
    public static class HashAlgorithmTable
    {
        /// <summary>
        /// Creates a <see cref="HashAlgorithmGetter"/> delegate from a <paramref name="table"/>.
        /// </summary>
        /// <param name="table">A table with block index offsets and their corresponding
        /// <see cref="HashAlgorithmType"/>.  For example, <c>0: SHA1, 10: SHA256, 100: SHA512</c>
        /// means <c>i =&gt; i >= 100 ? HashAlgorithmType.Of&lt;SHA512&gt;() : i >= 10 ?
        /// HashAlgorithmType.Of&lt;SHA256&gt;() : HashAlgorithmType.Of&lt;SHA1&gt;()</c>.
        /// (Note that 0 means <em>otherwise</em>.)  It must contain at least one entry with
        /// index 0, because it is the last fallback.</param>
        /// <returns>A corresponding <see cref="HashAlgorithmGetter"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when <paramref name="table"/> has no
        /// the last fallback entry with index 0, or there are entries with duplicate indices.
        /// </exception>
        public static HashAlgorithmGetter ToHashAlgorithmGetter(
            this IEnumerable<KeyValuePair<long, HashAlgorithmType>> table
        )
        {
            KeyValuePair<long, HashAlgorithmType>[] indices =
                table.OrderByDescending(kv => kv.Key).ToArray();

            if (!indices.Any() || indices[indices.Length - 1].Key > 0)
            {
                throw new ArgumentException(
                    $"The {nameof(table)} must contain at least one entry with index 0.",
                    nameof(table)
                );
            }
            else if (indices.Select(kv => kv.Key).ToImmutableHashSet().Count < indices.Length)
            {
                throw new ArgumentException(
                    $"Entries with duplicate indices are disallowed.",
                    nameof(table)
                );
            }

            return index =>
            {
                foreach (KeyValuePair<long, HashAlgorithmType> pair in indices)
                {
                    if (index >= pair.Key)
                    {
                        return pair.Value;
                    }
                }

                return indices[0].Value;
            };
        }
    }
}
