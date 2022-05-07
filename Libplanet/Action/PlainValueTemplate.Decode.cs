using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;

namespace Libplanet.Action
{
    public abstract partial class PlainValueTemplate
    {
        private static object DecodeFromIValue(Bencodex.Types.IValue value, Type type)
        {
            switch (value)
            {
                case Bencodex.Types.Null _:
                    throw new NotSupportedException($"Null value is not supported: {value}");
                case Bencodex.Types.Boolean b:
                    return b.Value;
                case Bencodex.Types.Integer i when type == typeof(int):
                    return (int)i.Value;
                case Bencodex.Types.Integer l when type == typeof(long):
                    return (long)l.Value;
                case Bencodex.Types.Integer bi when type == typeof(BigInteger):
                    return bi.Value;
                case Bencodex.Types.Binary bs when type == typeof(ImmutableArray<byte>):
                    return bs.ByteArray;
                case Bencodex.Types.Text s when type == typeof(string):
                    return s.Value;
                case Bencodex.Types.Dictionary pvt when
                    type.IsSubclassOf(typeof(PlainValueTemplate)):
                    object instance = Activator.CreateInstance(type, pvt)
                        ?? throw new NullReferenceException(
                            $"Failed to decode {value} to target type {type}");
                    return instance;
                case Bencodex.Types.List list:
                    return DecodeFromListIValue(list, type);
                case Bencodex.Types.Dictionary dict:
                    return DecodeFromDictionaryIValue(dict, type);
                default:
                    throw new ArgumentException($"Failed to decode {value} to target type {type}");
            }
        }

        private static object DecodeFromListIValue(Bencodex.Types.List list, Type type)
        {
            if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(ImmutableList<>))
            {
                Type[] genericTypes = type.GetGenericArguments();
                Type genericType = genericTypes[0];
                if (genericType == typeof(bool))
                {
                    return list
                        .Select(x
                            => x is Bencodex.Types.Boolean b
                                ? b.Value
                                : throw new ArgumentException(
                                    $"Invalid encoded type {x.GetType()} encountered."))
                        .ToImmutableList();
                }
                else if (genericType == typeof(int))
                {
                    return list
                        .Select(x
                            => x is Bencodex.Types.Integer i
                                ? (int)i.Value
                                : throw new ArgumentException(
                                    $"Invalid encoded type {x.GetType()} encountered."))
                        .ToImmutableList();
                }
                else if (genericType == typeof(long))
                {
                    return list
                        .Select(x
                            => x is Bencodex.Types.Integer l
                                ? (long)l.Value
                                : throw new ArgumentException(
                                    $"Invalid encoded type {x.GetType()} encountered."))
                        .ToImmutableList();
                }
                else if (genericType == typeof(BigInteger))
                {
                    return list
                        .Select(x
                            => x is Bencodex.Types.Integer bi
                                ? bi.Value
                                : throw new ArgumentException(
                                    $"Invalid encoded type {x.GetType()} encountered."))
                        .ToImmutableList();
                }
                else if (genericType == typeof(ImmutableArray<byte>))
                {
                    return list
                        .Select(x
                            => x is Bencodex.Types.Binary bs
                                ? bs.ByteArray
                                : throw new ArgumentException(
                                    $"Invalid encoded type {x.GetType()} encountered."))
                        .ToImmutableList();
                }
                else if (genericType == typeof(string))
                {
                    // FIXME: Reference type nullability should be inferred from attributes.
                    return list
                        .Select(x
                            => x is Bencodex.Types.Text s
                                ? s.Value
                                : throw new ArgumentException(
                                    $"Invalid encoded type {x.GetType()} encountered."))
                        .ToImmutableList();
                }
                else
                {
                    throw new ArgumentException(
                        $"Invalid target generic type {genericType} encountered.");
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid target property type {type} encountered.");
            }
        }

        private static object DecodeFromDictionaryIValue(Bencodex.Types.Dictionary dict, Type type)
        {
            if (type.IsGenericType &&
                type.GetGenericTypeDefinition() == typeof(ImmutableDictionary<,>))
            {
                Type[] genericTypes = type.GetGenericArguments();
                Type keyType = genericTypes[0];
                Type valueType = genericTypes[1];
                IEnumerable<object> keys = DecodedKeys(dict, keyType).Cast<object>();
                IEnumerable<object> values = DecodedValues(dict, valueType).Cast<object>();
                if (keyType == typeof(ImmutableArray<byte>))
                {
                    if (valueType == typeof(bool))
                    {
                        return keys.Zip(values, (first, second) =>
                            new KeyValuePair<ImmutableArray<byte>, bool>(
                                (ImmutableArray<byte>)first, (bool)second))
                            .ToImmutableDictionary();
                    }
                    else if (valueType == typeof(int))
                    {
                        return keys.Zip(values, (first, second) =>
                            new KeyValuePair<ImmutableArray<byte>, int>(
                                (ImmutableArray<byte>)first, (int)second))
                            .ToImmutableDictionary();
                    }
                    else if (valueType == typeof(long))
                    {
                        return keys.Zip(values, (first, second) =>
                            new KeyValuePair<ImmutableArray<byte>, long>(
                                (ImmutableArray<byte>)first, (long)second))
                            .ToImmutableDictionary();
                    }
                    else if (valueType == typeof(BigInteger))
                    {
                        return keys.Zip(values, (first, second) =>
                            new KeyValuePair<ImmutableArray<byte>, BigInteger>(
                                (ImmutableArray<byte>)first, (BigInteger)second))
                            .ToImmutableDictionary();
                    }
                    else if (valueType == typeof(ImmutableArray<byte>))
                    {
                        return keys.Zip(values, (first, second) =>
                            new KeyValuePair<ImmutableArray<byte>, ImmutableArray<byte>>(
                                (ImmutableArray<byte>)first, (ImmutableArray<byte>)second))
                            .ToImmutableDictionary();
                    }
                    else if (valueType == typeof(string))
                    {
                        return keys.Zip(values, (first, second) =>
                            new KeyValuePair<ImmutableArray<byte>, string>(
                                (ImmutableArray<byte>)first, (string)second))
                            .ToImmutableDictionary();
                    }
                    else
                    {
                        throw new ArgumentException(
                            $"Invalid target value type {valueType} encountered.");
                    }
                }
                else if (keyType == typeof(string))
                {
                    if (valueType == typeof(bool))
                    {
                        return keys
                            .Zip(values, (first, second) =>
                                new KeyValuePair<string, bool>((string)first, (bool)second))
                            .ToImmutableDictionary();
                    }
                    else if (valueType == typeof(int))
                    {
                        return keys
                            .Zip(values, (first, second) =>
                                new KeyValuePair<string, int>((string)first, (int)second))
                            .ToImmutableDictionary();
                    }
                    else if (valueType == typeof(long))
                    {
                        return keys
                            .Zip(values, (first, second) =>
                                new KeyValuePair<string, long>((string)first, (long)second))
                            .ToImmutableDictionary();
                    }
                    else if (valueType == typeof(BigInteger))
                    {
                        return keys
                            .Zip(values, (first, second) =>
                                new KeyValuePair<string, BigInteger>(
                                    (string)first, (BigInteger)second))
                            .ToImmutableDictionary();
                    }
                    else if (valueType == typeof(ImmutableArray<byte>))
                    {
                        return keys
                            .Zip(values, (first, second) =>
                                new KeyValuePair<string, ImmutableArray<byte>>(
                                    (string)first, (ImmutableArray<byte>)second))
                            .ToImmutableDictionary();
                    }
                    else if (valueType == typeof(string))
                    {
                        return keys.Zip(values, (first, second) =>
                                new KeyValuePair<string, string>((string)first, (string)second))
                            .ToImmutableDictionary();
                    }
                    else
                    {
                        throw new ArgumentException(
                            $"Invalid target value type {valueType} encountered.");
                    }
                }
                else
                {
                    throw new ArgumentException(
                        $"Invalid target key type {keyType} encountered.");
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid target property type {type} encountered.");
            }
        }

        private static IEnumerable DecodedKeys(Bencodex.Types.Dictionary dict, Type keyType)
        {
            if (keyType == typeof(ImmutableArray<byte>))
            {
                return dict.Select(kv =>
                    kv.Key is Bencodex.Types.Binary bs
                        ? bs.ByteArray
                        : throw new ArgumentException(
                            $"Invalid encoded key type {kv.Key.GetType()} encountered."));
            }
            else if (keyType == typeof(string))
            {
                return dict.Select(kv =>
                    kv.Key is Bencodex.Types.Text s
                        ? s.Value
                        : throw new ArgumentException(
                            $"Invalid encoded key type {kv.Key.GetType()} encountered."));
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid target key type {keyType} encountered.");
            }
        }

        private static IEnumerable DecodedValues(Bencodex.Types.Dictionary dict, Type valueType)
        {
            if (valueType == typeof(bool))
            {
                return dict.Select(kv =>
                    kv.Value is Bencodex.Types.Boolean b
                        ? b.Value
                        : throw new ArgumentException(
                            $"Invalid encoded type {kv.Value.GetType()} encountered."));
            }
            else if (valueType == typeof(int))
            {
                return dict.Select(kv =>
                    kv.Value is Bencodex.Types.Integer i
                        ? (int)i.Value
                        : throw new ArgumentException(
                            $"Invalid encoded type {kv.Value.GetType()} encountered."));
            }
            else if (valueType == typeof(long))
            {
                return dict.Select(kv =>
                    kv.Value is Bencodex.Types.Integer l
                        ? (long)l.Value
                        : throw new ArgumentException(
                            $"Invalid encoded type {kv.Value.GetType()} encountered."));
            }
            else if (valueType == typeof(BigInteger))
            {
                return dict.Select(kv =>
                    kv.Value is Bencodex.Types.Integer bi
                        ? bi.Value
                        : throw new ArgumentException(
                            $"Invalid encoded type {kv.Value.GetType()} encountered."));
            }
            else if (valueType == typeof(ImmutableArray<byte>))
            {
                return dict.Select(kv =>
                    kv.Value is Bencodex.Types.Binary bs
                        ? bs.ByteArray
                        : throw new ArgumentException(
                            $"Invalid encoded type {kv.Value.GetType()} encountered."));
            }
            else if (valueType == typeof(string))
            {
                return dict.Select(kv =>
                    kv.Value is Bencodex.Types.Text s
                        ? s.Value
                        : throw new ArgumentException(
                            $"Invalid encoded type {kv.Value.GetType()} encountered."));
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid target value type {valueType} encountered.");
            }
        }
    }
}
