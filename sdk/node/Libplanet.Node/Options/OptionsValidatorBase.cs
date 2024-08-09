using Microsoft.Extensions.Options;

namespace Libplanet.Node.Options;

public abstract class OptionsValidatorBase<T> : IValidateOptions<T>
    where T : OptionsBase<T>
{
    ValidateOptionsResult IValidateOptions<T>.Validate(string? name, T options)
    {
        if (options.IsValidated)
        {
            throw new InvalidOperationException("The options have already been validated.");
        }

        try
        {
            OnValidate(name, options);
            return ValidateOptionsResult.Success;
        }
        catch (Exception e)
        {
            return ValidateOptionsResult.Fail($"{e}");
        }
        finally
        {
            options.IsValidated = true;
        }
    }

    protected abstract void OnValidate(string? name, T options);
}
