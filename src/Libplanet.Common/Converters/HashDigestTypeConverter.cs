using System;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Reflection;
using System.Security.Cryptography;

namespace Libplanet.Common.Converters;

/// <summary>
/// The <see cref="TypeConverter"/> implementation for <see cref="HashDigest{T}"/>.
/// </summary>
[SuppressMessage(
    "StyleCop.CSharp.MaintainabilityRules",
    "SA1402:FileMayOnlyContainASingleClass",
    Justification = "It's okay to have non-public classes together in a single file."
)]
internal class HashDigestTypeConverter : TypeConverter
{
    private readonly MethodInfo _fromString;

    public HashDigestTypeConverter(Type type)
    {
        if (!type.IsConstructedGenericType ||
            type.GetGenericTypeDefinition() != typeof(HashDigest<>) ||
            type.GetGenericArguments().Length != 1)
        {
            throw new ArgumentException(
                "Only usable with a constructed HashDigest<T>.",
                nameof(type));
        }

        _fromString = type.GetMethod(
            nameof(HashDigest<SHA1>.Parse),
            BindingFlags.Public | BindingFlags.Static,
            Type.DefaultBinder,
            new[] { typeof(string) },
            null
        ) ?? throw new MissingMethodException(
            $"Failed to look up the {nameof(HashDigest<SHA1>.Parse)} method");
    }

    /// <inheritdoc cref="TypeConverter.CanConvertFrom(ITypeDescriptorContext?, Type)"/>
    public override bool CanConvertFrom(ITypeDescriptorContext? context, Type sourceType) =>
        sourceType == typeof(string) || base.CanConvertFrom(context, sourceType);

    /// <inheritdoc
    /// cref="TypeConverter.ConvertFrom(ITypeDescriptorContext?, CultureInfo?, object)"/>
    public override object? ConvertFrom(
        ITypeDescriptorContext? context,
        CultureInfo? culture,
        object value
    )
    {
        if (value is string v)
        {
            try
            {
                return _fromString.Invoke(null, new[] { v })!;
            }
            catch (TargetInvocationException e) when (e.InnerException is { } ie)
            {
                if (ie is ArgumentOutOfRangeException || ie is FormatException)
                {
                    throw new ArgumentException(ie.Message, ie);
                }

                throw ie;
            }
        }

        return base.ConvertFrom(context, culture, value);
    }

    /// <inheritdoc cref="TypeConverter.CanConvertTo(ITypeDescriptorContext?, Type?)"/>
    public override bool CanConvertTo(ITypeDescriptorContext? context, Type? destinationType) =>
        destinationType == typeof(string) || base.CanConvertTo(context, destinationType);

    /// <inheritdoc
    /// cref="TypeConverter.ConvertTo(ITypeDescriptorContext?, CultureInfo?, object?, Type)"/>
    public override object? ConvertTo(
        ITypeDescriptorContext? context,
        CultureInfo? culture,
        object? value,
        Type destinationType
    )
    {
        if (value != null &&
            destinationType == typeof(string) &&
            value.GetType().IsConstructedGenericType &&
            value.GetType().GetGenericTypeDefinition() == typeof(HashDigest<>))
        {
            return value.ToString()!;
        }

        return base.ConvertTo(context, culture, value, destinationType);
    }
}
