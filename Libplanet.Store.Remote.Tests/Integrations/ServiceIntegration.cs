using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;
using Libplanet.Store.Remote.Extensions;
using Libplanet.Store.Remote.Server;
using Libplanet.Store.Remote.Tests.Helpers;
using Libplanet.Store.Trie;
using Microsoft.Extensions.Logging;

namespace Libplanet.Store.Remote.Tests.Integrations
{
    public class ServiceIntegration
    {
        [Fact]
        public async Task Get_Set()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(0x01);
            byte[] value = { 0x02 };
            ILogger<RemoteKeyValueService> logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);

            // Act
            KeyValueStoreValue response = await service.GetValue(new GetValueRequest
            {
                Key = key.ToKeyValueStoreKey(),
            });

            KeyValueStoreValue setResponse = await service.SetValue(new SetValueRequest
            {
                Item = new KeyValueStorePair
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
            });

            // Assert
            Assert.Empty(response.Data.ToByteArray());
            Assert.Equal(value, store.Get(key));
            Assert.Equal(value, setResponse.Data);
        }

        [Fact]
        public async Task Get_Delete()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(0x01);
            byte[] value = { 0x02 };
            store.Set(key, value);
            ILogger<RemoteKeyValueService> logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);

            // Act
            KeyValueStoreValue getResponse = await service.GetValue(new GetValueRequest
            {
                Key = key.ToKeyValueStoreKey(),
            });

            _ = await service.DeleteValue(new DeleteValueRequest
            {
                Key = key.ToKeyValueStoreKey(),
            });

            // Assert
            Assert.Equal(value, getResponse.Data.ToByteArray());
            Assert.Empty(store.Get(key));
        }

        [Fact]
        public async Task Get_Delete_Get()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(0x01);
            byte[] value = { 0x02 };
            store.Set(key, value);
            ILogger<RemoteKeyValueService> logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);

            // Act
            KeyValueStoreValue first = await service.GetValue(new GetValueRequest
            {
                Key = key.ToKeyValueStoreKey(),
            });

            _ = await service.DeleteValue(new DeleteValueRequest
            {
                Key = key.ToKeyValueStoreKey(),
            });

            // Assert
            Assert.Equal(value, first.Data.ToByteArray());

            await Assert.ThrowsAsync<KeyNotFoundException>(async () =>
            {
                _ = await service.GetValue(new GetValueRequest
                {
                    Key = key.ToKeyValueStoreKey(),
                });
            });
        }

        [Fact]
        public async Task Set_Get()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(0x01);
            byte[] value = { 0x02 };
            ILogger<RemoteKeyValueService> logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);

            // Act
            _ = await service.SetValue(new SetValueRequest
            {
                Item =
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
            });

            KeyValueStoreValue response = await service.GetValue(new GetValueRequest
            {
                Key = key.ToKeyValueStoreKey(),
            });

            // Assert
            Assert.Equal(value, response.Data);
            Assert.Equal(value, store.Get(key));
        }

        [Fact]
        public async Task Set_Delete()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(0x01);
            byte[] value = { 0x02 };
            ILogger<RemoteKeyValueService> logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);

            // Act
            _ = await service.SetValue(new SetValueRequest
            {
                Item =
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
            });

            _ = await service.DeleteValue(new DeleteValueRequest
            {
                Key = key.ToKeyValueStoreKey(),
            });

            // Assert
            await Assert.ThrowsAsync<KeyNotFoundException>(async () =>
                await service.GetValue(new GetValueRequest
                {
                    Key = key.ToKeyValueStoreKey(),
                }));
        }

        [Fact]
        public async Task Set_Set()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(0x01);
            byte[] value = { 0x02 };
            ILogger<RemoteKeyValueService> logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);

            // Act
            await service.SetValue(new SetValueRequest
            {
                Item =
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
            });
            await service.SetValue(new SetValueRequest
            {
                Item =
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
            });
            KeyValueStoreValue response = await service.GetValue(new GetValueRequest
            {
                Key = key.ToKeyValueStoreKey(),
            });

            // Assert
            Assert.Equal(value, response.Data);
            Assert.Equal(value, store.Get(key));
        }

        [Fact]
        public async Task Set_SetDifferentValue()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(0x01);
            byte[] value = { 0x02 };
            byte[] differentValue = { 0x03 };
            ILogger<RemoteKeyValueService> logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);

            // Act
            await service.SetValue(new SetValueRequest
            {
                Item =
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
            });
            await service.SetValue(new SetValueRequest
            {
                Item =
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(differentValue).ToKeyValueStoreValue(),
                },
            });
            KeyValueStoreValue response = await service.GetValue(new GetValueRequest
            {
                Key = key.ToKeyValueStoreKey(),
            });

            // Assert
            Assert.Equal(differentValue, response.Data);
            Assert.Equal(differentValue, store.Get(key));
        }

        [Fact]
        public async Task Set_Delete_Set()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(0x01);
            byte[] value = { 0x02 };
            byte[] differentValue = { 0x03 };
            ILogger<RemoteKeyValueService> logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);

            // Act
            _ = await service.SetValue(new SetValueRequest
            {
                Item =
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
            });
            _ = await service.DeleteValue(new DeleteValueRequest { Key = key.ToKeyValueStoreKey() });
            _ = await service.SetValue(new SetValueRequest
            {
                Item =
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(differentValue).ToKeyValueStoreValue(),
                },
            });
            KeyValueStoreValue response = await service.GetValue(new GetValueRequest
            {
                Key = key.ToKeyValueStoreKey(),
            });

            // Assert
            Assert.Equal(differentValue, response.Data);
            Assert.Equal(differentValue, store.Get(key));
        }
    }
}
