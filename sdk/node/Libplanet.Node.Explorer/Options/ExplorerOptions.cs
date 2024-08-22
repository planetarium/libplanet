using System.ComponentModel;
using Libplanet.Node.Options;

namespace Libplanet.Node.Explorer.Options;

[Options(Position)]
public sealed class ExplorerOptions : OptionsBase<ExplorerOptions>
{
    public const string Position = "Explorer";

    [DefaultValue(true)]
    public bool IsEnabled { get; set; } = true;
}
