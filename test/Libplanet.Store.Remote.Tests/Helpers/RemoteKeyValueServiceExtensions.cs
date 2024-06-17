using Google.Protobuf.WellKnownTypes;
using Libplanet.Store.Remote.Server;

namespace Libplanet.Store.Remote.Tests.Helpers
{
    public static class RemoteKeyValueServiceExtensions
    {
        public static async Task<KeyValueStoreValue> GetValue(this RemoteKeyValueService service, GetValueRequest request) =>
            await service.GetValue(request, TestServerCallContextHelper.Create());

        public static async Task<KeyValueStoreValue> SetValue(this RemoteKeyValueService service, SetValueRequest request) =>
            await service.SetValue(request, TestServerCallContextHelper.Create());

        public static async Task<SetValuesResponse> SetValues(this RemoteKeyValueService service, SetValuesRequest request) =>
            await service.SetValues(request, TestServerCallContextHelper.Create());

        public static async Task<Empty> DeleteValue(this RemoteKeyValueService service, DeleteValueRequest request) =>
            await service.DeleteValue(request, TestServerCallContextHelper.Create());

        public static async Task<Empty> DeleteValues(this RemoteKeyValueService service, DeleteValuesRequest request) =>
            await service.DeleteValues(request, TestServerCallContextHelper.Create());

        public static async Task<ExistsKeyResponse> ExistsKey(this RemoteKeyValueService service, ExistsKeyRequest request) =>
            await service.ExistsKey(request, TestServerCallContextHelper.Create());

        public static async Task<ListKeysResponse> ListKeys(this RemoteKeyValueService service, ListKeysRequest request) =>
            await service.ListKeys(request, TestServerCallContextHelper.Create());
    }
}
