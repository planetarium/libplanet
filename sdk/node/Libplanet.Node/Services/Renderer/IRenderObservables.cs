namespace Libplanet.Node.Services.Renderer;

public interface IRenderObservables
{
    public RenderActionObservable RenderActionObservable { get; }

    public RenderActionErrorObservable RenderActionErrorObservable { get; }

    public RenderBlockObservable RenderBlockObservable { get; }

    public RenderBlockEndObservable RenderBlockEndObservable { get; }
}
