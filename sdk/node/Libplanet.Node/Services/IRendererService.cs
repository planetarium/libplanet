namespace Libplanet.Node.Services;

public interface IRendererService
{
    IObservable<RenderBlockInfo> RenderBlock { get; }

    IObservable<RenderActionInfo> RenderAction { get; }

    IObservable<RenderActionErrorInfo> RenderActionError { get; }

    IObservable<RenderBlockInfo> RenderBlockEnd { get; }
}
