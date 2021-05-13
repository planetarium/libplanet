using System;
using System.Diagnostics.CodeAnalysis;
using Bencodex.Types;
using Libplanet.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class ExtractableExceptionTest
    {
        [Fact]
        [SuppressMessage(
            "Major Code Smell",
            "S3928",
            Justification = "The ArgumentException instances made here are a just example."
        )]
        public void ExtractMetadata()
        {
            Assert.Null(ExtractableException.ExtractMetadata(new Exception()));
            Assert.Equal(
                Dictionary.Empty.Add("parameterName", "name"),
                ExtractableException.ExtractMetadata(new ArgumentException("A message", "name"))
            );
            Assert.Equal(
                Dictionary.Empty.Add("parameterName", "name"),
                ExtractableException.ExtractMetadata(new ArgumentNullException("name"))
            );
            Assert.Equal(
                Dictionary.Empty.Add("foo", 1).Add("bar", 2),
                ExtractableException.ExtractMetadata(new SampleExtractableException())
            );
        }

        public class SampleExtractableException : Exception, IExtractableException
        {
            public SampleExtractableException()
            {
            }

            public IValue Metadata => Dictionary.Empty
                .Add("foo", 1)
                .Add("bar", 2);
        }
    }
}
