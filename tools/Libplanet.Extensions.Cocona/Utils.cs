using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex.Types;
using global::Cocona;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Common.JsonConverters;
using Libplanet.Store;

namespace Libplanet.Extensions.Cocona;

public static class Utils
{
    public static readonly string DateTimeOffsetFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

    public static CommandExitedException Error(string message, int exitCode = 128)
    {
        Console.Error.WriteLine("Error: {0}", message);
        Console.Error.Flush();
        return new CommandExitedException(exitCode);
    }

    public static void
        PrintTable<T1>(ValueTuple<string> header, IEnumerable<ValueTuple<T1>> rows)
        where T1 : notnull
    {
        PrintTable(
            new object[]
            {
                header.Item1,
            },
            rows.Select(row => new object[]
            {
                row.Item1,
            }));
    }

    public static void
        PrintTable<T1, T2>((string, string) header, IEnumerable<(T1, T2)> rows)
        where T1 : notnull
        where T2 : notnull
    {
        PrintTable(
            new object[]
            {
                header.Item1,
                header.Item2,
            },
            rows.Select(row => new object[]
            {
                row.Item1,
                row.Item2,
            }));
    }

    public static void
        PrintTable<T1, T2, T3>(
            (string, string, string) header,
            IEnumerable<(T1, T2, T3)> rows)
        where T1 : notnull
        where T2 : notnull
        where T3 : notnull
    {
        PrintTable(
            new object[]
            {
                header.Item1,
                header.Item2,
                header.Item3,
            },
            rows.Select(row => new object[]
            {
                row.Item1,
                row.Item2,
                row.Item3,
            }));
    }

    public static void
        PrintTable<T1, T2, T3, T4>(
            (string, string, string, string) header,
            IEnumerable<(T1, T2, T3, T4)> rows)
        where T1 : notnull
        where T2 : notnull
        where T3 : notnull
        where T4 : notnull
    {
        PrintTable(
            new object[]
            {
                header.Item1,
                header.Item2,
                header.Item3,
                header.Item4,
            },
            rows.Select(row => new object[]
            {
                row.Item1,
                row.Item2,
                row.Item3,
                row.Item4,
            }));
    }

    public static IStore LoadStoreFromUri(string uriString)
    {
        // TODO: Cocona supports .NET's TypeConverter protocol for instantiating objects
        // from CLI options/arguments.  We'd better to implement it for IStore, and simply
        // use IStore as the option/argument types rather than taking them as strings.
        var uri = new Uri(uriString);

        // FIXME: A workaround for MSBuild not including unused references. Find a better way
        // to handle this. See: https://github.com/planetarium/libplanet/issues/2623
#pragma warning disable CS0219
        RocksDBStore.RocksDBStore? rocksDbStore = null;
#pragma warning restore CS0219

        switch (uri.Scheme)
        {
            case "default":
            case "rocksdb":
                Console.Error.WriteLine(
                    "Warning: The scheme {0}:// for the store URI is deprecated.  " +
                    "Use {0}+file:// instead.",
                    uri.Scheme
                );
                Console.Error.Flush();
                uri = new Uri($"{uri.Scheme}+file{uri.ToString().Substring(7)}");
                break;

            case "":
            case null:
                const string? exceptionMessage = "A store URI must have a scheme, " +
                                                 "e.g., default+file://, rocksdb+file://.";
                throw new ArgumentException(exceptionMessage, nameof(uriString));
        }

        if (StoreLoaderAttribute.LoadStore(uri) is { } pair)
        {
            pair.StateStore.Dispose();
            return pair.Store;
        }

        (string UriScheme, Type DeclaringType)[] loaders =
            StoreLoaderAttribute.ListStoreLoaders().ToArray();
        int longestSchemeLength = Math.Max(
            "URI SCHEME".Length,
            loaders.Max(loader => loader.UriScheme.Length + 1)
        );
        string loaderTable = string.Join(
            "\n",
            loaders.Select(pair =>
                $"  {(pair.UriScheme + ":").PadRight(longestSchemeLength)}" +
                $"  {pair.DeclaringType.Name}")
        );

        throw new ArgumentException(
            $"The store URI scheme {uri.Scheme}:// is not supported.  See also " +
            $"the list of supported store URI schemes:\n\n" +
            $"  {"URI SCHEME".PadRight(longestSchemeLength)}  PROVIDED BY\n{loaderTable}\n",
            nameof(uriString)
        );
    }

    public static string SerializeHumanReadable<T>(T target) =>
        JsonSerializer.Serialize(
            target,
            new JsonSerializerOptions
            {
                WriteIndented = true,
                Converters =
                {
                    new ByteArrayJsonConverter(),
                    new DateTimeOffsetJsonConverter(),
                },
            }
        );

    public static T? DeserializeHumanReadable<T>(string target)
        where T : notnull
    =>
        JsonSerializer.Deserialize<T>(
            target, new JsonSerializerOptions
            {
                Converters =
                {
                    new ByteArrayJsonConverter(),
                    new DateTimeOffsetJsonConverter(),
                },
            }
        );

    private static void PrintTable(object[] header, IEnumerable<object[]> rows)
    {
        IEnumerable<(int, string)> RowToStrings(object[] row)
        {
            return Enumerable.Range(0, row.Length)
                .Select(i => (i, row[i]?.ToString()?.Normalize() ?? string.Empty));
        }

        // Calculates the column lengths:
        object[][] rowsArray = rows.ToArray();
        int[] columnLengths = RowToStrings(header).Select(pair => pair.Item2.Length).ToArray();
        foreach (object[] row in rowsArray)
        {
            foreach ((int i, string col) in RowToStrings(row))
            {
                int length = col.Length;
                if (columnLengths[i] < length)
                {
                    columnLengths[i] = length;
                }
            }
        }

        // Prints column names (into /dev/stderr):
        foreach ((int i, string col) in RowToStrings(header))
        {
            int length = columnLengths[i];
            Console.Error.Write(i > 0 ? $" {{0,-{length}}}" : $"{{0,-{length}}}", col);
        }

        Console.Error.WriteLine();

        // Prints horizontal lines (into /dev/stderr):
        foreach ((int i, string col) in RowToStrings(header))
        {
            Console.Error.Write(i > 0 ? " {0}" : "{0}", new string('-', columnLengths[i]));
        }

        Console.Error.WriteLine();
        Console.Error.Flush();

        // Print rows:
        foreach (object[] row in rowsArray)
        {
            foreach ((int i, string col) in RowToStrings(row))
            {
                int length = columnLengths[i];
                Console.Write(i > 0 ? $" {{0,-{length}}}" : $"{{0,-{length}}}", col);
            }

            Console.WriteLine();
        }
    }

    public class DummyAction : IAction
    {
        public DummyAction()
        {
            PlainValue = Null.Value;
        }

        /// <inheritdoc/>
        public IValue PlainValue { get; private set; }

        /// <inheritdoc/>
        public IWorld Execute(IActionContext context) =>
            context.PreviousState;

        /// <inheritdoc/>
        public void LoadPlainValue(IValue plainValue)
        {
            PlainValue = plainValue;
        }
    }

    private sealed class DateTimeOffsetJsonConverter : JsonConverter<DateTimeOffset>
    {
        public override DateTimeOffset Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options)
        {
            var jsonString = reader.GetString()
                ?? throw new JsonException("Expected a string.");
            return DateTimeOffset.ParseExact(
                jsonString,
                DateTimeOffsetFormat,
                CultureInfo.InvariantCulture
            );
        }

        public override void Write(
            Utf8JsonWriter writer,
            DateTimeOffset value,
            JsonSerializerOptions options)
        {
            writer.WriteStringValue(
                value.ToString(
                    DateTimeOffsetFormat,
                    CultureInfo.InvariantCulture
                ));
        }
    }
}
