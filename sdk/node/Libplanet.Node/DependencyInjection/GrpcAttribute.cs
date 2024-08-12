namespace Libplanet.Node.DependencyInjection;

[AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
public sealed class GrpcAttribute : Attribute
{
    public string Scope { get; set; } = string.Empty;
}
