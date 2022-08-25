using System;
using Libplanet.Assets;

namespace Libplanet.Action
{
    /// <summary>
    /// The exception that is thrown when a <see cref="TransactionSigner"/> has no rights
    /// to mint a <see cref="Currency"/> or burn assets of a <see cref="Currency"/>.
    /// </summary>
    /// <seealso cref="IAccountStateDelta.MintAsset"/>
    /// <seealso cref="IAccountStateDelta.BurnAsset"/>
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
        /// <param name="currency"> The <see cref="Assets.Currency"/> to be tried to be minted
        /// or burned by the <paramref name="transactionSigner"/>.  Corresponds to
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
        /// The <see cref="Assets.Currency"/> to be tried to be minted or burned by
        /// the <see cref="TransactionSigner"/>.
        /// </summary>
        public Currency Currency { get; }
    }
}
