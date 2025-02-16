using Libplanet.Store.Trie;

namespace Libplanet.Store.Remote.Extensions
{
    public static class ProtoMessageExtensions
    {
        public static KeyBytes ToKeyBytes(this KeyValueStoreKey @this) =>
            KeyBytes.Create(@this.Data.ToByteArray());
    }
}
