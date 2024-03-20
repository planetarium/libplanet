using Libplanet.Crypto;

namespace Libplanet.Types.Consensus
{
    /// <summary>
    /// An <see langword="interface"/> for the <see cref="Lot"/>.
    /// </summary>
    public interface ILot : ILotMetadata
    {
        /// <summary>
        /// <see cref="Crypto.PublicKey"/> that proved an <see cref="ILotMetadata"/>.
        /// <see cref="Proof"/> can be verified by it.
        /// </summary>
        public PublicKey PublicKey { get; }

        /// <summary>
        /// <see cref="Crypto.Proof"/> that has been proved by <see cref="PublicKey"/>.
        /// </summary>
        public Proof Proof { get; }
    }
}
