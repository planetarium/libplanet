using System;
using System.Numerics;
using System.Runtime.Serialization;
using System.Text;

namespace Libplanet.Serialization
{
    internal class BencodexFormatterConverter : IFormatterConverter
    {
        private readonly IFormatterConverter _impl = new FormatterConverter();

        public object Convert(object value, Type type)
        {
            try
            {
                return _impl.Convert(value, type);
            }
            catch (InvalidCastException e)
            {
                throw new InvalidCastException(
                    $"Failed to convert the object {value} to {type}.",
                    e
                );
            }
        }

        public object Convert(object value, TypeCode typeCode)
        {
            return _impl.Convert(value, typeCode);
        }

        public bool ToBoolean(object value)
        {
            return (bool)value;
        }

        public byte ToByte(object value)
        {
            return _impl.ToByte(value);
        }

        public char ToChar(object value)
        {
            return _impl.ToChar(value);
        }

        public DateTime ToDateTime(object value)
        {
            return _impl.ToDateTime(value);
        }

        public decimal ToDecimal(object value)
        {
            return _impl.ToDecimal(value);
        }

        public double ToDouble(object value)
        {
            return _impl.ToDouble(value);
        }

        public short ToInt16(object value)
        {
            return (short)(BigInteger)value;
        }

        public int ToInt32(object value)
        {
            return (int)(BigInteger)value;
        }

        public long ToInt64(object value)
        {
            return (long)(BigInteger)value;
        }

        public sbyte ToSByte(object value)
        {
            return _impl.ToSByte(value);
        }

        public float ToSingle(object value)
        {
            return _impl.ToSingle(value);
        }

        public string ToString(object o)
        {
            if (o is byte[] bytes)
            {
                return Encoding.UTF8.GetString(bytes);
            }

            return (string)o;
        }

        public ushort ToUInt16(object value)
        {
            return (ushort)(BigInteger)value;
        }

        public uint ToUInt32(object value)
        {
            return (uint)(BigInteger)value;
        }

        public ulong ToUInt64(object value)
        {
            return (ulong)(BigInteger)value;
        }
    }
}
