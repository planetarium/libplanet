using System;

namespace Libplanet.Stun
{
    public interface IIceServer
    {
        public Uri Url { get; }

        public string Username { get; }

        public string Credential { get; }
    }
}
