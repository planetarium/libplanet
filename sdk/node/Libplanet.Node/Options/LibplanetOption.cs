namespace Libplanet.Node.Options;

public class LibplanetOption
{
    public StoreOption Store { get; set; } = new StoreOption();

    public SeedOptions BlocksyncSeed { get; set; } = new SeedOptions();

    public SeedOptions ConsensusSeed { get; set; } = new SeedOptions();
}
