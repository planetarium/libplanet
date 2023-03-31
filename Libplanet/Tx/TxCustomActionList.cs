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

        internal static readonly Binary CustomActionsKey = new byte[] { 0x61 }; // 'a'

        /// <summary>
        /// Creates a new <see cref="TxCustomActionList"/> instance with the given
        /// <paramref name="customActions"/>.
        /// </summary>
        /// <param name="customActions">The list of <see cref="IAction"/>s to be executed in a
        /// transaction.</param>
        public TxCustomActionList(IEnumerable<IAction> customActions)
        {
            CustomActions = customActions is IImmutableList<IAction> actions
                ? actions
                : customActions.ToImmutableList();
        }

        /// <summary>
        /// The list of application-defined custom <see cref="IAction"/>s to be executed in a
        /// transaction.
        /// </summary>
        [Pure]
        public IImmutableList<IAction> CustomActions { get; }

        /// <inheritdoc cref="TxActionList.Count"/>
        [Pure]
        public override int Count => CustomActions.Count;

        /// <inheritdoc cref="TxActionList.this"/>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="index"/> is less than zero.</exception>
        /// <exception cref="IndexOutOfRangeException">Thrown when the given
        /// <paramref name="index"/> is greater than or equal to <see cref="Count"/>.</exception>
        [Pure]
        public override IAction this[int index]
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
        public override IEnumerator<IAction> GetEnumerator() =>
            CustomActions.GetEnumerator();

        /// <inheritdoc cref="TxActionList.ToBencodex()"/>
        [Pure]
        public override Dictionary ToBencodex() =>
            Bencodex.Types.Dictionary.Empty
                .Add(CustomActionsKey, new List(CustomActions.Select(a => a.PlainValue)));

        /// <summary>
        /// Decodes a <see cref="TxCustomActionList"/> from a Bencodex dictionary.
        /// </summary>
        /// <param name="dictionary">A Bencodex dictionary to decode.</param>
        /// <typeparam name="T">An <see cref="IAction"/> type to decode.  It must be a concrete
        /// type, not an interface or an abstract class.</typeparam>
        /// <returns>A decoded <see cref="TxCustomActionList"/>.</returns>
        /// <exception cref="DecodingException">Thrown when the given <paramref name="dictionary"/>
        /// does not contain <see cref="CustomActionsKey"/> key.</exception>
        /// <seealso cref="ToBencodex()"/>
        [Pure]
        internal static new TxCustomActionList FromBencodex<T>(Bencodex.Types.Dictionary dictionary)
            where T : IAction, new()
        {
            if (dictionary.TryGetValue(CustomActionsKey, out IValue v))
            {
                if (v is Bencodex.Types.List customActions)
                {
                    return new TxCustomActionList(
                        customActions.Select(ToAction<T>).ToImmutableList());
                }

                throw new DecodingException(
                    $"Expected {CustomActionsKey} key to have a " +
                    $"{typeof(Bencodex.Types.Dictionary).FullName}, " +
                    $"but a {v.GetType().Name} was found."
                );
            }

            throw new DecodingException(
                $"Expected {CustomActionsKey} key to have a " +
                $"{typeof(Bencodex.Types.Dictionary).FullName}, but it was missing."
            );
        }

        [Pure]
        private static IAction ToAction<T>(IValue value)
            where T : IAction, new()
        {
            var action = new T();
            action.LoadPlainValue(value);
            return action;
        }
    }
}
