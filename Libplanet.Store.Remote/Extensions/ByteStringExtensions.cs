using Google.Protobuf;

namespace Libplanet.Store.Remote.Extensions
{
    public static class ByteStringExtensions
    {
        public static KeyValueStoreValue ToKeyValueStoreValue(this ByteString byteString) =>
            new KeyValueStoreValue { Data = byteString };
    }
}
