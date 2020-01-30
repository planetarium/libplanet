using System;
using Libplanet.Tx;
using LiteDB;

namespace Libplanet.Explorer.Store
{
    public class AddressRefDoc
    {
        [BsonId]
        public string Id => AddressString + "_" + TxId.ToHex();

        public string AddressString { get; set; }

        [BsonIgnore]
        public Address Address
        {
            get => new Address(AddressString);
            set { AddressString = value.ToString(); }
        }

        public TxId TxId { get; set; }

        public DateTimeOffset Timestamp { get; set; }
    }
}
