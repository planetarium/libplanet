using Libplanet.Analyzers.Tests.Helpers;
using Libplanet.Analyzers.Tests.Verifiers;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Diagnostics;
using Xunit;

namespace Libplanet.Analyzers.Tests
{
    public class ActionAnalyzerTest : DiagnosticVerifier
    {
        [Fact]
        public void EmptyCode()
        {
            VerifyDiagnostic(@"
                public class Sample {
                    public static void Main() {}
                }
            ");
        }

        [Fact]
        public void LA1001_SystemRandomBreaksActionDeterminism()
        {
            var test = @"
                using System;
                using Bencodex.Types;
                using Libplanet.Action;
                namespace SampleGame {
                    public class SampleAction : IAction {
                        public SampleAction() {}
                        public IValue PlainValue => default(Null);
                        public void LoadPlainValue(IValue plainValue) {}
                        public IAccountStateDelta Execute(IActionContext context) {
                            new Random().Next();
                            return context.PreviousStates;
                        }
                        public static void Main() {}
                    }
                }
            ";
            var expected = new DiagnosticResult
            {
                Id = "LAA1001",
                Message = "The System.Random makes an IAction indeterministic; " +
                    "use IActionContext.Random property instead.",
                Severity = DiagnosticSeverity.Warning,
                Locations = new[] { new DiagnosticResultLocation(11, 29) },
            };

            VerifyDiagnostic(test, expected);
        }

        [Theory]
        [InlineData(
            false,
            "System.Collections.Generic.HashSet<int>",
            "new HashSet<int> { 1, 2, 3 }"
        )]
        [InlineData(
            false,
            "System.Collections.Generic.Dictionary<string, int>",
            "new Dictionary<string, int> { [\"foo\"] = 1, [\"bar\"] = 2}"
        )]
        [InlineData(
            true,
            "System.Collections.Generic.List<int>",
            "new List<int> { 1, 2, 3 }"
        )]
        [InlineData(true, "char[]", "new char[] { 'a', 'b', 'c' }")]
        public void LAA1002_DictionariesOrSetsShouldBeOrderedToEnumerate(
            bool pass,
            string typeName,
            string expr
        )
        {
            var test = @"
                using System;
                using System.Collections.Generic;
                using System.Linq;
                using System.Security.Cryptography;
                using Bencodex.Types;
                using Libplanet;
                using Libplanet.Action;
                namespace SampleGame {
                    public class SampleAction : IAction {
                        public SampleAction() {}
                        public IValue PlainValue => default(Null);
                        public void LoadPlainValue(IValue plainValue) {}
                        public IAccountStateDelta Execute(IActionContext context) {
                            var v = " + expr + @";
                            ConsumeEnumerable(v);
                            var a = v.ToArray();
                            foreach (var e in v) Console.WriteLine(e.ToString());
                            // Following code should all pass:
                            ConsumeEnumerable(v.OrderBy(e => e));
                            var orderedArray = v.OrderBy(e => e).ToArray();
                            foreach (var e in v.OrderBy(e => e)) {
                                Console.WriteLine(e.ToString());
                            }
                            return context.PreviousStates;
                        }
                        public void ConsumeEnumerable<T>(IEnumerable<T> it) {}
                        public static void Main() {}
                    }
                }
            ";

            if (pass)
            {
                VerifyDiagnostic(test);
                return;
            }

            string message = $"Enumerating an instance of {typeName} is indeterministic since " +
                $"the order of {typeName} is unspecified; explicitly sort them before " +
                "enumerating.";
            DiagnosticResult[] expected =
            {
                new DiagnosticResult
                {
                    Id = "LAA1002",
                    Message = message,
                    Severity = DiagnosticSeverity.Warning,
                    Locations = new[] { new DiagnosticResultLocation(16, 47) },
                },
                new DiagnosticResult
                {
                    Id = "LAA1002",
                    Message = message,
                    Severity = DiagnosticSeverity.Warning,
                    Locations = new[] { new DiagnosticResultLocation(17, 37) },
                },
                new DiagnosticResult
                {
                    Id = "LAA1002",
                    Message = message,
                    Severity = DiagnosticSeverity.Warning,
                    Locations = new[] { new DiagnosticResultLocation(18, 47) },
                },
            };

            VerifyDiagnostic(test, expected);
        }

        protected override DiagnosticAnalyzer GetDiagnosticAnalyzer() =>
            new ActionAnalyzer();
    }
}
