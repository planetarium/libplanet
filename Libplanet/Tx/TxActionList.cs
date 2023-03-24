using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using Bencodex;
using Libplanet.Action;

namespace Libplanet.Tx
{
    /// <summary>
    /// An abstract class to represent a list of <see cref="IAction"/>s.  It can be either
    /// <see cref="TxSystemActionList"/> or <see cref="TxCustomActionList"/>.
    /// </summary>
    /// <remarks>It is a <a href="https://en.wikipedia.org/wiki/Sum_type">sum type</a> as
    /// it cannot be inherited from outside of this assembly.</remarks>
    public abstract class TxActionList : IReadOnlyList<IAction>, IEquatable<TxActionList>
    {
        private protected TxActionList()
        {
            // Avoid external inheritance.
        }

        /// <inheritdoc cref="IReadOnlyCollection{T}.Count"/>
        [Pure]
        public abstract int Count { get; }

        /// <inheritdoc cref="IReadOnlyList{T}.this"/>
        [Pure]
        public abstract IAction this[int index] { get; }

        /// <summary>
        /// Decodes a <see cref="TxActionList"/> from a Bencodex dictionary.
        /// </summary>
        /// <param name="dictionary">A Bencodex dictionary to decode.</param>
        /// <typeparam name="T">An <see cref="IAction"/> type to decode.  It must be a concrete
        /// type, not an interface or an abstract class.</typeparam>
        /// <returns>A decoded <see cref="TxActionList"/>.</returns>
        /// <exception cref="DecodingException">Thrown when the given <paramref name="dictionary"/>
        /// does not contain either <see cref="TxSystemActionList"/> or
        /// <see cref="TxCustomActionList"/>.</exception>
        /// <seealso cref="ToBencodex()"/>
        [Pure]
        public static TxActionList FromBencodex<T>(Bencodex.Types.Dictionary dictionary)
            where T : IAction, new()
        {
            try
            {
                return TxSystemActionList.FromBencodex(dictionary);
            }
            catch (DecodingException sysActionError)
            {
                try
                {
                    return TxCustomActionList.FromBencodex<T>(dictionary);
                }
                catch (DecodingException customActionError)
                {
                    string msg =
                        $"Expected either {nameof(TxSystemActionList)} or " +
                        $"{nameof(TxCustomActionList)}, but both were missing.  " +
                        $"Here are the errors:\n\n\t{sysActionError}\n\t{customActionError}";
                    throw new DecodingException(msg, customActionError);
                }
            }
        }

        /// <inheritdoc cref="IEnumerable{T}.GetEnumerator()"/>
        [Pure]
        public abstract IEnumerator<IAction> GetEnumerator();

        /// <inheritdoc cref="IEnumerable.GetEnumerator()"/>
        [Pure]
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();

        /// <summary>
        /// Encodes the <see cref="TxActionList"/> into a Bencodex dictionary.
        /// </summary>
        /// <returns>A Bencodex dictionary that encodes the <see cref="TxActionList"/>.</returns>
        /// <seealso cref="FromBencodex{T}(Bencodex.Types.Dictionary)"/>
        [Pure]
        public abstract Bencodex.Types.Dictionary ToBencodex();

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(TxActionList? other)
        {
            return other is { } && GetType() == other.GetType() && Count == other.Count &&
                this.SequenceEqual(other, ActionEqualityComparer.Instance);
        }

        /// <inheritdoc cref="object.Equals(object?)"/>
        [Pure]
        public override bool Equals(object? obj) => obj is TxActionList other && Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
        public override int GetHashCode() => this.Aggregate(
            GetType().GetHashCode(),
            (a, b) => a ^ ActionEqualityComparer.Instance.GetHashCode(b)
        );

        private class ActionEqualityComparer : IEqualityComparer<IAction>
        {
            public static readonly ActionEqualityComparer Instance = new ActionEqualityComparer();

            public bool Equals(IAction? x, IAction? y) =>
                x is { } && y is { } &&
                x.GetType() == y.GetType() && x.PlainValue.Equals(y.PlainValue);

            public int GetHashCode(IAction obj) =>
                obj is null ? 0 : obj.GetType().GetHashCode() ^ GetBencodexHashCode(obj.PlainValue);

            // TODO: Bencodex should fix Dictionary.GetHashCode() and List.GetHashCode()
            // https://github.com/planetarium/bencodex.net/issues/72
            private int GetBencodexHashCode(Bencodex.Types.IValue value) =>
                value switch {
                    Bencodex.Types.List l => l.Aggregate(
                        0,
                        (a, b) => a ^ GetBencodexHashCode(b)
                    ),
                    Bencodex.Types.Dictionary d => d.Aggregate(
                        0,
                        (a, b) => a ^ GetBencodexHashCode(b.Key) ^ GetBencodexHashCode(b.Value)
                    ),
                    _ => value.GetHashCode(),
                };
        }
    }
}
