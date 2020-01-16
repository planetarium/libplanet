using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Threading;
using Bencodex.Types;
using Libplanet.Action;
using Boolean = Bencodex.Types.Boolean;

namespace Libplanet.Tests.Common.Action
{
    public sealed class DumbAction : IAction, IEquatable<DumbAction>
    {
        public static readonly Address RandomRecordsAddress =
            new Address("7811C3fAa0f9Cc41F7971c3d9b031B1095b20AB2");

        public DumbAction()
        {
        }

        public DumbAction(
            Address targetAddress,
            string item,
            bool recordRehearsal = false,
            bool recordRandom = false,
            bool idempotent = false
        )
        {
            Idempotent = idempotent;
            TargetAddress = targetAddress;
            Item = item;
            RecordRehearsal = recordRehearsal;
            RecordRandom = recordRandom;
        }

        public static EventHandler<IAction> RenderEventHandler { get; set; }

        public static AsyncLocal<ImmutableList<RenderRecord>>
            RenderRecords { get; } =
                new AsyncLocal<ImmutableList<RenderRecord>>();

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

        public IValue PlainValue
        {
            get
            {
                var plainValue = new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
                {
                    [(Text)"item"] = (Text)Item,
                    [(Text)"target_address"] = new Binary(TargetAddress.ToByteArray()),
                    [(Text)"record_rehearsal"] = new Bencodex.Types.Boolean(RecordRehearsal),
                });
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

            IAccountStateDelta nextState = states.SetState(TargetAddress, (Text)items);

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

        public void Render(
            IActionContext context,
            IAccountStateDelta nextStates)
        {
            if (RenderRecords.Value is null)
            {
                RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            }

            RenderRecords.Value = RenderRecords.Value.Add(new RenderRecord()
            {
                Render = true,
                Action = this,
                Context = context,
                NextStates = nextStates,
            });

            RenderEventHandler?.Invoke(this, this);
        }

        public void Unrender(
            IActionContext context,
            IAccountStateDelta nextStates)
        {
            if (RenderRecords.Value is null)
            {
                RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            }

            RenderRecords.Value = RenderRecords.Value.Add(new RenderRecord()
            {
                Unrender = true,
                Action = this,
                Context = context,
                NextStates = nextStates,
            });
        }

        public void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Bencodex.Types.Dictionary)plainValue);
        }

        public void LoadPlainValue(
            Dictionary plainValue
        )
        {
            Item = plainValue.GetValue<Text>("item");
            TargetAddress = new Address(plainValue.GetValue<Binary>("target_address").Value);
            RecordRehearsal = plainValue.GetValue<Boolean>("record_rehearsal").Value;
            RecordRandom =
                plainValue.ContainsKey((Text)"record_random") &&
                plainValue["record_random"] is Boolean r &&
                r.Value;

            if (plainValue.ContainsKey((Text)"idempotent"))
            {
                Idempotent = plainValue.GetValue<Boolean>("idempotent");
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
    }
}
