using System;
using System.Collections.Generic;

namespace Libplanet.Misc
{
    /// <summary>
    /// An <see cref="IEqualityComparer{T}"/> implementation to compare two arrays of the same
    /// element type.  This compares the elements in the order of the array.
    /// <para>The way to compare each element can be customized by specifying
    /// the <see cref="ElementComparer"/>.</para>
    /// </summary>
    /// <typeparam name="T">The element type of the array.</typeparam>
    public class ArrayEqualityComparer<T> : IEqualityComparer<T[]>
        where T : IEquatable<T>
    {
        /// <summary>
        /// Creates a new instance of <see cref="ArrayEqualityComparer{T}"/>.
        /// </summary>
        /// <param name="elementComparer">Optionally customize the way to compare each element.
        /// </param>
        public ArrayEqualityComparer(IEqualityComparer<T>? elementComparer = null)
        {
            ElementComparer = elementComparer;
        }

        /// <summary>
        /// Optionally customizes the way to compare each element.
        /// </summary>
        public IEqualityComparer<T>? ElementComparer { get; }

        /// <inheritdoc cref="IEqualityComparer{T}.Equals(T, T)"/>
        public bool Equals(T[]? x, T[]? y)
        {
            if (x is null && y is null)
            {
                return true;
            }
            else if (x is null || y is null)
            {
                return false;
            }
            else if (x.Length != y.Length)
            {
                return false;
            }

            if (ElementComparer is { } comparer)
            {
                for (long i = 0L; i < x.LongLength; i++)
                {
                    if (!comparer.Equals(x[i], y[i]))
                    {
                        return false;
                    }
                }
            }
            else
            {
                for (long i = 0L; i < x.LongLength; i++)
                {
                    if (!x[i].Equals(y[i]))
                    {
                        return false;
                    }
                }
            }

            return true;
        }

        /// <inheritdoc cref="IEqualityComparer{T}.GetHashCode(T)"/>
        public int GetHashCode(T[]? obj)
        {
            if (obj is null)
            {
                return 0;
            }

            int hash = 17;
            if (ElementComparer is { } comparer)
            {
                foreach (T el in obj)
                {
                    hash = unchecked(hash * 31 + comparer.GetHashCode(el));
                }
            }
            else
            {
                foreach (T el in obj)
                {
                    hash = unchecked(hash * 31 + el.GetHashCode());
                }
            }

            return hash;
        }
    }
}
