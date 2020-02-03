using System;
using System.Collections.Generic;

namespace Libplanet.Net.Messages
{
    [Equals]
    [Serializable]
    internal class BreadcrumbTrail
    {
        private List<Trail> _trails;

        public BreadcrumbTrail(bool record)
        {
            Record = record;
            _trails = new List<Trail>();
        }

        internal enum TrailType
        {
            /// <summary>
            /// Trail of sending a message.
            /// </summary>
            Sent = 0,

            /// <summary>
            /// Trail of receiving a message.
            /// </summary>
            Received = 1,

            /// <summary>
            /// Trail of replying a message.
            /// </summary>
            Replied = 2,
        }

        public bool Record { get; }

        public Trail[] Trails => _trails.ToArray();

        public void Add(TrailType type, Address address, DateTimeOffset dateTimeOffset)
        {
            _trails.Add(new Trail(type, address, dateTimeOffset));
        }

        /// <inheritdoc/>
        public override string ToString()
        {
            return Record
                ? string.Join("/", _trails)
                : string.Empty;
        }

        [Equals]
        [Serializable]
        internal readonly struct Trail
        {
            public readonly TrailType Type;
            public readonly Address Address;
            public readonly DateTimeOffset Timestamp;

            public Trail(TrailType type, Address address, DateTimeOffset dateTimeOffset)
            {
                Type = type;
                Address = address;
                Timestamp = dateTimeOffset;
            }

            /// <inheritdoc/>
            public override string ToString()
            {
                return $"[{Type:G}:{Address}:{Timestamp}]";
            }
        }
    }
}
