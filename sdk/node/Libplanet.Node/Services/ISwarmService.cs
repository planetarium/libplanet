using Libplanet.Net;
using R3;

namespace Libplanet.Node.Services;

public interface ISwarmService
{
    IObservable<Unit> Started { get; }

    IObservable<Unit> Stopped { get; }

    Swarm Swarm { get; }

    bool IsRunning { get; }
}
