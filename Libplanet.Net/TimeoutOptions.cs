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
        public const int DefaultBootstrapDialTimeout = 15;
        public const int DefaultPreloadDialTimeout = 5;
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
        /// Determines how long an <see cref="ITransport"/> should wait before timimg out
        /// when dialing peers for either <see cref="Pong"/>, <see cref="Neighbors"/>,
        /// or <see cref="ChainStatus"/> during a bootstrapping phase.  Generally, a more relaxed
        /// <see cref="TimeSpan"/> is used compared to <see cref="DialTimeout"/>.
        /// Set to <see cref="DefaultBootstrapDialTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="DialTimeout"/>
        public TimeSpan BootstrapDialTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultBootstrapDialTimeout);

        /// <summary>
        /// Determines how long an <see cref="ITransport"/> should wait before timimg out
        /// when dialing peers for either <see cref="Pong"/>, <see cref="Neighbors"/>,
        /// or <see cref="ChainStatus"/> during a preloading phase.  Generally, a more relaxed
        /// <see cref="TimeSpan"/> is used compared to <see cref="DialTimeout"/>.
        /// Set to <see cref="DefaultPreloadDialTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="DialTimeout"/>
        public TimeSpan PreloadDialTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultPreloadDialTimeout);

        /// <summary>
        /// Determines how long an <see cref="ITransport"/> should wait before timing out
        /// when dialing peers for either <see cref="Pong"/>, <see cref="Neighbors"/>,
        /// or <see cref="ChainStatus"/> for a long running process.
        /// Set to <see cref="DefaultDialTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="BootstrapDialTimeout"/>
        /// <seealso cref="PreloadDialTimeout"/>
        public TimeSpan DialTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultDialTimeout);

        /// <summary>
        /// The timeout used when sending a request with <see cref="GetBlockHashes"/>
        /// to receive a <see cref="BlockHashes"/> message.
        /// Set to <see cref="DefaultGetBlockHashesTimeout"/> seconds by default.
        /// </summary>
        public TimeSpan GetBlockHashesTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultGetBlockHashesTimeout);

        /// <summary>
        /// The base timeout used when sending a request with <see cref="GetBlocks"/>
        /// to receive <see cref="Blocks"/> messages.
        /// Set to <see cref="DefaultGetBlocksBaseTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="GetBlocksPerBlockHashTimeout"/>
        public TimeSpan GetBlocksBaseTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultGetBlocksBaseTimeout);

        /// <summary>
        /// The additional amount to wait for each <see cref="BlockHash"/> in
        /// <see cref="GetBlocks"/> to receive <see cref="Blocks"/> messages.
        /// Set to <see cref="DefaultGetBlocksPerBlockHashTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="GetBlocksBaseTimeout"/>
        public TimeSpan GetBlocksPerBlockHashTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultGetBlocksPerBlockHashTimeout);

        /// <summary>
        /// The base timeout used when sending a request with <see cref="GetTxs"/>
        /// to receive <see cref="Tx"/> messages.
        /// Set to <see cref="DefaultGetTxsBaseTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="GetTxsPerTxIdTimeout"/>
        public TimeSpan GetTxsBaseTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultGetTxsBaseTimeout);

        /// <summary>
        /// The additional amount to wait for each <see cref="TxId"/> in <see cref="GetTxs"/>
        /// to receive <see cref="Tx"/> messages.
        /// Set to <see cref="DefaultGetTxsPerTxIdTimeout"/> seconds by default.
        /// </summary>
        /// <seealso cref="GetTxsBaseTimeout"/>
        public TimeSpan GetTxsPerTxIdTimeout { get; set; }
            = TimeSpan.FromSeconds(DefaultGetTxsPerTxIdTimeout);
    }
}
