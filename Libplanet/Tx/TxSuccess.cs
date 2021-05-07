#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Serialization;

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
        /// <param name="stateRootHash">The state root hash of the immediately after the transaction
        /// is executed.</param>
        /// <param name="stateUpdatedAddresses">The keys of the states updated by the actions in
        /// the transaction within the block.</param>
        /// <param name="updatedFungibleAssets"><see cref="Address"/>es and sets of
        /// <see cref="Currency"/> whose fungible assets have been updated by the actions in
        /// the transaction within the block.</param>
        public TxSuccess(
            BlockHash blockHash,
            TxId txId,
            HashDigest<SHA256> stateRootHash,
            IImmutableSet<Address> stateUpdatedAddresses,
            IImmutableDictionary<Address, IImmutableSet<Currency>> updatedFungibleAssets
        )
            : base(blockHash, txId)
        {
            StateRootHash = stateRootHash;
            StateUpdatedAddresses = stateUpdatedAddresses;
            UpdatedFungibleAssets = updatedFungibleAssets;
        }

        private TxSuccess(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            StateRootHash = info.GetValue<HashDigest<SHA256>>(nameof(StateRootHash));
            StateUpdatedAddresses = info
                .GetValue<HashSet<Address>>(nameof(UpdatedAddresses))
                .ToImmutableHashSet();
            UpdatedFungibleAssets = info
                .GetValue<Dictionary<Address, HashSet<Currency>>>(nameof(UpdatedFungibleAssets))
                .SelectWithinValues(c => (IImmutableSet<Currency>)c.ToImmutableHashSet())
                .ToImmutableDictionary();
        }

        /// <summary>
        /// The state root hash of the immediately after the transaction is executed.
        /// </summary>
        [Pure]
        public HashDigest<SHA256> StateRootHash { get; }

        /// <summary>
        /// The keys of the states updated by the actions in the transaction within the block.
        /// </summary>
        [Pure]
        public IImmutableSet<Address> StateUpdatedAddresses { get; }

        /// <summary>
        /// <see cref="Address"/>es and sets of <see cref="Currency"/> whose fungible assets have
        /// been updated by the actions in the transaction within the block.
        /// </summary>
        [Pure]
        public IImmutableDictionary<Address, IImmutableSet<Currency>> UpdatedFungibleAssets { get; }

        /// <summary>
        /// All <seealso cref="Address"/>es of the accounts that have been updated by the actions
        /// in the transaction within the block.
        /// </summary>
        [Pure]
        public IImmutableSet<Address> UpdatedAddresses =>
            StateUpdatedAddresses.Union(UpdatedFungibleAssets.Keys);

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(StateRootHash), StateRootHash.ToByteArray());
            info.AddValue(nameof(StateUpdatedAddresses), StateUpdatedAddresses.ToList());
            info.AddValue(
                nameof(UpdatedFungibleAssets),
                UpdatedFungibleAssets.ToDictionary(
                    kv => kv.Key,
                    kv => new HashSet<Currency>(kv.Value)
                )
            );
        }
    }
}
