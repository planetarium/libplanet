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
    Libplanet.Common.HashDigest<System.Security.Cryptography.SHA256>);

namespace Libplanet.Node.Services.Renderer;

public class RenderActionObservable : IObservable<Output>, IActionRenderer, IDisposable
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
        if (_disposable.IsDisposed)
        {
            return;
        }

        foreach (IObserver<Output> observer in _observers)
        {
            observer.OnNext((action, context, nextState));
        }
    }

    public void RenderActionError(IValue action, ICommittedActionContext context, Exception exception)
    {
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
