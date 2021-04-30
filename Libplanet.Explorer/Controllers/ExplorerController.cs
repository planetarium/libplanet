#nullable enable
using System.Collections.Generic;
using System.Threading.Tasks;
using GraphQL.SystemTextJson;
using GraphQL.Types;
using Libplanet.Action;
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

        [HttpGet("/")]
        public IActionResult GetRoot()
        {
            return Redirect("/playground.html");
        }

        [HttpPost("/graphql/")]
        public async Task<IActionResult> GetGraphQLResult(
            [FromBody] GraphQLBody body
        )
        {
            var json = await _schema.ExecuteAsync(_ =>
            {
                _.UserContext = new Dictionary<string, object>
                {
                    [nameof(_context.Store)] = _context.Store,
                    [nameof(_context.BlockChain)] = _context.BlockChain,
                };
                _.Query = body.Query;
                _.ThrowOnUnhandledException = true;
                if (body.Variables != null)
                {
                    _.Inputs = body.Variables.ToString(Newtonsoft.Json.Formatting.None).ToInputs();
                }
            });
            return Ok(JObject.Parse(json));
        }
    }
}
