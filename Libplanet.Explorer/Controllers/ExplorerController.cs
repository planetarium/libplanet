using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Explorer.Interfaces;
using Libplanet.Explorer.ViewModels;
using Libplanet.Tx;
using Microsoft.AspNetCore.Mvc;
using GraphQL;
using GraphQL.Types;

namespace Libplanet.Explorer.Controllers
{
    [GenericControllerNameConvention]
    public class ExplorerController<T> : Controller where T : IAction, new()
    {
        private readonly IBlockchainStore Store;
        private readonly Guid _chainId;

        public string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        public ExplorerController(IBlockchainStore store)
        {
            Store = store;
            _chainId = store.ChainId;
        }

        public BlockChain<T> GetBlockChain()
        {
            // FIXME: policy should be configurable
            var chain = new BlockChain<T>(
                new BlockPolicy<T>(), Store.Store, _chainId);

            return chain;
        }

        public class BlockType : ObjectGraphType<Block<T>>
        {
            public BlockType()
            {
                Field(x => x.Index);
                Field(x => x.Difficulty);
                Field<StringGraphType>(
                    "Nonce",
                    resolve: ctx => ctx.Source.Nonce.ToString()
                );
                Field<StringGraphType>(
                    "Miner",
                    resolve: ctx => ctx.Source.Miner.ToString()
                );
                Field<StringGraphType>(
                    "PreviousHash",
                    resolve: ctx => ctx.Source.PreviousHash.ToString()
                );
                Field(x => x.Timestamp);
                Field<ListGraphType<TransactionType>>("transactions");
            }
        }

        public class PlainValueKeyValuePair : Object
        {
            public string Key { get; set; }
            public object Value { get; set; }
        }

        public class TransactionType : ObjectGraphType<Transaction<T>>
        {
            public TransactionType()
            {
                Field<StringGraphType>(
                    "Signer",
                    resolve: ctx => ctx.Source.Signer.ToString()
                );
                Field<StringGraphType>(
                    "PublicKey",
                    resolve: ctx => ByteUtil.Hex(ctx.Source.PublicKey.Format(true))
                );
                Field<ListGraphType<StringGraphType>>(
                    "UpdatedAddress",
                    resolve: ctx => from address in ctx.Source.UpdatedAddresses select address.ToString()
                );
                Field<StringGraphType>(
                    "Signature",
                    resolve: ctx => ByteUtil.Hex(ctx.Source.Signature)
                );
                Field(x => x.Timestamp);
                Field<ListGraphType<IActionType>>("Actions");
            }
        }

        public class IActionType : ObjectGraphType<IAction>
        {
            public IActionType()
            {
                Field<ListGraphType<PlainValueKeyValuePairType> >(
                    "PlainValue",
                    resolve: ctx =>
                    {
                        List<PlainValueKeyValuePair> result = new List<PlainValueKeyValuePair>();
                        foreach(KeyValuePair<string, object> item in ctx.Source.PlainValue)
                        {
                            result.Add(new PlainValueKeyValuePair(){
                                Key = item.Key,
                                Value = item.Value
                            });
                        }
                        return result;
                    }
                );
            }
        }

        public class PlainValueKeyValuePairType : ObjectGraphType<PlainValueKeyValuePair>
        {
            public PlainValueKeyValuePairType()
            {
                Field<StringGraphType>("Key");
                Field<StringGraphType>("Value");
            }
        }

        public class BlocksQuery : ObjectGraphType
        {
            private BlockChain<T> _chain;         
            public BlocksQuery(BlockChain<T> chain)
            {
                Field<ListGraphType<BlockType>>(
                    "blocks",
                    resolve: context => chain
                );

                Field<BlockType>(
                    "block",
                    arguments: new QueryArguments(
                        new QueryArgument<IdGraphType> { Name = "index" }
                    ),
                    resolve: context =>
                    {
                        ulong index = context.GetArgument<ulong>("index");
                        return _chain.FirstOrDefault(x => (ulong)x.Index == index);
                    }
                );
                _chain = chain;
            }
        }
        
        [HttpGet("/graphql/")]
        public IActionResult GetGraphQLResult(
            [FromQuery(Name = "query")] string query
        )
        {
            var schema = new Schema { Query = new BlocksQuery(GetBlockChain()) };
            var json = schema.Execute(_ =>
            {
                _.Query = query;
            });
            return Ok(json);    
        }

        [HttpGet("/blocks/")]
        public List<Dictionary<string, string>> Index(
            [FromQuery(Name = "hide-empty-blocks")] bool HideEmptyBlocks
        )
        {
            IEnumerable<Block<T>> chain = GetBlockChain();

            if (HideEmptyBlocks)
            {
                chain = chain.Where(b => b.Transactions.Any());
            }

            return chain.Select(block => new Dictionary<string, string>
                {
                    { "hash", block.Hash.ToString() },
                    { "timestamp", block.Timestamp.ToString(TimestampFormat) },
                    { "miner", block.Miner.ToString() },
                    { "tx_count", block.Transactions.Count().ToString() },
                    { "difficulty", block.Difficulty.ToString() },
                })
                .ToList();
        }

        [HttpGet("/blocks/{hash}/")]
        public IActionResult GetBlock(string hash)
        {
            Block<T> block;
            HashDigest<SHA256> blockHash;
            BlockChain<T> chain = GetBlockChain();

            try
            {
                blockHash = HashDigest<SHA256>.FromString(hash);
            }
            catch (ArgumentException)
            {
                return BadRequest(new Dictionary<string, string>
                    {
                        { "message", $"\"{hash}\" is not a proper hash." }
                    });
            }

            try
            {
                block = chain.Blocks[blockHash];
            }
            catch (KeyNotFoundException)
            {
                return NotFound(new Dictionary<string, string>
                {
                    { "message", $"block(\"{hash}\") is not found" }
                });
            }

            var model = new BlockViewModel
            {
                Index = block.Index,
                Difficulty = block.Difficulty,
                Nonce = block.Nonce.ToString(),
                PreviousHash = block.PreviousHash.ToString(),
                Miner = block.Miner?.ToHex(),
                Timestamp = block.Timestamp.ToString(TimestampFormat),
                TxIds = (block.Transactions
                    .OrderByDescending(tx => tx.Timestamp)
                    .Select(tx => new Dictionary<string, string>
                    {
                        { "id", tx.Id.ToString() },
                        { "timestamp", tx.Timestamp.ToString(TimestampFormat) }
                    })).ToList()
            };
            return Ok(model);
        }

        [HttpGet("/tx/{txIdString}/")]
        public IActionResult GetTransaction(string txIdString)
        {
            Transaction<T> tx;
            TxId txId;
            BlockChain<T> chain = GetBlockChain();

            try
            {
                txId = new TxId(ByteUtil.ParseHex(txIdString));
            }
            catch (ArgumentException)
            {
                return BadRequest(new Dictionary<string, string>
                    {
                        {
                            "message",
                            $"\"{txIdString}\" is not a proper transaction id."
                        }
                    });
            }

            try
            {
                tx = chain.Transactions[txId];
            }
            catch (KeyNotFoundException)
            {
                return NotFound(new Dictionary<string, string>
                {
                    { "message", $"Transaction(\"{txIdString}\") is not found" }
                });
            }

            var model = new TransactionViewModel
            {
                Id = tx.Id.ToString(),
                Signature = tx.Signature,
                Timestamp = tx.Timestamp,
                Signer = tx.Signer.ToHex(),
                UpdatedAddresses = tx.UpdatedAddresses
                    .Select(a => a.ToHex()).ToArray(),
                Actions = tx.Actions
                    .Select(act => new Dictionary<string, object>
                    {
                        {
                            "type_id",
                            ActionTypeAttribute.ValueOf(act.GetType())
                        },

                    }).ToList()
            };

            return Ok(model);
        }
    }
}
