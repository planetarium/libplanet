using System.Reflection;
using System.Runtime.Loader;
using Libplanet.Action;
using Libplanet.Action.Loader;

namespace Libplanet.Node.Actions;

public class PluginLoadContext(string pluginPath) : AssemblyLoadContext
{
    private readonly AssemblyDependencyResolver _resolver = new(pluginPath);

    protected override Assembly? Load(AssemblyName assemblyName)
    {
        if (_resolver.ResolveAssemblyToPath(assemblyName) is { } assemblyPath)
        {
            return LoadFromAssemblyPath(assemblyPath);
        }

        return null;
    }

    protected override IntPtr LoadUnmanagedDll(string unmanagedDllName)
    {
        if (_resolver.ResolveUnmanagedDllToPath(unmanagedDllName) is { } libraryPath)
        {
            return LoadUnmanagedDllFromPath(libraryPath);
        }

        return IntPtr.Zero;
    }
}
