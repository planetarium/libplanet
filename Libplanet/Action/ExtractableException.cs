using System;
using System.Diagnostics.Contracts;
using Bencodex.Types;

namespace Libplanet.Action
{
    /// <summary>
    /// Extension methods for <see cref="IExtractableException"/> and other <see cref="Exception"/>s
    /// that do not implement <see cref="IExtractableException"/>.
    /// </summary>
    public static class ExtractableException
    {
        /// <summary>
        /// Extracts metadata from any exception in a general way.
        /// </summary>
        /// <param name="exception">An exception to extract its metadata from.</param>
        /// <returns>Extracted metadata.  If there is not its metadata at all, or it does not
        /// support metadata extraction, it can return <see langword="null"/> instead.</returns>
        [Pure]
        public static IValue? ExtractMetadata(this Exception exception) =>
            exception switch
            {
                IExtractableException extractable =>
                    extractable.Metadata,
                ArgumentException argExc =>
                    Dictionary.Empty.Add(
                        "parameterName",
                        argExc.ParamName is { } name ? (Text)name : (IValue)Null.Value
                    ),
                _ =>
                    null,
            };
    }
}
