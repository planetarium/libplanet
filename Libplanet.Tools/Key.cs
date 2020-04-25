using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Cocona;
using GetPass;
using Libplanet.Crypto;
using Libplanet.KeyStore;

namespace Libplanet.Tools
{
    public class Key
    {
        public Key()
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
            [Option(
                'p',
                ValueName = "PASSPHRASE",
                Description = "Take passphrase through this option instead of prompt."
            )]
            string? passphrase = null,
            [Option(
                Description = "Print the created private key as Web3 Secret Storage format."
            )]
            bool json = false,
            [Option(Description = "Do not add to the key store, but only show the created key.")]
            bool dryRun = false
        ) =>
            Add(new PrivateKey(), passphrase, json, dryRun);

        [Command(Aliases = new[] { "rm" }, Description = "Remove a private key.")]
        public void Remove(
            [Argument(Name = "KEY-ID", Description = "A key UUID to remove.")] Guid keyId,
            [Option(
                'p',
                ValueName = "PASSPHRASE",
                Description = "Take passphrase through this option instead of prompt."
            )]
            string? passphrase = null
        )
        {
            try
            {
                UnprotectKey(keyId, passphrase);
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
            string rawKeyHex,
            [Option(
                'p',
                ValueName = "PASSPHRASE",
                Description = "Take passphrase through this option instead of prompt."
            )]
            string? passphrase = null,
            [Option(
                Description = "Print the created private key as Web3 Secret Storage format."
            )]
            bool json = false,
            [Option(Description = "Do not add to the key store, but only show the created key.")]
            bool dryRun = false
        )
        {
            PrivateKey key;
            try
            {
                byte[] keyBytes = ByteUtil.ParseHex(rawKeyHex);
                key = new PrivateKey(keyBytes);
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

            Add(key, passphrase, json, dryRun);
        }

        [Command(Description = "Export a raw private key (or public key).")]
        public void Export(
            [Argument("KEY-ID", Description = "A key UUID to export.")] Guid keyId,
            [Option(
                'p',
                ValueName = "PASSPHRASE",
                Description = "Take passphrase through this option instead of prompt."
            )]
            string? passphrase = null,
            [Option('P', Description = "Export a public key instead of private key.")]
            bool publicKey = false,
            [Option(
                'b',
                Description = "Print raw bytes instead of hexadecimal.  No trailing LF appended."
            )]
            bool bytes = false
        )
        {
            PrivateKey key = UnprotectKey(keyId, passphrase);
            byte[] rawKey = publicKey ? key.PublicKey.Format(true) : key.ByteArray;
            if (bytes)
            {
                using Stream stdout = Console.OpenStandardOutput();
                stdout.Write(rawKey);
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

        public PrivateKey UnprotectKey(Guid keyId, string? passphrase = null)
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

            passphrase ??= ConsolePasswordReader.Read($"Passphrase (of {keyId}): ");

            try
            {
                return ppk.Unprotect(passphrase);
            }
            catch (IncorrectPassphraseException)
            {
                throw Utils.Error("The passphrase is wrong.");
            }
        }

        private void Add(PrivateKey key, string? passphrase, bool json, bool dryRun)
        {
            if (passphrase is null)
            {
                passphrase = ConsolePasswordReader.Read("Passphrase: ");
                string second = ConsolePasswordReader.Read("Retype passphrase: ");
                if (!passphrase.Equals(second))
                {
                    throw Utils.Error("Passphrases do not match.");
                }
            }

            ProtectedPrivateKey ppk = ProtectedPrivateKey.Protect(key, passphrase);
            Guid keyId = dryRun ? Guid.NewGuid() : KeyStore.Add(ppk);
            if (json)
            {
                using Stream stdout = System.Console.OpenStandardOutput();
                ppk.WriteJson(stdout, keyId);
                stdout.WriteByte(0x0a);  // line ending
            }
            else
            {
                PrintKeys(new[] { (keyId, ppk) });
            }
        }

        private void PrintKeys(IEnumerable<(Guid KeyId, ProtectedPrivateKey Key)> keys)
        {
            Utils.PrintTable(
                ("Key ID", "Address"),
                keys.Select(t => (t.KeyId.ToString(), t.Key.Address.ToString()))
            );
        }
    }
}
