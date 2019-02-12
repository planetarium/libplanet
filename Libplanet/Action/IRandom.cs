using System;

namespace Libplanet.Action
{
    /// <summary>
    /// An pseudorandom number generator interface equivalent to
    /// <see cref="System.Random"/>.
    /// <para>Although these two types have similar shapes, they are not
    /// compatible (i.e., disallowed to be casted to each other).</para>
    /// </summary>
    public interface IRandom
    {
        /// <summary>
        /// Gets a non-negative random integer.
        /// </summary>
        /// <returns>A 32-bit signed integer that is greater than or equal to
        /// 0 and less than <see cref="int.MaxValue"/>.</returns>
        /// <seealso cref="System.Random.Next()"/>
        int Next();

        /// <summary>
        /// Gets a non-negative random integer that is less than the specified
        /// <paramref name="maxValue"/>.
        /// </summary>
        /// <param name="maxValue">The exclusive upper bound of the random
        /// number to be generated.  It must be greater than or equal to 0.
        /// </param>
        /// <returns>A 32-bit signed integer that is greater than or equal to
        /// 0 and less than <paramref name="maxValue"/>; that is, the range of
        /// return values ordinarily includes 0 but not <paramref
        /// name="maxValue"/>.  However, if <paramref name="maxValue"/> equals
        /// to 0, <paramref name="maxValue"/> is returned.</returns>
        /// <exception cref="System.ArgumentOutOfRangeException">Thrown when
        /// <paramref name="maxValue"/> is less than 0.</exception>
        /// <seealso cref="System.Random.Next(int)"/>
        int Next(int maxValue);

        /// <summary>
        /// Gets a random integer that is within a specified range.
        /// </summary>
        /// <param name="minValue">The inclusive lower bound of the random
        /// number to be generated.</param>
        /// <param name="maxValue">The exclusive upper bound of the random
        /// number to be generated.  It must be greater than or equal to
        /// <paramref name="minValue"/>.
        /// </param>
        /// <returns>A 32-bit signed integer that is greater than or equal to
        /// <paramref name="minValue"/> and less than <paramref
        /// name="maxValue"/>; that is, the range of return values ordinarily
        /// includes <paramref name="minValue"/> but not <paramref
        /// name="maxValue"/>.  If <paramref name="maxValue"/> equals to
        /// <paramref name="minValue"/>, <paramref name="minValue"/> is
        /// returned.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when
        /// <paramref name="maxValue"/> is less than <paramref
        /// name="minValue"/>.</exception>
        /// <seealso cref="System.Random.Next(int, int)"/>
        int Next(int minValue, int maxValue);

        /// <summary>
        /// Fills the elements of a specified <see cref="byte"/>s <paramref
        /// name="buffer"/> with random numbers.
        /// </summary>
        /// <param name="buffer">A <see cref="byte"/> array to contain random
        /// numbers.</param>
        /// <exception cref="ArgumentNullException">Thrown when <paramref
        /// name="buffer"/> is <c>null</c>.</exception>
        /// <seealso cref="System.Random.NextBytes(byte[])"/>
        void NextBytes(byte[] buffer);

        /// <summary>
        /// Gets a random floating-point number that is greater than or
        /// equal to 0.0, and less than 1.0.
        /// </summary>
        /// <returns>A double-precision floating point number that is greater
        /// than or equal to 0.0, and less than 1.0.</returns>
        /// <seealso cref="System.Random.NextDouble()"/>
        double NextDouble();
    }
}
