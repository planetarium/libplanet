using System.Collections.Generic;
using System.Threading.Tasks;
using GraphQL;
using Libplanet.Explorer.GraphTypes;
using Xunit;
using static Libplanet.Explorer.UnitTests.GraphQLTestUtils;

namespace Libplanet.Explorer.UnitTests.GraphTypes
{
    public class ActionArgumentTypeTest
    {
        [Theory]
        [InlineData("foo", "bar")]
        [InlineData("integer", 7777)]
        public async Task Query(object key, object value)
        {
            var plainValueKeyValuePair = new PlainValueKeyValuePair
            {
                Key = key,
                Value = value,
            };
            var query =
                @"{
                    key
                    value
                }";

            ExecutionResult result =
                await ExecuteQueryAsync<ActionArgumentType>(query, source: plainValueKeyValuePair);
            Dictionary<string, object> resultData = (Dictionary<string, object>)result.Data;
            Assert.Null(result.Errors);
            Assert.Equal(key, resultData["key"]);
            Assert.Equal(value.ToString(), resultData["value"]);
        }
    }
}
