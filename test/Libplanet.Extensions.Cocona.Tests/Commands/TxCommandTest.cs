using System.IO;
using System.Reflection;
using Libplanet.Extensions.Cocona.Commands;
using Xunit;

namespace Libplanet.Extensions.Cocona.Tests.Commands;

public class TxCommandTest
{
    public static readonly string FixturesPath = Path.Combine(
        Path.GetDirectoryName(Assembly.GetAssembly(typeof(TxCommandTest))!.Location)!,
        "Fixtures");

    [Fact]
    public void Analyze()
    {
        TxCommand cmd = new();
        int exitCode = cmd.Analyze(
            Path.Combine(FixturesPath, "tx.bin"),
            unsigned: false,
            ignoreSignature: false);
        Assert.Equal(0, exitCode);

        exitCode = cmd.Analyze(
            Path.Combine(FixturesPath, "invalid-tx.bin"),
            unsigned: false,
            ignoreSignature: false);
        Assert.Equal(-1, exitCode);
    }
}
