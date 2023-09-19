using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using FAV = Libplanet.Types.Assets.FungibleAssetValue;

namespace Libplanet.Types.Tx
{
    /// <summary>
    /// Summarizes an execution result of a successful <see cref="Transaction"/>.
    /// </summary>
    public sealed class TxSuccess : TxExecution
    {
        /// <summary>
        /// Creates a <see cref="TxSuccess"/> instance.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block.Hash"/> of the <see cref="Block"/>
        /// that the <see cref="Transaction"/> is executed within.</param>
        /// <param name="txId">The executed <see cref="Transaction"/>'s <see
        /// cref="Transaction.Id"/>.</param>
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
            IImmutableDictionary<Address, IValue> updatedStates,
            IImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>
                updatedFungibleAssets
        )
            : base(blockHash, txId)
        {
            UpdatedStates = updatedStates;
            UpdatedFungibleAssets = updatedFungibleAssets;
        }

        /// <summary>
        /// The states delta made by the actions in the transaction within the block.
        /// </summary>
        [Pure]
        public IImmutableDictionary<Address, IValue> UpdatedStates { get; }

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
    }
}
