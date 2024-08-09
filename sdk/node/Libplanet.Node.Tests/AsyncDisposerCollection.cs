using System.Collections;

namespace Libplanet.Node.Tests;

internal sealed class AsyncDisposerCollection(IEnumerable<IAsyncDisposable> disposables)
    : IEnumerable<IAsyncDisposable>, IAsyncDisposable
{
    private readonly List<IAsyncDisposable> _items = disposables.ToList();

    public async ValueTask DisposeAsync()
        => await Parallel.ForEachAsync(_items, async (item, _) => await item.DisposeAsync());

    public IEnumerator<IAsyncDisposable> GetEnumerator() => _items.GetEnumerator();

    IEnumerator IEnumerable.GetEnumerator() => _items.GetEnumerator();
}
