using Google.Protobuf;
using Libplanet.Store.Trie;

namespace Libplanet.Store.Remote.Extensions
{
    public static class KeyBytesExtensions
    {
        public static ByteString ToByteString(this KeyBytes key) =>
            ByteString.CopyFrom(key.ToByteArray());

        public static KeyValueStoreKey ToKeyValueStoreKey(this KeyBytes key) =>
            new KeyValueStoreKey { Data = key.ToByteString() };
    }
}
