#nullable disable
using System.Runtime.CompilerServices;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Queries;
using Libplanet.Store;

namespace Libplanet.Explorer.Interfaces
{
    public interface IBlockChainContext<T>
        where T : IAction, new()
    {
        bool Preloaded { get; }

        BlockChain<T> BlockChain { get; }

        IStore Store { get; }
    }

    public static class BlockChainContext
    {
        private static ConditionalWeakTable<object, Schema> _schemaObjects =
            new ConditionalWeakTable<object, Schema>();

        public static Schema GetSchema<T>(this IBlockChainContext<T> context)
            where T : IAction, new()
        {
            return _schemaObjects.GetValue(
                context,
                (_) =>
                {
                    var s = new Schema { Query = new ExplorerQuery<T>(context) };
                    return s;
                }
            );
        }
    }
}
