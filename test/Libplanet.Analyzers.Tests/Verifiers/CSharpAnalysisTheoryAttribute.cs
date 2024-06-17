using Microsoft.CodeAnalysis;
using Xunit;

namespace Libplanet.Analyzers.Tests.Verifiers
{
    public sealed class CSharpAnalysisTheoryAttribute : TheoryAttribute
    {
        public CSharpAnalysisTheoryAttribute()
        {
            if (!CSharpAnalysisFactAttribute.CSharpSupported)
            {
                Skip = $"Code analysis on {LanguageNames.CSharp} is unsupported on this runtime.";
            }
        }
    }
}
