using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet.Crypto
{
    public static class BlsSignatureExtensions
    {
        [Pure]
        public static BlsSignature AggregateAll(this IEnumerable<BlsSignature> signatures) =>
            signatures.Aggregate((x, y) => x.AggregateSignature(y));

        [Pure]
        public static BlsSignature AggregateSignature(this BlsSignature lhs, BlsSignature rhs) =>
            CryptoConfig.ConsensusCryptoBackend.AggregateSignature(lhs, rhs);
    }
}
