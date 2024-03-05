using Google.Protobuf;
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
        var value = new byte[] { 4, 5, 6 };
        mocker.Use<IKeyValueStore>(kvStore => kvStore.Get(key) == value);
        var service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        var response = await service.Get(new GetRequest { Key = key.ToByteString() });

        // Assert
        mocker.VerifyAll();
        Assert.Equal(value, response.Value.ToByteArray());
        Assert.True(response.Exists);
    }

    [Fact]
    public async Task GetUnary_NotFoundTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(1, 2, 3);
        mocker.Setup<IKeyValueStore>(store => store.Get(key)).Throws<KeyNotFoundException>();
        var service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        var response = await service.Get(new GetRequest { Key = key.ToByteString() });

        // Assert
        mocker.VerifyAll();
        Assert.Empty(response.Value.ToByteArray());
        Assert.False(response.Exists);
    }

    [Fact]
    public async Task GetUnary_EmptyValueTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(1, 2, 3);
        mocker.Use<IKeyValueStore>(kvStore => kvStore.Get(key) == Array.Empty<byte>());
        var service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        var response = await service.Get(new GetRequest { Key = key.ToByteString() });

        // Assert
        mocker.VerifyAll();
        Assert.Empty(response.Value.ToByteArray());
        Assert.True(response.Exists);
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
        await service.Set(new SetRequest
        {
            Key = ByteString.CopyFrom(key.ToByteArray()),
            Value = ByteString.CopyFrom(value),
        });

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public async Task SetMapUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var setMapRequest = new SetMapRequest();
        setMapRequest.MapField.Add(new KeyBytes(1, 2, 3).Hex, ByteString.CopyFrom(4, 5, 6));
        setMapRequest.MapField.Add(new KeyBytes(2, 3, 4).Hex, ByteString.CopyFrom(5, 6, 7));

        mocker
            .Setup<IKeyValueStore>(store => store.Set(It.IsAny<IDictionary<KeyBytes, byte[]>>()))
            .Verifiable();
        var service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        await service.SetMap(setMapRequest);

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
        await service.Delete(new DeleteRequest { Key = ByteString.CopyFrom(key.ToByteArray()) });

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public async Task DeleteCollectionUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var deleteCollectionRequest = new DeleteCollectionRequest();
        deleteCollectionRequest.Key.Add(ByteString.CopyFrom(new KeyBytes(1, 2, 3).ToByteArray()));
        deleteCollectionRequest.Key.Add(ByteString.CopyFrom(new KeyBytes(2, 3, 4).ToByteArray()));

        mocker
            .Setup<IKeyValueStore>(store => store.Delete(It.IsAny<IEnumerable<KeyBytes>>()))
            .Verifiable();
        var service = mocker.CreateInstance<RemoteKeyValueService>();

        // Act
        await service.DeleteCollection(deleteCollectionRequest);

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
        var response = await service.Exists(new ExistsRequest { Key = ByteString.CopyFrom(key.ToByteArray()) });

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
        Assert.Equal(keys.Select(k => k.ToByteString()), response.Keys);
    }
}
