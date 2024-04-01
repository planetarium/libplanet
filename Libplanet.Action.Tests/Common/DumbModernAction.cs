#nullable enable
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using Boolean = Bencodex.Types.Boolean;

namespace Libplanet.Action.Tests.Common
{
    public sealed class DumbModernAction : IAction
    {
        public static readonly Text TypeId = new Text(nameof(DumbAction));

        public static readonly Address DumbModernAddress =
            new Address("0123456789abcdef0123456789abcdef12345678");

        public static readonly Address RandomRecordsAddress =
            new Address("7811C3fAa0f9Cc41F7971c3d9b031B1095b20AB2");

        public static readonly Currency DumbCurrency =
            Currency.Uncapped("DUMB", 0, null);

        public DumbModernAction()
        {
        }

        public DumbModernAction(
            (Address At, string Item)? set,
            (Address From, Address To, BigInteger Amount)? transfer = null,
            IEnumerable<PublicKey>? validators = null,
            bool recordRandom = false)
        {
            Set = set;
            Transfer = transfer;
            Validators = validators;
            RecordRandom = recordRandom;
        }

        public (Address At, string Item)? Set { get; private set; }

        public (Address From, Address To, BigInteger Amount)? Transfer { get; private set; }

        public IEnumerable<PublicKey>? Validators { get; private set; }

        public bool RecordRandom { get; private set; }

        public IValue PlainValue
        {
            get
            {
                var plainValue = Dictionary.Empty
                    .Add("type_id", TypeId);
                if (Set is { } set)
                {
                    plainValue = plainValue
                        .Add("target_address", set.At.Bencoded)
                        .Add("item", set.Item);
                }

                if (Transfer is { } transfer)
                {
                    plainValue = plainValue
                        .Add("transfer_from", transfer.From.Bencoded)
                        .Add("transfer_to", transfer.To.Bencoded)
                        .Add("transfer_amount", transfer.Amount);
                }

                if (Validators is { } validators)
                {
                    plainValue = plainValue
                        .Add("validators", new List(validators.Select(p => p.Format(false))));
                }

                if (RecordRandom)
                {
                    // In order to avoid changing tx signatures in many test
                    // fixtures, adds field only if RecordRandom = true.
                    plainValue = plainValue.Add("record_random", true);
                }

                return plainValue;
            }
        }

        public IWorld Execute(IActionContext context)
        {
            IWorld world = context.PreviousState;

            if (Set is { } set)
            {
                IAccount account = world.GetAccount(DumbModernAddress);
                string? items = (Text?)account.GetState(set.At);
                items = items is null ? set.Item : $"{items},{set.Item}";
                account = account.SetState(set.At, (Text)items!);
                world = world.SetAccount(DumbModernAddress, account);
            }

            if (Transfer is { } transfer)
            {
                world = world.TransferAsset(
                    context,
                    sender: transfer.From,
                    recipient: transfer.To,
                    value: FungibleAssetValue.FromRawValue(DumbCurrency, transfer.Amount),
                    allowNegativeBalance: true);
            }

            if (Validators is { } validators)
            {
                world = validators.Aggregate(
                    world,
                    (current, validator) =>
                        current.SetValidator(new Validator(validator, BigInteger.One)));
            }

            if (RecordRandom)
            {
                IAccount account = world.GetAccount(ReservedAddresses.LegacyAccount);
                account = account.SetState(
                    RandomRecordsAddress,
                    (Integer)context.GetRandom().Next());
                world = world.SetAccount(ReservedAddresses.LegacyAccount, account);
            }

            return world;
        }

        public void LoadPlainValue(IValue plainValue) => LoadPlainValue((Dictionary)plainValue);

        public void LoadPlainValue(Dictionary plainValue)
        {
            if (!plainValue["type_id"].Equals(TypeId))
            {
                throw new ArgumentException(
                    $"An invalid form of {nameof(plainValue)} was given: {plainValue}");
            }

            if (plainValue.TryGetValue((Text)"target_address", out IValue at) &&
                plainValue.TryGetValue((Text)"item", out IValue item) &&
                item is Text t)
            {
                Set = (new Address(at), t);
            }

            if (plainValue.TryGetValue((Text)"transfer_from", out IValue from) &&
                plainValue.TryGetValue((Text)"transfer_to", out IValue to) &&
                plainValue.TryGetValue((Text)"transfer_amount", out IValue a) &&
                a is Integer amount)
            {
                Transfer = (new Address(from), new Address(to), amount.Value);
            }

            if (plainValue.ContainsKey((Text)"validators"))
            {
                Validators = ((List)plainValue["validators"])
                    .Select(value => new PublicKey(((Binary)value).ByteArray));
            }

            RecordRandom =
                plainValue.ContainsKey((Text)"record_random") &&
                plainValue["record_random"] is Boolean r &&
                r.Value;
        }

        public override string ToString()
        {
            const string T = "true", F = "false";
            string set = Set is { } s
                ? $"({s.At}, {s.Item})"
                : "null";
            string transfer = Transfer is { } t
                ? $"({t.From}, {t.To}, {t.Amount})"
                : "null";
            string validators = Validators is { } vs
                ? vs
                    .Aggregate(string.Empty, (s, key) => s + key.Format(false) + ", ")
                    .TrimEnd(',', ' ')
                : "none";
            return $"{nameof(DumbModernAction)} {{ " +
                $"{nameof(Set)} = {set}, " +
                $"{nameof(Transfer)} = {transfer}, " +
                $"{nameof(Validators)} = {validators}, " +
                $"{nameof(RecordRandom)} = {(RecordRandom ? T : F)}, " +
                $"}}";
        }
    }
}
