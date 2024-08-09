namespace Libplanet.Node.Options;

public abstract class OptionsBase<T>
    where T : OptionsBase<T>
{
    public bool IsConfigured { get; internal set; }

    public T Verify()
    {
        if (!IsConfigured)
        {
            throw new InvalidOperationException(
                $"The options {typeof(T)} have not been configured yet.");
        }

        return (T)this;
    }
}
