using Google.Protobuf;
using Libplanet.Store.Remote.Extensions;
using Libplanet.Store.Trie;

namespace Libplanet.Store.Remote.Client
{
    public sealed class RemoteKeyValueStore : IKeyValueStore
    {
        private readonly KeyValueStore.KeyValueStoreClient _client;

        public RemoteKeyValueStore(KeyValueStore.KeyValueStoreClient client)
        {
            _client = client;
        }

        public void Dispose()
        {
            // Do nothing.
        }

        public byte[] Get(in KeyBytes key)
        {
            GetResponse response = _client.Get(new GetRequest
            {
                Key = key.ToByteString(),
            });

            if(response.Exists == false)
            {
                throw new KeyNotFoundException();
            }

            return response.Value.ToByteArray();
        }

        public void Set(in KeyBytes key, byte[] value) =>
            _client.Set(new SetRequest { Key = key.ToByteString(), Value = ByteString.CopyFrom(value) });

        public void Set(IDictionary<KeyBytes, byte[]> values)
        {
            var request = new SetMapRequest();
            foreach ((KeyBytes key, byte[] value) in values)
            {
                request.MapField.Add(key.Hex, ByteString.CopyFrom(value));
            }

            _client.SetMap(request);
        }

        public void Delete(in KeyBytes key) =>
            _client.Delete(new DeleteRequest { Key = key.ToByteString() });

        public void Delete(IEnumerable<KeyBytes> keys)
        {
            var request = new DeleteCollectionRequest();
            foreach (KeyBytes keyBytes in keys)
            {
                request.Key.Add(keyBytes.ToByteString());
            }

            _client.DeleteCollection(request);
        }

        public bool Exists(in KeyBytes key) =>
            _client.Exists(new ExistsRequest { Key = key.ToByteString() }).Exists;

        public IEnumerable<KeyBytes> ListKeys() =>
            _client.ListKeys(new ListKeysRequest()).Keys.Select(KeyBytesExtensions.ToKeyBytes);
    }
}
