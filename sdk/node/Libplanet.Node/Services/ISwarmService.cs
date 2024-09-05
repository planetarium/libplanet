using Libplanet.Net;

namespace Libplanet.Node.Services;

public interface ISwarmService
{
    public event EventHandler? Started;

    public event EventHandler? Stopped;

    Swarm Swarm { get; }

    bool IsRunning { get; }
}
