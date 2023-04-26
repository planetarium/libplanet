using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Json;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tx
{
    /// <summary>
    /// An abstract class to represent a list of <see cref="IAction"/>s.
    /// It can be <see cref="TxCustomActionList"/>.
    /// </summary>
    /// <remarks>It is a <a href="https://en.wikipedia.org/wiki/Sum_type">sum type</a> as
    /// it cannot be inherited from outside of this assembly.</remarks>
    [JsonConverter(typeof(TxActionListJsonConverter))]
    public abstract class TxActionList
        : IReadOnlyList<IValue>, IEquatable<TxActionList>, IBencodable
    {
        private protected TxActionList()
        {
            // Avoid external inheritance.
        }

        /// <inheritdoc cref="IReadOnlyCollection{T}.Count"/>
        [Pure]
        public abstract int Count { get; }

        /// <inheritdoc cref="IBencodable.Bencoded"/>
        public abstract IValue Bencoded { get; }

        /// <inheritdoc cref="IReadOnlyList{T}.this"/>
        [Pure]
        public abstract IValue this[int index] { get; }

        /// <inheritdoc cref="IEnumerable{T}.GetEnumerator()"/>
        [Pure]
        public abstract IEnumerator<IValue> GetEnumerator();

        /// <inheritdoc cref="IEnumerable.GetEnumerator()"/>
        [Pure]
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public abstract bool Equals(TxActionList? other);

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
                        return new TxCustomActionList(
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
            if (value is TxCustomActionList customActionList)
            {
                writer.WritePropertyName("customActions");
                BencodexJsonConverter.Write(writer, customActionList.Bencoded, options);
            }
            else
            {
                throw new JsonException("Unexpected action list type: " + value.GetType());
            }

            writer.WriteEndObject();
        }
    }
}
