using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using Libplanet.Store.Remote.Client;
using Libplanet.Store.Remote.Extensions;
using Libplanet.Store.Trie;
using Moq;
using Moq.AutoMock;

namespace Libplanet.Store.Remote.Tests.Units;

public class StoreUnit
{
    [Fact]
    public void GetUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(0x01);
        byte[] value = { 0x02 };
        var request = new GetValueRequest { Key = key.ToKeyValueStoreKey() };
        var response = new KeyValueStoreValue { Data = ByteString.CopyFrom(value) };
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.GetValue(request, null, null, CancellationToken.None) == response);
        RemoteKeyValueStore store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        byte[] result = store.Get(key);

        // Assert
        mocker.VerifyAll();
        Assert.Equal(value, result);
    }

    [Fact]
    public void GetUnary_NotFoundTest()
    {
        // Arrange
        var key = new KeyBytes(0x01);
        // Cannot use `AutoMocker` in here. (dunno why)
        var mockClient = new Mock<KeyValueStore.KeyValueStoreClient>();
        mockClient
            .Setup(client => client.GetValue(It.IsAny<GetValueRequest>(), null, null,
                CancellationToken.None))
            .Throws(new RpcException(new Status(StatusCode.NotFound, "Not found")));
        var store = new RemoteKeyValueStore(mockClient.Object);

        // Act & Assert
        Assert.Throws<KeyNotFoundException>(() => store.Get(key));
        mockClient.VerifyAll();
    }

    [Fact]
    public void GetUnary_EmptyValueTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(0x01);
        var request = new GetValueRequest { Key = key.ToKeyValueStoreKey() };
        var response = new KeyValueStoreValue { Data = ByteString.Empty };
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.GetValue(request, null, null, CancellationToken.None) == response);
        RemoteKeyValueStore store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        byte[] result = store.Get(key);

        // Assert
        mocker.VerifyAll();
        Assert.Empty(result);
    }

    [Fact]
    public void SetUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(0x01);
        var value = new byte[] { 0x02 };
        var request = new SetValueRequest
        {
            Item = new KeyValueStorePair
            {
                Key = key.ToKeyValueStoreKey(),
                Value = ByteString.CopyFrom(value).ToKeyValueStoreValue(),
            },
        };
        var response = new KeyValueStoreValue();
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.SetValue(request, null, null, CancellationToken.None) == response);
        RemoteKeyValueStore store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        store.Set(key, value);

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public void MapSetUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key1 = new KeyBytes(0x01);
        var key2 = new KeyBytes(0x02);

        var request = new SetValuesRequest
        {
            Items =
            {
                new KeyValueStorePair
                {
                    Key = key1.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(0x01, 0x02).ToKeyValueStoreValue(),
                },
                new KeyValueStorePair
                {
                    Key = key2.ToKeyValueStoreKey(),
                    Value = ByteString.CopyFrom(0x03, 0x04).ToKeyValueStoreValue(),
                },
            },
        };

        var response = new SetValuesResponse();
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.SetValues(request, null, null, CancellationToken.None) == response);
        RemoteKeyValueStore store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        store.Set(new Dictionary<KeyBytes, byte[]>
        {
            { key1, new byte[] { 0x01, 0x02 }},
            { key2, new byte[] { 0x03, 0x04 } },
        });

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public void DeleteUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(0x01);
        var request = new DeleteValueRequest
        {
            Key = key.ToKeyValueStoreKey(),
        };

        var response = new Empty();
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.DeleteValue(request, null, null, CancellationToken.None) == response);
        RemoteKeyValueStore store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        store.Delete(key);

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public void CollectionDeleteUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key1 = new KeyBytes(0x01);
        var key2 = new KeyBytes(0x02);
        var request = new DeleteValuesRequest
        {
            Keys =
            {
                key1.ToKeyValueStoreKey(),
                key2.ToKeyValueStoreKey(),
            },
        };

        var response = new Empty();
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.DeleteValues(request, null, null, CancellationToken.None) == response);
        RemoteKeyValueStore store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        store.Delete(new List<KeyBytes> { key1, key2 });

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public void ExistsUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(0x01);
        var request = new ExistsKeyRequest
        {
            Key = key.ToKeyValueStoreKey(),
        };

        var response = new ExistsKeyResponse { Exists = true };
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.ExistsKey(request, null, null, CancellationToken.None) == response);
        RemoteKeyValueStore store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        bool result = store.Exists(key);

        // Assert
        mocker.VerifyAll();
        Assert.True(result);
    }

    [Fact]
    public void ListKeysUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var response = new ListKeysResponse();
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.ListKeys(new ListKeysRequest(), null, null, CancellationToken.None) == response);
        RemoteKeyValueStore store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        IEnumerable<KeyBytes> result = store.ListKeys();

        // Assert
        mocker.VerifyAll();
        Assert.Empty(result);
    }

    [Fact]
    public void ListKeysUnary_SomeValuesTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key1 = new KeyBytes(0x01);
        var key2 = new KeyBytes(0x02);
        var response = new ListKeysResponse
        {
            Keys =
            {
                key1.ToKeyValueStoreKey(),
                key2.ToKeyValueStoreKey(),
            },
        };

        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.ListKeys(new ListKeysRequest(), null, null, CancellationToken.None) == response);
        RemoteKeyValueStore store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        IEnumerable<KeyBytes> result = store.ListKeys();

        // Assert
        mocker.VerifyAll();
        Assert.Equal(new[] { key1, key2 }, result);
    }
}
