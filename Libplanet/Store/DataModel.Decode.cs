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
        private static dynamic DecodeFromIValue(BTypes.IValue value, Type type)
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

        private static object DecodeFromListIValue(BTypes.List list, Type type)
        {
            if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(ImmutableList<>))
            {
                Type[] genericTypes = type.GetGenericArguments();
                Type genericType = genericTypes[0];

                IEnumerable<dynamic> tempList = list
                    .Select(x => DecodeFromIValue(x, genericType));

                switch (tempList)
                {
#pragma warning disable MEN002
                    case IEnumerable<dynamic> listBool when genericType == typeof(bool):
                        return listBool.Select(x => (bool)x).ToImmutableList();
                    case IEnumerable<dynamic> listInt when genericType == typeof(int):
                        return listInt.Select(x => (int)x).ToImmutableList();
                    case IEnumerable<dynamic> listLong when genericType == typeof(long):
                        return listLong.Select(x => (long)x).ToImmutableList();
                    case IEnumerable<dynamic> listBigInteger when genericType == typeof(BigInteger):
                        return listBigInteger.Select(x => (BigInteger)x).ToImmutableList();
                    case IEnumerable<dynamic> listBytes when genericType == typeof(ImmutableArray<byte>):
                        return listBytes.Select(x => (ImmutableArray<byte>)x).ToImmutableList();
                    case IEnumerable<dynamic> listGuid when genericType == typeof(Guid):
                        return listGuid.Select(x => (Guid)x).ToImmutableList();
                    case IEnumerable<dynamic> listAddress when genericType == typeof(Address):
                        return listAddress.Select(x => (Address)x).ToImmutableList();
                    case IEnumerable<dynamic> listString when genericType == typeof(string):
                        return listString.Select(x => (string)x).ToImmutableList();
                    default:
                        throw new ArgumentException(
                            $"Invalid generic type {genericType} encountered.");
#pragma warning restore MEN002
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid target property type {type} encountered.");
            }
        }

        private static object DecodeFromDictionaryIValue(BTypes.Dictionary dict, Type type)
        {
            if (type.IsGenericType &&
                type.GetGenericTypeDefinition() == typeof(ImmutableDictionary<,>))
            {
                Type[] genericTypes = type.GetGenericArguments();
                Type keyType = genericTypes[0];
                Type valueType = genericTypes[1];

                IEnumerable<KeyValuePair<dynamic, dynamic>> tempDict = dict.Select(
                    kv => new KeyValuePair<dynamic, dynamic>(
                        DecodeFromIValue(kv.Key, keyType),
                        DecodeFromIValue(kv.Value, valueType)));

                switch (tempDict)
                {
#pragma warning disable MEN002
                    // ImmutabeArray<byte> type keys.
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> bytesBoolDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(bool):
                        return bytesBoolDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, bool>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> bytesIntDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(int):
                        return bytesIntDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, int>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> bytesLongDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(long):
                        return bytesLongDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, long>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> bytesBigIntegerDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(BigInteger):
                        return bytesBigIntegerDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, BigInteger>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> bytesBytesDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(ImmutableArray<byte>):
                        return bytesBytesDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, ImmutableArray<byte>>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> bytesGuidDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(Guid):
                        return bytesGuidDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, Guid>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> bytesAddressDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(Address):
                        return bytesAddressDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, Address>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> bytesStringDict
                        when keyType == typeof(ImmutableArray<byte>) && valueType == typeof(string):
                        return bytesStringDict
                            .Select(kv => new KeyValuePair<ImmutableArray<byte>, string>(kv.Key, kv.Value))
                            .ToImmutableDictionary();

                    // Guid type keys.
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> guidBoolDict
                        when keyType == typeof(Guid) && valueType == typeof(bool):
                        return guidBoolDict
                            .Select(kv => new KeyValuePair<Guid, bool>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> guidIntDict
                        when keyType == typeof(Guid) && valueType == typeof(int):
                        return guidIntDict
                            .Select(kv => new KeyValuePair<Guid, int>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> guidLongDict
                        when keyType == typeof(Guid) && valueType == typeof(long):
                        return guidLongDict
                            .Select(kv => new KeyValuePair<Guid, long>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> guidBigIntegerDict
                        when keyType == typeof(Guid) && valueType == typeof(BigInteger):
                        return guidBigIntegerDict
                            .Select(kv => new KeyValuePair<Guid, BigInteger>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> guidBytesDict
                        when keyType == typeof(Guid) && valueType == typeof(ImmutableArray<byte>):
                        return guidBytesDict
                            .Select(kv => new KeyValuePair<Guid, ImmutableArray<byte>>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> guidGuidDict
                        when keyType == typeof(Guid) && valueType == typeof(Guid):
                        return guidGuidDict
                            .Select(kv => new KeyValuePair<Guid, Guid>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> guidAddressDict
                        when keyType == typeof(Guid) && valueType == typeof(Address):
                        return guidAddressDict
                            .Select(kv => new KeyValuePair<Guid, Address>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> guidStringDict
                        when keyType == typeof(Guid) && valueType == typeof(string):
                        return guidStringDict
                            .Select(kv => new KeyValuePair<Guid, string>(kv.Key, kv.Value))
                            .ToImmutableDictionary();

                    // Address type keys.
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> addressBoolDict
                        when keyType == typeof(Address) && valueType == typeof(bool):
                        return addressBoolDict
                            .Select(kv => new KeyValuePair<Address, bool>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> addressIntDict
                        when keyType == typeof(Address) && valueType == typeof(int):
                        return addressIntDict
                            .Select(kv => new KeyValuePair<Address, int>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> addressLongDict
                        when keyType == typeof(Address) && valueType == typeof(long):
                        return addressLongDict
                            .Select(kv => new KeyValuePair<Address, long>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> addressBigIntegerDict
                        when keyType == typeof(Address) && valueType == typeof(BigInteger):
                        return addressBigIntegerDict
                            .Select(kv => new KeyValuePair<Address, BigInteger>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> addressBytesDict
                        when keyType == typeof(Address) && valueType == typeof(ImmutableArray<byte>):
                        return addressBytesDict
                            .Select(kv => new KeyValuePair<Address, ImmutableArray<byte>>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> addressGuidDict
                        when keyType == typeof(Address) && valueType == typeof(Guid):
                        return addressGuidDict
                            .Select(kv => new KeyValuePair<Address, Guid>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> addressAddressDict
                        when keyType == typeof(Address) && valueType == typeof(Address):
                        return addressAddressDict
                            .Select(kv => new KeyValuePair<Address, Address>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> addressStringDict
                        when keyType == typeof(Address) && valueType == typeof(string):
                        return addressStringDict
                            .Select(kv => new KeyValuePair<Address, string>(kv.Key, kv.Value))
                            .ToImmutableDictionary();

                    // string type keys.
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> stringBoolDict
                        when keyType == typeof(string) && valueType == typeof(bool):
                        return stringBoolDict
                            .Select(kv => new KeyValuePair<string, bool>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> stringIntDict
                        when keyType == typeof(string) && valueType == typeof(int):
                        return stringIntDict
                            .Select(kv => new KeyValuePair<string, int>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> stringLongDict
                        when keyType == typeof(string) && valueType == typeof(long):
                        return stringLongDict
                            .Select(kv => new KeyValuePair<string, long>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> stringBigIntegerDict
                        when keyType == typeof(string) && valueType == typeof(BigInteger):
                        return stringBigIntegerDict
                            .Select(kv => new KeyValuePair<string, BigInteger>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> stringBytesDict
                        when keyType == typeof(string) && valueType == typeof(ImmutableArray<byte>):
                        return stringBytesDict
                            .Select(kv => new KeyValuePair<string, ImmutableArray<byte>>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> stringGuidDict
                        when keyType == typeof(string) && valueType == typeof(Guid):
                        return stringGuidDict
                            .Select(kv => new KeyValuePair<string, Guid>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> stringAddressDict
                        when keyType == typeof(string) && valueType == typeof(Address):
                        return stringAddressDict
                            .Select(kv => new KeyValuePair<string, Address>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    case IEnumerable<KeyValuePair<dynamic, dynamic>> stringStringDict
                        when keyType == typeof(string) && valueType == typeof(string):
                        return stringStringDict
                            .Select(kv => new KeyValuePair<string, string>(kv.Key, kv.Value))
                            .ToImmutableDictionary();
                    default:
                        throw new ArgumentException(
                            $"Invalid key {keyType} type and/or value {valueType} type encountered.");
#pragma warning restore MEN002
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
