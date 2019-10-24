using System;
using System.IO;
using System.Linq;
using System.Net;
using CommandLine;
using Libplanet.Crypto;
using Libplanet.Net;

namespace Libplanet.Explorer.Executable
{
    public class Options
    {
        [Option('d', "debug", HelpText = "Print logs for debugging as well.")]
        public bool Debug { get; set; }

        [Option('H', "host", Default = "0.0.0.0", HelpText = "The host address to listen.")]
        public string Host { get; set; }

        [Option('p', "port", Default = 5000, HelpText = "The port number to listen.")]
        public int Port { get; set; }

        [Option(
            'i',
            "block-interval",
            Default = 5000,
            HelpText = "An appropriate interval in milliseconds between consecutive blocks.")]
        public int BlockIntervalMilliseconds { get; set; }

        [Option(
            'm',
            "minimum-difficulty",
            Default = 1024L,
            HelpText = "Allowed minimum difficulty for mining blocks.")]
        public long MinimumDifficulty { get; set; }

        [Option(
            'D',
            "difficulty-bound-divisor",
            Default = 128,
            HelpText = "A bound divisor to determine precision of block difficulties.")]
        public int DifficultyBoundDivisor { get; set; }

        [Option(
            's',
            "seed",
            HelpText = @"A seed node to join to the network as a node.
The format is a comma-separated triple of a peer's hexadecimal public key, host, and port number.
E.g., `02ed49dbe0f2c34d9dff8335d6dd9097f7a3ef17dfb5f048382eebc7f451a50aa1,example.com,31234'.
If omitted (default) explorer only the local blockchain store.")]
        public string SeedString
        {
            get
            {
                if (Seed is null)
                {
                    return null;
                }

                byte[] pubkey = Seed.PublicKey.Format(true);
                return $"{ByteUtil.Hex(pubkey)},{Seed.EndPoint.Host},{Seed.EndPoint.Port}";
            }

            set
            {
                if (value is null)
                {
                    Seed = null;
                    return;
                }

                string[] parts = value.Split(',');
                if (parts.Length != 3)
                {
                    throw new FormatException("A seed must be a command-separated triple.");
                }

                byte[] pubkeyBytes = ByteUtil.ParseHex(parts[0]);
                var pubkey = new PublicKey(pubkeyBytes);
                var endpoint = new DnsEndPoint(parts[1], int.Parse(parts[2]));
                Seed = new BoundPeer(pubkey, endpoint, 0);
            }
        }

        public BoundPeer Seed { get; set; }

        [Option(
            'I',
            "ice-server",
            HelpText = "URL to ICE server (TURN/STUN) to work around NAT.")]
        public string IceServerUrl
        {
            get
            {
                if (IceServer is null)
                {
                    return null;
                }

                Uri uri = IceServer.Urls.First();
                var uriBuilder = new UriBuilder(uri)
                {
                    UserName = IceServer.Username,
                    Password = IceServer.Credential,
                };
                return uriBuilder.Uri.ToString();
            }

            set
            {
                if (value is null)
                {
                    IceServer = null;
                    return;
                }

                var uri = new Uri(value);
                string[] userInfo = uri.UserInfo.Split(':', count: 2);
                IceServer = new IceServer(new[] { uri }, userInfo[0], userInfo[1]);
            }
        }

        public IceServer IceServer { get; set; }

        [Value(
            0,
            MetaName = "PATH",
            Required = false,
            HelpText = "The path of the blockchain store.")]
        public string StorePath { get; set; }

        public static Options Parse(string[] args, TextWriter errorWriter)
        {
            var parser = new Parser(with =>
            {
                with.AutoHelp = true;
                with.EnableDashDash = true;
                with.HelpWriter = errorWriter;
            });
            ParserResult<Options> result = parser.ParseArguments<Options>(args);

            if (result is Parsed<Options> parsed)
            {
                Options options = parsed.Value;
                return options;
            }
            else if (result is NotParsed<Options> notParsed)
            {
                System.Environment.Exit(
                    notParsed.Errors.All(e => e.Tag is ErrorType.HelpRequestedError) ? 0 : 1
                );
            }

            return null;
        }
    }
}
