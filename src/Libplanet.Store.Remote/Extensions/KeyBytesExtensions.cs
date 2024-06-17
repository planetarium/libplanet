using Google.Protobuf;
using Libplanet.Store.Trie;

namespace Libplanet.Store.Remote.Extensions
{
    public static class KeyBytesExtensions
    {
        public static ByteString ToByteString(this KeyBytes @this) =>
            ByteString.CopyFrom(@this.ToByteArray());

        public static KeyValueStoreKey ToKeyValueStoreKey(this KeyBytes @this) =>
            new KeyValueStoreKey { Data = @this.ToByteString() };
    }
}
