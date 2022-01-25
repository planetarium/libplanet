using Libplanet.Crypto;
using Libplanet.Net.Protocols;

namespace Libplanet.Net.Tests
{
    public static class TestUtils
    {
        public static PrivateKey GeneratePrivateKeyOfBucketIndex(Address tableAddress, int target)
        {
            var table = new RoutingTable(tableAddress);
            PrivateKey privateKey;
            do
            {
                privateKey = new PrivateKey();
            }
            while (table.GetBucketIndexOf(privateKey.ToAddress()) != target);

            return privateKey;
        }
    }
}
