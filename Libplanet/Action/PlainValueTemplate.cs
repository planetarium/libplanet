using System;
using System.Collections.Immutable;
using System.Numerics;
using System.Reflection;

namespace Libplanet.Action
{
    public abstract partial class PlainValueTemplate
    {
        protected PlainValueTemplate()
        {
        }

        protected PlainValueTemplate(Bencodex.Types.Dictionary encoded)
        {
            PropertyInfo[] properties = this.GetType().GetProperties();
            foreach (PropertyInfo property in properties)
            {
                Type type = property.PropertyType;
                Bencodex.Types.IValue value = encoded[property.Name];
                property.SetValue(this, DecodeFromIValue(value, type));
            }
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
                dynamic? value = property.GetValue(this, null);
                result = result.Add(property.Name, (Bencodex.Types.IValue)EncodeToIValue(value));
            }

            return result;
        }
    }
}
