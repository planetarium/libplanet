#pragma warning disable SA1402 // File may only contain a single type
using System.ComponentModel.DataAnnotations;

namespace Libplanet.Node.DataAnnotations;

[AttributeUsage(AttributeTargets.Property)]
public sealed class AppProtocolVersionAttribute : RegularExpressionAttribute
{
    public const string VersionPattern = @"\d+";
    public const string AddressPattern = @"[0-9a-fA-F]{40}";
    public const string Base64Pattern
        = @"(?:[A-Za-z0-9+\.]{4})*(?:[A-Za-z0-9+\.]{2}==|[A-Za-z0-9+\.]{3}=)?";

    public static readonly string OriginPattern = GenerateOriginPattern();

    public AppProtocolVersionAttribute()
        : base($"^{OriginPattern}$")
    {
    }

    private static string GenerateOriginPattern()
    {
        var items = new string[]
        {
            $"(?<version>{VersionPattern})",
            $"(?<address>{AddressPattern})",
            $"(?<signature>{Base64Pattern})",
            $"(?<extra>{Base64Pattern})",
        };

        return string.Join('/', items);
    }
}
