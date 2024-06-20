using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Blockchain.Policies;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Types.Blocks;

namespace Libplanet.Explorer.Executable
{
    public class Options
    {
        private static readonly Codec Codec = new Codec();

        public Options(
            bool debug,
            string host,
            int port,
            int blockIntervalMilliseconds,
            int difficultyBoundDivisor,
            string appProtocolVersionToken,
            int maxTransactionsPerBlock,
            int maxTransactionsBytes,
            int maxGenesisTransactionsBytes,
            IEnumerable<string> seedStrings,
            string iceServerUrl,
            string storePath,
            string storeType,
            string genesisBlockPath
        )
        {
            Debug = debug;
            Host = host;
            Port = port;
            BlockIntervalMilliseconds = blockIntervalMilliseconds;
            DifficultyBoundDivisor = difficultyBoundDivisor;
            AppProtocolVersionToken = appProtocolVersionToken;
            MaxTransactionsPerBlock = maxTransactionsPerBlock;
            MaxTransactionsBytes = maxTransactionsBytes;
            MaxGenesisTransactionsBytes = maxGenesisTransactionsBytes;
            SeedStrings = seedStrings;
            IceServerUrl = iceServerUrl;
            StorePath = storePath;
            StoreType = storeType;
            GenesisBlockPath = genesisBlockPath;
        }

        public bool Debug { get; set; }

        public string Host { get; set; }

        public int Port { get; set; }

        public int BlockIntervalMilliseconds { get; set; }

        public int DifficultyBoundDivisor { get; set; }

        public string AppProtocolVersionToken { get; set; }

        public int MaxTransactionsPerBlock { get; set; }

        public int MaxTransactionsBytes { get; set; }

        public int MaxGenesisTransactionsBytes { get; set; }

        public IEnumerable<string> SeedStrings
        {
            get
            {
                return Seeds?.Select(seed => $"{ByteUtil.Hex(seed.PublicKey.Format(true))}," +
                                             $"{seed.EndPoint.Host},{seed.EndPoint.Port}");
            }

            set
            {
                Seeds = value?.Select(str =>
                {
                    string[] parts = str.Split(',');
                    if (parts.Length != 3)
                    {
                        throw new FormatException(
                            $"A seed must be a command-separated triple. {str}");
                    }

                    byte[] pubkeyBytes = ByteUtil.ParseHex(parts[0]);
                    var pubkey = new PublicKey(pubkeyBytes);
                    var endpoint = new DnsEndPoint(parts[1], int.Parse(parts[2]));
                    return new BoundPeer(pubkey, endpoint);
                });
            }
        }

        public IEnumerable<BoundPeer> Seeds { get; set; }

        public string IceServerUrl
        {
            get => IceServer is null ? null : IceServer.Url.ToString();
            set => IceServer = value is null ? null : new IceServer(value);
        }

        public IceServer IceServer { get; set; }

        public string StorePath { get; set; }

        public string StoreType { get; set; }

        public string GenesisBlockPath { get; set; }

        internal async Task<Block> GetGenesisBlockAsync(IBlockPolicy policy)
        {
#if NETSTATNDARD2_1_OR_GREATER
            var uri = new Uri(GenesisBlockPath);
            awai Task.CompletedTask;
            using (var client = new WebClient())
            {
                var serialized = client.DownloadData(uri);
                var dict = (Bencodex.Types.Dictionary)Codec.Decode(serialized);
                return BlockMarshaler.UnmarshalBlock(dict);
            }
#elif NET6_0_OR_GREATER
            var uri = new Uri(GenesisBlockPath);
            using (var client = new System.Net.Http.HttpClient())
            {
                var serialized = await client.GetByteArrayAsync(uri);
                var dict = (Bencodex.Types.Dictionary)Codec.Decode(serialized);
                return BlockMarshaler.UnmarshalBlock(dict);
            }
#else
            throw new System.PlatformNotSupportedException();
#endif
        }
    }
}
