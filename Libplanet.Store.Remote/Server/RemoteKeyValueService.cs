using Google.Protobuf;
using Google.Protobuf.Collections;
using Google.Protobuf.WellKnownTypes;
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

        public override Task<KeyValueStoreValue> GetValue(
            GetValueRequest request,
            ServerCallContext context)
        {
            var key = new KeyBytes(request.Key.Data.ToByteArray());
            byte[] value;
            try
            {
                value = _baseStore.Get(key);

            }
            catch (KeyNotFoundException e)
            {
                _logger.LogError(e, "Get: {Key}", key);
                throw new RpcException(new Status(StatusCode.NotFound, e.Message));
            }

            _logger.LogTrace("Get: {Key} => {Value}", key, value);
            return Task.FromResult(new KeyValueStoreValue { Data = ByteString.CopyFrom(value) });
        }

        public override Task<KeyValueStoreValue> SetValue(
            SetValueRequest request,
            ServerCallContext context)
        {
            var key = new KeyBytes(request.Item.Key.Data.ToByteArray());
            byte[] value = request.Item.Value.Data.ToByteArray();

            try
            {
                _baseStore.Set(key, value);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Set: {Key} <= {Value}", key, ByteString.CopyFrom(value));
                throw new RpcException(new Status(StatusCode.Internal, e.Message));
            }

            _logger.LogTrace("Set: {Key} <= {Value}", key, ByteString.CopyFrom(value));
            return Task.FromResult(new KeyValueStoreValue { Data = ByteString.CopyFrom(value) });
        }

        public override Task<SetValuesResponse> SetValues(
            SetValuesRequest request,
            ServerCallContext context)
        {
            RepeatedField<KeyValueStorePair>? items = request.Items;
            if (items == null)
            {
                return Task.FromResult(new SetValuesResponse());
            }

            var dict = items
                .ToDictionary(
                    pair => new KeyBytes(pair.Key.Data.ToByteArray()),
                    pair => pair.Value.Data.ToByteArray());

            try
            {
                _baseStore.Set(dict);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "SetValues: {Count}", items.Count);
                throw new RpcException(new Status(StatusCode.Internal, e.Message));
            }

            _logger.LogTrace("SetValues: {Count}", items.Count);
            return Task.FromResult(new SetValuesResponse());
        }

        public override Task<Empty> DeleteValue(
            DeleteValueRequest request,
            ServerCallContext context)
        {
            var key = new KeyBytes(request.Key.Data.ToByteArray());
            try
            {
                _baseStore.Delete(key);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Delete: {Key}", key);
                throw new RpcException(new Status(StatusCode.Internal, e.Message));
            }

            _logger.LogTrace("Delete: {Key}", key);
            return Task.FromResult(new Empty());
        }

        public override Task<Empty> DeleteValues(
            DeleteValuesRequest request,
            ServerCallContext context)
        {
            RepeatedField<KeyValueStoreKey>? keys = request.Keys;
            if (keys == null)
            {
                return Task.FromResult(new Empty());
            }

            IEnumerable<KeyBytes> keyBytes = keys
                .Select(k => new KeyBytes(k.Data.ToByteArray()));
            try
            {
                _baseStore.Delete(keyBytes);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "DeleteValues: {Count}", keys.Count);
                throw new RpcException(new Status(StatusCode.Internal, e.Message));
            }

            _logger.LogTrace("DeleteValues: {Count}", keys.Count);
            return Task.FromResult(new Empty());
        }

        public override Task<ExistsKeyResponse> ExistsKey(
            ExistsKeyRequest request,
            ServerCallContext context)
        {
            var key = new KeyBytes(request.Key.Data.ToByteArray());
            bool exists;
            try
            {
                exists = _baseStore.Exists(key);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Exists: {Key}", key);
                throw new RpcException(new Status(StatusCode.Internal, e.Message));
            }

            _logger.LogTrace("Exists: {Key} => {Exists}", key, exists);
            return Task.FromResult(new ExistsKeyResponse { Exists = exists });
        }

        public override Task<ListKeysResponse> ListKeys(
            ListKeysRequest request,
            ServerCallContext context)
        {
            IEnumerable<KeyBytes> keys = _baseStore.ListKeys();
            var response = new ListKeysResponse();
            response.Keys.AddRange(
                keys
                    .Select(KeyBytesExtensions.ToByteString)
                    .Select(key => new KeyValueStoreKey{ Data = key }));
            _logger.LogTrace("ListKeys: {Count}", response.Keys.Count);
            return Task.FromResult(response);
        }
    }
}
