using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain.Renderers;
using Libplanet.Common;
using Libplanet.Types.Blocks;
using R3;
using Output = (
    Bencodex.Types.IValue,
    Libplanet.Action.ICommittedActionContext,
    System.Exception);

namespace Libplanet.Node.Services.Renderer;

public class RenderActionErrorObservable : IObservable<Output>, IActionRenderer, IDisposable
{
    private readonly List<IObserver<Output>> _observers = [];
    private readonly BooleanDisposable _disposable = new BooleanDisposable();

    public IDisposable Subscribe(IObserver<Output> observer)
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

    public void RenderActionError(IValue action, ICommittedActionContext context, Exception exception)
    {
        if (_disposable.IsDisposed)
        {
            return;
        }

        foreach (IObserver<Output> observer in _observers)
        {
            observer.OnNext((action, context, exception));
        }
    }

    public void RenderBlockEnd(Block oldTip, Block newTip)
    {
    }

    public void Dispose()
    {
        _disposable.Dispose();

        foreach (IObserver<Output> observer in _observers)
        {
            observer.OnCompleted();
        }

        GC.SuppressFinalize(this);
    }
}
