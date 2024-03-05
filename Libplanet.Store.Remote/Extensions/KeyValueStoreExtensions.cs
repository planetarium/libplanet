using Libplanet.Store.Trie;

namespace Libplanet.Store.Remote.Extensions
{
    public static class KeyValueStoreExtensions
    {
        public static bool TryGet(this IKeyValueStore store, KeyBytes key, out byte[] value)
        {
            bool result;
            try
            {
                value = store.Get(key);
                result = true;
            }
            catch
            {
                value = Array.Empty<byte>();
                result = false;
            }

            return result;
        }
    }
}
