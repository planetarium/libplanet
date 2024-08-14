using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

public abstract class OptionsConfiguratorBase<T> : IConfigureOptions<T>
    where T : OptionsBase<T>
{
    void IConfigureOptions<T>.Configure(T options)
    {
        if (options.IsConfigured)
        {
            throw new ArgumentException(
                message: "The options have already been configured.",
                paramName: nameof(options));
        }

        OnConfigure(options);
        options.IsConfigured = true;
    }

    protected abstract void OnConfigure(T options);
}
