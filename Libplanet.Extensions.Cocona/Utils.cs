using System;
using System.Collections.Generic;
using System.Linq;
using Cocona;

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
    }
}
