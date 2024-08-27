using System.Diagnostics;
using System.Reflection;
using System.Security.Cryptography;
using Lib9c.Plugin.Shared;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Common;
using Libplanet.Node.Actions;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;

namespace Libplanet.Node.Actions;

public class PluggedActionEvaluator : IActionEvaluator
{
    private readonly IPluginActionEvaluator _pluginActionEvaluator;

    public PluggedActionEvaluator(
        string pluginPath,
        string typeName,
        IKeyValueStore keyValueStore,
        IActionLoader actionLoader)
    {
        _pluginActionEvaluator = CreateActionEvaluator(pluginPath, typeName, keyValueStore);
        ActionLoader = actionLoader;
    }

    public IActionLoader ActionLoader { get; }

    public static Assembly LoadPlugin(string absolutePath)
    {
        var loadContext = new PluginLoadContext(absolutePath);
        var pluginBaseName = Path.GetFileNameWithoutExtension(absolutePath)
            ?? throw new UnreachableException("Path.GetFileNameWithoutExtension returned null");
        var pluginAssemblyName = new AssemblyName(pluginBaseName);
        return loadContext.LoadFromAssemblyName(pluginAssemblyName);
    }

    public static IPluginActionEvaluator CreateActionEvaluator(
        Assembly assembly, string typeName, IPluginKeyValueStore keyValueStore)
    {
        if (assembly.GetType(typeName) is Type type &&
            Activator.CreateInstance(type, args: keyValueStore) as IPluginActionEvaluator
            is IPluginActionEvaluator pluginActionEvaluator)
        {
            return pluginActionEvaluator;
        }

        throw new NullReferenceException("PluginActionEvaluator not found with given parameters");
    }

    public static IPluginActionEvaluator CreateActionEvaluator(
        string pluginPath, string typeName, IKeyValueStore keyValueStore)
    {
        var assembly = LoadPlugin(pluginPath);
        var pluginKeyValueStore = new PluginKeyValueStore(keyValueStore);
        return CreateActionEvaluator(assembly, typeName, pluginKeyValueStore);
    }

    public IReadOnlyList<ICommittedActionEvaluation> Evaluate(
        IPreEvaluationBlock block,
        HashDigest<SHA256>? baseStateRootHash)
    {
        var evaluations = _pluginActionEvaluator.Evaluate(
                PreEvaluationBlockMarshaller.Serialize(block),
                baseStateRootHash is { } srh ? srh.ToByteArray() : null)
            .Select(ActionEvaluationMarshaller.Deserialize).ToList().AsReadOnly();
        return evaluations;
    }
}
