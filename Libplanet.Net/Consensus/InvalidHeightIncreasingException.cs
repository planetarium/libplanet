using System;

namespace Libplanet.Net.Consensus
{
    [Serializable]
    public class InvalidHeightIncreasingException : Exception
    {
        public InvalidHeightIncreasingException(string message)
            : base(message)
        {
        }
    }
}
