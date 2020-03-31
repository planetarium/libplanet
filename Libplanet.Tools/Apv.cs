using System;
using System.IO;
using Bencodex;
using Bencodex.Types;
using Cocona;
using Libplanet.Crypto;
using Libplanet.Net;

namespace Libplanet.Tools
{
    public class Apv
    {
        [Command(Description = "Sign a new app protocol version.")]
        public void Sign(
            [Argument(Name = "KEY-ID", Description = "A private key to use for signing.")]
            Guid keyId,
            [Argument(Name = "VERSION", Description = "A version number to sign.")]
            int version,
            [Option(
                'p',
                ValueName = "PASSPHRASE",
                Description = "Take passphrase through this option instead of prompt."
            )]
            string passphrase = null,
            [Option(
                'E',
                ValueName = "FILE",
                Description = "Bencodex file to use for extra data.  " +
                    "For standard input, use a hyphen (`-').  " +
                    "For an actual file named a hyphen, prepend `./', i.e., `./-'."
            )]
            string extraFile = null
        )
        {
            PrivateKey key = new Key().UnprotectKey(keyId, passphrase);
            IValue extra = null;
            if (extraFile is string path)
            {
                var codec = new Codec();
                if (path == "-")
                {
                    // Stream for stdin does not support .Seek()
                    using MemoryStream buffer = new MemoryStream();
                    using (Stream stream = Console.OpenStandardInput())
                    {
                        stream.CopyTo(buffer);
                    }

                    buffer.Seek(0, SeekOrigin.Begin);
                    extra = codec.Decode(buffer);
                }
                else
                {
                    using Stream stream = File.Open(path, FileMode.Open, FileAccess.Read);
                    extra = codec.Decode(stream);
                }
            }

            var v = AppProtocolVersion.Sign(key, version, extra);
            Console.WriteLine(v.Token);
        }
    }
}
