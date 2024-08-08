#pragma warning disable SA1402 // File may only contain a single type

namespace Libplanet.Node.DependencyInjection;

[AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
public class SingletonAttribute : Attribute
{
    public SingletonAttribute(Type serviceType)
    {
        ServiceType = serviceType;
    }

    public SingletonAttribute()
    {
    }

    public Type? ServiceType { get; }

    public string Scope { get; set; } = string.Empty;
}

public sealed class SingletonAttribute<T> : SingletonAttribute
    where T : class
{
    public SingletonAttribute()
        : base(typeof(T))
    {
    }
}
