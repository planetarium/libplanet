using Libplanet.Crypto;
using Libplanet.Types.Blocks;

namespace Libplanet.Action
{
    /// <summary>
    /// A delegate to determine <see cref="Address"/> of account with
    /// <see cref="IPreEvaluationBlockHeader"/>.
    /// </summary>
    /// <param name="blockHeader"><see cref="IPreEvaluationBlockHeader"/> to determine
    /// account <see cref="Address"/>.</param>
    /// <returns>Retrieved <see cref="Address"/> of account.</returns>
    public delegate Address AccountAddressGetter(IPreEvaluationBlockHeader blockHeader);

    /// <summary>
    /// Set of <see cref="AccountAddressGetter"/> for <see cref="ISystemAccounts"/>
    /// that have to be defined on the application.
    /// </summary>
    public interface ISystemAccountsGetter
    {
        public AccountAddressGetter FeeAccountGetter { get; }
    }
}
