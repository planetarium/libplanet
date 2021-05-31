using System;
namespace Libplanet.DataBase
{
    public interface IDataBase : IDisposable
    {
        public byte[] Get(byte[] key);

        public bool Has(byte[] key);

        public void Set(byte[] key, byte[] value);

        public void Delete(byte[] key);

        public IIterator Iterator(byte[] start, byte[] end);

        public IIterator ReverseIterator(byte[] start, byte[] end);
    }
}
