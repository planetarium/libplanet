using System;
using System.Runtime.Serialization;
using Libplanet.Common.Serialization;
using Libplanet.Types.Assets;

namespace Libplanet.Action.State
{
    /// <summary>
    /// The exception thrown when a minter tries to mint a currency such that the resulting total
    /// supply exceed the maximum amount.
    /// </summary>
    /// <seealso cref="IAccount.MintAsset"/>
    [Serializable]
    public sealed class SupplyOverflowException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="SupplyOverflowException"/> object.
        /// </summary>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        /// <param name="amount">The attempted amount to be minted.
        /// Corresponds to the <see cref="Amount"/> property.</param>
        public SupplyOverflowException(
            string? message,
            FungibleAssetValue amount
        )
            : base(message)
        {
            Amount = amount;
        }

        private SupplyOverflowException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            Amount = info.GetValue<FungibleAssetValue>(nameof(Amount));
        }

        /// <summary>
        /// The attempted amount to be minted.
        /// </summary>
        public FungibleAssetValue Amount { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);

            info.AddValue(nameof(Amount), Amount);
        }
    }
}
