using System.Threading.Tasks;
using Libplanet.Explorer.Queries;
using Xunit;

namespace Libplanet.Explorer.Tests.Queries;

public class TransactionQueryGeneratedWithIndexTest : TransactionQueryGeneratedTest
{
    public TransactionQueryGeneratedWithIndexTest()
    {
        Source = new MockBlockChainContextWithIndex(Fx.Chain);
        var _ = new ExplorerQuery(Source);
        QueryGraph = new TransactionQuery(Source);
    }

    [SkippableFact(Skip = "transactionQuery.transactions does not support indexing.")]
    public override Task Transactions() => Task.CompletedTask;
}
