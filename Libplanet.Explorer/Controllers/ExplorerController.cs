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
    }
}
