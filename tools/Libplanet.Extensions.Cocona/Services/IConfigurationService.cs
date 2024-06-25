namespace Libplanet.Extensions.Cocona.Services;

public interface IConfigurationService<TConfiguration>
{
    TConfiguration Load();

    void Store(TConfiguration configuration);
}
