using System.ComponentModel;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

public abstract class AppProtocolOptionsBase<T> : OptionsBase<T>
    where T : AppProtocolOptionsBase<T>
{
    [AppProtocolVersion]
    [Description("The version of the application protocol.")]
    public string AppProtocolVersion { get; set; } = string.Empty;
}
