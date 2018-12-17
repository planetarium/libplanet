using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;

namespace Libplanet.Net
{
    [Uno.GeneratedEquality]
    public partial class Peer
    {
        public Peer(PublicKey publicKey, IImmutableList<Uri> urls)
        {
            if (publicKey == null)
            {
                throw new ArgumentNullException(nameof(publicKey));
            }
            else if (urls == null)
            {
                throw new ArgumentNullException(nameof(urls));
            }

            PublicKey = publicKey;
            Urls = urls;
        }

        public Peer(PublicKey publicKey, IEnumerable<Uri> urls)
            : this(publicKey, urls.ToImmutableArray())
        {
        }

        [Uno.EqualityKey]
        [Pure]
        public PublicKey PublicKey { get; }

        [Uno.EqualityKey]
        [Pure]
        public IImmutableList<Uri> Urls { get; }

        [Pure]
        public Address Address => Address.FromPublicKey(PublicKey);

        [Pure]
        public Peer AddUrl(Uri url) => new Peer(PublicKey, Urls.Add(url));
    }
}
