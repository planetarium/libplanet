using System;
using System.Globalization;
using System.Reflection;
using System.Security.Cryptography;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Types.Evidence
{
    /// <summary>
    /// Base class for evidence that explains how the infraction has been occurred.
    /// </summary>
    public abstract class EvidenceBase
        : IEquatable<EvidenceBase>, IComparable<EvidenceBase>, IComparable, IBencodable
    {
        public const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.fffffffZ";

        private const string TypeKey = "type";
        private const string DataKey = "data";

        private static readonly Codec Codec = new Codec();
        private static readonly byte[] HeightKey = { 0x68 };              // 'h'
        private static readonly byte[] TargetAddressKey = { 0x74, 0x61 }; // 'ta'
        private static readonly byte[] TimestampKey = { 0x74 };           // 't'
        private EvidenceId? _id;

        /// <summary>
        /// Constructor for creating new evidence.
        /// </summary>
        /// <param name="height">Indicates the block height that infraction has been
        /// occurred.</param>
        /// <param name="targetAddress">Indicates the address of the target that caused
        /// the infraction.</param>
        /// <param name="timestamp">Indicates the timestamp the infraction occurred.</param>
        /// <exception cref="ArgumentOutOfRangeException">
        /// Thrown if <paramref name="height"/> is less than 0.
        /// </exception>
        protected EvidenceBase(long height, Address targetAddress, DateTimeOffset timestamp)
        {
            if (height < 0L)
            {
                throw new ArgumentOutOfRangeException(
                    message: $"Parameter {nameof(height)} must be greater than or equal to 0.",
                    paramName: nameof(height));
            }

            Height = height;
            TargetAddress = targetAddress;
            Timestamp = timestamp;
        }

        /// <summary>
        /// Constructor for decoding bencoded evidence.
        /// </summary>
        /// <param name="bencoded">Bencoded data of evidence.</param>
        /// <exception cref="ArgumentException">
        /// Thrown if given bencoded is not of type Dictionary.
        /// </exception>
        protected EvidenceBase(IValue bencoded)
        {
            if (bencoded is Dictionary dictionary)
            {
                Height = dictionary.GetValue<Integer>(HeightKey);
                TargetAddress = new Address(dictionary.GetValue<IValue>(TargetAddressKey));
                Timestamp = DateTimeOffset.ParseExact(
                    dictionary.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture);
            }
            else
            {
                throw new ArgumentException(
                    "Given bencoded must be of type Dictionary.", nameof(bencoded));
            }
        }

        /// <summary>
        /// Indicates the block height that infraction has been occurred.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// Indicates the address of the target that caused the infraction.
        /// </summary>
        public Address TargetAddress { get; }

        /// <summary>
        /// Indicates the timestamp the infraction occurred.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// Indicates identifier of evidence.
        /// </summary>
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

        /// <summary>
        /// Inner bencoded form of evidence.
        /// This method won't bencode evidence type, so we can't decode evidence
        /// without knowing the evidence type.
        /// For fully bencoded form, use <see cref="Bencode(EvidenceBase)"/>.
        /// </summary>
        [JsonIgnore]
        public IValue Bencoded
        {
            get
            {
                var timestamp = Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture);
                var bencoded = Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(TargetAddressKey, TargetAddress.Bencoded)
                    .Add(TimestampKey, timestamp);
                bencoded = OnBencoded(bencoded);
                return bencoded;
            }
        }

        /// <summary>
        /// Bencode <see cref="EvidenceBase"/>.
        /// This bencodes <paramref name="evidence"/> with its evidence type,
        /// so its return can be decoded by <see cref="Decode(IValue)"/>
        /// without concrete evidence type.
        /// </summary>
        /// <param name="evidence"><see cref="EvidenceBase"/> to be bencoded.</param>
        /// <returns>Bencoded <see cref="IValue"/>.</returns>
        public static IValue Bencode(EvidenceBase evidence)
        {
            Dictionary bencoded = Dictionary.Empty
                .Add(TypeKey, evidence.GetType().AssemblyQualifiedName!)
                .Add(DataKey, evidence.Bencoded);
            return bencoded;
        }

        /// <summary>
        /// Decode <see cref="IValue"/> that bencoded with <see cref="Bencode(EvidenceBase)"/>
        /// to <see cref="EvidenceBase"/>.
        /// </summary>
        /// <param name="value">Bencoded <see cref="IValue"/> to be decoded.</param>
        /// <returns>Decoded <see cref="EvidenceBase"/>.</returns>
        /// <exception cref="NotSupportedException">Thrown if evidence type does not have
        /// a constructor that takes <see cref="IValue"/>.</exception>
        public static EvidenceBase Decode(IValue value)
        {
            var type = (string)((Dictionary)value).GetValue<Text>(TypeKey);
            var evidenceType = Type.GetType(type) ?? typeof(UnknownEvidence);
            var data = ((Dictionary)value).GetValue<IValue>(DataKey);
            if (evidenceType.GetConstructor(new Type[] { typeof(IValue) }) is ConstructorInfo ctor)
            {
                var args = new object?[] { data };
                return (EvidenceBase)ctor.Invoke(args);
            }
            else
            {
                throw new NotSupportedException(
                    $"Evidence type {type} does not have a constructor " +
                    $"that takes {nameof(IValue)}.");
            }
        }

        /// <summary>
        /// Deserialize <see cref="EvidenceBase"/> from byte array.
        /// </summary>
        /// <param name="bytes">
        /// Byte array to be deserialized.
        /// </param>
        /// <returns>
        /// Deserialized <see cref="EvidenceBase"/>.
        /// </returns>
        public static EvidenceBase Deserialize(byte[] bytes) => Decode(Codec.Decode(bytes));

        /// <summary>
        /// Serialize <see cref="EvidenceBase"/> to byte array.
        /// </summary>
        /// <returns>
        /// Serialized byte array of <see cref="EvidenceBase"/>.
        /// </returns>
        public byte[] Serialize() => Codec.Encode(Bencode(this));

        /// <inheritdoc/>
        public bool Equals(EvidenceBase? other) => Id.Equals(other?.Id);

        /// <inheritdoc/>
        public override bool Equals(object? obj) => obj is EvidenceBase other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode() => unchecked((17 * 31 + Id.GetHashCode()) * 31);

        /// <inheritdoc cref="IComparable{T}.CompareTo(T)"/>
        public int CompareTo(EvidenceBase? other) => Id.CompareTo(other?.Id);

        /// <inheritdoc cref="IComparable.CompareTo(object)"/>
        public int CompareTo(object? obj)
            => obj is EvidenceBase other ? CompareTo(other: other) : 1;

        public void Verify(IEvidenceContext evidenceContext) => OnVerify(evidenceContext);

        protected abstract Dictionary OnBencoded(Dictionary dictionary);

        protected abstract void OnVerify(IEvidenceContext evidenceContext);
    }
}
