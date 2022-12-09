using System;
using System.IO;
using Libplanet.Action;
using Libplanet.Explorer.Cocona.Commands;
using Xunit;

namespace Libplanet.Explorer.Cocona.Tests.Commands
{
    public class IndexCommandTest
    {
        [Fact]
        public void LoadIndexFromUri()
        {
            var tempFileName = Path.GetTempFileName();
            File.Delete(tempFileName);
            Directory.CreateDirectory(tempFileName);
            IndexCommand<NullAction>.LoadIndexFromUri(
                $"rocksdb+file://{Path.Combine(tempFileName, "success")}");
            Assert.Throws<ArgumentException>(
                () => IndexCommand<NullAction>.LoadIndexFromUri(
                    $"{Path.Combine(tempFileName, "no-scheme")}"));
            Assert.Throws<ArgumentException>(
                () => IndexCommand<NullAction>.LoadIndexFromUri(
                    $"rocksdb://{Path.Combine(tempFileName, "no-transport")}"));
            Assert.Throws<ArgumentException>(
                () => IndexCommand<NullAction>.LoadIndexFromUri(
                    $"rocksdb+://{Path.Combine(tempFileName, "empty-transport")}"));
            Assert.Throws<ArgumentException>(
                () => IndexCommand<NullAction>.LoadIndexFromUri(
                    $"rocksdb+foo://{Path.Combine(tempFileName, "unknown-transport")}"));
        }
    }
}
