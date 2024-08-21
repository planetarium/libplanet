namespace Libplanet.Node.Services;

public interface ISwarmService
{
    public event EventHandler? Started;

    public event EventHandler? Stopped;
}
