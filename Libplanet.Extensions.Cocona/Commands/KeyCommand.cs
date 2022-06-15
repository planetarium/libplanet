using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using global::Cocona;
using Libplanet.Crypto;
using Libplanet.Extensions.Cocona.Commands.Key;
using Libplanet.KeyStore;

namespace Libplanet.Extensions.Cocona.Commands
{
    [HasSubCommands(
        typeof(DerivationCommand),
        "derive",
        Description = "Derive the address or public key from private key."
    )]
    public class KeyCommand
    {
        public KeyCommand()
        {
            KeyStore = Web3KeyStore.DefaultKeyStore;
        }

        public IKeyStore KeyStore { get; }

        [PrimaryCommand]
        [Command(Description = "List all private keys.")]
        public void List() =>
            PrintKeys(KeyStore.List().Select(t => t.ToValueTuple()));

        [Command(Description = "Create a new private key.")]
        public void Create(
            PassphraseParameters passphrase,
            [Option(
                Description = "Export created private key as Web3 Secret Storage format."
            )]
            bool json = false,
            [Option(Description = "Do not add to the key store, but only show the created key.")]
            bool dryRun = false,
            [Option(Description = "Path to export key as Web3 Secret Storage Format")]
            string path = ""
        ) =>
            Add(string.Empty, passphrase, json, dryRun, path, true);

        [Command(Aliases = new[] { "rm" }, Description = "Remove a private key.")]
        public void Remove(
            [Argument(Name = "KEY-ID", Description = "A key UUID to remove.")]
            Guid keyId,
            PassphraseParameters passphrase,
            [Option(Description = "Remove without asking passphrase.")]
            bool noPassphrase = false
        )
        {
            try
            {
                if (!noPassphrase)
                {
                    UnprotectKey(keyId, passphrase);
                }

                KeyStore.Remove(keyId);
            }
            catch (NoKeyException)
            {
                throw Utils.Error($"No such key ID: {keyId}");
            }
        }

        [Command(Description = "Import a raw private key.")]
        public void Import(
            [Argument(
                "PRIVATE-KEY",
                Description = "A raw private key to import in hexadecimal string."
            )]
            string key,
            PassphraseParameters passphrase,
            [Option(
                Description = "Print the created private key as Web3 Secret Storage format."
            )]
            bool json = false,
            [Option(Description = "Do not add to the key store, but only show the created key.")]
            bool dryRun = false
        )
        {
            Add(key, passphrase, json, dryRun, key, false);
        }

        [Command(Description = "Export a raw private key (or public key).")]
        public void Export(
            [Argument("KEY-ID", Description = "A key UUID to export.")]
            Guid keyId,
            PassphraseParameters passphrase,
            [Option('P', Description = "Export a public key instead of private key.")]
            bool publicKey = false,
            [Option(
                'b',
                Description = "Print raw bytes instead of hexadecimal.  No trailing LF appended."
            )]
            bool bytes = false,
            [Option(Description = "Export a Web3 Secret Storage Formatted json to path.")]
            bool json = false,
            [Option(Description = "Path to export json key.")]
            string path = ""
        )
        {
            PrivateKey key = UnprotectKey(keyId, passphrase);
            byte[] rawKey = publicKey ? key.PublicKey.Format(true) : key.ToByteArray();
            if (bytes)
            {
                using Stream stdout = Console.OpenStandardOutput();
                stdout.Write(rawKey, 0, rawKey.Length);
            }
            else if (json)
            {
                Stream fs = PathHandler(path);
                var ppk = KeyStore.Get(keyId);
                ppk.WriteJson(fs, keyId);
                fs.WriteByte(0x0a);
                fs.Close();
            }
            else
            {
                Console.WriteLine(ByteUtil.Hex(rawKey));
            }
        }

        [Command(
            Aliases = new[] { "gen" },
            Description = "Generate a raw private key without storing it."
        )]
        public void Generate(
            [Option('A', Description = "Do not show a derived address.")]
            bool noAddress = false,
            [Option('p', Description = "Show a public key as well.")]
            bool publicKey = false
        )
        {
            var key = new PrivateKey();
            string priv = ByteUtil.Hex(key.ByteArray);
            string addr = key.ToAddress().ToString();
            string pub = ByteUtil.Hex(key.PublicKey.Format(compress: true));

            if (!noAddress && publicKey)
            {
                Utils.PrintTable(
                    ("Private key", "Address", "Public key"),
                    new[] { (priv, addr, pub) }
                );
            }
            else if (!noAddress)
            {
                Utils.PrintTable(("Private key", "Address"), new[] { (priv, addr) });
            }
            else if (publicKey)
            {
                Utils.PrintTable(("Private key", "Public key"), new[] { (priv, pub) });
            }
            else
            {
                Console.WriteLine(priv);
            }
        }

        [Command(Description = "Sign a message.")]
        public void Sign(
            [Argument("KEY-ID", Description = "A key UUID to sign.")]
            Guid keyId,
            [Argument(
                "FILE",
                Description = "A path of the file to sign. If you pass '-' dash character, " +
                              "it will receive the message to sign from stdin."
            )]
            string path,
            PassphraseParameters passphrase,
            [Option(Description = "A path of the file to save the signature. " +
                                  "If you pass '-' dash character, it will print to stdout " +
                                  "as raw bytes not hexadecimal string or else. " +
                                  "If this option isn't given, it will print hexadecimal string " +
                                  "to stdout as default behaviour.")]
            string? binaryOutput = null
        )
        {
            PrivateKey key = UnprotectKey(keyId, passphrase);

            byte[] message;
            if (path == "-")
            {
                // Stream for stdin does not support .Seek()
                using MemoryStream buffer = new MemoryStream();
                using (Stream stream = Console.OpenStandardInput())
                {
                    stream.CopyTo(buffer);
                }

                message = buffer.ToArray();
            }
            else
            {
                message = File.ReadAllBytes(path);
            }

            var signature = key.Sign(message);
            if (binaryOutput is null)
            {
                Console.WriteLine(ByteUtil.Hex(signature));
            }
            else if (binaryOutput == "-")
            {
                using Stream stdout = Console.OpenStandardOutput();
                stdout.Write(signature, 0, signature.Length);
            }
            else
            {
                File.WriteAllBytes(binaryOutput, signature);
            }
        }

        public PrivateKey UnprotectKey(
            Guid keyId,
            PassphraseParameters passphrase,
            bool ignoreStdin = false
        )
        {
            ProtectedPrivateKey ppk;
            try
            {
                ppk = KeyStore.Get(keyId);
            }
            catch (NoKeyException)
            {
                throw Utils.Error($"No such key ID: {keyId}");
            }

            string passphraseValue = passphrase.Take($"Passphrase (of {keyId}): ");

            try
            {
                return ppk.Unprotect(passphraseValue);
            }
            catch (IncorrectPassphraseException)
            {
                throw Utils.Error("The passphrase is wrong.");
            }
        }

        private void Add(
            string key,
            PassphraseParameters passphrase,
            bool json,
            bool dryRun,
            string pathString,
            bool create
        )
        {
            Stream fs = PathHandler(pathString);
            if (create)
            {
                string passphraseValue = passphrase.Take("Passphrase: ", "Retype passphrase: ");
                PrivateKey pkey = new PrivateKey();
                ProtectedPrivateKey ppk = ProtectedPrivateKey.Protect(pkey, passphraseValue);
                Guid keyId = dryRun ? Guid.NewGuid() : KeyStore.Add(ppk);
                if (json)
                {
                    ppk.WriteJson(fs, keyId);
                    fs.WriteByte(0x0a);
                    fs.Close();
                }
            }
            else
            {
                if (json)
                {
                    try
                    {
                        ProtectedPrivateKey ppk = ProtectedPrivateKey.FromJson(
                                                new StreamReader(fs).ReadToEnd());
                        Guid keyId = dryRun ? Guid.NewGuid() : KeyStore.Add(ppk);
                    }
                    catch (Exception)
                    {
                        Utils.Error("This is not valid json file or file does not exists.");
                    }
                }
                else
                {
                    string passphraseValue = passphrase.Take("Passphrase: ", "Retype passphrase: ");
                    PrivateKey privateKey = ValidateRawHex(key);
                    ProtectedPrivateKey ppk = ProtectedPrivateKey.Protect(
                        privateKey, passphraseValue);
                    Guid keyId = dryRun ? Guid.NewGuid() : KeyStore.Add(ppk);
                }
            }
        }

        private void PrintKeys(IEnumerable<(Guid KeyId, ProtectedPrivateKey Key)> keys)
        {
            Utils.PrintTable(
                ("Key ID", "Address"),
                keys.Select(t => (t.KeyId.ToString(), t.Key.Address.ToString()))
            );
        }

        private PrivateKey ValidateRawHex(string rawKeyHex)
        {
            PrivateKey key;
            try
            {
                key = PrivateKey.FromString(rawKeyHex);
            }
            catch (FormatException)
            {
                throw Utils.Error("A raw private key should be hexadecimal.");
            }
            catch (ArgumentOutOfRangeException)
            {
                throw Utils.Error("Hexadecimal characters should be even (not odd).");
            }
            catch (Exception)
            {
                throw Utils.Error("Invalid private key.");
            }

            return key;
        }

        private Stream PathHandler(string pathString)
        {
            if (pathString == string.Empty)
            {
                return System.Console.OpenStandardOutput();
            }
            else
            {
                string path = Path.GetFullPath(pathString);
                return File.Open(path, FileMode.OpenOrCreate);
            }
        }
    }
}
