using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Node.Actions;
using Libplanet.Node.Options;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

internal sealed class ActionService(IOptions<ActionOptions> options)
    : IActionService
{
    public IActionLoader ActionLoader { get; } = GetActionLoader(options.Value);

    public IPolicyActionsRegistry PolicyActionsRegistry { get; }
        = GetPolicyActionsRegistry(options.Value);

    private static IActionLoader GetActionLoader(ActionOptions options)
    {
        if (options.ActionLoaderType != string.Empty)
        {
            var modulePath = options.ModulePath != string.Empty
                ? Path.GetFullPath(options.ModulePath) : string.Empty;
            var actionLoaderType = options.ActionLoaderType;
            return PluginLoader.LoadActionLoader(modulePath, actionLoaderType);
        }

        return new AggregateTypedActionLoader();
    }

    private static IPolicyActionsRegistry GetPolicyActionsRegistry(ActionOptions options)
    {
        if (options.PolicyActionRegistryType != string.Empty)
        {
            var modulePath = options.ModulePath != string.Empty
                ? Path.GetFullPath(options.ModulePath) : string.Empty;
            var policyActionRegistryType = options.PolicyActionRegistryType;
            return PluginLoader.LoadPolicyActionRegistry(modulePath, policyActionRegistryType);
        }

        return new PolicyActionsRegistry();
    }
}
