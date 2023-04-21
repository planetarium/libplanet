using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;

namespace Libplanet.Tx
{
    /// <summary>
    /// A singleton container of a system-provided <see cref="IAction"/> to be executed in a
    /// transaction.  It cannot be empty nor contain more than one action.
    /// </summary>
    /// <seealso cref="Libplanet.Action.Sys"/>
    public sealed class TxSystemActionList : TxActionList
    {
        private IValue _bencoded;

        /// <summary>
        /// Creates a new <see cref="TxSystemActionList"/> instance with the given
        /// <paramref name="systemAction"/>.
        /// </summary>
        /// <param name="systemAction">The value for <see cref="SystemAction"/>.</param>
        /// <exception cref="ArgumentException">Thrown when the given
        /// <paramref name="systemAction"/> is not a system action.</exception>
        public TxSystemActionList(IAction systemAction)
            : this(
                Registry.IsSystemAction(systemAction)
                    ? Registry.Serialize(systemAction)
                    : throw new ArgumentException(
                        $"The given action {systemAction} is not a system action.",
                        nameof(systemAction)))
        {
        }

        public TxSystemActionList(IValue bencoded)
            : this(bencoded is Dictionary dict
                ? dict
                : throw new ArgumentException(
                    $"Given value must be a {nameof(Dictionary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private TxSystemActionList(Dictionary dict)
        {
            _bencoded = dict;
        }

        /// <summary>
        /// The system-provided <see cref="IAction"/> to be executed in a transaction.
        /// </summary>
        [Pure]
        public IValue SystemAction => _bencoded;

        /// <inheritdoc cref="TxActionList.Count"/>
        [Pure]
        public override int Count => 1;

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
                        $"Only index 0 is valid for subscription of a" +
                        " {nameof(TxSystemActionList)} instance.");
                }

                return index != 0
                    ? throw new IndexOutOfRangeException(
                        "Only index 0 is valid for subscription of a " +
                        $"{nameof(TxSystemActionList)} instance.")
                    : SystemAction;
            }
        }

        /// <inheritdoc cref="TxActionList.GetEnumerator"/>
        [Pure]
        public override IEnumerator<IValue> GetEnumerator()
        {
            yield return SystemAction;
        }

        [Pure]
        public override bool Equals(TxActionList? other)
        {
            return other is TxSystemActionList txSystemActionList &&
                Bencoded.Equals(txSystemActionList.Bencoded);
        }
    }
}
