#pragma warning disable SA1402 // File may only contain a single type
using System.ComponentModel.DataAnnotations;

namespace Libplanet.Node.DataAnnotations;

[AttributeUsage(AttributeTargets.Property)]
public sealed class PrivateKeyAttribute : RegularExpressionAttribute
{
    public const string OriginPattern = "[0-9a-fA-F]{64}";

    public PrivateKeyAttribute()
        : base($"^{OriginPattern}$")
    {
    }
}

[AttributeUsage(AttributeTargets.Property)]
public sealed class PrivateKeyArrayAttribute : ArrayAttribute<PrivateKeyAttribute>
{
}
