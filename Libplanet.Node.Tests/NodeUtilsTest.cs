using System;
using System.IO;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Node.Tests
{
    public class NodeUtilsTest
    {
        [Fact]
        public void SaveAndLoadGenesisBlock()
        {
            string tempFilePath = Path.GetTempFileName();
            try
            {
                // Try loading from empty data, bad data, non-existent path.
                Assert.Throws<DecodingException>(
                    () => NodeUtils<DumbAction>.LoadGenesisBlock(tempFilePath));
                File.WriteAllText(tempFilePath, "foo");
                Assert.ThrowsAny<DecodingException>(
                    () => NodeUtils<DumbAction>.LoadGenesisBlock(tempFilePath));
                File.Delete(tempFilePath);
                Assert.Throws<FileNotFoundException>(
                    () => NodeUtils<DumbAction>.LoadGenesisBlock(tempFilePath));

                // Try overwriting an existing file.
                Block<DumbAction> genesisBlock = NodeUtils<DumbAction>.CreateGenesisBlock();
                NodeUtils<DumbAction>.SaveGenesisBlock(tempFilePath, genesisBlock);
                Assert.Throws<ArgumentException>(
                    () => NodeUtils<DumbAction>.SaveGenesisBlock(tempFilePath, genesisBlock));

                // Load from a saved file.
                Block<DumbAction> loadedGenesisBlock =
                    NodeUtils<DumbAction>.LoadGenesisBlock(tempFilePath);
                Assert.Equal(genesisBlock, loadedGenesisBlock);
            }
            finally
            {
                File.Delete(tempFilePath);
                Assert.False(File.Exists(tempFilePath));
            }
        }

        [Fact]
        public void SaveAndLoadPrivateKey()
        {
            string tempFilePath = Path.GetTempFileName();
            try
            {
                // Try loading from empty data, bad data, non-existent path.
                Assert.ThrowsAny<ArgumentException>(
                    () => NodeUtils<DumbAction>.LoadPrivateKey(tempFilePath));
                File.WriteAllText(tempFilePath, "foo");
                Assert.ThrowsAny<ArgumentException>(
                    () => NodeUtils<DumbAction>.LoadPrivateKey(tempFilePath));
                File.Delete(tempFilePath);
                Assert.Throws<FileNotFoundException>(
                    () => NodeUtils<DumbAction>.LoadPrivateKey(tempFilePath));

                // Try overwriting an existing file.
                PrivateKey privateKey = new PrivateKey();
                NodeUtils<DumbAction>.SavePrivateKey(tempFilePath, privateKey);
                Assert.Throws<ArgumentException>(
                    () => NodeUtils<DumbAction>.SavePrivateKey(tempFilePath, privateKey));

                // Load from a saved file.
                PrivateKey loadedPrivateKey = NodeUtils<DumbAction>.LoadPrivateKey(tempFilePath);
                Assert.Equal(privateKey, loadedPrivateKey);
            }
            finally
            {
                File.Delete(tempFilePath);
                Assert.False(File.Exists(tempFilePath));
            }
        }
    }
}
