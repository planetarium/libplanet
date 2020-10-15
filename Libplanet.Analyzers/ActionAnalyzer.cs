using System.Collections.Immutable;
using Libplanet.Action;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Diagnostics;
using Microsoft.CodeAnalysis.Operations;

namespace Libplanet.Analyzers
{
    [DiagnosticAnalyzer(
        LanguageNames.CSharp,
        LanguageNames.FSharp,
        LanguageNames.VisualBasic
    )]
    public class ActionAnalyzer : DiagnosticAnalyzer
    {
        public const string IdPrefix = "LAA";

#pragma warning disable S1075
        public const string HelpLinkUriPrefix =
            "https://github.com/planetarium/libplanet/blob/main/Libplanet.Analyzers/rules/LAA";
#pragma warning restore S1075

#pragma warning disable SA1118
        private static readonly DiagnosticDescriptor[] Diagnostics =
        {
            new DiagnosticDescriptor(
                id: $"{IdPrefix}9999",
                title: "DebugMessageWhichShouldNotAppearToUsers",
                messageFormat: "DEBUG: {0}",
                category: "Debug",
                defaultSeverity: DiagnosticSeverity.Hidden,
                isEnabledByDefault: true
            ),
            new DiagnosticDescriptor(
                id: $"{IdPrefix}1001",
                title: "SystemRandomBreaksActionDeterminism",
                messageFormat:
                    $"The {{0}} makes an {nameof(IAction)} indeterministic; use " +
                    $"{nameof(IActionContext)}.{nameof(IActionContext.Random)} property instead.",
                category: "Determinism",
                defaultSeverity: DiagnosticSeverity.Warning,
                isEnabledByDefault: true,
                helpLinkUri: $"{HelpLinkUriPrefix}1001.md"
            ),
        };
#pragma warning restore SA1118

        public static IImmutableDictionary<string, DiagnosticDescriptor> Rules =>
            Diagnostics.ToImmutableDictionary(d => d.Id, d => d);

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics =>
            Diagnostics.ToImmutableArray();

        public override void Initialize(AnalysisContext context)
        {
            context.EnableConcurrentExecution();
            context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.Analyze);
            context.RegisterOperationAction(LAA1001_SystemRandom, OperationKind.ObjectCreation);
        }

        private static void LAA1001_SystemRandom(OperationAnalysisContext context)
        {
            if (context.Operation is IObjectCreationOperation op)
            {
                string cls = op.Type.ToDisplayString(SymbolDisplayFormat.FullyQualifiedFormat);
                if (cls.Equals("global::System.Random"))
                {
                    Diagnostic diag = Diagnostic.Create(
                        Rules[$"{IdPrefix}1001"],
                        op.Syntax.GetLocation(),
                        cls.Substring(8)
                    );
                    context.ReportDiagnostic(diag);
                }
            }
        }

        private static Diagnostic Debug(string message) =>
            Diagnostic.Create(Rules[$"{IdPrefix}9999"], null, message);
    }
}
