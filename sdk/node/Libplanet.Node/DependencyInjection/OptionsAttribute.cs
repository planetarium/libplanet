namespace Libplanet.Node.DependencyInjection;

[AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
public sealed class OptionsAttribute(string name) : Attribute
{
    public string Name { get; } = name;

    public string Scope { get; set; } = string.Empty;
}
