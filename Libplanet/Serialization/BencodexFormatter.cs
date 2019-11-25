using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Numerics;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text;
using Bencodex;
using Bencodex.Types;
using Libplanet.Tx;
using Boolean = Bencodex.Types.Boolean;

namespace Libplanet.Serialization
{
    public class BencodexFormatter<T> : IFormatter
    {
        private readonly Codec _codec;

        public BencodexFormatter()
        {
            _codec = new Codec();
        }

        public SerializationBinder Binder { get; set; }

        public StreamingContext Context { get; set; }

        public ISurrogateSelector SurrogateSelector { get; set; }

        public object Deserialize(Stream serializationStream)
        {
            IValue value = _codec.Decode(serializationStream);
            if (!(value is Dictionary))
            {
                throw new SerializationException(
                    "expected a dictionary"
                );
            }

            var bo = (Dictionary)value;
            var type = typeof(T);
            var constructorInfo = type.GetConstructor(
                BindingFlags.NonPublic | BindingFlags.CreateInstance |
                BindingFlags.Instance,
                null,
                new[] { typeof(SerializationInfo), typeof(StreamingContext) },
                null);

            var serializationInfo = new SerializationInfo(
                typeof(T),
                new BencodexFormatterConverter()
            );

            foreach (var kv in bo)
            {
                var key = FromBencodexKey(kv.Key);
                object v;

                // FIXME: This is needed to prevent that some properties become .NET object.
                //        see issue #541, #552.
                if ((typeof(T).Namespace == typeof(Transaction<>).Namespace &&
                     typeof(T).Name == typeof(Transaction<>).Name && key == "actions") ||
                    (typeof(T).Namespace == typeof(IImmutableDictionary<,>).Namespace &&
                     typeof(T).Name == typeof(IImmutableDictionary<,>).Name &&
                     typeof(T).IsGenericType &&
                     typeof(T).GetGenericArguments().Last() == typeof(IValue)))
                {
                    v = kv.Value;
                }
                else
                {
                    v = FromBencodexValue(kv.Value);
                }

                serializationInfo.AddValue(key, v);
            }

            if (constructorInfo == null)
            {
                throw new SerializationException(
                    $"Can't found proper constructor in {type} " +
                    "to deserialize it."
                );
            }

            return constructorInfo.Invoke(
                new object[]
                {
                    serializationInfo,
                    Context,
                }
            );
        }

        public void Serialize(Stream serializationStream, object graph)
        {
            if (graph is ISerializable serializable)
            {
                _codec.Encode(
                    ToBencodexDictionary(serializable),
                    serializationStream
                );
            }
            else
            {
                throw new SerializationException(
                    "This serializer can serialize only ISerializable."
                );
            }
        }

        private static string FromBencodexKey(IKey key)
        {
            switch (key)
            {
                case Text textKey:
                    return textKey.Value;

                case Binary binaryKey:
                    try
                    {
                        return Encoding.UTF8.GetString(binaryKey.Value);
                    }
                    catch (ArgumentException e)
                    {
                        throw new SerializationException(
                            "a dictionary key is not a valid UTF-8 " +
                            "byte array",
                            e
                        );
                    }

                default:
                    throw new SerializationException(
                        "unexpected error; " +
                        "a dictionary key is neither text nor binary"
                    );
            }
        }

        private static object FromBencodexValue(IValue o)
        {
            switch (o)
            {
                case Null _:
                    return null;
                case Boolean b:
                    return b.Value;
                case Binary bin:
                    return bin.Value;
                case Text s:
                    return s.Value;
                case Integer number:
                    return number.Value;
                case List l:
                    return l.Select(FromBencodexValue).ToList();
                case Dictionary d:
                    var dictionary = new Dictionary<string, object>();
                    foreach (var pair in d)
                    {
                        var key = FromBencodexKey(pair.Key);
                        var value = key != "actions" ? FromBencodexValue(pair.Value) : pair.Value;
                        dictionary.Add(key, value);
                    }

                    return dictionary;
                default:
                    throw new SerializationException(
                        $"Can't convert {o} to plain object."
                    );
            }
        }

        private IKey ToBencodexKey(object o)
        {
            switch (o)
            {
                case null:
                    throw new SerializationException(
                        "null cannot be a Bencodex dictionary key"
                    );
                case string s:
                    return new Text(s);
                case byte[] byteArray:
                    return new Binary(byteArray);
                case IEnumerable<byte> bytes:
                    return new Binary(bytes.ToArray());
                default:
                    throw new SerializationException(
                        $"{o} cannot be a Bencodex dictionary key; " +
                        "a key must be a Unicode string or a byte array"
                    );
            }
        }

        private IValue ToBencodexValue(object o)
        {
            switch (o)
            {
                case null:
                    return default(Null);
                case bool b:
                    return new Boolean(b);
                case string s:
                    return ToBencodexKey(s);
                case long l:
                    return new Integer(l);
                case uint ui:
                    return new Integer(ui);
                case ulong ul:
                    return new Integer(checked((long)ul));
                case int i:
                    return new Integer(i);
                case BigInteger bi:
                    return new Integer(bi);
                case byte[] byteArray:
                    return ToBencodexKey(byteArray);
                case IValue value:
                    return value;
                case IDictionary d:
                    return new Dictionary(
                        d.Cast<KeyValuePair<string, object>>().Select(
                            kv => new KeyValuePair<IKey, IValue>(
                                ToBencodexKey(kv.Key),
                                ToBencodexValue(kv.Value)
                            )
                        )
                    );
                case IEnumerable e:
                    return new List(
                        e.Cast<object>().Select(ToBencodexValue)
                    );
                case ISerializable i:
                    return ToBencodexDictionary(i);
            }

            throw new SerializationException(
                $"Can't convert {o.GetType()} to IBObject."
            );
        }

        private Dictionary ToBencodexDictionary(ISerializable serializable)
        {
            var converter = new FormatterConverter();
            var serializationInfo = new SerializationInfo(typeof(T), converter);
            serializable.GetObjectData(serializationInfo, Context);

            var entries = new List<KeyValuePair<IKey, IValue>>();
            foreach (SerializationEntry entry in serializationInfo)
            {
                IValue v = entry.Value is ISerializable serializableValue
                    ? ToBencodexDictionary(serializableValue)
                    : ToBencodexValue(entry.Value);
                entries.Add(
                    new KeyValuePair<IKey, IValue>(
                        new Binary(Encoding.UTF8.GetBytes(entry.Name)),
                        v
                    )
                );
            }

            return new Dictionary(entries);
        }
    }
}
