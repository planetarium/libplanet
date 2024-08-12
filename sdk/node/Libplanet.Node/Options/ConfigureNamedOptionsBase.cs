using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

public abstract class ConfigureNamedOptionsBase<T> : IConfigureNamedOptions<T>
    where T : OptionsBase<T>
{
    void IConfigureNamedOptions<T>.Configure(string? name, T options)
    {
        if (options.IsConfigured)
        {
            throw new ArgumentException(
                message: "The options have already been configured.",
                paramName: nameof(options));
        }

        OnConfigure(name, options);
        options.IsConfigured = true;
    }

    void IConfigureOptions<T>.Configure(T options)
    {
        throw new NotSupportedException();
    }

    protected abstract void OnConfigure(string? name, T options);
}
