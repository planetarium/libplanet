using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Reflection;
using Bencodex.Types;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Diagnostics;
using Microsoft.CodeAnalysis.Emit;
using Microsoft.CodeAnalysis.Text;

namespace Libplanet.Analyzers.Tests.Verifiers
{
    /// <summary>
    /// Class for turning strings into documents and getting the diagnostics on them.
    /// All methods are static.
    /// </summary>
    public abstract partial class DiagnosticVerifier
    {
        internal const string DefaultFilePathPrefix = "Test";
        internal const string CSharpDefaultFileExt = "cs";
        internal const string VisualBasicDefaultExt = "vb";
        internal const string TestProjectName = "TestProject";

        /// <summary>
        /// Given an analyzer and a document to apply it to, run the analyzer and gather an array of
        /// diagnostics found in it.
        /// The returned diagnostics are then ordered by location in the source document.
        /// </summary>
        /// <param name="analyzer">The analyzer to run on the documents.</param>
        /// <param name="documents">The documents that the analyzer will be run on.</param>
        /// <returns>Diagnostics that surfaced in the source code, sorted by their location.
        /// </returns>
        protected static Diagnostic[] GetSortedDiagnosticsFromDocuments(
            DiagnosticAnalyzer analyzer,
            Document[] documents
        )
        {
            var projects = new HashSet<Project>();
            foreach (var document in documents)
            {
                projects.Add(document.Project);
            }

            var diagnostics = new List<Diagnostic>();
            foreach (var project in projects)
            {
                Compilation result = project.GetCompilationAsync().Result;
                EmitResult emitted = result.Emit(new MemoryStream());
                if (!emitted.Success)
                {
                    throw new InvalidOperationException(
                        "Failed to compile:\n" + string.Join(
                            "\n",
                            emitted.Diagnostics.Select(d => $"\t{d.ToString()}")
                        )
                    );
                }

                var compilationWithAnalyzers = result.WithAnalyzers(
                    ImmutableArray.Create(analyzer));
                var diags = compilationWithAnalyzers.GetAnalyzerDiagnosticsAsync().Result;
                foreach (var diag in diags)
                {
                    if (diag.Location == Location.None || diag.Location.IsInMetadata)
                    {
                        diagnostics.Add(diag);
                    }
                    else
                    {
                        for (int i = 0; i < documents.Length; i++)
                        {
                            var document = documents[i];
                            var tree = document.GetSyntaxTreeAsync().Result;
                            if (tree == diag.Location.SourceTree)
                            {
                                diagnostics.Add(diag);
                            }
                        }
                    }
                }
            }

            var results = SortDiagnostics(diagnostics);
            diagnostics.Clear();
            return results;
        }

        /// <summary>
        /// Create a document from a string through creating a project that contains it.
        /// </summary>
        /// <param name="source">Classes in the form of a string.</param>
        /// <param name="language">The language the source code is in.</param>
        /// <returns>A document created from the source string.</returns>
        protected static Document CreateDocument(
            string source,
            string language = LanguageNames.CSharp
        ) =>
            CreateProject(new[] { source }, language).Documents.First();

        /// <summary>
        /// Given classes in the form of strings, their language, and an
        /// <see cref="IDiagnosticAnalyzer"/> to apply to it, return the diagnostics found
        /// in the string after converting it to a document.
        /// </summary>
        /// <param name="sources">Classes in the form of strings.</param>
        /// <param name="language">The language the source classes are in.</param>
        /// <param name="analyzer">The analyzer to be run on the sources.</param>
        /// <returns>Diagnostics that surfaced in the source code, sorted by their location.
        /// </returns>
        private static Diagnostic[] GetSortedDiagnostics(
            string[] sources,
            string language,
            DiagnosticAnalyzer analyzer
        ) =>
            GetSortedDiagnosticsFromDocuments(analyzer, GetDocuments(sources, language));

        /// <summary>
        /// Sorts diagnostics by location in source document.
        /// </summary>
        /// <param name="diagnostics">The list of Diagnostics to be sorted.</param>
        /// <returns>An IEnumerable containing the Diagnostics in order of Location.</returns>
        private static Diagnostic[] SortDiagnostics(IEnumerable<Diagnostic> diagnostics)
        {
            return diagnostics.OrderBy(d => d.Location.SourceSpan.Start).ToArray();
        }

        /// <summary>
        /// Given an array of strings as sources and a language, turn them into a project and
        /// return the documents and spans of it.
        /// </summary>
        /// <param name="sources">Classes in the form of strings.</param>
        /// <param name="language">The language the source code is in.</param>
        /// <returns>A Tuple containing the Documents produced from the sources and their TextSpans
        /// if relevant.</returns>
        private static Document[] GetDocuments(string[] sources, string language)
        {
            if (language != LanguageNames.CSharp && language != LanguageNames.VisualBasic)
            {
                throw new ArgumentException($"Unsupported language: {language}.");
            }

            var project = CreateProject(sources, language);
            var documents = project.Documents.ToArray();

            if (sources.Length != documents.Length)
            {
                throw new InvalidOperationException(
                    "Amount of sources did not match amount of Documents created."
                );
            }

            return documents;
        }

        /// <summary>
        /// Creates a project using the inputted strings as sources.
        /// </summary>
        /// <param name="sources">Classes in the form of strings.</param>
        /// <param name="language">The language the source code is in.</param>
        /// <returns>A project created out of the documents created from
        /// the source strings.</returns>
        private static Project CreateProject(
            string[] sources,
            string language = LanguageNames.CSharp
        )
        {
            string fileNamePrefix = DefaultFilePathPrefix;
            string fileExt = language == LanguageNames.CSharp
                ? CSharpDefaultFileExt
                : VisualBasicDefaultExt;

            var projectId = ProjectId.CreateNewId(debugName: TestProjectName);

            var solution = new AdhocWorkspace()
                .CurrentSolution
                .AddProject(projectId, TestProjectName, TestProjectName, language);
            IEnumerable<Assembly> assemblies = GetAssemblies(
                typeof(object),
                typeof(Enumerable),
                typeof(Compilation),
                typeof(Address),
                typeof(IValue)
            );
            foreach (Assembly assembly in assemblies)
            {
                if (assembly.IsDynamic)
                {
                    continue;
                }

                solution = solution.AddMetadataReference(
                    projectId,
                    MetadataReference.CreateFromFile(assembly.Location)
                );
            }

            int count = 0;
            foreach (var source in sources)
            {
                var newFileName = fileNamePrefix + count + "." + fileExt;
                var documentId = DocumentId.CreateNewId(projectId, debugName: newFileName);
                solution = solution.AddDocument(documentId, newFileName, SourceText.From(source));
                count++;
            }

            return solution.GetProject(projectId);
        }

        private static IEnumerable<Assembly> GetAssemblies(params Type[] rootTypes)
        {
            var registry = new Dictionary<string, Assembly>();

            void Register(Assembly assembly)
            {
                if (assembly.IsDynamic || registry.ContainsKey(assembly.FullName))
                {
                    return;
                }

                registry.Add(assembly.FullName, assembly);
                foreach (AssemblyName @ref in assembly.GetReferencedAssemblies())
                {
                    if (!registry.ContainsKey(@ref.FullName))
                    {
                        Assembly dep;
                        try
                        {
                            dep = Assembly.Load(@ref);
                        }
                        catch (FileNotFoundException)
                        {
                            continue;
                        }

                        Register(dep);
                    }
                }
            }

            foreach (Type rootType in rootTypes)
            {
                Register(rootType.Assembly);
            }

            return registry.Values;
        }
    }
}
