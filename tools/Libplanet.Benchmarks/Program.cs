using System.IO;
using System.Linq;
using System.Text.Json.Nodes;
using BenchmarkDotNet.Running;
using Xunit.Sdk;

namespace Libplanet.Benchmarks
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BenchmarkSwitcher.FromAssembly(typeof(Program).Assembly).Run(args);
            CombineBenchmarkResults();
        }
        private static void CombineBenchmarkResults(
            string resultsDir = "./BenchmarkDotNet.Artifacts/results",
            string resultsFile = "Combined.Benchmarks",
            string searchPattern = "Libplanet.Benchmarks.*.json")
        {
            var resultsPath = Path.Combine(resultsDir, resultsFile + ".json");

            if (!Directory.Exists(resultsDir))
            {
                throw new DirectoryNotFoundException($"Directory not found '{resultsDir}'");
            }

            if (File.Exists(resultsPath))
            {
                File.Delete(resultsPath);
            }

            var reports = Directory
                .GetFiles(resultsDir, searchPattern, SearchOption.TopDirectoryOnly)
                .ToArray();
            if (!reports.Any())
            {
                throw new FileNotFoundException($"Reports not found '{searchPattern}'");
            }

            var combinedReport = JsonNode.Parse(File.ReadAllText(reports.First()));

            if (combinedReport?["Title"] == null ||
                combinedReport["Benchmarks"] == null)
            {
                return;
            }

            var title = combinedReport["Title"];
            var titleString = title.GetValue<string>();
            var timestampString = titleString.Substring(titleString.Length - 15);
            var benchmarks = combinedReport["Benchmarks"].AsArray();
            // Rename title whilst keeping original timestamp
            combinedReport["Title"] = $"{resultsFile}-{timestampString}";

            foreach (var report in reports.Skip(1))
            {
                var reportJsonNode = JsonNode.Parse(File.ReadAllText(report));
                if (reportJsonNode?["Benchmarks"] == null)
                {
                    continue;
                }

                var targetBenchmarks = reportJsonNode["Benchmarks"].AsArray();
                foreach (var benchmark in targetBenchmarks)
                {
                    // Double parse avoids "The node already has a parent" exception
                    benchmarks.Add(JsonNode.Parse(benchmark.ToJsonString()));
                }
            }
            File.WriteAllText(resultsPath, combinedReport.ToString());
        }
    }
}
