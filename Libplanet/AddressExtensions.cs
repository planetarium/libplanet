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
        /// cref="IPublicKey"/>.
        /// <para>This enables a code like <c>publicKey.ToAddress()</c> instead
        /// of <c>new Address(publicKey)</c>.</para>
        /// </summary>
        /// <param name="publicKey">A <see cref="IPublicKey"/> to derive
        /// the corresponding <see cref="Address"/> from.</param>
        /// <returns>The corresponding <see cref="Address"/> derived from
        /// <paramref name="publicKey"/>.</returns>
        /// <seealso cref="Address(IPublicKey)"/>
        public static Address ToAddress(this IPublicKey publicKey)
        {
            return new Address(publicKey);
        }

        /// <summary>
        /// Derives the corresponding <see cref="Address"/> from a <see
        /// cref="IPrivateKey"/>.
        /// <para>This enables a code like <c>privateKey.ToAddress()</c> instead
        /// of <c>new Address(privateKey.PublicKey)</c>.</para>
        /// </summary>
        /// <param name="privateKey">A <see cref="IPrivateKey"/> to derive
        /// the corresponding <see cref="Address"/> from.</param>
        /// <returns>The corresponding <see cref="Address"/> derived from
        /// <paramref name="privateKey"/>.</returns>
        public static Address ToAddress(this IPrivateKey privateKey)
        {
            return new Address(privateKey.PublicKey);
        }
    }
}
