using Libplanet.Store.Trie;

namespace Libplanet.Store.Remote.Extensions
{
    public static class ProtoMessageExtensions
    {
        public static KeyBytes ToKeyBytes(this KeyValueStoreKey @this) =>
            new KeyBytes(@this.Data.ToByteArray());
    }
}
