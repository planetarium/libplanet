namespace Libplanet.Node.Options;

public class SoloProposeOption
{
    public const string Position = "Solo";

    public bool Enable { get; set; } = false;

    public long BlockInterval { get; set; } = 4000;

    public string? PrivateKey { get; set; }
}
