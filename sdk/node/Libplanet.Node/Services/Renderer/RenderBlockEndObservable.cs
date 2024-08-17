using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain.Renderers;
using Libplanet.Common;
using Libplanet.Types.Blocks;
using R3;

namespace Libplanet.Node.Services.Renderer;

public class RenderBlockEndObservable : IObservable<(Block, Block)>, IActionRenderer, IDisposable
{
    private readonly List<IObserver<(Block, Block)>> _observers
        = new List<IObserver<(Block, Block)>>();

    private readonly BooleanDisposable _disposable = new BooleanDisposable();

    public IDisposable Subscribe(IObserver<(Block, Block)> observer)
    {
        _observers.Add(observer);
        return _disposable;
    }

    public void RenderBlock(Block oldTip, Block newTip)
    {
    }

    public void RenderAction(
        IValue action,
        ICommittedActionContext context,
        HashDigest<SHA256> nextState)
    {
    }

    public void RenderActionError(
        IValue action,
        ICommittedActionContext context,
        Exception exception)
    {
    }

    public void RenderBlockEnd(Block oldTip, Block newTip)
    {
        if (_disposable.IsDisposed)
        {
            return;
        }

        foreach (IObserver<(Block, Block)> observer in _observers)
        {
            observer.OnNext((oldTip, newTip));
        }
    }

    public void Dispose()
    {
        _disposable.Dispose();
        foreach (IObserver<(Block, Block)> observer in _observers)
        {
            observer.OnCompleted();
        }

        GC.SuppressFinalize(this);
    }
}
