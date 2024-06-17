namespace Libplanet.Extensions.Cocona;

using System;
using System.IO;
using global::Cocona;

public class PassphraseParameters : ICommandParameterSet
{
    [Option(
        'p',
        ValueName = "PASSPHRASE",
        Description = "Take passphrase through this option instead of prompt.  " +
            "Mutually exclusive with --passphrase-file option."
    )]
    [HasDefaultValue]
    public string? Passphrase { get; set; } = null;

    [Option(
        ValueName = "FILE",
        Description = "Read passphrase from the specified file instead of taking it " +
            "through prompt.  Mutually exclusive with -p/--passphrase option.  " +
            "For standard input, use a hyphen (`-').  For an actual file named a hyphen, " +
            "prepend `./', i.e., `./-'.  Note that the trailing CR/LF is trimmed."
    )]
    [HasDefaultValue]
    public string? PassphraseFile { get; set; } = null;

    public string Take(string prompt, string? retypePrompt = null, bool ignoreStdin = false)
    {
        if (Passphrase is { } passphrase)
        {
            if (PassphraseFile is { })
            {
                throw Utils.Error(
                    $"-p/--passphrase and --passphrase-file options are mutually exclusive."
                );
            }

            return passphrase;
        }
        else if (PassphraseFile is { } filePath)
        {
            if (filePath == "-")
            {
                if (File.Exists("-"))
                {
                    Console.Error.WriteLine(
                        "Note: Passphrase is read from standard input (`-').  If you want " +
                        "to read from a file, prepend `./', i.e.: --passphrase-file=./-"
                    );
                }

                return Console.In.ReadToEnd().TrimEnd('\r', '\n');
            }

            try
            {
                return File.ReadAllText(filePath).TrimEnd('\r', '\n');
            }
            catch (FileNotFoundException)
            {
                throw Utils.Error($"Passphrase file is not found: {filePath}");
            }
        }

        if (Console.IsInputRedirected && !ignoreStdin)
        {
            throw Utils.Error(
                "Error: The standard input is not associated to any terminal device (tty), " +
                "which means it probably is piped.  If you need to pass the passphrase " +
                "through pipe, use --passphrase-file=- option instead (`-' means stdin)."
            );
        }

        string first = ConsolePasswordReader.Read(prompt);
        if (retypePrompt is { })
        {
            string retype = ConsolePasswordReader.Read(retypePrompt);
            if (first != retype)
            {
                throw Utils.Error("Passphrases do not match.");
            }
        }

        return first;
    }
}
