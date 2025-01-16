#pragma warning disable SA1402 // File may only contain a single type
using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;

namespace Libplanet.Node.DataAnnotations;

[AttributeUsage(AttributeTargets.Property)]
public class ArrayAttribute(Type validationType, params object?[] values) : ValidationAttribute
{
    private readonly object?[] _values = values;

    public ArrayAttribute(Type validationAttributeType)
        : this(validationAttributeType, [])
    {
    }

    public Type ValidationType { get; } = validationType;

    internal ValidationAttribute CreateAttribute()
    {
        if (!ValidationType.IsSubclassOf(typeof(ValidationAttribute)))
        {
            throw new InvalidOperationException(
                "ValidationType must be a subclass of ValidationAttribute.");
        }

        var args = _values;
        if (Activator.CreateInstance(ValidationType, args) is ValidationAttribute validation)
        {
            return validation;
        }

        throw new UnreachableException("Activator.CreateInstance should not return null.");
    }

    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        var validation = CreateAttribute();
        if (value is IEnumerable array)
        {
            foreach (var item in array)
            {
                if (!validation.IsValid(item))
                {
                    return new ValidationResult(validation.ErrorMessage);
                }
            }
        }

        return ValidationResult.Success;
    }
}

public class ArrayAttribute<T> : ArrayAttribute
    where T : Attribute
{
    public ArrayAttribute()
        : base(typeof(T))
    {
    }

    public ArrayAttribute(object value)
        : base(typeof(T), value)
    {
    }
}
