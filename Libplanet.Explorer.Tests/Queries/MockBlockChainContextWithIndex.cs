using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Explorer.Indexing;
using Libplanet.Explorer.Interfaces;
using Libplanet.Net;
using Libplanet.Store;

namespace Libplanet.Explorer.Tests.Queries;

public class MockBlockChainContextWithIndex<T> : MockBlockChainContext<T>
    where T : IAction, new()
{
    public MockBlockChainContextWithIndex(BlockChain chain)
        : base(chain)
    {
        var indexPath = Path.GetTempFileName();
        File.Delete(indexPath);
        Directory.CreateDirectory(indexPath);
        Index = new RocksDbBlockChainIndex(indexPath);
        Task.Run(
                async () =>
                    await Index.SynchronizeAsync(
                        Store,
                        CancellationToken.None))
            .ConfigureAwait(false)
            .GetAwaiter()
            .GetResult();
    }
}
