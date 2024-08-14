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
            var isSingleOption = optionsNames.Count() == 1;
            foreach (var optionsName in optionsNames)
            {
                var name = isSingleOption ? string.Empty : optionsName;
                var optionsBuilder1 = AddOptions(@this, type, name);
                var optionsBuilder2 = Bind(optionsBuilder1, configuration.GetSection(optionsName));
                ValidateDataAnnotations(optionsBuilder2);
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

    // Microsoft.Extensions.Options.OptionsBuilder`1[TOptions] AddOptions[TOptions](
    //     Microsoft.Extensions.DependencyInjection.IServiceCollection,
    //     System.String)
    private static object AddOptions(
        IServiceCollection services, Type optionsType, string optionsName)
    {
        var type = typeof(OptionsServiceCollectionExtensions);
        var methodName = nameof(OptionsServiceCollectionExtensions.AddOptions);
        var args = new Type[] { typeof(IServiceCollection), typeof(string) };
        var methodInfo = type.GetMethod(
            methodName,
            genericParameterCount: 1,
            types: args,
            modifiers: null)
            ?? throw new InvalidOperationException($"Method '{methodName}' not found.");
        var genericMethodInfo = methodInfo.MakeGenericMethod(optionsType)
            ?? throw new InvalidOperationException(
                $"Method '{methodName}' failed to make generic method.");

        return genericMethodInfo.Invoke(null, parameters: [services, optionsName])
            ?? throw new InvalidOperationException($"Method '{methodName}' must not return null.");
    }

    // Microsoft.Extensions.Options.OptionsBuilder`1[TOptions] Bind[TOptions](
    //     Microsoft.Extensions.Options.OptionsBuilder`1[TOptions],
    //     Microsoft.Extensions.Configuration.IConfiguration)
    private static object Bind(object optionsBuilder, IConfiguration configuration)
    {
        var optionsType = optionsBuilder.GetType().GenericTypeArguments[0];
        var type = typeof(OptionsBuilderConfigurationExtensions);
        var methodName = nameof(OptionsBuilderConfigurationExtensions.Bind);
        var args = new Type[] { typeof(OptionsBuilder<>), typeof(IConfiguration) };
        var methodInfo = type.GetMethods().Single(
            method => method.Name == methodName
                && method.GetParameters().Length == args.Length
                && method.GetParameters()[0].ParameterType.GetGenericTypeDefinition() == args[0]);
        var genericMethodInfo = methodInfo.MakeGenericMethod(optionsType)
            ?? throw new InvalidOperationException(
                $"Method '{methodName}' failed to make generic method.");

        return genericMethodInfo.Invoke(null, parameters: [optionsBuilder, configuration])
            ?? throw new InvalidOperationException($"Method '{methodName}' must not return null.");
    }

    // Microsoft.Extensions.Options.OptionsBuilder`1[TOptions] ValidateDataAnnotations[TOptions](
    //     Microsoft.Extensions.Options.OptionsBuilder`1[TOptions])
    private static void ValidateDataAnnotations(object optionsBuilder)
    {
        var optionsType = optionsBuilder.GetType().GenericTypeArguments[0];
        var type = typeof(OptionsBuilderDataAnnotationsExtensions);
        var methodName = nameof(OptionsBuilderDataAnnotationsExtensions.ValidateDataAnnotations);
        var args = new Type[] { typeof(OptionsBuilder<>) };
        var methodInfo = type.GetMethods().Single(
            method => method.Name == methodName
                && method.GetParameters().Length == args.Length
                && method.GetParameters()[0].ParameterType.GetGenericTypeDefinition() == args[0]);
        var genericMethodInfo = methodInfo.MakeGenericMethod(optionsType)
            ?? throw new InvalidOperationException(
                $"Method '{methodName}' failed to make generic method.");

        genericMethodInfo.Invoke(null, parameters: [optionsBuilder]);
    }
}
