using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet.Crypto
{
    /// <summary>
    /// The extension class for <see cref="BlsSignature"/>. Mainly it defines the extensions for
    /// aggregating signatures with conveniences.
    /// <para>See <see cref="BlsSignature.AggregateVerify"/> or
    /// <see cref="BlsSignature.FastAggregateVerify"/> for detailed usage of aggregated signature.
    /// </para>
    /// </summary>
    public static class BlsSignatureExtensions
    {
        /// <summary>
        /// Aggregates the given multiple signatures into one. An aggregated signature can be
        /// validated with their pair public keys with <see cref="BlsSignature.AggregateVerify"/>
        /// if the messages are unique, or <see cref="BlsSignature.FastAggregateVerify"/> if all the
        /// messages are identical.
        /// </summary>
        /// <param name="signatures">The signatures to aggregate.</param>
        /// <returns>Returns an aggregated signature of given signatures.</returns>
        /// <remarks>Note that if any given signature is <b>infinite</b> value, then the
        /// aggregated signature will be the aggregated signature without <b>infinite</b> signature.
        /// This should be considered before aggregates the signature.</remarks>
        [Pure]
        public static BlsSignature AggregateAll(this IEnumerable<BlsSignature> signatures) =>
            signatures.Aggregate((x, y) => x.AggregateSignature(y));

        [Pure]
        private static BlsSignature AggregateSignature(this BlsSignature lhs, BlsSignature rhs) =>
            CryptoConfig.ConsensusCryptoBackend.AggregateSignature(lhs, rhs);
    }
}
