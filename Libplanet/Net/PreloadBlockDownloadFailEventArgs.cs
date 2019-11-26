using System;
using System.Collections.Generic;

namespace Libplanet.Net
{
    /// <summary>
    /// The event data that provides value to the event handler which is triggered when the block
    /// downloading fails during preloading.
    /// </summary>
    public class PreloadBlockDownloadFailEventArgs
    {
        /// <summary>
        /// The exceptions thrown while the block downloading in preloading.
        /// </summary>
        public IReadOnlyList<Exception> InnerExceptions { get; set; }
    }
}
