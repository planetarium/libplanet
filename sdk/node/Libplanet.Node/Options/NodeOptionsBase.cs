using System.ComponentModel;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

public abstract class NodeOptionsBase<T> : OptionsBase<T>
    where T : NodeOptionsBase<T>
{
    [PrivateKey]
    [Description("The private key.")]
    public string PrivateKey { get; set; } = string.Empty;

    [AppProtocolVersion]
    [Description("The version of the application protocol.")]
    public string AppProtocolVersion { get; set; } = string.Empty;
}
