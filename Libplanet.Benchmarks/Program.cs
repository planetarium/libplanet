using BenchmarkDotNet.Configs;
using BenchmarkDotNet.Running;

namespace Libplanet.Benchmarks
{
    public class Program
    {
        public static void Main(string[] args)
#if DEBUG
            => BenchmarkSwitcher.FromAssembly(typeof(Program).Assembly).Run(args, new DebugInProcessConfig());
#else
            => BenchmarkSwitcher.FromAssembly(typeof(Program).Assembly).Run(args);
#endif
    }
}
