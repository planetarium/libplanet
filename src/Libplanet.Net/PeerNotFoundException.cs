using System;

namespace Libplanet.Net
{
    [Serializable]
    public class PeerNotFoundException : SwarmException
    {
        public PeerNotFoundException()
        {
        }

        public PeerNotFoundException(string message)
            : base(message)
        {
        }

        public PeerNotFoundException(string message, Exception innerException)
            : base(message, innerException)
        {
        }
    }
}
