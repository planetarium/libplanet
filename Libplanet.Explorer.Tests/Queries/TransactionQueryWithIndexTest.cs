using Libplanet.Explorer.Queries;

namespace Libplanet.Explorer.Tests.Queries;

public class TransactionQueryWithIndexTest : TransactionQueryTest
{
    public TransactionQueryWithIndexTest()
    {
        Source = new MockBlockChainContextWithIndex(Chain);
        QueryGraph = new TransactionQuery(Source);
    }
}
