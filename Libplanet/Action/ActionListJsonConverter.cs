using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex.Json;
using Bencodex.Types;

namespace Libplanet.Action
{
    internal class ActionListJsonConverter : JsonConverter<object>
    {
        private BencodexJsonConverter _bencodexJsonConverter = new BencodexJsonConverter();

        public override bool CanConvert(Type typeToConvert) =>
            typeToConvert.GetInterfaces().Any(i =>
                i.IsConstructedGenericType &&
                i.GenericTypeArguments.Any() &&
                typeof(IAction).IsAssignableFrom(i.GenericTypeArguments[0])
            );

        public override object Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options
        )
        {
            if (typeToConvert.IsConstructedGenericType &&
                typeToConvert.GenericTypeArguments[0] == typeof(IAction))
            {
                throw new NotSupportedException(
                    "Due to JsonConverterAttribute's limitation, ActionListJsonConverter cannot " +
                    "have any type parameters.  Therefore, it cannot be used to deserialize " +
                    "an arbitrary Bencodex value to an instance of a concrete IAction type."
                );
            }

            if (reader.TokenType == JsonTokenType.None && !reader.Read())
            {
                throw new JsonException("Unexpected end of JSON.");
            }

            if (reader.TokenType != JsonTokenType.StartArray)
            {
                throw new JsonException(
                    $"Expected {JsonTokenType.StartArray}, but got {reader.TokenType}.");
            }

            Type actionType = typeToConvert.GenericTypeArguments[0];
            ImmutableList<IAction>.Builder actions = ImmutableList.CreateBuilder<IAction>();
            while (reader.Read())
            {
                if (reader.TokenType == JsonTokenType.EndArray)
                {
                    break;
                }

                IValue actionValue = _bencodexJsonConverter.Read(ref reader, actionType, options)
                    ?? throw new JsonException("Failed to deserialize an action.");
                var action = (IAction)Activator.CreateInstance(actionType)!;
                action.LoadPlainValue(actionValue);
                actions.Add(action);
            }

            return actions.ToImmutable();
        }

        public override void Write(
            Utf8JsonWriter writer,
            object value,
            JsonSerializerOptions options
        )
        {
            if (!(value is IEnumerable<IAction> actions))
            {
                throw new JsonException($"Expected an {nameof(IEnumerable<IAction>)}.");
            }

            writer.WriteStartArray();
            foreach (IAction action in actions)
            {
                _bencodexJsonConverter.Write(writer, action.PlainValue, options);
            }

            writer.WriteEndArray();
        }
    }
}
