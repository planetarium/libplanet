using Google.Protobuf;

namespace Libplanet.Store.Remote.Extensions
{
    public static class ByteStringExtensions
    {
        public static KeyValueStoreValue ToKeyValueStoreValue(this ByteString @this) =>
            new KeyValueStoreValue
            {
                Data = @this,
            };
    }
}
