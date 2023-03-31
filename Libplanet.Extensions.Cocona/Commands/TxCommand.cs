namespace Libplanet.Extensions.Cocona.Commands;

using System;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Text.Json;
using Bencodex;
using Bencodex.Types;
using global::Cocona;
using global::Cocona.Help;
using Libplanet.Action;
using Libplanet.Tx;

public class TxCommand
{
    private static readonly Codec Codec = new Codec();

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

        IValue rawTx;
        string sourceName = string.Empty;
        try
        {
            if (file == "-")
            {
                sourceName = "stdin";
                using var stdin = Console.OpenStandardInput();
                rawTx = Codec.Decode(stdin);
            }
            else
            {
                sourceName = $"file {file}";
                try
                {
                    using FileStream fileStream = File.OpenRead(file);
                    rawTx = Codec.Decode(fileStream);
                }
                catch (IOException)
                {
                    throw new CommandExitedException(
                        $"Failed to read the file {file}; it may not exist nor be readable.",
                        -1
                    );
                }
            }
        }
        catch (DecodingException e)
        {
            throw new CommandExitedException(
                $"Failed to decode the {sourceName} as a Bencodex tree: {e}",
                -1
            );
        }

        if (rawTx is not Bencodex.Types.Dictionary txDict)
        {
            throw new CommandExitedException(
                $"The {sourceName} is not a Bencodex dictionary.",
                -1
            );
        }

        UnsignedTx unsignedTx;
        try
        {
            unsignedTx = TxMarshaler.UnmarshalUnsignedTx<NullAction>(txDict);
        }
        catch (Exception e)
        {
            throw new CommandExitedException(
                $"Failed to deserialize the {sourceName}: {e}",
                -1
            );
        }

        ImmutableArray<byte>? signature = TxMarshaler.UnmarshalTransactionSignature(txDict);
        if (unsigned && signature is not null)
        {
            throw new CommandExitedException(
                "The transaction is signed, but the -u/--unsigned option is given.",
                -1
            );
        }

        bool invalid = false;
        Transaction<NullAction>? tx = null;
        if (!unsigned)
        {
            if (signature is not { } sig)
            {
                throw new CommandExitedException(
                    "The transaction is unsigned.  If you want to analyze it anyway, " +
                        "use the -u/--unsigned option.",
                    -1
                );
            }

            try
            {
                tx = new Transaction<NullAction>(unsignedTx, sig);
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

        // Note that JsonSerializer.Serialize() is a generic method, so it depends on
        // compile-time types.  In other words, we cannot replace the below with a single line
        // with a ternary operator, as it lets the compiler infer the type parameter of
        // JsonSerializer.Serialize() to be IUnsignedTx even when the tx is not null:
        if (tx is { } txObj)
        {
            JsonSerializer.Serialize(writer, txObj, serializerOptions);
        }
        else
        {
            JsonSerializer.Serialize(writer, unsignedTx, serializerOptions);
        }

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
