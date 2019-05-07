using GraphQL.Types;

namespace Libplanet.Explorer.GraphTypes
{
    public class PlainValueKeyValuePairType : ObjectGraphType<PlainValueKeyValuePair>
    {
        public PlainValueKeyValuePairType()
        {
            Field<StringGraphType>("Key");
            Field<StringGraphType>("Value");
        }
    }
}