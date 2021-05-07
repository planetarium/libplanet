#nullable enable
using System.Diagnostics.Contracts;
using Bencodex.Types;

namespace Libplanet.Action
{
    /// <summary>
    /// Marks an exception type as able to extract its metadata.
    /// </summary>
    public interface IExtractableException
    {
        /// <summary>
        /// Metadata of the exception.
        /// </summary>
        /// <remarks>As every metadata becomes a part of blockchain, which is replicated database
        /// on the network, for the equivalent exception, the same metadata should be extracted.
        /// </remarks>
        [Pure]
        public IValue Metadata { get; }
    }
}
