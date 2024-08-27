using System.Reflection;
using Libplanet.Action;
using Libplanet.Action.Loader;

namespace Libplanet.Node.Actions;

internal static class PluginLoader
{
    public static IActionLoader LoadActionLoader(string modulePath, string typeName)
    {
        var assembly = LoadAssembly(modulePath);
        return Create<IActionLoader>(assembly, typeName);
    }

    public static IPolicyActionsRegistry LoadPolicyActionRegistry(
        string relativePath, string typeName)
    {
        var assembly = LoadAssembly(relativePath);
        return Create<IPolicyActionsRegistry>(assembly, typeName);
    }

    private static T Create<T>(Assembly assembly, string typeName)
        where T : class
    {
        if (assembly.GetType(typeName) is not { } type)
        {
            throw new ApplicationException(
                $"Can't find {typeName} in {assembly} from {assembly.Location}");
        }

        if (Activator.CreateInstance(type) is not T obj)
        {
            throw new ApplicationException(
                $"Can't create an instance of {type} in {assembly} from {assembly.Location}");
        }

        return obj;
    }

    private static Assembly LoadAssembly(string modulePath)
    {
        var loadContext = new PluginLoadContext(modulePath);
        if (Path.GetFileNameWithoutExtension(modulePath) is { } filename)
        {
            return loadContext.LoadFromAssemblyName(new AssemblyName(filename));
        }

        throw new ApplicationException($"Can't load plugin from {modulePath}");
    }
}
