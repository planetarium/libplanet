using System.Collections.Immutable;
using Libplanet.Crypto;
using Libplanet.Types.Assets;

namespace Libplanet.Action.Tests
{
    /// <summary>
    /// A set of variety of <see cref="Currency"><c>Currencies</c></see> used for testing.
    /// As minter's identities are dynamically generated at runtime, any <see cref="Currency"/>
    /// with non-<see langword="null"/> <see cref="Currency.Minters"/> specified has variable
    /// <see cref="Currency.Hash"/>, namely <see cref="CurrencyC"/>, <see cref="CurrencyD"/>,
    /// <see cref="CurrencyE"/>, and <see cref="CurrencyF"/>.
    /// </summary>
    public static class Currencies
    {
        /// <summary>
        /// The <see cref="PrivateKey"/> of a minter for <see cref="CurrencyC"/>,
        /// <see cref="CurrencyD"/>, <see cref="CurrencyE"/>, and <see cref="CurrencyF"/>.
        /// </summary>
        public static readonly PrivateKey MinterAKey = new PrivateKey();

        /// <summary>
        /// The <see cref="PrivateKey"/> of a minter for <see cref="CurrencyD"/>.
        /// </summary>
        public static readonly PrivateKey MinterBKey = new PrivateKey();

        /// <summary>
        /// The <see cref="Address"/> of a minter for <see cref="CurrencyC"/>,
        /// <see cref="CurrencyD"/>, <see cref="CurrencyE"/>, and <see cref="CurrencyF"/>.
        /// </summary>
        public static readonly Address MinterA = MinterAKey.Address;

        /// <summary>
        /// The <see cref="Address"/> of a minter for <see cref="CurrencyD"/>.
        /// </summary>
        public static readonly Address MinterB = MinterBKey.Address;

#pragma warning disable CS0618
        /// <summary>
        /// A simple legacy <see cref="Currency"/> with ticker "AAA", no decimal places, and
        /// no minters.
        /// </summary>
        public static readonly Currency CurrencyA =
            Currency.Legacy("AAA", 0, null);

        /// <summary>
        /// A simple legacy <see cref="Currency"/> with ticker "BBB", two decimal places, and
        /// no minters.
        /// </summary>
        public static readonly Currency CurrencyB =
            Currency.Legacy("BBB", 2, null);

        /// <summary>
        /// A simple legacy <see cref="Currency"/> with ticker "CCC", no decimal places, and
        /// <see cref="MinterA"/> as its minter.
        /// </summary>
        public static readonly Currency CurrencyC =
            Currency.Legacy("CCC", 0, new[] { MinterA }.ToImmutableHashSet());

        /// <summary>
        /// A simple legacy <see cref="Currency"/> with ticker "DDD", no decimal places, and
        /// <see cref="MinterA"/> and <see cref="MinterB"/> as its minters.
        /// </summary>
        public static readonly Currency CurrencyD =
            Currency.Legacy("DDD", 0, new[] { MinterA, MinterB }.ToImmutableHashSet());

        /// <summary>
        /// A simple uncapped <see cref="Currency"/> with ticker "EEE", no decimal places, and
        /// <see cref="MinterA"/> as its minter.
        /// </summary>
        public static readonly Currency CurrencyE =
            Currency.Uncapped("EEE", 0, new[] { MinterA }.ToImmutableHashSet());

        /// <summary>
        /// A simple uncapped <see cref="Currency"/> with ticker "FFF", no decimal places, and
        /// <see cref="MinterA"/> as its minter.
        /// </summary>
        public static readonly Currency CurrencyF =
            Currency.Capped("FFF", 0, (100, 0), new[] { MinterA }.ToImmutableHashSet());
#pragma warning restore CS0618
    }
}
