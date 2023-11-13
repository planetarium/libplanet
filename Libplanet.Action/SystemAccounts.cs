using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;

namespace Libplanet.Action
{
    public class SystemAccounts : ISystemAccounts
    {
        private readonly ISystemAccountsGetter _systemAccountsGetter;
        private readonly IPreEvaluationBlockHeader _blockHeader;

        public SystemAccounts(
            ISystemAccountsGetter systemAccountsGetter,
            IPreEvaluationBlockHeader blockHeader)
        {
            _systemAccountsGetter = systemAccountsGetter;
            _blockHeader = blockHeader;
        }

        /// <inheritdoc cref="ISystemAccounts.StateMetadataAccount"/>
        public Address StateMetadataAccount => ReservedAddresses.StateMetadataAccount;

        /// <inheritdoc cref="ISystemAccounts.ValidatorSetAccount"/>
        public Address ValidatorSetAccount => ReservedAddresses.ValidatorSetAccount;

        /// <inheritdoc cref="ISystemAccounts.DefaultAccount"/>
        public Address DefaultAccount => ReservedAddresses.DefaultAccount;

        /// <inheritdoc cref="ISystemAccounts.FeeAccount"/>
        public Address FeeAccount => _systemAccountsGetter.FeeAccountGetter(_blockHeader);
    }
}
