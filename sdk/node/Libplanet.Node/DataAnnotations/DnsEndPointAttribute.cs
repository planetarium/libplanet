#pragma warning disable SA1402 // File may only contain a single type
using System.ComponentModel.DataAnnotations;

namespace Libplanet.Node.DataAnnotations;

[AttributeUsage(AttributeTargets.Property)]
public sealed class DnsEndPointAttribute : RegularExpressionAttribute
{
    public const string OriginPattern
        = @"(?:(?:[a-zA-Z0-9\-\.]+)|(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})):\d{1,5}";

    public DnsEndPointAttribute()
        : base($"^{OriginPattern}$")
    {
    }
}

[AttributeUsage(AttributeTargets.Property)]
public sealed class DnsEndPointArrayAttribute : ArrayAttribute<DnsEndPointAttribute>
{
}
