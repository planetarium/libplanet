namespace Libplanet.Tools
{
    public interface IConfigurationService<in TKey, TValue>
        where TKey : class
        where TValue : class
    {
        TValue Get(TKey key);

        void Set(TKey key, TValue value);

        void Delete(TKey key);
    }
}
