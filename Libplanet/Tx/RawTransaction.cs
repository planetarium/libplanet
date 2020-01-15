using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;
using Bencodex.Types;

[assembly: InternalsVisibleTo("Libplanet.Tests")]
namespace Libplanet.Tx
{
    [Equals]
    internal readonly struct RawTransaction
    {
        public const string NonceKey = "nonce";

        public const string SignerKey = "signer";

        public const string UpdatedAddressesKey = "updated_addresses";

        public const string PublicKeyKey = "public_key";

        public const string TimestampKey = "timestamp";

        public const string ActionsKey = "actions";

        public const string SignatureKey = "signature";

        public RawTransaction(
            long nonce,
            ImmutableArray<byte> signer,
            ImmutableArray<ImmutableArray<byte>> updatedAddresses,
            ImmutableArray<byte> publicKey,
            string timestamp,
            ImmutableArray<IValue> actions
        )
            : this(
                nonce,
                signer,
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
            ImmutableArray<ImmutableArray<byte>> updatedAddresses,
            ImmutableArray<byte> publicKey,
            string timestamp,
            ImmutableArray<IValue> actions,
            ImmutableArray<byte> signature
        )
        {
            Nonce = nonce;
            Signer = signer;
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
            UpdatedAddresses = dict.GetValue<Bencodex.Types.List>(UpdatedAddressesKey)
                .Select(value => ((Binary)value).ToImmutableArray()).ToImmutableArray();
            PublicKey = dict.GetValue<Binary>(PublicKeyKey).ToImmutableArray();
            Timestamp = dict.GetValue<Text>(TimestampKey);
            Actions = dict.GetValue<Bencodex.Types.List>(ActionsKey).ToImmutableArray();

            Signature = dict.ContainsKey((Text)SignatureKey)
                ? dict.GetValue<Binary>(SignatureKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;
        }

        public long Nonce { get; }

        public ImmutableArray<byte> Signer { get; }

        public ImmutableArray<byte> PublicKey { get; }

        public ImmutableArray<ImmutableArray<byte>> UpdatedAddresses { get; }

        public string Timestamp { get; }

        public ImmutableArray<byte> Signature { get; }

        public ImmutableArray<IValue> Actions { get; }

        public RawTransaction AddSignature(byte[] signature)
        {
            return new RawTransaction(
                Nonce,
                Signer,
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
  {nameof(UpdatedAddresses)} = {updatedAddresses}
  {nameof(Timestamp)} = {Timestamp}
  {nameof(Signature)} = {ByteUtil.Hex(Signature.ToArray())}";
        }
    }
}
