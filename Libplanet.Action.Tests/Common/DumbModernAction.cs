#nullable enable
using System.Collections.Immutable;
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
        public static readonly DumbModernAction NoOp = DumbModernAction.Create();

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

        public (Address At, string Item)? Append { get; private set; }

        public (Address? From, Address? To, BigInteger Amount)? Transfer { get; private set; }

        public ImmutableList<Validator>? Validators { get; private set; }

        public bool RecordRandom { get; private set; }

        public IValue PlainValue
        {
            get
            {
                var plainValue = Dictionary.Empty
                    .Add("type_id", TypeId);
                if (Append is { } set)
                {
                    plainValue = plainValue
                        .Add("target_address", set.At.Bencoded)
                        .Add("item", set.Item);
                }

                if (Transfer is { } transfer)
                {
                    plainValue = plainValue
                        .Add("transfer_from", transfer.From?.Bencoded ?? Null.Value)
                        .Add("transfer_to", transfer.To?.Bencoded ?? Null.Value)
                        .Add("transfer_amount", transfer.Amount);
                }

                if (Validators is { } validators)
                {
                    plainValue = plainValue
                        .Add("validators", new List(validators.Select(v => v.Bencoded)));
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

        public static DumbModernAction Create(
            (Address At, string Item)? append = null,
            (Address? From, Address? To, BigInteger Amount)? transfer = null,
            IEnumerable<Validator>? validators = null,
            bool recordRandom = false)
        {
            if (transfer is { } t && t.From is null && t.To is null)
            {
                throw new ArgumentException(
                    $"From and To of {nameof(transfer)} cannot both be null when " +
                    $"{nameof(transfer)} is not null: {transfer}");
            }

            return new DumbModernAction()
            {
                Append = append,
                Transfer = transfer,
                Validators = validators?.ToImmutableList(),
                RecordRandom = recordRandom,
            };
        }

        public IWorld Execute(IActionContext context)
        {
            IWorld world = context.PreviousState;

            if (Append is { } append)
            {
                IAccount account = world.GetAccount(DumbModernAddress);
                string? items = (Text?)account.GetState(append.At);
                items = items is null ? append.Item : $"{items},{append.Item}";
                account = account.SetState(append.At, (Text)items!);
                world = world.SetAccount(DumbModernAddress, account);
            }

            if (Transfer is { } transfer)
            {
                world = (transfer.From, transfer.To) switch
                {
                    (Address from, Address to) => world.TransferAsset(
                        context,
                        sender: from,
                        recipient: to,
                        value: FungibleAssetValue.FromRawValue(DumbCurrency, transfer.Amount),
                        allowNegativeBalance: true),
                    (null, Address to) => world.MintAsset(
                        context,
                        recipient: to,
                        value: FungibleAssetValue.FromRawValue(DumbCurrency, transfer.Amount)),
                    (Address from, null) => world.BurnAsset(
                        context,
                        owner: from,
                        value: FungibleAssetValue.FromRawValue(DumbCurrency, transfer.Amount)),
                    _ => throw new ArgumentException(
                        $"Both From and To cannot be null for {transfer}"),
                };
            }

            if (Validators is { } validators)
            {
                world = validators.Aggregate(
                    world,
                    (current, validator) => current.SetValidator(validator));
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
                item is Text i)
            {
                Append = (new Address(at), i);
            }

            if (plainValue.TryGetValue((Text)"transfer_from", out IValue f) &&
                plainValue.TryGetValue((Text)"transfer_to", out IValue t) &&
                plainValue.TryGetValue((Text)"transfer_amount", out IValue a) &&
                a is Integer amount)
            {
                Address? from = f is Null ? null : new Address(f);
                Address? to = t is Null ? null : new Address(t);
                Transfer = (from, to, amount.Value);
            }

            if (plainValue.ContainsKey((Text)"validators"))
            {
                Validators = ((List)plainValue["validators"])
                    .Select(value => new Validator(value))
                    .ToImmutableList();
            }

            RecordRandom =
                plainValue.ContainsKey((Text)"record_random") &&
                plainValue["record_random"] is Boolean r &&
                r.Value;
        }

        public override string ToString()
        {
            const string T = "true", F = "false";
            const string N = "null";
            const string E = "empty";
            string append = Append is { } a
                ? $"({a.At}, {a.Item})"
                : N;
            string transfer = Transfer is { } t
                ? $"({t.From?.ToString() ?? N}, {t.To?.ToString() ?? N}, {t.Amount})"
                : N;
            string validators = Validators is { } vs && vs.Any()
                ? string.Join(",", vs.Select(v => v.OperatorAddress))
                : E;
            return $"{nameof(DumbModernAction)} {{ " +
                $"{nameof(Append)} = {append}, " +
                $"{nameof(Transfer)} = {transfer}, " +
                $"{nameof(Validators)} = {validators}, " +
                $"{nameof(RecordRandom)} = {(RecordRandom ? T : F)}, " +
                $"}}";
        }
    }
}
