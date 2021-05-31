namespace Libplanet.DataBase
{
    public interface IBatch
    {
        public void Set(byte[] key, byte[] value);

        public void Delete(byte[] key);

        public void Write();
    }
}
