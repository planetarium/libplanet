using System;

namespace Libplanet.Net
{
    [Serializable]
    public class IceServerException : Exception
    {
        public IceServerException(string message)
            : base(message)
        {
        }
    }
}
