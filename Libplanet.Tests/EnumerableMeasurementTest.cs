using System.Collections.Generic;
using System.Threading;
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

        [Fact]
        public void WithMeasuringTime()
        {
            IEnumerable<int> Stream()
            {
                yield return 1;
                Thread.Sleep(100);
                yield return 2;
                Thread.Sleep(100);
                yield return 3;
                Thread.Sleep(100);
            }

            var elapsed = 0L;
            IEnumerable<int> e = Stream().WithMeasuringTime(
                sw => elapsed = sw.ElapsedMilliseconds
            );
            Assert.Equal(0L, elapsed);

            foreach (var unused in e)
            {
                Assert.Equal(0L, elapsed);
            }

            Assert.True(
                elapsed >= 300L,
                $"{elapsed}ms is not greater than 300ms."
            );
        }
    }
}
