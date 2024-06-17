using Google.Protobuf;
using Grpc.Core;
using Libplanet.Store.Remote.Extensions;
using Libplanet.Store.Remote.Server;
using Libplanet.Store.Remote.Tests.Helpers;
using Libplanet.Store.Trie;
using Moq;
using Moq.AutoMock;

namespace Libplanet.Store.Remote.Tests.Units;

public class ServiceUnit
{
    [Fact]
    public async Task GetUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(1, 2, 3);
        byte[] value = new byte[] { 4, 5, 6 };
        mocker.Use<IKeyValueStore>(kvStore => kvStore.Get(key) == value);
        RemoteKeyValueService service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        KeyValueStoreValue response = await service.GetValue(new GetValueRequest
        {
            Key = key.ToKeyValueStoreKey(),
        });

        // Assert
        mocker.VerifyAll();
        Assert.Equal(value, response.Data);
    }

    [Fact]
    public async Task GetUnary_NotFoundTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(1, 2, 3);
        mocker.Setup<IKeyValueStore>(store => store.Get(key))
            .Throws<KeyNotFoundException>()
            .Verifiable();
        RemoteKeyValueService service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        await Assert.ThrowsAsync<RpcException>(async () =>
        {
            await service.GetValue(new GetValueRequest
            {
                Key = key.ToKeyValueStoreKey(),
            });
        });

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public async Task GetUnary_EmptyValueTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(1, 2, 3);
        mocker.Use<IKeyValueStore>(kvStore => kvStore.Get(key) == Array.Empty<byte>());
        RemoteKeyValueService service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        KeyValueStoreValue response = await service.GetValue(new GetValueRequest
        {
            Key = key.ToKeyValueStoreKey(),
        });

        // Assert
        mocker.VerifyAll();
        Assert.Empty(response.Data);
    }

    [Fact]
    public async Task SetUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(1, 2, 3);
        var value = new byte[] { 4, 5, 6 };
        mocker
            .Setup<IKeyValueStore>(store => store.Set(key, value))
            .Verifiable();
        var service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        await service.SetValue(new SetValueRequest
        {
                Item = new KeyValueStorePair
                {
                        Key = key.ToKeyValueStoreKey(),
                        Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
                },
        });

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public async Task SetValuesUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var setValuesRequest = new SetValuesRequest
        {
            Items =
            {
                new KeyValueStorePair
                {
                    Key = new KeyBytes(1, 2, 3).ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(4, 5, 6).ToKeyValueStoreValue(),
                },
                new KeyValueStorePair
                {
                    Key = new KeyBytes(2, 3, 4).ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(5, 6, 7).ToKeyValueStoreValue(),
                },
            },
        };

        mocker
            .Setup<IKeyValueStore>(store => store.Set(It.IsAny<IDictionary<KeyBytes, byte[]>>()))
            .Verifiable();
        RemoteKeyValueService service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        await service.SetValues(setValuesRequest);

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public async Task DeleteUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(1, 2, 3);
        mocker
            .Setup<IKeyValueStore>(store => store.Delete(key))
            .Verifiable();
        var service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        await service.DeleteValue(new DeleteValueRequest
        {
            Key = key.ToKeyValueStoreKey(),
        });

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public async Task DeleteCollectionUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var deleteValuesRequest = new DeleteValuesRequest
        {
            Keys =
            {
                new KeyBytes(1, 2, 3).ToKeyValueStoreKey(),
                new KeyBytes(2, 3, 4).ToKeyValueStoreKey(),
            },
        };

        mocker
            .Setup<IKeyValueStore>(store => store.Delete(It.IsAny<IEnumerable<KeyBytes>>()))
            .Verifiable();
        var service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        await service.DeleteValues(deleteValuesRequest);

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public async Task ExistsUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(1, 2, 3);
        mocker.Use<IKeyValueStore>(store => store.Exists(key) == true);
        var service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        var response = await service.ExistsKey(new ExistsKeyRequest
        {
            Key = key.ToKeyValueStoreKey(),
        });

        // Assert
        mocker.VerifyAll();
        Assert.True(response.Exists);
    }

    [Fact]
    public async Task ListKeysUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var keys = new List<KeyBytes>
        {
            new KeyBytes(1, 2, 3),
            new KeyBytes(2, 3, 4),
        };
        mocker.Use<IKeyValueStore>(store => store.ListKeys() == keys);

        var service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        var response = await service.ListKeys(new ListKeysRequest());

        // Assert
        mocker.VerifyAll();
        Assert.Equal(keys.Select(bytes => bytes.ToKeyValueStoreKey()), response.Keys);
    }
}
