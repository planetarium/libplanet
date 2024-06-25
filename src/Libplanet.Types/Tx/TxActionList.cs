using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Json;
using Bencodex.Types;

namespace Libplanet.Types.Tx
{
    /// <summary>
    /// A list of <see cref="IAction"/>s to be executed in a transaction.
    /// </summary>
    [JsonConverter(typeof(TxActionListJsonConverter))]
    public sealed class TxActionList
        : IReadOnlyList<IValue>, IEquatable<TxActionList>, IBencodable
    {
        /// <summary>
        /// An empty <see cref="TxActionList"/>.
        /// </summary>
        public static readonly TxActionList Empty =
            new TxActionList(List.Empty);

        private IValue _bencoded;

        /// <summary>
        /// Creates a new <see cref="TxActionList"/> instance with given
        /// <paramref name="actions"/>.
        /// </summary>
        /// <param name="actions">The list of <see cref="IAction"/>s to be executed in a
        /// transaction.</param>
        public TxActionList(IEnumerable<IValue> actions)
            : this(new List(actions.Select(customAction => customAction)))
        {
        }

        public TxActionList(IValue bencoded)
            : this(bencoded is List list
                ? list
                : throw new ArgumentException(
                    $"Given value must be a {nameof(List)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private TxActionList(List list)
        {
            _bencoded = list;
        }

        /// <summary>
        /// The list of <see cref="IAction"/>s to be executed in a
        /// transaction.
        /// </summary>
        [Pure]
        public IImmutableList<IValue> Actions => ((List)_bencoded).ToImmutableList();

        /// <inheritdoc cref="IReadOnlyCollection{T}.Count"/>
        [Pure]
        public int Count => Actions.Count;

        /// <inheritdoc cref="IBencodable.Bencoded"/>
        public IValue Bencoded => _bencoded;

        /// <inheritdoc cref="IReadOnlyList{T}.this"/>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="index"/> is less than zero.</exception>
        /// <exception cref="IndexOutOfRangeException">Thrown when the given
        /// <paramref name="index"/> is greater than or equal to <see cref="Count"/>.</exception>
        [Pure]
        public IValue this[int index]
        {
            get
            {
                if (index < 0)
                {
                    throw new ArgumentOutOfRangeException(
                        "Only non-negative index is valid for subscription of a " +
                        $"{nameof(TxActionList)} instance.");
                }
                else if (index >= Count)
                {
                    throw new IndexOutOfRangeException(
                        $"The given index {index} is greater than the number of actions " +
                        $"in this {nameof(TxActionList)} instance ({Count}).");
                }

                return Actions[index];
            }
        }

        /// <inheritdoc cref="IEnumerable{T}.GetEnumerator()"/>
        [Pure]
        public IEnumerator<IValue> GetEnumerator() => Actions.GetEnumerator();

        /// <inheritdoc cref="IEnumerable.GetEnumerator()"/>
        [Pure]
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(TxActionList? other) =>
            other is TxActionList txActionList && Bencoded.Equals(txActionList.Bencoded);

        /// <inheritdoc cref="object.Equals(object?)"/>
        [Pure]
        public override bool Equals(object? obj) => obj is TxActionList other && Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
        public override int GetHashCode() => Bencoded.GetHashCode();
    }

    [SuppressMessage(
        "StyleCop.CSharp.MaintainabilityRules",
        "SA1402:FileMayOnlyContainASingleClass",
        Justification = "It's okay to have non-public classes together in a single file."
    )]
    internal sealed class TxActionListJsonConverter : JsonConverter<TxActionList>
    {
        private static readonly BencodexJsonConverter BencodexJsonConverter
            = new BencodexJsonConverter();

        public override TxActionList? Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options)
        {
            IValue? serialized = BencodexJsonConverter.Read(ref reader, typeToConvert, options);
            if (serialized is Bencodex.Types.List list)
            {
                return new TxActionList((IValue)list);
            }

            throw new JsonException("Serialized actions must be a Bencodex list.");
        }

        public override void Write(
            Utf8JsonWriter writer,
            TxActionList value,
            JsonSerializerOptions options)
        {
            BencodexJsonConverter.Write(writer, value.Bencoded, options);
        }
    }
}
