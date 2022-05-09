using System.Collections.Generic;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Protocols;

namespace Libplanet.Net.Tests
{
    public static class TestUtils
    {
        public static AppProtocolVersion AppProtocolVersion = AppProtocolVersion.FromToken(
            "1/54684Ac4ee5B933e72144C4968BEa26056880d71/MEQCICGonYW" +
            ".X8y4JpPIyccPYWGrsCXWA95sBfextucz3lOyAiBUoY5t8aYNPT0lwYwC0MSkK3HT7T" +
            ".lGJJW13dJi+06nw==");

        public static Peer Peer0 = new Peer(
            new PublicKey(
                ByteUtil.ParseHex(
                    "0204b09e833560269d0dc1100c221442b9969e74a3949ca306aecda20a6a2afba4")));

        public static List<Address> Validators = new List<Address>
        {
            Peer0.Address,
        };

        private static readonly PrivateKey Node0 = new PrivateKey(
            ByteUtil.ParseHex(
                "260777c6fe4452e1cb1e0d1094e5d268377fe0f0222a0b1d7cadb86c3b4b5eb8"));

        public static ConsensusContext CreateConsensusContext(
            long id = 0) =>
            new ConsensusContext(id, Validators, new BaseStore<string>());

        public static ConsensusContext CreateConsensusContext(
            List<Address> validator,
            long id = 0) =>
            new ConsensusContext(id, validator, new BaseStore<string>());

        public static RoundContext CreateRoundContext(
            long id = 0,
            long height = 0,
            long round = 0) =>
            new RoundContext(id, Validators, height, round);

        public static RoundContext CreateRoundContext(
            List<Address> validators,
            long id = 0,
            long height = 0,
            long round = 0) =>
            new RoundContext(id, validators, height, round);

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
