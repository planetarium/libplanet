using Libplanet.Store.Remote.Server;

namespace Libplanet.Store.Remote.Tests.Helpers
{
    public static class RemoteKeyValueServiceExtensions
    {
        public static async Task<GetResponse> Get(this RemoteKeyValueService service, GetRequest request) =>
            await service.Get(request, TestServerCallContextHelper.Create());
        
        public static async Task<SetResponse> Set(this RemoteKeyValueService service, SetRequest request) =>
            await service.Set(request, TestServerCallContextHelper.Create());
        
        public static async Task<SetMapResponse> SetMap(this RemoteKeyValueService service, SetMapRequest request) =>
            await service.SetMap(request, TestServerCallContextHelper.Create());
        
        public static async Task<DeleteResponse> Delete(this RemoteKeyValueService service, DeleteRequest request) =>
            await service.Delete(request, TestServerCallContextHelper.Create());
        
        public static async Task<DeleteCollectionResponse> DeleteCollection(this RemoteKeyValueService service, DeleteCollectionRequest request) =>
            await service.DeleteCollection(request, TestServerCallContextHelper.Create());
        
        public static async Task<ExistsResponse> Exists(this RemoteKeyValueService service, ExistsRequest request) =>
            await service.Exists(request, TestServerCallContextHelper.Create());
        
        public static async Task<ListKeysResponse> ListKeys(this RemoteKeyValueService service, ListKeysRequest request) =>
            await service.ListKeys(request, TestServerCallContextHelper.Create());
    }
}
