namespace Libplanet.Extensions.Cocona.Commands;

using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using Bencodex;
using global::Cocona;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;

public class BlockCommand
{
    public enum OutputFormat
    {
        Bencodex,
        Json,
    }

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
            : File.Open(file, FileMode.Create);
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

    [Command(Description = "Generate a genesis block.")]
    public void GenerateGenesis(
        [Argument(Name = "KEY-ID", Description = "A private key to use for signing.")]
        Guid keyId,
        PassphraseParameters passphrase,
        [Argument(Name = "FILE", Description = "File to write the genesis block to.  " +
            "Use `-` for stdout (you can still refer to a file named \"-\" by \"./-\").")]
        string file,
        BlockPolicyParams blockPolicyParams,
        [Option('f', Description = "Output format.")]
        OutputFormat format = OutputFormat.Bencodex
    )
    {
        // FIXME: Declare a ICommandParameterSet type taking key ID and keystore path instead:
        PrivateKey key = new KeyCommand().UnprotectKey(keyId, passphrase, ignoreStdin: true);
        Block<NullAction> genesis = BlockChain<NullAction>.MakeGenesisBlock(
            privateKey: key,
            blockAction: blockPolicyParams.GetBlockAction(),
            nativeTokenPredicate: blockPolicyParams is { } p && p.GetNativeTokens() is { } tokens
                ? tokens.Contains
                : null
        );
        using Stream stream = file == "-"
            ? Console.OpenStandardOutput()
            : File.Open(file, FileMode.Create);
        switch (format)
        {
            // FIXME: Configure JsonConverter for Block<T>:
            case OutputFormat.Json:
                var writerOptions = new JsonWriterOptions { Indented = true };
                using (var writer = new Utf8JsonWriter(stream, writerOptions))
                {
                    var serializerOptions = new JsonSerializerOptions
                    {
                        AllowTrailingCommas = false,
                        DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                        IgnoreReadOnlyProperties = false,
                    };
                    JsonSerializer.Serialize(writer, genesis, serializerOptions);
                }

                using (var textWriter = new StreamWriter(stream))
                {
                    textWriter.WriteLine();
                }

                break;

            default:
                Codec codec = new ();
                codec.Encode(genesis.MarshalBlock(), stream);
                break;
        }
    }
}
