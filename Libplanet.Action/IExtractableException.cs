using System.Diagnostics.Contracts;
using Bencodex.Types;
using Libplanet.Tx;

namespace Libplanet.Action
{
    /// <summary>
    /// Marks an exception type as able to extract its metadata, so that these metadata can be
    /// stored as a part of <see cref="TxFailure"/>.
    /// </summary>
    /// <seealso cref="TxFailure.ExceptionMetadata"/>
    public interface IExtractableException
    {
        /// <summary>
        /// Metadata of the exception.  It purposes to store these metadata as a part of
        /// <see cref="TxFailure"/>.
        /// </summary>
        /// <remarks>As every metadata becomes a part of blockchain, which is replicated database
        /// on the network, for the equivalent exception, the same metadata should be extracted.
        /// </remarks>
        [Pure]
        public IValue Metadata { get; }
    }
}
