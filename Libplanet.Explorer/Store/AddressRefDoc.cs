#nullable disable
using System;
using Libplanet.Tx;
using LiteDB;

namespace Libplanet.Explorer.Store
{
    internal class AddressRefDoc
    {
        [BsonId]
        public string Id => AddressString + "_" + TxId.ToHex();

        public string AddressString { get; set; }

        [BsonIgnore]
        public Address Address
        {
            get => new Address(AddressString);
            set { AddressString = value.ToHex().ToLowerInvariant(); }
        }

        public TxId TxId { get; set; }

        public long TxNonce { get; set; }
    }
}
