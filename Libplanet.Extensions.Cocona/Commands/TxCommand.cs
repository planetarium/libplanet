namespace Libplanet.Extensions.Cocona.Commands;

using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using global::Cocona;
using global::Cocona.Help;
using Libplanet.Action;
using Libplanet.Tx;

public class TxCommand
{
    [Command(Description = "Analyze the given signed or unsigned transaction.")]
    public int Analyze(
        [Argument(
            Description = "The file path of the transaction to analyze.  If " +
                "a hyphen (-) is given it reads from the standard input (if you want to read " +
                "just a file named \"-\", use \"./-\" instead)."
        )]
        string file,
        [Option(
            'u',
            Description = "Analyze an unsigned transaction.  This option is " +
                "mutually exclusive with -i/--ignore-signature."
        )]
        bool unsigned = false,
        [Option(
            'i',
            Description = "Terminate the program with a zero exit code (success) even if " +
                "the signature is invalid.  However, it still prints the error message to " +
                "the standard error, and the exit code is still non-zero if the transaction " +
                "is invalid in other ways.  This option is mutually exclusive with " +
                "-u/--unsigned."
        )]
        bool ignoreSignature = false
    )
    {
        if (unsigned && ignoreSignature)
        {
            throw new CommandExitedException(
                "The -u/--unsigned and -i/--ignore-signature options are mutually exclusive.",
                -1
            );
        }

        byte[] bytes;
        string sourceName;
        if (file == "-")
        {
            sourceName = "stdin";
            using var stdin = Console.OpenStandardInput();
            using var buffer = new MemoryStream();
            stdin.CopyTo(buffer);
            bytes = buffer.GetBuffer();
            Array.Resize(ref bytes, (int)buffer.Length);
        }
        else
        {
            sourceName = $"file {file}";
            try
            {
                bytes = File.ReadAllBytes(file);
            }
            catch (Exception)
            {
                throw new CommandExitedException(
                    $"Failed to read the file {file}; it may not exist nor be readable.",
                    -1
                );
            }
        }

        Transaction<NullAction> tx;
        try
        {
            tx = Transaction<NullAction>.Deserialize(bytes, validate: false);
        }
        catch (Exception e)
        {
            throw new CommandExitedException(
                $"Failed to deserialize the {sourceName}: {e}",
                -1
            );
        }

        if (!unsigned && !tx.Signature.Any())
        {
            throw new CommandExitedException(
                "The transaction is unsigned.  If you want to analyze it anyway, " +
                    "use the -u/--unsigned option.",
                -1
            );
        }
        else if (unsigned && tx.Signature.Any())
        {
            throw new CommandExitedException(
                "The transaction is signed, but the -u/--unsigned option is given.",
                -1
            );
        }

        bool invalid = false;
        if (!unsigned)
        {
            try
            {
                tx.Validate();
            }
            catch (Exception e)
            {
                invalid = true;
                Console.Error.WriteLine(
                    "The signature from the transaction {0} is invalid: {1}",
                    sourceName,
                    e
                );
            }

            if (invalid)
            {
                invalid = !ignoreSignature;
            }
            else
            {
                Console.Error.WriteLine(
                    "The signature from the transaction {0} is valid.",
                    sourceName
                );
            }
        }

        var writerOptions = new JsonWriterOptions { Indented = true };
        using var stdout = Console.OpenStandardOutput();
        using var writer = new Utf8JsonWriter(stdout, writerOptions);

        var serializerOptions = new JsonSerializerOptions
        {
            AllowTrailingCommas = false,
            DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            IgnoreReadOnlyProperties = false,
        };
        JsonSerializer.Serialize(writer, tx, serializerOptions);
        writer.Flush();
        Console.WriteLine();
        return invalid ? -1 : 0;
    }

    [Command(Description = "Show this help message.")]
    public void Help([FromService] ICoconaHelpMessageBuilder helpMessageBuilder)
    {
        Console.WriteLine(helpMessageBuilder.BuildAndRenderForCurrentContext());
    }
}
