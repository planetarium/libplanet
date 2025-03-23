using System;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Reflection;
using global::Cocona;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;

namespace Libplanet.Extensions.Cocona;

public class BlockPolicyParams : ICommandParameterSet
{
    private string[] _assembliesToLoad = Array.Empty<string>();
    private string? _policyFactory;
    private Assembly[]? _loadedAssemblies;

    [Option(
        "load-assembly",
        new[] { 'A' },
        Description = "The path of the assembly DLL to load.  Can be specified multiple times.  " +
            "Note that all referenced assemblies of the specified assemblies are also loaded " +
            "automatically if they are placed in the same directory.  Tip: In case there are " +
            "missing references, you can use `dotnet publish` to copy all the required " +
            "assemblies to a single directory.")]
    [HasDefaultValue]
    public string[] AssembliesToLoad
    {
        get => _assembliesToLoad;
        set
        {
            _assembliesToLoad = value;
            _loadedAssemblies = null;
        }
    }

    [Option(
        'F',
        Description = "The qualified name of the factory method to instantiate a " +
            nameof(IBlockPolicy) + "<T>.  The factory method must be static and " +
            "has no parameters.  An assembly that the factory method and " +
            "the policy type belong to has to be loaded using -A/--load-assembly option.")]
    [HasDefaultValue]
    public string? PolicyFactory
    {
        get => _policyFactory;
        set
        {
            _policyFactory = value;
            _loadedAssemblies = null;
        }
    }

    [SuppressMessage(
        "Major Code Smell",
        "S3885:\"Assembly.Load\" should be used",
        Justification = "Assembly.Load does not automatically resolve dependencies from target "
            + "assembly path, whereas Assembly.LoadFrom does, which is appropriate in this use "
            + "case.")]
    public Assembly[] LoadAssemblies()
    {
        if (_loadedAssemblies is { } assemblies)
        {
            return assemblies;
        }

        _loadedAssemblies = AssembliesToLoad.Select(Assembly.LoadFrom).ToArray();
        return _loadedAssemblies;
    }

    public object? GetBlockPolicy() =>
        GetBlockPolicy(LoadAssemblies());

    public PolicyActionsRegistry GetPolicyActionsRegistry() =>
        GetPolicyActionsRegistry(LoadAssemblies());

    [SuppressMessage(
        "Major Code Smell",
        "S3011:Reflection should not be used to increase accessibility of classes, methods, " +
            "or fields",
        Justification = "It might not be practical to have BlockPolicy factory method to be "
            + "public, as it is not likely to be used as a public API.")]
    internal object? GetBlockPolicy(Assembly[] assemblies)
    {
        // TODO: Consider to refer to a method in an inner class.
        if (PolicyFactory is null)
        {
            return null;
        }

        int separatorIndex = PolicyFactory.LastIndexOf('.');
        string typeName = separatorIndex < 0
            ? throw new TypeLoadException("Expected a qualified name of a factory method.")
            : PolicyFactory.Substring(0, separatorIndex);
        string methodName = PolicyFactory.Substring(separatorIndex + 1);
        foreach (Assembly asm in assemblies)
        {
            if (asm.GetType(typeName, throwOnError: false) is { } type)
            {
                MethodInfo method = type.GetMethod(
                    methodName,
                    BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic
                ) ?? throw new TypeLoadException(
                    $"Failed to find a static method named {methodName}() in {type.FullName}.");

                if (method.GetParameters().Length != 0)
                {
                    throw new TypeLoadException(
                        $"The factory method {PolicyFactory}() must have no parameters."
                    );
                }

                Type returnType = method.ReturnType;
                if (!typeof(IBlockPolicy).IsAssignableFrom(returnType))
                {
                    throw new TypeLoadException(
                        $"The return type of {PolicyFactory}() must be " +
                        $"{nameof(IBlockPolicy)}."
                    );
                }

                return method.Invoke(null, Array.Empty<object>()) ??
                    throw new InvalidOperationException(
                        $"The factory method {PolicyFactory}() returned null."
                    );
            }
        }

        throw new TypeLoadException(
            $"Failed to load policy type {typeName} from assemblies:\n\n" +
            string.Join("\n", assemblies.Select(asm => asm.FullName))
        );
    }

    internal PolicyActionsRegistry GetPolicyActionsRegistry(Assembly[] assemblies)
    {
        object? policy = GetBlockPolicy(assemblies);
        if (policy is null)
        {
            return new PolicyActionsRegistry();
        }

        PropertyInfo? propertyInfo = policy
            .GetType()
            .GetProperty(nameof(IBlockPolicy.PolicyActionsRegistry));
        if (propertyInfo is null)
        {
            var message = $"The policy type "
                + $"'{policy.GetType().FullName}' does not have a "
                + $"'{nameof(IBlockPolicy.PolicyActionsRegistry)}' property.";
            throw new InvalidOperationException(message);
        }

        var value = propertyInfo.GetValue(policy);
        if (value is null)
        {
            var message = $"The value of property "
                + $"'{nameof(IBlockPolicy.PolicyActionsRegistry)}' of type "
                + $"'{policy.GetType().FullName}' cannot be null.";
            throw new InvalidOperationException(message);
        }

        return (PolicyActionsRegistry)value;
    }
}
