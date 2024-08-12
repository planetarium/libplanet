using Libplanet.Node.DependencyInjection;
using Libplanet.Node.Options;
using Microsoft.Extensions.Configuration;
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

    public static IServiceCollection AddOptionsFromDomain(
        this IServiceCollection @this, IConfiguration configuration)
        => @this.AddOptionsFromDomain(configuration, scope: string.Empty);

    public static IServiceCollection AddOptionsFromDomain(
        this IServiceCollection @this, IConfiguration configuration, string scope)
    {
        var types = ServiceUtility.GetTypes(typeof(OptionsAttribute), inherit: true);
        foreach (var type in types)
        {
            var optionsNames = GetAttributes(type, scope).Select(item => item.Name);
            foreach (var optionsName in optionsNames)
            {
                @this.AddOptions<StoreOptions>()
                    .Bind(configuration.GetSection(optionsName))
                    .ValidateDataAnnotations();
            }

            static IEnumerable<OptionsAttribute> GetAttributes(Type type, string scope)
                => Attribute.GetCustomAttributes(type, typeof(OptionsAttribute))
                    .OfType<OptionsAttribute>()
                    .Where(item => item.Scope == scope);
        }

        return @this;
    }

    public static IServiceCollection AddOptionsConfigurator<TO, TC>(this IServiceCollection @this)
        where TO : OptionsBase<TO>
        where TC : OptionsConfiguratorBase<TO>
    {
        var configuratorType = typeof(IConfigureOptions<>).MakeGenericType(typeof(TO));
        return @this.AddSingleton(configuratorType, typeof(TC));
    }

    public static IServiceCollection AddOptionsValidator<TO, TV>(this IServiceCollection @this)
        where TO : OptionsBase<TO>
        where TV : OptionsValidatorBase<TO>
    {
        var validatorType = typeof(IValidateOptions<>).MakeGenericType(typeof(TO));
        return @this.AddSingleton(validatorType, typeof(TV));
    }
}
