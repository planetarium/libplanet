using System.ComponentModel;
using Libplanet.Node.DependencyInjection;

namespace Libplanet.Node.Options;

[Options(Position)]
public sealed class ActionOptions : OptionsBase<ActionOptions>
{
    public const string Position = "Action";

    [DefaultValue(true)]
    public bool IsEnabled { get; set; }

    [Description("The private key of the node.")]
    public string[] Paths { get; set; } = [];
}
