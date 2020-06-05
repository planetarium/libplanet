#nullable enable
using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;

namespace Libplanet
{
    /// <summary>
    /// Represents a currency type.  Every single value of <see cref="Currency"/> defines
    /// a distinct currency type.  To draw a parallel with real world monetary,
    /// each <see cref="Currency"/> value represents such currencies as USD (US Dollar) or
    /// EUR (Euro), <em>not values</em> like $100 or €100.
    /// </summary>
    public readonly struct Currency
    {
        /// <summary>
        /// The ticker symbol, e.g., <c>&quot;USD&quot;</c>.
        /// </summary>
        public readonly string Ticker;

        /// <summary>
        /// The <see cref="Address"/>es who can mint the currency.
        /// If this is <c>null</c> <em>anyone</em> can mint the currency.
        /// </summary>
        /// <remarks>
        /// Unlike <c>null</c>, an empty set means <em>no one</em> can mint the currency.
        /// </remarks>
        public readonly IImmutableSet<Address>? Minters;

        /// <summary>
        /// The deterministic hash derived from other fields.
        /// </summary>
        public readonly HashDigest<SHA1> Hash;

        /// <summary>
        /// Defines a <see cref="Currency"/> type.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="minters">The <see cref="Address"/>es who can mint the currency.
        /// See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="ticker"/>
        /// is an empty string.</exception>
        public Currency(string ticker, IImmutableSet<Address>? minters)
        {
            ticker = ticker.Trim();

            if (string.IsNullOrEmpty(ticker))
            {
                throw new ArgumentException(
                    "Currency ticker symbol cannot be empty.",
                    nameof(ticker)
                );
            }

            Ticker = ticker;
            Minters = minters;
            Hash = GetHash();
        }

        /// <summary>
        /// Defines a <see cref="Currency"/> type.
        /// </summary>
        /// <param name="ticker">The ticker symbol, e.g., <c>&quot;USD&quot;</c>.</param>
        /// <param name="minter">The address who can mint the currency.  To specify multiple
        /// minters, use the <see cref="Currency(string, IImmutableSet{Address})"/> constructor
        /// instead.  See also <see cref="Minters"/> field which corresponds to this.</param>
        /// <seealso cref="Currency(string, IImmutableSet{Address})"/>
        public Currency(string ticker, Address? minter)
            : this(
                ticker,
                minter is Address m ? ImmutableHashSet.Create(m) : null
            )
        {
        }

        /// <summary>
        /// Returns <c>true</c> if and only if the given <paramref name="address"/> is allowed
        /// to mint or burn assets of this currency.
        /// </summary>
        /// <param name="address">The account address to test.</param>
        /// <returns><c>true</c> if and only if the given <paramref name="address"/> is allowed to
        /// mint or burn assets of this currency.</returns>
        [Pure]
        public bool AllowsToMint(Address address) => Minters is null || Minters.Contains(address);

        [Pure]
        public override string ToString() =>
            $"{Ticker} ({Hash})";

        [Pure]
        private HashDigest<SHA1> GetHash()
        {
            using var buffer = new MemoryStream();
            using var sha1 = new SHA1CryptoServiceProvider();
            using var stream = new CryptoStream(buffer, sha1, CryptoStreamMode.Write);
            var codec = new Codec();
#pragma warning disable SA1129  // See also: https://github.com/planetarium/bencodex.net/issues/20
            IValue minters = Minters is ImmutableHashSet<Address> a
                ? new List(a.OrderBy(m => m).Select(m => (IValue)new Binary(m.ToByteArray())))
                : (IValue)new Null();
#pragma warning restore SA1129
            IValue serialized = Dictionary.Empty
                .Add("ticker", Ticker)
                .Add("minters", minters);
            codec.Encode(serialized, stream);
            stream.FlushFinalBlock();
            return new HashDigest<SHA1>(sha1.Hash);
        }
    }
}
