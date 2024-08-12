using System.Reflection;
using Libplanet.Node.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;

namespace Libplanet.Node.Extensions;

public static class IEndpointRouteBuilderExtensions
{
    public static IEndpointRouteBuilder MapGrpcServiceFromDomain(
        this IEndpointRouteBuilder @this)
        => @this.MapGrpcServiceFromDomain(scope: string.Empty);

    public static IEndpointRouteBuilder MapGrpcServiceFromDomain(
        this IEndpointRouteBuilder @this, string scope)
    {
        var types = ServiceUtility.GetTypes(typeof(GrpcAttribute), inherit: true);
        var methodType = typeof(GrpcEndpointRouteBuilderExtensions);
        var methodName = nameof(GrpcEndpointRouteBuilderExtensions.MapGrpcService);
        var bindingFlags = BindingFlags.Public | BindingFlags.Static;
        var methodInfo = methodType.GetMethod(methodName, bindingFlags)
            ?? throw new InvalidOperationException($"Method '{methodName}' not found.");
        foreach (var type in types)
        {
            var attributes = GetAttributes(type, scope);
            foreach (var attribute in attributes)
            {
                var genericMethod = methodInfo.MakeGenericMethod(type);
                genericMethod.Invoke(null, [@this]);
            }

            static IEnumerable<GrpcAttribute> GetAttributes(Type type, string scope)
                => Attribute.GetCustomAttributes(type, typeof(GrpcAttribute))
                    .OfType<GrpcAttribute>()
                    .Where(item => item.Scope == scope);
        }

        return @this;
    }

    public static IEndpointRouteBuilder MapGrpcServiceFromDomain(
        this IEndpointRouteBuilder @this, string[] scopes)
    {
        foreach (var scope in scopes)
        {
            MapGrpcServiceFromDomain(@this, scope);
        }

        return @this;
    }
}
