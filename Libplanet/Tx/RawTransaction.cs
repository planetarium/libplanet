#nullable enable
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Tx
{
    [Equals]
    internal readonly struct RawTransaction
    {
        public static readonly byte[] NonceKey = { 0x6e }; // 'n'

        public static readonly byte[] SignerKey = { 0x73 }; // 's'

        public static readonly byte[] GenesisHashKey = { 0x67 }; // 'g'

        public static readonly byte[] UpdatedAddressesKey = { 0x75 }; // 'u'

        public static readonly byte[] PublicKeyKey = { 0x70 }; // 'p'

        public static readonly byte[] TimestampKey = { 0x74 }; // 't'

        public static readonly byte[] ActionsKey = { 0x61 }; // 'a'

        public static readonly byte[] SignatureKey = { 0x53 }; // 'S'

        public RawTransaction(
            long nonce,
            ImmutableArray<byte> signer,
            ImmutableArray<byte> genesisHash,
            ImmutableArray<ImmutableArray<byte>> updatedAddresses,
            ImmutableArray<byte> publicKey,
            string timestamp,
            ImmutableArray<IValue> actions
        )
            : this(
                nonce,
                signer,
                genesisHash,
                updatedAddresses,
                publicKey,
                timestamp,
                actions,
                ImmutableArray<byte>.Empty
            )
        {
        }

        public RawTransaction(
            long nonce,
            ImmutableArray<byte> signer,
            ImmutableArray<byte> genesisHash,
            ImmutableArray<ImmutableArray<byte>> updatedAddresses,
            ImmutableArray<byte> publicKey,
            string timestamp,
            ImmutableArray<IValue> actions,
            ImmutableArray<byte> signature
        )
        {
            Nonce = nonce;
            Signer = signer;
            GenesisHash = genesisHash;
            UpdatedAddresses = updatedAddresses;
            PublicKey = publicKey;
            Timestamp = timestamp;
            Actions = actions;
            Signature = signature;
        }

        public RawTransaction(Bencodex.Types.Dictionary dict)
        {
            Nonce = dict.GetValue<Integer>(NonceKey);
            Signer = dict.GetValue<Binary>(SignerKey).ToImmutableArray();
            GenesisHash = dict.ContainsKey((IKey)(Binary)GenesisHashKey)
                ? dict.GetValue<Binary>(GenesisHashKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;
            UpdatedAddresses = dict.GetValue<Bencodex.Types.List>(UpdatedAddressesKey)
                .Select(value => ((Binary)value).ToImmutableArray()).ToImmutableArray();
            PublicKey = dict.GetValue<Binary>(PublicKeyKey).ToImmutableArray();
            Timestamp = dict.GetValue<Text>(TimestampKey);
            Actions = dict.GetValue<Bencodex.Types.List>(ActionsKey).ToImmutableArray();

            Signature = dict.ContainsKey((IKey)(Binary)SignatureKey)
                ? dict.GetValue<Binary>(SignatureKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;
        }

        public long Nonce { get; }

        public ImmutableArray<byte> Signer { get; }

        public ImmutableArray<byte> PublicKey { get; }

        public ImmutableArray<byte> GenesisHash { get; }

        public ImmutableArray<ImmutableArray<byte>> UpdatedAddresses { get; }

        public string Timestamp { get; }

        public ImmutableArray<byte> Signature { get; }

        public ImmutableArray<IValue> Actions { get; }

        public static bool operator ==(RawTransaction left, RawTransaction right) =>
            Operator.Weave(left, right);

        public static bool operator !=(RawTransaction left, RawTransaction right) =>
            Operator.Weave(left, right);

        public RawTransaction AddSignature(byte[] signature)
        {
            return new RawTransaction(
                Nonce,
                Signer,
                GenesisHash,
                UpdatedAddresses,
                PublicKey,
                Timestamp,
                Actions,
                signature.ToImmutableArray()
            );
        }

        public Bencodex.Types.Dictionary ToBencodex()
        {
            var updatedAddresses =
                UpdatedAddresses.Select(addr => (IValue)(Binary)addr.ToArray());
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(NonceKey, Nonce)
                .Add(SignerKey, Signer.ToArray())
                .Add(UpdatedAddressesKey, updatedAddresses)
                .Add(PublicKeyKey, PublicKey.ToArray())
                .Add(TimestampKey, Timestamp)
                .Add(ActionsKey, Actions);

            if (GenesisHash != ImmutableArray<byte>.Empty)
            {
                dict = dict.Add(GenesisHashKey, GenesisHash.ToArray());
            }

            if (Signature != ImmutableArray<byte>.Empty)
            {
                dict = dict.Add(SignatureKey, Signature.ToArray());
            }

            return dict;
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(Signature.ToArray());
        }

        public override string ToString()
        {
            string updatedAddresses = string.Join(
                string.Empty,
                UpdatedAddresses.Select(a => "\n    " + ByteUtil.Hex(a.ToArray()))
            );
            return $@"{nameof(RawTransaction)}
  {nameof(Nonce)} = {Nonce.ToString(CultureInfo.InvariantCulture)}
  {nameof(Signer)} = {ByteUtil.Hex(Signer.ToArray())}
  {nameof(PublicKey)} = {ByteUtil.Hex(PublicKey.ToArray())}
  {nameof(GenesisHash)} = {ByteUtil.Hex(GenesisHash.ToArray())}
  {nameof(UpdatedAddresses)} = {updatedAddresses}
  {nameof(Timestamp)} = {Timestamp}
  {nameof(Signature)} = {ByteUtil.Hex(Signature.ToArray())}";
        }
    }
}
