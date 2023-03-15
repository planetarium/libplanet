using System.Collections.Immutable;
using System.Linq;
using Libplanet.Crypto;

namespace Libplanet
{
    /// <summary>
    /// This extension class enables some convenient methods (sugar for
    /// the most part) to deal with <see cref="Address"/>.
    /// </summary>
    /// <seealso cref="Address"/>
    public static class AddressExtensions
    {
        /// <summary>
        /// Derives the corresponding <see cref="Address"/> from a <see
        /// cref="PublicKey"/>.
        /// <para>This enables a code like <c>publicKey.ToAddress()</c> instead
        /// of <c>new Address(publicKey)</c>.</para>
        /// </summary>
        /// <param name="publicKey">A <see cref="PublicKey"/> to derive
        /// the corresponding <see cref="Address"/> from.</param>
        /// <returns>The corresponding <see cref="Address"/> derived from
        /// <paramref name="publicKey"/>.</returns>
        public static Address ToAddress(this PublicKey publicKey)
        {
            return new Address(DeriveAddress(publicKey));
        }

        /// <summary>
        /// Derives the corresponding <see cref="Address"/> from a <see
        /// cref="PrivateKey"/>.
        /// <para>This enables a code like <c>privateKey.ToAddress()</c> instead
        /// of <c>new Address(privateKey.PublicKey)</c>.</para>
        /// </summary>
        /// <param name="privateKey">A <see cref="PrivateKey"/> to derive
        /// the corresponding <see cref="Address"/> from.</param>
        /// <returns>The corresponding <see cref="Address"/> derived from
        /// <paramref name="privateKey"/>.</returns>
        public static Address ToAddress(this PrivateKey privateKey)
        {
            return privateKey.PublicKey.ToAddress();
        }

        private static ImmutableArray<byte> DeriveAddress(PublicKey key)
        {
            byte[] hashPayload = key.Format(false).Skip(1).ToArray();
            var output = Address.CalculateHash(hashPayload);

            return output.Skip(output.Length - Address.Size).ToImmutableArray();
        }
    }
}
