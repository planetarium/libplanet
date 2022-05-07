using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Reflection;
using BTypes = Bencodex.Types;

namespace Libplanet.Action
{
    public abstract partial class PlainValueTemplate
    {
        private static BTypes.IKey EncodeToIKey(object? key)
        {
            switch (key)
            {
                // NOTE: Check for null is only here for better readability.
                case null:
                    throw new NullReferenceException(
                        $"Argument {nameof(key)} cannot be null");
                case string s:
                    return new BTypes.Text(s);
                case ImmutableArray<byte> bytes:
                    return new BTypes.Binary(bytes);
                default:
                    // TODO: Allow Address type.
                    throw new ArgumentException(
                        $"Invalid type encountered for {nameof(key)}: {key}");
            }
        }

        private static BTypes.IValue EncodeToIValue(object? value)
        {
            switch (value)
            {
                case null:
                    throw new NotSupportedException($"Null value is not supported");
                case bool b:
                    return new BTypes.Boolean(b);
                case int i:
                    return new BTypes.Integer(i);
                case long l:
                    return new BTypes.Integer(l);
                case BigInteger bigInteger:
                    return new BTypes.Integer(bigInteger);
                case ImmutableArray<byte> bytes:
                    return new BTypes.Binary(bytes);
                case string s:
                    return new BTypes.Text(s);
                case PlainValueTemplate pvt:
                    return pvt.Encode();
                case IList list:
                    return EncodeToListIValue(list);
                case IDictionary dict:
                    return EncodeToDictionaryIValue(dict);
                default:
                    throw new ArgumentException(
                        $"Invalid type encountered for {nameof(value)}: {value}");
            }
        }

        private static BTypes.List EncodeToListIValue(IList list)
        {
            Type type = list.GetType();
            if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(ImmutableList<>))
            {
                Type[] genericTypes = type.GetGenericArguments();
                Type genericType = genericTypes[0];
                if (genericType.IsGenericType &&
                    (genericType.GetGenericTypeDefinition() == typeof(ImmutableList<>) ||
                        genericType.GetGenericTypeDefinition() == typeof(ImmutableDictionary<,>)))
                {
                    throw new NotSupportedException($"Nested collection is not supported: {type}");
                }
                else if (genericType == typeof(bool?)
                    || genericType == typeof(int?)
                    || genericType == typeof(long?)
                    || genericType == typeof(BigInteger?)
                    || genericType == typeof(ImmutableArray<byte>?))
                {
                    throw new NotSupportedException(
                        $"Nullable value type is not supported: {genericType}");
                }
                else if (genericType == typeof(bool)
                    || genericType == typeof(int)
                    || genericType == typeof(long)
                    || genericType == typeof(BigInteger)
                    || genericType == typeof(ImmutableArray<byte>)
                    || genericType == typeof(string))
                {
                    return new BTypes.List(
                        list.Cast<object>().Select(x => EncodeToIValue(x)));
                }
                else
                {
                        throw new ArgumentException(
                            $"Invalid value type {genericType} encountered " +
                            $"for {nameof(list)}: {list}");
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid type encountered for {nameof(list)}: {list}");
            }
        }

        private static BTypes.Dictionary EncodeToDictionaryIValue(IDictionary dict)
        {
            Type type = dict.GetType();
            if (type.IsGenericType &&
                type.GetGenericTypeDefinition() == typeof(ImmutableDictionary<,>))
            {
                Type[] genericTypes = dict.GetType().GetGenericArguments();
                Type keyType = genericTypes[0];
                Type valueType = genericTypes[1];
                if (keyType == typeof(string) || keyType == typeof(ImmutableArray<byte>))
                {
                    if (valueType.IsGenericType &&
                        (valueType.GetGenericTypeDefinition() == typeof(ImmutableList<>) ||
                            valueType.GetGenericTypeDefinition() == typeof(ImmutableDictionary<,>)))
                    {
                        throw new NotSupportedException(
                            $"Nested collection is not supported: {type}");
                    }
                    else if (keyType == typeof(ImmutableArray<byte>?))
                    {
                        throw new NotSupportedException(
                            $"Nullable value type is not supported: {keyType}");
                    }
                    else if (valueType == typeof(bool?)
                        || valueType == typeof(int?)
                        || valueType == typeof(long?)
                        || valueType == typeof(BigInteger?)
                        || valueType == typeof(ImmutableArray<byte>?))
                    {
                        throw new NotSupportedException(
                            $"Nullable value type is not supported: {valueType}");
                    }
                    else if (valueType == typeof(bool)
                        || valueType == typeof(int)
                        || valueType == typeof(long)
                        || valueType == typeof(BigInteger)
                        || valueType == typeof(ImmutableArray<byte>)
                        || valueType == typeof(string))
                    {
                        return new BTypes.Dictionary(dict
                            .Cast<object>()
                            .Select(kv =>
                                {
                                    PropertyInfo[] properties = kv.GetType().GetProperties();
                                    object? key = properties[0].GetValue(kv);
                                    object? value = properties[1].GetValue(kv);
                                    return new KeyValuePair<BTypes.IKey, BTypes.IValue>(
                                        EncodeToIKey(key), EncodeToIValue(value));
                                }));
                    }
                    else
                    {
                        throw new ArgumentException(
                            $"Invalid value type {valueType} encountered " +
                            $"for {nameof(dict)}: {dict}");
                    }
                }
                else
                {
                    throw new ArgumentException(
                        $"Invalid key type {keyType} encountered for {nameof(dict)}: {dict}");
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid type encountered for {nameof(dict)}: {dict}");
            }
        }
    }
}
