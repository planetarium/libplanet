using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;

namespace Libplanet.Blockchain.Renderers.Debug
{
    /// <summary>
    /// Exception thrown by <see cref="ValidatingActionRenderer{T}"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="ValidatingActionRenderer{T}"/>'s type parameter.</typeparam>
    public class InvalidRenderException<T> : Exception
        where T : IAction, new()
    {
        /// <summary>
        /// Creates a new <see cref="ValidatingActionRenderer{T}"/> instance.
        /// </summary>
        /// <param name="message">The exception message string.</param>
        /// <param name="records">Recorded render events.</param>
        public InvalidRenderException(
            string message,
            IReadOnlyList<RenderRecord<T>> records
        )
            : base(message)
        {
            Records = records;
        }

        /// <summary>
        /// Recorded render events.
        /// </summary>
        public IReadOnlyList<RenderRecord<T>> Records { get; }

        /// <inheritdoc cref="Exception.Message"/>
        public override string Message
        {
            get
            {
                string MakeCompact(string stackTrace)
                {
                    int pos = 0;
                    for (int i = 0; pos >= 0 && i < 10; i++)
                    {
                        pos = stackTrace.IndexOf('\n', pos + 1);
                    }

                    return pos < 0
                        ? stackTrace
                        : stackTrace.Substring(0, pos);
                }

                string pre = base.Message;
                if (Records.Count < 1)
                {
                    return pre + "\n(0 records.)";
                }

                RenderRecord<T> first = Records[Records.Count - 1];
                var firstLine = $"{pre}\n{first}";
                if (Records.Count < 2)
                {
                    return $"{firstLine}\n{MakeCompact(first.StackTrace)}\n(1 record.)";
                }

                // Find common postfix
                string firstTrace = first.StackTrace;
                int commonPostfix = 0;
                for (int i = 0, end = Records.Min(r => r.StackTrace.Length); i < end; i++)
                {
                    char charInFirst = firstTrace[firstTrace.Length - (i + 1)];
                    bool allEqual = Records.Skip(1).All(r =>
                    {
                        string stackTrace = r.StackTrace;
                        char charFromEnd = stackTrace[stackTrace.Length - (i + 1)];
                        return charFromEnd.Equals(charInFirst);
                    });

                    if (!allEqual)
                    {
                        commonPostfix = i;
                        break;
                    }
                }

                firstTrace =
                    MakeCompact(firstTrace.Substring(0, firstTrace.Length - commonPostfix));
                firstLine += $"\n{firstTrace}";
                RenderRecord<T> second = Records[Records.Count - 2];
                IEnumerable<RenderRecord<T>> rest = Records.Reverse().Skip(2);
                string secondTrace = second.StackTrace;
                string secondCompactTrace =
                    MakeCompact(secondTrace.Substring(0, secondTrace.Length - commonPostfix));
                return $"{firstLine}\n{second}\n{secondCompactTrace}\n" +
                       string.Join("\n", rest) + $"\n({Records.Count} records.)";
            }
        }
    }
}
