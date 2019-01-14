using Libplanet.Crypto;

namespace Libplanet
{
    /// <summary>
    /// This extension class enables some convenient methods (sugar for
    /// the most part) to deal with <see cref="Address"/>.
    /// </summary>
    /// <seealso cref="Address"/>
    public static class AddressExtension
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
        /// <seealso cref="Address(PublicKey)"/>
        public static Address ToAddress(this PublicKey publicKey)
        {
            return new Address(publicKey);
        }
    }
}
