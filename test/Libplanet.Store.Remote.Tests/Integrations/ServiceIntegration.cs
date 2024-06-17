using Google.Protobuf;
using Grpc.Core;
using Libplanet.Store.Remote.Extensions;
using Libplanet.Store.Remote.Server;
using Libplanet.Store.Remote.Tests.Helpers;
using Libplanet.Store.Trie;
using Serilog;
using Xunit.Abstractions;
using ILogger = Serilog.ILogger;

namespace Libplanet.Store.Remote.Tests.Integrations
{
    public class ServiceIntegration
    {
        private readonly ILogger _logger;

        public ServiceIntegration(ITestOutputHelper output)
        {
            _logger = new LoggerConfiguration()
                .WriteTo.TestOutput(output)
                .CreateLogger();
        }

        [Fact]
        public async Task Get_Set()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(0x01);
            byte[] value = { 0x02 };
            var service = new RemoteKeyValueService(_logger, store);

            // Act
            await Assert.ThrowsAsync<RpcException>(() =>
                service.GetValue(new GetValueRequest
                {
                    Key = key.ToKeyValueStoreKey(),
                }));

            KeyValueStoreValue setResponse = await service.SetValue(new SetValueRequest
            {
                Item = new KeyValueStorePair
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
            });

            // Assert
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
            var service = new RemoteKeyValueService(_logger, store);

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
            Assert.Throws<KeyNotFoundException>(() => store.Get(key));
        }

        [Fact]
        public async Task Get_Delete_Get()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(0x01);
            byte[] value = { 0x02 };
            store.Set(key, value);
            var service = new RemoteKeyValueService(_logger, store);

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

            await Assert.ThrowsAsync<RpcException>(async () =>
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
            var service = new RemoteKeyValueService(_logger, store);

            // Act
            _ = await service.SetValue(new SetValueRequest
            {
                Item = new KeyValueStorePair
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
            var service = new RemoteKeyValueService(_logger, store);

            // Act
            _ = await service.SetValue(new SetValueRequest
            {
                Item = new KeyValueStorePair
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
            await Assert.ThrowsAsync<RpcException>(async () =>
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
            var service = new RemoteKeyValueService(_logger, store);

            // Act
            await service.SetValue(new SetValueRequest
            {
                Item = new KeyValueStorePair
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
            });
            await service.SetValue(new SetValueRequest
            {
                Item = new KeyValueStorePair
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
            var service = new RemoteKeyValueService(_logger, store);

            // Act
            await service.SetValue(new SetValueRequest
            {
                Item = new KeyValueStorePair
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
            });
            await service.SetValue(new SetValueRequest
            {
                Item = new KeyValueStorePair
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
            var service = new RemoteKeyValueService(_logger, store);

            // Act
            _ = await service.SetValue(new SetValueRequest
            {
                Item = new KeyValueStorePair
                {
                    Key = key.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
            });
            _ = await service.DeleteValue(new DeleteValueRequest { Key = key.ToKeyValueStoreKey() });
            _ = await service.SetValue(new SetValueRequest
            {
                Item = new KeyValueStorePair
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
