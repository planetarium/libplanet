namespace Libplanet.Extensions.Cocona.Commands;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using global::Cocona;
using Libplanet.Crypto;
using Libplanet.KeyStore;

public class KeyCommand
{
    public KeyCommand()
    {
        KeyStore = Web3KeyStore.DefaultKeyStore;
    }

    public IKeyStore KeyStore { get; set; }

    [PrimaryCommand]
    [Command(Description = "List all private keys.")]
    public void List(
        [Option(
            Description = "Specify key store path to list."
        )]
        string? path = null)
    {
        ChangeKeyStorePath(path);
        PrintKeys(KeyStore.List().Select(t => t.ToValueTuple()));
    }

    [Command(Description = "Create a new private key.")]
    public void Create(
        PassphraseParameters passphrase,
        [Option(
            Description = "Print created private key as Web3 Secret Storage format."
        )]
        bool json = false,
        [Option(Description = "Do not add to the key store, but only show the created key.")]
        bool dryRun = false,
        [Option(Description = "Path to key store")]
        string? path = null
    )
    {
        ChangeKeyStorePath(path);
        string passphraseValue = passphrase.Take("Passphrase: ", "Retype passphrase: ");
        PrivateKey pkey = new PrivateKey();
        ProtectedPrivateKey ppk = ProtectedPrivateKey.Protect(pkey, passphraseValue);
        Guid keyId = Add(ppk, dryRun);
        if (json)
        {
            Stream stdout = Console.OpenStandardOutput();
            ppk.WriteJson(stdout, keyId);
            stdout.WriteByte(0x0a);
        }
        else
        {
            PrintKeys(new[] { (keyId, ppk) });
        }
    }

    [Command(Aliases = new[] { "rm" }, Description = "Remove a private key.")]
    public void Remove(
        [Argument(Name = "KEY-ID", Description = "A key UUID to remove.")]
        Guid keyId,
        PassphraseParameters passphrase,
        [Option(Description = "Remove without asking passphrase.")]
        bool noPassphrase = false,
        [Option(Description = "Path to key store.")]
        string? path = null
    )
    {
        ChangeKeyStorePath(path);
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

    [Command(Description = "Import a raw private key or Web3 Secret Storage.")]
    public void Import(
        [Argument(
            "PRIVATE-KEY",
            Description = "A raw private key in hexadecimal string, or path to Web3 Secret " +
                            "Storage to import"
        )]
        string key,
        PassphraseParameters passphrase,
        [Option(
            Description = "Import Web3 Secret Storage key."
        )]
        bool json = false,
        [Option(Description = "Do not add to the key store, but only show the created key.")]
        bool dryRun = false,
        [Option(Description = "Path to key store.")]
        string? path = null
    )
    {
        ChangeKeyStorePath(path);
        if (json)
        {
            try
            {
                ProtectedPrivateKey ppk = ProtectedPrivateKey.FromJson(ValidateJsonPath(key));
                PrintKeys(new[] { (Add(ppk, dryRun), ppk) });
            }
            catch (CommandExitedException)
            {
                throw;
            }
            catch (Exception)
            {
                throw Utils.Error("Couldn't load ppk from json.");
            }
        }
        else
        {
            PrivateKey privateKey = ValidateRawHex(key);
            string passphraseValue = passphrase.Take("Passphrase: ", "Retype passphrase: ");
            ProtectedPrivateKey ppk = ProtectedPrivateKey.Protect(
                privateKey, passphraseValue);
            PrintKeys(new[] { (Add(ppk, dryRun), ppk) });
        }
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
        [Option(Description = "Export a Web3 Secret Storage Formatted json")]
        bool json = false,
        [Option(Description = "Path to key store to export from.")]
        string? path = null
    )
    {
        ChangeKeyStorePath(path);
        PrivateKey key = UnprotectKey(keyId, passphrase);
        byte[] rawKey = publicKey ? key.PublicKey.Format(true) : key.ToByteArray();
        using Stream stdout = Console.OpenStandardOutput();
        if (bytes)
        {
            stdout.Write(rawKey, 0, rawKey.Length);
        }
        else if (json)
        {
            var ppk = KeyStore.Get(keyId);
            ppk.WriteJson(stdout, keyId);
            stdout.WriteByte(0x0a);
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
        string? binaryOutput = null,
        [Option(Description = "Path to key store to use key from.")]
        string? storePath = null
    )
    {
        ChangeKeyStorePath(storePath);
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

    [Command(Description = "Derive public key and address from private key.")]
    public void Derive(
        [Argument(
            "KEY",
            Description = "A raw private key (or a public key if -P/--public-key is used) " +
                "to derive the address from."
        )]
        string key,
        [Option('P', Description = "Derive from a public key instead of a private key.")]
        bool publicKey = false
    )
    {
        PublicKey pubKey = publicKey
            ? new PublicKey(ByteUtil.ParseHex(key))
            : ValidateRawHex(key).PublicKey;
        string addr = pubKey.ToAddress().ToString();
        string pub = ByteUtil.Hex(pubKey.Format(compress: true));
        Utils.PrintTable(("Public Key", "Address"), new[] { (pub, addr) });
    }

    // FIXME: Declare a ICommandParameterSet type taking key ID and keystore path instead:
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

    private Guid Add(
        ProtectedPrivateKey ppk,
        bool dryRun
    )
    {
        Guid keyId = dryRun ? Guid.NewGuid() : KeyStore.Add(ppk);
        return keyId;
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

    private string ValidateJsonPath(string jsonPath)
    {
        try
        {
            string json = new StreamReader(jsonPath).ReadToEnd();
            return json;
        }
        catch (System.IO.FileNotFoundException)
        {
            throw Utils.Error("This file does not exist.");
        }
    }

    // FIXME: Declare a ICommandParameterSet type taking key ID and keystore path instead:
    private void ChangeKeyStorePath(string? path)
    {
        if (path != null)
        {
            KeyStore = new Web3KeyStore(Path.GetFullPath(path));
        }
        else
        {
            KeyStore = Web3KeyStore.DefaultKeyStore;
        }
    }
}
