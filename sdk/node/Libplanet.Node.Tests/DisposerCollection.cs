using System.Collections;

namespace Libplanet.Node.Tests;

internal sealed class DisposerCollection(IEnumerable<IDisposable> disposables)
    : IEnumerable<IDisposable>, IDisposable
{
    private readonly List<IDisposable> _items = disposables.ToList();

    public void Dispose() => _items.ForEach(item => item.Dispose());

    public IEnumerator<IDisposable> GetEnumerator() => _items.GetEnumerator();

    IEnumerator IEnumerable.GetEnumerator() => _items.GetEnumerator();
}
