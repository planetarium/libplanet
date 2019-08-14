using System;
using GraphQL.Types;

namespace Libplanet.Explorer.GraphTypes
{
    public class ActionArgumentType : ObjectGraphType<PlainValueKeyValuePair>
    {
        public ActionArgumentType()
        {
            Field<NonNullGraphType<StringGraphType>>("Key");
            Field<NonNullGraphType<StringGraphType>>("Value");
        }
    }
}
