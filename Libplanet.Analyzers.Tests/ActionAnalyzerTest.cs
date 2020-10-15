using System;
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
            VerifyDiagnostic(" ");
        }

        [Fact]
        public void LA1001_SystemRandomBreaksActionDeterminism()
        {
            var test = @"
                using System;
                using Bencodex;
                using Libplanet.Action;
                namespace SampleGame {
                    public class SampleAction : IAction {
                        IValue PlainValue => default(Null);
                        public void LoadPlainValue(IValue plainValue) { }
                        public IAccountStateDelta Execute(IActionContext context) {
                            new Random().Next();
                            return context.PreviousStates;
                        }
                    }
                }
            ";
            var expected = new DiagnosticResult
            {
                Id = "LAA1001",
                Message = "The System.Random makes an IAction indeterministic; " +
                    "use IActionContext.Random property instead.",
                Severity = DiagnosticSeverity.Warning,
                Locations = new[] { new DiagnosticResultLocation(10, 29) },
            };

            VerifyDiagnostic(test, expected);
        }

        protected override DiagnosticAnalyzer GetDiagnosticAnalyzer() =>
            new ActionAnalyzer();
    }
}
