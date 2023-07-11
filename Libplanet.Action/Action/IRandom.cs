#nullable disable
using System;
using System.Diagnostics.Contracts;

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
        /// A number used to calculate a starting value for the pseudo-random
        /// number sequence.
        /// </summary>
        [Pure]
        int Seed { get; }

        /// <summary>
        /// Gets a non-negative random integer.
        /// </summary>
        /// <returns>A 32-bit signed integer that is greater than or equal to
        /// 0 and less than <see cref="int.MaxValue"/>.</returns>
        /// <seealso cref="System.Random.Next()"/>
        int Next();

        /// <summary>
        /// Gets a non-negative random integer that is less than the specified
        /// <paramref name="upperBound"/>.
        /// </summary>
        /// <param name="upperBound">The exclusive upper bound of the random
        /// number to be generated.  It must be greater than or equal to 0.
        /// </param>
        /// <returns>A 32-bit signed integer that is greater than or equal to
        /// 0 and less than <paramref name="upperBound"/>; that is, the range of
        /// return values ordinarily includes 0 but not <paramref
        /// name="upperBound"/>.  However, if <paramref name="upperBound"/> equals
        /// to 0, <paramref name="upperBound"/> is returned.</returns>
        /// <exception cref="System.ArgumentOutOfRangeException">Thrown when
        /// <paramref name="upperBound"/> is less than 0.</exception>
        /// <seealso cref="System.Random.Next(int)"/>
        int Next(int upperBound);

        /// <summary>
        /// Gets a random integer that is within a specified range.
        /// </summary>
        /// <param name="lowerBound">The inclusive lower bound of the random
        /// number to be generated.</param>
        /// <param name="upperBound">The exclusive upper bound of the random
        /// number to be generated.  It must be greater than or equal to
        /// <paramref name="lowerBound"/>.
        /// </param>
        /// <returns>A 32-bit signed integer that is greater than or equal to
        /// <paramref name="lowerBound"/> and less than <paramref
        /// name="upperBound"/>; that is, the range of return values ordinarily
        /// includes <paramref name="lowerBound"/> but not <paramref
        /// name="upperBound"/>.  If <paramref name="upperBound"/> equals to
        /// <paramref name="lowerBound"/>, <paramref name="lowerBound"/> is
        /// returned.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when
        /// <paramref name="upperBound"/> is less than <paramref
        /// name="lowerBound"/>.</exception>
        /// <seealso cref="System.Random.Next(int, int)"/>
        int Next(int lowerBound, int upperBound);

        /// <summary>
        /// Fills the elements of a specified <see cref="byte"/>s <paramref
        /// name="buffer"/> with random numbers.
        /// </summary>
        /// <param name="buffer">A <see cref="byte"/> array to contain random
        /// numbers.</param>
        /// <exception cref="ArgumentNullException">Thrown when <paramref
        /// name="buffer"/> is <see langword="null"/>.</exception>
        /// <seealso cref="System.Random.NextBytes(byte[])"/>
        void NextBytes(byte[] buffer);
    }
}
