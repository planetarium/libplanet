using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using Cocona;

namespace Libplanet.Tools
{
    public static class Utils
    {
        public static CommandExitedException Error(string message, int exitCode = 128)
        {
            Console.Error.WriteLine("Error: {0}", message);
            Console.Error.Flush();
            return new CommandExitedException(exitCode);
        }

        public static void PrintTable<T>(T header, IEnumerable<T> rows)
            where T : ITuple
        {
            IEnumerable<(int, string)> RowToStrings(T tuple)
            {
                return Enumerable.Range(0, tuple.Length)
                    .Select(i => (i, tuple[i]?.ToString()?.Normalize() ?? string.Empty));
            }

            // Calculates the column lengths:
            T[] rowsArray = rows.ToArray();
            int[] columnLengths = RowToStrings(header).Select(pair => pair.Item2.Length).ToArray();
            foreach (T row in rowsArray)
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
            foreach (T row in rowsArray)
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
