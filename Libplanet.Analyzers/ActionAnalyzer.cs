using System.Collections.Immutable;
using System.Linq;
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
            new DiagnosticDescriptor(
                id: $"{IdPrefix}1002",
                title: "DictionariesOrSetsShouldBeOrderedToEnumerate",
                messageFormat: "Enumerating an instance of {0} is indeterministic since " +
                    "the order of {0} is unspecified; explicitly sort them before {1}.",
                category: "Determinism",
                defaultSeverity: DiagnosticSeverity.Warning,
                isEnabledByDefault: true,
                helpLinkUri: $"{HelpLinkUriPrefix}1002.md"
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
            context.RegisterOperationAction(
                LAA1002_DictionarySetEnumeration,
                OperationKind.Conversion,
                OperationKind.Loop
            );
        }

        private static void LAA1001_SystemRandom(OperationAnalysisContext context)
        {
            if (context.Operation is IObjectCreationOperation op &&
                context.Compilation.GetTypeByMetadataName("System.Random") is ITypeSymbol ts &&
                op.Type is ITypeSymbol opType &&
                SymbolEqualityComparer.Default.Equals(opType, ts))
            {
                Diagnostic diag = Diagnostic.Create(
                    Rules[$"{IdPrefix}1001"],
                    op.Syntax.GetLocation(),
                    ts.ToDisplayString(SymbolDisplayFormat.CSharpErrorMessageFormat)
                );
                context.ReportDiagnostic(diag);
            }
        }

        private static void LAA1002_DictionarySetEnumeration(OperationAnalysisContext context)
        {
            const string ns = "System.Collections";
            SymbolDisplayFormat symbolFormat = SymbolDisplayFormat.CSharpErrorMessageFormat;
            Compilation comp = context.Compilation;
            SymbolEqualityComparer comparer = SymbolEqualityComparer.Default;

            bool TypeEquals(ITypeSymbol? valType, string metadataName) => valType is ITypeSymbol a
                && comp.GetTypeByMetadataName(metadataName) is INamedTypeSymbol b
                && comparer.Equals(a, b);

            string[] dictOrSets =
            {
                $"{ns}.Generic.IDictionary`2",
                $"{ns}.Generic.IReadOnlyDictionary`2",
                $"{ns}.Immutable.IImmutableDictionary`2",
                $"{ns}.IDictionary",
                $"{ns}.Generic.ISet`1",
                $"{ns}.Immutable.IImmutableSet`1",
            };

            string[] sortedTypes =
            {
                $"{ns}.Generic.SortedDictionary`2",
                $"{ns}.Immutable.ImmutableSortedDictionary`2",
                $"{ns}.Generic.SortedSet`1",
                $"{ns}.Immutable.ImmutableSortedSet`1",
                "Bencodex.Types.Dictionary",
            };

            bool IsDictOrSet(ITypeSymbol? valType) =>
                valType is ITypeSymbol t && t.OriginalDefinition.AllInterfaces
                    .OfType<ITypeSymbol>()
                    .Select(ifce => ifce.OriginalDefinition)
                    .OfType<ITypeSymbol>()
                    .Any(i => dictOrSets.Any(dst => TypeEquals(i, dst)));

            bool IsUnordered(ITypeSymbol? valType) =>
                valType is ITypeSymbol t && IsDictOrSet(t) &&
                !sortedTypes.Any(sortedType => TypeEquals(t.OriginalDefinition, sortedType));

            switch (context.Operation)
            {
                case IConversionOperation conv:
                {
                    ITypeSymbol? endType = conv.Type;
                    if (!TypeEquals(endType?.OriginalDefinition, $"{ns}.Generic.IEnumerable`1") &&
                        !TypeEquals(endType, $"{ns}.IEnumerable"))
                    {
                        return;
                    }

                    if (conv.Parent is IArgumentOperation arg &&
                        arg.Parent is IInvocationOperation invoke &&
                        invoke.TargetMethod.IsGenericMethod &&
                        invoke.TargetMethod.OriginalDefinition is IMethodSymbol proto)
                    {
                        var method = invoke.TargetMethod.Name;
                        if (method.StartsWith("OrderBy") &&
                            TypeEquals(proto.ContainingType, "System.Linq.Enumerable") &&
                            TypeEquals(
                                proto.ReturnType.OriginalDefinition,
                                "System.Linq.IOrderedEnumerable`1"
                            ))
                        {
                            // Ignores Linq's .OrderBy()/OrderByDescending() methods.
                            return;
                        }
                        else if (method.StartsWith("To") &&
                                 (method.EndsWith("Dictionary") || method.EndsWith("Set")) &&
                                 IsDictOrSet(proto.ReturnType))
                        {
                            // Ignores .ToDictionary()/ToHashSet() etc.
                            return;
                        }
                    }

                    if (conv.Parent is IArgumentOperation arg1 &&
                        arg1.Parent is IObjectCreationOperation @new &&
                        IsDictOrSet(@new.Type))
                    {
                        // Ignores new Dictionary()/new HashSet() etc.
                        return;
                    }

                    ITypeSymbol? valType = conv.Operand?.Type;
                    if (IsUnordered(valType))
                    {
                        string func = "enumerating";
                        if (conv.Parent is IArgumentOperation argConv)
                        {
                            func = argConv.Parent switch
                            {
                                IObjectCreationOperation c =>
                                    $"passing to {c.Constructor.ToDisplayString(symbolFormat)} " +
                                    "constructor",
                                IInvocationOperation m =>
                                    $"passing to {m.TargetMethod.ToDisplayString(symbolFormat)} " +
                                    "method",
                                _ => func,
                            };
                        }

                        Diagnostic diag = Diagnostic.Create(
                            Rules[$"{IdPrefix}1002"],
                            conv.Syntax.GetLocation(),
                            valType!.ToDisplayString(symbolFormat),
                            func
                        );
                        context.ReportDiagnostic(diag);
                    }

                    break;
                }

                case IForEachLoopOperation loop:
                {
                    IOperation collection = loop.Collection;
                    ITypeSymbol? collType = collection.Type;
                    if (IsUnordered(collType))
                    {
                        Diagnostic diag = Diagnostic.Create(
                            Rules[$"{IdPrefix}1002"],
                            collection.Syntax.GetLocation(),
                            collType.ToDisplayString(symbolFormat),
                            "iterating via foreach"
                        );
                        context.ReportDiagnostic(diag);
                    }

                    break;
                }
            }
        }

        private static Diagnostic Debug(string message) =>
            Diagnostic.Create(Rules[$"{IdPrefix}9999"], null, message);
    }
}
