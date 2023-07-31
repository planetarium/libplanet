using System;
using System.Runtime.Serialization;
using Libplanet.Common.Serialization;
using Libplanet.Crypto;
using Libplanet.Types.Assets;

namespace Libplanet.Action.State
{
    /// <summary>
    /// The exception that is thrown when a sender has less <see cref="Balance"/> than amount to
    /// transfer or an owner has less <see cref="Balance"/> than amount to burn.
    /// </summary>
    /// <seealso cref="IAccount.TransferAsset"/>
    /// <seealso cref="IAccount.BurnAsset"/>
    [Serializable]
    public sealed class InsufficientBalanceException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="InsufficientBalanceException"/> object.
        /// </summary>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        /// <param name="address">The owner of the insufficient <paramref name="balance"/>.
        /// Corresponds to the <see cref="Address"/> property.</param>
        /// <param name="balance">The account's current balance.
        /// Corresponds to the <see cref="Balance"/> property.</param>
        public InsufficientBalanceException(
            string? message,
            Address address,
            FungibleAssetValue balance
        )
            : base(message)
        {
            Address = address;
            Balance = balance;
        }

        private InsufficientBalanceException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            Address = info.GetValue<Address>(nameof(Address));
            Balance = info.GetValue<FungibleAssetValue>(nameof(Balance));
        }

        /// <summary>
        /// The owner of the insufficient <see cref="Balance"/>.
        /// </summary>
        public Address Address { get; }

        /// <summary>
        /// The account's current balance.
        /// </summary>
        public FungibleAssetValue Balance { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);

            info.AddValue(nameof(Address), Address);
            info.AddValue(nameof(Balance), Balance);
        }
    }
}
