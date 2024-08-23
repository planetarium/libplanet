#pragma warning disable SA1402 // File may only contain a single type
using System.ComponentModel.DataAnnotations;

namespace Libplanet.Node.DataAnnotations;

[AttributeUsage(AttributeTargets.Property)]
public sealed class BoundPeerAttribute : RegularExpressionAttribute
{
    public BoundPeerAttribute()
        : base(GetPattern())
    {
    }

    private static string GetPattern()
    {
        var items = new string[]
        {
            PublicKeyAttribute.OriginPattern,
            DnsEndPointAttribute.HostPattern,
            DnsEndPointAttribute.PortPattern,
        };
        var pattern = string.Join(",", items);
        return @$"^$|^{pattern}$";
    }
}

[AttributeUsage(AttributeTargets.Property)]
public sealed class BoundPeerArrayAttribute : ArrayAttribute<BoundPeerAttribute>
{
}
