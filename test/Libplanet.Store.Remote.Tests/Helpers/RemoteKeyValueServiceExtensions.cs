using Google.Protobuf.WellKnownTypes;
using Libplanet.Store.Remote.Server;

namespace Libplanet.Store.Remote.Tests.Helpers;

public static class RemoteKeyValueServiceExtensions
{
    public static async Task<KeyValueStoreValue> GetValue(
        this RemoteKeyValueService @this, GetValueRequest request)
        => await @this.GetValue(request, TestServerCallContextHelper.Create());

    public static async Task<KeyValueStoreValue> SetValue(
        this RemoteKeyValueService @this, SetValueRequest request)
        => await @this.SetValue(request, TestServerCallContextHelper.Create());

    public static async Task<SetValuesResponse> SetValues(
        this RemoteKeyValueService @this, SetValuesRequest request)
        => await @this.SetValues(request, TestServerCallContextHelper.Create());

    public static async Task<Empty> DeleteValue(
        this RemoteKeyValueService @this, DeleteValueRequest request)
        => await @this.DeleteValue(request, TestServerCallContextHelper.Create());

    public static async Task<Empty> DeleteValues(
        this RemoteKeyValueService @this, DeleteValuesRequest request)
        => await @this.DeleteValues(request, TestServerCallContextHelper.Create());

    public static async Task<ExistsKeyResponse> ExistsKey(
        this RemoteKeyValueService @this, ExistsKeyRequest request)
        => await @this.ExistsKey(request, TestServerCallContextHelper.Create());

    public static async Task<ListKeysResponse> ListKeys(
        this RemoteKeyValueService @this, ListKeysRequest request)
        => await @this.ListKeys(request, TestServerCallContextHelper.Create());
}
