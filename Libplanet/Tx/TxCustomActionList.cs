using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tx
{
    /// <summary>
    /// A list of application-defined custom <see cref="IAction"/>s to be executed in a transaction.
    /// </summary>
    public sealed class TxCustomActionList : TxActionList
    {
        /// <summary>
        /// An empty <see cref="TxCustomActionList"/>.
        /// </summary>
        public static readonly TxCustomActionList Empty =
            new TxCustomActionList(ImmutableList<IAction>.Empty);

        private IValue _bencoded;

        /// <summary>
        /// Creates a new <see cref="TxCustomActionList"/> instance with the given
        /// <paramref name="customActions"/>.
        /// </summary>
        /// <param name="customActions">The list of <see cref="IAction"/>s to be executed in a
        /// transaction.</param>
        public TxCustomActionList(IEnumerable<IAction> customActions)
            : this(new List(customActions.Select(customAction => customAction.PlainValue)))
        {
        }

        public TxCustomActionList(IValue bencoded)
            : this(bencoded is List list
                ? list
                : throw new ArgumentException(
                    $"Given value must be a {nameof(List)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private TxCustomActionList(List list)
        {
            _bencoded = list;
        }

        /// <summary>
        /// The list of application-defined custom <see cref="IAction"/>s to be executed in a
        /// transaction.
        /// </summary>
        [Pure]
        public IImmutableList<IValue> CustomActions => ((List)_bencoded).ToImmutableList();

        /// <inheritdoc cref="TxActionList.Count"/>
        [Pure]
        public override int Count => CustomActions.Count;

        /// <inheritdoc cref="IBencodable.Bencoded"/>
        [Pure]
        public override IValue Bencoded => _bencoded;

        /// <inheritdoc cref="TxActionList.this"/>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="index"/> is less than zero.</exception>
        /// <exception cref="IndexOutOfRangeException">Thrown when the given
        /// <paramref name="index"/> is greater than or equal to <see cref="Count"/>.</exception>
        [Pure]
        public override IValue this[int index]
        {
            get
            {
                if (index < 0)
                {
                    throw new ArgumentOutOfRangeException(
                        "Only non-negative index is valid for subscription of a " +
                        $"{nameof(TxCustomActionList)} instance.");
                }
                else if (index >= Count)
                {
                    throw new IndexOutOfRangeException(
                        $"The given index {index} is greater than the number of actions " +
                        $"in this {nameof(TxCustomActionList)} instance ({Count}).");
                }

                return CustomActions[index];
            }
        }

        /// <inheritdoc cref="TxActionList.GetEnumerator"/>
        [Pure]
        public override IEnumerator<IValue> GetEnumerator() =>
            CustomActions.GetEnumerator();

        [Pure]
        public override bool Equals(TxActionList? other)
        {
            return other is TxCustomActionList txCustomActionList &&
                Bencoded.Equals(txCustomActionList.Bencoded);
        }
    }
}
