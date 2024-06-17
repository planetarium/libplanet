using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Explorer.Indexing;

namespace Libplanet.Explorer.Tests.Queries;

public class MockBlockChainContextWithIndex : MockBlockChainContext
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
