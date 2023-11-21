using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.Action
{
    public interface ISystemAccounts
    {
        /// <summary>
        /// <see cref="Address"/> of <see cref="IAccountState"/> that stores state metadata.
        /// </summary>
        public Address StateMetadataAccount { get; }

        /// <summary>
        /// <see cref="Address"/> of <see cref="IAccountState"/> that stores
        /// <see cref="Types.Consensus.ValidatorSet"/>.
        /// </summary>
        public Address ValidatorSetAccount { get; }

        /// <summary>
        /// <see cref="Address"/> of <see cref="IAccountState"/> that
        /// stores default <see cref="IAccountState"/>.
        /// </summary>
        public Address DefaultAccount { get; }

        /// <summary>
        /// <see cref="Address"/> of <see cref="IAccountState"/> that
        /// stores <see cref="Types.Assets.FungibleAssetValue"/> used as fee on
        /// <see cref="IFeeCollector"/>.
        /// </summary>
        public Address FeeAccount { get; }
    }
}
