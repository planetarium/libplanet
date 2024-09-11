using System.Diagnostics.CodeAnalysis;
using System.Reflection;
using System.Runtime.Loader;

namespace Libplanet.Node.Actions;

internal sealed class PluginLoadContext(string pluginPath) : AssemblyLoadContext
{
    private readonly AssemblyDependencyResolver _resolver = new(pluginPath);

    protected override Assembly? Load(AssemblyName assemblyName)
    {
        var assemblyPath = _resolver.ResolveAssemblyToPath(assemblyName);
        if (assemblyPath is not null)
        {
            if (TryGetLoadedAssembly(assemblyPath, out var assembly))
            {
                return assembly;
            }

            return LoadFromAssemblyPath(assemblyPath);
        }

        return null;
    }

    protected override IntPtr LoadUnmanagedDll(string unmanagedDllName)
    {
        var libraryPath = _resolver.ResolveUnmanagedDllToPath(unmanagedDllName);
        if (libraryPath is not null)
        {
            return LoadUnmanagedDllFromPath(libraryPath);
        }

        return IntPtr.Zero;
    }

    private static bool TryGetLoadedAssembly(
        string modulePath, [MaybeNullWhen(false)] out Assembly assembly)
    {
        var loadedAssemblies = AssemblyLoadContext.All
            .SelectMany(context => context.Assemblies)
            .ToList();
        var comparison = StringComparison.OrdinalIgnoreCase;
        var comparer = new Predicate<Assembly>(
            assembly => string.Equals(assembly.Location, modulePath, comparison));

        if (loadedAssemblies.Find(comparer) is Assembly loadedAssembly)
        {
            assembly = loadedAssembly;
            return true;
        }

        assembly = null;
        return false;
    }
}
