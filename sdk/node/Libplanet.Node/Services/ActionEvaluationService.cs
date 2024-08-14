using System.Reflection;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Node.Actions;
using Libplanet.Node.DependencyInjection;
using Libplanet.Node.Options;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

[Singleton<IActionEvaluationService>]
internal sealed class ActionEvaluationService : IActionEvaluationService
{
    private readonly ActionOptions _options;

    public ActionEvaluationService(
        IOptions<ActionOptions> options,
        StoreService storeService,
        IEnumerable<IActionLoaderProvider> actionLoaderProviders)
    {
        _options = options.Value;

        if (_options.IsEnabled)
        {
            var actionLoaders = _options.Paths.Select(LoadAssembly)
                .Select(item => item.GetTypes().First(item => item.Name == "NCActionLoader"))
                .Select(item => new Lib9cActionLoader(item))
                .ToArray();
            // var actions = actionLoaders.SelectMany(item => item.Types.Values)
                // .Select(item => item.Name);
            var actionLoader = new AggregateTypedActionLoader(actionLoaders);
            var actionEvaluator = new ActionEvaluator(
                policyActionsRegistry: new(),
                stateStore: storeService.Statestore,
                actionLoader);
            // Actions = actions.ToArray();
            ActionEvaluator = actionEvaluator;
        }
        else
        {
            var actionLoaders
                = actionLoaderProviders.Select(item => item.GetActionLoader()).ToArray();
            var actionLoader = new AggregateTypedActionLoader(actionLoaders);
            var actionEvaluator = new ActionEvaluator(
                policyActionsRegistry: new(),
                stateStore: storeService.Statestore,
                actionLoader);
            ActionEvaluator = actionEvaluator;
        }
    }

    public IActionEvaluator ActionEvaluator { get; }

    public string[] Actions { get; } = [];

    private static Assembly LoadAssembly(string path)
    {
        var assemblyLoadContext = new PluginLoadContext(path);
        var assemblyName = Path.GetFileNameWithoutExtension(path);
        var assembly = assemblyLoadContext.LoadFromAssemblyName(new(assemblyName));
        return assembly;
    }
}
