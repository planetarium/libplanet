using Bencodex.Types;
using DiffPlex.DiffBuilder;
using DiffPlex.DiffBuilder.Model;
using Xunit.Sdk;

namespace Libplanet.Action.Tests
{
    internal static class TestUtils
    {
        private static readonly System.Random _random = new System.Random();

        public static void AssertBencodexEqual(IValue expected, IValue actual)
        {
            bool equal = (expected is null && actual is null) ||
                (expected is Null && actual is Null) ||
                (expected is Bencodex.Types.Boolean && actual is Bencodex.Types.Boolean &&
                    expected.Equals(actual)) ||
                (expected is Integer && actual is Integer && expected.Equals(actual)) ||
                (expected is Binary && actual is Binary && expected.Equals(actual)) ||
                (expected is Text && actual is Text && expected.Equals(actual)) ||
                (expected is List && actual is List && expected.Equals(actual)) ||
                (expected is Dictionary && actual is Dictionary && expected.Equals(actual));
            if (equal)
            {
                return;
            }

            string expectedInspection = expected?.ToString() ?? "(null)";
            string actualInspection = actual?.ToString() ?? "(null)";
            DiffPaneModel diffModel = InlineDiffBuilder.Diff(expectedInspection, actualInspection);
            var prefixes = new Dictionary<ChangeType, string>
            {
                [ChangeType.Deleted] = "-",
                [ChangeType.Inserted] = "+",
                [ChangeType.Unchanged] = " ",
            };

            string diff = string.Join(
                Environment.NewLine,
                diffModel.Lines.Select(line =>
                    (prefixes.TryGetValue(line.Type, out string prefix) ? prefix : " ") + line.Text
                )
            );
            throw new XunitException(
                "Two Bencodex values are not equal.\n--- Expected\n+++ Actual\n\n" + diff
            );
        }

        public static byte[] GetRandomBytes(int size)
        {
            var bytes = new byte[size];
            _random.NextBytes(bytes);

            return bytes;
        }
    }
}
