using System;
using Microsoft.CodeAnalysis;

namespace Libplanet.Analyzers.Tests.Helpers
{
    /// <summary>
    /// Struct that stores information about a <see cref="Diagnostic"/> appearing in a source.
    /// </summary>
    public struct DiagnosticResult
    {
        private DiagnosticResultLocation[] locations;

        public DiagnosticResultLocation[] Locations
        {
            get
            {
                if (this.locations == null)
                {
                    this.locations = new DiagnosticResultLocation[] { };
                }

                return this.locations;
            }

            set
            {
                this.locations = value;
            }
        }

        public DiagnosticSeverity Severity { get; set; }

        public string Id { get; set; }

        public string Message { get; set; }

        public string Path => this.Locations.Length > 0 ? this.Locations[0].Path : string.Empty;

        public int Line => this.Locations.Length > 0 ? this.Locations[0].Line : -1;

        public int Column => this.Locations.Length > 0 ? this.Locations[0].Column : -1;
    }
}
