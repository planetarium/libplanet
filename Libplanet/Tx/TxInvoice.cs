using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json.Serialization;
using Libplanet.Assets;
using Libplanet.Blocks;

namespace Libplanet.Tx
{
    /// <summary>
    /// A concrete implementation of <see cref="ITxInvoice"/>.
    /// </summary>
    /// <seealso cref="ITxInvoice"/>
    /// <seealso cref="TxSigningMetadata"/>
    /// <seealso cref="UnsignedTx"/>
    /// <seealso cref="Transaction"/>
    public sealed class TxInvoice : ITxInvoice, IEquatable<TxInvoice>
    {
        /// <summary>
        /// Creates a new <see cref="TxInvoice"/> instance by filling data for its fields.
        /// </summary>
        /// <param name="genesisHash">The value for <see cref="GenesisHash"/>.</param>
        /// <param name="updatedAddresses">The value for <see cref="UpdatedAddresses"/>.</param>
        /// <param name="timestamp">The value for <see cref="Timestamp"/>.</param>
        /// <param name="actions">The value of <see cref="Actions"/>.</param>
        /// <param name="maxGasPrice">The value of <see cref="MaxGasPrice"/>.</param>
        /// <param name="gasLimit">The value of <see langword="Gas"/> limit.</param>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="updatedAddresses"/>
        /// or <paramref name="actions"/> is <see langword="null"/>.</exception>
        public TxInvoice(
            BlockHash? genesisHash,
            IImmutableSet<Address> updatedAddresses,
            DateTimeOffset timestamp,
            TxActionList actions,
            FungibleAssetValue? maxGasPrice,
            long? gasLimit)
        {
            if (updatedAddresses is null)
            {
                throw new ArgumentNullException(nameof(updatedAddresses));
            }

            GenesisHash = genesisHash;
            UpdatedAddresses = updatedAddresses is AddressSet set
                ? set
                : new AddressSet(updatedAddresses);
            Timestamp = timestamp;
            Actions = actions ?? throw new ArgumentNullException(nameof(actions));
            MaxGasPrice = maxGasPrice;
            GasLimit = gasLimit;
        }

        /// <summary>
        /// Creates a new <see cref="TxInvoice"/> instance by filling data for its fields.  There
        /// are some default values for some fields.
        /// </summary>
        /// <param name="genesisHash">The value for <see cref="GenesisHash"/>.</param>
        /// <param name="updatedAddresses">The value for <see cref="UpdatedAddresses"/>.
        /// Empty by default.</param>
        /// <param name="timestamp">The value for <see cref="Timestamp"/>.
        /// Time of creation by default.</param>
        /// <param name="actions">The value of <see cref="Actions"/>.
        /// <see cref="TxActionList"/> by default.</param>
        /// <param name="maxGasPrice">The value of <see cref="MaxGasPrice"/>.</param>
        /// <param name="gasLimit">The value of <see langword="Gas"/> limit.</param>
        public TxInvoice(
            BlockHash? genesisHash = null,
            IEnumerable<Address>? updatedAddresses = null,
            DateTimeOffset? timestamp = null,
            TxActionList? actions = null,
            FungibleAssetValue? maxGasPrice = null,
            long? gasLimit = null
        )
            : this(
                genesisHash,
                updatedAddresses?.ToImmutableHashSet() ?? ImmutableHashSet<Address>.Empty,
                timestamp ?? DateTimeOffset.UtcNow,
                actions ?? TxActionList.Empty,
                maxGasPrice,
                gasLimit
            )
        {
        }

        /// <summary>
        /// Creates a new <see cref="TxInvoice"/> instance by copying everything from another
        /// <paramref name="invoice"/>.
        /// </summary>
        /// <param name="invoice">Another invoice to copy data from.</param>
        public TxInvoice(ITxInvoice invoice)
            : this(
                  genesisHash: invoice.GenesisHash,
                  updatedAddresses: invoice.UpdatedAddresses,
                  timestamp: invoice.Timestamp,
                  actions: invoice.Actions,
                  maxGasPrice: invoice.MaxGasPrice,
                  gasLimit: invoice.GasLimit)
        {
        }

        /// <inheritdoc cref="ITxInvoice.GenesisHash" />
        public BlockHash? GenesisHash { get; }

        /// <inheritdoc cref="ITxInvoice.UpdatedAddresses" />
        public IImmutableSet<Address> UpdatedAddresses { get; }

        /// <inheritdoc cref="ITxInvoice.Timestamp" />
        public DateTimeOffset Timestamp { get; }

        /// <inheritdoc cref="ITxInvoice.Actions" />
        [JsonConverter(typeof(TxActionListJsonConverter))]
        public TxActionList Actions { get; }

        /// <inheritdoc cref="ITxInvoice.MaxGasPrice" />
        public FungibleAssetValue? MaxGasPrice { get; }

        /// <inheritdoc cref="ITxInvoice.GasLimit" />
        public long? GasLimit { get; }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        bool IEquatable<ITxInvoice>.Equals(ITxInvoice? other) =>
            other is { } o &&
            (o.GenesisHash is { } otherGenesisHash
                ? otherGenesisHash.Equals(GenesisHash)
                : GenesisHash is null) &&
            o.UpdatedAddresses.SetEquals(UpdatedAddresses) &&
            o.Timestamp.Equals(Timestamp) &&
            o.Actions.Equals(Actions) &&
            o.MaxGasPrice.Equals(MaxGasPrice) &&
            o.GasLimit.Equals(GasLimit);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(TxInvoice? other) =>
            other is ITxInvoice otherInvoice && otherInvoice.Equals(this);

        /// <inheritdoc cref="object.Equals(object?)"/>
        [Pure]
        public override bool Equals(object? obj) =>
            obj is ITxInvoice other && ((ITxInvoice)this).Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
        public override int GetHashCode() =>
            HashCode.Combine(
                GenesisHash,
                UpdatedAddresses,
                Timestamp,
                Actions,
                MaxGasPrice,
                GasLimit
            );

        /// <inheritdoc cref="object.ToString()"/>
        [Pure]
        public override string ToString()
        {
            string actions = Actions.ToString() ?? string.Empty;
            string indentedActions = actions.Replace("\n", "\n  ");
            return nameof(TxInvoice) + " {\n" +
                $"  {nameof(UpdatedAddresses)} = ({UpdatedAddresses.Count})" +
                (UpdatedAddresses.Any()
                    ? $"\n    {string.Join("\n    ", UpdatedAddresses)},\n"
                    : ",\n") +
                $"  {nameof(Timestamp)} = {Timestamp},\n" +
                $"  {nameof(GenesisHash)} = {GenesisHash?.ToString() ?? "(null)"},\n" +
                $"  {nameof(Actions)} = {indentedActions},\n" +
                "}";
        }
    }
}
