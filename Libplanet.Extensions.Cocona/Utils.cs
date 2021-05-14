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

namespace Libplanet.Extensions.Cocona
{
    public static class Utils
    {
        public static CommandExitedException Error(string message, int exitCode = 128)
        {
            Console.Error.WriteLine("Error: {0}", message);
            Console.Error.Flush();
            return new CommandExitedException(exitCode);
        }

        public static void
            PrintTable<T1>(ValueTuple<T1> header, IEnumerable<ValueTuple<T1>> rows)
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
            PrintTable<T1, T2>((T1, T2) header, IEnumerable<(T1, T2)> rows)
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
                (T1, T2, T3) header,
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

        public static string SerializeHumanReadable<T>(T target) =>
            JsonSerializer.Serialize(
                target,
                new JsonSerializerOptions
                {
                    WriteIndented = true,
                    Converters =
                    {
                        new ByteArrayStringJsonConverter(),
                        new DateTimeOffsetJsonConverter(),
                    },
                }
            );

        public static T DeSerializeHumanReadable<T>(string target) => JsonSerializer.Deserialize<T>(
            target, new JsonSerializerOptions
            {
                Converters =
                {
                    new ByteArrayStringJsonConverter(),
                    new DateTimeOffsetJsonConverter(),
                },
            });

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
            public IAccountStateDelta Execute(IActionContext context) =>
                context.PreviousStates;

            /// <inheritdoc/>
            public void LoadPlainValue(IValue plainValue)
            {
                PlainValue = plainValue;
            }
        }

        private class ByteArrayStringJsonConverter : JsonConverter<ImmutableArray<byte>>
        {
            public override ImmutableArray<byte> Read(
                ref Utf8JsonReader reader,
                Type typeToConvert,
                JsonSerializerOptions options)
            {
                var hexString = reader.GetString();
                return ImmutableArray.Create(ByteUtil.ParseHex(hexString));
            }

            public override void Write(
                Utf8JsonWriter writer, ImmutableArray<byte> value, JsonSerializerOptions options)
            {
                writer.WriteStringValue(ByteUtil.Hex(value));
            }
        }

        private class DateTimeOffsetJsonConverter : JsonConverter<DateTimeOffset>
        {
            public override DateTimeOffset Read(
                ref Utf8JsonReader reader,
                Type typeToConvert,
                JsonSerializerOptions options)
            {
                var jsonString = reader.GetString();
                return DateTimeOffset.Parse(jsonString, CultureInfo.InvariantCulture);
            }

            public override void Write(
                Utf8JsonWriter writer,
                DateTimeOffset value,
                JsonSerializerOptions options)
            {
                writer.WriteStringValue(
                    value.ToString(
                        "yyyy-MM-ddTHH:mm:ss.ffffffZ",
                        CultureInfo.InvariantCulture
                    ));
            }
        }
    }
}
