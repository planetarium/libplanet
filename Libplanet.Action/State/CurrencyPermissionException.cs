using System;
using Libplanet.Crypto;
using Libplanet.Types.Assets;

namespace Libplanet.Action.State
{
    /// <summary>
    /// The exception that is thrown when a <see cref="TransactionSigner"/> has no rights
    /// to mint a <see cref="Currency"/> or burn assets of a <see cref="Currency"/>.
    /// </summary>
    /// <seealso cref="IAccount.MintAsset"/>
    /// <seealso cref="IAccount.BurnAsset"/>
    [Serializable]
    public sealed class CurrencyPermissionException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="CurrencyPermissionException"/> object.
        /// </summary>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        /// <param name="transactionSigner"> The address of the account who tried to mint or burn
        /// assets of a <paramref name="currency"/>.  Corresponds to
        /// the <see cref="TransactionSigner"/> property.</param>
        /// <param name="currency"> The <see cref="Common.Types.Assets.Currency"/> to be tried
        /// to be minted or burned by the <paramref name="transactionSigner"/>.  Corresponds to
        /// the <see cref="Currency"/> property.</param>
        public CurrencyPermissionException(
            string? message,
            Address transactionSigner,
            Currency currency
        )
            : base(message)
        {
            TransactionSigner = transactionSigner;
            Currency = currency;
        }

        /// <summary>
        /// The address of the account who tried to mint or burn assets of a <see cref="Currency"/>.
        /// </summary>
        public Address TransactionSigner { get; }

        /// <summary>
        /// The <see cref="Common.Types.Assets.Currency"/> to be tried to be minted or burned by
        /// the <see cref="TransactionSigner"/>.
        /// </summary>
        public Currency Currency { get; }
    }
}
