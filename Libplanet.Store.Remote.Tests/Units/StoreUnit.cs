using Google.Protobuf;
using Libplanet.Store.Remote.Client;
using Libplanet.Store.Remote.Extensions;
using Libplanet.Store.Trie;
using Moq.AutoMock;

namespace Libplanet.Store.Remote.Tests.Units;

public class StoreUnit
{
    [Fact]
    public void GetUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(new byte[] { 0x01 });
        var value = new byte[] { 0x02 };
        var request = new GetRequest { Key = key.ToByteString() };
        var response = new GetResponse { Value = ByteString.CopyFrom(value), Exists = true };
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.Get(request, null, null, CancellationToken.None) == response);
        var store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        var result = store.Get(key);

        // Assert
        mocker.VerifyAll();
        Assert.Equal(value, result);
    }

    [Fact]
    public void GetUnary_NotFoundTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(new byte[] { 0x01 });
        var request = new GetRequest { Key = key.ToByteString() };
        var response = new GetResponse { Value = ByteString.Empty, Exists = false };
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.Get(request, null, null, CancellationToken.None) == response);
        var store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act & Assert
        Assert.Throws<KeyNotFoundException>(() => store.Get(key));

        // Assert
        mocker.VerifyAll();
    }

    [Fact]
    public void GetUnary_EmptyValueTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(new byte[] { 0x01 });
        var request = new GetRequest { Key = key.ToByteString() };
        var response = new GetResponse { Value = ByteString.Empty, Exists = true };
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.Get(request, null, null, CancellationToken.None) == response);
        var store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        var result = store.Get(key);

        // Assert
        mocker.VerifyAll();
        Assert.Empty(result);
    }

    [Fact]
    public void SetUnaryTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key = new KeyBytes(new byte[] { 0x01 });
        var value = new byte[] { 0x02 };
        var request = new SetRequest { Key = key.ToByteString(), Value = ByteString.CopyFrom(value) };
        var response = new SetResponse();
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.Set(request, null, null, CancellationToken.None) == response);
        var store = mocker.CreateInstance<RemoteKeyValueStore>();

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
        var key1 = new KeyBytes(new byte[] { 0x01 });
        var key2 = new KeyBytes(new byte[] { 0x02 });

        var request = new SetMapRequest();
        request.MapField.Add(key1.Hex, ByteString.CopyFrom(0x01, 0x02));
        request.MapField.Add(key2.Hex, ByteString.CopyFrom(0x03, 0x04));

        var response = new SetMapResponse();
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.SetMap(request, null, null, CancellationToken.None) == response);
        var store = mocker.CreateInstance<RemoteKeyValueStore>();

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
        var key = new KeyBytes(new byte[] { 0x01 });
        var request = new DeleteRequest { Key = key.ToByteString() };
        var response = new DeleteResponse();
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.Delete(request, null, null, CancellationToken.None) == response);
        var store = mocker.CreateInstance<RemoteKeyValueStore>();

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
        var key1 = new KeyBytes(new byte[] { 0x01 });
        var key2 = new KeyBytes(new byte[] { 0x02 });
        var request = new DeleteCollectionRequest();
        request.Key.Add(key1.ToByteString());
        request.Key.Add(key2.ToByteString());
        var response = new DeleteCollectionResponse();
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.DeleteCollection(request, null, null, CancellationToken.None) == response);
        var store = mocker.CreateInstance<RemoteKeyValueStore>();

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
        var key = new KeyBytes(new byte[] { 0x01 });
        var request = new ExistsRequest { Key = key.ToByteString() };
        var response = new ExistsResponse { Exists = true };
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.Exists(request, null, null, CancellationToken.None) == response);
        var store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        var result = store.Exists(key);

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
        var store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        var result = store.ListKeys();

        // Assert
        mocker.VerifyAll();
        Assert.Empty(result);
    }

    [Fact]
    public void ListKeysUnary_SomeValuesTest()
    {
        // Arrange
        var mocker = new AutoMocker();
        var key1 = new KeyBytes(new byte[] { 0x01 });
        var key2 = new KeyBytes(new byte[] { 0x02 });
        var response = new ListKeysResponse();
        response.Keys.Add(key1.ToByteString());
        response.Keys.Add(key2.ToByteString());
        mocker.Use<KeyValueStore.KeyValueStoreClient>(
            client => client.ListKeys(new ListKeysRequest(), null, null, CancellationToken.None) == response);
        var store = mocker.CreateInstance<RemoteKeyValueStore>();

        // Act
        var result = store.ListKeys();

        // Assert
        mocker.VerifyAll();
        Assert.Equal(new[] { key1, key2 }, result);
    }
}
