using System;
using Libplanet.Crypto;

namespace Libplanet.PoS
{
    public class PublicKeyAddressMatchingException : Exception
    {
        public PublicKeyAddressMatchingException(Address expected, PublicKey publicKey)
            : base($"publicKey {publicKey} does not match to address " +
                  $": Expected {expected}, found {publicKey.ToAddress()}")
        {
        }
    }
}
