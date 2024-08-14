#pragma warning disable SA1402 // File may only contain a single type
using System.ComponentModel.DataAnnotations;

namespace Libplanet.Node.DataAnnotations;

[AttributeUsage(AttributeTargets.Property)]
public sealed class BoundPeerAttribute : RegularExpressionAttribute
{
    public BoundPeerAttribute()
        : base(
            @$"^$|^{PublicKeyAttribute.OriginPattern},\s*{DnsEndPointAttribute.OriginPattern}$")
    {
    }
}

[AttributeUsage(AttributeTargets.Property)]
public sealed class BoundPeerArrayAttribute : ArrayAttribute<BoundPeerAttribute>
{
}
