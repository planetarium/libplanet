namespace Libplanet.Action
{
    internal class GasMeter : IGasMeter
    {
        public GasMeter(long gasLimit, long gasUsed = 0)
        {
            SetGasLimit(gasLimit);
            GasUsed = gasUsed;
        }

        public long GasAvailable => GasLimit - GasUsed;

        public long GasLimit { get; private set; }

        public long GasUsed { get; private set; }

        public void UseGas(long gas)
        {
            if (gas < 0)
            {
                throw new GasUseNegativeException();
            }

            long newGasUsed = 0;
            try
            {
                newGasUsed = checked(GasUsed + gas);
            }
            catch (System.OverflowException)
            {
                throw new GasLimitExceededException(GasLimit, GasUsed + gas);
            }

            if (newGasUsed > GasLimit)
            {
                GasUsed = GasLimit;
                throw new GasLimitExceededException(GasLimit, newGasUsed);
            }

            GasUsed = newGasUsed;
        }

        private void SetGasLimit(long gasLimit)
        {
            if (gasLimit < 0)
            {
                throw new GasLimitNegativeException();
            }

            GasLimit = gasLimit;
        }
    }
}
