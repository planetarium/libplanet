#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.Serialization;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Serialization;
using FAV = Libplanet.Assets.FungibleAssetValue;

namespace Libplanet.Tx
{
    /// <summary>
    /// Summarizes an execution result of a successful <see cref="Transaction{T}"/>.
    /// </summary>
    [Serializable]
    public sealed class TxSuccess : TxExecution, ISerializable
    {
        /// <summary>
        /// Creates a <see cref="TxSuccess"/> instance.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> of the <see cref="Block{T}"/>
        /// that the <see cref="Transaction{T}"/> is executed within.</param>
        /// <param name="txId">The executed <see cref="Transaction{T}"/>'s <see
        /// cref="Transaction{T}.Id"/>.</param>
        /// <param name="updatedStates">The states delta made by the actions in
        /// the transaction within the block.</param>
        /// <param name="updatedFungibleAssets"><see cref="Address"/>es and sets of
        /// <see cref="Currency"/> whose fungible assets have been updated by the actions in
        /// the transaction within the block.  Included <see cref="FungibleAssetValue"/>s are
        /// the final balances right after the transaction is executed.</param>
        public TxSuccess(
            BlockHash blockHash,
            TxId txId,
            IImmutableDictionary<Address, IValue?> updatedStates,
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>> updatedFungibleAssets
        )
            : base(blockHash, txId)
        {
            UpdatedStates = updatedStates;
            UpdatedFungibleAssets = updatedFungibleAssets;
        }

        private TxSuccess(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            var updatedStates =
                (Dictionary)Codec.Decode(info.GetValue<byte[]>(nameof(UpdatedAddresses)));
            UpdatedStates = updatedStates.ToImmutableDictionary(
                kv => new Address((Binary)kv.Key),
                kv => kv.Value is List l && l.Any() ? l[0] : null
            );
            UpdatedFungibleAssets = info
                .GetValue<Dictionary<Address, Dictionary<Currency, FAV>>>(
                    nameof(UpdatedFungibleAssets))
                .SelectWithinValues(c =>
                    (IImmutableDictionary<Currency, FAV>)c.ToImmutableDictionary())
                .ToImmutableDictionary();
        }

        /// <summary>
        /// The states delta made by the actions in the transaction within the block.
        /// </summary>
        [Pure]
        public IImmutableDictionary<Address, IValue?> UpdatedStates { get; }

        /// <summary>
        /// <see cref="Address"/>es and sets of <see cref="Currency"/> whose fungible assets have
        /// been updated by the actions in the transaction within the block.  Included
        /// <see cref="FungibleAssetValue"/>s are the final balances right after the transaction is
        /// executed.
        /// </summary>
        [Pure]
        public IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>
            UpdatedFungibleAssets { get; }

        /// <summary>
        /// All <seealso cref="Address"/>es of the accounts that have been updated by the actions
        /// in the transaction within the block.
        /// </summary>
        [Pure]
        public IImmutableSet<Address> UpdatedAddresses =>
            UpdatedStates.Keys.ToImmutableHashSet().Union(UpdatedFungibleAssets.Keys);

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(
                nameof(UpdatedStates),
                Codec.Encode(
                    new Dictionary(
                        UpdatedStates.Select(kv =>
                            new KeyValuePair<IKey, IValue>(
                                new Binary(kv.Key.ToByteArray()),
                                kv.Value is { } v ? List.Empty.Add(v) : List.Empty
                            )
                        )
                    )
                )
            );
            info.AddValue(
                nameof(UpdatedFungibleAssets),
                UpdatedFungibleAssets.ToDictionary(
                    kv => kv.Key,
                    kv => kv.Value.ToDictionary(kv => kv.Key, kv => kv.Value)
                )
            );
        }
    }
}
