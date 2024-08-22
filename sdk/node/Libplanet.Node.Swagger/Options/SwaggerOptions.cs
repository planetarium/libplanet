using System.ComponentModel;
using Libplanet.Node.Options;

namespace Libplanet.Node.Swagger.Options;

[Options(Position)]
public sealed class SwaggerOptions : OptionsBase<SwaggerOptions>
{
    public const string Position = "Swagger";

    [DefaultValue(true)]
    public bool IsEnabled { get; set; } = true;
}
