using System;
using System.Runtime.Serialization;
using System.Text;

namespace Libplanet.Serialization
{
    internal class BencodeFormatterConverter : IFormatterConverter
    {
        private readonly IFormatterConverter _impl = new FormatterConverter();

        public object Convert(object value, Type type)
        {
            return _impl.Convert(value, type);
        }

        public object Convert(object value, TypeCode typeCode)
        {
            return _impl.Convert(value, typeCode);
        }

        public bool ToBoolean(object value)
        {
            return _impl.ToBoolean(value);
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
            return _impl.ToInt16(value);
        }

        public int ToInt32(object value)
        {
            return _impl.ToInt32(value);
        }

        public long ToInt64(object value)
        {
            return _impl.ToInt64(value);
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

            return _impl.ToString();
        }

        public ushort ToUInt16(object value)
        {
            return _impl.ToUInt16(value);
        }

        public uint ToUInt32(object value)
        {
            return _impl.ToUInt32(value);
        }

        public ulong ToUInt64(object value)
        {
            return _impl.ToUInt64(value);
        }
    }
}
