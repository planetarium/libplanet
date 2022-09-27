#nullable disable
using System;
using System.Collections.Generic;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet.Explorer.Store
{
    public interface IRichStore : IStore
    {
        void StoreTxReferences(TxId txId, in BlockHash blockHash, long blockIndex);

        IEnumerable<(TxId, BlockHash)> IterateTxReferences(
            TxId? txId = null,
            bool desc = false,
            int offset = 0,
            int limit = int.MaxValue);

        void StoreSignerReferences(TxId txId, long txNonce, Address signer);

        IEnumerable<TxId> IterateSignerReferences(
            Address signer,
            bool desc,
            int offset = 0,
            int limit = int.MaxValue);

        void StoreUpdatedAddressReferences(
            TxId txId,
            long txNonce,
            Address updatedAddress);

        IEnumerable<TxId> IterateUpdatedAddressReferences(
            Address updatedAddress,
            bool desc,
            int offset = 0,
            int limit = int.MaxValue);
    }
}
