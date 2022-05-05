using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Reflection;

namespace Libplanet.Action
{
    public class PlainValueTemplate
    {
        public PlainValueTemplate()
        {
        }

        public PlainValueTemplate(Bencodex.Types.Dictionary encoded)
        {
            throw new NotSupportedException();
        }

        public static PlainValueTemplate Decode<T>(Bencodex.Types.Dictionary encoded)
            where T : PlainValueTemplate, new()
        {
            object instance = Activator.CreateInstance(typeof(T), encoded)
                ?? throw new NullReferenceException(
                    $"Failed to decode {nameof(encoded)}: {encoded}");
            return (T)instance;
        }

        public Bencodex.Types.Dictionary Encode()
        {
            Bencodex.Types.Dictionary result = Bencodex.Types.Dictionary.Empty;
            PropertyInfo[] properties = this.GetType().GetProperties();
            foreach (PropertyInfo property in properties)
            {
                Type type = property.PropertyType;
                dynamic? value = property.GetValue(this, null);
                if (type == typeof(bool?)
                    || type == typeof(int?)
                    || type == typeof(long?)
                    || type == typeof(BigInteger?)
                    || type == typeof(ImmutableArray<byte>?))
                {
                    throw new NotSupportedException(
                        $"Nullable value type is not supported: {type}");
                }

                // NOTE: Additional IValue casting is needed for this to work.
                result = result.Add(property.Name, (Bencodex.Types.IValue)EncodeToIValue(value));
            }

            return result;
        }

        private static Bencodex.Types.IValue EncodeToIValue(object? value)
        {
            switch (value)
            {
                case null:
                    throw new NotSupportedException($"Null value is not supported");
                case bool b:
                    return new Bencodex.Types.Boolean(b);
                case int i:
                    return new Bencodex.Types.Integer(i);
                case long l:
                    return new Bencodex.Types.Integer(l);
                case BigInteger bi:
                    return new Bencodex.Types.Integer(bi);
                case ImmutableArray<byte> bs:
                    return new Bencodex.Types.Binary(bs);
                case string s:
                    return new Bencodex.Types.Text(s);
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

        private static Bencodex.Types.List EncodeToListIValue(IList list)
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
                else
                {
                    return new Bencodex.Types.List(
                        list.Cast<object?>().Select(x => EncodeToIValue(x)));
                }
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid type encountered for {nameof(list)}: {list}");
            }
        }

        private static Bencodex.Types.Dictionary EncodeToDictionaryIValue(IDictionary dict)
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
#pragma warning disable MEN002
                    else
                    {
                        return new Bencodex.Types.Dictionary(dict
                            .Cast<object>()
                            .Select(kv =>
                                {
                                    PropertyInfo[] properties = kv.GetType().GetProperties();
                                    object? key = properties[0].GetValue(kv);
                                    object? value = properties[1].GetValue(kv);
                                    return new KeyValuePair<Bencodex.Types.IKey, Bencodex.Types.IValue>(
                                        EncodeToIKey(key), EncodeToIValue(value));
                                }));
                    }
#pragma warning restore MEN002
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

        private static Bencodex.Types.IKey EncodeToIKey(object? key)
        {
            switch (key)
            {
                // NOTE: Check for null is only here for better readability.
                case null:
                    throw new NullReferenceException(
                        $"Argument {nameof(key)} cannot be null");
                case string s:
                    return new Bencodex.Types.Text(s);
                case ImmutableArray<byte> bs:
                    return new Bencodex.Types.Binary(bs);
                default:
                    // TODO: Allow Address type.
                    throw new ArgumentException(
                        $"Invalid type encountered for {nameof(key)}: {key}");
            }
        }
    }
}
