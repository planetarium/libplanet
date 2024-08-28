using System.ComponentModel;
using Libplanet.Node.Options;

namespace Libplanet.Node.API.Explorer;

[Options(Position)]
public sealed class ExplorerOptions : OptionsBase<ExplorerOptions>, IEnabledOptions
{
    public const string Position = "Explorer";

    [DefaultValue(true)]
    public bool IsEnabled { get; set; } = true;
}
