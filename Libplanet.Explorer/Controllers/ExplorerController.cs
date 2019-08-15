using GraphQL;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace Libplanet.Explorer.Controllers
{
    [GenericControllerNameConvention]
    public class ExplorerController<T> : Controller
        where T : IAction, new()
    {
        private static Schema _schema;

        private readonly IBlockchainStore _store;

        private BlockChain<T> _blockChain;

        public ExplorerController(IBlockchainStore store)
        {
            _store = store;
            _blockChain = _blockChain ?? GetBlockChain();
            _schema = _schema ?? new Schema { Query = new BlocksQuery<T>(_blockChain) };
        }

        public BlockChain<T> GetBlockChain()
        {
            // FIXME: policy should be configurable
            var chain = new BlockChain<T>(new BlockPolicy<T>(), _store.Store);

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
            var json = _schema.Execute(_ =>
            {
                _.UserContext = _blockChain;
                _.Query = body.Query;
                if (body.Variables != null)
                {
                    _.Inputs = body.Variables.ToString(Newtonsoft.Json.Formatting.None).ToInputs();
                }
            });
            return Ok(JObject.Parse(json));
        }
    }
}
