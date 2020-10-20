using System.Collections.Generic;
using System.Linq;
using System.Text;
using Libplanet.Analyzers.Tests.Helpers;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Diagnostics;
using Xunit;

namespace Libplanet.Analyzers.Tests.Verifiers
{
    /// <summary>
    /// Superclass of all unit tests for <see cref="DiagnosticAnalyzers"/>.
    /// </summary>
    public abstract partial class DiagnosticVerifier
    {
        /// <summary>
        /// Gets the analyzer being tested, to be implemented in non-abstract class.
        /// </summary>
        protected abstract DiagnosticAnalyzer GetDiagnosticAnalyzer();

        /// <summary>
        /// Called to test a <see cref="DiagnosticAnalyzer"/> when applied on the inputted strings
        /// as a source.
        /// Note: input a <see cref="DiagnosticResult"/> for each <see cref="Diagnostic"/> expected.
        /// </summary>
        /// <param name="source">A class in the form of a string to run the analyzer on.</param>
        /// <param name="expected">Diagnostic results that should appear after the analyzer is run
        /// on the source.</param>
        protected void VerifyDiagnostic(string source, params DiagnosticResult[] expected) =>
            VerifyDiagnostics(new string[] { source }, GetDiagnosticAnalyzer(), expected);

        /// <summary>
        /// Called to test a <see cref="DiagnosticAnalyzer"/> when applied on the inputted strings
        /// as a source.
        /// Note: input a <see cref="DiagnosticResult"/> for each <see cref="Diagnostic"/> expected.
        /// </summary>
        /// <param name="sources">An array of strings to create source documents from to run
        /// the analyzers on.</param>
        /// <param name="expected">Diagnostic results that should appear after the analyzer is run
        /// on the sources.</param>
        protected void VerifyDiagnostic(string[] sources, params DiagnosticResult[] expected) =>
            VerifyDiagnostics(sources, GetDiagnosticAnalyzer(), expected);

        /// <summary>
        /// Checks each of the actual <see cref="Diagnostics"/> found and compares them with
        /// the corresponding <see cref="DiagnosticResult"/> in the array of expected results.
        /// <see cref="Diagnostic"/>s are considered equal only if
        /// the <see cref="DiagnosticResultLocation"/>, <see cref="Diagnostic.Id"/>,
        /// <see cref="Diagnostic.Severity"/>, and <see cref="Diagnostic.Message"/> of
        /// the <see cref="DiagnosticResult"/> match the actual diagnostic.
        /// </summary>
        /// <param name="actualResults">The diagnostics found by the compiler after running
        /// the analyzer on the source code.</param>
        /// <param name="analyzer">The analyzer that was being run on the sources.</param>
        /// <param name="expectedResults">Diagnostic results that should have appeared in the code.
        /// </param>
        private static void VerifyDiagnosticResults(
            IEnumerable<Diagnostic> actualResults,
            DiagnosticAnalyzer analyzer,
            params DiagnosticResult[] expectedResults
        )
        {
            int expectedCount = expectedResults.Count();
            int actualCount = actualResults.Count();

            string diagnosticsOutput = actualResults.Any()
                ? FormatDiagnostics(analyzer, actualResults.ToArray())
                : "    NONE.";
            string msg =
                $"Mismatch between number of diagnostics returned, expected \"{expectedCount}\" " +
                $"actual \"{actualCount}\"\r\n\r\nDiagnostics:\r\n{diagnosticsOutput}\r\n";
            Assert.True(expectedCount == actualCount, msg);

            for (int i = 0; i < expectedResults.Length; i++)
            {
                Diagnostic actual = actualResults.ElementAt(i);
                DiagnosticResult expected = expectedResults[i];

                if (expected.Line == -1 && expected.Column == -1)
                {
                    msg =
                        "Expected:\nA project diagnostic with no location\n" +
                        $"Actual:\n{FormatDiagnostics(analyzer, actual)}";
                    Assert.True(actual.Location == Location.None, msg);
                }
                else
                {
                    VerifyDiagnosticLocation(
                        analyzer,
                        actual,
                        actual.Location,
                        expected.Locations.First()
                    );
                    Location[] additionalLocations = actual.AdditionalLocations.ToArray();

                    msg =
                        $"Expected {expected.Locations.Length - 1} additional locations but got " +
                        $"{additionalLocations.Length} for Diagnostic:" +
                        $"\r\n    {FormatDiagnostics(analyzer, actual)}\r\n";
                    Assert.True(
                        additionalLocations.Length == expected.Locations.Length - 1,
                        msg
                    );

                    for (int j = 0; j < additionalLocations.Length; ++j)
                    {
                        VerifyDiagnosticLocation(
                            analyzer,
                            actual,
                            additionalLocations[j],
                            expected.Locations[j + 1]
                        );
                    }
                }

                msg =
                    $"Expected diagnostic id to be \"{expected.Id}\" was \"{actual.Id}\"\r\n\r\n" +
                    $"Diagnostic:\r\n    {FormatDiagnostics(analyzer, actual)}\r\n";
                Assert.True(actual.Id == expected.Id);

                msg =
                    $"Expected diagnostic severity to be \"{expected.Severity}\" was " +
                    $"\"{actual.Severity}\"\r\n\r\nDiagnostic:" +
                    $"\r\n    {FormatDiagnostics(analyzer, actual)}\r\n";
                Assert.True(actual.Severity == expected.Severity);

                msg =
                    $"Expected diagnostic message to be \"{expected.Message}\" was " +
                    $"\"{actual.GetMessage()}\"\r\n\r\nDiagnostic:" +
                    $"\r\n    {FormatDiagnostics(analyzer, actual)}\r\n";
                Assert.True(actual.GetMessage() == expected.Message, msg);
            }
        }

        /// <summary>
        /// Helper method to <see cref="VerifyDiagnosticResults"/> that checks the location of
        /// a diagnostic and compares it with the location in the expected
        /// <see cref="DiagnosticResult"/>.
        /// </summary>
        /// <param name="analyzer">The analyzer that was being run on the sources.</param>
        /// <param name="diagnostic">The diagnostic that was found in the code.</param>
        /// <param name="actual">The location of the diagnostic found in the code.</param>
        /// <param name="expected">The <see cref="DiagnosticResultLocation"/> that should have been
        /// found.</param>
        private static void VerifyDiagnosticLocation(
            DiagnosticAnalyzer analyzer,
            Diagnostic diagnostic,
            Location actual,
            DiagnosticResultLocation expected
        )
        {
            var actualSpan = actual.GetLineSpan();

            string msg =
                $"Expected diagnostic to be in file \"{expected.Path}\" was actually in file" +
                $" \"{actualSpan.Path}\"\r\n\r\nDiagnostic:" +
                $"\r\n    {FormatDiagnostics(analyzer, diagnostic)}\r\n";
            Assert.True(
                actualSpan.Path == expected.Path || (
                    actualSpan.Path != null &&
                    actualSpan.Path.Contains($"{DefaultFilePathPrefix}0.") &&
                    expected.Path.Contains($"{DefaultFilePathPrefix}.")
                ),
                msg
            );

            var actualLinePosition = actualSpan.StartLinePosition;

            // Only check line position if there is an actual line in the real diagnostic.
            if (actualLinePosition.Line > 0)
            {
                msg =
                    $"Expected diagnostic to be on line \"{expected.Line}\" was actually on line" +
                    $" \"{actualLinePosition.Line + 1}\"\r\n\r\nDiagnostic:" +
                    $"\r\n    {FormatDiagnostics(analyzer, diagnostic)}\r\n";
                Assert.True(actualLinePosition.Line + 1 == expected.Line, msg);
            }

            // Only check column position if there is an actual column position
            // in the real diagnostic.
            if (actualLinePosition.Character > 0)
            {
                msg =
                    $"Expected diagnostic to start at column \"{expected.Column}\" was actually " +
                    $"at column \"{actualLinePosition.Character + 1}\"\r\n\r\nDiagnostic:" +
                    $"\r\n    {FormatDiagnostics(analyzer, diagnostic)}\r\n";
                Assert.True(expected.Column == actualLinePosition.Character + 1, msg);
            }
        }

        /// <summary>
        /// Helper method to format a <see cref="Diagnostic"/> into an easily readable string.
        /// </summary>
        /// <param name="analyzer">The analyzer that this verifier tests.</param>
        /// <param name="diagnostics">The diagnostics to be formatted.</param>
        /// <returns>The diagnostics formatted as a string.</returns>
        private static string FormatDiagnostics(
            DiagnosticAnalyzer analyzer,
            params Diagnostic[] diagnostics
        )
        {
            var builder = new StringBuilder();
            for (int i = 0; i < diagnostics.Length; ++i)
            {
                builder.AppendLine("// " + diagnostics[i].ToString());

                var analyzerType = analyzer.GetType();
                var rules = analyzer.SupportedDiagnostics;

                foreach (var rule in rules)
                {
                    if (rule != null && rule.Id == diagnostics[i].Id)
                    {
                        var location = diagnostics[i].Location;
                        if (location == Location.None)
                        {
                            builder.AppendFormat(
                                "GetGlobalResult({0}.{1})",
                                analyzerType.Name,
                                rule.Id
                            );
                        }
                        else
                        {
                            var msg =
                                "Test base does not currently handle diagnostics in metadata " +
                                $"locations. Diagnostic in metadata: {diagnostics[i]}\r\n";
                            Assert.True(location.IsInSource, msg);

                            string resultMethodName =
                                diagnostics[i].Location.SourceTree.FilePath.EndsWith(".cs")
                                    ? "GetCSharpResultAt"
                                    : "GetBasicResultAt";
                            var linePosition =
                                diagnostics[i].Location.GetLineSpan().StartLinePosition;

                            builder.AppendFormat(
                                "{0}({1}, {2}, {3}.{4})",
                                resultMethodName,
                                linePosition.Line + 1,
                                linePosition.Character + 1,
                                analyzerType.Name,
                                rule.Id
                            );
                        }

                        if (i != diagnostics.Length - 1)
                        {
                            builder.Append(',');
                        }

                        builder.AppendLine();
                        break;
                    }
                }
            }

            return builder.ToString();
        }

        /// <summary>
        /// General method that gets a collection of actual diagnostics found in the source after
        /// the analyzer is run, then verifies each of them.
        /// </summary>
        /// <param name="sources">An array of strings to create source documents from to run
        /// the analyzers on.</param>
        /// <param name="analyzer">The analyzer to be run on the source code.</param>
        /// <param name="expected"><see cref="DiagnosticResult"/>s that should appear after
        /// the analyzer is run on the sources.</param>
        private void VerifyDiagnostics(
            string[] sources,
            DiagnosticAnalyzer analyzer,
            params DiagnosticResult[] expected
        )
        {
            var diagnostics = GetSortedDiagnostics(sources, LanguageNames.CSharp, analyzer);
            VerifyDiagnosticResults(diagnostics, analyzer, expected);
        }
    }
}
