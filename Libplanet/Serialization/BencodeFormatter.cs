using System.Collections;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using BencodeNET.Objects;
using BencodeNET.Parsing;

namespace Libplanet.Serialization
{
    public class BencodeFormatter<T> : IFormatter
    {
        public SerializationBinder Binder { get; set; }

        public StreamingContext Context { get; set; }

        public ISurrogateSelector SurrogateSelector { get; set; }

        public object Deserialize(Stream serializationStream)
        {
            var bencodeParser = new BencodeParser();
            BDictionary bo =
                bencodeParser.Parse<BDictionary>(serializationStream);
            var type = typeof(T);
            var constructorInfo = type.GetConstructor(
                BindingFlags.NonPublic | BindingFlags.CreateInstance |
                BindingFlags.Instance,
                null,
                new[] { typeof(SerializationInfo), typeof(StreamingContext) },
                null);

            var serializationInfo = new SerializationInfo(
                typeof(T),
                new BencodeFormatterConverter()
            );

            foreach (var kv in bo)
            {
                serializationInfo.AddValue(
                    kv.Key.ToString(),
                    FromBObject(kv.Value)
                );
            }

            if (constructorInfo == null)
            {
                throw new SerializationException(
                    $"Can't found proper constructor in {type} to deserialize it.");
            }

            return constructorInfo.Invoke(
                new object[]
                {
                    serializationInfo,
                    Context
                }
            );
        }

        public void Serialize(Stream serializationStream, object graph)
        {
            if (graph is ISerializable serializable)
            {
                ToBDictionary(serializable).EncodeTo(serializationStream);
            }
            else
            {
                throw new SerializationException("This serializer can serialize only ISerializable.");
            }
        }

        private static object FromBObject(IBObject o)
        {
            switch (o)
            {
                case BString s:
                    return s.Value.ToArray();
                case BNumber number:
                    return number.Value;
                case BList l:
                    return l.Select(FromBObject).ToList();
                case BDictionary d:
                    return d.ToDictionary(
                        e => e.Key.ToString(),
                        e => FromBObject(e.Value)
                    );
                default:
                    throw new SerializationException(
                        $"Can't convert {o} to plain object."
                    );
            }
        }

        private IBObject ToBObject(object o)
        {
            if (o == null)
            {
                throw new SerializationException(
                    "Can't convert null to IBObject.");
            }

            switch (o)
            {
                case string s:
                    return new BString(s);
                case long l:
                    return new BNumber(l);
                case int i:
                    return new BNumber(i);
                case byte[] bytes:
                    return new BString(bytes);
                case IDictionary d:
                    var rv = new BDictionary();
                    foreach (var k in d.Keys)
                    {
                        rv[new BString(k.ToString())] = ToBObject(d[k]);
                    }

                    return rv;
                case IEnumerable e:
                    return new BList(
                        e.Cast<object>().Select(ToBObject)
                    );
                case ISerializable i:
                    return ToBDictionary(i);
            }

            throw new SerializationException(
                $"Can't convert {o} to IBObject."
            );
        }

        private BDictionary ToBDictionary(ISerializable serializable)
        {
            var converter = new FormatterConverter();
            var serializationInfo = new SerializationInfo(typeof(T), converter);
            serializable.GetObjectData(serializationInfo, Context);

            var bo = new BDictionary();
            foreach (SerializationEntry entry in serializationInfo)
            {
                if (entry.Value is ISerializable serializableValue)
                {
                    bo[entry.Name] = ToBDictionary(serializableValue);
                }
                else
                {
                    bo[entry.Name] = ToBObject(entry.Value);
                }
            }

            return bo;
        }
    }
}
