using System.Collections.Generic;
using GraphQL.Types;
using Libplanet.Action;

namespace Libplanet.Explorer.GraphTypes
{
    public class ActionType<T> : ObjectGraphType<IAction> where T : IAction, new()
    {
        public ActionType()
        {
            Field<ListGraphType<PlainValueKeyValuePairType>>(
                "PlainValue",
                resolve: ctx =>
                {
                    List<PlainValueKeyValuePair> result = new List<PlainValueKeyValuePair>();
                    foreach(KeyValuePair<string, object> item in ctx.Source.PlainValue)
                    {
                        result.Add(new PlainValueKeyValuePair(){
                            Key = item.Key,
                            Value = item.Value
                        });
                    }
                    return result;
                }
            );
        }
    }
}