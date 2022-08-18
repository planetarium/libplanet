using System;
using System.Runtime.Serialization;
using Libplanet.Assets;
using Libplanet.Serialization;

namespace Libplanet.Action
{
    /// <summary>
    /// The exception thrown when a minter tries to mint a currency such that the resulting total
    /// supply exceed the maximum amount.
    /// </summary>
    /// <seealso cref="IAccountStateDelta.MintAsset"/>
    [Serializable]
    public sealed class SupplyOverflowException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="SupplyOverflowException"/> object.
        /// </summary>
        /// <param name="amount">The attempted amount to be minted.
        /// Corresponds to the <see cref="Amount"/> property.</param>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        public SupplyOverflowException(
            FungibleAssetValue amount,
            string? message
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
