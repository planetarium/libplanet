using Google.Protobuf;
using Libplanet.Store.Remote.Extensions;
using Libplanet.Store.Remote.Server;
using Libplanet.Store.Remote.Tests.Helpers;
using Libplanet.Store.Trie;

namespace Libplanet.Store.Remote.Tests.Integrations
{
    public class ServiceIntegration
    {
        [Fact]
        public async Task Get_Set()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(new byte[] { 0x01 });
            var value = new byte[] { 0x02 };
            var logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);
            
            // Act
            var response = await service.Get(new GetRequest { Key = key.ToByteString() });
            await service.Set(new SetRequest { Key = key.ToByteString(), Value = ByteString.CopyFrom(value) });
            
            // Assert
            Assert.Empty(response.Value.ToByteArray());
            Assert.False(response.Exists);
            Assert.Equal(value, store.Get(key));
        }

        [Fact]
        public async Task Get_Delete()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(new byte[] { 0x01 });
            var value = new byte[] { 0x02 };
            var logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);
            
            // Act
            var response = await service.Get(new GetRequest { Key = key.ToByteString() });
            await service.Delete(new DeleteRequest { Key = key.ToByteString() });
            
            // Assert
            Assert.Empty(response.Value.ToByteArray());
            Assert.False(response.Exists);
            Assert.Throws<KeyNotFoundException>(() => store.Get(key));
        }

        [Fact]
        public async Task Get_Delete_Get()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(new byte[] { 0x01 });
            var value = new byte[] { 0x02 };
            store.Set(key, value);
            var logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);
            
            // Act
            var first = await service.Get(new GetRequest { Key = key.ToByteString() });
            await service.Delete(new DeleteRequest { Key = key.ToByteString() });
            var second = await service.Get(new GetRequest { Key = key.ToByteString() });
            
            // Assert
            Assert.Equal(value, first.Value.ToByteArray());
            Assert.True(first.Exists);
            
            Assert.Empty(second.Value.ToByteArray());
            Assert.False(second.Exists);

            Assert.Throws<KeyNotFoundException>(() => store.Get(key));
        }
        
        [Fact]
        public async Task Set_Get()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(new byte[] { 0x01 });
            var value = new byte[] { 0x02 };
            var logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);
            
            // Act
            await service.Set(new SetRequest { Key = key.ToByteString(), Value = ByteString.CopyFrom(value) });
            var response = await service.Get(new GetRequest { Key = key.ToByteString() });
            
            // Assert
            Assert.Equal(value, response.Value.ToByteArray());
            Assert.Equal(value, store.Get(key));
        }

        [Fact]
        public async Task Set_Delete()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(new byte[] { 0x01 });
            var value = new byte[] { 0x02 };
            var logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);
            
            // Act
            await service.Set(new SetRequest { Key = key.ToByteString(), Value = ByteString.CopyFrom(value) });
            await service.Delete(new DeleteRequest { Key = key.ToByteString() });
            var response = await service.Get(new GetRequest { Key = key.ToByteString() });
            
            // Assert
            Assert.Empty(response.Value.ToByteArray());
            Assert.False(response.Exists);
            Assert.Throws<KeyNotFoundException>(() => store.Get(key));
        }
        
        [Fact]
        public async Task Set_Set()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(new byte[] { 0x01 });
            var value = new byte[] { 0x02 };
            var logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);
            
            // Act
            await service.Set(new SetRequest { Key = key.ToByteString(), Value = ByteString.CopyFrom(value) });
            await service.Set(new SetRequest { Key = key.ToByteString(), Value = ByteString.CopyFrom(value) });
            var response = await service.Get(new GetRequest { Key = key.ToByteString() });
            
            // Assert
            Assert.Equal(value, response.Value.ToByteArray());
            Assert.Equal(value, store.Get(key));
        }
        
        [Fact]
        public async Task Set_SetDifferentValue()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(new byte[] { 0x01 });
            var value = new byte[] { 0x02 };
            var differentValue = new byte[] { 0x03 };
            var logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);
            
            // Act
            await service.Set(new SetRequest { Key = key.ToByteString(), Value = ByteString.CopyFrom(value) });
            await service.Set(new SetRequest { Key = key.ToByteString(), Value = ByteString.CopyFrom(differentValue) });
            var response = await service.Get(new GetRequest { Key = key.ToByteString() });
            
            // Assert
            Assert.Equal(differentValue, response.Value.ToByteArray());
            Assert.Equal(differentValue, store.Get(key));
        }
        
        [Fact]
        public async Task Set_Delete_Set()
        {
            // Arrange
            var store = (IKeyValueStore)new MemoryKeyValueStore();
            var key = new KeyBytes(new byte[] { 0x01 });
            var value = new byte[] { 0x02 };
            var differentValue = new byte[] { 0x03 };
            var logger = LoggerHelper.CreateLogger<RemoteKeyValueService>();
            var service = new RemoteKeyValueService(logger, store);
            
            // Act
            await service.Set(new SetRequest { Key = key.ToByteString(), Value = ByteString.CopyFrom(value) });
            await service.Delete(new DeleteRequest { Key = key.ToByteString() });
            await service.Set(new SetRequest { Key = key.ToByteString(), Value = ByteString.CopyFrom(differentValue) });
            var response = await service.Get(new GetRequest { Key = key.ToByteString() });
            
            // Assert
            Assert.Equal(differentValue, response.Value.ToByteArray());
            Assert.Equal(differentValue, store.Get(key));
        }
    }
}
