using System;

namespace Libplanet.Analyzers.Tests.Helpers
{
    /// <summary>
    /// Location where the diagnostic appears, as determined by path, line number,
    /// and column number.
    /// </summary>
    public struct DiagnosticResultLocation
    {
        public DiagnosticResultLocation(string path, int line, int column)
        {
            if (line < -1)
            {
                throw new ArgumentOutOfRangeException(nameof(line), "Line must be >= -1.");
            }

            if (column < -1)
            {
                throw new ArgumentOutOfRangeException(nameof(column), "Column must be >= -1.");
            }

            this.Path = path;
            this.Line = line;
            this.Column = column;
        }

        public DiagnosticResultLocation(int line, int column)
            : this("Test0.cs", line, column)
        {
        }

        public string Path { get; }

        public int Line { get; }

        public int Column { get; }
    }
}
