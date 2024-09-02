using Libplanet.Store;

namespace Libplanet.Node.Services;

public interface IStoreService
{
    IStore Store { get; }

    IStateStore StateStore { get; }
}
