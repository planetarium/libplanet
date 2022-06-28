using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;
using Libplanet.Net;

namespace Libplanet.Node
{
    /// <summary>
    /// A <see cref="Swarm{T}"/> configuration.
    /// </summary>
    public class SwarmConfig
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

        /// <summary>
        /// The <see cref="InitConfig"/> to use.
        /// </summary>
        /// <seealso cref="InitConfig"/>
        public InitConfig InitConfig { get; set; } = new InitConfig();

        /// <summary>
        /// The <see cref="BootstrapConfig"/> to use.
        /// </summary>
        /// <seealso cref="BootstrapConfig"/>
        public BootstrapConfig BootstrapConfig { get; set; } = new BootstrapConfig();

        /// <summary>
        /// The <see cref="PreloadConfig"/> to use.
        /// </summary>
        /// <seealso cref="PreloadConfig"/>
        public PreloadConfig PreloadConfig { get; set; } = new PreloadConfig();

        /// <summary>
        /// The <see cref="SyncConfig"/> to use.
        /// </summary>
        public SyncConfig SyncConfig { get; set; } = new SyncConfig();

        /// <summary>
        /// Instantiate a <see cref="SwarmConfig"/> instance from a json <see cref="string"/>.
        /// </summary>
        /// <param name="jsonString">The json <see cref="string"/> to parse.</param>
        /// <returns>The <see cref="SwarmConfig"/> instance parsed from
        /// <paramref name="jsonString"/>.</returns>
        public static SwarmConfig FromJson(string jsonString)
        {
            return JsonSerializer.Deserialize<SwarmConfig>(jsonString, _jsonSerializerOptions);
        }

        /// <summary>
        /// Creates a <see cref="SwarmOptions"/> instance.
        /// </summary>
        /// <returns>The <see cref="SwarmOptions"/> instance.</returns>
        public SwarmOptions ToSwarmOptions()
        {
            return new SwarmOptions()
            {
                Type = InitConfig.TransportType,
                TipLifespan = SyncConfig.TipLifespan,
                MaximumPollPeers = SyncConfig.MaximumPollNumPeers,
                BucketSize = InitConfig.RoutingTableBucketSize,
                TableSize = InitConfig.RoutingTableNumBuckets,
                BranchpointThreshold = InitConfig.BlockLocatorIndexSampleThreshold,
                TxBroadcastInterval = SyncConfig.TxBroadcastInterval,
                BlockBroadcastInterval = SyncConfig.BlockBroadcastInterval,
                MinimumBroadcastTarget = SyncConfig.MinimumBroadcastNumPeers,
                StaticPeers = SyncConfig.StaticPeers.ToImmutableHashSet(),
                StaticPeersMaintainPeriod = SyncConfig.StaticPeersMaintainPeriod,
                RefreshLifespan = SyncConfig.RoutingTableRefreshPeriod,
                RefreshPeriod = SyncConfig.RoutingTableRefreshPeriod,
                BlockDemandLifespan = SyncConfig.BlockDemandLifespan,
                BootstrapOptions = new BootstrapOptions()
                {
                    DialTimeout = BootstrapConfig.DialTimeout,
                    SeedPeers = BootstrapConfig.SeedPeers.ToImmutableList(),
                    SearchDepth = BootstrapConfig.SearchDepth,
                },
                PreloadOptions = new PreloadOptions()
                {
                    DialTimeout = PreloadConfig.DialTimeout,
                    TipDeltaThreshold = PreloadConfig.DeltaThreshold,
                },
                TimeoutOptions = new TimeoutOptions()
                {
                    MaxTimeout = InitConfig.MaxTimeout,
                    DialTimeout = SyncConfig.DialTimeout,
                },
            };
        }

        /// <summary>
        /// Converts the instance into a json <see cref="string"/>.
        /// </summary>
        /// <returns>A json <see cref="string"/> representation of this <see cref="SwarmConfig"/>.
        /// </returns>
        public string ToJson()
        {
            return JsonSerializer.Serialize<SwarmConfig>(this, _jsonSerializerOptions);
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
                writer.WriteStringValue($"{pubKeyString},{hostString},{portString}");
            }
        }

        private class IceServerConverter : JsonConverter<IceServer>
        {
            public override IceServer Read(
                ref Utf8JsonReader reader,
                Type typeToConvert,
                JsonSerializerOptions options)
            {
                return new IceServer(new Uri(reader.GetString()));
            }

            public override void Write(
                Utf8JsonWriter writer,
                IceServer value,
                JsonSerializerOptions options)
            {
                writer.WriteStringValue(value.Url.ToString());
            }
        }
    }
}
