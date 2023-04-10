using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Explorer.Queries;
using Xunit;

namespace Libplanet.Explorer.Tests.Queries;

public class TransactionQueryGeneratedWithIndexTest : TransactionQueryGeneratedTest
{
    public TransactionQueryGeneratedWithIndexTest()
    {
        Source = new MockBlockChainContextWithIndex<PolymorphicAction<SimpleAction>>(Fx.Chain);
        var _ = new ExplorerQuery<PolymorphicAction<SimpleAction>>(Source);
        QueryGraph = new TransactionQuery<PolymorphicAction<SimpleAction>>(Source);
    }

    [SkippableFact(Skip = "transactionQuery.transactions does not support indexing.")]
    public override Task Transactions() => Task.CompletedTask;
}
