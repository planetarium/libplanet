using System.Reflection;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Common;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;

namespace Libplanet.Node.Actions;

public class PluggedActionEvaluator : IActionEvaluator
{
    private readonly IPluginActionEvaluator _pluginActionEvaluator;

    public IActionLoader ActionLoader { get; }

    public PluggedActionEvaluator(
        string pluginPath,
        string typeName,
        IKeyValueStore keyValueStore,
        IActionLoader actionLoader)
    {
        _pluginActionEvaluator = CreateActionEvaluator(pluginPath, typeName, keyValueStore);
        ActionLoader = actionLoader;
    }

    public static Assembly LoadPlugin(string absolutePath)
    {
        PluginLoadContext loadContext = new PluginLoadContext(absolutePath);
        return loadContext.LoadFromAssemblyName(new AssemblyName(Path.GetFileNameWithoutExtension(absolutePath)));
    }

    public static IPluginActionEvaluator CreateActionEvaluator(Assembly assembly, string typeName, IPluginKeyValueStore keyValueStore)
    {
        if (assembly.GetType(typeName) is Type type &&
            Activator.CreateInstance(type, args: keyValueStore) as IPluginActionEvaluator
            is IPluginActionEvaluator pluginActionEvaluator)
        {
            return pluginActionEvaluator;
        }

        throw new NullReferenceException("PluginActionEvaluator not found with given parameters");
    }

    public static IPluginActionEvaluator CreateActionEvaluator(string pluginPath, string typeName, IKeyValueStore keyValueStore)
        => CreateActionEvaluator(LoadPlugin(pluginPath), typeName, new PluginKeyValueStore(keyValueStore));

    public IReadOnlyList<ICommittedActionEvaluation> Evaluate(
        IPreEvaluationBlock block,
        HashDigest<SHA256>? baseStateRootHash)
    {
        var evaluations = _pluginActionEvaluator.Evaluate(
                PreEvaluationBlockMarshaller.Serialize(block),
                baseStateRootHash is { } srh ? srh.ToByteArray() : null)
            .Select(eval => ActionEvaluationMarshaller.Deserialize(eval)).ToList().AsReadOnly();
        return evaluations;
    }
}
