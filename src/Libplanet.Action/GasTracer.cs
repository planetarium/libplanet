using System.Threading;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    /// <summary>
    /// Provides a way to trace the gas usage of an <see cref="ITransaction"/>.
    /// It will be initialize each transaction.
    ///
    /// <see cref="GasTracer"/> is thread-local, so it can be used in a multi-threaded environment.
    /// </summary>
    public static class GasTracer
    {
        private static readonly AsyncLocal<GasMeter> GasMeter = new AsyncLocal<GasMeter>();

        /// <summary>
        /// The amount of gas used so far.
        /// </summary>
        public static long GasUsed => GasMeter.Value.GasUsed;

        /// <summary>
        /// The amount of gas available.
        /// </summary>
        public static long GasAvailable => GasMeter.Value.GasAvailable;

        /// <summary>
        /// Using gas by the specified amount.
        /// </summary>
        /// <param name="gas">
        /// The amount of gas to use.
        /// </param>
        public static void UseGas(long gas) => GasMeter.Value.UseGas(gas);

        internal static void Initialize(long gasLimit) => GasMeter.Value = new GasMeter(gasLimit);
    }
}
