namespace Libplanet.Action
{
    public class SystemAccountsGetter : ISystemAccountsGetter
    {
        public SystemAccountsGetter(AccountAddressGetter feeAccountGetter)
        {
            FeeAccountGetter = feeAccountGetter;
        }

        public AccountAddressGetter FeeAccountGetter { get; }
    }
}
