using System;
using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using GraphQL.Types;
using Libplanet.Action;

namespace Libplanet.Explorer.GraphTypes
{
    public class ActionType<T> : ObjectGraphType<IAction>
        where T : IAction, new()
    {
        public ActionType()
        {
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<ActionArgumentType>>>>(
                "Arguments",
                resolve: ctx =>
                {
                    object ConvertKey(IKey key)
                    {
                        switch (key)
                        {
                            case Text t:
                                return t.Value;
                            case Binary binary:
                                return binary.Value;
                            default:
                                throw new ArgumentException(
                                    $"Unexpected type {key.GetType()},"
                                    + " which doesn't implement IKey");
                        }
                    }

                    object ConvertValue(IValue value)
                    {
                        switch (value)
                        {
                            case Text text:
                                return text.Value;
                            case Integer integer:
                                return integer.Value;
                            case Bencodex.Types.Boolean boolean:
                                return boolean.Value;
                            case Null n:
                                return null;
                            case Binary binary:
                                return binary.Value;
                            case List list:
                                return list.Select(ConvertValue).ToList();
                            case Dictionary dictionary:
                                return dictionary.ToDictionary(
                                    kv => ConvertKey(kv.Key), kv => ConvertValue(kv.Value));
                            default:
                                throw new ArgumentException(
                                    $"Unexpected type {value.GetType()},"
                                    + " which doesn't implement IValue");
                        }
                    }

                    List<PlainValueKeyValuePair> result = new List<PlainValueKeyValuePair>();
                    foreach (KeyValuePair<IKey, IValue> item in (Dictionary)ctx.Source.PlainValue)
                    {
                        result.Add(new PlainValueKeyValuePair
                        {
                            Key = ConvertKey(item.Key),
                            Value = ConvertValue(item.Value),
                        });
                    }

                    return result;
                }
            );

            Name = "Action";
        }
    }
}
