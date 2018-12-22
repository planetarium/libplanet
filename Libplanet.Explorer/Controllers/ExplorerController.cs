using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Explorer.ViewModels;
using Libplanet.Store;
using Libplanet.Tx;
using Microsoft.AspNetCore.Mvc;

namespace Libplanet.Explorer.Controllers
{
    [GenericControllerNameConvention]
    public class ExplorerController<T> : Controller where T : IAction
    {
        public string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        public Blockchain<T> GetBlockchain()
        {
            var chain = new Blockchain<T>(new FileStore("./data"));

            return chain;
        }

        [HttpGet("/blocks/")]
        public List<Dictionary<string, string>> Index()
        {
            Blockchain<T> chain = GetBlockchain();

            return chain.Select(block => new Dictionary<string, string>
                {
                    { "hash", block.Hash.ToString() },
                    { "timestamp", block.Timestamp.ToString(TimestampFormat) }
                })
                .ToList();
        }

        [HttpGet("/blocks/{hash}/")]
        public IActionResult getBlock(string hash)
        {
            Block<T> block;
            HashDigest<SHA256> blockHash;
            Blockchain<T> chain = GetBlockchain();

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
                RewardBeneficiary = block.RewardBeneficiary?.Hex(),
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
    }
}
