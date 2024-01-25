using System.Runtime.CompilerServices;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Explorer.Indexing;
using Libplanet.Explorer.Queries;
using Libplanet.Net;
using Libplanet.Store;

namespace Libplanet.Explorer.Interfaces
{
    public interface IBlockChainContext
    {
        bool Preloaded { get; }

        BlockChain BlockChain { get; }

        IStore Store { get; }

        Swarm Swarm { get; }

        IBlockChainIndex? Index { get; }
    }

    public static class BlockChainContext
    {
        private static ConditionalWeakTable<object, Schema> _schemaObjects =
            new ConditionalWeakTable<object, Schema>();

        public static Schema GetSchema(this IBlockChainContext context)
        {
            return _schemaObjects.GetValue(
                context,
                (_) =>
                {
                    var s = new Schema { Query = new ExplorerQuery(context) };
                    return s;
                }
            );
        }
    }
}
