using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading;

namespace Libplanet
{
    /// <summary>
    /// This contains a set of functions that implements
    /// <a href="https://en.wikipedia.org/wiki/Hashcash">Hashcash</a>,
    /// a <a href="https://en.wikipedia.org/wiki/Proof-of-work_system"
    /// >proof-of-work system</a>.
    /// </summary>
    public static class Hashcash
    {
        /// <summary>
        /// A delegate to determine a consistent <see cref="byte"/>s
        /// representation derived from a given <paramref name="nonce"/>.
        /// <para>Since it is called multiple times with different
        /// <paramref name="nonce"/>s for
        /// <a href="https://en.wikipedia.org/wiki/Proof-of-work_system"
        /// >proof-of-work system</a>, the total time an implementation elapses
        /// should not vary for different <paramref name="nonce"/>s.</para>
        /// </summary>
        /// <param name="nonce">An arbitrary nonce for an attempt, provided by
        /// <see cref="Hashcash.Answer"/> method.
        /// </param>
        /// <returns>Chunked <see cref="byte"/>s determined from the given <paramref name="nonce"/>.
        /// It should return consistently equivalent bytes for equivalent <paramref name="nonce"/>
        /// values.  The way how bytes are split into chunks can be flexible; regardless of the way,
        /// they are concatenated into a single byte array.</returns>
        /// <seealso cref="Hashcash.Answer"/>
        /// <seealso cref="Nonce"/>
        public delegate IEnumerable<byte[]> Stamp(Nonce nonce);

        /// <summary>
        /// Finds a <see cref="Nonce"/> that satisfies the given
        /// <paramref name="difficulty"/>.  This process is so-called
        /// &#x0201c;<a
        /// href="https://en.wikipedia.org/wiki/Cryptocurrency#Mining"
        /// >mining</a>&#x0201d;.
        /// </summary>
        /// <param name="stamp">A callback to get a &#x0201c;stamp&#x0201d;
        /// which is a <see cref="byte"/> array determined from a given
        /// <see cref="Nonce"/> value.</param>
        /// <param name="hashAlgorithmType">The hash algorithm to use.</param>
        /// <param name="difficulty">A number to calculate the target number
        /// for which the returned answer should be less than.</param>
        /// <param name="seed">The seed number for random generator.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>A pair of <see cref="Nonce"/> value which satisfies the
        /// given <paramref name="difficulty"/>, and the succeeded hash
        /// digest.</returns>
        /// <exception cref="OperationCanceledException">Thrown when the specified
        /// <paramref name="cancellationToken"/> received a cancellation request.</exception>
        /// <seealso cref="Stamp"/>
        public static (Nonce Nonce, ImmutableArray<byte> Digest) Answer(
            Stamp stamp,
            HashAlgorithmType hashAlgorithmType,
            long difficulty,
            int seed,
            CancellationToken cancellationToken = default
        )
        {
            var nonceBytes = new byte[10];
            var random = new Random(seed);
            while (!cancellationToken.IsCancellationRequested)
            {
                random.NextBytes(nonceBytes);
                var nonce = new Nonce(nonceBytes);

                IEnumerable<byte[]> chunks = stamp(nonce);
                byte[] digest = hashAlgorithmType.Digest(chunks);
                if (ByteUtil.Satisfies(digest, difficulty))
                {
                    return (nonce, ImmutableArray.Create(digest));
                }
            }

            throw new OperationCanceledException(cancellationToken);
        }
    }
}
