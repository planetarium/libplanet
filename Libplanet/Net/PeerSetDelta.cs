using System;
using System.Collections.Immutable;
using System.Linq;
using System.Runtime.Serialization;
using Libplanet.Serialization;

namespace Libplanet.Net
{
    [Serializable]
    [Uno.GeneratedEquality]
    public partial class PeerSetDelta : ISerializable
    {
        public PeerSetDelta(
            Peer sender,
            DateTimeOffset timestamp,
            IImmutableSet<Peer> addedPeers,
            IImmutableSet<Peer> removedPeers,
            IImmutableSet<Peer> existingPeers)
        {
            Sender = sender;
            Timestamp = timestamp;
            AddedPeers = addedPeers;
            RemovedPeers = removedPeers;
            ExistingPeers = existingPeers;
        }

        protected PeerSetDelta(SerializationInfo info, StreamingContext context)
        {
            Sender = info.GetValue<Peer>("sender");
            Timestamp = info.GetValue<DateTimeOffset>("timestamp");
            AddedPeers = info.GetValue<Peer[]>("added_peers")?
                .ToImmutableHashSet();
            RemovedPeers = info.GetValue<Peer[]>("removed_peers")?
                .ToImmutableHashSet();
            ExistingPeers = info.GetValue<Peer[]>("existing_peers")?
                .ToImmutableHashSet();
        }

        [Uno.EqualityHash]
        [Uno.EqualityKey]
        public Peer Sender { get; }

        [Uno.EqualityHash]
        [Uno.EqualityKey]
        public DateTimeOffset Timestamp { get; }

        [Uno.EqualityHash]
        public IImmutableSet<Peer> AddedPeers { get; }

        [Uno.EqualityHash]
        public IImmutableSet<Peer> RemovedPeers { get; }

        [Uno.EqualityHash]
        public IImmutableSet<Peer> ExistingPeers { get; }

        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            info.AddValue("sender", Sender);
            info.AddValue("timestamp", Timestamp);
            info.AddValue("added_peers", AddedPeers?.ToArray());
            info.AddValue("removed_peers", RemovedPeers?.ToArray());
            info.AddValue("existing_peers", ExistingPeers?.ToArray());
        }

        public override string ToString()
        {
            return $"[Sender: {Sender}, " +
                $"+: {AddedPeers.Count}, " +
                $"-: {RemovedPeers.Count}]";
        }
    }
}
