namespace Libplanet.Node.Options;

[AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
public sealed class OptionsAttribute(string name) : Attribute
{
    public string Name { get; } = name;
}
