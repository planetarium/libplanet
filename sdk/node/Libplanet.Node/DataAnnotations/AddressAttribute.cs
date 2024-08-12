#pragma warning disable SA1402 // File may only contain a single type
using System.ComponentModel.DataAnnotations;

namespace Libplanet.Node.DataAnnotations;

[AttributeUsage(AttributeTargets.Property)]
public sealed class AddressAttribute : RegularExpressionAttribute
{
    public const string OriginPattern = "0x[0-9a-fA-F]{40}";

    public AddressAttribute()
        : base($"^{OriginPattern}$")
    {
    }
}

[AttributeUsage(AttributeTargets.Property)]
public sealed class AddressArrayAttribute : ArrayAttribute<AddressAttribute>
{
}
