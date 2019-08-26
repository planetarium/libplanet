using GraphQL;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
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
        private readonly IBlockChainContext<T> _context;
        private readonly Schema _schema;

        public ExplorerController(IBlockChainContext<T> context)
        {
            _context = context;
            _schema = context.GetSchema();
        }

        public BlockChain<T> BlockChain => _context.BlockChain;

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
                _.UserContext = BlockChain;
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
