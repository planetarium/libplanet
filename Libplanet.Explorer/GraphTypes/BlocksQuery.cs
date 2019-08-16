using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Tx;

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
                    long offset = context.GetArgument<long>("offset");
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

            Field<TransactionType<T>>(
                "transaction",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "id" }
                ),
                resolve: context =>
                {
                    var id = new TxId(
                        ByteUtil.ParseHex(context.GetArgument<string>("id"))
                    );
                    return _chain.Transactions[id];
                }
            );

            _chain = chain;
            Name = "BlockQuery";
        }

        private IEnumerable<Block<T>> ListBlocks(bool desc, long offset, long? limit, bool empty)
        {
            Block<T> tip = _chain.Tip;
            long tipIndex = tip.Index;

            if (offset < 0)
            {
                offset = tipIndex + offset + 1;
            }

            if (tipIndex < offset || offset < 0)
            {
                yield break;
            }

            Block<T> block = desc ? _chain[tipIndex - offset] : _chain[offset];

            while (limit is null || limit > 0)
            {
                if (empty || block.Transactions.Any())
                {
                    yield return block;
                }

                block = GetNextBlock(block, desc);

                if (block is null)
                {
                    break;
                }

                if (!(limit is null))
                {
                    limit--;
                }
            }
        }

        private Block<T> GetNextBlock(Block<T> block, bool desc)
        {
            if (desc && block.PreviousHash is HashDigest<SHA256> prev)
            {
                return _chain.Blocks[prev];
            }
            else if (!desc && block != _chain.Tip)
            {
                return _chain[block.Index + 1];
            }

            return null;
        }
    }
}
