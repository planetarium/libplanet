using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
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
                case BTypes.Dictionary dm when
                    type.IsSubclassOf(typeof(DataModel)):
                    object instance = Activator.CreateInstance(type, dm)
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

#pragma warning disable MEN002 // Lines too long.
        private static object DecodeFromListIValue(BTypes.List list, Type type)
        {
            if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(ImmutableList<>))
            {
                Type[] genericTypes = type.GetGenericArguments();
                Type genericType = genericTypes[0];

                IEnumerable<object> tempList = list
                    .Select(x => DecodeFromIValue(x, genericType));

                switch (tempList)
                {
                    case IEnumerable<object> listBool when genericType == typeof(bool):
                        return listBool.Select(x => (bool)x).ToImmutableList();
                    case IEnumerable<object> listInt when genericType == typeof(int):
                        return listInt.Select(x => (int)x).ToImmutableList();
                    case IEnumerable<object> listLong when genericType == typeof(long):
                        return listLong.Select(x => (long)x).ToImmutableList();
                    case IEnumerable<object> listBigInteger when genericType == typeof(BigInteger):
                        return listBigInteger.Select(x => (BigInteger)x).ToImmutableList();
                    case IEnumerable<object> listBytes when genericType == typeof(ImmutableArray<byte>):
                        return listBytes.Select(x => (ImmutableArray<byte>)x).ToImmutableList();
                    case IEnumerable<object> listGuid when genericType == typeof(Guid):
                        return listGuid.Select(x => (Guid)x).ToImmutableList();
                    case IEnumerable<object> listAddress when genericType == typeof(Address):
                        return listAddress.Select(x => (Address)x).ToImmutableList();
                    case IEnumerable<object> listString when genericType == typeof(string):
                        return listString.Select(x => (string)x).ToImmutableList();
                    default:
                        throw new ArgumentException(
                            $"Invalid generic type {genericType} encountered.");
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid target property type {type} encountered.");
            }
        }
#pragma warning restore MEN002

#pragma warning disable MEN002, MEN003 // Lines too long; method too long.
        private static object DecodeFromDictionaryIValue(BTypes.Dictionary dict, Type type)
        {
            if (type.IsGenericType &&
                type.GetGenericTypeDefinition() == typeof(ImmutableDictionary<,>))
            {
                Type[] genericTypes = type.GetGenericArguments();
                Type keyType = genericTypes[0];
                Type valueType = genericTypes[1];

                IEnumerable<KeyValuePair<object, object>> tempDict = dict.Select(
                    kv => new KeyValuePair<object, object>(
                        DecodeFromIValue(kv.Key, keyType),
                        DecodeFromIValue(kv.Value, valueType)));

                switch (tempDict)
                {
                    // ImmutabeArray<byte> type keys.
                    case IEnumerable<KeyValuePair<object, object>> bytesBoolDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(bool):
                        return bytesBoolDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, bool>(
                                (ImmutableArray<byte>)kv.Key, (bool)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> bytesIntDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(int):
                        return bytesIntDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, int>(
                                (ImmutableArray<byte>)kv.Key, (int)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> bytesLongDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(long):
                        return bytesLongDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, long>(
                                (ImmutableArray<byte>)kv.Key, (long)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> bytesBigIntegerDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(BigInteger):
                        return bytesBigIntegerDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, BigInteger>(
                                (ImmutableArray<byte>)kv.Key, (BigInteger)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> bytesBytesDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(ImmutableArray<byte>):
                        return bytesBytesDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, ImmutableArray<byte>>(
                                (ImmutableArray<byte>)kv.Key, (ImmutableArray<byte>)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> bytesGuidDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(Guid):
                        return bytesGuidDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, Guid>(
                                (ImmutableArray<byte>)kv.Key, (Guid)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> bytesAddressDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(Address):
                        return bytesAddressDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, Address>(
                                (ImmutableArray<byte>)kv.Key, (Address)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> bytesStringDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(string):
                        return bytesStringDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, string>(
                                (ImmutableArray<byte>)kv.Key, (string)kv.Value))
                            .ToImmutableDictionary();

                    // Guid type keys.
                    case IEnumerable<KeyValuePair<object, object>> guidBoolDict
                        when keyType == typeof(Guid) && valueType == typeof(bool):
                        return guidBoolDict
                            .Select(kv => new KeyValuePair<Guid, bool>(
                                (Guid)kv.Key, (bool)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> guidIntDict
                        when keyType == typeof(Guid) && valueType == typeof(int):
                        return guidIntDict
                            .Select(kv => new KeyValuePair<Guid, int>(
                                (Guid)kv.Key, (int)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> guidLongDict
                        when keyType == typeof(Guid) && valueType == typeof(long):
                        return guidLongDict
                            .Select(kv => new KeyValuePair<Guid, long>(
                                (Guid)kv.Key, (long)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> guidBigIntegerDict
                        when keyType == typeof(Guid) && valueType == typeof(BigInteger):
                        return guidBigIntegerDict
                            .Select(kv => new KeyValuePair<Guid, BigInteger>(
                                (Guid)kv.Key, (BigInteger)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> guidBytesDict
                        when keyType == typeof(Guid) && valueType == typeof(ImmutableArray<byte>):
                        return guidBytesDict
                            .Select(kv => new KeyValuePair<Guid, ImmutableArray<byte>>(
                                (Guid)kv.Key, (ImmutableArray<byte>)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> guidGuidDict
                        when keyType == typeof(Guid) && valueType == typeof(Guid):
                        return guidGuidDict
                            .Select(kv => new KeyValuePair<Guid, Guid>(
                                (Guid)kv.Key, (Guid)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> guidAddressDict
                        when keyType == typeof(Guid) && valueType == typeof(Address):
                        return guidAddressDict
                            .Select(kv => new KeyValuePair<Guid, Address>(
                                (Guid)kv.Key, (Address)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> guidStringDict
                        when keyType == typeof(Guid) && valueType == typeof(string):
                        return guidStringDict
                            .Select(kv => new KeyValuePair<Guid, string>(
                                (Guid)kv.Key, (string)kv.Value))
                            .ToImmutableDictionary();

                    // Address type keys.
                    case IEnumerable<KeyValuePair<object, object>> addressBoolDict
                        when keyType == typeof(Address) && valueType == typeof(bool):
                        return addressBoolDict
                            .Select(kv => new KeyValuePair<Address, bool>(
                                (Address)kv.Key, (bool)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> addressIntDict
                        when keyType == typeof(Address) && valueType == typeof(int):
                        return addressIntDict
                            .Select(kv => new KeyValuePair<Address, int>(
                                (Address)kv.Key, (int)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> addressLongDict
                        when keyType == typeof(Address) && valueType == typeof(long):
                        return addressLongDict
                            .Select(kv => new KeyValuePair<Address, long>(
                                (Address)kv.Key, (long)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> addressBigIntegerDict
                        when keyType == typeof(Address) && valueType == typeof(BigInteger):
                        return addressBigIntegerDict
                            .Select(kv => new KeyValuePair<Address, BigInteger>(
                                (Address)kv.Key, (BigInteger)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> addressBytesDict
                        when keyType == typeof(Address) && valueType == typeof(ImmutableArray<byte>):
                        return addressBytesDict
                            .Select(kv => new KeyValuePair<Address, ImmutableArray<byte>>(
                                (Address)kv.Key, (ImmutableArray<byte>)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> addressGuidDict
                        when keyType == typeof(Address) && valueType == typeof(Guid):
                        return addressGuidDict
                            .Select(kv => new KeyValuePair<Address, Guid>(
                                (Address)kv.Key, (Guid)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> addressAddressDict
                        when keyType == typeof(Address) && valueType == typeof(Address):
                        return addressAddressDict
                            .Select(kv => new KeyValuePair<Address, Address>(
                                (Address)kv.Key, (Address)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> addressStringDict
                        when keyType == typeof(Address) && valueType == typeof(string):
                        return addressStringDict
                            .Select(kv => new KeyValuePair<Address, string>(
                                (Address)kv.Key, (string)kv.Value))
                            .ToImmutableDictionary();

                    // string type keys.
                    case IEnumerable<KeyValuePair<object, object>> stringBoolDict
                        when keyType == typeof(string) && valueType == typeof(bool):
                        return stringBoolDict
                            .Select(kv => new KeyValuePair<string, bool>(
                                (string)kv.Key, (bool)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> stringIntDict
                        when keyType == typeof(string) && valueType == typeof(int):
                        return stringIntDict
                            .Select(kv => new KeyValuePair<string, int>(
                                (string)kv.Key, (int)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> stringLongDict
                        when keyType == typeof(string) && valueType == typeof(long):
                        return stringLongDict
                            .Select(kv => new KeyValuePair<string, long>(
                                (string)kv.Key, (long)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> stringBigIntegerDict
                        when keyType == typeof(string) && valueType == typeof(BigInteger):
                        return stringBigIntegerDict
                            .Select(kv => new KeyValuePair<string, BigInteger>(
                                (string)kv.Key, (BigInteger)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> stringBytesDict
                        when keyType == typeof(string) && valueType == typeof(ImmutableArray<byte>):
                        return stringBytesDict
                            .Select(kv => new KeyValuePair<string, ImmutableArray<byte>>(
                                (string)kv.Key, (ImmutableArray<byte>)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> stringGuidDict
                        when keyType == typeof(string) && valueType == typeof(Guid):
                        return stringGuidDict
                            .Select(kv => new KeyValuePair<string, Guid>(
                                (string)kv.Key, (Guid)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> stringAddressDict
                        when keyType == typeof(string) && valueType == typeof(Address):
                        return stringAddressDict
                            .Select(kv => new KeyValuePair<string, Address>(
                                (string)kv.Key, (Address)kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<object, object>> stringStringDict
                        when keyType == typeof(string) && valueType == typeof(string):
                        return stringStringDict
                            .Select(kv => new KeyValuePair<string, string>(
                                (string)kv.Key, (string)kv.Value))
                            .ToImmutableDictionary();
                    default:
                        throw new ArgumentException(
                            $"Invalid key {keyType} type and/or value {valueType} type encountered.");
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid target property type {type} encountered.");
            }
        }
#pragma warning restore MEN002, MEN003
    }
}
