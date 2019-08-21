using System.IO;
using System.Linq;
using CommandLine;

namespace Libplanet.Explorer.Executable
{
    public class Options
    {
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
            'd',
            "difficulty-bound-divisor",
            Default = 128,
            HelpText = "A bound divisor to determine precision of block difficulties.")]
        public int DifficultyBoundDivisor { get; set; }

        [Value(
            0,
            MetaName = "PATH",
            Required = true,
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
