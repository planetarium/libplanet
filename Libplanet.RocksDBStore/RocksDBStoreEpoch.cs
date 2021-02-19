using Bencodex;
using Bencodex.Types;

namespace Libplanet.RocksDBStore
{
    public class RocksDBStoreEpoch
    {
        public static readonly byte[] EpochTypeKey = { 0x74 }; // 'k'
        public static readonly byte[] DbNameKey = { 0x64 }; // 'd'

        private readonly string _epochType;
        private readonly string _dbName;

        public RocksDBStoreEpoch(string epochType, string dbName)
        {
            _epochType = epochType;
            _dbName = dbName;
        }

        private RocksDBStoreEpoch(Dictionary dict)
        : this(
            dict.GetValue<Text>(EpochTypeKey).Value,
            dict.GetValue<Text>(DbNameKey).Value)
        {
        }

        public string EpochType => _epochType;

        public string DbName => _dbName;

        public static RocksDBStoreEpoch Deserialize(byte[] bytes)
        {
            IValue value = new Codec().Decode(bytes);
            if (!(value is Bencodex.Types.Dictionary dict))
            {
                throw new DecodingException(
                    $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                    $"{value.GetType()}");
            }

            return new RocksDBStoreEpoch(dict);
        }

        public byte[] Serialize()
        {
            var codec = new Codec();
            byte[] serialized = codec.Encode(ToBencodex());
            return serialized;
        }

        private Bencodex.Types.Dictionary ToBencodex()
        {
            return Bencodex.Types.Dictionary.Empty
                .Add(EpochTypeKey, _epochType)
                .Add(DbNameKey, _dbName);
        }
    }
}
