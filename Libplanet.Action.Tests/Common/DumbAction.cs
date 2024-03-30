using System.Numerics;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using Boolean = Bencodex.Types.Boolean;

namespace Libplanet.Action.Tests.Common
{
    public sealed class DumbAction : IAction
    {
        public static readonly Address RandomRecordsAddress =
            new Address("7811C3fAa0f9Cc41F7971c3d9b031B1095b20AB2");

        public static readonly Currency DumbCurrency =
            Currency.Uncapped("DUMB", 0, null);

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
            (Address From, Address To, BigInteger Amount)? transfer = null,
            bool recordRandom = false)
        {
            TargetAddress = targetAddress;
            Item = item;
            RecordRandom = recordRandom;
            Transfer = transfer;
        }

        public Address TargetAddress { get; private set; }

        public string Item { get; private set; }

        public bool RecordRandom { get; private set; }

        public (Address From, Address To, BigInteger Amount)? Transfer { get; private set; }

        public IEnumerable<PublicKey> Validators { get; private set; }

        public IValue PlainValue
        {
            get
            {
                var plainValue = Dictionary.Empty;
                if (Item is { })
                {
                    plainValue = plainValue
                        .Add("item", Item)
                        .Add("target_address", TargetAddress.Bencoded);
                }

                if (RecordRandom)
                {
                    // In order to avoid changing tx signatures in many test
                    // fixtures, adds field only if RecordRandom = true.
                    plainValue = plainValue.Add("record_random", true);
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
            string items = (Text?)account.GetState(TargetAddress);

            items = items is null ? Item : $"{items},{Item}";

            if (RecordRandom)
            {
                account = account.SetState(
                    RandomRecordsAddress,
                    (Integer)context.GetRandom().Next()
                );
            }

            account = account.SetState(TargetAddress, (Text)items);
            world = world.SetAccount(ReservedAddresses.LegacyAccount, account);

            if (Validators is { } validators)
            {
                world = validators.Aggregate(
                    world,
                    (current, validator) =>
                        current.SetValidator(new Validator(validator, BigInteger.One)));
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

            return world;
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

            if (plainValue.TryGetValue((Text)"transfer_from", out IValue from) &&
                plainValue.TryGetValue((Text)"transfer_to", out IValue to) &&
                plainValue.TryGetValue((Text)"transfer_amount", out IValue a) &&
                a is Integer amount)
            {
                Transfer = (new Address(from), new Address(to), amount.Value);
            }

            if (plainValue.ContainsKey((IKey)(Text)"validators"))
            {
                Validators = ((List)plainValue["validators"])
                    .Select(value => new PublicKey(((Binary)value).ByteArray));
            }
        }

        public override string ToString()
        {
            const string T = "true", F = "false";
            string transfer = Transfer is { } t
                ? $"({t.From}, {t.To}, {t.Amount})"
                : "null";
            string validators = Validators is { } vs
                ? vs
                    .Aggregate(string.Empty, (s, key) => s + key.Format(false) + ", ")
                    .TrimEnd(',', ' ')
                : "none";
            return $"{nameof(DumbAction)} {{ " +
                $"{nameof(TargetAddress)} = {TargetAddress}, " +
                $"{nameof(Item)} = {Item ?? string.Empty}, " +
                $"{nameof(RecordRandom)} = {(RecordRandom ? T : F)}, " +
                $"{nameof(Transfer)} = {transfer} " +
                $"{nameof(Validators)} = {validators} " +
                "}";
        }
    }
}
