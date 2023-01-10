using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Numerics;
using System.Threading;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Crypto;
using Boolean = Bencodex.Types.Boolean;

namespace Libplanet.Tests.Common.Action
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
            bool recordRehearsal = false,
            bool recordRandom = false,
            bool idempotent = false,
            Tuple<Address, Address, BigInteger> transfer = null)
        {
            Idempotent = idempotent;
            TargetAddress = targetAddress;
            Item = item;
            RecordRehearsal = recordRehearsal;
            RecordRandom = recordRandom;
            Transfer = transfer;
        }

        public DumbAction(
            Address targetAddress,
            string item,
            Address transferFrom,
            Address transferTo,
            BigInteger transferAmount,
            bool recordRehearsal = false,
            bool recordRandom = false,
            bool idempotent = false
        )
            : this(
                targetAddress,
                item,
                recordRehearsal,
                recordRandom,
                idempotent,
                Tuple.Create(transferFrom, transferTo, transferAmount)
            )
        {
        }

        public static AsyncLocal<ImmutableList<ExecuteRecord>>
            ExecuteRecords { get; } = new AsyncLocal<ImmutableList<ExecuteRecord>>();

        public static AsyncLocal<ImmutableList<(Address, string)>>
            RehearsalRecords { get; } =
                new AsyncLocal<ImmutableList<(Address, string)>>();

        public Address TargetAddress { get; private set; }

        public string Item { get; private set; }

        public bool RecordRehearsal { get; private set; }

        public bool RecordRandom { get; private set; }

        public bool Idempotent { get; private set; }

        public Tuple<Address, Address, BigInteger> Transfer { get; private set; }

        public IEnumerable<PublicKey> Validators { get; private set; }

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
                            ["target_address"] = new Binary(TargetAddress.ByteArray),
                            ["record_rehearsal"] = new Bencodex.Types.Boolean(RecordRehearsal),
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
                        .Add("transfer_from", Transfer.Item1.ByteArray)
                        .Add("transfer_to", Transfer.Item2.ByteArray)
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

        public IAccountStateDelta Execute(IActionContext context)
        {
            if (RehearsalRecords.Value is null)
            {
                RehearsalRecords.Value = ImmutableList<(Address, string)>.Empty;
            }

            if (context.Rehearsal)
            {
                RehearsalRecords.Value =
                    RehearsalRecords.Value.Add((TargetAddress, Item));
            }

            IAccountStateDelta states = context.PreviousStates;
            if (Item is null)
            {
                return states;
            }

            string items = (Text?)states.GetState(TargetAddress);
            string item = RecordRehearsal
                ? $"{Item}:{context.Rehearsal}"
                : Item;

            if (Idempotent)
            {
                var splitedItems = items is null ? new[] { item } : (items + "," + item).Split(',');
                items = string.Join(
                    ",",
                    splitedItems.OrderBy(x =>
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
                items = items is null ? item : $"{items},{item}";
            }

            if (RecordRandom)
            {
                states = states.SetState(
                    RandomRecordsAddress,
                    (Integer)context.Random.Next()
                );
            }

            if (Item.Equals("D") && !context.Rehearsal)
            {
                Item = Item.ToUpperInvariant();
            }

            IAccountStateDelta nextState = states.SetState(TargetAddress, (Text)items);

            if (!(Transfer is null))
            {
                nextState = nextState.TransferAsset(
                    sender: Transfer.Item1,
                    recipient: Transfer.Item2,
                    value: FungibleAssetValue.FromRawValue(DumbCurrency, Transfer.Item3),
                    allowNegativeBalance: true
                );
            }

            if (!(Validators is null))
            {
                nextState = Validators.Aggregate(
                    nextState,
                    (current, validator) => current.SetValidator(validator, BigInteger.One));
            }

            if (ExecuteRecords.Value is null)
            {
                ExecuteRecords.Value = ImmutableList<ExecuteRecord>.Empty;
            }

            ExecuteRecords.Value = ExecuteRecords.Value.Add(new ExecuteRecord()
            {
                Action = this,
                NextState = nextState,
                Rehearsal = context.Rehearsal,
            });

            return nextState;
        }

        public void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Bencodex.Types.Dictionary)plainValue);
        }

        public void LoadPlainValue(Dictionary plainValue)
        {
            Item = plainValue.GetValue<Text>("item");
            TargetAddress = new Address(plainValue.GetValue<Binary>("target_address"));
            RecordRehearsal = plainValue.GetValue<Boolean>("record_rehearsal").Value;
            RecordRandom =
                plainValue.ContainsKey((IKey)(Text)"record_random") &&
                plainValue["record_random"] is Boolean r &&
                r.Value;

            if (plainValue.ContainsKey((IKey)(Text)"idempotent"))
            {
                Idempotent = plainValue.GetValue<Boolean>("idempotent");
            }

            if (plainValue.TryGetValue((Text)"transfer_from", out IValue f) &&
                f is Binary from &&
                plainValue.TryGetValue((Text)"transfer_to", out IValue t) &&
                t is Binary to &&
                plainValue.TryGetValue((Text)"transfer_amount", out IValue a) &&
                a is Integer amount)
            {
                Transfer = Tuple.Create(new Address(from), new Address(to), amount.Value);
            }

            if (plainValue.ContainsKey((IKey)(Text)"validators"))
            {
                Validators = plainValue.GetValue<List>("validators")
                    .Select(value => new PublicKey(((Binary)value).ByteArray));
            }
        }

        public bool Equals(DumbAction other)
        {
            return !(other is null) && (
                ReferenceEquals(this, other) || (
                    TargetAddress.Equals(other.TargetAddress) &&
                    string.Equals(Item, other.Item) &&
                    RecordRehearsal == other.RecordRehearsal
                )
            );
        }

        public override bool Equals(object obj)
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
                hashCode = (hashCode * 397) ^
                    (Item != null ? Item.GetHashCode() : 0);
                hashCode = (hashCode * 397) ^ RecordRehearsal.GetHashCode();
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
                $"{nameof(RecordRehearsal)} = {(RecordRehearsal ? T : F)}, " +
                $"{nameof(RecordRandom)} = {(RecordRandom ? T : F)}, " +
                $"{nameof(Idempotent)} = {(Idempotent ? T : F)}, " +
                $"{nameof(Transfer)} = {transfer} " +
                $"{nameof(Validators)} = {validators} " +
                "}";
        }
    }
}
