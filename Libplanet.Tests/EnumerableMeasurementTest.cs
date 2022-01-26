using System.Collections.Generic;
using Xunit;

namespace Libplanet.Tests
{
    public class EnumerableMeasurementTest
    {
        [Fact]
        public void OnBeforeAndAfter()
        {
            int[] values = { 1, 2, 3 };
            bool beforeCalled = false;
            bool afterCalled = false;
            IEnumerable<int> enumerable = values.OnBeforeAndAfter(
                () => beforeCalled = true,
                () => afterCalled = true
            );
            Assert.False(beforeCalled);
            Assert.False(afterCalled);

            using (IEnumerator<int> e = enumerable.GetEnumerator())
            {
                Assert.False(beforeCalled);
                Assert.False(afterCalled);

                e.MoveNext();
                Assert.Equal(1, e.Current);
                Assert.True(beforeCalled);
                Assert.False(afterCalled);

                e.MoveNext();
                Assert.Equal(2, e.Current);
                Assert.True(beforeCalled);
                Assert.False(afterCalled);

                e.MoveNext();
                Assert.Equal(3, e.Current);
                Assert.True(beforeCalled);
                Assert.False(afterCalled);

                e.MoveNext();
                Assert.True(beforeCalled);
                Assert.True(afterCalled);
            }
        }
    }
}
