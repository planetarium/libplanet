using System;
using Microsoft.CodeAnalysis;
using Xunit;

namespace Libplanet.Analyzers.Tests
{
    public sealed class CSharpAnalysisFactAttribute : FactAttribute
    {
        public static readonly bool CSharpSupported = IsCsharpSupported();

        public CSharpAnalysisFactAttribute()
        {
            if (!CSharpSupported)
            {
                Skip = $"Code analysis on {LanguageNames.CSharp} is unsupported on this runtime.";
            }
        }

        private static bool IsCsharpSupported()
        {
            try
            {
                _ = new AdhocWorkspace().CurrentSolution.AddProject(
                    ProjectId.CreateNewId("TestProject"),
                    "TestProject",
                    "TestProject",
                    LanguageNames.CSharp
                );
            }
            catch (NotSupportedException e)
            {
                if (e.Message.Contains(LanguageNames.CSharp))
                {
                    return false;
                }
            }

            return true;
        }
    }
}
