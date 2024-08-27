using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Node.Actions;

namespace Libplanet.Node.Options;

[Options(Position)]
public sealed class ActionOptions : OptionsBase<ActionOptions>
{
    public const string Position = "Action";

    public string ModulePath { get; set; } = string.Empty;

    public string ActionLoaderType { get; set; } = string.Empty;

    public string PolicyActionRegistryType { get; set; } = string.Empty;

    internal IActionLoader GetActionLoader()
    {
        if (ActionLoaderType != string.Empty)
        {
            var modulePath = ModulePath;
            var actionLoaderType = ActionLoaderType;
            return PluginLoader.LoadActionLoader(modulePath, actionLoaderType);
        }

        return new AggregateTypedActionLoader();
    }

    internal IPolicyActionsRegistry GetPolicyActionsRegistry()
    {
        if (PolicyActionRegistryType != string.Empty)
        {
            var modulePath = ModulePath;
            var policyActionRegistryType = PolicyActionRegistryType;
            return PluginLoader.LoadPolicyActionRegistry(modulePath, policyActionRegistryType);
        }

        return new PolicyActionsRegistry();
    }
}
