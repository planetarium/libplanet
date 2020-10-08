namespace Libplanet.Tools
{
    public interface IConfigurationService<TConfiguration>
    {
        TConfiguration Load();

        void Store(TConfiguration configuration);
    }
}
