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
        private static readonly Dictionary<Type, int> TYPEDICT = new Dictionary<Type, int>
        {
            { typeof(bool), 0 },
            { typeof(int), 1 },
            { typeof(long), 2 },
            { typeof(ImmutableArray<byte>), 3 },
            { typeof(BigInteger), 4 },
            { typeof(Guid), 5 },
            { typeof(Address), 6 },
            { typeof(string), 7 },
        };

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

                switch (TYPEDICT[genericType])
                {
                    case 0:
                        return decodedList.Cast<bool>().ToImmutableList();
                    case 1:
                        return decodedList.Cast<int>().ToImmutableList();
                    case 2:
                        return decodedList.Cast<long>().ToImmutableList();
                    case 3:
                        return decodedList.Cast<ImmutableArray<byte>>().ToImmutableList();
                    case 4:
                        return decodedList.Cast<BigInteger>().ToImmutableList();
                    case 5:
                        return decodedList.Cast<Guid>().ToImmutableList();
                    case 6:
                        return decodedList.Cast<Address>().ToImmutableList();
                    case 7:
                        return decodedList.Cast<string>().ToImmutableList();
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

                switch (TYPEDICT[keyType])
                {
                    case 3:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    default:
                        throw new ArgumentException(
                            $"Invalid target property type {type} encountered.");
                }

                switch (TYPEDICT[valueType])
                {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    default:
                        throw new ArgumentException(
                            $"Invalid target property type {type} encountered.");
                }

                var keys = DecodeFromListIValue(new BTypes.List(dict.Keys), keyType);
#pragma warning disable CS0618
                var values = DecodeFromListIValue(new BTypes.List(dict.Values), valueType);
#pragma warning restore CS0618

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
