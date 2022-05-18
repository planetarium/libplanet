using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using BTypes = Bencodex.Types;

namespace Libplanet.Store
{
    public abstract partial class DataModel
    {
        private static object DecodeFromIValue(BTypes.IValue value, Type type)
        {
            switch (value)
            {
                case BTypes.Null _:
                    throw new NotSupportedException($"Null value is not supported: {value}");
                case BTypes.Boolean b:
                    return b.Value;
                case BTypes.Integer i when type == typeof(int):
                    return (int)i.Value;
                case BTypes.Integer l when type == typeof(long):
                    return (long)l.Value;
                case BTypes.Integer bigInteger when type == typeof(BigInteger):
                    return bigInteger.Value;
                case BTypes.Binary bytes when type == typeof(ImmutableArray<byte>):
                    return bytes.ByteArray;
                case BTypes.Binary guid when type == typeof(Guid):
                    return new Guid(guid.ToByteArray());
                case BTypes.Binary bytes when type == typeof(Address):
                    return new Address(bytes.ByteArray);
                case BTypes.Text s when type == typeof(string):
                    return s.Value;
                case BTypes.Dictionary pvt when
                    type.IsSubclassOf(typeof(DataModel)):
                    object instance = Activator.CreateInstance(type, pvt)
                        ?? throw new NullReferenceException(
                            $"Failed to decode {value} to target type {type}");
                    return instance;
                case BTypes.List list:
                    return DecodeFromListIValue(list, type);
                case BTypes.Dictionary dict:
                    return DecodeFromDictionaryIValue(dict, type);
                default:
                    throw new ArgumentException($"Failed to decode {value} to target type {type}");
            }
        }

        private static object DecodeFromListIValue(BTypes.List list, Type type)
        {
            if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(ImmutableList<>))
            {
                Type[] genericTypes = type.GetGenericArguments();
                Type genericType = genericTypes[0];

                List<object> decodedList = list
                    .Select(x => DecodeFromIValue(x, genericType))
                    .ToList();

                switch (decodedList)
                {
                    case List<object> listBool when genericType == typeof(bool):
                        return listBool.Cast<bool>().ToImmutableList();
                    case List<object> listInt when genericType == typeof(int):
                        return listInt.Cast<int>().ToImmutableList();
                    case List<object> listLong when genericType == typeof(long):
                        return listLong.Cast<long>().ToImmutableList();
                    case List<object> listBigInteger when genericType == typeof(BigInteger):
                        return listBigInteger.Cast<BigInteger>().ToImmutableList();
                    case List<object> listBytes when genericType == typeof(ImmutableArray<byte>):
                        return listBytes.Cast<ImmutableArray<byte>>().ToImmutableList();
                    case List<object> listAddress when genericType == typeof(Address):
                        return listAddress.Cast<Address>().ToImmutableList();
                    case List<object> listString when genericType == typeof(string):
                        return listString.Cast<string>().ToImmutableList();
                    default:
                        throw new ArgumentException(
                            $"Invalid target property type {type} encountered.");
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid target property type {type} encountered.");
            }
        }

#pragma warning disable MEN003
        private static object DecodeFromDictionaryIValue(BTypes.Dictionary dict, Type type)
        {
            if (type.IsGenericType &&
                type.GetGenericTypeDefinition() == typeof(ImmutableDictionary<,>))
            {
                Type[] genericTypes = type.GetGenericArguments();
                Type keyType = genericTypes[0];
                Type valueType = genericTypes[1];

                var keys = DecodeFromListIValue(new BTypes.List(dict.Keys), keyType);
                var values = DecodeFromListIValue(new BTypes.List(dict.Values), valueType);

                if (keys is List listKeys)
                {
                    if (values is List listValues)
                    {
                        return listKeys.Zip(listValues, (k, v) => new { k, v })
                            .ToDictionary(x => x.k, x => x.v);
                    }
                    else
                    {
                        throw new ArgumentException(
                            $"Invalid target property type {type} encountered.");
                    }
                }
                else
                {
                    throw new ArgumentException(
                        $"Invalid target property type {type} encountered.");
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid target property type {type} encountered.");
            }
        }
    }
}
