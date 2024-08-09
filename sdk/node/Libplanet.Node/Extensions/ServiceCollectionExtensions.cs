using Libplanet.Node.DependencyInjection;
using Libplanet.Node.Options;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

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

    public static IServiceCollection AddOptionsConfigurator<TO, TC>(this IServiceCollection @this)
        where TO : OptionsBase<TO>
        where TC : OptionsConfiguratorBase<TO>
    {
        var optionsType = typeof(TC).GetGenericArguments()[0];
        var configuratorType = typeof(IConfigureOptions<>).MakeGenericType(optionsType);
        return @this.AddSingleton(configuratorType, typeof(TC));
    }

    public static IServiceCollection AddOptionsValidator<TO, TV>(this IServiceCollection @this)
        where TO : OptionsBase<TO>
        where TV : OptionsValidatorBase<TO>
    {
        var optionsType = typeof(TV).GetGenericArguments()[0];
        var validatorType = typeof(IValidateOptions<>).MakeGenericType(optionsType);
        return @this.AddSingleton(validatorType, typeof(TV));
    }
}
