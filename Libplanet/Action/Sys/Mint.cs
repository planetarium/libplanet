using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A system action that mints specified <see cref="Amount"/> of tokens to a given
    /// <see cref="Recipient"/>.
    /// </summary>
    /// <remarks>Only native tokens can be minted.</remarks>
    public sealed class Mint : IAction
    {
        /// <summary>
        /// Creates a new instance of <see cref="Mint"/> action.
        /// </summary>
        /// <param name="recipient">The address of the recipient to receive the minted tokens.
        /// </param>
        /// <param name="amount">The amount of the asset to be minted.</param>
        public Mint(Address recipient, FungibleAssetValue amount)
        {
            Recipient = recipient;
            Amount = amount;
        }

        internal Mint()
        {
            // Used only for deserialization.  See also class Libplanet.Action.Sys.Registry.
        }

        /// <summary>
        /// The address of the recipient to receive the minted tokens.
        /// </summary>
        public Address Recipient { get; private set; }

        /// <summary>
        /// The amount of the asset to be minted.
        /// </summary>
        public FungibleAssetValue Amount { get; private set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Bencodex.Types.Dictionary.Empty
            .Add("recipient", Recipient.ByteArray)
            .Add("currency", Amount.Currency.Serialize())
            .Add("amount", (IValue)new Bencodex.Types.Integer(Amount.RawValue));

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Bencodex.Types.Dictionary)plainValue;
            Recipient = new Address(dict.GetValue<Binary>("recipient"));
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
                    $"System action {nameof(Mint)} only accepts native tokens, " +
                    $"but {Amount.Currency} is not native.";
                throw new NonNativeTokenException(Amount.Currency, message);
            }

            return context.PreviousStates.MintAsset(Recipient, Amount);
        }
    }
}
