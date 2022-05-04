#nullable enable
using System;
using System.Collections;
using System.Collections.Generic;
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
                    $"Failed to decode {nameof(encoded)}: encoded");
            return (T)instance;
        }

        public Bencodex.Types.Dictionary Encode()
        {
            Bencodex.Types.Dictionary result = Bencodex.Types.Dictionary.Empty;
            PropertyInfo[] properties = this.GetType().GetProperties();
            foreach (PropertyInfo property in properties)
            {
                dynamic? value = property.GetValue(this, null);

                // NOTE: Additional IValue casting is needed for this to work.
                result = result.Add(property.Name, (Bencodex.Types.IValue)GetIValue(value));
            }

            return result;
        }

        private static Bencodex.Types.IValue GetIValue(object? value)
        {
            switch (value)
            {
                case null:
                    return Bencodex.Types.Null.Value;
                case bool b:
                    return new Bencodex.Types.Boolean(b);
                case int i:
                    return new Bencodex.Types.Integer(i);
                case long l:
                    return new Bencodex.Types.Integer(l);
                case BigInteger bi:
                    return new Bencodex.Types.Integer(bi);
                case IList<byte> bs:
                    // FIXME: Bencodex should accept List<byte>.
                    return new Bencodex.Types.Binary(bs.ToArray());
                case string s:
                    return new Bencodex.Types.Text(s);
                case PlainValueTemplate am:
                    return am.Encode();
                case IList list:
                    return GetListIValue(list);
                case IDictionary dict:
                    return GetDictionaryIValue(dict);
                default:
                    throw new ArgumentException(
                        $"Invalid type encountered for {nameof(value)}: {value}");
            }
        }

        private static Bencodex.Types.List GetListIValue(IList list)
        {
            return new Bencodex.Types.List(list.Cast<object?>().Select(x => GetIValue(x)));
        }

        private static Bencodex.Types.Dictionary GetDictionaryIValue(IDictionary dict)
        {
            Type[] types = dict.GetType().GetGenericArguments();
            Type keyType = types[0];
            if (keyType == typeof(string) || keyType.GetInterfaces().Contains(typeof(IList<byte>)))
            {
                return new Bencodex.Types.Dictionary(dict
                    .Cast<object>()
                    .Select(kv =>
                        {
                            PropertyInfo[] properties = kv.GetType().GetProperties();
                            object? key = properties[0].GetValue(kv);
                            object? value = properties[1].GetValue(kv);
                            return new KeyValuePair<Bencodex.Types.IKey, Bencodex.Types.IValue>(
                                GetIKey(key), GetIValue(value));
                        }));
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid key type encountered for {nameof(dict)}: {dict}");
            }
        }

        private static Bencodex.Types.IKey GetIKey(object? key)
        {
            switch (key)
            {
                // NOTE: Check for null is only here for better readability.
                case null:
                    throw new NullReferenceException(
                        $"Argument {nameof(key)} cannot be null");
                case string s:
                    return new Bencodex.Types.Text(s);
                case IList<byte> bs:
                    return new Bencodex.Types.Binary(bs.ToArray());
                default:
                    // TODO: Allow Address type.
                    throw new ArgumentException(
                        $"Invalid type encountered for {nameof(key)}: {key}");
            }
        }
    }
}
