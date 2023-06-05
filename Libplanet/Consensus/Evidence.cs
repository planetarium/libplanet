using System;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;

namespace Libplanet.Consensus
{
    public abstract class Evidence
        : IEquatable<Evidence>, IComparable<Evidence>, IComparable, IBencodable
    {
        private static readonly Codec Codec = new Codec();
        private EvidenceId? _id;

        protected Evidence(long height, DateTimeOffset timestamp)
        {
            Height = height;
            Timestamp = timestamp;
        }

        public enum EvidenceType : byte
        {
            /// <summary>
            /// Evidence for duplicated votes.
            /// </summary>
            DuplicateVoteEvidence = 0x01,
        }

        public abstract EvidenceType Type { get; }

        public long Height { get; }

        public DateTimeOffset Timestamp { get; }

        public EvidenceId Id
        {
            get
            {
                if (!(_id is { } nonNull))
                {
                    using var hasher = SHA256.Create();
                    byte[] payload = Codec.Encode(Bencoded);
                    _id = nonNull = new EvidenceId(hasher.ComputeHash(payload));
                }

                return nonNull;
            }
        }

        public abstract IValue Bencoded { get; }

        public static IValue Bencode(Evidence evidence)
        {
            Dictionary bencoded = Bencodex.Types.Dictionary.Empty
                .Add("type", (int)evidence.Type)
                .Add("evidence", evidence.Bencoded);
            return bencoded;
        }

        public static Evidence Decode(IValue bencoded)
        {
            var type = (EvidenceType)(int)((Dictionary)bencoded).GetValue<Integer>("type");
            var evidence = ((Dictionary)bencoded).GetValue<IValue>("evidence");
            switch (type)
            {
                case EvidenceType.DuplicateVoteEvidence:
                    return new DuplicateVoteEvidence(evidence);
                default:
                    throw new InvalidCastException($"Given type {type} is not a valid evidence.");
            }
        }

        public bool Equals(Evidence? other) => Id.Equals(other?.Id);

        public override bool Equals(object? obj) => obj is Evidence other && Equals(other);

        public override int GetHashCode() => unchecked((17 * 31 + Id.GetHashCode()) * 31);

        /// <inheritdoc cref="IComparable{T}.CompareTo(T)"/>
        public int CompareTo(Evidence? other)
        {
            return Id.CompareTo(other?.Id);
        }

        /// <inheritdoc cref="IComparable.CompareTo(object)"/>
        public int CompareTo(object? obj) => obj is Evidence other
            ? this.CompareTo(other)
            : throw new ArgumentException(
                $"Argument {nameof(obj)} is not a ${nameof(Evidence)}.", nameof(obj));
    }
}
