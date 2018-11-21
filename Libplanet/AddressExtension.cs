using Libplanet.Crypto;

namespace Libplanet
{
    public static class AddressExtension
    {
        public static Address ToAddress(this PublicKey publicKey)
        {
            return Address.FromPublicKey(publicKey);
        }
    }
}
