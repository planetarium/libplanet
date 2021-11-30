using System;
using System.Collections.Generic;
using Libplanet.Misc;
using Xunit;

namespace Libplanet.Tests.Misc
{
    public class ArrayEqualityComparerTest
    {
        private static readonly int[] ThreeInts = { 1, 2, 3 };
        private static readonly int[] ThreeInts2 = { 1, 2, 3 };
        private static readonly int[] DifferentInts = { 1, 2, 4 };
        private static readonly int[] FourInts = { 1, 2, 3, 4 };
        private static readonly int[] SignedInts = { -1, 2, -3 };
        private readonly ArrayEqualityComparer<int> _comparer = new ArrayEqualityComparer<int>();
        private readonly ArrayEqualityComparer<int> _absComparer =
            new ArrayEqualityComparer<int>(new AbsIntComparer());

        [Fact]
        public void Nulls()
        {
            Assert.True(_comparer.Equals(null, null));
            Assert.False(_comparer.Equals(null, ThreeInts));
            Assert.False(_comparer.Equals(ThreeInts, null));
            Assert.True(_absComparer.Equals(null, null));
            Assert.False(_absComparer.Equals(null, ThreeInts));
            Assert.False(_absComparer.Equals(ThreeInts, null));

            Assert.Equal(0, _comparer.GetHashCode(null));
            Assert.Equal(0, _absComparer.GetHashCode(null));
        }

        [Fact]
        public void Equal()
        {
            Assert.True(_comparer.Equals(ThreeInts, ThreeInts2));
            Assert.Equal(_comparer.GetHashCode(ThreeInts), _comparer.GetHashCode(ThreeInts2));
            Assert.True(_absComparer.Equals(ThreeInts, ThreeInts2));
            Assert.True(_absComparer.Equals(ThreeInts, SignedInts));
            Assert.Equal(
                _absComparer.GetHashCode(ThreeInts),
                _absComparer.GetHashCode(ThreeInts2));
            Assert.Equal(
                _absComparer.GetHashCode(ThreeInts),
                _absComparer.GetHashCode(SignedInts)
            );
        }

        [Fact]
        public void DifferentElements()
        {
            Assert.False(_comparer.Equals(ThreeInts, DifferentInts));
            Assert.False(_comparer.Equals(ThreeInts, SignedInts));
            Assert.False(_absComparer.Equals(ThreeInts, DifferentInts));

            Assert.NotEqual(
                _comparer.GetHashCode(ThreeInts),
                _comparer.GetHashCode(DifferentInts)
            );
            Assert.NotEqual(
                _comparer.GetHashCode(ThreeInts),
                _comparer.GetHashCode(SignedInts)
            );
            Assert.NotEqual(
                _absComparer.GetHashCode(ThreeInts),
                _absComparer.GetHashCode(DifferentInts)
            );
        }

        [Fact]
        public void DifferentLengths()
        {
            Assert.False(_comparer.Equals(ThreeInts, FourInts));
            Assert.NotEqual(_comparer.GetHashCode(ThreeInts), _comparer.GetHashCode(FourInts));

            Assert.False(_absComparer.Equals(ThreeInts, FourInts));
            Assert.NotEqual(
                _absComparer.GetHashCode(ThreeInts),
                _absComparer.GetHashCode(FourInts)
            );
        }

        private class AbsIntComparer : EqualityComparer<int>
        {
            public override bool Equals(int x, int y) => Math.Abs(x) == Math.Abs(y);

            public override int GetHashCode(int obj) => Math.Abs(obj);
        }
    }
}
