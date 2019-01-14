using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using Libplanet.Crypto;
using Libplanet.Serialization;

namespace Libplanet.Net
{
    [Serializable]
    [Uno.GeneratedEquality]
    public partial class Peer : ISerializable
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

        protected Peer(SerializationInfo info, StreamingContext context)
        {
            PublicKey = new PublicKey(info.GetValue<byte[]>("public_key"));
            Urls = info.GetValue<List<string>>("urls")
                .Select(s => new Uri(s))
                .ToImmutableArray();
        }

        [Uno.EqualityKey]
        [Pure]
        public PublicKey PublicKey { get; }

        [Uno.EqualityKey]
        [Pure]
        public IImmutableList<Uri> Urls { get; }

        [Pure]
        public Address Address => new Address(PublicKey);

        [Pure]
        public Peer AddUrl(Uri url) => new Peer(PublicKey, Urls.Add(url));

        public void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue("public_key", PublicKey.Format(true));
            info.AddValue("urls", Urls.Select(u => u.ToString()).ToList());
        }

        public override string ToString()
        {
            return string.Join(
                ",",
                new[] { Address.ToString() }.Concat(Urls.Select(u => u.ToString())));
        }
    }
}
