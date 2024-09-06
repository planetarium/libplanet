namespace Libplanet.Node.Tests;

public sealed class TempDirectoryFixture : IDisposable
{
    public TempDirectoryFixture()
    {
        TempDirectory = Path.Combine(Path.GetTempPath(), Path.GetRandomFileName());
        Directory.CreateDirectory(TempDirectory);
    }

    public string TempDirectory { get; }

    public string GetRandomFileName()
    {
        if (!Directory.Exists(TempDirectory))
        {
            Directory.CreateDirectory(TempDirectory);
        }

        return Path.Combine(TempDirectory, Path.GetRandomFileName());
    }

    public void Dispose()
    {
        if (Directory.Exists(TempDirectory))
        {
            try
            {
                Directory.Delete(TempDirectory, true);
            }
            catch (UnauthorizedAccessException)
            {
                // ignore
            }
        }
    }
}
