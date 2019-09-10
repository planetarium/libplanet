using System;

namespace Libplanet.Action
{
    /// <summary>
    /// This extension class provides some convenient methods
    /// to deal with <see cref="IRandom"/>.
    /// </summary>
    public static class RandomExtension
    {
        /// <summary>
        /// Generates a random <see cref="Guid"/>.
        /// </summary>
        /// <param name="random"> <see cref="IRandom"/> to generate
        /// a random <see cref="Guid"/>.</param>
        /// <returns> Generated random <see cref="Guid"/>.
        /// </returns>
        /// <seealso cref="IRandom"/>
        public static Guid GenerateRandomGuid(this IRandom random)
        {
            // FIXME implement rfc4122 https://www.ietf.org/rfc/rfc4122.txt
            var bytes = new byte[16];
            random.NextBytes(bytes);
            return new Guid(bytes);
        }
    }
}
