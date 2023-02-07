using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Numerics;
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
        /// <param name="actionsLogsList">The logs recorded while executing actions.</param>
        /// <param name="updatedStates">The states delta made by the actions in
        /// the transaction within the block.</param>
        /// <param name="fungibleAssetsDelta"><see cref="Address"/>es and sets of
        /// <see cref="Currency"/> whose fungible assets have been updated by the actions in
        /// the transaction within the block.  Included <see cref="FungibleAssetValue"/>s are
        /// the delta values (plus or minus) that the transaction makes.</param>
        /// <param name="updatedFungibleAssets"><see cref="Address"/>es and sets of
        /// <see cref="Currency"/> whose fungible assets have been updated by the actions in
        /// the transaction within the block.  Included <see cref="FungibleAssetValue"/>s are
        /// the final balances right after the transaction is executed.</param>
        public TxSuccess(
            BlockHash blockHash,
            TxId txId,
            List<List<string>>? actionsLogsList,
            IImmutableDictionary<Address, IValue?> updatedStates,
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>> fungibleAssetsDelta,
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>
                updatedFungibleAssets
        )
            : base(blockHash, txId, actionsLogsList)
        {
            UpdatedStates = updatedStates;
            FungibleAssetsDelta = fungibleAssetsDelta;
            UpdatedFungibleAssets = updatedFungibleAssets;
        }

        private TxSuccess(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            var updatedStates =
                (Dictionary)_codec.Decode(info.GetValue<byte[]>(nameof(UpdatedStates)));
            UpdatedStates = updatedStates.ToImmutableDictionary(
                kv => new Address(kv.Key),
                kv => kv.Value is List l && l.Any() ? l[0] : null
            );
            FungibleAssetsDelta = DecodeFungibleAssetGroups(
                info.GetValue<byte[]>(nameof(FungibleAssetsDelta))
            );
            UpdatedFungibleAssets = DecodeFungibleAssetGroups(
                info.GetValue<byte[]>(nameof(UpdatedFungibleAssets))
            );
        }

        /// <summary>
        /// The states delta made by the actions in the transaction within the block.
        /// </summary>
        [Pure]
        public IImmutableDictionary<Address, IValue?> UpdatedStates { get; }

        /// <summary>
        /// <see cref="Address"/>es and sets of
        /// <see cref="Currency"/> whose fungible assets have been updated by the actions in
        /// the transaction within the block.  Included <see cref="FungibleAssetValue"/>s are
        /// the delta values (plus or minus) that the transaction makes.
        /// </summary>
        [Pure]
        public IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>
            FungibleAssetsDelta { get; }

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
                _codec.Encode(
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
                nameof(FungibleAssetsDelta),
                EncodeFungibleAssetGroups(FungibleAssetsDelta)
            );
            info.AddValue(
                nameof(UpdatedFungibleAssets),
                EncodeFungibleAssetGroups(UpdatedFungibleAssets)
            );
        }

        private static byte[] EncodeFungibleAssetGroups(
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>> g
        ) =>
            _codec.Encode(
                new Dictionary(
                    g.Select(kv =>
                        new KeyValuePair<Binary, List>(
                            kv.Key.ByteArray,
                            new List(
                                kv.Value.Select(fav =>
                                    List.Empty
                                        .Add(fav.Key.Serialize())
                                        .Add(fav.Value.RawValue)
                                )
                            )
                        )
                    )
                )
            );

        private static IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>
        DecodeFungibleAssetGroups(byte[] encoded) =>
            ((Dictionary)_codec.Decode(encoded)).ToImmutableDictionary(
                kv => new Address(kv.Key),
                kv => (IImmutableDictionary<Currency, FAV>)((List)kv.Value)
                    .Cast<List>()
                    .Select(pair => (new Currency(pair[0]), (Bencodex.Types.Integer)pair[1]))
                    .ToImmutableDictionary(
                        pair => pair.Item1,
                        pair => FungibleAssetValue.FromRawValue(pair.Item1, (BigInteger)pair.Item2)
                    )
            );
    }
}
