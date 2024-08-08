using Libplanet.Node.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;

namespace Libplanet.Node.Extensions;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddSingletonsFromDomain(this IServiceCollection @this)
        => @this.AddSingletonsFromDomain(scope: string.Empty);

    public static IServiceCollection AddSingletonsFromDomain(
        this IServiceCollection @this, string scope)
    {
        var types = ServiceUtility.GetTypes(typeof(SingletonAttribute), inherit: true);
        foreach (var type in types)
        {
            var serviceTypes = GetAttributes(type, scope).Select(item => item.ServiceType);
            foreach (var serviceType in serviceTypes)
            {
                @this.AddSingleton(serviceType ?? type, type);
            }

            static IEnumerable<SingletonAttribute> GetAttributes(Type type, string scope)
                => Attribute.GetCustomAttributes(type, typeof(SingletonAttribute))
                    .OfType<SingletonAttribute>()
                    .Where(item => item.Scope == scope);
        }

        return @this;
    }
}
