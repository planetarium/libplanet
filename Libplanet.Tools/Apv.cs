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
            string? passphrase = null,
            [Option(
                'E',
                ValueName = "FILE",
                Description = "Bencodex file to use for extra data.  " +
                    "For standard input, use a hyphen (`-').  " +
                    "For an actual file named a hyphen, prepend `./', i.e., `./-'."
            )]
            string? extraFile = null,
            [Option(
                'e',
                ValueName = "KEY=VALUE",
                Description = "Set a value to a key on extra Bencodex dictionary.  " +
                    "Can be applied multiple times (e.g., `-e foo=1 -e bar=baz').  " +
                    "This option implies the extra data to be a Bencodex dictionary, " +
                    "hence cannot be used together with -E/--extra-file option."
            )]
            string[]? extra = null
        )
        {
            PrivateKey key = new Key().UnprotectKey(keyId, passphrase);
            IValue? extraValue = null;
            if (extraFile is string path)
            {
                if (extra is string[] e && e.Length > 0)
                {
                    throw Utils.Error(
                        "-E/--extra-file and -e/--extra cannot be used together at a time."
                    );
                }

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
                    extraValue = codec.Decode(buffer);
                }
                else
                {
                    using Stream stream = File.Open(path, FileMode.Open, FileAccess.Read);
                    extraValue = codec.Decode(stream);
                }
            }
            else if (extra is string[] e && e.Length > 0)
            {
                var dict = Bencodex.Types.Dictionary.Empty;
                foreach (string pair in e)
                {
                    int sepPos = pair.IndexOf('=');
                    if (sepPos < 0)
                    {
                        throw Utils.Error(
                            "-e/--extra must be a pair of KEY=VALUE, but no equal (=) separator: " +
                            $"`{pair}'."
                        );
                    }

                    string key_ = pair.Substring(0, sepPos);
                    string value = pair.Substring(sepPos + 1);
                    dict = dict.SetItem(key_, value);
                }

                extraValue = dict;
            }

            AppProtocolVersion v = AppProtocolVersion.Sign(key, version, extraValue);
            Console.WriteLine(v.Token);
        }
    }
}
