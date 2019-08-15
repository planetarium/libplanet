using Newtonsoft.Json.Linq;

namespace Libplanet.Explorer.Controllers
{
    public class GraphQLBody
    {
        public string Query { get; set; }

        public JObject Variables { get; set; }
    }
}
