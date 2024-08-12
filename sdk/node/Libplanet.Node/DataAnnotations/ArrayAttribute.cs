#pragma warning disable SA1402 // File may only contain a single type
using System.Collections;
using System.ComponentModel.DataAnnotations;

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

    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        var args = _values;
        var validation = (ValidationAttribute)Activator.CreateInstance(ValidationType, args)!;
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
