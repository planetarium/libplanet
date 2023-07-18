using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using Libplanet.Crypto;

namespace Libplanet.Types.Tx
{
    /// <summary>
    /// Order-preserving set of <see cref="Address"/>es.
    /// </summary>
    public class AddressSet : IImmutableSet<Address>, IEquatable<AddressSet>
    {
        /// <summary>
        /// An empty <see cref="AddressSet"/>.
        /// </summary>
        public static readonly AddressSet Empty = new AddressSet(ImmutableArray<Address>.Empty);

        private readonly ImmutableArray<Address> _addresses;

        /// <summary>
        /// Creates a new <see cref="AddressSet"/> instance.
        /// </summary>
        /// <param name="addresses"><see cref="Address"/>es to include in the set.  Duplicated
        /// <see cref="Address"/>es are ignored, and only the first occurrence is included.
        /// The order of <paramref name="addresses"/> is preserved.</param>
        public AddressSet(IEnumerable<Address> addresses)
        {
            var elements = new HashSet<Address>();
            var builder = ImmutableArray.CreateBuilder<Address>();
            foreach (Address address in addresses)
            {
                if (elements.Add(address))
                {
                    builder.Add(address);
                }
            }

            builder.Capacity = elements.Count;
            _addresses = builder.MoveToImmutable();
        }

        private AddressSet(in ImmutableArray<Address> addresses, bool bypassCheck)
        {
            if (!bypassCheck)
            {
                throw new ArgumentException("Make sure if this call is intended.");
            }

            _addresses = addresses;
        }

        /// <inheritdoc cref="IReadOnlyCollection{T}.Count"/>
        [Pure]
        public int Count => _addresses.Length;

        /// <inheritdoc cref="IEnumerable{T}.GetEnumerator()"/>
        [Pure]
        public IEnumerator<Address> GetEnumerator() =>
            ((IEnumerable<Address>)_addresses).GetEnumerator();

        /// <inheritdoc cref="IEnumerable.GetEnumerator()"/>
        [Pure]
        IEnumerator IEnumerable.GetEnumerator() =>
            ((IEnumerable)_addresses).GetEnumerator();

        /// <inheritdoc cref="IImmutableSet{T}.Clear()"/>
        [Pure]
        public IImmutableSet<Address> Clear() => Empty;

        /// <inheritdoc cref="IImmutableSet{T}.Contains(T)"/>
        [Pure]
        public bool Contains(Address value) =>
            _addresses.Contains(value);

        /// <inheritdoc cref="IImmutableSet{T}.Add(T)"/>
        [Pure]
        public IImmutableSet<Address> Add(Address value) =>
            new AddressSet(_addresses.Add(value));

        /// <inheritdoc cref="IImmutableSet{T}.Remove(T)"/>
        [Pure]
        public IImmutableSet<Address> Remove(Address value) =>
            new AddressSet(_addresses.Remove(value), bypassCheck: true);

        /// <inheritdoc cref="IImmutableSet{T}.TryGetValue(T, out T)"/>
        [Pure]
        public bool TryGetValue(Address equalValue, out Address actualValue)
        {
            if (_addresses.Contains(equalValue))
            {
                actualValue = equalValue;
                return true;
            }

            return false;
        }

        /// <inheritdoc cref="IImmutableSet{T}.Intersect(IEnumerable{T})"/>
        [Pure]
        public IImmutableSet<Address> Intersect(IEnumerable<Address> other) =>
            new AddressSet(_addresses.Intersect(other).ToImmutableArray(), bypassCheck: true);

        /// <inheritdoc cref="IImmutableSet{T}.Except(IEnumerable{T})"/>
        [Pure]
        public IImmutableSet<Address> Except(IEnumerable<Address> other) =>
            new AddressSet(_addresses.Except(other).ToImmutableArray(), bypassCheck: true);

        /// <inheritdoc cref="IImmutableSet{T}.SymmetricExcept(IEnumerable{T})"/>
        [Pure]
        public IImmutableSet<Address> SymmetricExcept(IEnumerable<Address> other)
        {
            ICollection<Address> operand = other is ICollection<Address> o
                ? o
                : other.ToArray();
            return new AddressSet(_addresses.Union(operand).Except(_addresses.Intersect(operand)));
        }

        /// <inheritdoc cref="IImmutableSet{T}.Union(IEnumerable{T})"/>
        [Pure]
        public IImmutableSet<Address> Union(IEnumerable<Address> other) =>
            new AddressSet(_addresses.Union(other));

        /// <inheritdoc cref="IImmutableSet{T}.SetEquals(IEnumerable{T})"/>
        [Pure]
        public bool SetEquals(IEnumerable<Address> other)
        {
            ICollection<Address> operand = other is ICollection<Address> o
                ? o
                : other.ToArray();
            if (_addresses.Length != operand.Count)
            {
                return false;
            }

            return _addresses.All(operand.Contains);
        }

        /// <inheritdoc cref="IImmutableSet{T}.IsProperSubsetOf(IEnumerable{T})"/>
        [Pure]
        public bool IsProperSubsetOf(IEnumerable<Address> other)
        {
            ISet<Address> operand = other is ISet<Address> o
                ? o
                : other.ToImmutableHashSet();
            return operand.IsProperSupersetOf(_addresses);
        }

        /// <inheritdoc cref="IImmutableSet{T}.IsProperSupersetOf(IEnumerable{T})"/>
        [Pure]
        public bool IsProperSupersetOf(IEnumerable<Address> other)
        {
            ISet<Address> operand = other is ISet<Address> o
                ? o
                : other.ToImmutableHashSet();
            return operand.IsProperSubsetOf(_addresses);
        }

        /// <inheritdoc cref="IImmutableSet{T}.IsSubsetOf(IEnumerable{T})"/>
        [Pure]
        public bool IsSubsetOf(IEnumerable<Address> other)
        {
            ISet<Address> operand = other is ISet<Address> o
                ? o
                : other.ToImmutableHashSet();
            return operand.IsSupersetOf(_addresses);
        }

        /// <inheritdoc cref="IImmutableSet{T}.IsSupersetOf(IEnumerable{T})"/>
        [Pure]
        public bool IsSupersetOf(IEnumerable<Address> other)
        {
            ISet<Address> operand = other is ISet<Address> o
                ? o
                : other.ToImmutableHashSet();
            return operand.IsSubsetOf(_addresses);
        }

        /// <inheritdoc cref="IImmutableSet{T}.Overlaps(IEnumerable{T})"/>
        [Pure]
        public bool Overlaps(IEnumerable<Address> other)
        {
            ICollection<Address> operand = other is ICollection<Address> o
                ? o
                : other.ToArray();
            return _addresses.Any(operand.Contains);
        }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(AddressSet? other) =>
            other is { } set && set.SetEquals(this);

        /// <inheritdoc cref="object.Equals(object?)"/>
        [Pure]
        public override bool Equals(object? obj) =>
            obj is AddressSet set && Equals(set);

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
        public override int GetHashCode() =>
            _addresses.OrderBy(a => a).Aggregate(0, (h, a) => h ^ a.GetHashCode());
    }
}
