using System.Reflection;

namespace Libplanet.Node;

public static class ServiceUtility
{
    public static IEnumerable<Type> GetTypes(Assembly assembly, Type attributeType, bool inherit)
        => assembly.GetTypes()
            .Where(type => Attribute.IsDefined(type, attributeType, inherit))
            .Where(type => type.IsClass && !type.IsAbstract);

    public static IEnumerable<Type> GetTypes(Type attributeType, bool inherit)
        => AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(assembly => GetTypes(assembly, attributeType, inherit));
}
