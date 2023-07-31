using Libplanet.Analyzers.Tests.Helpers;
using Libplanet.Analyzers.Tests.Verifiers;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Diagnostics;
using Xunit;

namespace Libplanet.Analyzers.Tests
{
    public class ActionAnalyzerTest : DiagnosticVerifier
    {
        [CSharpAnalysisFact]
        public void EmptyCode()
        {
            VerifyDiagnostic(@"
                public class Sample {
                    public static void Main() {}
                }
            ");
        }

        [CSharpAnalysisFact]
        public void LA1001_SystemRandomBreaksActionDeterminism()
        {
            var test = @"
                using System;
                using Bencodex.Types;
                using Libplanet.Action;
                using Libplanet.Action.State;
                namespace SampleGame {
                    public class SampleAction : IAction {
                        public SampleAction() {}
                        public IValue PlainValue => Null.Value;
                        public void LoadPlainValue(IValue plainValue) {}
                        public IAccount Execute(IActionContext context) {
                            new Random().Next();
                            return context.PreviousState;
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
                Locations = new[] { new DiagnosticResultLocation(12, 29) },
            };

            VerifyDiagnostic(test, expected);
        }

        [CSharpAnalysisTheory]
        [InlineData(
            false,
            null,
            "int",
            "System.Collections.Generic.HashSet<int>",
            "new HashSet<int> { 1, 2, 3 }"
        )]
        [InlineData(
            false,
            "string, int",
            "System.Collections.Generic.KeyValuePair<string, int>",
            "System.Collections.Generic.Dictionary<string, int>",
            "new Dictionary<string, int> { [\"foo\"] = 1, [\"bar\"] = 2 }"
        )]
        [InlineData(
            true,
            null,
            "int",
            "System.Collections.Generic.List<int>",
            "new List<int> { 1, 2, 3 }"
        )]
        [InlineData(true, null, "char", "char[]", "new char[] { 'a', 'b', 'c' }")]
        [InlineData(
            true,
            null,
            "int",
            "System.Collections.Generic.SortedSet<int>",
            "new SortedSet<int> { 1, 2, 3 }"
        )]
        [InlineData(
            true,
            "string, int",
            "System.Collections.Generic.KeyValuePair<string, int>",
            "System.Collections.Generic.SortedDictionary<string, int>",
            "new SortedDictionary<string, int> { [\"foo\"] = 1, [\"bar\"] = 2 }"
        )]
        [InlineData(
            true,
            "Bencodex.Types.IKey, Bencodex.Types.IValue",
            "System.Collections.Generic.KeyValuePair<Bencodex.Types.IKey, Bencodex.Types.IValue>",
            "Bencodex.Types.Dictionary",
            "Bencodex.Types.Dictionary.Empty.Add(\"foo\", 1).Add(\"bar\", 2)"
        )]
        public void LAA1002_DictionariesOrSetsShouldBeOrderedToEnumerate(
            bool pass,
            string kvTypes,
            string elemType,
            string typeName,
            string expr
        )
        {
            string dictCode = string.Empty;

            if (!(kvTypes is null))
            {
                dictCode = @"
                    // should pass:
                    v.ToDictionary(key => key, val => val);
                    v.ToImmutableDictionary();
                    var newDict = new Dict(v);
";
            }

            var test = @"
                using System;
                using System.Collections.Generic;
                using System.Collections.Immutable;
                using System.Linq;
                using System.Security.Cryptography;
                using Bencodex.Types;
                using Libplanet;
                using Libplanet.Action;
                using Libplanet.Action.State;
                namespace SampleGame {
                    public class SampleAction : IAction {
                        public SampleAction() {}
                        public IValue PlainValue => Null.Value;
                        public void LoadPlainValue(IValue plainValue) {}
                        public IAccount Execute(IActionContext context) {
                            // Following code should all fail:
                            var v = " + expr + @";
                            ConsumeEnumerable(v);
                            var a = v.ToArray();
                            var randomlySorted = new List<" + elemType + @">(v);
                            foreach (var e in v) Console.WriteLine(e.ToString());

                            // Following code should all pass:
                            ConsumeEnumerable(v.OrderBy(e => e));
                            var orderedArray = v.OrderBy(e => e).ToArray();
                            foreach (var e in v.OrderBy(e => e)) {
                                Console.WriteLine(e.ToString());
                            }
                            v.ToHashSet();
                            v.ToImmutableHashSet();
                            var newSet = new HashSet<" + elemType + @">(v);
                            " + dictCode + @"
                            return context.PreviousState;
                        }
                        public void ConsumeEnumerable(IEnumerable<" + elemType + @"> it) {}
                        public static void Main() {}
                    }
                }
            ";

            if (!(kvTypes is null))
            {
                test += @"
                    public class Dict : Dictionary<" + kvTypes + @"> {
                        public Dict(IEnumerable<" + elemType + @"> kvs) : base() {
                            foreach (var kv in kvs) {
                                Add(kv.Key, kv.Value);
                            }
                        }
                    }
                ";
            }

            if (pass)
            {
                VerifyDiagnostic(test);
                return;
            }

            string message = $"Enumerating an instance of {typeName} is indeterministic since " +
                $"the order of {typeName} is unspecified; explicitly sort them before";
            DiagnosticResult[] expected =
            {
                new DiagnosticResult
                {
                    Id = "LAA1002",
                    Message =
                        $"{message} passing to SampleGame.SampleAction.ConsumeEnumerable(" +
                        $"System.Collections.Generic.IEnumerable<{elemType}>) method.",
                    Severity = DiagnosticSeverity.Warning,
                    Locations = new[] { new DiagnosticResultLocation(19, 47) },
                },
                new DiagnosticResult
                {
                    Id = "LAA1002",
                    Message = $"{message} passing to System.Linq.Enumerable.ToArray<{elemType}>(" +
                        $"System.Collections.Generic.IEnumerable<{elemType}>) method.",
                    Severity = DiagnosticSeverity.Warning,
                    Locations = new[] { new DiagnosticResultLocation(20, 37) },
                },
                new DiagnosticResult
                {
                    Id = "LAA1002",
                    Message =
                        $"{message} passing to System.Collections.Generic.List<{elemType}>." +
                        $"List(System.Collections.Generic.IEnumerable<{elemType}>) constructor.",
                    Severity = DiagnosticSeverity.Warning,
                    Locations = new[] { new DiagnosticResultLocation(21, 61 + elemType.Length) },
                },
                new DiagnosticResult
                {
                    Id = "LAA1002",
                    Message = $"{message} iterating via foreach.",
                    Severity = DiagnosticSeverity.Warning,
                    Locations = new[] { new DiagnosticResultLocation(22, 47) },
                },
            };

            VerifyDiagnostic(test, expected);
        }

        protected override DiagnosticAnalyzer GetDiagnosticAnalyzer() =>
            new ActionAnalyzer();
    }
}
