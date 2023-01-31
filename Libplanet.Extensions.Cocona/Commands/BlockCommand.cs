namespace Libplanet.Extensions.Cocona.Commands;

using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using Bencodex;
using global::Cocona;
using Libplanet.Action;
using Libplanet.Blocks;

public class BlockCommand
{
    [Command(Description = "Analyze the given block.")]
    public void Analyze(
        [Argument(
            Description = "The file path of the block to analyze.  If " +
                "a hyphen (-) is given it reads from the standard input (if you want to read " +
                "just a file named \"-\", use \"./-\" instead)."
        )]
        string file,
        [Option(
            'o',
            Description = "The file path to write the analysis result to.  " +
                "If a hyphen (-) is given it writes to the standard output (if you want to write " +
                "just a file named \"-\", use \"./-\" instead).  If not given, it writes to " +
                "the standard output."
        )]
        string output = "-"
    )
    {
        using Stream inputStream = file == "-"
            ? Console.OpenStandardInput()
            : File.OpenRead(file);
        string sourceName = file == "-" ? "stdin" : $"file {file}";
        Codec codec = new ();
        Block<NullAction> block;
        try
        {
            var dict = (Bencodex.Types.Dictionary)codec.Decode(inputStream);
            block = BlockMarshaler.UnmarshalBlock<NullAction>(dict);
        }
        catch (DecodingException e)
        {
            throw new CommandExitedException(
                $"The {sourceName} does not contain a valid Bencodex data: {e.Message}",
                -1
            );
        }
        catch (InvalidCastException)
        {
            throw new CommandExitedException(
                $"The {sourceName} does not contain a valid Bencodex dictionary.",
                -2
            );
        }
        catch (InvalidBlockException e)
        {
            throw new CommandExitedException(
                $"The {sourceName} does not contain a valid block: {e.Message}",
                -4
            );
        }
        catch (Exception e) when (e is IndexOutOfRangeException or KeyNotFoundException)
        {
            throw new CommandExitedException(
                $"The {sourceName} lacks some required fields.",
                -3
            );
        }

        using Stream outputStream = output == "-"
            ? Console.OpenStandardOutput()
            : File.OpenWrite(file);
        var writerOptions = new JsonWriterOptions { Indented = true };
        using (var writer = new Utf8JsonWriter(outputStream, writerOptions))
        {
            var serializerOptions = new JsonSerializerOptions
            {
                AllowTrailingCommas = false,
                DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                IgnoreReadOnlyProperties = false,
            };
            JsonSerializer.Serialize(writer, block, serializerOptions);
        }

        using var textWriter = new StreamWriter(outputStream);
        textWriter.WriteLine();
    }
}
