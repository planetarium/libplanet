using Libplanet.Common.Types.Blocks;
using Libplanet.Common.Types.Tx;
using LiteDB;

namespace Libplanet.Explorer.Store
{
    internal class TxRefDoc
    {
        [BsonId]
        public string Id => TxId + "_" + BlockHash;

        public BlockHash BlockHash { get; set; }

        public long BlockIndex { get; set; }

        public TxId TxId { get; set; }
    }
}
