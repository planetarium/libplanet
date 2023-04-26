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
using Libplanet.Action;

namespace Libplanet.Tx
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
            new TxActionList(ImmutableList<IAction>.Empty);

        private IValue _bencoded;

        /// <summary>
        /// Creates a new <see cref="TxActionList"/> instance with given
        /// <paramref name="customActions"/>.
        /// </summary>
        /// <param name="customActions">The list of <see cref="IAction"/>s to be executed in a
        /// transaction.</param>
        public TxActionList(IEnumerable<IAction> customActions)
            : this(new List(customActions.Select(customAction => customAction.PlainValue)))
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
        /// The list of application-defined custom <see cref="IAction"/>s to be executed in a
        /// transaction.
        /// </summary>
        [Pure]
        public IImmutableList<IValue> CustomActions => ((List)_bencoded).ToImmutableList();

        /// <inheritdoc cref="IReadOnlyCollection{T}.Count"/>
        [Pure]
        public int Count => CustomActions.Count;

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

                return CustomActions[index];
            }
        }

        /// <inheritdoc cref="IEnumerable{T}.GetEnumerator()"/>
        [Pure]
        public IEnumerator<IValue> GetEnumerator() => CustomActions.GetEnumerator();

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
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException("Expected a JSON object.");
            }

            reader.Read();
            while (reader.TokenType != JsonTokenType.EndObject)
            {
                string key = reader.GetString() ?? throw new JsonException("Expected a key.");
                switch (key)
                {
                    case "type":
                        throw new JsonException(
                            $"Unexpected key/value: {key}/{reader.GetString()}");

                    case "customActions":
                        return new TxActionList(
                            BencodexJsonConverter.Read(ref reader, typeof(IValue), options) ??
                                throw new JsonException("Expected a \"CustomActions\" value."));

                    default:
                        throw new JsonException("Unexpected key: " + key);
                }
            }

            throw new JsonException($"Encountered an unexpected token: {reader.TokenType}");
        }

        public override void Write(
            Utf8JsonWriter writer,
            TxActionList value,
            JsonSerializerOptions options)
        {
            writer.WriteStartObject();
            if (value is TxActionList txActionList)
            {
                writer.WritePropertyName("customActions");
                BencodexJsonConverter.Write(writer, txActionList.Bencoded, options);
            }
            else
            {
                throw new JsonException("Unexpected action list type: " + value.GetType());
            }

            writer.WriteEndObject();
        }
    }
}
