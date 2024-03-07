using Libplanet.Store.Trie;

namespace Libplanet.Store.Remote.Extensions
{
    public static class ProtoMessageExtensions
    {
        public static KeyBytes ToKeyBytes(this KeyValueStoreKey keyValueStoreKey) =>
            new KeyBytes(keyValueStoreKey.Data.ToByteArray());
    }
}
