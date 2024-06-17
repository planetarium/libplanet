using System;

namespace Libplanet.Explorer.Executable.Exceptions
{
    public class InvalidOptionValueException : Exception
    {
        public InvalidOptionValueException(
            string optionName,
            string optionValue,
            string[] expectedValues)
        {
            OptionName = optionName;
            OptionValue = optionValue;
            ExpectedValues = expectedValues;
        }

        public string OptionName { get; }

        public string OptionValue { get; }

        public string[] ExpectedValues { get; }
    }
}
