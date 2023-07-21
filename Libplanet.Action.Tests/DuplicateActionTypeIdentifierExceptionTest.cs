using System.Collections.Immutable;
using Libplanet.Action.Tests.Common;
using Xunit;

namespace Libplanet.Action.Tests
{
    public class DuplicateActionTypeIdentifierExceptionTest
    {
        private readonly DuplicateActionTypeIdentifierException _exception;

        public DuplicateActionTypeIdentifierExceptionTest()
        {
            _exception = new DuplicateActionTypeIdentifierException(
                "An error message.",
                "type_id",
                ImmutableHashSet.Create(typeof(DumbAction), typeof(NullAction))
            );
        }

        [Fact]
        public void Props()
        {
            Assert.Equal("type_id", _exception.TypeIdentifier);
            Assert.Equal(
                ImmutableHashSet.Create(typeof(DumbAction), typeof(NullAction)),
                _exception.DuplicateActionTypes
            );
        }

        [Fact]
        public void Message()
        {
            const string expected =
                "An error message.\n\nType ID: type_id\nAssociated types:\n" +
                "  Libplanet.Action.NullAction\n  Libplanet.Action.Tests.Common.DumbAction";
            Assert.Equal(expected, _exception.Message);
        }
    }
}
