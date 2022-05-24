using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Libplanet.Net;

namespace Libplanet.Unity.Config
{
    public class NodeConfig
    {
        private static readonly JsonSerializerOptions _jsonSerializerOptions =
            new JsonSerializerOptions
            {
                WriteIndented = true,
                Converters =
                {
                    new TimeSpanConverter(),
                    new BoundPeerConverter(),
                    new IceServerConverter(),
                },
            };

        public InitConfig InitConfig { get; set; } = new InitConfig();

        public BootstrapConfig BootstrapConfig { get; set; } = new BootstrapConfig();

        public PreloadConfig PreloadConfig { get; set; } = new PreloadConfig();

        public SyncConfig SyncConfig { get; set; } = new SyncConfig();

        public static List<IceServer> LoadIceServers(IEnumerable<string> iceServerInfos)
        {
            return iceServerInfos.Select(LoadIceServer).ToList();
        }

        public static IceServer LoadIceServer(string iceServerInfo)
        {
            Uri uri = new Uri(iceServerInfo);
            string[] userInfo = uri.UserInfo.Split(':');

            return new IceServer(new[] { uri }, userInfo[0], userInfo[1]);
        }

        public static NodeConfig FromJson(string jsonString)
        {
            return JsonSerializer.Deserialize<NodeConfig>(jsonString, _jsonSerializerOptions);
        }

        public SwarmOptions ToSwarmOptions()
        {
            return new SwarmOptions()
            {
                TipLifespan = SyncConfig.TipLifespan,
                MaximumPollPeers = SyncConfig.MaximumPollNumPeers,
                BucketSize = InitConfig.RoutingTableBucketSize,
                TableSize = InitConfig.RoutingTableNumBuckets,
                BranchpointThreshold = InitConfig.BlockLocatorIndexSampleThreshold,
                TxBroadcastInterval = SyncConfig.TxBroadcastInterval,
                BlockBroadcastInterval = SyncConfig.BlockBroadcastInterval,
                MinimumBroadcastTarget = SyncConfig.MinimumBroadcastNumPeers,
                StaticPeers = SyncConfig.StaticPeers,
                StaticPeersMaintainPeriod = SyncConfig.StaticPeersMaintainPeriod,
                RefreshLifespan = SyncConfig.RoutingTableRefreshPeriod,
                RefreshPeriod = SyncConfig.RoutingTableRefreshPeriod,
                BlockDemandLifespan = SyncConfig.BlockDemandLifespan,
                TimeoutOptions = new TimeoutOptions()
                {
                    MaxTimeout = InitConfig.MaxTimeout,
                    BootstrapDialTimeout = BootstrapConfig.DialTimeout,
                    PreloadDialTimeout = PreloadConfig.DialTimeout,
                    DialTimeout = SyncConfig.DialTimeout,
                },
            };
        }

        public string ToJson()
        {
            return JsonSerializer.Serialize<NodeConfig>(this, _jsonSerializerOptions);
        }

        private class TimeSpanConverter : JsonConverter<TimeSpan>
        {
            public override TimeSpan Read(
                ref Utf8JsonReader reader,
                Type typeToConvert,
                JsonSerializerOptions options)
            {
                return TimeSpan.FromSeconds(reader.GetInt32());
            }

            public override void Write(
                Utf8JsonWriter writer,
                TimeSpan value,
                JsonSerializerOptions options)
            {
                writer.WriteNumberValue((int)value.TotalSeconds);
            }
        }

        private class BoundPeerConverter : JsonConverter<BoundPeer>
        {
            public override BoundPeer Read(
                ref Utf8JsonReader reader,
                Type typeToConvert,
                JsonSerializerOptions options)
            {
                return BoundPeer.ParsePeer(reader.GetString());
            }

            public override void Write(
                Utf8JsonWriter writer,
                BoundPeer value,
                JsonSerializerOptions options)
            {
                string pubKeyString = ByteUtil.Hex(value.PublicKey.Format(true));
                string hostString = value.EndPoint.Host;
                string portString = value.EndPoint.Port.ToString(CultureInfo.InvariantCulture);
                writer.WriteStringValue(
                    $"{pubKeyString},{hostString},{portString}");
            }
        }

        private class IceServerConverter : JsonConverter<IceServer>
        {
            public override IceServer Read(
                ref Utf8JsonReader reader,
                Type typeToConvert,
                JsonSerializerOptions options)
            {
                Uri uri = new Uri(reader.GetString());
                string? username = null;
                string? credential = null;
                if (uri.UserInfo.Length > 0)
                {
                    string[] userInfo = uri.UserInfo.Split(':');
                    if (userInfo.Length == 1)
                    {
                        username = userInfo[0];
                    }
                    else if (userInfo.Length == 2)
                    {
                        username = userInfo[0];
                        credential = userInfo[1];
                    }
                    else
                    {
                        throw new UriFormatException($"Invalid URI format: {uri}");
                    }
                }

                return new IceServer(new[] { uri }, username, credential);
            }

            public override void Write(
                Utf8JsonWriter writer,
                IceServer value,
                JsonSerializerOptions options)
            {
                // FIXME: See https://github.com/planetarium/libplanet/issues/1995.
                Uri uri = value.Urls.FirstOrDefault()
                    ?? throw new NullReferenceException(
                        $"Given {nameof(IceServer)} does not contain any {nameof(Uri)}.");
                writer.WriteStringValue(uri.ToString());
            }
        }
    }
}
