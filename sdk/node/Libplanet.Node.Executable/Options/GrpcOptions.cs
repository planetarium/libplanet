using System.ComponentModel;
using Libplanet.Node.DependencyInjection;
using Libplanet.Node.Options;

namespace Libplanet.Node.API.Options;

[Options(Position)]
public sealed class GrpcOptions : OptionsBase<GrpcOptions>
{
    public const string Position = "Grpc";

    [DefaultValue(true)]
    public bool IsEnabled { get; set; }
}
