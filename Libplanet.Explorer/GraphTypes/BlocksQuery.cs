using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;

namespace Libplanet.Explorer.GraphTypes
{
    public class BlocksQuery<T> : ObjectGraphType
        where T : IAction, new()
    {
        private BlockChain<T> _chain;

        public BlocksQuery(BlockChain<T> chain)
        {
            Field<ListGraphType<BlockType<T>>>(
                "blocks",
                arguments: new QueryArguments(
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "desc",
                        DefaultValue = false,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "offset",
                        DefaultValue = 0,
                    },
                    new QueryArgument<IntGraphType> { Name = "limit" },
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "empty",
                        DefaultValue = true,
                    }
                ),
                resolve: context =>
                {
                    bool desc = context.GetArgument<bool>("desc");
                    int offset = context.GetArgument<int>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);
                    bool empty = context.GetArgument<bool>("empty");
                    return ListBlocks(desc, offset, limit, empty);
                }
            );

            Field<BlockType<T>>(
                "block",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "hash" }
                ),
                resolve: context =>
                {
                    HashDigest<SHA256> hash = HashDigest<SHA256>.FromString(
                        context.GetArgument<string>("hash"));
                    return _chain.Blocks[hash];
                }
            );

            _chain = chain;
            Name = "BlockQuery";
        }

        private IEnumerable<Block<T>> ListBlocks(bool desc, int offset, int? limit, bool empty)
        {
            Block<T> tip = _chain.Tip;
            long tipIndex = tip.Index;
            
            if (desc)
            {
                if (tipIndex - offset < 0)
                {
                    yield break;
                }

                Block<T> block = _chain[tipIndex - offset];
                while (limit is null || limit > 0)
                {
                    yield return block;

                    if (!(limit is null))
                    {
                        limit--;
                    }

                    if (block.PreviousHash is HashDigest<SHA256> prev)
                    {
                        block = _chain.Blocks[prev];
                        continue;
                    }

                    break;
                }
            }
            else
            {
                IEnumerable<Block<T>> blocks = _chain.Skip(offset);

                foreach (Block<T> block in blocks)
                {
                    if (!empty && !block.Transactions.Any())
                    {
                        continue;
                    }
                
                    yield return block;

                    if (!(limit is null))
                    {
                        limit--;
                    }

                    if (limit == 0) break;                
                }
            }
        }
    }
}
