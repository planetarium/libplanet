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
using Libplanet.Action;
using Libplanet.Action.Sys;

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

    [SuppressMessage(
        "StyleCop.CSharp.MaintainabilityRules",
        "SA1402:FileMayOnlyContainASingleClass",
        Justification = "It's okay to have non-public classes together in a single file."
    )]
    internal sealed class TxActionListJsonConverter : JsonConverter<TxActionList>
    {
        private static readonly ActionListJsonConverter ActionListJsonConverter =
            new ActionListJsonConverter();

        private static readonly SysActionJsonConverter SysActionJsonConverter =
            new SysActionJsonConverter();

        public override TxActionList? Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException("Expected a JSON object.");
            }

            bool? isSystemAction = null;
            IAction? systemAction = null;
            IImmutableList<IAction>? customActions = null;
            reader.Read();
            while (reader.TokenType != JsonTokenType.EndObject)
            {
                string key = reader.GetString() ?? throw new JsonException("Expected a key.");
                switch (key)
                {
                    case "type":
                        isSystemAction = reader.GetString() switch
                        {
                            "system" => true,
                            "custom" => throw new JsonException(
                                "Deserialization of custom actions is not supported yet."),
                            _ => throw new JsonException("Unexpected value: " + reader.GetString()),
                        };
                        break;

                    case "systemAction":
                        systemAction =
                            SysActionJsonConverter.Read(ref reader, typeof(IAction), options);
                        break;

                    case "customActions":
                        throw new JsonException(
                            "Deserialization of custom actions is not supported yet.");

                    default:
                        throw new JsonException("Unexpected key: " + key);
                }
            }

            switch (isSystemAction)
            {
                case null:
                    throw new JsonException("Expected a \"Type\" key.");

                case true:
                    if (customActions is { })
                    {
                        throw new JsonException("Unexpected \"CustomActions\" key.");
                    }
                    else if (!(systemAction is { } sysAction))
                    {
                        throw new JsonException("Expected a \"SystemAction\" key.");
                    }
                    else
                    {
                        return new TxSystemActionList(sysAction);
                    }

                case false:
                    throw new JsonException(
                        "Deserialization of custom actions is not supported yet.");
            }
        }

        public override void Write(
            Utf8JsonWriter writer,
            TxActionList value,
            JsonSerializerOptions options)
        {
            writer.WriteStartObject();
            writer.WriteString("type", value is TxSystemActionList ? "system" : "custom");
            if (value is TxSystemActionList sysActionList)
            {
                writer.WritePropertyName("systemAction");
                SysActionJsonConverter.Write(writer, sysActionList.SystemAction, options);
            }
            else if (value is TxCustomActionList customActionList)
            {
                writer.WritePropertyName("customActions");
                ActionListJsonConverter.Write(writer, customActionList.CustomActions, options);
            }
            else
            {
                throw new JsonException("Unexpected action list type: " + value.GetType());
            }

            writer.WriteEndObject();
        }
    }
}
