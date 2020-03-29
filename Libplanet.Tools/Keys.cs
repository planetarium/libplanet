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
    public class Keys
    {
        public Keys()
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
            string passphrase = null,
            [Option(
                Description = "Print the created private key as Web3 Secret Storage format."
            )]
            bool json = false,
            [Option(Description = "Do not add to the key store, but only show the created key.")]
            bool dryRun = false
        )
        {
            if (passphrase is null)
            {
                passphrase = ConsolePasswordReader.Read("Passphrase: ");
                string second = ConsolePasswordReader.Read("Retype tassphrase: ");
                if (!passphrase.Equals(second))
                {
                    throw Utils.Error("Passwords do not match.");
                }
            }

            var key = new PrivateKey();
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

        [Command(Aliases = new[] { "rm" }, Description = "Remove a private key.")]
        public void Remove(
            [Argument(Name = "UUID", Description = "A key UUID to remove.")] Guid keyId,
            [Option(
                'p',
                ValueName = "PASSPHRASE",
                Description = "Take passphrase through this option instead of prompt."
            )]
            string passphrase = null
        )
        {
            passphrase ??= ConsolePasswordReader.Read("Passphrase: ");
            try
            {
                ProtectedPrivateKey ppk = KeyStore.Get(keyId);
                ppk.Unprotect(passphrase);
                KeyStore.Remove(keyId);
            }
            catch (NoKeyException)
            {
                throw Utils.Error($"No such key ID: {keyId}");
            }
            catch (IncorrectPassphraseException)
            {
                throw Utils.Error("The passphrase is wrong.");
            }
        }

        private void PrintKeys(IEnumerable<(Guid, ProtectedPrivateKey)> keys)
        {
            Utils.PrintTable(
                ("UUID", "Address"),
                keys.Select(t => (t.Item1.ToString(), t.Item2.Address.ToString()))
            );
        }
    }
}
