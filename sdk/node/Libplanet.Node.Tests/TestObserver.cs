namespace Libplanet.Node.Tests;

internal sealed class TestObserver<T> : IObserver<T>, IDisposable
{
    private IDisposable? _subscription;

    public TestObserver(IObservable<T> observable)
    {
        _subscription = observable.Subscribe(this);
    }

    public event EventHandler? Completed;

    public event EventHandler? Error;

    public event EventHandler<T>? Next;

    public void Dispose()
    {
        if (_subscription is not null)
        {
            _subscription.Dispose();
            _subscription = null;
        }
    }

    void IObserver<T>.OnCompleted() => Completed?.Invoke(this, EventArgs.Empty);

    void IObserver<T>.OnError(Exception error) => Error?.Invoke(this, EventArgs.Empty);

    void IObserver<T>.OnNext(T value) => Next?.Invoke(this, value);
}
