using System;
using Libplanet.Blocks;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Libplanet.Tx;

namespace Libplanet.Net
{
    /// <summary>
    /// Various timeout options for sending and receiving <see cref="Message"/>s through
    /// an <see cref="ITransport"/>. Each timeout determines how long an <see cref="ITransport"/>
    /// should wait for all expected responses to arrive before giving up after sending
    /// a <see cref="Message"/>.
    /// </summary>
    public class TimeoutOptions
    {
        public const int DefaultMaxTimeout = 150;
        public const int DefaultDialTimeout = 1;
        public const int DefaultGetBlockHashesTimeout = 30;
        public const int DefaultGetBlocksBaseTimeout = 15;
        public const int DefaultGetBlocksPerBlockHashTimeout = 1;
        public const int DefaultGetTxsBaseTimeout = 3;
        public const int DefaultGetTxsPerTxIdTimeout = 1;

        /// <summary>
        /// The maximum timeout used in <see cref="Swarm{T}"/>. This is a hard limit for
        /// all <see cref="Message"/>s.  Set to <see cref="DefaultMaxTimeout"/> seconds
        /// by default.
        /// </summary>
        public TimeSpan MaxTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultMaxTimeout);

        /// <summary>
        /// Determines how long an <see cref="ITransport"/> should wait before timing out
        /// when dialing peers for either <see cref="PongMsg"/>, <see cref="NeighborsMsg"/>,
        /// or <see cref="ChainStatusMsg"/> for a long running process.
        /// Set to <see cref="DefaultDialTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="BootstrapOptions.DialTimeout"/>
        /// <seealso cref="PreloadOptions.DialTimeout"/>
        public TimeSpan DialTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultDialTimeout);

        /// <summary>
        /// The timeout used when sending a request with <see cref="GetBlockHashesMsg"/>
        /// to receive a <see cref="BlockHashesMsg"/> message.
        /// Set to <see cref="DefaultGetBlockHashesTimeout"/> seconds by default.
        /// </summary>
        public TimeSpan GetBlockHashesTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultGetBlockHashesTimeout);

        /// <summary>
        /// The base timeout used when sending a request with <see cref="GetBlocksMsg"/>
        /// to receive <see cref="Blocks"/> messages.
        /// Set to <see cref="DefaultGetBlocksBaseTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="GetBlocksPerBlockHashTimeout"/>
        public TimeSpan GetBlocksBaseTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultGetBlocksBaseTimeout);

        /// <summary>
        /// The additional amount to wait for each <see cref="BlockHash"/> in
        /// <see cref="GetBlocksMsg"/> to receive <see cref="Blocks"/> messages.
        /// Set to <see cref="DefaultGetBlocksPerBlockHashTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="GetBlocksBaseTimeout"/>
        public TimeSpan GetBlocksPerBlockHashTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultGetBlocksPerBlockHashTimeout);

        /// <summary>
        /// The base timeout used when sending a request with <see cref="GetTxsMsg"/>
        /// to receive <see cref="Tx"/> messages.
        /// Set to <see cref="DefaultGetTxsBaseTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="GetTxsPerTxIdTimeout"/>
        public TimeSpan GetTxsBaseTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultGetTxsBaseTimeout);

        /// <summary>
        /// The additional amount to wait for each <see cref="TxId"/> in <see cref="GetTxsMsg"/>
        /// to receive <see cref="Tx"/> messages.
        /// Set to <see cref="DefaultGetTxsPerTxIdTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="GetTxsBaseTimeout"/>
        public TimeSpan GetTxsPerTxIdTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultGetTxsPerTxIdTimeout);
    }
}
