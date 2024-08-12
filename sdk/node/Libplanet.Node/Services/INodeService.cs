namespace Libplanet.Node.Services;

public interface INodeService
{
    public event EventHandler? Started;

    public event EventHandler? Stopped;
}
