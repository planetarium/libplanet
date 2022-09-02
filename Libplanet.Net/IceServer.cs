using System;
using System.Linq;
using Libplanet.Stun;

namespace Libplanet.Net
{
    public class IceServer : IIceServer
    {
        public IceServer(string url)
            : this(new Uri(url))
        {
        }

        /// <summary>
        /// Creates an instance by parsing given <paramref name="url"/>.
        /// </summary>
        /// <param name="url">The <see cref="Uri"/> to parse.</param>
        /// <exception cref="ArgumentException">Thrown when <see cref="Uri.Scheme"/> is
        /// not <c>"turn"</c> for <paramref name="url"/>.</exception>
        public IceServer(Uri url)
        {
            if (url.Scheme != "turn")
            {
                throw new ArgumentException($"{url} is not a valid TURN url.");
            }

#pragma warning disable S1121, S3358, SA1316
            Url = url;
            Func<string, string, bool, char, (string, string, bool)> parser =
                (username, credential, colonFound, c) =>
                    c == ':'
                        ? colonFound
                            ? (username, credential, !colonFound)
                            : throw new ArgumentException(
                                $"Uri.UserInfo '{url.UserInfo}' have to contain single colon " +
                                "as a delimiter between username and credential.")
                        : colonFound
                            ? (username += c, credential, colonFound)
                            : (username, credential += c, colonFound);
            (string username, string credential, bool colonFound) seed =
                (string.Empty, string.Empty, true);
            (Username, Credential, _) = url.UserInfo
                .Aggregate(seed, (prev, c) => parser(
                    prev.username, prev.credential, prev.colonFound, c));
#pragma warning restore S1121, S3358, SA1316
        }

        public Uri Url { get; }

        public string Username { get; }

        public string Credential { get; }
    }
}
