using Libplanet.Action;
using Libplanet.Explorer.Queries;

namespace Libplanet.Explorer.Tests.Queries;

public class TransactionQueryWithIndexTest : TransactionQueryTest
{
    public TransactionQueryWithIndexTest()
    {
        Source = new MockBlockChainContextWithIndex<NullAction>(Chain);
        QueryGraph = new TransactionQuery<NullAction>(Source);
    }
}
