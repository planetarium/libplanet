using System;
using System.Collections.Generic;

namespace Libplanet.Crypto
{
    /// <summary>
    /// A static getter class for determine which public key it is by given <see cref="byte"/>
    /// representation and returns a concrete class type in <see cref="IPublicKey"/>.
    /// </summary>
    public static class PublicKeyGetter
    {
        /// <summary>
        /// <p>Gets a concrete class in <see cref="IPublicKey"/> by checking given
        /// <see cref="byte"/> representation length.</p> The possible return concrete types are:
        /// <list type="bullet">
        ///     <item>
        ///         <see cref="Libplanet.Crypto.PublicKey"/>, if the length of given key is 33 or
        ///         65 bytes (compressed and not compressed.)
        ///     </item>
        ///     <item>
        ///         <see cref="Libplanet.Crypto.BlsPublicKey"/>, if the length of given key is 48
        ///         bytes.
        ///     </item>
        /// </list>
        /// See also above concrete classes for possible throwing exceptions.
        /// </summary>
        /// <param name="keyBytes">A <see cref="byte"/> representation of a public key.</param>
        /// <returns>Returns a concrete public key class in <see cref="IPublicKey"/>.</returns>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="keyBytes"/> length
        /// is not matching with known length.</exception>
        public static IPublicKey Get(IReadOnlyList<byte> keyBytes)
        {
            IPublicKey pubKey = keyBytes.Count switch
            {
                33 => new PublicKey(keyBytes),
                48 => new BlsPublicKey(keyBytes),
                65 => new PublicKey(keyBytes),
                _ => throw new ArgumentException(nameof(pubKey)),
            };

            return pubKey;
        }
    }
}
