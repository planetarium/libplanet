using System.Security.Cryptography;
using Libplanet.Tx;
using LiteDB;

namespace Libplanet.Explorer.Store
{
    internal class TxRefDoc
    {
        [BsonId]
        public string Id => TxId + "_" + BlockHash;

        public HashDigest<SHA256> BlockHash { get; set; }

        public long BlockIndex { get; set; }

        public TxId TxId { get; set; }
    }
}
