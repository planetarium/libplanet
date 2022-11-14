using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tx
{
    /// <summary>
    /// Similar to <see cref="ITxExcerpt"/> except that it has <see cref="Signature"/>,
    /// <see cref="SystemAction"/> and <see cref="CustomActions"/> as well.
    /// </summary>
    public interface ITransaction : ITxExcerpt
    {
        /// <summary>
        /// A digital signature of the content of this <see cref="ITransaction"/>.
        /// </summary>
        public byte[] Signature { get; }

        /// <summary>
        /// A system action (if any) that this <see cref="ITransaction"/> contains.
        /// </summary>
        /// <remarks>It is similar with <see cref="Transaction{T}.SystemAction"/> but
        /// it is non-generic.  (i.e., it doesn't require to deserialize the system action to
        /// <see cref="IAction"/> while serialization.</remarks>
        public Dictionary? SystemAction { get; }

        /// <summary>
        /// Zero or more user-defined custom actions that this <see cref="ITransaction"/>
        /// contains.
        /// </summary>
        /// <remarks>It is similar with <see cref="Transaction{T}.CustomActions"/> but
        /// it is non-generic.  (i.e., it doesn't require to deserialize the custom actions to
        /// <see cref="IAction"/> while serialization.</remarks>
        public IImmutableList<IValue>? CustomActions { get; }
    }
}
