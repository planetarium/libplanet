using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain.Renderers;
using Libplanet.Common;
using Libplanet.Types.Blocks;
using Microsoft.Extensions.Logging;
using R3;

namespace Libplanet.Node.Services;

internal sealed class RendererService : IRendererService, IActionRenderer, IDisposable
{
    private readonly Subject<RenderBlockInfo> _renderBlock = new();
    private readonly Subject<RenderActionInfo> _renderAction = new();
    private readonly Subject<RenderActionErrorInfo> _renderActionError = new();
    private readonly Subject<RenderBlockInfo> _renderBlockEnd = new();
    private readonly SynchronizationContext _synchronizationContext;
    private readonly ILogger<RendererService> _logger;

    private IObservable<RenderBlockInfo>? _renderBlockObservable;
    private IObservable<RenderActionInfo>? _renderActionObservable;
    private IObservable<RenderActionErrorInfo>? _renderActionErrorObservable;
    private IObservable<RenderBlockInfo>? _renderBlockEndObservable;

    public RendererService(
        SynchronizationContext synchronizationContext,
        ILogger<RendererService> logger)
    {
        _synchronizationContext = synchronizationContext;
        _logger = logger;
        _renderBlockObservable = _renderBlock.AsSystemObservable();
        _renderActionObservable = _renderAction.AsSystemObservable();
        _renderActionErrorObservable = _renderActionError.AsSystemObservable();
        _renderBlockEndObservable = _renderBlock.AsSystemObservable();
    }

    IObservable<RenderBlockInfo> IRendererService.RenderBlock
        => _renderBlockObservable ??= _renderBlock.AsSystemObservable();

    IObservable<RenderActionInfo> IRendererService.RenderAction
        => _renderActionObservable ??= _renderAction.AsSystemObservable();

    IObservable<RenderActionErrorInfo> IRendererService.RenderActionError
        => _renderActionErrorObservable ??= _renderActionError.AsSystemObservable();

    IObservable<RenderBlockInfo> IRendererService.RenderBlockEnd
        => _renderBlockEndObservable ??= _renderBlock.AsSystemObservable();

    public void Dispose()
    {
        _renderBlock.Dispose();
        _renderAction.Dispose();
        _renderActionError.Dispose();
        _renderBlockEnd.Dispose();
    }

    void IActionRenderer.RenderAction(
        IValue action, ICommittedActionContext context, HashDigest<SHA256> nextState)
    {
        _synchronizationContext.Post(
            state =>
            {
                _renderAction.OnNext(new(action, context, nextState));
                _logger.LogDebug(
                    "Rendered an action: {Action} {Context} {NextState}",
                    action,
                    context,
                    nextState);
            },
            null);
    }

    void IActionRenderer.RenderActionError(
        IValue action, ICommittedActionContext context, Exception exception)
    {
        _synchronizationContext.Post(
            state =>
            {
                _renderActionError.OnNext(new(action, context, exception));
                _logger.LogError(
                    exception,
                    "Failed to render an action: {Action} {Context}",
                    action,
                    context);
            },
            null);
    }

    void IRenderer.RenderBlock(Block oldTip, Block newTip)
    {
        _synchronizationContext.Post(
            state =>
            {
                _renderBlock.OnNext(new(oldTip, newTip));
                _logger.LogDebug(
                    "Rendered a block: {OldTip} {NewTip}",
                    oldTip,
                    newTip);
            },
            null);
    }

    void IActionRenderer.RenderBlockEnd(Block oldTip, Block newTip)
    {
        _synchronizationContext.Post(
            state =>
            {
                _renderBlockEnd.OnNext(new(oldTip, newTip));
                _logger.LogDebug(
                    "Rendered a block end: {OldTip} {NewTip}",
                    oldTip,
                    newTip);
            },
            null);
    }
}
