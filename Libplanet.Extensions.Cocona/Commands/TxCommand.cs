using System;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text.Json;
using Bencodex;
using Cocona;
using Cocona.Help;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Extensions.Cocona.Commands
{
    public class TxCommand
    {
        public enum TxFormat : byte
        {
            /// <summary>
            /// Print a transaction in Bencodex bytes.
            /// </summary>
            Bencodex,

            /// <summary>
            /// Print a transaction in Bencodex bytes in hexadecimal.
            /// </summary>
            Hex,

            /// <summary>
            /// Print a transaction in base64-encoded Bencodex bytes.
            /// </summary>
            Base64,

            /// <summary>
            /// Print a transaction in JSON.
            /// </summary>
            Json,
        }

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

            WriteTxJson(tx);
            return invalid ? -1 : 0;
        }

        [Command(Description = "Create a signed transaction.")]
        public int Create(
            [Option('k', Description = "A key UUID to sign.")]
            Guid keyId,
            PassphraseParameters passphrase,
            [Option('n', Description = "The nonce of the transaction, which is " +
                "the number of previous transactions made by the same account.")]
            [Range(
                typeof(long),
                "0",
                "9223372036854775807",
                ConvertValueInInvariantCulture = true)]
            long nonce = 0L,
            [Option('g', Description = "The hash of the genesis block.")]
            BlockHash? genesisHash = null,
            [Option('t', Description = "The timestamp of the transaction.  If not given, " +
                "the current time is used.")]
            DateTimeOffset? timestamp = null,
            [Option('f', Description = "The format of the output transaction.")]
            TxFormat format = TxFormat.Bencodex
        )
        {
            if (genesisHash is null)
            {
                Console.Error.WriteLine("Warning: The -g/--genesis-block is not given.  " +
                    "You probably don't intend it unless you are actually creating " +
                    "a transaction for the genesis block.");
            }

            PrivateKey privKey = new KeyCommand().UnprotectKey(keyId, passphrase);
            System.Collections.Generic.IEnumerable<NullAction> customActions =
                Enumerable.Empty<NullAction>();
            Transaction<NullAction> tx = Transaction<NullAction>.Create(
                nonce,
                privKey,
                genesisHash,
                customActions,
                timestamp: timestamp
            );
            Bencodex.Types.Dictionary serialized = tx.ToBencodex(sign: true);
            if (format == TxFormat.Json)
            {
                WriteTxJson(tx);
                return 0;
            }

            var codec = new Codec();
            byte[] encoded = codec.Encode(serialized);
            switch (format)
            {
                case TxFormat.Bencodex:
                    Stream stdout = Console.OpenStandardOutput();
                    stdout.Write(encoded, 0, encoded.Length);
                    break;

                case TxFormat.Hex:
                    Console.WriteLine(ByteUtil.Hex(encoded));
                    break;

                case TxFormat.Base64:
                    Console.WriteLine(Convert.ToBase64String(encoded));
                    break;

                default:
                    Console.Error.WriteLine(
                        "Unexpected format: {0}; please report this as a bug.",
                        Enum.GetName(typeof(TxFormat), format) ??
                            ((byte)format).ToString(CultureInfo.InvariantCulture)
                    );
                    return 1;
            }

            return 0;
        }

        [Command(Description = "Show this help message.")]
        public void Help([FromService] ICoconaHelpMessageBuilder helpMessageBuilder)
        {
            Console.WriteLine(helpMessageBuilder.BuildAndRenderForCurrentContext());
        }

        private static void WriteTxJson(Transaction<NullAction> tx)
        {
            var writerOptions = new JsonWriterOptions { Indented = true };
            Stream stdout = Console.OpenStandardOutput();
            var writer = new Utf8JsonWriter(stdout, writerOptions);
            var serializerOptions = new JsonSerializerOptions
            {
                AllowTrailingCommas = false,
                DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                IgnoreReadOnlyProperties = false,
            };
            JsonSerializer.Serialize(writer, tx, serializerOptions);
            writer.Flush();
            stdout.Write(Console.OutputEncoding.GetBytes(Environment.NewLine));
            stdout.Flush();
        }
    }
}
