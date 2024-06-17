using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Crypto;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Tests.Tx
{
    public class AddressSetTest
    {
        [Fact]
        public void Empty()
        {
            Assert.Empty(AddressSet.Empty);
        }

        [Fact]
        public void Constructor()
        {
            Address[] addresses =
            {
                new Address("4000000000000000000000000000000000000000"),
                new Address("3000000000000000000000000000000000000001"),
                new Address("2000000000000000000000000000000000000002"),
                new Address("1000000000000000000000000000000000000003"),
                new Address("0000000000000000000000000000000000000004"),

                // dups:
                new Address("0000000000000000000000000000000000000004"),
                new Address("2000000000000000000000000000000000000002"),
                new Address("4000000000000000000000000000000000000000"),
            };
            var set = new AddressSet(addresses);
            Assert.Equal(5, set.Count);
            Assert.Equal<IEnumerable<Address>>(
                new[]
                {
                    new Address("4000000000000000000000000000000000000000"),
                    new Address("3000000000000000000000000000000000000001"),
                    new Address("2000000000000000000000000000000000000002"),
                    new Address("1000000000000000000000000000000000000003"),
                    new Address("0000000000000000000000000000000000000004"),
                },
                set
            );
        }

        [Fact]
        public void TryGetValue()
        {
            var set = new AddressSet(new Address[]
            {
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
            });

            bool found = set.TryGetValue(
                new Address("1000000000000000000000000000000000000001"),
                out Address value);
            Assert.True(found);
            Assert.Equal(new Address("1000000000000000000000000000000000000001"), value);

            found = set.TryGetValue(
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                out Address value2);
            Assert.False(found);
            Assert.Equal(default(Address), value2);
        }

        [Fact]
        public void SymmetricExcept()
        {
            var set = new AddressSet(new Address[]
            {
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
            });

            IImmutableSet<Address> result = set.SymmetricExcept(new Address[]
            {
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                default(Address),
                new Address("0000000000000000000000000000000000000002"),
                new Address("1000000000000000000000000000000000000001"),
                default(Address),
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
            });
            Assert.Equal<IEnumerable<Address>>(
                new Address[]
                {
                    new Address("2000000000000000000000000000000000000000"),
                    new Address("ffffffffffffffffffffffffffffffffffffffff"),
                    default(Address),
                },
                result
            );
        }

        [Fact]
        public void IsProperSubsetOf()
        {
            var set = new AddressSet(new Address[]
            {
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
            });

            bool result = set.IsProperSubsetOf(new Address[]
            {
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
            });
            Assert.True(result);

            result = set.IsProperSubsetOf(new Address[]
            {
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
            });
            Assert.False(result);

            result = set.IsProperSubsetOf(new Address[]
            {
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("0000000000000000000000000000000000000002"),
            });
            Assert.False(result);

            result = set.IsProperSubsetOf(new Address[]
            {
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
            });
            Assert.False(result);
        }

        [Fact]
        public void IsProperSupersetOf()
        {
            var set = new AddressSet(new Address[]
            {
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
            });

            bool result = set.IsProperSupersetOf(new Address[]
            {
                new Address("0000000000000000000000000000000000000002"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
            });
            Assert.True(result);

            result = set.IsProperSupersetOf(new Address[]
            {
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
            });
            Assert.False(result);

            result = set.IsProperSupersetOf(new Address[]
            {
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
            });
            Assert.False(result);

            result = set.IsProperSupersetOf(new Address[]
            {
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
            });
            Assert.False(result);
        }

        [Fact]
        public void IsSubsetOf()
        {
            var set = new AddressSet(new Address[]
            {
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
            });

            bool result = set.IsSubsetOf(new Address[]
            {
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
            });
            Assert.True(result);

            result = set.IsSubsetOf(new Address[]
            {
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
            });
            Assert.True(result);

            result = set.IsSubsetOf(new Address[]
            {
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("0000000000000000000000000000000000000002"),
            });
            Assert.False(result);

            result = set.IsSubsetOf(new Address[]
            {
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
            });
            Assert.False(result);
        }

        [Fact]
        public void IsSupersetOf()
        {
            var set = new AddressSet(new Address[]
            {
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
            });

            bool result = set.IsSupersetOf(new Address[]
            {
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("0000000000000000000000000000000000000002"),
            });
            Assert.True(result);

            result = set.IsSupersetOf(new Address[]
            {
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("0000000000000000000000000000000000000002"),
            });
            Assert.True(result);

            result = set.IsSupersetOf(new Address[]
            {
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
            });
            Assert.False(result);

            result = set.IsSupersetOf(new Address[]
            {
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
            });
            Assert.False(result);
        }

        [Fact]
        public void Overlaps()
        {
            var set = new AddressSet(new Address[]
            {
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
            });

            bool result = set.Overlaps(new Address[]
            {
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                default(Address),
            });
            Assert.True(result);

            result = set.Overlaps(new Address[]
            {
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                default(Address),
                default(Address),
            });
            Assert.False(result);
        }

        [Fact]
        public void Equality()
        {
            var set = new AddressSet(new Address[]
            {
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
            });
            var set2 = new AddressSet(new Address[]
            {
                new Address("0000000000000000000000000000000000000002"),
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
            });
            var set3 = new AddressSet(new Address[]
            {
                new Address("1000000000000000000000000000000000000001"),
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
                new Address("0000000000000000000000000000000000000002"),
            });
            var set4 = new AddressSet(new Address[]
            {
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
            });
            var set5 = new AddressSet(new Address[]
            {
                new Address("2000000000000000000000000000000000000000"),
                new Address("1000000000000000000000000000000000000001"),
                new Address("0000000000000000000000000000000000000002"),
                new Address("ffffffffffffffffffffffffffffffffffffffff"),
            });
            (AddressSet A, AddressSet B, bool Equal)[] truthTable =
            {
                (set, set, true),
                (set, set2, true),
                (set, set3, false),
                (set, set4, false),
                (set, set5, false),
                (set2, set3, false),
                (set2, set4, false),
                (set2, set5, false),
            };
            foreach ((AddressSet a, AddressSet b, bool equal) in truthTable)
            {
                if (equal)
                {
                    Assert.Equal<AddressSet>(a, b);
                    Assert.Equal<AddressSet>(b, a);
                    Assert.True(a.Equals((object)b));
                    Assert.True(b.Equals((object)a));
                    Assert.True(a.SetEquals(b));
                    Assert.True(b.SetEquals(a));
                    Assert.Equal(a.GetHashCode(), b.GetHashCode());
                }
                else
                {
                    Assert.NotEqual<AddressSet>(a, b);
                    Assert.NotEqual<AddressSet>(b, a);
                    Assert.False(a.Equals((object)b));
                    Assert.False(b.Equals((object)a));
                    Assert.False(a.SetEquals(b));
                    Assert.False(b.SetEquals(a));
                    Assert.NotEqual(b.GetHashCode(), a.GetHashCode());
                }

                Assert.False(a.Equals((AddressSet)null));
                Assert.False(b.Equals((AddressSet)null));
                Assert.False(a.Equals((object)null));
                Assert.False(b.Equals((object)null));
            }
        }
    }
}
