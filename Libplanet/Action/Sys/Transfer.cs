using System;
using System.Text.Json.Serialization;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A system action that transfers the ownership of specified <see cref="Amount"/> of tokens to
    /// another account.
    /// </summary>
    /// <remarks>Only native tokens can be transferred.</remarks>
    [JsonConverter(typeof(SysActionJsonConverter))]
    public sealed class Transfer : IAction, IEquatable<Transfer>, IEquatable<IAction>
    {
        /// <summary>
        /// Creates a new instance of <see cref="Transfer"/> action.
        /// </summary>
        /// <param name="recipient">The address of the recipient.</param>
        /// <param name="amount">The amount of the asset to be transferred.</param>
        public Transfer(Address recipient, FungibleAssetValue amount)
        {
            Recipient = recipient;
            Amount = amount;
        }

        internal Transfer()
        {
            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
        }

        /// <summary>
        /// The address of the recipient.
        /// </summary>
        public Address Recipient { get; private set; }

        /// <summary>
        /// The amount of the asset to be transferred.
        /// </summary>
        public FungibleAssetValue Amount { get; private set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("recipient", Recipient.ByteArray)
            .Add("currency", Amount.Currency.Serialize())
            .Add("amount", new Bencodex.Types.Integer(Amount.RawValue));

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Bencodex.Types.Dictionary)plainValue;
            Recipient = new Address(dict.GetValue<IValue>("recipient"));
            Amount = new FungibleAssetValue(
                new Currency(dict["currency"]),
                dict.GetValue<Bencodex.Types.Integer>("amount")
            );
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            if (!context.IsNativeToken(Amount.Currency))
            {
                var message =
                    $"System action {nameof(Transfer)} only accepts native tokens, " +
                    $"but {Amount.Currency} is not native.";
                throw new NonNativeTokenException(Amount.Currency, message);
            }

            return context.PreviousStates.TransferAsset(
                context.Signer,
                Recipient,
                Amount,
                allowNegativeBalance: false
            );
        }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(Transfer? other) =>
            other is { } o && Recipient.Equals(o.Recipient) && Amount.Equals(o.Amount);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(IAction? other) => other is Transfer o && Equals(o);

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object? obj) => obj is Transfer o && Equals(o);

        /// <inheritdoc cref="object.GetHashCode()"/>
        public override int GetHashCode() => HashCode.Combine(Recipient, Amount);
    }
}
