#nullable enable
using GraphQL.Types;

namespace Libplanet.Explorer.UnitTests.GraphTypes
{
    public class ScalarGraphTypeTestBase<T>
        where T : ScalarGraphType, new()
    {
        protected readonly T _type = new T();
    }
}
