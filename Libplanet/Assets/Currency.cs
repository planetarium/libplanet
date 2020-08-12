#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Serialization;

namespace Libplanet.Assets
{
    /// <summary>
    /// Represents a currency type.  Every single value of <see cref="Currency"/> defines
    /// a distinct currency type.  To draw a parallel with real world monetary,
    /// each <see cref="Currency"/> value represents such currencies as USD (US Dollar) or
    /// EUR (Euro), <em>not values</em> like $100 or €100.
    /// </summary>
    /// <seealso cref="FungibleAssetValue"/>
    [Serializable]
    public readonly struct Currency : IEquatable<Currency>, ISerializable
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
        /// <seealso cref="IAccountStateDelta.MintAsset"/>
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

        private Currency(SerializationInfo info, StreamingContext context)
        {
            Ticker = info.GetValue<string>(nameof(Ticker));

            if (info.TryGetValue(nameof(Minters), out List<byte[]> minters))
            {
                Minters = minters.Select(m => new Address(m)).ToImmutableHashSet();
            }
            else
            {
                Minters = default;
            }

            Hash = GetHash();
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

        void ISerializable.GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue(nameof(Ticker), Ticker);

            if (Minters is IImmutableSet<Address> minters)
            {
                info.AddValue(nameof(Minters), minters.Select(m => m.ToByteArray()).ToList());
            }
        }

        [Pure]
        public override string ToString() =>
            $"{Ticker} ({Hash})";

        [Pure]
        public override int GetHashCode()
        {
            unchecked
            {
                return -1545866855 + Hash.GetHashCode();
            }
        }

        [Pure]
        public override bool Equals(object? obj)
        {
            return obj is IEquatable<Currency> other
                ? other.Equals(this)
                : false;
        }

        [Pure]
        public bool Equals(Currency other)
        {
            return Hash.Equals(other.Hash);
        }

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
