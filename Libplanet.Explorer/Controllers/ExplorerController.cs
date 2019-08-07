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
using Libplanet.Tx;
using Microsoft.AspNetCore.Mvc;
using GraphQL;
using GraphQL.Types;
using Libplanet.Explorer.GraphTypes;
using Newtonsoft.Json.Linq;

namespace Libplanet.Explorer.Controllers
{
    public class GraphQLBody
    {
        public string Query { get; set; }
        public JObject Variables { get; set; }
    }

    [GenericControllerNameConvention]
    public class ExplorerController<T> : Controller where T : IAction, new()
    {
        private readonly IBlockchainStore Store;

        public string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        public ExplorerController(IBlockchainStore store)
        {
            Store = store;
        }

        public BlockChain<T> GetBlockChain()
        {
            // FIXME: policy should be configurable
            var chain = new BlockChain<T>(new BlockPolicy<T>(), Store.Store);

            return chain;
        }

        [HttpGet("/")]
        public IActionResult GetRoot()
        {
            return Redirect("/playground.html");
        }

        [HttpPost("/graphql/")]
        public IActionResult GetGraphQLResult(
            [FromBody] GraphQLBody body
        )
        {
            var schema = new Schema { Query = new BlocksQuery<T>(GetBlockChain()) };
            var json = schema.Execute(_ =>
            {
                _.Query = body.Query;
                if (body.Variables != null)
                    _.Inputs = body.Variables.ToString(Newtonsoft.Json.Formatting.None).ToInputs();
            });
            return Ok(JObject.Parse(json));
        }
    }
}
