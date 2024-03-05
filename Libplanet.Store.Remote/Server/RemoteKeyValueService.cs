using Google.Protobuf;
using Google.Protobuf.Collections;
using Grpc.Core;
using Libplanet.Store.Remote.Extensions;
using Libplanet.Store.Trie;
using Microsoft.Extensions.Logging;

namespace Libplanet.Store.Remote.Server
{
    public class RemoteKeyValueService : KeyValueStore.KeyValueStoreBase
    {
        private readonly ILogger<RemoteKeyValueService> _logger;
        private readonly IKeyValueStore _baseStore;

        public RemoteKeyValueService(
            ILogger<RemoteKeyValueService> logger,
            IKeyValueStore baseStore)
        {
            _logger = logger;
            _baseStore = baseStore;
        }

        public override Task<GetResponse> Get(GetRequest request, ServerCallContext context)
        {
            var key = new KeyBytes(request.Key.ToByteArray());
            var result = _baseStore.TryGet(key, out var value);
            _logger.LogTrace("Get: {Key} => {Value}", key, value);
            return Task.FromResult(new GetResponse { Value = ByteString.CopyFrom(value), Exists = result});
        }

        public override Task<SetResponse> Set(SetRequest request, ServerCallContext context)
        {
            var key = new KeyBytes(request.Key.ToByteArray());
            _baseStore.Set(key, request.Value.ToByteArray());
            _logger.LogTrace("Set: {Key} <= {Value}", key, request.Value);
            return Task.FromResult(new SetResponse());
        }

        public override Task<SetMapResponse> SetMap(SetMapRequest request, ServerCallContext context)
        {
            MapField<string, ByteString>? map = request.MapField;
            var dict = new Dictionary<KeyBytes, byte[]>(map.Count);
            foreach ((string? key, ByteString? value) in map)
            {
                dict[new KeyBytes(key)] = value.ToByteArray();
            }
            _baseStore.Set(dict);
            _logger.LogTrace("SetMap: {Count}", map.Count);
            return Task.FromResult(new SetMapResponse());
        }

        public override Task<DeleteResponse> Delete(DeleteRequest request, ServerCallContext context)
        {
            var key = new KeyBytes(request.Key.ToByteArray());
            _baseStore.Delete(key);
            _logger.LogTrace("Delete: {Key}", key);
            return Task.FromResult(new DeleteResponse());
        }

        public override Task<DeleteCollectionResponse> DeleteCollection(DeleteCollectionRequest request, ServerCallContext context)
        {
            IEnumerable<KeyBytes> keys = request.Key.Select(KeyBytesExtensions.ToKeyBytes);
            _baseStore.Delete(keys);
            _logger.LogTrace("DeleteCollection: {Count}", request.Key.Count);
            return Task.FromResult(new DeleteCollectionResponse());
        }

        public override Task<ExistsResponse> Exists(ExistsRequest request, ServerCallContext context)
        {
            var key = new KeyBytes(request.Key.ToByteArray());
            _logger.LogTrace("Exists: {Key}", key);
            return Task.FromResult(new ExistsResponse { Exists = _baseStore.Exists(key) });
        }

        public override Task<ListKeysResponse> ListKeys(ListKeysRequest request, ServerCallContext context)
        {
            IEnumerable<KeyBytes> keys = _baseStore.ListKeys();
            var response = new ListKeysResponse();
            response.Keys.AddRange(keys.Select(KeyBytesExtensions.ToByteString));
            _logger.LogTrace("ListKeys: {Count}", response.Keys.Count);
            return Task.FromResult(response);
        }
    }
}
