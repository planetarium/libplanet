using System.Globalization;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using Boolean = Bencodex.Types.Boolean;

namespace Libplanet.Action.Tests.Common
{
    public sealed class DumbAction : IAction, IEquatable<DumbAction>
    {
        public static readonly Address RandomRecordsAddress =
            new Address("7811C3fAa0f9Cc41F7971c3d9b031B1095b20AB2");

        public static readonly Currency DumbCurrency =
            Currency.Uncapped("DUMB", 0,  null);

        public DumbAction()
        {
        }

        public DumbAction(IEnumerable<PublicKey> validators)
        {
            Validators = validators;
        }

        public DumbAction(
            Address targetAddress,
            string item,
            bool recordRandom = false,
            bool idempotent = false,
            Tuple<Address, Address, BigInteger>? transfer = null)
        {
            Idempotent = idempotent;
            TargetAddress = targetAddress;
            Item = item;
            RecordRandom = recordRandom;
            Transfer = transfer;
        }

        public DumbAction(
            Address targetAddress,
            string item,
            Address transferFrom,
            Address transferTo,
            BigInteger transferAmount,
            bool recordRandom = false,
            bool idempotent = false
        )
            : this(
                targetAddress,
                item,
                recordRandom,
                idempotent,
                Tuple.Create(transferFrom, transferTo, transferAmount)
            )
        {
        }

        public Address TargetAddress { get; private set; }

        public string? Item { get; private set; }

        public bool RecordRandom { get; private set; }

        public bool Idempotent { get; private set; }

        public Tuple<Address, Address, BigInteger>? Transfer { get; private set; }

        public IEnumerable<PublicKey>? Validators { get; private set; }

        public IValue PlainValue
        {
            get
            {
                var plainValue = Bencodex.Types.Dictionary.Empty;
                if (!(Item is null))
                {
                    plainValue = new Bencodex.Types.Dictionary(
                        new Dictionary<string, IValue>
                        {
                            ["item"] = (Text)Item,
                            ["target_address"] = TargetAddress.Bencoded,
                        });
                }

                if (RecordRandom)
                {
                    // In order to avoid changing tx signatures in many test
                    // fixtures, adds field only if RecordRandom = true.
                    plainValue = plainValue.Add("record_random", true);
                }

                if (Idempotent)
                {
                    plainValue = plainValue.Add("idempotent", Idempotent);
                }

                if (!(Transfer is null))
                {
                    plainValue = plainValue
                        .Add("transfer_from", Transfer.Item1.Bencoded)
                        .Add("transfer_to", Transfer.Item2.Bencoded)
                        .Add("transfer_amount", Transfer.Item3);
                }

                if (!(Validators is null))
                {
                    plainValue = plainValue
                        .Add("validators", new List(Validators.Select(p => p.Format(false))));
                }

                return plainValue;
            }
        }

        public IWorld Execute(IActionContext context)
        {
            IWorld world = context.PreviousState;
            if (Item is null)
            {
                return world;
            }

            IAccount account = world.GetAccount(ReservedAddresses.LegacyAccount);
            string? items = (Text?)account.GetState(TargetAddress);

            if (Idempotent)
            {
                var splitItems = items is null ? new[] { Item } : (items + "," + Item).Split(',');
                items = string.Join(
                    ",",
                    splitItems.OrderBy(x =>
                        float.Parse(
                            x.Substring(4),
                            NumberStyles.Float,
                            CultureInfo.InvariantCulture
                        )
                    )
                );
            }
            else
            {
                items = items is null ? Item : $"{items},{Item}";
            }

            if (RecordRandom)
            {
                account = account.SetState(
                    RandomRecordsAddress,
                    (Integer)context.GetRandom().Next()
                );
            }

            if (Item.Equals("D"))
            {
                Item = Item.ToUpperInvariant();
            }

            account = account.SetState(TargetAddress, (Text)items);

            if (!(Transfer is null))
            {
                account = account.TransferAsset(
                    context,
                    sender: Transfer.Item1,
                    recipient: Transfer.Item2,
                    value: FungibleAssetValue.FromRawValue(DumbCurrency, Transfer.Item3),
                    allowNegativeBalance: true
                );
            }

            if (!(Validators is null))
            {
                account = Validators.Aggregate(
                    account,
                    (current, validator) =>
                        current.SetValidator(new Validator(validator, BigInteger.One)));
            }

            return world.SetAccount(ReservedAddresses.LegacyAccount, account);
        }

        public void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Bencodex.Types.Dictionary)plainValue);
        }

        public void LoadPlainValue(Dictionary plainValue)
        {
            Item = (Text)plainValue["item"];
            TargetAddress = new Address(plainValue["target_address"]);
            RecordRandom =
                plainValue.ContainsKey((IKey)(Text)"record_random") &&
                plainValue["record_random"] is Boolean r &&
                r.Value;

            if (plainValue.ContainsKey((IKey)(Text)"idempotent"))
            {
                Idempotent = (Boolean)plainValue["idempotent"];
            }

            if (plainValue.TryGetValue((Text)"transfer_from", out IValue from) &&
                plainValue.TryGetValue((Text)"transfer_to", out IValue to) &&
                plainValue.TryGetValue((Text)"transfer_amount", out IValue a) &&
                a is Integer amount)
            {
                Transfer = Tuple.Create(new Address(from), new Address(to), amount.Value);
            }

            if (plainValue.ContainsKey((IKey)(Text)"validators"))
            {
                Validators = ((List)plainValue["validators"])
                    .Select(value => new PublicKey(((Binary)value).ByteArray));
            }
        }

        public bool Equals(DumbAction? other)
        {
            return !(other is null) && (
                ReferenceEquals(this, other) || (
                    TargetAddress.Equals(other.TargetAddress) &&
                    string.Equals(Item, other.Item))
            );
        }

        public override bool Equals(object? obj)
        {
            return !(obj is null) && (
                ReferenceEquals(this, obj) ||
                (obj is DumbAction other && Equals(other))
            );
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hashCode = TargetAddress.GetHashCode();
                hashCode = (hashCode * 397) ^ (Item != null ? Item.GetHashCode() : 0);
                return hashCode;
            }
        }

        public override string ToString()
        {
            const string T = "true", F = "false";
            string transfer = Transfer is Tuple<Address, Address, BigInteger> t
                ? $"({t.Item1}, {t.Item2}, {t.Item3})"
                : "null";
            string validators = Validators is null
                ? "none"
                : Validators
                    .Aggregate(string.Empty, (s, key) => s + key.Format(false) + ", ")
                    .TrimEnd(',', ' ');
            return $"{nameof(DumbAction)} {{ " +
                $"{nameof(TargetAddress)} = {TargetAddress}, " +
                $"{nameof(Item)} = {Item ?? string.Empty}, " +
                $"{nameof(RecordRandom)} = {(RecordRandom ? T : F)}, " +
                $"{nameof(Idempotent)} = {(Idempotent ? T : F)}, " +
                $"{nameof(Transfer)} = {transfer} " +
                $"{nameof(Validators)} = {validators} " +
                "}";
        }
    }
}
