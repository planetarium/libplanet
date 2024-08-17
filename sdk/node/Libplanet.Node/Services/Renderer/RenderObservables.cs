namespace Libplanet.Node.Services.Renderer;

public class RenderObservables(
    RenderActionObservable renderActionObservable,
    RenderActionErrorObservable renderActionErrorObservable,
    RenderBlockObservable renderBlockObservable,
    RenderBlockEndObservable renderBlockEndObservable)
    : IRenderObservables
{
    public RenderActionObservable RenderActionObservable { get; } = renderActionObservable;

    public RenderActionErrorObservable RenderActionErrorObservable { get; } = renderActionErrorObservable;

    public RenderBlockObservable RenderBlockObservable { get; } = renderBlockObservable;

    public RenderBlockEndObservable RenderBlockEndObservable { get; } = renderBlockEndObservable;
}
