#nullable enable
using System;
using System.Numerics;

namespace Libplanet.Action
{
    /// <summary>
    /// The exception that is thrown when a sender has less <see cref="Balance"/> than amount to
    /// transfer or an owner has less <see cref="Balance"/> than amount to burn.
    /// </summary>
    /// <seealso cref="IAccountStateDelta.TransferAsset"/>
    /// <seealso cref="IAccountStateDelta.BurnAsset"/>
    [Serializable]
    public sealed class InsufficientBalanceException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="InsufficientBalanceException"/> object.
        /// </summary>
        /// <param name="address">The owner of the insufficient <paramref name="balance"/>.
        /// Corresponds to the <see cref="Address"/> property.</param>
        /// <param name="currency">The <see cref="Libplanet.Currency"/> of the insufficient
        /// <paramref name="balance"/>.  Corresponds to the <see cref="Currency"/> property.</param>
        /// <param name="balance">The account's current balance of the <paramref name="currency"/>.
        /// Corresponds to the <see cref="Balance"/> property.</param>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        public InsufficientBalanceException(
            Address address,
            Currency currency,
            BigInteger balance,
            string? message
        )
            : base(message)
        {
            Address = address;
            Currency = currency;
            Balance = balance;
        }

        /// <summary>
        /// The owner of the insufficient <see cref="Balance"/>.
        /// </summary>
        public Address Address { get; }

        /// <summary>
        /// The <see cref="Libplanet.Currency"/> of the insufficient <see cref="Balance"/>.
        /// </summary>
        public Currency Currency { get; }

        /// <summary>
        /// The account's current balance of the <see cref="Currency"/>.
        /// </summary>
        public BigInteger Balance { get; }
    }
}
